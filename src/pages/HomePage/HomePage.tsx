import React from 'react'
import Header from '../../components/Header/Header'

const HomePage: React.FC = () => {
  return (
    <div className="root-container">
      <div className="home-container">
        <Header />
        <main>
          <h1>Welcome to homepage</h1>
        </main>
      </div>
    </div>
  )
}

export default HomePage
