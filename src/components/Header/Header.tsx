import React from 'react'
import bookIcon from '../../assets/images/book.png'
import userIcon from '../../assets/images/user.png'

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <a href="/">
        <img src={bookIcon} alt="App Icon" className="header__app-icon" />
      </a>
      <a href="#">
        <img
          src={userIcon}
          alt="User avartar"
          className="header__user-avartar"
        />
      </a>
    </header>
  )
}

export default Header
