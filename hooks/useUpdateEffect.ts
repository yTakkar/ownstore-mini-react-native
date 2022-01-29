import { useRef, useEffect, EffectCallback } from 'react'

const useUpdateEffect = (effect: EffectCallback, dependencies = []) => {
  const isInitialMount = useRef(true)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      effect()
    }
  }, dependencies)
}

export default useUpdateEffect
