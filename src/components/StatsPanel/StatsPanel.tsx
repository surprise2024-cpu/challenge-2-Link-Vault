import React from 'react'

import styles from './StatsPanel.module.css'

type StatsPanelProps = {
    total: number
    bookmarked: number
}

export const StatsPanel: React.FC<StatsPanelProps> = ({ total, bookmarked }) => {
  return (
    <div className={styles['stats-cont']}>
        <div className={styles['stat-box']}>
            <span className={styles['stat-value']}>{total}</span>
            <span className={styles['stat-label']}>Total Links</span>
        </div>
        <div className={styles['stat-box']}>
            <span className={styles['stat-value']}>{bookmarked}</span>
            <span className={styles['stat-label']}>Bookmarked</span>
        </div>
    </div>
  )
}
