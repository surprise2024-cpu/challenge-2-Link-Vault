import React from 'react'

type ContentProps = {
    children: React.ReactNode
    className?: string
}

export const ContentContainer: React.FC<ContentProps> = ({ children, className }) => {
  return (
    <div className={className} style={{ maxWidth: 1200, margin: 'auto'}}>
      {children}
    </div>
  )
}
