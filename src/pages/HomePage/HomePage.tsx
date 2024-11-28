import React from 'react'
import Header from '../../components/Header/Header'
import HighlightedNovel from '../../components/HighlightedNovel/HighlightedNovel'
import Footer from '../../components/Footer/Footer'
import NovelJustRead from '../../components/NovelJustRead/NovelJustRead'
import Suggestion from '../../components/Suggestion/Suggestion'

const HomePage: React.FC = () => {
  return (
    <div className="root-container">
      <div className="home-container">
        <Header />
        <main>
          <HighlightedNovel />
          <NovelJustRead />
          <Suggestion />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
