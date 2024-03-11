export const makeUrlShort = (length: number) => {
  let result = ''
  const characters = 'ABCDEFGHIJKLOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let idx = 0; idx < length; idx++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

export const getValidUrl = (link: string) => {
  if(link.includes('http://') || link.includes('https://')) return link
  else return `https://${link}`
}