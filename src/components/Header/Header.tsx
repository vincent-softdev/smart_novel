import React, { useState } from 'react'
import bookIcon from '../../assets/images/book.png'
import userIcon from '../../assets/images/user.png'
import RightNavBar from '../nav-bar/RightNavBar'

const Header: React.FC = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false)

  const handleAvartarClick = () => {
    setIsNavBarOpen((prev) => !prev)
  }

  return (
    <header className="header-container">
      <a href="/">
        <img src={bookIcon} alt="App Icon" className="header__app-icon" />
      </a>
      <a href="#" onClick={handleAvartarClick}>
        <img src={userIcon} alt="User avatar" className="header__user-avatar" />
      </a>
      {isNavBarOpen && (
        <>
          <RightNavBar handleAvartarClick={handleAvartarClick} />
          <div className="overlay" onClick={handleAvartarClick}></div>
        </>
      )}
    </header>
  )
}

export default Header
