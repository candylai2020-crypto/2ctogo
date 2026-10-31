// 💡 記得：每次大改呢個檔案，將 v 數字加大 (例如 v3 -> v4)
const CACHE_NAME = '2ctogo-cache-v506';

self.addEventListener('install', event => {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    const url = event.request.url;

    // FCM / messaging SW 唔攔截
    if (url.includes('firebase-messaging-sw') || url.includes('googleapis.com/identitytoolkit') || url.includes('fcm.googleapis.com')) {
        return;
    }

    // HTML / 導航：永遠網絡優先，唔好派舊版
    let pathname = '/';
    try { pathname = new URL(url).pathname; } catch (e) {}
    if (event.request.mode === 'navigate' || /\.html($|\?)/.test(url) || pathname === '/' || pathname === '/index.html') {
        event.respondWith(
            fetch(event.request).catch(() => caches.match(event.request))
        );
        return;
    }

    const isStaticAsset =
        url.includes('.css') ||
        url.includes('.png') ||
        url.includes('.jpg') ||
        url.includes('.svg') ||
        url.includes('/assets/') ||
        url.includes('cdnjs.cloudflare.com') ||
        url.includes('unpkg.com') ||
        url.includes('fonts.googleapis.com') ||
        url.includes('fonts.gstatic.com');

    if (isStaticAsset) {
        event.respondWith(
            caches.match(event.request).then(response => {
                return response || fetch(event.request).then(fetchRes => {
                    return caches.open(CACHE_NAME).then(cache => {
                        if (event.request.method === 'GET') {
                            cache.put(event.request, fetchRes.clone());
                        }
                        return fetchRes;
                    });
                });
            })
        );
        return;
    }

    event.respondWith(fetch(event.request));
});
