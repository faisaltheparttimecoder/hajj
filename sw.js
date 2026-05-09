const CACHE_VERSION = 'hajj-companion-v1';

const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './styles.css',
    './manifest.json',
    './icons/icon.svg',
    './icons/icon-192.png',
    './icons/icon-512.png',
    './js/app.js',
    './js/router.js',
    './js/state.js',
    './js/render.js',
    './js/content/nusuk.js',
    './js/content/checklist.js',
    './js/content/hajj-days.js',
    './js/content/duas.js',
    './js/content/glossary.js',
    './js/content/umrah.js',
    './js/content/madinah.js',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches
            .open(CACHE_VERSION)
            .then((cache) => {
                return Promise.all(
                    ASSETS_TO_CACHE.map((url) =>
                        cache.add(url).catch(() => {
                            console.warn('[SW] Could not cache:', url);
                        }),
                    ),
                );
            })
            .then(() => self.skipWaiting()),
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches
            .keys()
            .then((keys) => {
                return Promise.all(
                    keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key)),
                );
            })
            .then(() => self.clients.claim()),
    );
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);
    if (url.origin !== self.location.origin) return;

    event.respondWith(
        caches.match(event.request).then((cached) => {
            if (cached) return cached;

            return fetch(event.request)
                .then((response) => {
                    if (!response || response.status !== 200 || response.type === 'opaque') {
                        return response;
                    }
                    const responseToCache = response.clone();
                    caches.open(CACHE_VERSION).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                    return response;
                })
                .catch(() => {
                    return caches.match('./index.html');
                });
        }),
    );
});
