/**
 * public/sw.js - Service Worker لموقع مؤسسة وجد الأصايل
 * ====================================================================
 * المعايير المطبقة:
 *  1. Offline First: دعم التصفح والعمل دون اتصال بالإنترنت
 *  2. Stale-While-Revalidate: استرجاع فوري من الكاش وتحديث البيانات في الخلفية
 *  3. Auto Cleanup: حذف الإصدارات القديمة من الكاش تلقائياً عند أي نشر جديد
 * ====================================================================
 */

const CACHE_NAME = 'wajd-asayel-v1.0.0';

// الأصول الأساسية المطلوب تخزينها مسبقاً للعمل دون اتصال
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/wa-logo.png',
  '/wa-logo.svg',
  '/favicon.ico',
  '/site.webmanifest',
  '/images/cr-certificate.webp',
  '/images/white-bed.webp'
];

// 1. مرحلة التثبيت (Install Event)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline assets');
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// 2. مرحلة التفعيل وحذف الكاش القديم (Activate Event)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[ServiceWorker] Clearing legacy cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. استراتيجية الاسترجاع الذكية (Fetch Event)
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // تخطي الطلبات غير المتعلقة بالـ HTTP/HTTPS (مثل chrome-extension)
  if (!request.url.startsWith('http')) return;

  // للملفات الصوتية والفيديوهات الكبيرة: الاعتماد على الشبكة فقط
  if (request.url.includes('/audio/') || request.url.includes('.mp4') || request.url.includes('.webm')) {
    event.respondWith(fetch(request));
    return;
  }

  // لصفحات التنقل (HTML): Network-First مع Fallback للكاش
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match('/index.html')))
    );
    return;
  }

  // للصور والخطوط والأصول الثابتة (Images, CSS, JS, Fonts): Stale-While-Revalidate
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseToCache));
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});
