/**
 * Messages
 */
const MESSAGE_NOT_SUPPORTED = 'Service workers are not supported.'
const MESSAGE_REGISTRATION_FAILED = 'The service worker registration failed.'

/**
 * Register 
 */
export async function registerServiceWorker (path:string, callback:() => void) {
  // registering
  try {
    // check feature availablity
    if (!('serviceWorker' in navigator)) throw MESSAGE_NOT_SUPPORTED

    // register
    await navigator.serviceWorker.register((location.href).concat(path))
    await navigator.serviceWorker.ready
  } 
  
  // errors
  catch (error) {
    console.warn(error || MESSAGE_REGISTRATION_FAILED)
  } 
  
  // callback
  finally {
    callback()
  }
}