import React, { FunctionComponent, useEffect, useState } from 'react'
import LayoutView from './views/containers/layoutView'
import HomeView from './views/containers/homeView'
import Spinner from './views/components/spinner'
import { registerServiceWorker } from './services/worker'

/**
 * Service worker path
 */
const APP_WORKER = 'offline_worker.js'

/**
 * App
 */
const App:FunctionComponent = () => {
  const [ isReady, setIsReady ] = useState(false)

  // Service worker registering
  useEffect(() => {
    registerServiceWorker(APP_WORKER, () => setIsReady(true)) 
  }, [])

  // Loading
  if (!isReady) return <Spinner />

  // Render app
  return (
    <LayoutView>
      <HomeView />
    </LayoutView>
  )
}

export default App