import React from 'react'
import bookIcon from '../../assets/images/book.png'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Novel Website. All Rights Reserved.</p>
      <img src={bookIcon} alt="Logo" />
    </footer>
  )
}

export default Footer
