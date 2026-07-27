import React, { useState } from 'react'

import styles from './Navbar.module.css'

import { Text } from '../Text/Text'

import { NavLink } from 'react-router'

import { useBookmarks } from '../hooks/useBookmarks'

export const Navbar: React.FC<any> = () => {

    const[isOpen, setIsOpen] = useState(false)

    const closeMenu = () => setIsOpen(false)

  return (
    <>
            <button className={styles['hamburger']}
                    onClick={() => setIsOpen(prev => !prev)}
                    aria-label='Toggle menu'
                    aria-expanded={isOpen}
                >
                    <span className={isOpen ? styles['open'] : ''} />
                    <span className={isOpen ? styles['open'] : ''} />
                    <span className={isOpen ? styles['open'] : ''} />
            </button>

            {isOpen && <div className={styles['overlay']} onClick={closeMenu}/>}

            <nav>
                <div className={`${styles['sidebar']} ${isOpen ? styles['sidebar-open'] : ''}`}>

                    <div className={styles['brand']}>

                        <Text variant={'h2'} className={styles['logo']}>Vault Link</Text>
                        <div className={styles['divider']}/>

                    </div>
                    
            
                    <div className={styles.links}>

                        <NavLink to={'/'} className={ ({isActive}) => `${styles.link} ${isActive ? styles['link-active'] : ''}`} onClick={closeMenu} >Home</NavLink>
                        <NavLink to={'/links-page'} className={ ({isActive}) => `${styles.link} ${isActive ? styles['link-active'] : ''}`} onClick={closeMenu}>Links</NavLink>
                        <NavLink to={'/bookmarked-page'} className={ ({isActive}) => `${styles.link} ${isActive ? styles['link-active'] : ''}`} onClick={closeMenu} >Bookmarked Links</NavLink>
                    
                    </div>

                </div>
            </nav>

        </>

    )
}
