import React from 'react'

import styles from './Search.module.css'

type SearchbarProps = {
    value: string
    onChange: (value: string) => void
    placeholder?: string
}

export const SearchBar: React.FC<SearchbarProps> = ({ value, onChange, placeholder }) => {
  return (
    <div className={styles['searchbar-cont']}>
        <input type='text' className={styles['search-input']} 
            value={value} onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder} 
        />
    </div>
  )
}
