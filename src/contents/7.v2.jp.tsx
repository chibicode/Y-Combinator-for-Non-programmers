import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Em,
  Strong
  // Ol,
  // OlLi,
  // InlineHeader
} from 'src/components/ContentTags'
import CustomEmoji from 'src/components/CustomEmoji'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiSeparator from 'src/components/EmojiSeparator'
// import EmojiNumber from 'src/components/EmojiNumber'
import Emoji from 'src/components/Emoji'
// import YesNoButtons from 'src/components/YesNoButtons'
// import ExpressionRunnerButton from 'src/components/ExpressionRunnerButton'
// import * as R from 'src/components/Runners'
// import EmojiWithText from 'src/components/EmojiWithText'
// import EmojiForLetter from 'src/components/EmojiForLetter'
// import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
// import NextLessonButton from 'src/components/NextLessonButton'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>プラスの芸</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        では、
                        <Em>
                          これから出す問題に答えることができたら、計算箱を返してやろう！
                        </Em>
                      </P>
                      <P>ベンケイ、問題を説明するんだ！</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        わかりました。まず、ぼくは前回紹介した芸に加え、「
                        <Strong>プラスの芸</Strong>
                        」という芸を持っています。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <Emoji>🍱</Emoji>,
                <Emoji>🐶</Emoji>,
                <CustomEmoji type="plusOne" />
              ]}
              description={
                <>
                  <Strong>プラスの芸</Strong>
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        ぼくは、
                        <Strong>
                          とある法則と一致する弁当箱を{' '}
                          <CustomEmoji type="plusOne" />{' '}
                          の計算箱に変えることができる
                        </Strong>
                        んです。
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>とある法則だって？</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      }
      // It should have a bunch of ? marks in the correct location
    ]}
  />
)
