import React from 'react'

import styles from './Search.module.css'
import { Button } from '../Button/Button'

export const Searchbar: React.FC<any> = () => {
  return (
    <div className={styles['search-bar']}>

      <input type='text' placeholder='Enter your link...' className={styles['search-input']} />
      <Button />
    </div>
  )
}
