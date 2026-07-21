import React from 'react'

import styles from './Search.module.css'
import { Searchbar } from './Searchbar'
import { ContentContainer } from '../../ContentContainer'

interface SearchProps {
  onAdd: (url: string) => void
}

export const Search: React.FC<SearchProps> = ({ onAdd }) => {
  return (
    <div className={styles['searchbar-cont']}>

      <ContentContainer>

        <Searchbar onAdd={onAdd} />
        
      </ContentContainer>
        
    </div>
  )
}
