import React from 'react'
import { InternalLink, Strong } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import pathHelpers from 'src/lib/pathHelpers'
import t, { allTranslations } from 'src/lib/t'

const NewUser: React.SFC<{
  componentProps: { lessonName: keyof typeof pathHelpers }
}> = ({ componentProps }) => (
  <>
    <Emoji>👋</Emoji> こんにちは！これは「
    <InternalLink href={pathHelpers[componentProps.lessonName]()}>
      {t(`${componentProps.lessonName}Title` as keyof typeof allTranslations)}
    </InternalLink>
    」という記事の途中です。 はじめての方は、
    <InternalLink href={pathHelpers[componentProps.lessonName]()}>
      <Strong>こちらをクリックして序章から読み始めてみてください</Strong>
    </InternalLink>
    。
  </>
)

export default NewUser
