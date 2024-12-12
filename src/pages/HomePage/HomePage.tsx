import React from 'react'
import Header from '../../components/Header/Header'
import HighlightedNovel from '../../components/HighlightedNovel/HighlightedNovel'
import Footer from '../../components/Footer/Footer'
import NovelJustRead from '../../components/NovelJustRead/NovelJustRead'
import Suggestion from '../../components/Suggestion/Suggestion'
import { NovelAds } from '../../types/book'
import highlighted_novel_image from '../../assets/images/books/witch_fight_with_woft.webp'

const HomePage: React.FC = () => {
  const novelAds: NovelAds = {
    name: 'Dirty boy font asdas',
    author: 'Zic Zac',
    image: highlighted_novel_image,
  }

  return (
    <div className="root-container">
      <div className="home-container">
        <Header />
        <main>
          <HighlightedNovel
            className="highlighted-novel__container"
            data={novelAds}
          >
            <HighlightedNovel.Image />
            <HighlightedNovel.Body className="highlighted-novel__title">
              <HighlightedNovel.Title />
              <HighlightedNovel.Author />
            </HighlightedNovel.Body>
          </HighlightedNovel>
          <NovelJustRead />
          <Suggestion />
          <HighlightedNovel
            className="highlighted-novel__container"
            data={novelAds}
          >
            <HighlightedNovel.Image />
            <HighlightedNovel.Body className="highlighted-novel__title">
              <HighlightedNovel.Title />
              <HighlightedNovel.Author />
            </HighlightedNovel.Body>
          </HighlightedNovel>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
