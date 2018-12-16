import React from 'react'
import { Em, Hr, P, Strong } from 'src/components/ContentTags'
import StarRating from 'src/components/StarRating'
import ProgressBoxes from 'src/components/Yc/ProgressBoxes'
import episodeTitlePrefix from 'src/lib/episodeTitlePrefixAndColor'
import locale from 'src/lib/locale'

interface EpisodeInfoProps {
  readingTime: number
  funNum: number
  funText: React.ReactNode
  episodeNumber: number
  introText: React.ReactNode
  progressText: React.ReactNode
}

const EpisodeInfo: React.FunctionComponent<EpisodeInfoProps> = ({
  readingTime,
  funNum,
  funText,
  episodeNumber,
  progressText,
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
    <P>
      <Strong>
        {locale === 'jp' ? '平均読了時間' : 'Average Reading Time'}:
      </Strong>{' '}
      <Em>
        {readingTime}
        {locale === 'jp' ? '分' : ' minutes'}
      </Em>
    </P>
    <P>
      <Strong>{locale === 'jp' ? '面白さ' : 'Fun'}:</Strong>{' '}
      <StarRating num={funNum} /> — {funText}
    </P>
    <P>
      <Strong>{locale === 'jp' ? '進捗メーター' : 'Progress'}:</Strong>{' '}
      <ProgressBoxes currentEpisode={episodeNumber} /> — {progressText}
    </P>
    <Hr />
  </>
)

export default EpisodeInfo
