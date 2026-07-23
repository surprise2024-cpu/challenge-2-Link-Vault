import React, { useState } from 'react'

import styles from './Navbar.module.css'
import { ContentContainer } from '../../ContentContainer'
import { Text } from '../Text/Text'

import { NavLink } from 'react-router'
import { SearchBar } from '../Search/SearchBar'
import { useBookmarks } from '../hooks/useBookmarks'

export const Navbar: React.FC<any> = () => {

    const[isOpen, setIsOpen] = useState(false)

    const closeMenu = () => setIsOpen(false)

    const [query, setQuery] = useState('')
    
    const {bookmarks}  = useBookmarks()

    const filtered = bookmarks.filter(b => {
        const q = query.trim().toLowerCase()
        if(!q) return true
        return (
            b.title.toLowerCase().includes(q) ||
            b.tags.some(tag => tag.toLowerCase().includes(q))
        )
    })

  return (
    <nav>
        <ContentContainer className={styles['navbar-cont']}>

            <div className={styles['content']}>

                <Text variant={'h2'} className={styles['logo']}>Vault Link</Text>
                
                <button className={styles['hamburger']}
                    onClick={() => setIsOpen(prev => !prev)}
                    aria-label='Toggle menu'
                    aria-expanded={isOpen}
                >
                    <span className={isOpen ? styles['open'] : ''} />
                    <span className={isOpen ? styles['open'] : ''} />
                    <span className={isOpen ? styles['open'] : ''} />
                </button>

                
                    {/*<SearchBar value={query} onChange={setQuery}/>*/}
                 

                <div className={`${styles.links} ${isOpen ? styles['links-open'] : ''} `}>

                    <NavLink to={'/'} className={styles.link} onClick={closeMenu} >Home</NavLink>
                    <NavLink to={'/links-page'} className={styles.link} onClick={closeMenu}>Links</NavLink>
                    <NavLink to={'/bookmarked-page'} className={styles.link} onClick={closeMenu} >Bookmarked Links</NavLink>
                
                </div>

            </div>

        </ContentContainer>
    </nav>
  )
}
