import React, { useState } from 'react'

import { useBookmarks } from '../components/hooks/useBookmarks'
import styles from './LinksPage.module.css'
import { Text } from '../components/Text/Text'
import { Button } from '../components/Button/Button'
import { NavLink } from 'react-router'
import { ContentContainer } from '../ContentContainer'
import { SearchBar } from '../components/Search/SearchBar'
import mark from '../assets/undraw_save-to-bookmarks_9o51.png'
import { useAlert } from '../components/Alert/AlertProvider'
import type { Bookmark } from '../components/library/types'

export const Bookmarked: React.FC = () => {

  const { bookmarks, remove, toggleBookmark, edit } = useBookmarks()

  const [query, setQuery] = useState('')

  
  const [editingId, setEditingId] = useState<string | null>(null)
  const { showAlert, confirmAction } = useAlert()
  const editingBookmark = bookmarks.find(b => b.id === editingId)

  const bookmarked = bookmarks.filter((b) => b.isBookmarked)

  const q = query.trim().toLowerCase()

  const filtered = bookmarked.filter(b => {

      if(!q) return true
      return (
        b.title.toLowerCase().includes(q) ||
        b.description?.toLowerCase().includes(q) ||
        b.url.toLowerCase().includes(q) ||
        b.tags?.some(tag => tag.toLowerCase().includes(q))
      )
  })

  const handleDelete = async (id: string) => {
      const confirmed = await confirmAction('Are you sure you want to delete this link?')
      if(!confirmed) return 
      remove(id)
      showAlert('Link deleted successfully', 'success')
    }
  
    const handleEditSave = (updates: Partial<Bookmark>) => {
      if(!editingBookmark) return 
      edit(editingBookmark.id, updates)
      showAlert('Link updated successfuly', 'success')
    }

  
  
  if (bookmarked.length === 0) {
    return <div className={styles['empty']} >
      
      <img src={mark} alt='bookmark' className={styles['mark-icon']}/>  
      No bookmarked links yet
    </div>
  }

  return (
    <div className={styles['list-cont']}>

      <ContentContainer className={styles['searchbar-cont']} maxWidth={1640}>

        <SearchBar value={query} onChange={setQuery} placeholder='Bookmarked Search' className={styles['searchbar-cont']}/>
      

      </ContentContainer>

      {
        q && (
          <Text variant='p' className={styles['description']} >Showing Search Results</Text>
        )
      }

      <div className={styles['list']}>
        {
          filtered.length === 0 ? 
          (

              <div className={styles['empty']}>
                No links match your search
                
              </div>
            

            ) : filtered.map((bookmark) => 
            ( 
          
              
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
                <Button className={styles['action-btn'] + ' ' + styles['edit-btn']} onClick={() => handleEditSave(bookmark)} >Edit</Button>
                <Button className={styles['action-btn'] + ' ' + styles['delete-btn']} onClick={() => handleDelete(bookmark.id)} >DELETE</Button>
                
              </div>

            </div>
          ))
        
        }

        </div> 
    </div>
  )
}
