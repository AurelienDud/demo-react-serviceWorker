/**
 * Names
 */
const APP_NAME = "demoReactSW"
const STATIC_CACHE_NAME = APP_NAME.concat("_static")
const FETCHED_CACHE_NAME = APP_NAME.concat("_fetched")

/**
 * White list of cache
 */
const CACHE_WHITELIST = ['']

/**
 * White list of url origin
 */
const URLS_ORIGIN_WHITELIST = [
  location.origin,
  'https://picsum.photos'
]

/**
 * Static assets
 */
const static_files = [
  'index.html',
  'assets/index.css',
  'assets/index.js',
  'assets/vendor.js',
  'assets/favicon.svg',
  'assets/picsum-57.jpg',
  'assets/picsum-206.jpg',
  'assets/picsum-306.jpg',
  'assets/picsum-924.jpg'
].map(path => (location.href).concat(path)) 

/**
 * INSTALL
 * > cache static assets
 */
 self.addEventListener('install', event => {
  event.waitUntil(async () => {
    let cache = await caches.open(STATIC_CACHE_NAME)
    await cache.addAll(static_files)
  })
})

/**
 * ON ACTIVATE
 */
self.addEventListener('activate', event => {
  // keep the cache if there is no network
  if (!navigator.onLine) return 

  // empty the cache not whitelisted
  event.waitUntil(
    caches.keys().then(names => {
      names.forEach(name => (!CACHE_WHITELIST.includes(name) && caches.delete(name)))
    })
  )
})

/**
 * ON FETCH
 */
self.addEventListener('fetch', event => {
  let url = new URL(event.request.url)

  // skip requests with origin not not whitelisted
  // skip requests not coming from http
  if (
    !URLS_ORIGIN_WHITELIST.includes(url.origin)
    ||
    !event.request.url.match(/^http/gi)
  ) return

  // handle requests
  event.respondWith((async () => {
    // check cache
    let cachedResponse = await caches.match(event.request)
    
    try {
      // fetch update
      let response = await fetch(event.request)

      // put in cache
      caches.open(FETCHED_CACHE_NAME)
        .then(cache => cache.put(event.request, response))

      // respond
      return response.clone()  
    } catch (error) {
      // cache fallback
      if (cachedResponse) {
        return cachedResponse.clone()
      }

      // service unavalaible
      return new Response(null, { status: 503 })
    }
  })())
})