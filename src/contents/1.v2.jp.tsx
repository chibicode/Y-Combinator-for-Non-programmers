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
              です。人々は計算がとても苦手だったので、いつもこの
              <InlineHeader>計算箱</InlineHeader>に頼りっぱなしでした。
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
      },
      {
        title: <>足し算以外の計算箱</>,
        content: (
          <>
            <P>
              続いてこちらが、「<Strong>掛け算ができる計算箱</Strong>
              」です。
              <Strong>
                <H args={{ name: 'play' }} />
                ボタン
              </Strong>
              を押せば、
              <EmojiNumber number={3} /> <Emoji>✖️</Emoji>{' '}
              <EmojiNumber number={2} /> を計算してくれます。
            </P>
            <R.Uaha />
            <P>
              計算箱は他にも引き算や割り算もできますが、特に興味深いわけでもないので、時間の都合上省略します。
              <Emoji>😉</Emoji>
            </P>
            <EmojiSeparator emojis={['➖', '🎁', '➗']} />
            <P>
              一方、少しだけ興味深いのがこちらの「
              <Strong>割ったときの余りがわかる計算箱</Strong>」です。
            </P>
            <R.Mjbi />
            <P>
              上の計算箱は、 「
              <Strong>
                <EmojiNumber number={5} /> を <EmojiNumber number={2} />{' '}
                で割ったときの余り
              </Strong>
              」を計算してくれます。これを使えば、たとえば「
              <Em>5人のグループを2人ずつに分けたとき、仲間はずれが出るか？</Em>
              」が分かるわけです。
            </P>
            <EmojiSeparator emojis={['🤔', '🤔', '🤔', '🤔', '🤔']} />
            <P>
              「それくらい暗算できるだろう <Emoji>😡</Emoji>
              」と思われるかもしれませんが、この物語に出てくる人々は計算がとても苦手だったので、計算箱に頼らないといけなかったのです。
              <Emoji>😉</Emoji>
            </P>
            <P>
              では、先ほどの計算箱を
              <Em>
                <H args={{ name: 'play' }} />
                してみましょう。
              </Em>
            </P>
            <R.Wtax />
            <P>
              <EmojiNumber number={5} /> を <EmojiNumber number={2} /> で割ると{' '}
              <Emoji>1️⃣</Emoji> が余るので、計算箱も同じく <Emoji>1️⃣</Emoji>{' '}
              が残りました！
            </P>
            <EmojiSeparator emojis={['🙂', '😉', '🙂', '😉', '😭']} />
            <P>
              ここまでは簡単すぎたかもしれません。次は、もう少し複雑な計算箱を見てみましょう！
              <Emoji>😉</Emoji>
            </P>
          </>
        )
      }
    ]}
  />
)
