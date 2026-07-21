import React from 'react'

import { ContentContainer } from '../../ContentContainer'
import styles from './Body.module.css'
import { Text } from '../Text/Text'
import { Search } from '../Search/Search'

export const Body: React.FC<any> = () => {
  return (
    <ContentContainer className={styles['body-cont']}>

        <section className={styles['first-sect']}>

            <div>

                <Text variant='h2'>Store</Text>

                <Text variant='span'>Store</Text>

                <Search />

            </div>

        </section>

        <section className={styles['sec-sect']}>

            <div className={styles['statistics']}>

                <div className={styles['stat-cont']}>

                    <div className={styles['stat']}>
                        <Text variant='h2'  >Total Links</Text>
                        <Text variant='h2'  >Total Links</Text>
                        <Text variant='h2'  >Total Links</Text>
                        <Text variant='h2'  >Total Links</Text>
                        <Text variant='h2'  >Total Links</Text>
                    </div>
                    


                </div>

                <div className={styles['stat-cont']}>

                    <div className={styles['stat']}>

                        <Text variant='h2'  >Book Mark</Text>
                        <Text variant='h2'  >Book Marks</Text>
                        <Text variant='h2'  >Book Mark</Text>
                        <Text variant='h2'  >Book Marks</Text>
                        <Text variant='h2'  >Book Mark</Text>

                    </div>

                </div>

                <div className={styles['stat-cont']}>

                    div

                </div>

            </div>

        </section>

    </ContentContainer>
  )
}
