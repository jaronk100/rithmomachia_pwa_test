/* Rithmomachia — service worker.
   The whole game is one HTML file, so caching is simple: grab everything on
   install, then serve from cache and quietly refresh in the background.

   Bump CACHE whenever you change index.html, or the phone will keep serving
   the old copy. That is the single most common PWA gotcha. */

const CACHE = 'rithmomachia-v3';

const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon.svg'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(c =>
      // addAll fails the whole install if any single file 404s, so add
      // them individually and tolerate the optional ones being absent
      Promise.all(ASSETS.map(u => c.add(u).catch(() => {})))
    )
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  e.respondWith(
    caches.match(e.request).then(hit => {
      const live = fetch(e.request)
        .then(res => {
          if (res && res.status === 200 && res.type === 'basic') {
            const copy = res.clone();
            caches.open(CACHE).then(c => c.put(e.request, copy));
          }
          return res;
        })
        .catch(() => hit);          // offline: fall back to whatever we have

      return hit || live;           // cache first, network fills in behind
    })
  );
});
