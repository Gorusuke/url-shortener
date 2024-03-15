import Tooltip from './tooltip'
import CopyIcon from './Icons/copyIcon'
import DeleteIcon from './Icons/deleteIcon'
import EditIcon from './Icons/editIcon'
import { useEffect, useState } from 'react'
import { LinksData, TableLinkProps } from '@/lib/interfaces'
import styles from '@/app/page.module.css'


const TableLink = ({deleteShortUrl, onClick, lastLink}: TableLinkProps) => {
  const [copy, setCopy] = useState(false)
  const [allLinks, setAllLinks] = useState<LinksData[]>([])
  const [route, setRoute] = useState('')

  useEffect(() => {
    setRoute(window.location.origin)
    const getLinks = async () => {
      const allLinks = await fetch('/api/links')
      const links = await allLinks.json()
      setAllLinks(links.data);
    }
    getLinks()
  }, [lastLink])
  
  return Boolean(allLinks.length) &&
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={`${styles.cell} ${styles.cells}`}>Short Link</th>
          <th className={`${styles.cell} ${styles.cells}`}>Original Link</th>
          <th className={`${styles.cell} ${styles.cells}`}>Action</th>
        </tr>
      </thead>
      <tbody>
        {allLinks.toReversed().map((link, idx) => 
          <tr key={link.shortUrl + idx}>
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
            <td className={`${styles.cells} ${styles.longCell}`}>{link.originalUrl}</td>
            <td className={styles.cells}>
              <div className={styles.cellWithIcon}>
                <EditIcon onClick={() => onClick(link.originalUrl, link.shortUrl)} />
                <DeleteIcon onClick={() => deleteShortUrl(link.shortUrl)} />
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
}

export default TableLink