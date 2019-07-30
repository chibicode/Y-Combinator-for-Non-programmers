/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Em } from 'src/components/ContentTags'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiNumber from 'src/components/EmojiNumber'
import Emoji from 'src/components/Emoji'
import H from 'src/components/H'
import * as R from 'src/components/Runners'
import YesNoButtons from 'src/components/YesNoButtons'

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
            <R.Dfjp>
              <Emoji>😉</Emoji>「これで <EmojiNumber number={10} />{' '}
              <Emoji>➖</Emoji> <EmojiNumber number={8} /> を計算しよう！」
            </R.Dfjp>
            <P>
              ここで質問です。上の計算箱は、
              <Strong>
                <EmojiNumber number={10} /> <Emoji>➖</Emoji>{' '}
                <EmojiNumber number={8} /> を正しく計算できるでしょうか？
              </Strong>
            </P>
            <YesNoButtons answer={'no'} />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'theAnswerIs', isYes: false }} />
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'theAnswerIs', isYes: false, sentence: true }} />
              <H args={{ name: 'pressPlay' }} />
            </P>
            <R.Lxrk />
            <P>
              答えは <EmojiNumber number={3} />{' '}
              になりました。つまり、もともと意図していた
              <Strong>
                <EmojiNumber number={10} /> <Emoji>➖</Emoji>{' '}
                <EmojiNumber number={8} /> ではなく、
                <EmojiNumber number={10} /> <Emoji>➖</Emoji>{' '}
                <EmojiNumber number={7} /> を計算してしまった
              </Strong>
              のです。
            </P>
            <EmojiSeparator emojis={['❌', '😭', '❌']} />
          </>
        )
      },
      {
        title: (
          <>
            <CustomEmoji type="plusOne" /> や <CustomEmoji type="minusOne" />{' '}
            の数を間違えないようにするには
          </>
        ),
        content: (
          <>
            <P>
              <EmojiNumber number={10} /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={8} /> ではなく、
              <EmojiNumber number={10} /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={7} /> を計算してしまった理由は、
              <Strong>
                <CustomEmoji type="minusOne" /> の数が間違っていたから
              </Strong>
              です。
            </P>
            <P>
              <EmojiNumber number={10} /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={8} /> を計算したければ、
              <CustomEmoji type="minusOne" /> を8個配置する必要がありますが、
              <Em>先ほどの計算箱には7個しかありませんでした</Em>。
            </P>
            <EmojiSeparator
              size="mdsm"
              nodes={[
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji
                  type="minusOne"
                  cssOverrides={css`
                    opacity: 0.4;
                  `}
                />
              ]}
              description={
                <>
                  <CustomEmoji type="minusOne" />{' '}
                  が8個必要だったが、7個しかなかった
                </>
              }
            />
            <P>
              このように、
              <CustomEmoji type="plusOne" /> や <CustomEmoji type="minusOne" />{' '}
              の数をひとつでも間違えると、正しい計算ができません。
              <Em>ではどうすれば、こういったミスを防げるのでしょうか？</Em>
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusOne" />,
                <Emoji>🤔</Emoji>,
                <CustomEmoji type="minusOne" />
              ]}
            />
          </>
        )
      },
      {
        title: <>繰り返しの機能</>,
        content: (
          <>
            <P>
              計算箱には、こういったミスを防ぐために役立つ「<Emoji>🔁</Emoji>{' '}
              <Strong>繰り返しの機能</Strong>」が備わっています。
            </P>
            <EmojiSeparator
              nodes={[<Emoji>✨</Emoji>, <Emoji>🔁</Emoji>, <Emoji>✨</Emoji>]}
              description={<>繰り返しの機能</>}
            />
            <P>
              どんな機能か紹介しましょう。
              <H args={{ name: 'lookAtThisMathBox' }} />:
            </P>
          </>
        )
      }
    ]}
  />
)
