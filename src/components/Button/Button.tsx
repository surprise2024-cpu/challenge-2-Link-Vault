import React from 'react'

import styles from './Button.module.css'

export const Button: React.FC<any> = () => {
  return (
    <button className={styles['button-cont']}>
        SAVE
    </button>
  )
}
