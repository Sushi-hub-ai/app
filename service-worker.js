const CACHE_NAME = 'v1';
const URLS_TO_CACHE = [
  'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec', // Web app URL
  'https://drive.google.com/uc?export=download&id=YOUR_MANIFEST_JSON_FILE_ID',
  'https://drive.google.com/uc?export=download&id=YOUR_ICON_192x192_FILE_ID',
  'https://drive.google.com/uc?export=download&id=YOUR_ICON_512x512_FILE_ID'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
