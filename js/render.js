import { nusukSection, rawdahSection } from './content/nusuk.js';
import { checklistSection } from './content/checklist.js';
import { hajjDays } from './content/hajj-days.js';
import { duas, duasList } from './content/duas.js';
import { glossaryTerms } from './content/glossary.js';
import { isCompleted, toggleCompleted, countCompleted, getNote, setNote } from './state.js';

const content = document.getElementById('content');
const sidebarNav = document.getElementById('sidebar-nav');

function allNusukIds() {
    return [...nusukSection.steps.map((s) => s.id), ...rawdahSection.steps.map((s) => s.id)];
}

function allChecklistIds() {
    return checklistSection.groups.flatMap((g) => g.items.map((i) => i.id));
}

function checklistGroupIds(groupId) {
    const group = checklistSection.groups.find((g) => g.id === groupId);
    return group ? group.items.map((i) => i.id) : [];
}

function dayChecklistIds(dayId) {
    const day = hajjDays.find((d) => d.id === dayId);
    return day ? day.steps.map((s) => s.id) : [];
}

function allHajjIds() {
    return hajjDays.flatMap((d) => d.steps.map((s) => s.id));
}

function allItemIds() {
    return [...allNusukIds(), ...allChecklistIds(), ...allHajjIds()];
}

function pct(done, total) {
    if (!total) return 0;
    return Math.round((done / total) * 100);
}

function escHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function renderContent(text) {
    const paragraphs = text.split(/\n\n+/);
    return paragraphs
        .map((para) => {
            const lines = para.split('\n');
            const listItems = lines.filter((l) => l.startsWith('- '));
            const bodyLines = lines.filter((l) => !l.startsWith('- '));
            if (listItems.length > 0) {
                const intro = bodyLines.join(' ').trim();
                const lis = listItems.map((l) => `<li>${escHtml(l.slice(2))}</li>`).join('');
                return (intro ? `<p>${escHtml(intro)}</p>` : '') + `<ul>${lis}</ul>`;
            }
            return `<p>${escHtml(para)}</p>`;
        })
        .join('');
}

function renderProgressBar(done, total, label) {
    const p = pct(done, total);
    return `<div class="progress-bar-wrap" role="progressbar" aria-valuenow="${done}" aria-valuemin="0" aria-valuemax="${total}" aria-label="${escHtml(label)}">
    <div class="progress-bar-fill" style="width:${p}%"></div>
    <span class="progress-label">${done} / ${total}</span>
  </div>`;
}

function renderDua(dua, compact) {
    if (!dua) return '';
    const noteHtml = dua.note ? `<p class="dua-note">${escHtml(dua.note)}</p>` : '';
    const sourceHtml = dua.source ? `<p class="dua-source">Source: ${escHtml(dua.source)}</p>` : '';
    const arabicHtml = dua.arabic
        ? `<p class="dua-arabic" lang="ar" dir="rtl">${escHtml(dua.arabic)}</p>`
        : '';
    const translitHtml = dua.transliteration
        ? `<p class="dua-translit">${escHtml(dua.transliteration)}</p>`
        : '';
    const translationHtml = dua.translation
        ? `<p class="dua-translation">${escHtml(dua.translation)}</p>`
        : '';

    if (compact) {
        return `<div class="dua-card dua-card--compact">
      <h4 class="dua-name">${escHtml(dua.name)}</h4>
      ${arabicHtml}
      ${translitHtml}
      ${translationHtml}
      ${noteHtml}
      ${sourceHtml}
    </div>`;
    }

    return `<div class="dua-card">
    <h3 class="dua-name">${escHtml(dua.name)}</h3>
    ${arabicHtml}
    ${translitHtml}
    ${translationHtml}
    ${noteHtml}
    ${sourceHtml}
  </div>`;
}

function renderChecklistItem(item, showNoteField) {
    const checked = isCompleted(item.id);
    const note = getNote(item.id);
    const noteText = item.note ? `<p class="item-guidance">${escHtml(item.note)}</p>` : '';
    const userNote = note
        ? `<p class="item-user-note" data-id="${escHtml(item.id)}">${escHtml(note)}</p>`
        : '';
    const noteBtnHtml = showNoteField
        ? `<button class="note-toggle-btn" data-id="${escHtml(item.id)}" aria-expanded="false" aria-label="${note ? 'Edit note' : 'Add note'}" title="${note ? 'Edit note' : 'Add note'}">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true"><path d="M9.5 1.5l2 2-7 7H2.5v-2l7-7z" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>`
        : '';
    const noteFieldHtml = showNoteField
        ? `<div class="note-field" hidden>
    <textarea class="note-input" data-id="${escHtml(item.id)}" placeholder="Add a personal note for this item…" rows="2">${escHtml(note)}</textarea>
    <div class="note-actions"><button class="note-save btn btn--small" data-id="${escHtml(item.id)}">Save</button><button class="note-cancel btn btn--small btn--ghost" data-id="${escHtml(item.id)}">Cancel</button></div>
  </div>`
        : '';

    return `<li class="checklist-item${checked ? ' is-checked' : ''}${note ? ' has-note' : ''}" data-id="${escHtml(item.id)}">
    <div class="checklist-row">
      <label class="checklist-label">
        <input type="checkbox" class="checklist-cb" data-id="${escHtml(item.id)}" ${checked ? 'checked' : ''} />
        <span class="checklist-text">${escHtml(item.label)}${item.optional ? ' <span class="optional-badge">Optional</span>' : ''}</span>
      </label>
      ${noteBtnHtml}
    </div>
    ${noteText}
    ${userNote}
    ${noteFieldHtml}
  </li>`;
}

