const CACHE_NAME = 'v1';
const URLS_TO_CACHE = [
  'https://script.google.com/macros/s/AKfycbxhwvA6n-W8ynddqSawoZSL8wnB3QXGJFmhfOSoncPJEFoXro2r1O8SkrGRwcpB9UobbA/exec', // Web app URL
  'https://drive.google.com/uc?export=download&id=1M0BoeEaYnl5JXnzmwIveeCXXTy47S6CT',
  'https://drive.google.com/uc?export=download&id=1rNkOkCvtkkMI2PiCw22cOfPSUl2jiHn5',
  'https://drive.google.com/uc?export=download&id=1rNkOkCvtkkMI2PiCw22cOfPSUl2jiHn5'
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
