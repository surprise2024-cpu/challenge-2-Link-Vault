import React from 'react'

import styles from './Search.module.css'
import { Searchbar } from './Searchbar'

export const Search: React.FC<any> = () => {
  return (
    <div className={styles['searchbar-cont']}>
        <Searchbar />
    </div>
  )
}