function renderStepItem(step) {
    const checked = isCompleted(step.id);
    const noteText = step.note ? `<p class="item-guidance">${escHtml(step.note)}</p>` : '';
    return `<li class="checklist-item${checked ? ' is-checked' : ''}" data-id="${escHtml(step.id)}">
    <label class="checklist-label">
      <input type="checkbox" class="checklist-cb" data-id="${escHtml(step.id)}" ${checked ? 'checked' : ''} />
      <span class="checklist-text">${escHtml(step.label)}</span>
    </label>
    ${noteText}
  </li>`;
}

export function updateGlobalProgress() {
    const ids = allItemIds();
    const done = ids.filter((id) => isCompleted(id)).length;
    const total = ids.length;
    const p = pct(done, total);
    const bar = document.getElementById('global-progress-bar');
    const label = document.getElementById('global-progress-label');
    if (bar) bar.style.width = p + '%';
    if (label) label.textContent = p + '%';
}

export function renderSidebar(currentHash) {
    const nusukIds = allNusukIds();
    const nusukDone = countCompleted(nusukIds);
    const nusukTotal = nusukIds.length;

    const checklistIds = allChecklistIds();
    const clDone = countCompleted(checklistIds);
    const clTotal = checklistIds.length;

    const hajjIds = allHajjIds();
    const hajjDone = countCompleted(hajjIds);
    const hajjTotal = hajjIds.length;

    const isActive = (hash) =>
        currentHash === hash || currentHash.startsWith(hash + '/') ? 'is-active' : '';

    const nusukActive = currentHash.startsWith('#/nusuk') ? 'is-active' : '';
    const clActive = currentHash.startsWith('#/checklist') ? 'is-active' : '';
    const hajjActive = currentHash.startsWith('#/hajj') ? 'is-active' : '';
    const refActive = currentHash.startsWith('#/reference') ? 'is-active' : '';

    const clGroupLinks = checklistSection.groups
        .map((g) => {
            const gIds = g.items.map((i) => i.id);
            const gDone = countCompleted(gIds);
            const hash = `#/checklist/${g.id.replace('checklist.', '')}`;
            const active = currentHash === hash ? 'is-active' : '';
            return `<li><a href="${hash}" class="sidebar-sub-link ${active}">${escHtml(g.title)} <span class="sidebar-count">${gDone}/${gIds.length}</span></a></li>`;
        })
        .join('');

    const hajjDayLinks = hajjDays
        .map((d) => {
            const dIds = d.steps.map((s) => s.id);
            const dDone = countCompleted(dIds);
            const hash = `#/hajj/${d.slug}`;
            const active = currentHash === hash ? 'is-active' : '';
            const optionalBadge = d.isOptional
                ? ' <span class="sidebar-badge">Optional</span>'
                : '';
            return `<li><a href="${hash}" class="sidebar-sub-link ${active}">${escHtml(d.title)}${optionalBadge} <span class="sidebar-count">${dDone}/${dIds.length}</span></a></li>`;
        })
        .join('');

    sidebarNav.innerHTML = `
    <ul class="sidebar-nav-list">
      <li class="sidebar-nav-item">
        <a href="#/" class="sidebar-top-link ${isActive('#/')}" aria-label="Home">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 1L1 7v8h5v-5h4v5h5V7L8 1z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>
          Welcome
        </a>
      </li>

      <li class="sidebar-nav-item sidebar-section ${nusukActive ? 'is-open' : ''}">
        <button class="sidebar-section-btn ${nusukActive}" aria-expanded="${!!nusukActive}">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.4"/><path d="M5 8h6M5 5.5h4M5 10.5h3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
          Nusuk
          <span class="sidebar-count">${nusukDone}/${nusukTotal}</span>
          <svg class="chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3 4.5l3 3 3-3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
        </button>
        <ul class="sidebar-sub-list">
          <li><a href="#/nusuk" class="sidebar-sub-link ${currentHash === '#/nusuk' ? 'is-active' : ''}">Hajj <span class="sidebar-count">${countCompleted(nusukSection.steps.map((s) => s.id))}/${nusukSection.steps.length}</span></a></li>
          <li><a href="#/nusuk/rawdah" class="sidebar-sub-link ${currentHash === '#/nusuk/rawdah' ? 'is-active' : ''}">Rawdah Permit <span class="sidebar-count">${countCompleted(rawdahSection.steps.map((s) => s.id))}/${rawdahSection.steps.length}</span></a></li>
        </ul>
      </li>

      <li class="sidebar-nav-item sidebar-section ${clActive ? 'is-open' : ''}">
        <button class="sidebar-section-btn ${clActive}" aria-expanded="${!!clActive}">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 3H3a1 1 0 00-1 1v9a1 1 0 001 1h10a1 1 0 001-1V4a1 1 0 00-1-1h-3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><rect x="5" y="1" width="6" height="3" rx="1" stroke="currentColor" stroke-width="1.4"/><path d="M5 8l1.5 1.5L9 7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Pre-Travel Checklist
          <span class="sidebar-count">${clDone}/${clTotal}</span>
          <svg class="chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3 4.5l3 3 3-3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
        </button>
        <ul class="sidebar-sub-list">
          ${clGroupLinks}
        </ul>
      </li>

      <li class="sidebar-nav-item sidebar-section ${hajjActive ? 'is-open' : ''}">
        <button class="sidebar-section-btn ${hajjActive}" aria-expanded="${!!hajjActive}">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="6" r="3" stroke="currentColor" stroke-width="1.4"/><path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
          Hajj Day-by-Day
          <span class="sidebar-count">${hajjDone}/${hajjTotal}</span>
          <svg class="chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3 4.5l3 3 3-3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
        </button>
        <ul class="sidebar-sub-list">
          ${hajjDayLinks}
        </ul>
      </li>

      <li class="sidebar-nav-item sidebar-section ${refActive ? 'is-open' : ''}">
        <button class="sidebar-section-btn ${refActive}" aria-expanded="${!!refActive}">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 1a7 7 0 100 14A7 7 0 008 1z" stroke="currentColor" stroke-width="1.4"/><path d="M8 7v5M8 5v.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
          Reference
          <svg class="chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3 4.5l3 3 3-3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
        </button>
        <ul class="sidebar-sub-list">
          <li><a href="#/reference/duas" class="sidebar-sub-link ${currentHash === '#/reference/duas' ? 'is-active' : ''}">Duas Collection</a></li>
          <li><a href="#/reference/glossary" class="sidebar-sub-link ${currentHash === '#/reference/glossary' ? 'is-active' : ''}">Glossary</a></li>
          <li><a href="#/reference/emergency" class="sidebar-sub-link ${currentHash === '#/reference/emergency' ? 'is-active' : ''}">Emergency Info</a></li>
          <li><a href="#/reference/about" class="sidebar-sub-link ${currentHash === '#/reference/about' ? 'is-active' : ''}">About & Disclaimer</a></li>
        </ul>
      </li>
    </ul>
  `;

    document.querySelectorAll('.sidebar-section-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            const section = btn.closest('.sidebar-section');
            if (!section) return;
            const isOpen = section.classList.contains('is-open');
            section.classList.toggle('is-open', !isOpen);
            btn.setAttribute('aria-expanded', String(!isOpen));
        });
    });
}

