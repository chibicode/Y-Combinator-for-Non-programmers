import React, { useContext } from 'react'
import { Em, InternalLink, P, Strong } from 'src/components/ContentTags'
import pathHelpers from 'src/lib/pathHelpers'
import t, { allTitles } from 'src/lib/titles'
import EpisodeContext from 'src/components/EpisodeContext'

export default () => {
  const { lessonName, episodeNumber } = useContext(EpisodeContext)
  return (
    <>
      <P>
        <Strong>こんにちは！</Strong>このページは「
        <InternalLink href={pathHelpers[lessonName]()}>
          {t(`${lessonName}Title` as keyof typeof allTitles)}
        </InternalLink>
        」という記事の
        <Strong>{episodeNumber + 1}ページ目</Strong>
        です。1ページ目から読むには
        <Em>
          <InternalLink href={pathHelpers[lessonName]()}>
            <Strong>こちらからどうぞ</Strong>
          </InternalLink>
        </Em>
        。目次を見るには
        <InternalLink href={pathHelpers[lessonName]('toc')}>
          こちらからどうぞ
        </InternalLink>
        。
      </P>
    </>
  )
}
