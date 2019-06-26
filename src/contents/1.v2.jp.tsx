import React from 'react'
import { P, Strong, Em, InlineHeader } from 'src/components/ContentTags'
import EpisodeCardList from 'src/components/EpisodeCardList'
import H from 'src/components/H'
import EmojiSeparator from 'src/components/EmojiSeparator'
import Emoji from 'src/components/Emoji'
import EmojiNumber from 'src/components/EmojiNumber'
import * as R from 'src/components/Runners'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>この話はフィクションです</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              当記事は<Em>ゆるい物語調</Em>
              で話を進めていきます。ちなみに、この話はフィクションです。
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
              一番上と下にハテナマーク <Emoji>❓</Emoji>{' '}
              があり、真ん中に足し算の記号 <Emoji>➕</Emoji> がありますね。
            </P>
            <P>
              この <Emoji>❓</Emoji>{' '}
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
              計算箱は他にも引き算や割り算ができますが、特に興味深いわけでもないので、時間の都合上省略します。
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
              」と思われるかもしれません。でも、
              <Em>
                計算箱がある世界の人々はみな計算が苦手で、簡単な計算でも計算箱に頼っていた
              </Em>
              のです。
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
              <EmojiNumber number={5} /> を <EmojiNumber number={2} />{' '}
              で割ると「
              <EmojiNumber number={2} /> 余り <EmojiNumber number={1} />
              」になるので、計算箱には余りの <Emoji>1️⃣</Emoji>{' '}
              が残りました。5人のグループを2人ずつに分ければ、ひとりが仲間はずれになりますからね。
              <Emoji>😭</Emoji>
            </P>
            <EmojiSeparator emojis={['🙂', '😉', '🙂', '😉', '😭']} />
            <P>
              ここまでは簡単すぎたかもしれません。次は、もう少し複雑な計算箱を見てみましょう！
              <Emoji>😉</Emoji>
            </P>
          </>
        )
      },
      {
        title: (
          <>
            <Emoji>❓</Emoji>が3つある計算箱
          </>
        ),
        content: (
          <>
            <P>次は、こちらの計算箱をご覧ください。</P>
            <R.Ymmm />
            <P>
              この計算箱にはハテナマーク <Emoji>❓</Emoji>{' '}
              が3つあり、それぞれ左端に違う色と、以下の三種類の印がついています。いったいどんな計算ができるのでしょう？
              <Emoji>🤔</Emoji>
            </P>
            <EmojiSeparator emojis={['🔢', '↕️', '0️⃣']} />
            <P>
              とりあえず、{' '}
              <Em>
                それぞれの <Emoji>❓</Emoji> に適当な数字を入れ、
              </Em>
              <H args={{ name: 'play' }} />
              したらどうなるか見てみましょう。
            </P>
            <P>
              ここでは試しに、上から順に <EmojiNumber number={1} />{' '}
              <EmojiNumber number={2} /> <EmojiNumber number={3} />{' '}
              を入れてみました。
              <H args={{ name: 'pressPlay' }} />
            </P>
            <R.Iatt />
            <P>
              答えは <EmojiNumber number={1} />{' '}
              になりました。では、どうしてこうなったか説明しましょう！
            </P>
          </>
        )
      }
    ]}
  />
)