export function renderHome() {
    const ids = allItemIds();
    const done = countCompleted(ids);
    const total = ids.length;

    content.innerHTML = `
    <article class="view view--home">
      <header class="view-header">
        <h1 class="view-title">Hajj Companion</h1>
        <p class="view-subtitle">A personal guide and checklist for the complete Hajj journey.</p>
      </header>

      <div class="welcome-disclaimer">
        <p><strong>Bismillah.</strong> May Allah accept your Hajj, forgive your sins, and return you safely to your family.</p>
        <p>This app is a memory aid and personal checklist — not a fatwa or religious ruling. Follow the guidance of your group leader and a qualified scholar for all religious matters. Verify current Nusuk and visa requirements with your country's Hajj authority each season.</p>
      </div>

      <div class="welcome-progress">
        <h2>Your overall progress</h2>
        ${renderProgressBar(done, total, 'Overall Hajj preparation progress')}
        <p class="progress-subtext">Progress is saved on this device only. Use <a href="#/settings">Settings → Export</a> to back it up.</p>
      </div>

      <div class="welcome-sections">
        <a href="#/nusuk" class="section-card">
          <div class="section-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" stroke-width="1.5"/><path d="M8 12h8M8 8h6M8 16h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </div>
          <div class="section-card-body">
            <h3>Nusuk Registration</h3>
            <p>Walk through the official Saudi Hajj registration process step by step.</p>
          </div>
          <svg class="section-card-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M7 4l6 6-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </a>

        <a href="#/checklist" class="section-card">
          <div class="section-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" stroke-width="1.5"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <div class="section-card-body">
            <h3>Pre-Travel Checklist</h3>
            <p>Documents, health, Ihrām, toiletries, tech, logistics, and spiritual preparation.</p>
          </div>
          <svg class="section-card-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M7 4l6 6-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </a>

        <a href="#/hajj/day-1" class="section-card">
          <div class="section-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="10" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M4 20c0-4.418 3.582-7 8-7s8 2.582 8 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </div>
          <div class="section-card-body">
            <h3>Hajj Day-by-Day</h3>
            <p>A complete guide to each day of Hajj — rites, duas, locations, and common mistakes.</p>
          </div>
          <svg class="section-card-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M7 4l6 6-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </a>
      </div>

      <div class="talbiyah-feature">
        <h2>The Talbiyah</h2>
        <p class="talbiyah-note">Memorise this before you travel. You will recite it from entering Ihrām until the first stone at Jamarat al-Aqabah on Day 3.</p>
        ${renderDua(duas.talbiyah, false)}
      </div>
    </article>
  `;
    attachCheckboxListeners();
}

function renderNusukStep(step) {
    const checked = isCompleted(step.id);
    const linksHtml = step.links
        ? step.links
              .map(
                  (l) =>
                      `<a href="${escHtml(l.url)}" target="_blank" rel="noopener noreferrer" class="external-link">${escHtml(l.label)} ↗</a>`,
              )
              .join('')
        : '';
    const noteHtml = step.note ? `<p class="item-guidance">${escHtml(step.note)}</p>` : '';
    const contentHtml = step.content
        ? `<div class="step-content">${renderContent(step.content)}</div>`
        : '';
    return `<div class="nusuk-step${checked ? ' is-checked' : ''}" data-id="${escHtml(step.id)}">
      <div class="nusuk-step-header">
        <label class="checklist-label">
          <input type="checkbox" class="checklist-cb" data-id="${escHtml(step.id)}" ${checked ? 'checked' : ''} />
          <span class="checklist-text">${escHtml(step.title)}</span>
        </label>
      </div>
      ${contentHtml}
      ${noteHtml}
      ${linksHtml ? `<div class="step-links">${linksHtml}</div>` : ''}
    </div>`;
}

