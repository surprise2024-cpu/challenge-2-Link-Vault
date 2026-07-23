import React, { createContext, useContext, useState, useCallback } from 'react'

import type { ReactNode } from 'react'

import { Alert } from './Alert'
import type { AlertData, AlertType, AlertContextType } from '../library/types'
import styles from './Alert.module.css'
import { ConfirmDialog } from '../ConfirmDialog/ConfirmDialog'

const AlertContext = createContext<AlertContextType | undefined>(undefined)

export const AlertProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const [alerts, setAlerts] = useState<AlertData[]>([]);

  const [confirmState, setConfirmState] = useState<{
    message: string
    resolve: (value: boolean) => void 
  } | null>()

  const showAlert = useCallback((message: string, type: AlertType = 'info') => {

    const id = Date.now().toString();

    setAlerts((prev) => [...prev, { id, message, type }])

  }, []);

  const removeAlert = useCallback((id: string) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id))
  }, [])

  const confirmAction = useCallback((message: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setConfirmState({ message, resolve })
    })
  }, [])

  const handleConfirmResult = (result: boolean) => {
    confirmState?.resolve(result)
    setConfirmState(null)
  }

  return (
    <AlertContext.Provider value={{ showAlert, confirmAction }}>

      {children}

      <div className={styles['alert-overlay']}>

        {
          alerts.map((alert) => (
            <Alert key={alert.id} alert={alert} onClose={removeAlert}/>
            
          ))
        }

      </div>

      {
        confirmState && (
          <ConfirmDialog message={confirmState.message}
          onConfirm={() => handleConfirmResult(true)}
          onCancel={() => handleConfirmResult(false)}/>
        )
      }

    </AlertContext.Provider>
  )
}

//for children who want to access the system
export const useAlert = (): AlertContextType => {
  const context = useContext(AlertContext)

  if(!context) {
    throw new Error('useAlert must be used within an AlertProvider')
  }

  return context
}
