import React from 'react'
import Header from '../../components/Header/Header'
import HighlightedNovel from '../../components/HighlightedNovel/HighlightedNovel'
import Footer from '../../components/Footer/Footer'
import NovelJustRead from '../../components/NovelJustRead/NovelJustRead'

const HomePage: React.FC = () => {
  return (
    <div className="root-container">
      <div className="home-container">
        <Header />
        <main>
          <HighlightedNovel />
          <NovelJustRead />
          <h1>Welcome to homepage</h1>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
