export const timeAgo = (date: Date): string => {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)
  let interval = Math.floor(seconds / 31536000)

  if (interval >= 1) {
    return interval === 1 ? '1 year ago' : `${interval} years ago`
  }
  interval = Math.floor(seconds / 2592000) // seconds in a month
  if (interval >= 1) {
    return interval === 1 ? '1 month ago' : `${interval} months ago`
  }
  interval = Math.floor(seconds / 86400) // seconds in a day
  if (interval >= 1) {
    return interval === 1 ? '1 day ago' : `${interval} days ago`
  }
  interval = Math.floor(seconds / 3600) // seconds in an hour
  if (interval >= 1) {
    return interval === 1 ? '1 hour ago' : `${interval} hours ago`
  }
  interval = Math.floor(seconds / 60) // seconds in a minute
  if (interval >= 1) {
    return interval === 1 ? '1 minute ago' : `${interval} minutes ago`
  }
  return 'just now'
}
