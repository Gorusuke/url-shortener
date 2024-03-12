'use client'

import { MouseEvent, Suspense, useEffect, useState } from "react";
import { LinksData } from "@/lib/interfaces";
import LinkIcon from "@/ui/Icons/linkIcon";
import styles from "./page.module.css";
import CopyIcon from "@/ui/Icons/copyIcon";
import Tooltip from "@/ui/tooltip";

export default function Home() {
  const [route, setRoute] = useState('')
  const [urlText, setUrlText] = useState('')
  const [lastLink, setLastLink] = useState({})
  const [allLinks, setAllLinks] = useState<LinksData[]>([])
  const [copy, setCopy] = useState(false)

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
        {Boolean(allLinks.length) &&
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={`${styles.cell} ${styles.cells}`}>Short Link</th>
                <th className={`${styles.cell} ${styles.cells}`}>Original Link</th>
              </tr>
            </thead>
            <tbody>
              {allLinks.toReversed().map((link) => 
                <tr key={link.rowid}>
                  <td className={styles.cells}>
                    <div className={styles.cellWithIcon}>
                      {`${route}/go/${link.shortUrl}`}
                      <Tooltip wasCopied={copy}>
                        <CopyIcon 
                          className={styles.copyIcon} 
                          setCopy={setCopy}
                          link={`${route}/go/${link.shortUrl}`} 
                        />
                      </Tooltip>
                    </div>
                  </td>
                  <td className={styles.cells}>{link.originalUrl}</td>
                </tr>
              )}
            </tbody>
          </table>
        }
      </main>
    </>
  );
}
