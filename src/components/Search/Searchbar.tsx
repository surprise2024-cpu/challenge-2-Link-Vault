import React from 'react'

import styles from './Search.module.css'

export const Searchbar: React.FC<any> = () => {
  return (
    <div className={styles['search-bar']}>
      <input type='text' placeholder='Enter your link...' className={styles['search-input']} />
    </div>
  )
}
