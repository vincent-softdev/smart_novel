import { UserBook } from '../types/book'
import { sampleUserBooks } from '../assets/data/book'

export const getNovelsJustReadByUser = (userId: string): UserBook[] => {
  return sampleUserBooks.filter((novel) => novel.userId === userId)
}
