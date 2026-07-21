import React from 'react'

{/*import styles from './Text.module.css'*/}

type TextProps = {
    children: React.ReactNode, 
    className?: string,
    variant: string
}

export const Text: React.FC<TextProps> = ({variant, children, className}) => {

    if(variant = 'h1') return <h1 className={className}>{children}</h1>
    if(variant = 'h2') return <h2 className={className}>{children}</h2>
    if(variant = 'p') return <p className={className}>{children}</p>
    if(variant = 'span') return <span className={className}>{children}</span>

  return (
    <div>
        {children}
    </div>
  )
}
