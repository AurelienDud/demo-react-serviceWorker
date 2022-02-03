import React, { FunctionComponent } from 'react'
import Skeleton from 'react-loading-skeleton'
import useImagePreload from '../../services/useImagePreloadHook'

interface Thumbnail {
  image: Image
}

const Thumbnail:FunctionComponent<Thumbnail> = ({ image }) => {
  const isPreloaded = useImagePreload(image.src)

  if (!isPreloaded) return (
    <Skeleton containerClassName='aspect-square w-100' height="100%" />
  )

  return (
    <a 
      href={image.link} 
      target="_blank"
      title={image.author}
      className="overflow-hidden rounded-lg shadow-xl" rel="noreferrer"
    >
      <img 
        className='block'
        src={image.src} 
        alt="" 
      />
    </a>
  ) 
}

export default Thumbnail