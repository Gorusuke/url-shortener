export interface LinksData {
  rowid: number
  shortUrl: string
  originalUrl: string
}

export interface copyIconProps {
  className: string
  link: string
  setCopy: (arg: boolean) => void
}