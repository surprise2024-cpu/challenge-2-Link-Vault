import React from 'react'

import styles from './StatsPanel.module.css'
import { Button } from '../Button/Button'

type StatsPanelProps = {
    total: number
    bookmarked: number
}

export const StatsPanel: React.FC<StatsPanelProps> = ({ total, bookmarked }) => {

    function handleSave(): void 
    {
        throw new Error('Function not implemented.')
    }

  return (
    <div className={styles['stats-cont']}>

        <div className={styles['stat-box']}>
            
            <span className={styles['stat-value']}>{total}</span>
            <span className={styles['stat-label']}>Total Links</span>

            <Button onClick={handleSave} className={styles['view-btn']}>VIEW TOTAL LINKS</Button>

        </div>

        

        <div className={styles['stat-box']}>

            <span className={styles['stat-value']}>{bookmarked}</span>
            <span className={styles['stat-label']}>Bookmarked</span>

            <Button onClick={handleSave} className={styles['view-btn']}>VIEW BOOKMARKED LINKS</Button>
        </div>

        

    </div>
  )
}