export function renderNusuk() {
    const ids = allNusukIds();
    const done = countCompleted(ids);
    const total = ids.length;

    const phasesHtml = nusukSection.phases
        .map((phase) => {
            const phaseIds = phase.steps.map((s) => s.id);
            const phaseDone = countCompleted(phaseIds);
            const phaseTotal = phaseIds.length;
            const stepsHtml = phase.steps.map(renderNusukStep).join('');
            return `<section class="nusuk-phase" aria-labelledby="${escHtml(phase.id)}">
        <div class="nusuk-phase-header">
          <h2 class="nusuk-phase-title" id="${escHtml(phase.id)}">${escHtml(phase.title)}</h2>
          <span class="nusuk-phase-count">${phaseDone}/${phaseTotal}</span>
        </div>
        ${phase.intro ? `<p class="nusuk-phase-intro">${escHtml(phase.intro)}</p>` : ''}
        <div class="nusuk-steps">${stepsHtml}</div>
      </section>`;
        })
        .join('');

    content.innerHTML = `
    <article class="view view--nusuk">
      <header class="view-header">
        <h1 class="view-title">${escHtml(nusukSection.title)}</h1>
        <p class="view-intro">${escHtml(nusukSection.intro)}</p>
        ${renderProgressBar(done, total, 'Nusuk registration progress')}
      </header>

      <div class="info-banner">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.4"/><path d="M8 7v5M8 4.5v.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
        <div>
          <strong>Nusuk App vs Hajj Website:</strong> ${escHtml(nusukSection.appNote)}
        </div>
      </div>

      <div class="warning-banner">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 1L1 14h14L8 1z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M8 6v4M8 11.5v.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
        ${escHtml(nusukSection.warning)}
      </div>

      ${phasesHtml}

      <div class="view-nav">
        <span></span>
        <a href="#/checklist" class="btn btn--primary">Next: Pre-Travel Checklist →</a>
      </div>
    </article>
  `;
    attachCheckboxListeners();
}

export function renderRawdah() {
    const ids = rawdahSection.steps.map((s) => s.id);
    const done = countCompleted(ids);
    const total = ids.length;

    const phasesHtml = rawdahSection.phases
        .map((phase) => {
            const phaseIds = phase.steps.map((s) => s.id);
            const phaseDone = countCompleted(phaseIds);
            const phaseTotal = phaseIds.length;
            const stepsHtml = phase.steps.map(renderNusukStep).join('');
            return `<section class="nusuk-phase" aria-labelledby="${escHtml(phase.id)}">
        <div class="nusuk-phase-header">
          <h2 class="nusuk-phase-title" id="${escHtml(phase.id)}">${escHtml(phase.title)}</h2>
          <span class="nusuk-phase-count">${phaseDone}/${phaseTotal}</span>
        </div>
        ${phase.intro ? `<p class="nusuk-phase-intro">${escHtml(phase.intro)}</p>` : ''}
        <div class="nusuk-steps">${stepsHtml}</div>
      </section>`;
        })
        .join('');

    content.innerHTML = `
    <article class="view view--nusuk">
      <header class="view-header">
        <h1 class="view-title">${escHtml(rawdahSection.title)}</h1>
        <p class="view-intro">${escHtml(rawdahSection.intro)}</p>
        ${renderProgressBar(done, total, 'Rawdah permit progress')}
      </header>

      <div class="info-banner">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.4"/><path d="M8 7v5M8 4.5v.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
        <div>
          <strong>Use the Nusuk Mobile App:</strong> ${escHtml(rawdahSection.appNote)}
        </div>
      </div>

      <div class="warning-banner">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 1L1 14h14L8 1z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M8 6v4M8 11.5v.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
        ${escHtml(rawdahSection.warning)}
      </div>

      ${phasesHtml}

      <div class="view-nav">
        <a href="#/nusuk" class="btn btn--ghost">← Hajj Steps</a>
        <a href="#/checklist" class="btn btn--primary">Next: Pre-Travel Checklist →</a>
      </div>
    </article>
  `;
    attachCheckboxListeners();
}

export function renderChecklist(groupId) {
    const ids = allChecklistIds();
    const done = countCompleted(ids);
    const total = ids.length;

    if (groupId) {
        const fullGroupId = groupId.startsWith('checklist.') ? groupId : `checklist.${groupId}`;
        const group = checklistSection.groups.find(
            (g) => g.id === fullGroupId || g.id === `checklist.${groupId}`,
        );
        if (!group) {
            renderChecklistOverview(done, total);
            return;
        }
        renderChecklistGroup(group, done, total);
        return;
    }
    renderChecklistOverview(done, total);
}

function renderChecklistOverview(done, total) {
    const groupCards = checklistSection.groups
        .map((g) => {
            const gIds = g.items.map((i) => i.id);
            const gDone = countCompleted(gIds);
            const gTotal = gIds.length;
            const gSlug = g.id.replace('checklist.', '');
            const p = pct(gDone, gTotal);
            return `<a href="#/checklist/${gSlug}" class="group-card${gDone === gTotal ? ' is-complete' : ''}">
      <div class="group-card-header">
        <h3 class="group-card-title">${escHtml(g.title)}</h3>
        <span class="group-card-count">${gDone}/${gTotal}</span>
      </div>
      <div class="progress-bar-wrap" role="progressbar" aria-valuenow="${gDone}" aria-valuemin="0" aria-valuemax="${gTotal}" aria-label="${escHtml(g.title)} progress">
        <div class="progress-bar-fill" style="width:${p}%"></div>
      </div>
    </a>`;
        })
        .join('');

    content.innerHTML = `
    <article class="view view--checklist">
      <header class="view-header">
        <h1 class="view-title">${escHtml(checklistSection.title)}</h1>
        ${renderProgressBar(done, total, 'Pre-travel checklist progress')}
      </header>
      <p class="view-intro">${escHtml(checklistSection.intro)}</p>
      <div class="group-cards">
        ${groupCards}
      </div>
      <div class="view-nav">
        <a href="#/nusuk" class="btn btn--ghost">← Nusuk</a>
        <a href="#/hajj/day-1" class="btn btn--primary">Next: Hajj Guide →</a>
      </div>
    </article>
  `;
}

