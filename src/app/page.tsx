import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.homeContainer}>
      <h1 className={styles.title}>Shorten Your Loooong Links!</h1>
      <h3>Welcome to SHORTEN-URL page. Login to create short links.</h3>
      <p>SHORTEN-URL is an efficient and easy-to-use URL shortening service that streamlines your online experience.</p>
    </main>
  )
}
