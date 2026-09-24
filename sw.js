/* Rithmomachia — service worker.

   Strategy, and why:
   - NAVIGATION (the page itself) is network-first. This is the important bit.
     A cache-first page will keep showing a stale build until the cache name
     changes AND the worker activates AND you relaunch — which is exactly the
     "I committed but my phone looks the same" trap. Network-first means the
     newest HTML wins whenever there's a signal, and the cached copy is only
     used when there genuinely isn't one.
   - EVERYTHING ELSE is cache-first, which keeps launches instant.
   - On install we refetch with cache:'reload' so the browser's own HTTP cache
     can't hand us the stale file we're trying to replace. GitHub Pages sends
     max-age=600, so without this the new worker can cache a ten-minute-old copy.

   Bump CACHE on every deploy. */

const CACHE = 'rithmomachia-v9';

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
      Promise.all(ASSETS.map(u =>
        // bypass the HTTP cache so we store what's actually on the server now
        c.add(new Request(u, { cache: 'reload' })).catch(() => {})
      ))
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

  const isPage = e.request.mode === 'navigate';

  if (isPage) {
    // network first, fall back to cache when offline
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
          return res;
        })
        .catch(() =>
          caches.match(e.request).then(hit => hit || caches.match('./index.html'))
        )
    );
    return;
  }

  // everything else: cache first, refresh quietly in the background
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
        .catch(() => hit);
      return hit || live;
    })
  );
});
