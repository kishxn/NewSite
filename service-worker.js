self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("employee-app-v1").then((cache) => {
      return cache.addAll(["/index.html", "/manifest.json", "/icon-192.png", "/icon-512.png"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => {
      return res || fetch(event.request);
    })
  );
});
