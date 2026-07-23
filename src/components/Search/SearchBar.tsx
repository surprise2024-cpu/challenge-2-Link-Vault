import React, { useState } from 'react'

import styles from './Search.module.css'
import { Text } from '../Text/Text'

type SearchbarProps = {
    value: string
    onChange: (value: string) => void
    placeholder?: string
    className?: string
}

export const SearchBar: React.FC<SearchbarProps> = ({ value, onChange, placeholder, className }) => {

  
  return (
    <div className={styles['searchbar-cont']}>

      <Text variant='span' className={styles['searchbar-label']}>Search</Text>

        <input type='text' className={`${styles['search-input']} ${className}`} 
            value={value} onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder} 
        />

    </div>
  )
}
