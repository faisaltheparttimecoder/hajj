const STORAGE_KEY = 'hajj-companion:v1';
const SCHEMA_VERSION = 1;

const defaults = {
    schemaVersion: SCHEMA_VERSION,
    completed: {},
    notes: {},
    settings: {
        theme: 'auto',
        arabicSize: 'default',
        language: 'en',
    },
    lastViewed: '#/',
    updatedAt: null,
};

let _state = null;
let _debounceTimer = null;
let _storageAvailable = true;
let _storageWarningShown = false;

function checkStorageAvailable() {
    try {
        const testKey = '__hajj_storage_test__';
        localStorage.setItem(testKey, '1');
        localStorage.removeItem(testKey);
        return true;
    } catch {
        return false;
    }
}

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function validateState(raw) {
    if (!raw || typeof raw !== 'object') return false;
    if (typeof raw.completed !== 'object') return false;
    if (typeof raw.settings !== 'object') return false;
    return true;
}

function migrate(raw) {
    if (raw.schemaVersion === SCHEMA_VERSION) return raw;
    return { ...defaults, ...raw, schemaVersion: SCHEMA_VERSION };
}

export function loadState() {
    _storageAvailable = checkStorageAvailable();

    if (!_storageAvailable) {
        _state = deepClone(defaults);
        return { state: _state, storageWarning: true };
    }

    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            _state = deepClone(defaults);
            return { state: _state, storageWarning: false };
        }

        const parsed = JSON.parse(raw);
        if (!validateState(parsed)) {
            _state = deepClone(defaults);
            return { state: _state, storageWarning: false };
        }

        _state = migrate(parsed);
        _state.settings = { ...defaults.settings, ..._state.settings };
        return { state: _state, storageWarning: false };
    } catch {
        _state = deepClone(defaults);
        return { state: _state, storageWarning: false };
    }
}

function persist() {
    if (!_storageAvailable || !_state) return;
    try {
        _state.updatedAt = new Date().toISOString();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(_state));
    } catch (err) {
        _storageAvailable = false;
        if (!_storageWarningShown) {
            _storageWarningShown = true;
            dispatchStorageWarning();
        }
    }
}

function dispatchStorageWarning() {
    document.dispatchEvent(new CustomEvent('hajj:storage-warning'));
}

function schedulePersist() {
    clearTimeout(_debounceTimer);
    _debounceTimer = setTimeout(persist, 250);
}

export function getState() {
    return _state;
}

export function getSetting(key) {
    return _state?.settings?.[key] ?? defaults.settings[key];
}

export function setSetting(key, value) {
    if (!_state) return;
    _state.settings[key] = value;
    schedulePersist();
}

export function isCompleted(itemId) {
    return !!_state?.completed?.[itemId];
}

export function toggleCompleted(itemId) {
    if (!_state) return false;
    _state.completed[itemId] = !_state.completed[itemId];
    if (!_state.completed[itemId]) delete _state.completed[itemId];
    schedulePersist();
    return !!_state.completed[itemId];
}

export function setCompleted(itemId, value) {
    if (!_state) return;
    if (value) {
        _state.completed[itemId] = true;
    } else {
        delete _state.completed[itemId];
    }
    schedulePersist();
}

export function getNote(itemId) {
    return _state?.notes?.[itemId] ?? '';
}

export function setNote(itemId, text) {
    if (!_state) return;
    if (text && text.trim()) {
        _state.notes[itemId] = text.trim();
    } else {
        delete _state.notes[itemId];
    }
    schedulePersist();
}

export function setLastViewed(hash) {
    if (!_state) return;
    _state.lastViewed = hash;
    schedulePersist();
}

export function getLastViewed() {
    return _state?.lastViewed ?? '#/';
}

export function countCompleted(itemIds) {
    return itemIds.filter((id) => isCompleted(id)).length;
}

export function exportData() {
    if (!_state) return null;
    const blob = new Blob([JSON.stringify(_state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hajj-companion-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function importData(jsonText) {
    try {
        const parsed = JSON.parse(jsonText);
        if (!validateState(parsed)) {
            return {
                success: false,
                error: 'The file does not appear to be a valid Hajj Companion backup.',
            };
        }
        _state = migrate({ ...defaults, ...parsed });
        _state.settings = { ...defaults.settings, ..._state.settings };
        persist();
        return { success: true };
    } catch {
        return {
            success: false,
            error: 'Could not read the file. Make sure it is a valid JSON backup.',
        };
    }
}

export function resetAll() {
    _state = deepClone(defaults);
    if (_storageAvailable) {
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch {
            /* ignore */
        }
    }
}
