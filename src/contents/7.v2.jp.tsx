import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Em, Strong } from 'src/components/ContentTags'
import CustomEmoji from 'src/components/CustomEmoji'
import BubbleQuotes from 'src/components/BubbleQuotes'
// import EmojiNumber from 'src/components/EmojiNumber'
import H from 'src/components/H'
// import YesNoButtons from 'src/components/YesNoButtons'
// import ExpressionRunnerButton from 'src/components/ExpressionRunnerButton'
import * as R from 'src/components/Runners'
// import EmojiWithText from 'src/components/EmojiWithText'
// import EmojiForLetter from 'src/components/EmojiForLetter'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
// import NextLessonButton from 'src/components/NextLessonButton'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <></>,
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
                        わかりました。まず、
                        <H args={{ name: 'lookAtThisBentoBox' }} />。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              TODO: Bento box convertible to 1. Then say if you add this box and
              run and convert you'll get 2. Then say essentially this is the
              same as math box 1 + 1. Then also do the same with 2 + 1.
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        はい。
                        <H args={{ name: 'lookAtThisBentoBox' }} />。
                      </P>
                      <P>
                        <Em>
                          それぞれの <CustomEmoji type="questionFoodGrey" />{' '}
                          には、何らかの料理が入ります。
                        </Em>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              <CustomEmoji type="questionFoodGrey" /> には何らかの料理が入ります
            </R.Envj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>何だか複雑な弁当箱だなあ…</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        そうですね。そして、
                        <Strong>
                          それぞれの <CustomEmoji type="questionFoodGrey" />{' '}
                          に、ある法則に基づいて料理を当てはめる
                        </Strong>
                        と…
                      </P>
                      <P>
                        ぼくはこの弁当箱を{' '}
                        <Em>
                          <CustomEmoji type="plusOne" />{' '}
                          の計算箱に変換することができる
                        </Em>
                        んです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              <Strong>
                それぞれの <CustomEmoji type="questionFoodGrey" />{' '}
                に、ある法則に
                <br />
                基づいて料理を当てはめて…
              </Strong>
            </R.Envj>
            <ExpressionRunnerSeparator />
            <R.Biit>
              <H args={{ name: 'convert', type: 'toMathBox' }} /> すると、
              <CustomEmoji type="plusOne" /> になる
            </R.Biit>
          </>
        )
      },
      {
        title: <></>,
        content: (
          <>
            <R.Pbop>
              <CustomEmoji type="questionFoodRed" /> には何らかの料理が入ります
            </R.Pbop>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        そして、
                        <Strong>
                          それぞれの <CustomEmoji type="questionFoodRed" />{' '}
                          に、ある法則に基づいて料理を当てはめる
                        </Strong>
                        と…
                      </P>
                      <P>
                        ぼくはこの弁当箱を{' '}
                        <Em>
                          <CustomEmoji type="minusOne" />{' '}
                          の計算箱に変換することができる
                        </Em>
                        んです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Pbop>
              <Strong>
                それぞれの <CustomEmoji type="questionFoodRed" /> に、ある法則に
                <br />
                基づいて料理を当てはめて…
              </Strong>
            </R.Pbop>
            <ExpressionRunnerSeparator />
            <R.Uxbl>
              <H args={{ name: 'convert', type: 'toMathBox' }} /> すると、
              <CustomEmoji type="minusOne" /> になる
            </R.Uxbl>
          </>
        )
      },
      {
        title: <></>,
        content: <></>
      }
      // Talk about minus next
      // Then ask the question - what is the pattern for each?
      // Say: I have no clue. Do you have any hint?
      // Sure - if you use the pattern for +1 along with 1, then if you run it, you get 2
      // Same for minus.
      // Try it out by filling with random food items for +1, and fail
    ]}
  />
)
