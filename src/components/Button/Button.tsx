import React from 'react'

import styles from './Button.module.css'

interface ButtonProps {
  onClick?: () => void
  children?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className={styles['button-cont']} onClick={onClick}>
        {children}
    </button>
  )
}
