import { useCallback, useState } from 'react'

export const useOpener = (
  initialState = {
    anchor: null,
    isOpen: false
  }
) => {
  const [opener, setOpener] = useState(initialState)

  const close = useCallback(() => setOpener({ anchor: null, isOpen: false }), [])

  const open = useCallback((event = {}) => {
    const { currentTarget = null } = event

    setOpener({ anchor: currentTarget, isOpen: true })
  }, [])

  const toggle = opener.isOpen ? close : open

  return {
    ...opener,
    close,
    open,
    toggle
  }
}
