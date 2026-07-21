import React from 'react'

import styles from './Button.module.css'

type ButtonProps = {
  onClick?: () => void
  children?: React.ReactNode
  className?: string
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button className={`${styles['button-cont']} ${className}`} onClick={onClick}>
        {children}
    </button>
  )
}
