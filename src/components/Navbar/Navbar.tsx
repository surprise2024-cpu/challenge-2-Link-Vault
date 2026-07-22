import React, { useState } from 'react'

import styles from './Navbar.module.css'
import { ContentContainer } from '../../ContentContainer'
import { Text } from '../Text/Text'

import { NavLink } from 'react-router'

export const Navbar: React.FC<any> = () => {

    const[isOpen, setIsOpen] = useState(false)

    const closeMenu = () => setIsOpen(false)

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
