import React, { useState } from 'react'

import styles from './EditModal.module.css'
import type { Bookmark } from '../library/types'
import { Button } from '../Button/Button'
import { Text } from '../Text/Text'

type EditModalProps = {
    bookmark: Bookmark
    onSave: (updates: Partial<Bookmark>) => void
    onClose: () => void
}

export const EditModal: React.FC<EditModalProps> = ({ bookmark, onSave, onClose }) => {
  
  const [title, setTitle] = useState(bookmark.title)
  const [url, setUrl] = useState(bookmark.url)
  const [description, setDescription] = useState(bookmark.description)
  const [tagsInput, setTagsInput] = useState(bookmark.tags.join(', '))

  const handleSave = () => {
    if(!title.trim() || !url.trim()) return 
    const tags = tagsInput.split(',').map(t => t.trim()).filter(Boolean)
    onSave({ title: title.trim(), url: url.trim(), description: description?.trim(), tags })
    onClose()
  }
  
    return (
    <div className={styles['overlay']} onClick={onClose}>

        <div className={styles['modal']} onClick={(e) => e.stopPropagation()} >

            <Text variant='h2' className={styles['heading']}>Edit Link</Text>

            <label className={styles['label']} >Title</label>
            <input className={styles['input']} value={title} onChange={(e)=> setTitle(e.target.value)}/>

            <label className={styles['label']} >URL</label>
            <input className={styles['input']} value={url} onChange={(e)=> setUrl(e.target.value)}/>

            <label className={styles['label']} >Description</label>
            <textarea className={styles['input']} value={description} onChange={(e)=> setDescription(e.target.value)}/>

            <label className={styles['label']} >Tags</label>
            <input className={styles['input']} value={tagsInput} onChange={(e)=> setTagsInput(e.target.value)}/>
        
            <div className={styles['actions']}>
                <Button className={styles['save-btn']} onClick={handleSave}>Save Changes</Button>
                <Button className={styles['cancel-btn']} onClick={onClose}>Cancel</Button>

            </div>
        
        </div>
    </div>
  )
}
