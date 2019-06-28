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
import { InlineEmojiBoxesForCondition } from 'src/components/InlineEmojiBoxes'
import NextLessonButton from 'src/components/NextLessonButton'

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
                まず、真ん中の <InlineEmojiBoxesForCondition type="condition" />{' '}
                の中にある数字が <EmojiNumber number={0} />{' '}
                かどうかチェックします。
              </Em>
            </P>
            <Ul>
              <UlLi>
                <Em>
                  もし <EmojiNumber number={0} /> なら、 下の{' '}
                  <InlineEmojiBoxesForCondition type="trueCase" />{' '}
                  の中にある数字が残ります。
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  もし <EmojiNumber number={0} /> でなければ、 上の{' '}
                  <InlineEmojiBoxesForCondition type="falseCase" />{' '}
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
        title: <>何の役に立つの？</>,
        content: (
          <>
            <P>
              では、
              <Strong>
                この条件分岐の計算箱はいったい何の役に立つのでしょうか？
              </Strong>
              人々は、条件分岐の計算箱をどんな用途で使っていたのでしょう？
              <Emoji>🤔</Emoji>
            </P>
            <EmojiSeparator emojis={['🔢', '🤔', '0️⃣']} />
            <P>それについて説明する前に、こちらの計算箱をご覧ください:</P>
            <R.Yhmp />
            <P>
              これは、「<Strong>条件分岐の計算箱</Strong>」と、「
              <Strong>割ったときの余りがわかる計算箱</Strong>
              」を組み合わせた計算箱です。
              <Strong>計算箱は、組み合わせることもできるのです。</Strong>
            </P>
            <EmojiSeparator emojis={['🎁', '🤗', '🎁']} />
            <P>
              次のページで詳しく書きますが、概要を手短に説明しておきますね。
            </P>
            <Ul>
              <UlLi>
                真ん中の部分 <InlineEmojiBoxesForCondition type="condition" />{' '}
                に、「
                <Strong>割ったときの余りがわかる計算箱</Strong>
                」が入っており、<Strong>こちらを先に計算します</Strong>。
              </UlLi>
              <UlLi>
                この場合、
                <Em>
                  <Emoji>❓</Emoji> を <Emoji>4️⃣</Emoji> で割ったときの余りが{' '}
                  <Emoji>0️⃣</Emoji> なら <EmojiNumber number={29} />
                  、それ以外なら <EmojiNumber number={28} /> になります。
                </Em>
              </UlLi>
            </Ul>
          </>
        )
      },
      {
        title: <>何の目的で使われていた？</>,
        content: (
          <>
            <P>では、ここで質問です。(同じ計算箱を再掲します)</P>
            <R.Yhmp />
            <P>
              <InlineHeader>質問:</InlineHeader> 人々は、この計算箱を
              <Strong>ある目的のために</Strong>使っていました。
              <Strong>いったい、どんな目的で使っていたのでしょう？</Strong>
            </P>
            <EmojiSeparator emojis={['❓', '🤔', '❓']} />
            <P>
              <InlineHeader>ヒント:</InlineHeader>{' '}
              <Em>
                <EmojiNumber number={28} /> か <EmojiNumber number={29} />{' '}
                の二択になるものって、何があるでしょう？
              </Em>
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={28} />,
                <Emoji>🆚</Emoji>,
                <EmojiNumber number={29} />
              ]}
            />
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
