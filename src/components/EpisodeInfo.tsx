import React from 'react'
import { Em, Hr, P, Strong, Ul, UlLi } from 'src/components/ContentTags'
import StarRating from 'src/components/StarRating'
import episodeTitlePrefix from 'src/lib/episodeTitlePrefixAndColor'
import locale from 'src/lib/locale'

interface EpisodeInfoProps {
  episodeNumber: 1 | 2
  introText: React.ReactNode
  outroText?: React.ReactNode
}

const episodeInfo: {
  [s in EpisodeInfoProps['episodeNumber']]: {
    readingTime: number
    difficulty: { num: number; text: string }
    fun: { num: number; text: string }
  }
} = {
  1: {
    readingTime: 6,
    difficulty: {
      num: 3,
      text:
        locale === 'jp'
          ? 'はじめてのことばかりなので、少々難しいかも。'
          : 'Because everything is new, it might be a bit difficult.'
    },
    fun: {
      num: 1,
      text:
        locale === 'jp'
          ? '基本ルールを紹介するので、少々つまらないかも。でも後から面白くなるので、めげずに読み進めてください！'
          : 'We’ll cover basics, so it might be a bit boring. But it’ll get much better later!'
    }
  },
  2: {
    readingTime: 4,
    difficulty: {
      num: 1,
      text:
        locale === 'jp'
          ? '前のページより簡単なはず！'
          : 'Should be much easier than the last level!'
    },
    fun: {
      num: 1,
      text:
        locale === 'jp'
          ? 'まだ基本ルールの説明なので、星ひとつです！'
          : 'We’re still talking about basics, so I just made it one star.'
    }
  }
}

const readingTimeFor = (episodeNumber: EpisodeInfoProps['episodeNumber']) =>
  episodeInfo[episodeNumber].readingTime

const difficultyFor = (episodeNumber: EpisodeInfoProps['episodeNumber']) =>
  episodeInfo[episodeNumber].difficulty

const funFor = (episodeNumber: EpisodeInfoProps['episodeNumber']) =>
  episodeInfo[episodeNumber].fun

const EpisodeInfo: React.FunctionComponent<EpisodeInfoProps> = ({
  episodeNumber,
  outroText,
  introText
}) => (
  <>
    <P>
      {locale === 'jp' ? (
        <>
          <Strong>
            {episodeTitlePrefix(episodeNumber, 'yc').prefix}へようこそ！
          </Strong>{' '}
          {introText}
        </>
      ) : (
        <>
          <Strong>
            Welcome to {episodeTitlePrefix(episodeNumber, 'yc').prefix}:
          </Strong>{' '}
          {introText}
        </>
      )}
    </P>
    <Ul>
      <UlLi>
        <Strong>
          {locale === 'jp' ? '平均読了時間' : 'Average Reading Time'}:
        </Strong>{' '}
        <Em>
          {readingTimeFor(episodeNumber)}
          {locale === 'jp' ? '分' : ' minutes'}
        </Em>
      </UlLi>
      <UlLi>
        <Strong>{locale === 'jp' ? '難しさ' : 'Difficulty'}:</Strong>{' '}
        <StarRating num={difficultyFor(episodeNumber).num} /> —{' '}
        {difficultyFor(episodeNumber).text}
      </UlLi>
      <UlLi>
        <Strong>{locale === 'jp' ? '面白さ' : 'Fun'}:</Strong>{' '}
        <StarRating num={funFor(episodeNumber).num} /> —{' '}
        {funFor(episodeNumber).text}
      </UlLi>
    </Ul>
    {outroText}
    <Hr />
  </>
)

export default EpisodeInfo
