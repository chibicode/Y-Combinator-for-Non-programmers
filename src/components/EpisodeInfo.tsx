import React from 'react'
import { Em, P, Strong, Ul, UlLi } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import StarRating from 'src/components/StarRating'
import episodeTitlePrefix from 'src/lib/episodeTitlePrefix'
import locale from 'src/lib/locale'

interface EpisodeInfoProps {
  readingTime: number
  difficultyNum: number
  difficultyText: React.ReactNode
  funNum: number
  funText: React.ReactNode
  episodeNumber: number
  introText: React.ReactNode
}

const EpisodeInfo: React.FunctionComponent<EpisodeInfoProps> = ({
  readingTime,
  difficultyNum,
  difficultyText,
  funNum,
  funText,
  episodeNumber,
  introText
}) => (
  <>
    <P>
      {locale === 'jp' ? (
        <>
          <Strong>{episodeTitlePrefix(episodeNumber, 'yc')}</Strong>へようこそ！{' '}
          <Emoji>👋</Emoji> {introText}
        </>
      ) : (
        <>
          Welcome to <Strong>{episodeTitlePrefix(episodeNumber, 'yc')}</Strong>!{' '}
          <Emoji>👋</Emoji> {introText}
        </>
      )}
    </P>
    <Ul>
      <UlLi>
        <Strong>
          {locale === 'jp' ? '読了までの平均時間' : 'Average Reading Time'}:
        </Strong>{' '}
        <Em>
          {readingTime}
          {locale === 'jp' ? '分' : ' minutes'}
        </Em>
      </UlLi>
      <UlLi>
        <Strong>{locale === 'jp' ? '難易度' : 'Difficulty'}:</Strong>{' '}
        <StarRating num={difficultyNum} /> — {difficultyText}
      </UlLi>
      <UlLi>
        <Strong>{locale === 'jp' ? '面白さ' : 'Fun'}:</Strong>{' '}
        <StarRating num={funNum} /> — {funText}
      </UlLi>
    </Ul>
  </>
)

export default EpisodeInfo
