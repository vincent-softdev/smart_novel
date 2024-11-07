import React from 'react'
import { UserBook } from '../../types/book'
import { timeAgo } from '../../utils/timeUtils'

interface NovelJustReadItemProps {
  novel: UserBook
}

const NovelJustReadItem: React.FC<NovelJustReadItemProps> = ({ novel }) => {
  return (
    <div className="novel-just-read__item">
      <div className="novel-just-read__item--header">
        <span>{timeAgo(novel.readDate ?? new Date())}</span>
        <h3>{novel.title}</h3>
      </div>
      <div className="novel-just-read__item--detail">
        <p>
          Chapters read: {novel.read}/{novel.totalChapters} chapters
        </p>
        <button>x</button>
      </div>
    </div>
  )
}

export default NovelJustReadItem
