import React, { useEffect, useState } from 'react'

import type { Bookmark } from '../components/library/types'
import { useBookmarks } from '../components/hooks/useBookmarks'
import styles from './LinksPage.module.css'
import { Text } from '../components/Text/Text'
import { NavLink } from 'react-router'
import { Button } from '../components/Button/Button'
import { SearchBar } from '../components/Search/SearchBar'
import { ContentContainer } from '../ContentContainer'

export const LinksPage: React.FC = () => {

  const {bookmarks, remove, toggleBookmark }  = useBookmarks()
  const [query, setQuery] = useState('')
 
  const filtered = bookmarks.filter(b => {
    const q = query.trim().toLowerCase()
      if(!q) return true
      return (
        b.title.toLowerCase().includes(q) ||
        b.tags.some(tag => tag.toLowerCase().includes(q))
      )
  })

  if (bookmarks.length === 0) {
    return <div className={styles['empty']} >No links saved yet</div>
  }

  return (
    
    <div className={styles['list-cont']} >

      <ContentContainer className={styles['searchbar-cont']} >

        <SearchBar value={query} onChange={setQuery} placeholder='Link Search' className={styles['searchbar-cont']}/>
      
      </ContentContainer>

      <div className={styles['list']}>
        {
          bookmarks.map((bookmark) => (

            <div key={bookmark.id} className={styles['card']} >

              <Text variant='h2' className={styles['title']} >{ bookmark.title }</Text>
            
              <NavLink to={bookmark.url} className={styles['url']} >{bookmark.url}</NavLink>

              {bookmark.description && <Text variant='p' className={styles['description']} >{ bookmark.description }</Text> }

              {
                bookmark.tags.length > 0 && (

                  <div className={styles['tags']} >

                    {
                      bookmark.tags.map((tag) => (
                        <Text variant='span' key={tag} className={styles['tag']} >{tag}</Text>
                      ))
                    }

                  </div>
                )
              }

              <div className={styles['actions']} >

                <Button className={styles['action-btn'] + ' ' + styles['bookmark-btn']} onClick={() => toggleBookmark(bookmark.id) } >{ bookmark.isBookmarked ? 'Bookmarked' : 'Bookmark' }</Button>
                <Button className={styles['action-btn'] + ' ' + styles['delete-btn']} onClick={() => remove(bookmark.id)} >DELETE</Button>
              
              </div>

            </div>
          ))
        }
      </div>
    </div>
    
  )
}
