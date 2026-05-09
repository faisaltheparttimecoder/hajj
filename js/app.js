import {
    loadState,
    getState,
    getSetting,
    setSetting,
    exportData,
    importData,
    resetAll,
} from './state.js';
import * as router from './router.js';
import {
    renderSidebar,
    renderHome,
    renderNusuk,
    renderRawdah,
    renderChecklist,
    renderHajjDay,
    renderHajjOverview,
    renderUmrah,
    renderMadinah,
    renderReference,
    renderSettings,
    updateGlobalProgress,
    showToast,
} from './render.js';
import { setLastViewed } from './state.js';

function applyTheme(theme) {
    const root = document.documentElement;
    if (theme === 'dark') {
        root.setAttribute('data-theme', 'dark');
    } else if (theme === 'light') {
        root.setAttribute('data-theme', 'light');
    } else {
        root.removeAttribute('data-theme');
    }
}

function applyArabicSize(size) {
    document.documentElement.setAttribute('data-arabic-size', size || 'default');
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const menuBtn = document.getElementById('menu-toggle');
    sidebar.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    menuBtn.setAttribute('aria-expanded', 'false');
}

function openSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const menuBtn = document.getElementById('menu-toggle');
    sidebar.classList.add('is-open');
    overlay.classList.add('is-visible');
    menuBtn.setAttribute('aria-expanded', 'true');
}

function setupLayout() {
    const menuBtn = document.getElementById('menu-toggle');
    const overlay = document.getElementById('sidebar-overlay');
    const settingsToggle = document.getElementById('settings-toggle');
    const settingsPanel = document.getElementById('settings-panel');

    menuBtn.addEventListener('click', () => {
        const isOpen = document.getElementById('sidebar').classList.contains('is-open');
        if (isOpen) closeSidebar();
        else openSidebar();
    });

    overlay.addEventListener('click', closeSidebar);

    settingsToggle.addEventListener('click', () => {
        const hidden = settingsPanel.hidden;
        settingsPanel.hidden = !hidden;
        settingsToggle.setAttribute('aria-expanded', String(hidden));
        if (hidden) {
            const state = getState();
            renderSettings(
                state,
                (theme) => {
                    setSetting('theme', theme);
                    applyTheme(theme);
                },
                () => {
                    resetAll();
                    settingsPanel.hidden = true;
                    settingsToggle.setAttribute('aria-expanded', 'false');
                    router.navigate('#/');
                    showToast('All progress has been reset.');
                },
                () => {
                    exportData();
                    showToast('Progress exported.');
                },
                (jsonText) => {
                    const result = importData(jsonText);
                    if (result.success) {
                        settingsPanel.hidden = true;
                        settingsToggle.setAttribute('aria-expanded', 'false');
                        router.navigate('#/');
                        showToast('Progress imported successfully.');
                    } else {
                        showToast(result.error || 'Import failed.');
                    }
                },
            );
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSidebar();
            if (!settingsPanel.hidden) {
                settingsPanel.hidden = true;
                settingsToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
}

function setupRoutes() {
    router.beforeEach((hash) => {
        closeSidebar();
        setLastViewed(hash);
        renderSidebar(hash);
        document.getElementById('content').scrollTop = 0;
        window.scrollTo(0, 0);
    });

    router.on('/', () => renderHome());

    router.on('/nusuk', () => renderNusuk());
    router.on('/nusuk/rawdah', () => renderRawdah());

    router.on('/checklist', () => renderChecklist(null));

    router.on('/checklist/:group', ({ group }) => renderChecklist(group));

    router.on('/hajj', () => renderHajjOverview());

    router.on('/hajj/:day', ({ day }) => renderHajjDay(day));

    router.on('/umrah', () => renderUmrah());

    router.on('/madinah', () => renderMadinah());

    router.on('/reference', () => renderReference('duas'));

    router.on('/reference/:section', ({ section }) => renderReference(section));

    router.on('/settings', () => {
        const settingsPanel = document.getElementById('settings-panel');
        const settingsToggle = document.getElementById('settings-toggle');
        settingsPanel.hidden = false;
        settingsToggle.setAttribute('aria-expanded', 'true');
        const state = getState();
        renderSettings(
            state,
            (theme) => {
                setSetting('theme', theme);
                applyTheme(theme);
            },
            () => {
                resetAll();
                settingsPanel.hidden = true;
                router.navigate('#/');
                showToast('All progress has been reset.');
            },
            () => {
                exportData();
                showToast('Progress exported.');
            },
            (jsonText) => {
                const result = importData(jsonText);
                if (result.success) {
                    settingsPanel.hidden = true;
                    router.navigate('#/');
                    showToast('Progress imported successfully.');
                } else {
                    showToast(result.error || 'Import failed.');
                }
            },
        );
    });

    router.notFound(() => renderHome());
}

function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    try {
        navigator.serviceWorker
            .register('./sw.js')
            .then((reg) => {
                reg.addEventListener('updatefound', () => {
                    const newWorker = reg.installing;
                    if (!newWorker) return;
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            showToast('App updated. Reload to see the latest version.');
                        }
                    });
                });
            })
            .catch(() => {});
    } catch {}
}

function handleStorageWarning() {
    document.addEventListener('hajj:storage-warning', () => {
        showToast('Storage unavailable — progress will not be saved this session.', 6000);
    });
}

function init() {
    const { state, storageWarning } = loadState();

    applyTheme(getSetting('theme'));
    applyArabicSize(getSetting('arabicSize'));

    setupLayout();
    setupRoutes();

    updateGlobalProgress();

    router.init();

    registerServiceWorker();
    handleStorageWarning();

    if (storageWarning) {
        setTimeout(() => {
            showToast('Storage is blocked — progress cannot be saved this session.', 6000);
        }, 1000);
    }
}

init();
