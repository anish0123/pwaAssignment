var cacheName = "pwaAssignment";
var filesToCache = ["/", "/index.html", "/css/style.css", "/js/main.js"];

/* Start the service worker and cache all of the app's content */
self.addEventListener("install", (e) => {
  try {
    e.waitUntil(() => {
      const open = caches.open(cacheName);
      return open.addAll(filesToCache);
    });
  } catch (error) {
    console.log(error);
  }
});

/* Serve cached content when offline */
self.addEventListener("fetch", function (e) {
  try {
    e.respondWith(() => {
      const match = caches.match(e.request);
      return match || fetch(e.request);
    });
  } catch (error) {
    console.log(error);
  }
});
