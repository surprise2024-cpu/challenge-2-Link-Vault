import React from 'react'

import styles from './Navbar.module.css'
import { ContentContainer } from '../../ContentContainer'
import { Text } from '../Text/Text'

export const Navbar: React.FC<any> = () => {
  return (
    <nav>
        <ContentContainer className={styles['navbar-cont']}>

            <div className={styles['content']}>

                <Text variant={'h2'} className={styles['logo']}>Vault Link</Text>
                
                <div className={styles.links}>
                    <a href='/' className={styles.link}>Home</a>
                    <a href='/contact-us' className={styles.link}>Contact Us</a>
                    <a href='/about-us' className={styles.link}>About Us</a>
                </div>

            </div>

        </ContentContainer>
    </nav>
  )
}
