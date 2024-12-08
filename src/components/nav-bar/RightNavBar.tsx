import React from 'react'
import CloseIcon from '@mui/icons-material/Close'

type RightNavBarProps = {
  handleAvartarClick: () => void
}

const RightNavBar = (props: RightNavBarProps) => {
  return (
    <div className="right-nav-bar">
      <div className="right-nav-bar__close-btn">
        <CloseIcon onClick={props.handleAvartarClick} />
      </div>
    </div>
  )
}
export default RightNavBar
