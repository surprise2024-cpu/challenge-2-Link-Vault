import React from 'react'

import styles from './StatsPanel.module.css'
import { Button } from '../Button/Button'
import { useNavigate } from 'react-router'

type StatsPanelProps = {
    total: number
    bookmarked: number
}

export const StatsPanel: React.FC<StatsPanelProps> = ({ total, bookmarked }) => {

    const navigate = useNavigate()

    const handleLinksPage = () => {

        navigate('/LinksPage')
    }

    const handleBookmarkedPage = () => {

        throw new Error('Function not implemented.')
    }

  return (
    <div className={styles['stats-cont']}>

        <div className={styles['stat-box']}>
            
            <span className={styles['stat-value']}>{total}</span>
            <span className={styles['stat-label']}>Total Links</span>

            <Button onClick={handleLinksPage} className={styles['view-btn']}>VIEW TOTAL LINKS</Button>

        </div>

        

        <div className={styles['stat-box']}>

            <span className={styles['stat-value']}>{bookmarked}</span>
            <span className={styles['stat-label']}>Bookmarked</span>

            <Button onClick={handleBookmarkedPage} className={styles['view-btn']}>VIEW BOOKMARKED LINKS</Button>
        </div>

        

    </div>
  )
}
