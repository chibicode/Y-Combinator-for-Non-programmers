import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { Hr, P, Em, Strong, InlineHeader } from 'src/components/ContentTags'
import H from 'src/components/H'
import AER from 'src/components/AER'
import { InlineEmojiBoxesForQuestion } from 'src/components/InlineEmojiBoxes'
import YesNoButtons from 'src/components/YesNoButtons'
import EmojiSeparator from 'src/components/EmojiSeparator'
import Emoji from 'src/components/Emoji'
import BottomRightBadge from 'src/components/BottomRightBadge'
import YcNextLessonButton from 'src/components/YcNextLessonButton'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiForLetter from 'src/components/EmojiForLetter'
import TopRightBadge from 'src/components/TopRightBadge'
import EmojiForLetterWithTopRightBadgeWrapper from 'src/components/EmojiForLetterWithTopRightBadgeWrapper'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: (
          <>
            複雑な
            <H args={{ name: 'bentoBox' }} />
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              早速、
              <H args={{ name: 'lookAtThisBentoBox' }} />。
            </P>
            {AER.gopk}
            <P>
              今まで見たことがないくらい複雑な
              <H args={{ name: 'bentoBox' }} />
              ですね。これは、どういう効果があるのでしょうか？
            </P>
            <P>
              <H args={{ name: 'yesNoQuiz' }} />
              で検証してみましょう！
            </P>
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
          </>
        ),
        content: (
          <>
            <P>
              こちらに、暗号が「<Strong>2</Strong>」の
              <H args={{ name: 'bentoBox' }} />
              を用意しました。
            </P>
            {AER.imgp}
            <P>
              これを、先ほどの
              <H args={{ name: 'bentoBox' }} />の
              <InlineEmojiBoxesForQuestion />
              の部分に埋め込んでみます。
            </P>
            {AER.lxnu}
            <P>
              <H args={{ name: 'whatsTheNumberQuestion', number: 1 }} />
            </P>
            <YesNoButtons answer="yes" tooHard />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'theAnswerIs', isYes: true }} />
          </>
        ),
        content: (
          <>
            <P>
              <Strong>
                <H args={{ name: 'theAnswerIs', isYes: true }} />
                でした。
              </Strong>
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.ccon}
            <P>
              最後に残ったのは、暗号が「<Strong>1</Strong>」の
              <H args={{ name: 'bentoBox' }} />
              でした。
            </P>
            {AER.npfx}
            <P>
              もともとの暗号は「<Strong>2</Strong>」だったので、「
              <Strong>2</Strong>」が「<Strong>1</Strong>」になったわけです。
            </P>
            <EmojiSeparator emojis={['2️⃣', '➡️', '1️⃣']} />
          </>
        )
      },
      {
        title: (
          <>
            1を引く
            <H args={{ name: 'bentoBox' }} />
          </>
        ),
        content: (
          <>
            {AER.pnob}
            <P>
              つまり、これは
              <InlineEmojiBoxesForQuestion />
              の暗号から「<Strong>1を引く</Strong>」
              <H args={{ name: 'bentoBox' }} />
              なのです。
            </P>
            <EmojiSeparator
              nodes={[
                <InlineEmojiBoxesForQuestion size="md" />,
                <Emoji>➖</Emoji>,
                <Emoji>1️⃣</Emoji>
              ]}
            />
            <P>
              足し算や掛け算の
              <H args={{ name: 'bentoBox' }} />
              より、かなり複雑ですよね。
            </P>
          </>
        )
      },
      {
        type: 'sideNote',
        title: (
          <>
            <BottomRightBadge inline bottomRightBadgeType="callArg" />と
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
            が必ず同じになる
          </>
        ),
        content: (
          <>
            <P>
              <InlineHeader>ちなみに:</InlineHeader>{' '}
              <InlineEmojiBoxesForQuestion />
              にどんな料理を入れても、
              <H args={{ name: 'fastForward' }} />
              の途中で、
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                に必ず同じ料理が登場します。
              </Strong>
            </P>
            <P>
              先ほどの例で確かめてみましょう。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.fiab}
            <P>
              <Strong>
                <EmojiWithText letter="e" />が
                <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              </Strong>
              にそれぞれありますね。前回説明した通り、このままだと正しい結果が出ません。
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <EmojiForLetter letter="e" />,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              ]}
            />
            <P>
              というわけで、正しい結果を出すために、
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                と
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                にある
                <EmojiWithText letter="e" />
                が、まだ使われていない別の料理(
                <EmojiWithText letter="a" />
                )に自動的に変わります。
              </Strong>
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter="e" />,
                <Emoji>➡️</Emoji>,
                <EmojiForLetter letter="a" />
              ]}
            />
            <P>
              実際に確かめてみましょう。
              <H args={{ name: 'pressNext' }} />
            </P>
            {AER.plxd}
            <P>
              ご覧の通り、
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              と
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />
              にある
              <EmojiWithText letter="e" />
              が、
              <EmojiWithText letter="a" />
              に変わりました。
            </P>
            <P>
              これを行わないと、「<Strong>1を引く</Strong>」
              <H args={{ name: 'bentoBox' }} />
              として機能しません。ここでは詳しく書きませんが、引き算とは全然違う答えが出てしまうのです。
            </P>
            <Hr />
            <P>
              以上、前回紹介したルールが役に立っているよ、という余談でした。
            </P>
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'bentoBox' }} />
            を「省略表記」できないか？
          </>
        ),
        content: (
          <>
            {AER.zaoc}
            <P>
              上の
              <H args={{ name: 'bentoBox' }} />
              は、「<Strong>2 - 1</Strong>」を計算できることがわかりましたが、
              <Em>
                少し複雑すぎて、ひと目見て何が起きているかわかりにくいですよね。
              </Em>
            </P>
            <EmojiSeparator emojis={['❓', '🤯', '❓']} />
            <P>
              <InlineHeader>疑問:</InlineHeader>{' '}
              <Em>
                上の
                <H args={{ name: 'bentoBox' }} />
                を何らかの手法で「<Strong>省略表記</Strong>
                」することで、何が起きているをかわかりやすくする方法はないでしょうか？
              </Em>
            </P>
          </>
        )
      },
      {
        title: <>暗号の省略表記</>,
        content: (
          <>
            <P>
              まず、
              <Em>
                暗号の
                <H args={{ name: 'bentoBox' }} />を<Strong>数字で</Strong>
                表示してみます
              </Em>
              。たとえば、こちらは
              <Strong>暗号が「2」</Strong>の
              <H args={{ name: 'bentoBox' }} />
              なので、
            </P>
            {AER.imgp}
            <P>このように数字で表示してみます。</P>
            {AER.xekr}
            <P>
              数字で省略表記することで、ひと目見て何のことか分かりやすくなりました。
            </P>
          </>
        )
      },
      {
        title: <>引き算の省略表記</>,
        content: (
          <>
            <P>
              <Emoji>2️⃣</Emoji>の
              <H args={{ name: 'bentoBox' }} />
              を、先ほどの「<Strong>1を引く</Strong>」
              <H args={{ name: 'bentoBox' }} />
              に入れてみました。
            </P>
            {AER.uqts}
            <P>
              今度は、「<Strong>1を引く</Strong>」部分も省略してみましょう。
            </P>
            <P>
              <Strong>
                <TopRightBadge topRightBadgeType="pred" inline />
                の記号を<Emoji>2️⃣</Emoji>の右上に表示
              </Strong>
              することによって、2から「<Strong>1を引く</Strong>
              」ことを省略表記してみます。
            </P>
            {AER.ojma}
            <P>
              これを
              <H args={{ name: 'play' }} />
              すると、<Emoji>2️⃣</Emoji>が<Emoji>1️⃣</Emoji>になります。
            </P>
            {AER.yykk}
            <P>このように省略表記することで、だいぶ分かりやすくなりました。</P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetterWithTopRightBadgeWrapper topRightBadgeType="pred">
                  <Emoji>2️⃣</Emoji>
                </EmojiForLetterWithTopRightBadgeWrapper>,
                <Emoji>➡️</Emoji>,
                <Emoji>1️⃣</Emoji>
              ]}
            />
            <P>
              次は、
              <H args={{ name: 'yesNoQuiz' }} />
              をしながら、これを実際に役立ててみましょう！
            </P>
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'lookAtThisBentoBox' }} />:
            </P>
            {AER.exww}
            <P>
              <H args={{ name: 'whatsTheNumberQuestion', number: 0 }} />
            </P>
            <YesNoButtons answer="yes" tooHard />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'theAnswerIs', isYes: true }} />
          </>
        ),
        content: (
          <>
            <P>
              <Strong>
                <H args={{ name: 'theAnswerIs', isYes: true }} />
                でした。
              </Strong>
              最終的に暗号は<Emoji>0️⃣</Emoji>
              になります。
            </P>
            <EmojiSeparator emojis={['1️⃣', '➡️', '0️⃣']} />
            <P>
              <H args={{ name: 'fastForward' }} />
              する前に、先ほどの
              <H args={{ name: 'bentoBox' }} />
              を省略表記してみましょう。
            </P>
            <P>
              まず、上の部分は「<Strong>1</Strong>」の暗号の
              <H args={{ name: 'bentoBox' }} />
              なので、
            </P>
            {AER.qgun}
            <P>
              <Emoji>1️⃣</Emoji>と省略表記します。
            </P>
            {AER.yvia}
            <P>
              次に、右下には
              <Strong>
                <EmojiWithText letter="i" />
              </Strong>
              と、その下に「
              <Strong>
                1を引く
                <H args={{ name: 'bentoBox' }} />
              </Strong>
              」があります。
            </P>
            {AER.qifg}
            <P>
              この場合、「1を引く
              <H args={{ name: 'bentoBox' }} />
              」が
              <Strong>
                <EmojiWithText letter="i" />
                の真下にある
              </Strong>
              ので、「
              <Strong>
                <EmojiWithText letter="i" />
                に入る暗号から1を引く
              </Strong>
              」ということになります。
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter="i" />,
                <Emoji>➖</Emoji>,
                <Emoji>1️⃣</Emoji>
              ]}
            />
            <P>つまり省略表記すると、こうなります:</P>
            {AER.ufyc}
            <P>
              ここまでくると、どうなるかわかりやすいですね。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.pbgd}
            <P>
              つまり、「<Strong>1 - 1</Strong>
              」の計算が行われるので、最終的に暗号は<Emoji>0️⃣</Emoji>
              になります。
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetterWithTopRightBadgeWrapper topRightBadgeType="pred">
                  <Emoji>1️⃣</Emoji>
                </EmojiForLetterWithTopRightBadgeWrapper>,
                <Emoji>➡️</Emoji>,
                <Emoji>0️⃣</Emoji>
              ]}
            />
            <P>
              もともとの
              <H args={{ name: 'bentoBox' }} />
              は複雑でしたが、
              <Strong>
                省略表記をすることで、何が起きているかがひと目で分かるようになった
              </Strong>
              、という例でした。
            </P>
          </>
        )
      },
      {
        title: <>上級も残り少し</>,
        content: (
          <>
            <P>上級編も残り2ページとなりました！</P>
            <EmojiSeparator emojis={['🎉', '🤗', '🎉']} />
            <P>
              次のページでは、
              <Strong>
                条件分岐の
                <H args={{ name: 'bentoBox' }} />
                を省略表記していきます。
              </Strong>
              そして、中級編の最後で話した「<Strong>繰り返し処理</Strong>
              」について、もう一度検証していきます。
            </P>
            <YcNextLessonButton />
          </>
        )
      }
    ]}
  />
)
