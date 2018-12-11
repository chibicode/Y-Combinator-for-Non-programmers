import React from 'react'
import { Em, Strong, Ul, UlLi } from 'src/components/ContentTags'
import StarRating from 'src/components/StarRating'
import locale from 'src/lib/locale'

interface EpisodeInfoProps {
  readingTime: number
  difficultyNum: number
  difficultyText: React.ReactNode
  funNum: number
  funText: React.ReactNode
}

const EpisodeInfo: React.SFC<EpisodeInfoProps> = ({
  readingTime,
  difficultyNum,
  difficultyText,
  funNum,
  funText
}) => (
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
)

export default EpisodeInfo
