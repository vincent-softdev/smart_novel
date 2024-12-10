import React, { createContext, PropsWithChildren, useContext } from 'react'
import { Book } from '../../types/book'

type BookCardContext = {
  data: Book
}

const BookCardContext = createContext<BookCardContext | undefined>(undefined)

const useBookCardContext = () => {
  const context = useContext(BookCardContext)
  if (!context) {
    throw new Error('useBookCardContext must be used within BookCard')
  }

  return context
}

type BookCardProps = PropsWithChildren &
  React.HTMLAttributes<HTMLDivElement> & {
    data: Book
  }

const BookCard = ({ children, data, className, ...rest }: BookCardProps) => {
  return (
    <BookCardContext.Provider value={{ data }}>
      <div className={`${className} book-card`} {...rest}>
        {children}
      </div>
    </BookCardContext.Provider>
  )
}

export default BookCard

BookCard.CoverImage = function BookCardImage() {
  const { data } = useBookCardContext()

  return (
    <div className="book-card__image">
      {data.coverImage != '' && <img src={data.coverImage} alt="Cover image" />}
    </div>
  )
}

type BookCardContentProps = PropsWithChildren

BookCard.Content = function BookCardContent({
  children,
}: BookCardContentProps) {
  return <div className="book-card__content">{children}</div>
}

BookCard.Title = function BookCardTitle() {
  const { data } = useBookCardContext()

  return <h3>{data.title}</h3>
}

BookCard.Description = function BookCardDescription() {
  const { data } = useBookCardContext()

  return <p>{data.description}</p>
}

BookCard.Footer = function BookCardFooter() {
  const { data } = useBookCardContext()

  return (
    <div className="book-card__content__footer">
      <div>{data.author}</div>
      <button>{data.genre}</button>
    </div>
  )
}
