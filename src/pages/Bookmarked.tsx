import React, { useState } from 'react'

import { useBookmarks } from '../components/hooks/useBookmarks'
import styles from './LinksPage.module.css'
import { Text } from '../components/Text/Text'
import { Button } from '../components/Button/Button'
import { NavLink } from 'react-router'
import { ContentContainer } from '../ContentContainer'
import { SearchBar } from '../components/Search/SearchBar'

export const Bookmarked: React.FC = () => {

  const { bookmarks, remove, toggleBookmark } = useBookmarks()

  const [query, setQuery] = useState('')
 
  const filtered = bookmarks.filter(b => {
    const q = query.trim().toLowerCase()
      if(!q) return true
      return (
        b.title.toLowerCase().includes(q) ||
        b.tags.some(tag => tag.toLowerCase().includes(q))
      )
  })

  const bookmarked = bookmarks.filter((b) => b.isBookmarked)
  
  if (bookmarked.length === 0) {
    return <div className={styles['empty']} >No bookmarked links yet</div>
  }

  return (
    <div className={styles['list-cont']}>

      <ContentContainer className={styles['searchbar-cont']} >

        <SearchBar value={query} onChange={setQuery} placeholder='Bookmarked Search' className={styles['searchbar-cont']}/>
      
        {/*{
          filtered.length === 0 ? (
            <div>No links Found</div>
          ) : (
            <div className={styles['list']}>
              {
                filtered.map((bookmark) => (
                  <div className={styles['card']}>
                    
                  </div>
                ))
              }
            </div>
          )
        }*/}
      </ContentContainer>

        <div className={styles['list']}>
          {
          bookmarked.map((bookmark) => (

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

                <Button className={styles['action-btn'] + ' ' + styles['bookmark-btn']} onClick={() => toggleBookmark(bookmark.id) } >UnBookmark</Button>
                <Button className={styles['action-btn'] + ' ' + styles['delete-btn']} onClick={() => remove(bookmark.id)} >DELETE</Button>
              
              </div>

            </div>
          ))
        }
        </div>  
        
    </div>
  )
}
