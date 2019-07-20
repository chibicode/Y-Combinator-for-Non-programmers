import React from 'react'
import {
  P,
  Strong,
  Ul,
  UlLi,
  Em,
  InlineHeader
} from 'src/components/ContentTags'
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
        title: <>繰り返しの計算箱</>,
        content: (
          <>
            <P>
              今回は、今までよりも複雑な計算箱を紹介します。それが、この「
              <Strong>繰り返しの計算箱</Strong>」 です。
            </P>
            <R.Oklg />
            <P>この計算箱の特徴として、</P>
            <Ul>
              <UlLi>
                左側に{' '}
                <InlineBorder>
                  <EmojiNumber number={2} /> <EmojiNumber number={3} />
                </InlineBorder>{' '}
                という印があり、
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
          </>
        )
      },
      {
        title: (
          <>
            とりあえず
            <H args={{ name: 'play' }} /> してみる
          </>
        ),
        content: (
          <>
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
      },
      {
        title: <>繰り返しの計算箱の仕組み、その1</>,
        content: (
          <>
            <P>
              まず、左側にある{' '}
              <InlineBorder>
                <EmojiNumber number={2} /> <EmojiNumber number={3} />
              </InlineBorder>{' '}
              に注目します。これは、
              <Em>
                「23」というひとつの数字ではなく、
                <Strong>「2」と「3」のふたつの数字</Strong>を表しています
              </Em>
              。
            </P>
            <R.Eqvz />
            <P>
              「<InlineHeader>繰り返しの計算箱</InlineHeader>
              」はまず、次のようになります。
            </P>
            <R.Hawd />
            <P>何が起きたかというと、</P>
            <Ul>
              <UlLi>
                <Strong>
                  左側の{' '}
                  <InlineBorder>
                    <EmojiNumber number={2} /> <EmojiNumber number={3} />
                  </InlineBorder>{' '}
                  が{' '}
                  <InlineBorder>
                    <EmojiNumber number={2} />
                  </InlineBorder>{' '}
                  と{' '}
                  <InlineBorder>
                    <EmojiNumber number={3} />
                  </InlineBorder>{' '}
                  に分かれ、
                </Strong>
              </UlLi>
              <UlLi>
                <Strong>
                  右側にあった <Emoji>✖️</Emoji> と <BlankNumber star /> が、
                  <InlineBorder>
                    <EmojiNumber number={2} />
                  </InlineBorder>{' '}
                  と{' '}
                  <InlineBorder>
                    <EmojiNumber number={3} />
                  </InlineBorder>{' '}
                  それぞれにコピーされました。
                </Strong>
              </UlLi>
            </Ul>
          </>
        )
      }
    ]}
  />
)
