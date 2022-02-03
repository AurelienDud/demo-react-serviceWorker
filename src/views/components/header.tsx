import React, { FunctionComponent } from 'react'
import useNetwork from '../../services/useNetworkHook'
import logo from '../../assets/images/favicon.svg'

const Header:FunctionComponent = () => {
  const isOnline = useNetwork()

  return (
    <div className={`sticky top-0 z-30 flex p-5 mb-5 align-middle ${isOnline ? 'bg-green-300' : 'bg-red-300'}`}>
      <img src={logo} className='w-10'/>
      <div className='text-2xl text-center grow mr-10 my-auto'>
        You are <span className='font-bold'>{isOnline ? "online" : "offline"}</span>
      </div>
    </div>
  )
}

export default Header