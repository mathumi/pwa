self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('fox-store').then((cache) => cache.addAll([
        '/',
        '/index.html',
        '/mathu.html',
        '/style.css',
        '/app.js',
        '/img/icon-72x72.png',
        '/img/icon-128x128.png',
      ])),
    );
  });