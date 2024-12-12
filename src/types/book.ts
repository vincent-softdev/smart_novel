// we do not have image for book cause we will use default one
export type Book = {
  id: string
  title: string
  author: string
  description: string
  genre: string
  coverImage: string
  publicationDate: Date
  totalChapters: number
}

export type UserBookStatus = 'read' | 'new' | 'recommended'

export type UserBook = Book & {
  userId: string
  status: UserBookStatus
  readDate?: Date
  rating?: number
  read: number
}

export type NovelAds = {
  name: string
  author: string
  image: string
}
