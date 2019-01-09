import React from 'react'
import { Em, InternalLink, Strong } from 'src/components/ContentTags'
import pathHelpers from 'src/lib/pathHelpers'
import t, { allTitles } from 'src/lib/titles'

const NewUser: React.FC<{
  componentProps: { lessonName: keyof typeof pathHelpers }
}> = ({ componentProps }) => (
  <>
    <Strong>ハロー！</Strong>このページは「
    <InternalLink href={pathHelpers[componentProps.lessonName]()}>
      {t(`${componentProps.lessonName}Title` as keyof typeof allTitles)}
    </InternalLink>
    」という記事の途中です。はじめから読むには、
    <Em>
      <InternalLink href={pathHelpers[componentProps.lessonName]()}>
        <Strong>こちらを押してください</Strong>
      </InternalLink>
    </Em>
    。
  </>
)

export default NewUser
