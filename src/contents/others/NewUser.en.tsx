import React from 'react'
import { Em, InternalLink, Strong } from 'src/components/ContentTags'
import pathHelpers from 'src/lib/pathHelpers'
import t, { allTitles } from 'src/lib/titles'

const NewUser: React.FC<{
  componentProps: { lessonName: keyof typeof pathHelpers }
}> = ({ componentProps }) => (
  <>
    <Strong>Hello!</Strong> This is part of the series called “
    <InternalLink href={pathHelpers[componentProps.lessonName]()}>
      {t(`${componentProps.lessonName}Title` as keyof typeof allTitles)}
    </InternalLink>
    ”. If you just got here,{' '}
    <Em>
      <InternalLink href={pathHelpers[componentProps.lessonName]()}>
        <Strong>click here to read from the beginning</Strong>
      </InternalLink>
    </Em>
    .
  </>
)

export default NewUser
