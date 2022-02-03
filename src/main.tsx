import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/index.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { registerWorker } from './services/workers'  
import App from './app'

registerWorker('/service_worker.js')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
