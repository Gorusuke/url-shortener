import { ReactNode } from "react";
import styles from '@/app/page.module.css'

const Tooltip = ({children, wasCopied}: {children: ReactNode, wasCopied: boolean}) => {
  return (
    <div className={styles.tooltip}>
      <div className={styles.tooltipContent}>
        {wasCopied ? 'Copied!!' : 'Click to copy'}
      </div>
      {children}
    </div>
  )
}

export default Tooltip