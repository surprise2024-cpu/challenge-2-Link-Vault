import React from 'react'

import styles from './Search.module.css'
import { Searchbar } from './Searchbar'
import { ContentContainer } from '../../ContentContainer'

export const Search: React.FC<any> = () => {
  return (
    <div className={styles['searchbar-cont']}>

      <ContentContainer>

        <Searchbar />
        
      </ContentContainer>
        
    </div>
  )
}
