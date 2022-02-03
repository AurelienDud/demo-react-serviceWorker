import React, { FunctionComponent } from 'react'
import LayoutView from './views/containers/layoutView'
import HomeView from './views/containers/homeView'

const App:FunctionComponent = () => (
  <LayoutView>
    <HomeView />
  </LayoutView>
)

export default App