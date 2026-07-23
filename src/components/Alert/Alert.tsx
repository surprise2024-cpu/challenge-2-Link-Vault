import React, { useEffect } from 'react'

import type { AlertData } from '../library/types'
import styles from './Alert.module.css'

type AlertProps = {
    alert: AlertData,
    onClose: (id: string) => void
}

export const Alert: React.FC<AlertProps> = ({ alert, onClose}) => {

    useEffect(() => {

        const timer = setTimeout(() => {
            onClose(alert.id)
        }, 4000)//auto closes after 4s

        return () => clearTimeout(timer)
    }, [alert.id, onClose])

    const getAlertBgColor = () => {
        switch (alert.type) {
            case 'success': return '#d4edda'
            case 'error': return '#f8d7da'
            case 'warning': return '#fff3cd'
            case 'info': return '#d1ecf1'
            default: return '#e2e3e5'
        }
    }

  return (
    <div style={{ backgroundColor: getAlertBgColor() }}  className={styles['alert-cont']}>

        <span>{alert.message}</span>

        <button onClick={() => onClose(alert.id) } 

        className={styles['alert-btn']}>
            X
        </button>

    </div>
  )
}
