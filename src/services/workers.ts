const MESSAGE_NOT_SUPPORTED = 'Service workers are not supported.'
const MESSAGE_REGISTRATION_FAILED = 'The service worker registration failed.'

/**
 * run the service and manage errors
 */
export function registerWorker (url:string) {
  // not supported feature
  if (!('serviceWorker' in navigator)) return console.warn(MESSAGE_NOT_SUPPORTED)

  // register
  navigator.serviceWorker.register(url)
    .catch(error => console.warn(MESSAGE_REGISTRATION_FAILED, error))
}