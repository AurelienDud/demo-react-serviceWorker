/**
 * Messages
 */
const MESSAGE_NOT_SUPPORTED = 'Service workers are not supported.'
const MESSAGE_REGISTERED = 'Service worker registered.'
const MESSAGE_REGISTRATION_FAILED = 'The service worker registration failed.'

/**
 * Workers to register
 */
const WORKERS = [
  'offline_worker.js'
]

/**
 * Run service workers on window loads
 */
export default (function () {
  window.addEventListener('load', () => {
    // not supported 
    if (!('serviceWorker' in navigator)) return console.warn(MESSAGE_NOT_SUPPORTED)

    // registering
    WORKERS.forEach(worker => {
      navigator.serviceWorker.register((location.href).concat(worker))
        .then(() => console.info(MESSAGE_REGISTERED))
        .catch(error => console.warn(MESSAGE_REGISTRATION_FAILED, error))
    })
  })
})()