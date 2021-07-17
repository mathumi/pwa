self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('fox-store').then((cache) => cache.addAll([
        './index.html',
        './mathu.html',
        './style.css',
        './app.js',
        './speakers.json',
        './schedule.json',
        './img/icons/icon-72x72.png',
        './img/icons/icon-128x128.png',
      ])),
    );
  });

  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });