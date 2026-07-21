import React from 'react'

import styles from './Navbar.module.css'
import { ContentContainer } from '../../ContentContainer'

export const Navbar = () => {
  return (
    <nav>
        <ContentContainer className={styles['navbar-cont']}>
            <div>
                Navbar
            </div>
        </ContentContainer>
    </nav>
  )
}
