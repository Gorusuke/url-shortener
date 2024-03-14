import styles from '@/app/page.module.css'
import Link from "next/link";
import { auth } from '@/auth';
import Button from './button';

const Header = async () => {
  const session = await auth();
  
  return (
    <header>
      <nav className={styles.nav}>
        <Link href={'/'} className={styles.logo}>SHORTEN-URL</Link>
        {session?.user
          ? <div className={styles.dashboardContainer}>
              <Link href={'/dashboard'}>Dashboard</Link>
              <Button text='Log out' />
            </div>
          : <Button text='Login' />
        }
      </nav>
    </header>
  )
}

export default Header