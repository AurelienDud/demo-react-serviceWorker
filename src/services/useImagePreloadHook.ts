import { useState, useEffect } from "react"

const useImagePreload = (src:string) => {
  const [isPreloaded, setIsPreloaded] = useState<boolean>(false)

  useEffect(() => {
    let isMounted = true

    // preloader
    const handlePreload = async (url:string) => {
      await new Promise((resolve, reject) => {
        const img = new Image()
        img.src = url
        img.onload = () => resolve(true)
        img.onerror = () => reject(false)
      })
      
      isMounted && setIsPreloaded(true)
    }
    
    // init
    handlePreload(src)

    // unmount
    return () => { isMounted = false }
  }, [src])

  return isPreloaded
}

export default useImagePreload