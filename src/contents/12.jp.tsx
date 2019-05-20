import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Em, Strong, InlineHeader } from 'src/components/ContentTags'
import H from 'src/components/H'
import AER from 'src/components/Yc/AER'
import { InlineEmojiBoxesForQuestion } from 'src/components/Yc/InlineEmojiBoxes'
import YesNoButtons from 'src/components/YesNoButtons'
import EmojiSeparator from 'src/components/EmojiSeparator'
import Emoji from 'src/components/Emoji'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiForLetter from 'src/components/EmojiForLetter'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: (
          <>
            複雑な
            <H args={{ name: 'bentoBox', short: true }} />
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
              <H args={{ name: 'bentoBox', short: true }} />
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
              <H args={{ name: 'bentoBox', short: true }} />
              を用意しました。
            </P>
            {AER.imgp}
            <P>
              これを、先ほどの
              <H args={{ name: 'bentoBox', skipEmoji: true }} />の
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
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
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
            <H args={{ name: 'bentoBox', short: true }} />
          </>
        ),
        content: (
          <>
            {AER.pnob}
            <P>
              つまり、これは
              <InlineEmojiBoxesForQuestion />
              の暗号から「<Strong>1を引く</Strong>」
              <H args={{ name: 'bentoBox', short: true }} />
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
              <H args={{ name: 'bentoBox', short: true }} />
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
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              として機能しません。前回紹介したルールが役に立っているのです！
            </P>
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'bentoBox', skipEmoji: true }} />
            を「省略表示」できないか？
          </>
        ),
        content: (
          <>
            {AER.zaoc}
            <P>
              上の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
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
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                を何らかの手法で「<Strong>省略表示</Strong>
                」することで、何が起きているをかわかりやすくする方法はないでしょうか？
              </Em>
            </P>
          </>
        )
      },
      {
        title: <>暗号を数字で表示する</>,
        content: <></>
      }
    ]}
  />
)
