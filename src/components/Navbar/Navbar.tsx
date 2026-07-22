import React from 'react'

import styles from './Navbar.module.css'
import { ContentContainer } from '../../ContentContainer'
import { Text } from '../Text/Text'

import { NavLink } from 'react-router'

export const Navbar: React.FC<any> = () => {
  return (
    <nav>
        <ContentContainer className={styles['navbar-cont']}>

            <div className={styles['content']}>

                <Text variant={'h2'} className={styles['logo']}>Vault Link</Text>
                
                <div className={styles.links}>

                    <NavLink to={'/'} className={styles.link}>Home</NavLink>
                    <NavLink to={'/links-page'} className={styles.link}>Links</NavLink>
                    <NavLink to={'/bookmarked-page'} className={styles.link}>Bookmarked Links</NavLink>
                
                </div>

            </div>

        </ContentContainer>
    </nav>
  )
}
