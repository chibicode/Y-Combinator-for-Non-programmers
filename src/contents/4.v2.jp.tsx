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
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>繰り返しの計算箱</>,
        content: (
          <>
            <P>
              今回は、今までよりも高度な計算箱を紹介します。それが、この「
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
              」はまず、次のように変化します。
            </P>
            <R.Hawd />
            <P>
              つまり、
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
            </P>
            <EmojiSeparator
              nodes={[
                <InlineBorder small>
                  <EmojiNumber number={2} /> <EmojiNumber number={3} />
                </InlineBorder>,
                <Emoji size="xs">➡️</Emoji>,
                <InlineBorder small>
                  <EmojiNumber number={2} />
                </InlineBorder>,
                <InlineBorder small>
                  <EmojiNumber number={3} />
                </InlineBorder>
              ]}
            />
            <P>
              さらに、
              <Strong>
                <Emoji>✖️</Emoji> と <BlankNumber star /> が、
                <InlineBorder>
                  <EmojiNumber number={2} />
                </InlineBorder>{' '}
                と{' '}
                <InlineBorder>
                  <EmojiNumber number={3} />
                </InlineBorder>{' '}
                それぞれにコピーされました。
              </Strong>
            </P>
            <EmojiSeparator
              noBottomMargin
              nodes={[
                <InlineBorder small>
                  <EmojiNumber number={2} />
                </InlineBorder>,
                <Emoji size="xs">➡️</Emoji>,
                <Emoji>✖️</Emoji>,
                <BlankNumber star />
              ]}
            />
            <EmojiSeparator
              noTopMargin
              nodes={[
                <InlineBorder small>
                  <EmojiNumber number={3} />
                </InlineBorder>,
                <Emoji size="xs">➡️</Emoji>,
                <Emoji>✖️</Emoji>,
                <BlankNumber star />
              ]}
            />
          </>
        )
      },
      {
        title: <>繰り返しの計算箱の仕組み、その2</>,
        content: (
          <>
            <P>
              続いて、今度は
              <Strong>
                星印 <BlankNumber star />
              </Strong>{' '}
              に注目してみてください。
            </P>
            <R.Hawd />
            <P>計算箱は、次に以下のように変化します。</P>
            <R.Prfy />
            <P>
              つまり、
              <Strong>
                星印だった部分 <BlankNumber star /> が、それぞれ{' '}
                <EmojiNumber number={2} /> と <EmojiNumber number={3} />{' '}
                に入れ替わっています。
              </Strong>
            </P>
            <EmojiSeparator
              noBottomMargin
              nodes={[
                <BlankNumber star />,
                <Emoji size="xs">➡️</Emoji>,
                <EmojiNumber number={2} />
              ]}
            />
            <EmojiSeparator
              noTopMargin
              nodes={[
                <BlankNumber star />,
                <Emoji size="xs">➡️</Emoji>,
                <EmojiNumber number={3} />
              ]}
            />
          </>
        )
      },
      {
        title: <>結果はこうなる</>,
        content: (
          <>
            <P>
              というわけで、最終的に <EmojiNumber number={1} />{' '}
              <Emoji>✖️</Emoji> <EmojiNumber number={2} /> <Emoji>✖️</Emoji>{' '}
              <EmojiNumber number={3} /> が計算され、
            </P>
            <R.Prfy />
            <P>
              結果は <EmojiNumber number={6} /> になります。
            </P>
            <R.Nxsa />
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
            <ExpressionRunnerSeparator />
            <ExpressionRunnerSeparator />
            <ExpressionRunnerSeparator />
          </>
        )
      }
    ]}
  />
)
