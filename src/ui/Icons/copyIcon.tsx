'use client'

import { CopyIconProps } from "@/lib/interfaces";

const CopyIcon = ({className, link, setCopy}: CopyIconProps) => {

  const copyClipboard = async (txt: string) => {
    try {
      const clipboardItem = new ClipboardItem({
        "text/plain": new Blob([txt], { type: "text/plain" }),
      });
      await navigator.clipboard.write([clipboardItem]);
      setCopy(true)
    } catch (error) {
      await navigator.clipboard.writeText(txt);
    }
  }
  
  return (
    <svg
      onMouseLeave={() => setCopy(false)}
      className={className}
      onClick={() => copyClipboard(link)}
      width="24px" 
      height="24px" 
      strokeWidth="1.5" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      color="#fff"
    >
      <path 
        d="M19.4 20H9.6C9.26863 20 9 19.7314 9 19.4V9.6C9 9.26863 9.26863 9 9.6 9H19.4C19.7314 9 20 9.26863 20 9.6V19.4C20 19.7314 19.7314 20 19.4 20Z" 
        stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      </path>
      <path 
        d="M15 9V4.6C15 4.26863 14.7314 4 14.4 4H4.6C4.26863 4 4 4.26863 4 4.6V14.4C4 14.7314 4.26863 15 4.6 15H9" 
        stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      </path>
    </svg>
  )
}

export default CopyIcon