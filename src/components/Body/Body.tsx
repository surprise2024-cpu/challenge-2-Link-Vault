import React from 'react'

import { ContentContainer } from '../../ContentContainer'
import styles from './Body.module.css'
import { Search } from '../Search/Search'
import { StatsPanel } from '../StatsPanel/StatsPanel'
import { useBookmarks } from '../hooks/useBookmarks'

export const Body: React.FC<any> = () => {
const { bookmarks, add, stats } = useBookmarks()

  return (
    <ContentContainer className={styles['body-cont']}>

        <section className={styles['first-sect']}>

            <div>

                {/*<Text variant='h2'>Store</Text>

                <Text variant='span'>Store</Text>*/}

                <Search onAdd={add}/>

            </div>

        </section>

        <section className={styles['sec-sect']}>

            <StatsPanel total={stats.total} bookmarked={stats.bookmarked} />

        </section>

    </ContentContainer>
  )
}
