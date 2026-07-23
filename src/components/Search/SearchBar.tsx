import React from 'react'

import styles from './Search.module.css'

type SearchbarProps = {
    value: string
    onChange: (value: string) => void
    placeholder?: string
    className?: string
}

export const SearchBar: React.FC<SearchbarProps> = ({ value, onChange, placeholder, className }) => {
  return (
    <div className={styles['searchbar-cont']}>
        <input type='text' className={`${styles['search-input']} ${className}`} 
            value={value} onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder} 
        />
    </div>
  )
}
