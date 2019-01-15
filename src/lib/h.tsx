import React from 'react'
import { Em, H3, InternalLink, P, Strong } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import episodeTitlePrefix from 'src/lib/episodeTitlePrefixAndColor'
import locale from 'src/lib/locale'
import { yc } from 'src/lib/pathHelpers'

interface LocaleJson {
  en: JSX.Element | string
  jp: JSX.Element | string
}

export const allTranslations = {
  ycBentoBox: (plural: boolean) => ({
    en: (
      <>
        {`“bento box${plural ? 'es' : ''}”`} <Emoji>🍱</Emoji>
      </>
    ),
    jp: (
      <>
        「弁当箱のパズル <Emoji>🍱</Emoji>」
      </>
    )
  }),
  ycNext: () => ({
    en: (
      <>
        <Strong>
          Next <Emoji>➡️</Emoji>
        </Strong>
      </>
    ),
    jp: (
      <>
        <Strong>
          次へ <Emoji>➡️</Emoji>
        </Strong>
      </>
    )
  }),
  ycPlay: () => ({
    en: (
      <>
        <Strong>
          Play <Emoji>▶️</Emoji>
        </Strong>
      </>
    ),
    jp: (
      <>
        <Strong>
          実行 <Emoji>▶️</Emoji>
        </Strong>
      </>
    )
  }),
  ycPause: () => ({
    en: (
      <>
        <Strong>
          Pause <Emoji>⏸</Emoji>
        </Strong>
      </>
    ),
    jp: (
      <>
        <Strong>
          一時停止 <Emoji>⏸</Emoji>
        </Strong>
      </>
    )
  }),
  ycReset: () => ({
    en: (
      <>
        <Strong>
          Reset <Emoji>↩️</Emoji>
        </Strong>
      </>
    ),
    jp: (
      <>
        <Strong>
          最初から <Emoji>↩️</Emoji>
        </Strong>
      </>
    )
  }),
  ycPrevious: () => ({
    en: (
      <>
        <Strong>
          <Emoji>⬅️</Emoji> Previous
        </Strong>
      </>
    ),
    jp: (
      <>
        <Strong>
          <Emoji>⬅️</Emoji> 前へ
        </Strong>
      </>
    )
  }),
  ycWhatWeHaveLearned: () => ({
    en: <>What we have learned so far</>,
    jp: <>これまでのまとめ</>
  }),
  ycDone: () => ({
    en: (
      <>
        <Strong>
          Done <Emoji>🏁</Emoji>
        </Strong>
      </>
    ),
    jp: (
      <>
        <Strong>
          終了 <Emoji>🏁</Emoji>
        </Strong>
      </>
    )
  }),
  ycTrue: () => ({
    en: (
      <>
        <Strong>True</Strong> <Emoji>👍</Emoji>
      </>
    ),
    jp: (
      <>
        「<Strong>はい</Strong> <Emoji>🙆🏻‍♀️</Emoji>」
      </>
    )
  }),
  ycFalse: () => ({
    en: (
      <>
        <Strong>False</Strong> <Emoji>👎</Emoji>
      </>
    ),
    jp: (
      <>
        「<Strong>いいえ</Strong> <Emoji>🙅🏻‍♀️</Emoji>」
      </>
    )
  }),
  ycTryGuessing: () => ({
    en: <P>Try guessing before you press on the button below!</P>,
    jp: (
      <P>
        勘で予想してみてください！下のボタンを押していただいて、次のページに進むと答えがわかります。
      </P>
    )
  }),
  ycTrueOrFalse: () => ({
    en: (
      <>
        {h('ycTrue')} or {h('ycFalse')}
      </>
    ),
    jp: (
      <>
        {h('ycTrue')}か{h('ycFalse')}
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
    en: <>Continue to {episodeTitlePrefix(nextEpisodeNumber, 'yc').prefix}</>,
    jp: <>{episodeTitlePrefix(nextEpisodeNumber, 'yc').prefix}へ</>
  }),
  ycQuizReview: (previousEpisodeNumber: number) => ({
    en: (
      <>
        <H3>{h('ycTrueOrFalse')} Quiz Review</H3>
        <P>
          Before we begin, let’s take a look at{' '}
          <InternalLink href={yc(previousEpisodeNumber)}>
            the quiz from episode {previousEpisodeNumber}
          </InternalLink>
          .
        </P>
      </>
    ),
    jp: (
      <>
        <H3>二択クイズの答え合わせ</H3>
        <P>
          まずはじめに、
          <InternalLink href={yc(previousEpisodeNumber)}>
            前のページで出したクイズ
          </InternalLink>
          の答え合わせをしましょう。
        </P>
      </>
    )
  }),
  ycTryUntilDone: (capitalize = true) => ({
    en: (
      <Em>
        {capitalize ? 'K' : 'k'}
        eep pressing {h('ycNext')} until you see {h('ycDone')}
      </Em>
    ),
    jp: (
      <Em>
        {h('ycDone')} になるまで {h('ycNext')} を何度も押してみてください
      </Em>
    )
  }),
  ycPlayUntilDone: (capitalize = true) => ({
    en: (
      <Em>
        {capitalize ? 'T' : 't'}
        ry pressing {h('ycPlay')}
      </Em>
    ),
    jp: <Em>{h('ycPlay')} を押してみてください</Em>
  }),
  ycYes: () => ({
    en: (
      <Strong>
        Yes <Emoji>🔵</Emoji> <Emoji>🔴</Emoji> <Emoji>🔵</Emoji>
      </Strong>
    ),
    jp: (
      <Strong>
        「はい」 <Emoji>🔵</Emoji> <Emoji>🔴</Emoji> <Emoji>🔵</Emoji>
      </Strong>
    )
  }),
  ycNo: () => ({
    en: (
      <Strong>
        No <Emoji>🔵</Emoji> <Emoji>🔴</Emoji> <Emoji>🔴</Emoji>
      </Strong>
    ),
    jp: (
      <Strong>
        「いいえ」 <Emoji>🔵</Emoji> <Emoji>🔴</Emoji> <Emoji>🔴</Emoji>
      </Strong>
    )
  }),
  introductionPageLink: () => ({
    en: 'Introduction',
    jp: '序章'
  }),
  indexPageLink: () => ({
    en: 'View All Pages',
    jp: '目次'
  })
}

const h = (x: keyof typeof allTranslations, y?: any) => {
  const fn: (...args: any[]) => LocaleJson = allTranslations[x]
  return fn(y)[locale]
}

export default h
