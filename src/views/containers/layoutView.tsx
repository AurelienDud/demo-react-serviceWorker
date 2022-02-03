import React, { FunctionComponent } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const LayoutView:FunctionComponent = ({ children }) => (
  <div className='bg-slate-50'>
    <Header />
    <div className='container mx-auto p-5'>
      {children}
    </div>
    <Footer />
  </div>
)

export default LayoutView