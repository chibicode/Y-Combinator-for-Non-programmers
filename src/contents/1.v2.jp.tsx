import React from 'react'
import { P, Strong, Em, InlineHeader } from 'src/components/ContentTags'
import EpisodeCardList from 'src/components/EpisodeCardList'
import H from 'src/components/H'
import EmojiSeparator from 'src/components/EmojiSeparator'
import Emoji from 'src/components/Emoji'
import EmojiNumber from 'src/components/EmojiNumber'
import * as R from 'src/components/Runners'
import { InlineEmojiBoxesForCondition } from 'src/components/InlineEmojiBoxes'

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
              まずは、この物語に登場する「
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
              ご覧の通り、答えは <EmojiNumber number={6} /> になりました。
            </P>
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
              」になるので、計算箱には
              <Strong>
                余りの <Emoji>1️⃣</Emoji>
              </Strong>{' '}
              が残りました。
            </P>
            <P>
              先ほどの例に戻ると、5人のグループを2人ずつに分ければ、ひとりが仲間はずれになります。
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
        title: <>条件分岐の計算箱</>,
        content: (
          <>
            <P>
              次は、こちらの計算箱をご覧ください。この計算箱には「
              <Strong>条件分岐の計算箱</Strong>
              」という名がついており、名前の理由は後ほど説明します。
            </P>
            <R.Ymmm />
            <P>
              「<InlineHeader>条件分岐の計算箱</InlineHeader>」には
              <Em>
                ハテナマーク <Emoji>❓</Emoji>{' '}
                が3つあり、それぞれ左端に違う色と、以下の三種類の印がついています
              </Em>
              。いったいどんな計算ができるのでしょう？
              <Emoji>🤔</Emoji>
            </P>
            <EmojiSeparator emojis={['🔢', '↕️', '0️⃣']} />
            <P>
              とりあえず、{' '}
              <Em>
                それぞれの <Emoji>❓</Emoji> に適当な数字を入れ、
              </Em>
              <H args={{ name: 'play' }} />
              したらどうなるか試してみましょう。
            </P>
            <P>
              試しに、上から順に <EmojiNumber number={1} />{' '}
              <EmojiNumber number={2} /> <EmojiNumber number={3} />{' '}
              を入れてみたので、
              <H args={{ name: 'pressPlay' }} />
            </P>
            <R.Iatt />
            <P>
              答えは <EmojiNumber number={1} />{' '}
              になりました。では、どうしてこうなったか説明しましょう！
            </P>
          </>
        )
      },
      {
        title: (
          <>
            真ん中が <EmojiNumber number={0} /> かどうか
          </>
        ),
        content: (
          <>
            <P>
              「<InlineHeader>条件分岐の計算箱</InlineHeader>」はまず、
              <Strong>
                真ん中の部分 <InlineEmojiBoxesForCondition type="condition" />{' '}
                に入っている数字が <EmojiNumber number={0} /> かどうか
              </Strong>
              チェックします。
            </P>
            <R.Vozu />
            <P>
              真ん中の部分 <InlineEmojiBoxesForCondition type="condition" />{' '}
              に入っている数字は <EmojiNumber number={2} /> なので、{' '}
              <Strong>
                <EmojiNumber number={0} /> ではありません。
              </Strong>
            </P>
            <P>
              このように真ん中が <EmojiNumber number={0} /> ではない場合、
              <Strong>
                上の <InlineEmojiBoxesForCondition type="falseCase" />{' '}
                に入っている数字が最終的に残ります。
              </Strong>
            </P>
            <R.Rjfy />
            <P>
              だから、 上の <InlineEmojiBoxesForCondition type="falseCase" />{' '}
              に入っている <EmojiNumber number={1} /> が残る、というわけです。
            </P>
            <R.Toht />
          </>
        )
      },
      {
        title: (
          <>
            真ん中が <EmojiNumber number={0} /> である場合
          </>
        ),
        content: (
          <>
            <P>
              では、こちらの「<InlineHeader>条件分岐の計算箱</InlineHeader>
              」の場合はどうでしょう？
            </P>
            <R.Plbv />
            <P>
              こちらも、真ん中の数字が <EmojiNumber number={0} />{' '}
              かどうかチェックします。
            </P>
            <R.Qcmh />
            <P>
              今回は真ん中が <EmojiNumber number={0} />{' '}
              ですね。この場合は前回と逆で、
              <Strong>
                下の <InlineEmojiBoxesForCondition type="trueCase" />{' '}
                に入っている数字が最終的に残ります。
              </Strong>
            </P>
            <R.Guhy />
            <P>
              だから、下の <InlineEmojiBoxesForCondition type="trueCase" />{' '}
              に入っている <EmojiNumber number={5} /> が残る、というわけです。
            </P>
          </>
        )
      }
    ]}
  />
)
