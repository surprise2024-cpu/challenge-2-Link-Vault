import React from 'react'

import styles from './Footer.module.css'
import { ContentContainer } from '../../ContentContainer'
import { Text } from '../Text/Text'

export const Footer = () => {
  return (
    <footer>

        <ContentContainer className={styles['footer-cont']}>

            <div className={styles['part1']}>

                <div className={styles['heading']}>

                    <Text variant='h2'>Vault Link</Text>

                </div>

                <div className={styles['sentence']}>
                    <Text variant='p' >Vault Link up and up</Text>
                </div>

                <div className={styles['socials']}>
                    <img src='' alt='just an image'/>
                    <img src='' alt='just an image'/>
                    <img src='' alt='just an image'/>
                </div>

            </div>

            <div className={styles['part2']}>

                <Text variant='span' className={styles['heading']}>Quick Links: </Text>

                <div className={styles['quick-links']}>

                    <a href='#/' className={styles.link}>Home</a>
                    <a href='#/' className={styles.link}>Contact Us</a>
                    <a href='#/' className={styles.link}>About Us</a>

                </div>

            </div>

        </ContentContainer>

    </footer>
  )
}