function renderChecklistGroup(group, totalDone, totalItems) {
    const gIds = group.items.map((i) => i.id);
    const gDone = countCompleted(gIds);
    const gTotal = gIds.length;
    const groupSlug = group.id.replace('checklist.', '');

    const groupIndex = checklistSection.groups.findIndex((g) => g.id === group.id);
    const prevGroup = groupIndex > 0 ? checklistSection.groups[groupIndex - 1] : null;
    const nextGroup =
        groupIndex < checklistSection.groups.length - 1
            ? checklistSection.groups[groupIndex + 1]
            : null;

    const itemsHtml = group.items.map((item) => renderChecklistItem(item, true)).join('');

    content.innerHTML = `
    <article class="view view--checklist-group">
      <header class="view-header">
        <a href="#/checklist" class="back-link">← All groups</a>
        <h1 class="view-title">${escHtml(group.title)}</h1>
        ${renderProgressBar(gDone, gTotal, `${group.title} progress`)}
      </header>
      <ul class="checklist-list" aria-label="${escHtml(group.title)} checklist">
        ${itemsHtml}
      </ul>
      <div class="view-nav">
        ${prevGroup ? `<a href="#/checklist/${prevGroup.id.replace('checklist.', '')}" class="btn btn--ghost">← ${escHtml(prevGroup.title)}</a>` : '<a href="#/checklist" class="btn btn--ghost">← All groups</a>'}
        ${nextGroup ? `<a href="#/checklist/${nextGroup.id.replace('checklist.', '')}" class="btn btn--primary">${escHtml(nextGroup.title)} →</a>` : '<a href="#/hajj/day-1" class="btn btn--primary">Next: Hajj Guide →</a>'}
      </div>
    </article>
  `;
    attachCheckboxListeners();
    attachNoteListeners();
}

export function renderHajjDay(daySlug) {
    const day = hajjDays.find((d) => d.slug === daySlug);
    if (!day) {
        renderHajjOverview();
        return;
    }

    const dIds = day.steps.map((s) => s.id);
    const dDone = countCompleted(dIds);
    const dTotal = dIds.length;

    const dayIndex = hajjDays.findIndex((d) => d.slug === daySlug);
    const prevDay = dayIndex > 0 ? hajjDays[dayIndex - 1] : null;
    const nextDay = dayIndex < hajjDays.length - 1 ? hajjDays[dayIndex + 1] : null;

    const duasHtml = day.duas
        .map((id) => duas[id])
        .filter(Boolean)
        .map((d) => renderDua(d, true))
        .join('');

    const edgeCasesHtml =
        day.edgeCases && day.edgeCases.length
            ? `<section class="edge-cases">
        <h2>Common questions &amp; edge cases</h2>
        <ul class="edge-case-list">
          ${day.edgeCases.map((ec) => `<li>${escHtml(ec)}</li>`).join('')}
        </ul>
        <p class="scholar-note">Practices vary; follow the guidance of your group's scholar.</p>
      </section>`
            : '';

    const stepsHtml = day.steps.map((step) => renderStepItem(step)).join('');

    const overviewHtml = day.overview
        ? `<div class="day-overview">${day.overview
              .split('\n\n')
              .map((p) => `<p>${escHtml(p)}</p>`)
              .join('')}</div>`
        : '';

    content.innerHTML = `
    <article class="view view--hajj-day">
      <header class="view-header">
        <div class="day-meta">
          <span class="day-date">${escHtml(day.date)}</span>
          ${day.arabicName ? `<span class="day-arabic" lang="ar" dir="rtl">${escHtml(day.arabicName)}</span>` : ''}
          ${day.isOptional ? '<span class="optional-badge">Optional</span>' : ''}
        </div>
        <h1 class="view-title">${escHtml(day.title)}</h1>
        ${day.subtitle ? `<p class="day-subtitle">${escHtml(day.subtitle)}</p>` : ''}
        <p class="day-location">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><circle cx="7" cy="6" r="2.5" stroke="currentColor" stroke-width="1.3"/><path d="M7 1C4.239 1 2 3.239 2 6c0 3.5 5 8 5 8s5-4.5 5-8c0-2.761-2.239-5-5-5z" stroke="currentColor" stroke-width="1.3"/></svg>
          ${escHtml(day.location)}
        </p>
        ${renderProgressBar(dDone, dTotal, `${day.title} steps completed`)}
      </header>

      ${overviewHtml}

      <section class="day-steps">
        <h2>Steps for today</h2>
        <ul class="checklist-list" aria-label="${escHtml(day.title)} steps">
          ${stepsHtml}
        </ul>
      </section>

      ${
          duasHtml
              ? `<section class="day-duas">
        <h2>Duas for today</h2>
        ${duasHtml}
      </section>`
              : ''
      }

      ${edgeCasesHtml}

      <div class="view-nav">
        ${prevDay ? `<a href="#/hajj/${prevDay.slug}" class="btn btn--ghost">← ${escHtml(prevDay.title)}</a>` : '<a href="#/checklist" class="btn btn--ghost">← Checklist</a>'}
        ${nextDay ? `<a href="#/hajj/${nextDay.slug}" class="btn btn--primary">${escHtml(nextDay.title)} →</a>` : '<a href="#/reference/duas" class="btn btn--primary">Reference →</a>'}
      </div>
    </article>
  `;
    attachCheckboxListeners();
}

