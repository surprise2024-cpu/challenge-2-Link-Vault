import React from 'react'

import styles from './Search.module.css'
import { Text } from '../Text/Text'
import { useNavigate } from 'react-router'
import { Button } from '../Button/Button'
import add from '../../assets/plus.png'

type SearchbarProps = {
    value: string
    onChange: (value: string) => void
    placeholder?: string
    className?: string
}

export const SearchBar: React.FC<SearchbarProps> = ({ value, onChange, placeholder, className }) => {

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/form-page');
  } 
  
  return (
    <div className={styles['searchbar-cont']}>

      <Text variant='span' className={styles['searchbar-label']}>Search</Text>

        <input type='text' className={`${styles['search-input']} ${className}`} 

            value={value} onChange={(e) => onChange(e.target.value)}

            placeholder={placeholder} 
        />
        <Button className={styles['searchbar-btn']} onClick={handleRedirect}>
          
          <img src={add} alt='add icon' />

          Add Link
          
        </Button>

    </div>
  )
}
