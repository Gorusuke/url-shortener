import { MouseEvent } from "react"

export interface LinksData {
  rowid: number
  shortUrl: string
  originalUrl: string
}

export interface CopyIconProps {
  className: string
  link: string
  setCopy: (arg: boolean) => void
}


export interface InputSearchProps {
  urlText: string
  setUrlText: (arg: string) => void
  isEditing: boolean
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

export interface TableLinkProps {
  deleteShortUrl: (arg: string) => void
  onClick: (arg: string, url: string) => void
  lastLink: string
}

export interface EditSearchProps {
  urlText: string
  setUrlText: (arg: string) => void
  handleCancel: () => void
  editShortUrl: () => void
}