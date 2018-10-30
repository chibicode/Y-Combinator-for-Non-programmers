import React from 'react'
import { Em, InternalLink, P, Strong } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import episodeTitlePrefix from 'src/lib/episodeTitlePrefix'
import locale from 'src/lib/locale'
import { yc } from 'src/lib/pathHelpers'

interface LocaleJson {
  en: JSX.Element | string
  jp: JSX.Element | string
}

export const allTranslations = {
  ycBentoBox: () => ({
    en: (
      <>
        “bento box <Emoji>🍱</Emoji>”
      </>
    ),
    jp: (
      <>
        「不思議な弁当箱 <Emoji>🍱</Emoji>」
      </>
    )
  }),
  ycNext: () => ({
    en: (
      <>
        <Strong>
          Next <Emoji>⏩</Emoji>
        </Strong>
      </>
    ),
    jp: (
      <>
        <Strong>
          次へ <Emoji>⏩</Emoji>
        </Strong>
      </>
    )
  }),
  ycPrevious: () => ({
    en: (
      <>
        <Strong>
          <Emoji>⏪</Emoji> Previous
        </Strong>
      </>
    ),
    jp: (
      <>
        <Strong>
          <Emoji>⏪</Emoji> 前へ
        </Strong>
      </>
    )
  }),
  ycDone: () => ({
    en: (
      <>
        <Strong>
          Done <Emoji>✅</Emoji>
        </Strong>
      </>
    ),
    jp: (
      <>
        <Strong>
          終了 <Emoji>✅</Emoji>
        </Strong>
      </>
    )
  }),
  ycNextButtonStartPrimaryText: () => ({
    en: 'OK, Let’s Go!',
    jp: '次のページへ進む'
  }),
  ycNextButtonCheckAnswerPrimaryText: () => ({
    en: 'Check My Answer',
    jp: '次のページへ進む'
  }),
  ycNextButtonNextPagePrimaryText: () => ({
    en: 'Go to Next Page',
    jp: '次のページへ進む'
  }),
  ycNextButtonSecondaryText: (nextEpisodeNumber: number) => ({
    en: <>Continue to {episodeTitlePrefix(nextEpisodeNumber, 'yc')}</>,
    jp: <>{episodeTitlePrefix(nextEpisodeNumber, 'yc')}へ</>
  }),
  ycQuizReview: (previousEpisodeNumber: number) => ({
    en: (
      <P>
        <Strong>Quiz Review:</Strong> Let’s take a look at{' '}
        <InternalLink href={yc(previousEpisodeNumber)}>
          the quiz from episode {previousEpisodeNumber}
        </InternalLink>
        .
      </P>
    ),
    jp: (
      <P>
        <Strong>
          <InternalLink href={yc(previousEpisodeNumber)}>
            前のページで出したクイズ
          </InternalLink>
          の答え合わせをしましょう。
        </Strong>
      </P>
    )
  }),
  ycTryUntilDone: (capitalize = true) => ({
    en: (
      <Em>
        {capitalize ? 'T' : 't'}
        ry pressing {h('ycNext')} until you see {h('ycDone')}
      </Em>
    ),
    jp: (
      <Em>
        {h('ycDone')} になるまで {h('ycNext')} を押してみてください
      </Em>
    )
  }),
  introductionPageLink: () => ({
    en: 'Introduction',
    jp: '序章'
  }),
  indexPageLink: () => ({
    en: 'View All Episodes',
    jp: '目次'
  })
}

const h = (x: keyof typeof allTranslations, y?: any) => {
  const fn: (...args: any[]) => LocaleJson = allTranslations[x]
  return fn(y)[locale]
}

export default h
