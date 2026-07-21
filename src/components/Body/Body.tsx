import React from 'react'

import { ContentContainer } from '../../ContentContainer'
import styles from './Body.module.css'
import { Text } from '../Text/Text'

export const Body = () => {
  return (
    <ContentContainer className={styles['body-cont']}>

        <section>
            <div>
                <Text variant='h2'>Store</Text>
                <Text variant='span'>Store</Text>
                <div>
                    
                </div>
            </div>
        </section>
        <section>
            <div>
                david
            </div>
        </section>

    </ContentContainer>
  )
}
