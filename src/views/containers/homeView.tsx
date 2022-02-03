import React, { FunctionComponent } from 'react'
import Thumbnail from '../components/thumbnail'
import { internalImages, externalImages } from '../../services/imagesProvider'

// styles classnames
const groupStyle = 'mb-10'
const titleStyle = 'text-2xl mb-3'
const galleryStyle = 'grid grid-cols-2 md:grid-cols-4 auto-rows-auto gap-4 md:gap-6 lg:gap-8'

const App:FunctionComponent = () => (
  <>
    <div className={groupStyle}>
      <p className={titleStyle}>
        Internal images
      </p>
      <div className={galleryStyle}>
        {internalImages.map(image => <Thumbnail key={image.id} image={image}/>)}
      </div>
    </div> 

    <div className={groupStyle}>
      <p className={titleStyle}>
        External images
      </p>
      <div className={galleryStyle}>
        {externalImages.map(image => <Thumbnail key={image.id} image={image}/>)}
      </div>
    </div>
  </>
)

export default App
