import React, { FunctionComponent } from 'react'

/**
 * Spinner
 */
const Spinner:FunctionComponent = () => (
  <div className="h-screen w-screen flex bg-slate-50">
    <div className="flex justify-center items-center m-auto">
      <div className="spinner-border animate-spin inline-block w-10 h-10 border-t-4 border-l-4 border-sky-600 rounded-full" role="status">
        <span className="sr-only">
          Loading...
        </span>
      </div> 
    </div>
  </div>
)

export default Spinner