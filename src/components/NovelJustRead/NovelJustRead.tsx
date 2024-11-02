import React, { useEffect, useState } from 'react'
import { UserBook } from '../../types/book'
import { getNovelsJustReadByUser } from '../../services/NovelService'
import NovelJustReadItem from './NovelJustReadItem'

const NovelJustRead: React.FC = () => {
  const [novels, setNovels] = useState<UserBook[]>([])

  useEffect(() => {
    const userNovels = getNovelsJustReadByUser('1') // Assuming current user has ID '1'
    setNovels(userNovels)
  }, [])

  return (
    <div className="novel-just-read__container">
      <h2 className="title">Recently Read Novels</h2>
      {novels.map((novel) => (
        <NovelJustReadItem key={novel.id} novel={novel} />
      ))}
    </div>
  )
}

export default NovelJustRead
