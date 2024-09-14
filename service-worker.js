const CACHE_NAME = 'v1';
const URLS_TO_CACHE = [
  '/',
  'https://script.google.com/macros/s/AKfycbxIfaVbcE3P9zktsSwLvGfFjJFN-pGI2RtaKBOAVNkOLuFwNsJIhUMDixsNtrEsHwQDyQ/exec',
  'https://raw.githubusercontent.com/Sushi-hub-ai/app/main/manifest.json',
  'https://raw.githubusercontent.com/Sushi-hub-ai/app/main/Icon.jpg',
  'https://raw.githubusercontent.com/Sushi-hub-ai/app/main/Icon.jpg'
];

// Install event - caching necessary files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

// Fetch event - serving cached files or fetching from network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return the cached response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
