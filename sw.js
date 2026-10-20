// Offline support: everything the app needs is cached on first visit, so it opens and works with no connection.
// Pages are network-first (so updates arrive when online) and fall back to the cache offline.
const CACHE = "runway-v4";
const SHELL = [
  "./", "./index.html", "./manifest.webmanifest",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png",
  "./fonts/fonts.css",  "./fonts/BricolageGrotesque-500-700-latin-4efd1a.woff2",  "./fonts/BricolageGrotesque-500-700-latin-ext-6441e9.woff2",  "./fonts/HankenGrotesk-400-latin-ext-d9a6a0.woff2",  "./fonts/HankenGrotesk-400-latin-fe1634.woff2",  "./fonts/IBMPlexMono-400-latin-d77319.woff2",  "./fonts/IBMPlexMono-400-latin-ext-9994c1.woff2",  "./fonts/IBMPlexMono-500-latin-8d0aea.woff2",  "./fonts/IBMPlexMono-500-latin-ext-60d1ee.woff2",
  "./vendor/xlsx.full.min.js",
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put("./index.html", copy)); return res; })
      .catch(() => caches.match("./index.html")));
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  })));
});
