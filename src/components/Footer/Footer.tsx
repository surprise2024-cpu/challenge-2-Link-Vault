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
                    <Text variant='h2' >Vault Link</Text>
                </div>

                <div className={styles['sentence']}>
                    <Text variant='p' >Vault Link up and up</Text>
                </div>

                <div className={styles['socials']}>
                    <img src='' alt='just an image'/>
                </div>

            </div>

            <div className={styles['part2']}>

                <div className={styles['quick-links']}>

                    <a href='#/' >Home</a>
                    <a href='#/' >Contact Us</a>
                    <a href='#/' >About Us</a>

                </div>

            </div>

        </ContentContainer>

    </footer>
  )
}
