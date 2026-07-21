import React, { Children } from 'react'


type ContentProp = {
    children: React.ReactNode,
    className?: string
    style?: React.CSSProperties
}

export const ContentContainer: React.FC<ContentProp> = ({ children, className, style }) => {
  return (
    <ContentContainer className={className} style={{ maxWidth: 1200, padding: 10 }}>
        {children}
    </ContentContainer>
  )
}
