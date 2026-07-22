import React, { useEffect, useState } from 'react'

import { Text } from '../components/Text/Text'
import type { Bookmark } from '../components/library/types'


export const LinksPage = () => {

  const [ linkData, setLinkData ] = useState<Bookmark | null>(null) 

    //const storedLinkData = localStorage.getItem('linkData') 

    {/*if (!storedLinkData) return null

    try {
        setLinkData(JSON.parse(storedLinkData) as Bookmark)
      }

      catch (error) {
        console.error('Error with data', error)
      }*/}
    
    {/*}})*/}

  useEffect(() => {

    const storedLinkData = localStorage.getItem('linkData')

    if (storedLinkData) {

      try {
        setLinkData(JSON.parse(storedLinkData) as Bookmark)
      }

      catch (error) {
        console.error('Error with data', error)
      }
    
    }

  }, [])

  if (!linkData) return <div>No data found</div>

  return (
    <div>
        <h2>Title: {linkData?.title}</h2>
        <p>Title: {linkData?.url}</p>
        <p>Title: {linkData?.description}</p>
    </div>
  )
}
