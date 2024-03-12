'use client'

import { MouseEvent, useEffect, useState } from "react";
import { LinksData } from "@/lib/interfaces";
import LinkIcon from "@/ui/linkIcon";
import styles from "./page.module.css";

export default function Home() {
  const [route, setRoute] = useState('')
  const [urlText, setUrlText] = useState('')
  const [lastLink, setLastLink] = useState({})
  const [allLinks, setAllLinks] = useState<LinksData[]>([])

  const createUrlShort = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const result = await fetch('/api/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({urlText})
    })
    const res = await result.json()
    setLastLink(res.data)
    setUrlText('')
  }

  useEffect(() => {
    setRoute(window.location.origin)
    const getLinks = async () => {
      const allLinks = await fetch('/api/links')
      const links = await allLinks.json()
      setAllLinks(links.data);
    }
    getLinks()
  }, [lastLink])

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Shorten Your Loooong Links!</h1>
        <p className={styles.subtitle}>Linky is an efficient and easy-to-use URL shortening service that streamlines your online experience.</p>
        <div className={styles.search}>
          <LinkIcon className={styles.icon}/>
          <input 
            className={styles.input}
            type="text"
            placeholder="Enter the link here..."
            value={urlText}
            onChange={(e) => setUrlText(e.target.value)}
          />
          <button className={styles.button} onClick={createUrlShort}>Short Url</button>
        </div>
      </main>
    </>
  );
}
