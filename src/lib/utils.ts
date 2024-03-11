export const makeUrlShort = (length: number) => {
  let result = ''
  const characters = 'ABCDEFGHIJKLOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let idx = 0; idx < length; idx++) {
    result = characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}