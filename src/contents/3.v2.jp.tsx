import React from 'react'
import { P, Strong, Ul, UlLi } from 'src/components/ContentTags'
import H from 'src/components/H'
import EpisodeCardList from 'src/components/EpisodeCardList'
import * as R from 'src/components/Runners'
import InlineBorder from 'src/components/InlineBorder'
import Emoji from 'src/components/Emoji'
import EmojiNumber from 'src/components/EmojiNumber'
import BlankNumber from 'src/components/BlankNumber'
import EmojiSeparator from 'src/components/EmojiSeparator'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: (
          <>
            <H args={{ name: 'repeatingMathBox' }} />
          </>
        ),
        content: (
          <>
            <P>
              今回は、今までよりも複雑な計算箱を紹介します。それが、この「
              <Strong>
                <H args={{ name: 'repeatingMathBox' }} />
              </Strong>
              」 です。
            </P>
            <R.Oklg />
            <P>この計算箱の特徴は、</P>
            <Ul>
              <UlLi>
                <InlineBorder>
                  <EmojiNumber number={2} /> <Emoji>➡️</Emoji>{' '}
                  <EmojiNumber number={3} />
                </InlineBorder>{' '}
                という印が左側にあり、
              </UlLi>
              <UlLi>
                <Strong>一番下に星印</Strong> <BlankNumber star />{' '}
                が入っています。
              </UlLi>
            </Ul>
            <EmojiSeparator
              nodes={[
                <Emoji>✨</Emoji>,
                <BlankNumber star />,
                <Emoji>✨</Emoji>
              ]}
            />
            <P>
              これを
              <H args={{ name: 'play' }} />
              するとどうなるか見てみましょう！
            </P>
            <R.Emme />
            <P>
              最後に <EmojiNumber number={6} />{' '}
              が残りました。どういう仕組みなのか、見てみましょう！
            </P>
          </>
        )
      }
    ]}
  />
)
