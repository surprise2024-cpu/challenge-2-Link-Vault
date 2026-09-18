import React from 'react'

import styles from './ConfirmDialog.module.css'
import { Button } from '../Button/Button'
import { Text } from '../Text/Text'

type ConfirmDialogProps = {
    message: string
    onConfirm: () => void
    onCancel: () => void
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ message, onConfirm, onCancel }) => {
  return (
    <div className={styles['overlay']}>

        <div className={styles['dialog']} onClick={(e) => e.stopPropagation()}>

            <Text variant='p' className={styles['message']} >{message}</Text>

            <div className={styles['actions']} >
                
                <Button className={styles['cancel-btn']} onClick={onCancel} >Cancel</Button>
                <Button className={styles['confirm-btn']} onClick={onConfirm} >Yes</Button>

            </div>

        </div>

    </div>
  )
}
