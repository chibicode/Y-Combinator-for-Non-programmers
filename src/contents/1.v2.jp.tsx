import React from 'react'
import {
  P,
  Strong,
  Em,
  InlineHeader,
  Ul,
  UlLi,
  Hr
} from 'src/components/ContentTags'
import EpisodeCardList from 'src/components/EpisodeCardList'
import H from 'src/components/H'
import EmojiSeparator from 'src/components/EmojiSeparator'
import Emoji from 'src/components/Emoji'
import EmojiNumber from 'src/components/EmojiNumber'
import * as R from 'src/components/Runners'
import NextLessonButton from 'src/components/NextLessonButton'
import BlankNumber from 'src/components/BlankNumber'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>この話はフィクションです</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              本稿は<Em>ゆるい物語調</Em>
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
              一番上と下にハテナマーク <BlankNumber />{' '}
              があり、真ん中に足し算の記号 <Emoji>➕</Emoji> がありますね。
            </P>
            <P>
              この <BlankNumber />{' '}
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
              一方、少しだけ興味深いのが、「
              <Strong>割ったときの余りがわかる計算箱</Strong>
              」です。
            </P>
            <P>
              たとえば下の計算箱は、 「
              <Strong>
                <EmojiNumber number={5} /> を <EmojiNumber number={2} />{' '}
                で割ったときの余り
              </Strong>
              」を計算してくれます。
              <H args={{ name: 'pressPlay' }} />
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
              が残るというわけです。
            </P>
            <Hr />
            <P>
              ここまでは、単純な計算ができる計算箱を紹介してきました。次は、もう少し複雑な計算箱を見てみましょう！
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
                ハテナマーク <BlankNumber />{' '}
                が3つあります。それぞれ左端に赤・黄色・青と信号機{' '}
                <Emoji>🚦</Emoji>{' '}
                のような色があり、左上に以下の三種類の印がついています
              </Em>
              。いったいどんな計算ができるのでしょう？
              <Emoji>🤔</Emoji>
            </P>
            <EmojiSeparator emojis={['🔢', '↕️', '0️⃣']} />
            <P>
              とりあえず、{' '}
              <Em>
                それぞれの <BlankNumber /> に適当な数字を入れ、
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
                <H args={{ name: 'conditionSectionName', type: 'condition' }} />{' '}
                に入っている数字が <EmojiNumber number={0} /> かどうか
              </Strong>
              チェックします。
            </P>
            <R.Vozu />
            <P>
              <H args={{ name: 'conditionSectionName', type: 'condition' }} />{' '}
              に入っている数字は <EmojiNumber number={2} /> なので、{' '}
              <Strong>
                <EmojiNumber number={0} /> ではありません。
              </Strong>
            </P>
            <P>
              このように真ん中が <EmojiNumber number={0} /> ではない場合、
              <Strong>
                <H args={{ name: 'conditionSectionName', type: 'falseCase' }} />{' '}
                に入っている数字が最終的に残ります。
              </Strong>
            </P>
            <R.Rjfy />
            <P>
              だから、{' '}
              <H args={{ name: 'conditionSectionName', type: 'falseCase' }} />{' '}
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
                <H args={{ name: 'conditionSectionName', type: 'trueCase' }} />{' '}
                に入っている数字が最終的に残ります。
              </Strong>
            </P>
            <R.Guhy />
            <P>
              だから、
              <H
                args={{ name: 'conditionSectionName', type: 'trueCase' }}
              />{' '}
              に入っている <EmojiNumber number={5} /> が残る、というわけです。
            </P>
          </>
        )
      },
      {
        type: 'summary',
        title: (
          <>
            <H args={{ name: 'summary' }} />
          </>
        ),
        content: (
          <>
            <P>
              まとめると、この「<InlineHeader>条件分岐の計算箱</InlineHeader>
              」の法則は以下の通りです。
            </P>
            <R.Ymmm />
            <P>
              <Em>
                まず、
                <H
                  args={{ name: 'conditionSectionName', type: 'condition' }}
                />{' '}
                の中にある数字が <EmojiNumber number={0} />{' '}
                かどうかチェックします。
              </Em>
            </P>
            <Ul>
              <UlLi>
                <Em>
                  もし <EmojiNumber number={0} /> なら、{' '}
                  <H
                    args={{ name: 'conditionSectionName', type: 'trueCase' }}
                  />{' '}
                  の中にある数字が残ります。
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  もし <EmojiNumber number={0} /> でなければ、
                  <H
                    args={{ name: 'conditionSectionName', type: 'falseCase' }}
                  />{' '}
                  の中にある数字が残ります。
                </Em>
              </UlLi>
            </Ul>
            <EmojiSeparator emojis={['🔢', '↕️', '0️⃣']} />
            <P>
              「
              <Em>
                真ん中が <EmojiNumber number={0} /> かどうか？
              </Em>
              」という「
              <Strong>条件</Strong>」によって、上下に「
              <Strong>分岐</Strong>」するので、「<Strong>条件分岐</Strong>
              の計算箱」という名前がついているのです。
            </P>
          </>
        )
      },
      {
        title: <>組み合わせも可能</>,
        content: (
          <>
            <P>
              <Strong>
                計算箱は、他の計算箱と組み合わせることもできます。
              </Strong>
              たとえば下の計算箱は、「<Strong>条件分岐の計算箱</Strong>」と、「
              <Strong>割ったときの余りがわかる計算箱</Strong>
              」を組み合わせた計算箱です。
            </P>
            <R.Jehz />
            <P>
              まず、
              <H
                args={{ name: 'conditionSectionName', type: 'condition' }}
              />{' '}
              に入っている「
              <Strong>
                <EmojiNumber number={5} /> を <EmojiNumber number={2} />{' '}
                で割ったときの余りがわかる計算箱
              </Strong>
              」を計算します。
              <H args={{ name: 'yellowHighlighted' }} />
            </P>
            <R.Hhtl />
            <P>
              <EmojiNumber number={5} /> を <EmojiNumber number={2} />{' '}
              で割ると余りは <EmojiNumber number={1} /> になるので、
              <H
                args={{ name: 'conditionSectionName', type: 'condition' }}
              />{' '}
              が <EmojiNumber number={1} /> になります。
              <H args={{ name: 'yellowHighlighted' }} />
            </P>
            <R.Vbdk />
            <P>
              あとは以前と同じです。
              <H
                args={{ name: 'conditionSectionName', type: 'condition' }}
              />{' '}
              が <EmojiNumber number={0} /> ではないので、
              <H
                args={{ name: 'conditionSectionName', type: 'falseCase' }}
              />{' '}
              の中にある <EmojiNumber number={4} />{' '}
              が最終的に残るというわけです。
            </P>
            <R.Fwks />
            <P>
              このように、計算箱は他の計算箱と組み合わせることもできるのです。
            </P>
            <EmojiSeparator emojis={['🎁', '🤗', '🎁']} />
          </>
        )
      },
      {
        title: <>何の役に立つの？</>,
        content: (
          <>
            <P>
              ここまで、条件分岐の計算箱をいくつか紹介してきました。
              <Strong>
                しかし、条件分岐の計算箱はいったい何の役に立つのでしょうか？
              </Strong>
              人々は、条件分岐の計算箱をどんな用途で使っていたのでしょう？
              <Emoji>🤔</Emoji>
            </P>
            <EmojiSeparator emojis={['🔢', '🤔', '0️⃣']} />
            <P>では、ここで質問です。こちらの計算箱をご覧ください:</P>
            <R.Yhmp />
            <P>
              <InlineHeader>質問:</InlineHeader> 人々は、この計算箱を
              <Strong>ある目的のために</Strong>使っていました。
              <Strong>いったい、どんな目的で使っていたのでしょう？</Strong>
            </P>
            <EmojiSeparator emojis={['❓', '🎁', '❓']} />
            <P>
              答えは次のページにあります。少し考えてみてから、下のボタンを押してください。分からなくても大丈夫です！
              <Emoji>😉</Emoji>
            </P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
