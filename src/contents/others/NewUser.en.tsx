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
        <Strong>Hello!</Strong> This is{' '}
        <Strong>page {episodeNumber + 1}</Strong> of the series called “
        <InternalLink href={pathHelpers[lessonName]()}>
          {t(`${lessonName}Title` as keyof typeof allTitles)}
        </InternalLink>
        ”. If you just got here,
        <Em>
          <InternalLink href={pathHelpers[lessonName]()}>
            <Strong>click here to read from the beginning</Strong>
          </InternalLink>
        </Em>
        . Or you can view the
        <InternalLink href={pathHelpers[lessonName]('toc')}>
          table of contents
        </InternalLink>
        .
      </P>
    </>
  )
}
