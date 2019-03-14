import React from 'react'
import { Em, InternalLink, P, Strong } from 'src/components/ContentTags'
import pathHelpers from 'src/lib/pathHelpers'
import t, { allTitles } from 'src/lib/titles'

const NewUser = ({
  componentProps
}: {
  componentProps: { lessonName: keyof typeof pathHelpers }
}) => (
  <P>
    <Strong>こんにちは！</Strong>このページは「
    <InternalLink href={pathHelpers[componentProps.lessonName]()}>
      {t(`${componentProps.lessonName}Title` as keyof typeof allTitles)}
    </InternalLink>
    」という、コンピューターサイエンスの無料オンラインレッスンです。はじめから読むには、
    <Em>
      <InternalLink href={pathHelpers[componentProps.lessonName]()}>
        <Strong>こちらを押してください</Strong>
      </InternalLink>
    </Em>
    。
  </P>
)

export default NewUser
