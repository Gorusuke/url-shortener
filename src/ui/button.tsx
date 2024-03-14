'use client'

import { signIn, signOut } from 'next-auth/react';
import styles from '@/app/page.module.css'

const Button = ({text}: {text: string}) => {
  return (
    <button 
      className={styles.modifyButton}
      onClick={text === 'Login' 
        ? () => signIn('github', { callbackUrl: '/dashboard'})
        : () => signOut({callbackUrl: '/'}) 
      } 
    >
      {text}
    </button>
  )
}

export default Button