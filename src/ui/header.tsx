'use client'

import styles from '@/app/page.module.css'
import Link from "next/link";
import { signIn, useSession } from 'next-auth/react';

const Header = () => {
  const {data: session} = useSession()
  console.log(session);
  
  return (
    <header>
      <nav className={styles.nav}>
        <Link href={'/'} className={styles.logo}>SHORTEN-URL</Link>
        <button onClick={() => signIn()} className={styles.modifyButton}>Login</button>
      </nav>
    </header>
  )
}

export default Header