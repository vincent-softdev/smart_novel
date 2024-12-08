import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import UploadFileIcon from '@mui/icons-material/UploadFile'

type RightNavBarProps = {
  handleAvartarClick: () => void
}

const RightNavBar = (props: RightNavBarProps) => {
  return (
    <div className="right-nav-bar">
      <div className="right-nav-bar__close-btn">
        <CloseIcon onClick={props.handleAvartarClick} />
      </div>
      <button>
        <UploadFileIcon />
        Upload Novel
      </button>
    </div>
  )
}
export default RightNavBar
