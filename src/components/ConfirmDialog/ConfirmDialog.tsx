import React from 'react'

import styles from './ConfirmDialog.module.css'
import { Button } from '../Button/Button'

type ConfirmDialogProps = {
    message: string
    onConfirm: () => void
    onCancel: () => void
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ message, onConfirm, onCancel }) => {
  return (
    <div className={styles['overlay']}>

        <div className={styles['dialog']} onClick={(e) => e.stopPropagation()}>

            <p className={styles['message']} >{message}</p>

            <div className={styles['actions']} >

                <Button className={styles['confirm-btn']} onClick={onConfirm} >Yes</Button>
                <Button className={styles['cancel-btn']} onClick={onCancel} >Cancel</Button>

            </div>

        </div>

    </div>
  )
}
