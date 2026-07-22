import React, { useState } from 'react'

import styles from './Search.module.css'
import { Button } from '../Button/Button'

type LinkFormProps = {
  onAdd: (input: {
    title: string
    url: string
    description?: string
    tags?: string[]
  }) => void
}

export const LinkForm: React.FC<LinkFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')
  const [tagsInput, setTagsInput] = useState('')

  const handleSave = () => {
    if (!title.trim() || !url.trim()) return

    const tags = tagsInput
    .split(',')
    .map(t => t.trim())
    .filter(Boolean)

    onAdd({ 
      title: title.trim(), 
      url: url.trim(), 
      description: description.trim(), 
      tags 
    })

    setTitle('')
    setUrl('')
    setDescription('')
    setTagsInput('')

  }


  return (
    <div className={styles['link-form']}>
      <div className={styles['field']}>

        <label className={styles['field-label']}>Title</label>

        <input type='text' 
          placeholder='Title...' 
          className={styles['form-input']} 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
        />

      </div>
     
      <div className={styles['field']}>

        <label className={styles['field-label']}>URL</label>

        <input type='text' 
          placeholder='https:example.com' 
          className={styles['form-input']} 
          value={url} 
          onChange={(e) => setUrl(e.target.value)}
        />

      </div>
      
      <div className={styles['field']}>

        <label className={styles['field-label']}>Description</label>

        <input type='text' 
          placeholder='Description (Optional)...' 
          className={styles['form-textarea']} 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
        />

      </div>
    
      <div className={styles['field']}>

        <label className={styles['field-label']}>Tag</label>

        <input type='text' 
          placeholder='Tags, comma separated (Optional)' 
          className={styles['form-input']} 
          value={tagsInput} onChange={(e) => setTagsInput(e.target.value)}
        />

      </div>
      

      <Button onClick={handleSave} className={styles['submit-btn']}>BOOKMARK</Button>

    </div>
  )
}