export function renderHajjOverview() {
    const ids = allHajjIds();
    const done = countCompleted(ids);
    const total = ids.length;

    const dayCards = hajjDays
        .map((d) => {
            const dIds = d.steps.map((s) => s.id);
            const dDone = countCompleted(dIds);
            const dTotal = dIds.length;
            return `<a href="#/hajj/${d.slug}" class="day-card${d.isOptional ? ' day-card--optional' : ''}${dDone === dTotal ? ' is-complete' : ''}">
      <div class="day-card-header">
        <div>
          <span class="day-card-date">${escHtml(d.date)}</span>
          ${d.isOptional ? '<span class="optional-badge">Optional</span>' : ''}
        </div>
        <span class="group-card-count">${dDone}/${dTotal}</span>
      </div>
      <h3 class="day-card-title">${escHtml(d.title)}</h3>
      <p class="day-card-location">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><circle cx="6" cy="5" r="2" stroke="currentColor" stroke-width="1.2"/><path d="M6 1C3.79 1 2 2.79 2 5c0 3 4 7 4 7s4-4 4-7c0-2.21-1.79-4-4-4z" stroke="currentColor" stroke-width="1.2"/></svg>
        ${escHtml(d.location)}
      </p>
    </a>`;
        })
        .join('');

    content.innerHTML = `
    <article class="view view--hajj">
      <header class="view-header">
        <h1 class="view-title">Hajj Day-by-Day</h1>
        ${renderProgressBar(done, total, 'Hajj guide progress')}
      </header>
      <p class="view-intro">Tap a day to open the full guide with duas, step-by-step rites, and edge cases. Do not rely on this app alone — follow your group leader and scholar.</p>
      <div class="day-cards">
        ${dayCards}
      </div>
    </article>
  `;
}

export function renderReference(section) {
    if (section === 'duas') {
        renderDuasReference();
        return;
    }
    if (section === 'glossary') {
        renderGlossary();
        return;
    }
    if (section === 'emergency') {
        renderEmergency();
        return;
    }
    if (section === 'about') {
        renderAbout();
        return;
    }
    renderDuasReference();
}

function renderDuasReference() {
    const allDuasHtml = duasList.map((d) => renderDua(d, false)).join('');
    content.innerHTML = `
    <article class="view view--reference">
      <header class="view-header">
        <a href="#/reference/glossary" class="back-link view-header-link">Reference</a>
        <h1 class="view-title">Duas Collection</h1>
      </header>
      <p class="view-intro">Duas sourced from authenticated hadith collections. Translations are from established references — they are not the divine text itself. Verify any dua you are uncertain about with a scholar.</p>
      <div class="duas-collection">
        ${allDuasHtml}
      </div>
      <div class="view-nav">
        <a href="#/hajj/farewell" class="btn btn--ghost">← Farewell Tawaf</a>
        <a href="#/reference/glossary" class="btn btn--primary">Glossary →</a>
      </div>
    </article>
  `;
}

function renderGlossary() {
    const termsHtml = glossaryTerms
        .map(
            (term) => `
    <dt id="term-${escHtml(term.id)}" class="glossary-term">
      ${escHtml(term.term)}
      ${term.arabic ? `<span class="glossary-arabic" lang="ar" dir="rtl">${escHtml(term.arabic)}</span>` : ''}
    </dt>
    <dd class="glossary-def">${escHtml(term.definition)}</dd>
  `,
        )
        .join('');

    content.innerHTML = `
    <article class="view view--reference">
      <header class="view-header">
        <h1 class="view-title">Glossary</h1>
      </header>
      <dl class="glossary-list">
        ${termsHtml}
      </dl>
      <div class="view-nav">
        <a href="#/reference/duas" class="btn btn--ghost">← Duas</a>
        <a href="#/reference/emergency" class="btn btn--primary">Emergency Info →</a>
      </div>
    </article>
  `;
}

function renderEmergency() {
    content.innerHTML = `
    <article class="view view--reference">
      <header class="view-header">
        <h1 class="view-title">Emergency Information</h1>
      </header>
      <div class="emergency-note warning-banner">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 1L1 14h14L8 1z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M8 6v4M8 11.5v.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
        Print this page before travel and carry it with you. Your phone may be unavailable when you need it most.
      </div>

      <section class="emergency-section">
        <h2>Saudi Emergency Numbers</h2>
        <ul class="emergency-list">
          <li><strong>Police:</strong> 999</li>
          <li><strong>Ambulance:</strong> 911</li>
          <li><strong>Civil Defence (fire):</strong> 998</li>
          <li><strong>Hajj Emergency (Ministry of Hajj):</strong> 920004844</li>
        </ul>
      </section>

      <section class="emergency-section">
        <h2>Your Country's Embassy in Saudi Arabia</h2>
        <p class="emergency-fill-note">Fill in your embassy's details before travel and write them on paper.</p>
        <ul class="emergency-list emergency-list--fill">
          <li><strong>Embassy name:</strong> <span class="fill-field">___________________________</span></li>
          <li><strong>Emergency phone:</strong> <span class="fill-field">___________________________</span></li>
          <li><strong>Address in Riyadh:</strong> <span class="fill-field">___________________________</span></li>
        </ul>
      </section>

      <section class="emergency-section">
        <h2>Your Hajj Group Contacts</h2>
        <ul class="emergency-list emergency-list--fill">
          <li><strong>Group leader name:</strong> <span class="fill-field">___________________________</span></li>
          <li><strong>Group leader phone:</strong> <span class="fill-field">___________________________</span></li>
          <li><strong>Operator emergency line:</strong> <span class="fill-field">___________________________</span></li>
          <li><strong>Hotel name (Makkah):</strong> <span class="fill-field">___________________________</span></li>
          <li><strong>Hotel address in Arabic:</strong> <span class="fill-field">___________________________</span></li>
        </ul>
      </section>

      <section class="emergency-section">
        <h2>If You Are Lost in Mina</h2>
        <ol class="emergency-steps">
          <li>Stay calm. Do not panic. Mina is crowded — being separated from your group is common.</li>
          <li>Do not walk — stand still and wait near a clearly visible landmark (a Jamarat signpost, a tent street sign).</li>
          <li>Mina is divided into numbered streets (e.g. Street 11, Camp Zone A). Know your tent's street and zone before you enter.</li>
          <li>Call your group leader. If you have no signal, find a Saudi policeman or Civil Defence officer — they are stationed throughout Mina.</li>
          <li>Go to the nearest Pakistani, Indian, or Arab pilgrim group — they will help you find assistance. The Hajj community is kind.</li>
          <li>Saudi authorities have a lost pilgrim service at central points. Ask any officer for the "Maktab Hajj" (Hajj office) for your country.</li>
        </ol>
      </section>

      <section class="emergency-section">
        <h2>If Your Passport Is Lost or Stolen</h2>
        <ol class="emergency-steps">
          <li>Report it to the Saudi police immediately and get a police report number.</li>
          <li>Contact your country's embassy — you will need the police report to get an emergency travel document.</li>
          <li>Contact your Hajj operator — they may have assisted many pilgrims in this situation.</li>
          <li>Keep a photocopy of your passport separately (not in the same bag) for this reason.</li>
        </ol>
      </section>

      <section class="emergency-section">
        <h2>Heat Exhaustion and Heat Stroke</h2>
        <ul class="emergency-list">
          <li><strong>Drink water constantly</strong> — do not wait until you are thirsty.</li>
          <li><strong>Seek shade</strong> wherever possible, especially at Arafah and Mina.</li>
          <li><strong>Signs of heat exhaustion:</strong> heavy sweating, weakness, cold/pale/clammy skin, fast/weak pulse, nausea, fainting.</li>
          <li><strong>Signs of heat stroke (emergency):</strong> high body temperature (above 40°C), hot/red/dry skin, rapid/strong pulse, confusion. <strong>Call for help immediately.</strong></li>
          <li>Medical teams are stationed throughout the Hajj sites. Do not hesitate to seek help.</li>
        </ul>
      </section>

      <div class="view-nav">
        <a href="#/reference/glossary" class="btn btn--ghost">← Glossary</a>
        <a href="#/reference/about" class="btn btn--primary">About →</a>
      </div>
    </article>
  `;
}

