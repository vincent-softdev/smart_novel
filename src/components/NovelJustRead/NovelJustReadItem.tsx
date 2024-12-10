import React, {
  HTMLAttributes,
  PropsWithChildren,
  createContext,
  useContext,
} from 'react'
import { UserBook } from '../../types/book'
import { timeAgo } from '../../utils/timeUtils'

type NovelJustReadItemContext = {
  novel: UserBook
}

const NovelJustReadItemContext = createContext<
  NovelJustReadItemContext | undefined
>(undefined)

const useNovelJustReadItemContext = () => {
  const context = useContext(NovelJustReadItemContext)
  if (!context) {
    throw new Error(
      'useNovelJustReadItemContext must be used within NovelJustReadItem'
    )
  }

  return context
}

type NovelJustReadItemProps = HTMLAttributes<HTMLDivElement> &
  PropsWithChildren & {
    novel: UserBook
  }

const NovelJustReadItem = ({
  children,
  novel,
  ...rest
}: NovelJustReadItemProps) => {
  return (
    <NovelJustReadItemContext.Provider value={{ novel }}>
      <div {...rest}>{children}</div>
    </NovelJustReadItemContext.Provider>
  )
}

export default NovelJustReadItem

type NovelJustReadItemHeaderProps = HTMLAttributes<HTMLDivElement> &
  PropsWithChildren

NovelJustReadItem.Header = function NovelJustReadItemHeader({
  children,
  ...rest
}: NovelJustReadItemHeaderProps) {
  return <div {...rest}>{children}</div>
}

type NovelJustReadItemDetail = HTMLAttributes<HTMLDivElement> &
  PropsWithChildren

NovelJustReadItem.Detail = function NovelJustReadItemDetail({
  children,
  ...rest
}: NovelJustReadItemDetail) {
  return <div {...rest}>{children}</div>
}

NovelJustReadItem.Date = function NovelJustReadItemDate() {
  const { novel } = useNovelJustReadItemContext()

  return <span>{timeAgo(novel.readDate ?? new Date())}</span>
}

NovelJustReadItem.Title = function NovelJustReadItemTitle() {
  const { novel } = useNovelJustReadItemContext()

  return <h3>{novel.title}</h3>
}

NovelJustReadItem.ReadChapter = function NovelJustReadItemReadChapter() {
  const { novel } = useNovelJustReadItemContext()

  return (
    <p>
      Chapters read: {novel.read}/{novel.totalChapters} chapters
    </p>
  )
}

NovelJustReadItem.CloseButton = function NovelJustReadItemCloseButton() {
  return <button>x</button>
}
