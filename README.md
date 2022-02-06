# React + Service Worker

A simple example using a [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) to cache resources from a React app. 

## Strategy

1. Window loading
1. App rendering into the DOM
1. App render a loading
1. Service worker registration
    - Service worker installation
        - Prefetched resources into the cache
    - Service worker activation
1. App render the content
1. Service worker intercept requests
    - cache response if possible
    - response from cache if necessary

This implementation is quite different from the others because I decided to register the service worker after the app initializes...and then delay it until the worker activated.   

Unless that strategy the worker can't control the application immediately. First, because the app will start - and fetch resources - before the worker is activated. Also because [a page will use a freshly registered worker from the next load unless a *claim* method is defined](https://developer.mozilla.org/en-US/docs/Web/API/Clients/claim)... during the worker activation.

That app architecture prevents both problems.

## Try it!

This project is online [on this Github Page](https://aureliendud.github.io/demoReactSW/).  
With Chrome browser you can open the Developer tools then open the *Application* tab.  
Two entries are interesting there : 
- *Service workers* will display workers currently registered and will allow you to set the page offline. 
- *Cache Storage* will display created cache and resources stored inside. 

Up to you to put the page offline then to reload it.
Yeah, it's still working! \o/




