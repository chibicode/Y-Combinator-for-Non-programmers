import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong } from 'src/components/ContentTags'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiNumber from 'src/components/EmojiNumber'
import Emoji from 'src/components/Emoji'
import H from 'src/components/H'
// import * as R from 'src/components/Runners'
// import YesNoButtons from 'src/components/YesNoButtons'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>繰り返しの機能</>,
        content: (
          <>
            <P>
              前回は、ラムダ村に代々伝わる「<Emoji>🎁</Emoji>{' '}
              <Strong>計算箱</Strong>」の話をしました。
            </P>
            <EmojiSeparator emojis={['🌲', '🙂', '🎁', '🙂', '🌲']} />
            <P>
              そして、足し算や引き算を可能にする、計算箱の「
              <CustomEmoji type="plusMinus" />{' '}
              <Strong>プラスマイナスの機能</Strong>
              」について紹介しました。
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="plusMinus" />,
                <CustomEmoji type="minusOne" />
              ]}
              description={<>プラスマイナスの機能</>}
            />
            <P>
              今回はもうひとつの計算箱の機能である「
              <Emoji>🔁</Emoji> <Strong>繰り返しの機能</Strong>
              」について説明します。
            </P>
            <EmojiSeparator
              nodes={[<Emoji>✨</Emoji>, <Emoji>🔁</Emoji>, <Emoji>✨</Emoji>]}
              description={<>繰り返しの機能</>}
            />
            <P>
              まずは
              <H args={{ name: 'yesNoQuiz' }} />
              からはじめましょう！
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
        // CHANGE QUIZ: Suppose that they want to do 10 - 9 ... are they doing it right or not? The answer should be no, they made a mistake
        content: (
          <>
            <P>
              あるラムダ村の村人は、計算箱を使って <EmojiNumber number={10} />{' '}
              <Emoji>➖</Emoji> <EmojiNumber number={8} />{' '}
              を計算しようとしていました。
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={10} />,
                <Emoji>➖</Emoji>,
                <EmojiNumber number={8} />,
                <Emoji>🤔</Emoji>,
                <Emoji>❓</Emoji>
              ]}
              description={
                <>
                  ラムダ村の村人は計算が苦手だったので、
                  <br />
                  簡単な計算でも計算箱に頼っていたのです。
                </>
              }
            />
            <P>
              というわけでラムダ村の村人は、以下のような計算箱を
              <H args={{ name: 'play' }} />
              しようとしました。
            </P>
          </>
        )
      }
    ]}
  />
)
