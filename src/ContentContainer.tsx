import React from 'react'

type ContentProps = {
    children: React.ReactNode
    className?: string
    maxWidth?: number
}

export const ContentContainer: React.FC<ContentProps> = ({ children, className, maxWidth }) => {
  return (
    <div className={className} style={{ maxWidth, margin: 'auto'}}>
      {children}
    </div>
  )
}