function renderAbout() {
    content.innerHTML = `
    <article class="view view--reference">
      <header class="view-header">
        <h1 class="view-title">About &amp; Disclaimer</h1>
      </header>

      <section class="about-section">
        <h2>What this app is</h2>
        <p>Hajj Companion is a free, offline-first personal checklist and guide for the Hajj pilgrimage. It has no tracking, no login, no advertising, and no cloud sync. Your data stays on your device.</p>
        <p>It is built to work in the conditions where pilgrims actually need it: in a tent in Mina at 2am, with one bar of signal, on a phone that is low on battery.</p>
      </section>

      <section class="about-section">
        <h2>Religious disclaimer</h2>
        <p>This app is a memory aid and personal checklist. It is <strong>not</strong> a source of religious rulings (fatawa). The content is drawn from established hadith collections and standard Hajj guides, but:</p>
        <ul>
          <li>Schools of Islamic jurisprudence differ on many details of Hajj rites.</li>
          <li>Religious requirements and Saudi regulations change from season to season.</li>
          <li>This app cannot account for your personal circumstances.</li>
        </ul>
        <p>For all religious matters, follow the guidance of your group leader and a qualified scholar. For visa and registration matters, verify with your country's Hajj authority and nusuk.sa directly.</p>
        <p>Duas sourced in this app are drawn from Sahih al-Bukhari, Sahih Muslim, Sunan Abi Dawud, Jami\' al-Tirmidhi, and other established collections. Translations are approximations — the Arabic is the primary text.</p>
      </section>

      <section class="about-section">
        <h2>Privacy</h2>
        <p>This app makes zero outbound network requests after the first page load. There are no analytics, no trackers, no third-party scripts. Your checklist progress is stored only in your browser's localStorage on your device.</p>
        <p>Use <a href="#/settings">Settings → Export</a> to save a backup of your progress to a file.</p>
      </section>

      <section class="about-section">
        <h2>Corrections and contributions</h2>
        <p>If you find an error in any dua, translation, or guidance, please open an issue or pull request on GitHub. Religious accuracy is the highest priority.</p>
      </section>

      <div class="view-nav">
        <a href="#/reference/emergency" class="btn btn--ghost">← Emergency Info</a>
        <a href="#/" class="btn btn--primary">Back to Home</a>
      </div>
    </article>
  `;
}

