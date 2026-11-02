// Service Worker - AL FORNO PWA
const CACHE_NAME = 'alforno-cache-v15';
const ASSETS = [
  './',
  './index.html',
  './cardapio.html',
  './qr-print.html',
  './supabase.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './wood.svg',
  './img/prod-1.jpg',
  './img/prod-2.jpg',
  './img/prod-3.jpg',
  './img/prod-4.jpg',
  './img/prod-5.jpg',
  './img/prod-6.jpg',
  './img/prod-7.jpg',
  './img/prod-8.jpg',
  './img/prod-9.jpg',
  './img/prod-10.jpg',
  './img/prod-11.jpg',
  './img/prod-12.jpg',
  './img/prod-13.jpg',
  './img/prod-14.jpg',
  './img/prod-15.jpg',
  './img/prod-16.jpg',
  './img/prod-17.jpg',
  './img/prod-18.jpg',
  './img/prod-19.jpg',
  './img/prod-20.jpg',
  './img/prod-21.jpg',
  './img/prod-22.jpg',
  './img/prod-23.jpg',
  './img/prod-24.jpg',
  './img/prod-25.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (new URL(event.request.url).pathname.endsWith('/supabase.js')) {
    event.respondWith(fetch(event.request, {cache: 'no-store'}));
    return;
  }
  const isNav = event.request.mode === 'navigate' || (event.request.headers.get('accept') || '').includes('text/html');
  if (isNav) {
    event.respondWith(
      fetch(event.request).then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(() => {});
        return res;
      }).catch(() => caches.match(event.request).then((c) => c || caches.match('./index.html')))
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(() => {});
        return res;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
