import React from 'react'
import { Book } from '../../types/book'

type BookCardProps = React.HTMLAttributes<HTMLDivElement> & {
  data: Book
}

const BookCard: React.FC<BookCardProps> = ({ data, className, ...rest }) => {
  return (
    <div className={`${className} book-card`} {...rest}>
      <div className="book-card__image">
        {data.coverImage != '' && (
          <img src={data.coverImage} alt="Cover image" />
        )}
      </div>
      <div className="book-card__content">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <div className="book-card__content__footer">
          <div>{data.author}</div>
          <button>{data.genre}</button>
        </div>
      </div>
    </div>
  )
}

export default BookCard
