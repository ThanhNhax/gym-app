export default function formatDate(date) {
  if (!date) return ''
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
  const seconds =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
  return `${hours}:${minutes}:${seconds}`
}
