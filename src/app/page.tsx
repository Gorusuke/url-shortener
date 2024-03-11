'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { MouseEvent, useState } from "react";

export default function Home() {
  const [urlText, setUrlText] = useState('')

  const createUrlShort = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const result = await fetch('/api/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({urlText})
    })
    console.log(result)
  }

  return (
    <main className={styles.main}>
      <h1>url shortener</h1>
      <div>
        <h3>Create a url shortener</h3>
        <input 
          type="text"
          placeholder="Enter a url"
          value={urlText}
          onChange={(e) => setUrlText(e.target.value)}
        />
        <button onClick={createUrlShort}>Short url</button>
      </div>
    </main>
  );
}
