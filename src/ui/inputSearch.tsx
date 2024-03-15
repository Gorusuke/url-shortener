import LinkIcon from './Icons/linkIcon'
import { InputSearchProps } from '@/lib/interfaces'
import styles from '@/app/page.module.css'

const InputSearch = ({urlText, setUrlText, onClick}: InputSearchProps) => {
  return (
    <div className={styles.search}>
      <LinkIcon className={styles.icon}/>
      <input 
        className={styles.input}
        type="text"
        placeholder="Enter the link here..."
        value={urlText}
        onChange={(e) => setUrlText(e.target.value)}
      />
      <button className={styles.button} onClick={onClick}>Short Url</button>
    </div>
  )
}

export default InputSearch