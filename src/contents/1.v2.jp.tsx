import React from 'react'
import { P, Strong, Em, InlineHeader } from 'src/components/ContentTags'
import EpisodeCardList from 'src/components/EpisodeCardList'
import H from 'src/components/H'
import EmojiSeparator from 'src/components/EmojiSeparator'
import Emoji from 'src/components/Emoji'
import EmojiNumber from 'src/components/EmojiNumber'
import * as R from 'src/components/Runners'
import { InlineEmojiBoxesForQuestion } from 'src/components/InlineEmojiBoxes'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>この話はフィクションです</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              当記事は物語調で話を進めていきます。ちなみに、この話はフィクションです。
              <Emoji>😉</Emoji>
            </P>
            <P>
              まずは、物語の主役となる「
              <Strong>計算箱</Strong>」の話をしましょう。
            </P>
            <EmojiSeparator emojis={['🔢', '🎁', '🔢']} />
          </>
        )
      },
      {
        title: <>計算箱</>,
        content: (
          <>
            <P>
              むかしむかしあるところに、「<Strong>計算箱</Strong>
              」と呼ばれる便利な道具がありました。
              <InlineHeader>計算箱</InlineHeader>は
              <Em>さまざまな計算を自動で行ってくれる道具</Em>
              です。人々は難しい計算を行うとき、いつもこの
              <InlineHeader>計算箱</InlineHeader>に頼っていました。
            </P>
            <EmojiSeparator emojis={['🙂', '🎁', '🙂']} />
            <P>
              計算箱にはさまざまな種類があります。まずこちらが、「
              <Strong>足し算ができる計算箱</Strong>」です:
            </P>
            <R.Fdek />
            <P>
              一番上と下にハテナマーク
              <InlineEmojiBoxesForQuestion />
              があり、真ん中に足し算の記号 <Emoji>➕</Emoji> がありますね。
            </P>
            <P>
              この
              <InlineEmojiBoxesForQuestion />
              の部分には、それぞれ数字を入れることができます。たとえば{' '}
              <EmojiNumber number={1} /> を両方に入れてみましょう。
            </P>
            <R.Jfsd />
            <P>
              そして、それぞれの計算箱には
              <Strong>
                <H args={{ name: 'play' }} />
                ボタン
              </Strong>
              がついており、それを押すと計算が実行されます。試しに、下の計算箱で
              <Strong>
                <H args={{ name: 'pressPlay' }} />
              </Strong>
            </P>
            <R.Nlfx />
            <P>
              これで <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={1} />{' '}
              が計算できました！次は、足し算以外の計算箱も見ていきましょう。
            </P>
          </>
        )
      }
    ]}
  />
)
