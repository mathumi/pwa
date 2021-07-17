self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('fox-store').then((cache) => cache.addAll([
        './index.html',
        './mathu.html',
        './styles.css',
        './app.js',
        './speakers.json',
        './schedule.json',
        './img/icons/icon-72x72.png',
        './img/icons/icon-128x128.png',
        'https://cnstatic.devcb.in/static/app-static-assets/cb-vue/cb-vue-dev-test-b-v1/service-worker.js'
      ])),
    );
  });

  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });