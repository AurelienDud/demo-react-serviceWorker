/**
 * App name
 */
const APP_NAME = "demoReactSW"

/**
 * Cache name
 */
const CACHE_NAME = APP_NAME.concat("_cache_1")

/**
 * Origins whitelist
 * Allowed request to be cached from the url origin
 */
 const URLS_ORIGIN_WHITELIST = [
  location.origin,
  'https://picsum.photos'
]

/**
 * App path (scope) gotten from location
 * example: https://my.site/<scope>/index.html
 */
const APP_PATH = (() => {
  let subdirectory = location.href.replace(location.origin, '').replace(/\/$/i, '')
  let chunks = subdirectory.split('/')
  chunks.pop()
  return chunks.join('/')
})()

/**
 * Static assets
 */
const static_files = [
  '/',
  '/index.html',
  '/manifest.json',
  '/offline_worker.js',
  '/assets/index.css',
  '/assets/index.js',
  '/assets/vendor.js',
  '/assets/favicon.svg',
  '/assets/picsum-57.jpg',
  '/assets/picsum-206.jpg',
  '/assets/picsum-306.jpg',
  '/assets/picsum-924.jpg'
].map(file_path => (APP_PATH).concat(file_path))

/**
 * ON INSTALL
 */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(static_files))
  )
})

/**
 * ON FETCH
 */
self.addEventListener('fetch', event => {
  let url = new URL(event.request.url)

  // skip requests from unallowed origins
  // skip requests not coming from http
  if (
    !URLS_ORIGIN_WHITELIST.includes(url.origin)
    || !url.href.match(/^http/gi)
  ) return

  // handle requests
  // IIFE is used to define a async function where a promised response is expected
  event.respondWith((async () => {
    try {
      // fetch update
      let response = await fetch(event.request)

      // put in cache
      caches.open(CACHE_NAME)
        .then(cache => cache.put(event.request, response))

      // respond
      return response.clone()  
    } 
    catch (error) {
      // check cache
      let cachedResponse = await caches.match(event.request)
      
      // cache fallback
      if (cachedResponse) return cachedResponse.clone()

      // service unavalaible
      return new Response(null, { status: 503 })
    }
  })())
})