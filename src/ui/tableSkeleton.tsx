import styles from '@/app/page.module.css'

const TableSkeleton = () => {
  const allLinks = Array.from({length: 4}).map((_, idx) => idx)
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={`${styles.skeletonTitle} ${styles.skeleton}`}/>
          <th className={`${styles.skeletonMiddleTitle} ${styles.skeleton}`}/>
          <th className={`${styles.skeletonLastTitle} ${styles.skeleton}`}/>
        </tr>
      </thead>
      <tbody>
        {allLinks.map((link, idx) => 
          <tr key={link + idx}>
            <td className={`${styles.skeletonTitle} ${styles.skeleton}`}/>
            <td className={`${styles.skeletonMiddleTitle} ${styles.skeleton}`}/>
            <td className={`${styles.skeletonLastTitle} ${styles.skeleton}`}/>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default TableSkeleton