import { useState, useEffect } from "react"

const useNetwork = () => {
  const [isOnline, setIsOnline] = useState<boolean>(true)

  useEffect(() => {
    // handler
    const updateState = () => setIsOnline(navigator.onLine)

    // listen
    window.addEventListener('online', updateState)
    window.addEventListener('offline', updateState)
    
    // init
    updateState()
    
    // unmount
    return () => {
      window.removeEventListener('online', updateState)
      window.removeEventListener('offline', updateState)
    }
  }, [])

  return isOnline
}

export default useNetwork