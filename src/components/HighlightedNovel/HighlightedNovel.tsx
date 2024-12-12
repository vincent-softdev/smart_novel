import React, {
  createContext,
  HTMLAttributes,
  PropsWithChildren,
  useContext,
} from 'react'
import { NovelAds } from '../../types/book'

type HighlightedNovelContext = {
  data: NovelAds
}

type HighlightedNovelBodyProps = PropsWithChildren &
  HTMLAttributes<HTMLDivElement>

const HighlightedNovelContext = createContext<
  HighlightedNovelContext | undefined
>(undefined)

const useHighlightedNovelContext = () => {
  const context = useContext(HighlightedNovelContext)

  if (!context) {
    throw new Error(
      'HighlightedNovelContext must be used within HighlightedNovel'
    )
  }

  return context
}

type HighlightedNovelProps = HTMLAttributes<HTMLDivElement> &
  PropsWithChildren & {
    data: NovelAds
  }

const HighlightedNovel = ({
  data,
  children,
  ...rest
}: HighlightedNovelProps) => {
  return (
    <HighlightedNovelContext.Provider value={{ data }}>
      <div {...rest}>{children}</div>
    </HighlightedNovelContext.Provider>
  )
}

export default HighlightedNovel

HighlightedNovel.Image = function HighlightedNovelImage() {
  const { data } = useHighlightedNovelContext()

  return <img src={data.image} alt={data.name} />
}

HighlightedNovel.Body = function HighlightedNovelBody({
  children,
  ...rest
}: HighlightedNovelBodyProps) {
  return <div {...rest}>{children}</div>
}

HighlightedNovel.Title = function HighlightedNovelTitle() {
  const { data } = useHighlightedNovelContext()

  return <h1 className="dirty-boy">{data.name}</h1>
}

HighlightedNovel.Author = function HighlightedNovelAuthor() {
  const { data } = useHighlightedNovelContext()

  return (
    <p>
      <strong>Author: </strong>
      {data.author}
    </p>
  )
}
