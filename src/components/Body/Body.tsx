import React from 'react'

import { ContentContainer } from '../../ContentContainer'
import styles from './Body.module.css'
import { Search } from '../Search/Search'
import { StatsPanel } from '../StatsPanel/StatsPanel'
import { useBookmarks } from '../hooks/useBookmarks'

export const Body: React.FC<any> = () => {
const { add, stats } = useBookmarks()

  return (
    <ContentContainer className={styles['body-cont']} maxWidth={1640}>

        <section className={styles['first-sect']}>

            <Search onAdd={add}/>

        </section>

        <section className={styles['sec-sect']}>

            <StatsPanel total={stats.total} bookmarked={stats.bookmarked} />

        </section>

    </ContentContainer>
  )
}
