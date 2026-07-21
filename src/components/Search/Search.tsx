import React from 'react'

import styles from './Search.module.css'
import { LinkForm } from './LinkForm'
import { ContentContainer } from '../../ContentContainer'
import type { AddInput } from '../hooks/useBookmarks'

type SearchProps = {
  onAdd: (input: AddInput) => void
}

export const Search: React.FC<SearchProps> = ({ onAdd }) => {
  return (
    <div className={styles['searchbar-cont']}>

      <ContentContainer>

        <LinkForm onAdd={onAdd} />
        
      </ContentContainer>
        
    </div>
  )
}
