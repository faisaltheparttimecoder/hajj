const _handlers = new Map();
let _notFoundHandler = null;
let _beforeEach = null;

function parseHash(hash) {
    const h = hash.replace(/^#\/?/, '') || '';
    const parts = h.split('/').filter(Boolean);
    return parts;
}

function matchRoute(parts) {
    if (parts.length === 0) return { route: '/', params: {} };

    if (parts[0] === 'nusuk') {
        if (parts[1] === 'rawdah') return { route: '/nusuk/rawdah', params: {} };
        return { route: '/nusuk', params: {} };
    }

    if (parts[0] === 'checklist') {
        if (parts[1]) return { route: '/checklist/:group', params: { group: parts[1] } };
        return { route: '/checklist', params: {} };
    }

    if (parts[0] === 'hajj') {
        if (parts[1]) return { route: '/hajj/:day', params: { day: parts[1] } };
        return { route: '/hajj', params: {} };
    }

    if (parts[0] === 'reference') {
        if (parts[1]) return { route: '/reference/:section', params: { section: parts[1] } };
        return { route: '/reference', params: {} };
    }

    if (parts[0] === 'settings') return { route: '/settings', params: {} };

    if (parts[0] === 'umrah') return { route: '/umrah', params: {} };

    if (parts[0] === 'madinah') return { route: '/madinah', params: {} };

    return { route: null, params: {} };
}

export function on(route, handler) {
    _handlers.set(route, handler);
}

export function notFound(handler) {
    _notFoundHandler = handler;
}

export function beforeEach(fn) {
    _beforeEach = fn;
}

export function navigate(hash) {
    window.location.hash = hash.startsWith('#') ? hash : '#' + hash;
}

export function currentHash() {
    return window.location.hash || '#/';
}

function dispatch() {
    const hash = window.location.hash || '#/';
    const parts = parseHash(hash);
    const { route, params } = matchRoute(parts);

    if (_beforeEach) _beforeEach(hash);

    if (route && _handlers.has(route)) {
        _handlers.get(route)(params, hash);
    } else if (_notFoundHandler) {
        _notFoundHandler(hash);
    }
}

export function init() {
    window.addEventListener('hashchange', dispatch);
    dispatch();
}

export function refresh() {
    dispatch();
}
