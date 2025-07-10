const CACHE_NAME = 'stitch-counter-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './logo.png',
  './maquina.gif',
  './maquina-parada.png',
  './sparkles.gif'
];

// Instalação do service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptação de requisições
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retorna o cache se encontrado, senão faz a requisição
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Atualização do cache
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 