export function renderSettings(state, onThemeChange, onReset, onExport, onImport) {
    const settingsPanel = document.getElementById('settings-panel');
    const theme = state.settings?.theme ?? 'auto';
    const arabicSize = state.settings?.arabicSize ?? 'default';

    settingsPanel.innerHTML = `
    <div class="settings-inner">
      <div class="settings-header">
        <h2>Settings</h2>
        <button id="settings-close" class="icon-btn" aria-label="Close settings">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 4l12 12M16 4L4 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </button>
      </div>

      <section class="settings-section">
        <h3>Appearance</h3>
        <div class="settings-field">
          <label for="theme-select">Theme</label>
          <select id="theme-select" class="settings-select">
            <option value="auto" ${theme === 'auto' ? 'selected' : ''}>Auto (system)</option>
            <option value="light" ${theme === 'light' ? 'selected' : ''}>Light</option>
            <option value="dark" ${theme === 'dark' ? 'selected' : ''}>Dark</option>
          </select>
        </div>
        <div class="settings-field">
          <label for="arabic-size-select">Arabic text size</label>
          <select id="arabic-size-select" class="settings-select">
            <option value="default" ${arabicSize === 'default' ? 'selected' : ''}>Default (1.4×)</option>
            <option value="large" ${arabicSize === 'large' ? 'selected' : ''}>Large (1.6×)</option>
            <option value="xlarge" ${arabicSize === 'xlarge' ? 'selected' : ''}>Extra large (1.8×)</option>
          </select>
        </div>
      </section>

      <section class="settings-section">
        <h3>Progress data</h3>
        <p class="settings-note">Progress is saved on this device only. Export your progress to move it to another device or keep a backup.</p>
        <div class="settings-actions">
          <button id="export-btn" class="btn btn--secondary">Export progress</button>
          <label class="btn btn--secondary btn--file-label" for="import-file">
            Import progress
            <input type="file" id="import-file" accept=".json" class="sr-only" />
          </label>
        </div>
      </section>

      <section class="settings-section settings-section--danger">
        <h3>Reset</h3>
        <p class="settings-note">Permanently deletes all progress and notes. This cannot be undone.</p>
        <button id="reset-btn" class="btn btn--danger">Reset everything</button>
        <div id="reset-confirm" hidden>
          <p class="reset-warning">Are you sure? All progress will be permanently deleted.</p>
          <button id="reset-confirm-btn" class="btn btn--danger" disabled>Confirm reset (wait 3s)</button>
          <button id="reset-cancel-btn" class="btn btn--ghost">Cancel</button>
        </div>
      </section>
    </div>
  `;

    document.getElementById('settings-close').addEventListener('click', () => {
        settingsPanel.hidden = true;
        document.getElementById('settings-toggle').setAttribute('aria-expanded', 'false');
    });

    document.getElementById('theme-select').addEventListener('change', (e) => {
        onThemeChange(e.target.value);
    });

    document.getElementById('arabic-size-select').addEventListener('change', (e) => {
        document.documentElement.setAttribute('data-arabic-size', e.target.value);
        import('./state.js').then((m) => m.setSetting('arabicSize', e.target.value));
    });

    document.getElementById('export-btn').addEventListener('click', onExport);

    document.getElementById('import-file').addEventListener('change', (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => onImport(ev.target.result);
        reader.readAsText(file);
        e.target.value = '';
    });

    const resetBtn = document.getElementById('reset-btn');
    const resetConfirm = document.getElementById('reset-confirm');
    const resetConfirmBtn = document.getElementById('reset-confirm-btn');
    const resetCancelBtn = document.getElementById('reset-cancel-btn');

    resetBtn.addEventListener('click', () => {
        resetConfirm.hidden = false;
        resetBtn.hidden = true;
        let remaining = 3;
        resetConfirmBtn.disabled = true;
        resetConfirmBtn.textContent = `Confirm reset (wait ${remaining}s)`;
        const t = setInterval(() => {
            remaining--;
            if (remaining <= 0) {
                clearInterval(t);
                resetConfirmBtn.disabled = false;
                resetConfirmBtn.textContent = 'Confirm reset';
            } else {
                resetConfirmBtn.textContent = `Confirm reset (wait ${remaining}s)`;
            }
        }, 1000);
    });

    resetConfirmBtn.addEventListener('click', () => {
        onReset();
    });

    resetCancelBtn.addEventListener('click', () => {
        resetConfirm.hidden = true;
        resetBtn.hidden = false;
    });
}

function attachCheckboxListeners() {
    content.querySelectorAll('.checklist-cb').forEach((cb) => {
        cb.addEventListener('change', (e) => {
            const id = e.target.dataset.id;
            const checked = toggleCompleted(id);
            const item = e.target.closest('[data-id]');
            if (item) item.classList.toggle('is-checked', checked);
            updateGlobalProgress();
            renderSidebar(window.location.hash || '#/');
        });
    });
}

function attachNoteListeners() {
    content.querySelectorAll('.note-toggle-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            const item = content.querySelector(`.checklist-item[data-id="${id}"]`);
            const noteField = item?.querySelector('.note-field');
            if (!noteField) return;
            const isOpen = !noteField.hidden;
            noteField.hidden = isOpen;
            btn.setAttribute('aria-expanded', String(!isOpen));
            if (!isOpen) noteField.querySelector('.note-input')?.focus();
        });
    });

    content.querySelectorAll('.note-save').forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            const item = content.querySelector(`.checklist-item[data-id="${id}"]`);
            const textarea = item?.querySelector('.note-input');
            if (!textarea) return;
            setNote(id, textarea.value);
            const userNoteEl = item.querySelector(`.item-user-note`);
            if (textarea.value.trim()) {
                if (userNoteEl) {
                    userNoteEl.textContent = textarea.value.trim();
                } else {
                    const p = document.createElement('p');
                    p.className = 'item-user-note';
                    p.dataset.id = id;
                    p.textContent = textarea.value.trim();
                    item.querySelector('.note-field').insertAdjacentElement('beforebegin', p);
                }
                item.classList.add('has-note');
            } else {
                userNoteEl?.remove();
                item.classList.remove('has-note');
            }
            const noteField = item.querySelector('.note-field');
            noteField.hidden = true;
            const toggleBtn = item.querySelector('.note-toggle-btn');
            if (toggleBtn) {
                toggleBtn.setAttribute('aria-expanded', 'false');
                toggleBtn.setAttribute(
                    'aria-label',
                    textarea.value.trim() ? 'Edit note' : 'Add note',
                );
                toggleBtn.setAttribute('title', textarea.value.trim() ? 'Edit note' : 'Add note');
            }
            showToast('Note saved.');
        });
    });

    content.querySelectorAll('.note-cancel').forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            const item = content.querySelector(`.checklist-item[data-id="${id}"]`);
            const noteField = item?.querySelector('.note-field');
            if (noteField) noteField.hidden = true;
            const toggleBtn = item?.querySelector('.note-toggle-btn');
            if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
        });
    });
}

export function showToast(message, duration) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('is-visible'), duration || 3000);
}
