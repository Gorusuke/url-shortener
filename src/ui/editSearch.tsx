import { EditSearchProps } from '@/lib/interfaces'
import LinkIcon from './Icons/linkIcon'
import styles from '@/app/page.module.css'

const EditSearch = ({urlText, setUrlText, handleCancel, editShortUrl}: EditSearchProps) => {
  return (
    <section className={styles.searchContainer}>
      <div className={styles.search}>
        <LinkIcon className={styles.icon}/>
        <input 
          className={styles.inputModify}
          type="text"
          placeholder="Enter the link here..."
          value={urlText}
          onChange={(e) => setUrlText(e.target.value)}
        />
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.cancelButton} onClick={handleCancel}>Cancel</button>
        <button className={styles.modifyButton} onClick={editShortUrl}>Modify url</button>
      </div>
    </section>
  )
}

export default EditSearch