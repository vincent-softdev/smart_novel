import React from 'react'
import highlighted_novel_image from '../../assets/images/books/witch_fight_with_woft.webp'

const HighlightedNovel: React.FC = () => {
  return (
    <div className="highlighted-novel__container">
      <img src={highlighted_novel_image} alt="Highlighted Novel" />
      <div className="highlighted-novel__title">
        <h1 className="dirty-boy">Dirty boy font asdas</h1>
        <p>
          <strong>Author: </strong>Zic Zac
        </p>
      </div>
    </div>
  )
}

export default HighlightedNovel
