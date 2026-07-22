import React from 'react'

import styles from './Footer.module.css'
import { ContentContainer } from '../../ContentContainer'
import { Text } from '../Text/Text'

import tweet from '../../assets/icons8-x-twitter-50.png'
import insta from '../../assets/icons8-instagram-50.png'
import face from '../../assets/icons8-facebook-50.png'

import { NavLink } from 'react-router'

export const Footer: React.FC<any> = () => {
  return (
    <footer>

        <ContentContainer className={styles['footer-cont']}>

            <div className={styles['part1']}>

                
                <Text variant='h2' className={styles['heading']}>Vault Link</Text>
                <Text variant='p' className={styles['sentence']} >Vault Link, we keep your links safe and sound.</Text>
                

                <div className={styles['socials']}>

                    <img src={tweet} className={styles['image']} alt='twitter'/>
                    <img src={face} className={styles['image']} alt='facebook'/>
                    <img src={insta} className={styles['image']} alt='instagram'/>

                </div>

            </div>

            <div className={styles['part2']}>

                <Text variant='span' className={styles['heading']}>Quick Links: </Text>

                <div className={styles['quick-links']}>

                    <NavLink to={'/'} className={styles.link}>Home</NavLink>
                    <NavLink to={'/links-page'} className={styles.link}>Links</NavLink>
                    <NavLink to={'/bookmarked-page'} className={styles.link}>Bookmarked Links</NavLink>

                </div>

            </div>

        </ContentContainer>

    </footer>
  )
}
