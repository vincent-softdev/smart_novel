import React from 'react'

import { books } from '../../constants/data'
import BookCard from '../Card/BookCard'

const Suggestion = () => {
  return (
    <div className="suggestion">
      <h2 className="title">Suggestion</h2>
      <div className="suggestion-cards">
        {books.map((b) => {
          return (
            <BookCard key={b.id} data={b} className="suggestion-cards__item">
              <BookCard.CoverImage />
              <BookCard.Content>
                <BookCard.Title />
                <BookCard.Description />
                <BookCard.Footer />
              </BookCard.Content>
            </BookCard>
          )
        })}
      </div>
    </div>
  )
}

export default Suggestion
