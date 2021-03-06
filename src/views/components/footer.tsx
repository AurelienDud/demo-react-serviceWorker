import React, { FunctionComponent } from 'react'

const Footer:FunctionComponent = () => {
  return (
    <div className='p-5 mt-5 text-center text-white bg-gradient-to-r from-zinc-800 to-slate-700'>
      © 2022 - Aurélien Dudonney
      <br />
      Build quickly with <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">ViteJs</a>
      <br />
      Imaged thanks to <a className="underline" href="https://picsum.photos/" target="_blank" rel="noreferrer">Picsum</a>
    </div>
  )
}

export default Footer