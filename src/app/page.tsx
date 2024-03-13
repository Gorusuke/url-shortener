'use client'

import { MouseEvent, useState } from "react";
import InputSearch from "@/ui/inputSearch";
import TableLink from "@/ui/tableLink";
import EditSearch from "@/ui/editSearch";
import styles from "./page.module.css";

export default function Home() {
  const [urlText, setUrlText] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [updateEffect, setUpdateEffect] = useState('')
  const [newUrl, setNewUrl] = useState('')

  const createUrlShort = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if(!urlText) {
      alert('You need to enter a value')
      return
    }
    const result = await fetch('/api/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({urlText})
    })
    const res = await result.json()
    setUpdateEffect(res.data)
    setUrlText('')
  }

  const editShortUrl = async () => {
    if(!urlText) {
      alert('You need to enter a value')
      return
    }
    if(isEditing && newUrl) {
      const result = await fetch(`/api/shorten/${newUrl}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({value: urlText})
      })
      console.log(result)
      if(result.status === 200) {
        setUpdateEffect(prev => prev + 'edit')
      }
      setIsEditing(false)
    }
    setUrlText('')
  } 

  const deleteShortUrl = async (id: string) => {
    const result = await fetch(`/api/shorten/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if(result.status === 200){
      setUpdateEffect(prev => prev + 'delete')
    }
    setUrlText('')
  } 

  const handleEdit = (value: string, shortUrl: string) => {
    setUrlText(value)
    setIsEditing(true)
    setNewUrl(shortUrl)
  }

  const handleCancel = () => {
    setUrlText('')
    setIsEditing(false)
  }

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Shorten Your Loooong Links!</h1>
        <p className={styles.subtitle}>Linky is an efficient and easy-to-use URL shortening service that streamlines your online experience.</p>
        {isEditing 
          ? <EditSearch 
              urlText={urlText} 
              setUrlText={setUrlText} 
              handleCancel={handleCancel}
              editShortUrl={editShortUrl}
            />
          : <InputSearch 
              urlText={urlText} 
              setUrlText={setUrlText}
              isEditing={isEditing} 
              onClick={createUrlShort}
            />
        }
        <TableLink 
          deleteShortUrl={deleteShortUrl} 
          onClick={handleEdit}
          lastLink={updateEffect}
        />
      </main>
    </>
  );
}
