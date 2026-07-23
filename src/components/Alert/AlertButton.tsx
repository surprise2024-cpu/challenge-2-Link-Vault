import React from 'react'

type AlertButtonProps = {
    children: React.ReactNode
}

export const AlertButton: React.FC<AlertButtonProps> = ({ children }) => {
  return (
    <button>{children}</button>
  )
}
