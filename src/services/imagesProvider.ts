import { nanoid } from 'nanoid'
import image1 from '../assets/images/picsum-57.jpg'
import image2 from '../assets/images/picsum-206.jpg'
import image3 from '../assets/images/picsum-306.jpg'
import image4 from '../assets/images/picsum-924.jpg'

/**
 * Images stored locally
 */
export const internalImages:Images = [
  {
    id: nanoid(),
    src: image1,
    author:"Nicholas Swanson",
    link:"https://unsplash.com/photos/SyBYM8R6VU4",
  },
  {
    id: nanoid(),
    src: image2,
    author:"Philipp Reiner",
    link:"https://unsplash.com/photos/qPJ6eRAMmCM",
  },
  {
    id: nanoid(),
    src: image3,
    author:"Paul Göran Eidens",
    link:"https://unsplash.com/photos/6T7kfc3VitU",
  },
  {
    id: nanoid(),
    src: image4,
    author:"Jakub Sejkora",
    link:"https://unsplash.com/photos/utqJcneoFjo",
  }
]

/**
 * Images store externally
 */
export const externalImages:Images = Array(4).fill(undefined).map((_, index) => ({
  id: nanoid(),
  src: `https://picsum.photos/400/400?random=${index}`,
  author: 'Unknown from Picsum',
  link: 'https://picsum.photos'
}))

