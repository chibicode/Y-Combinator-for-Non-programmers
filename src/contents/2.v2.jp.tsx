import React from 'react'
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
              前回は、計算箱の「
              <CustomEmoji type="plusMinus" />{' '}
              <Strong>プラスマイナスの機能</Strong>
              」について紹介しました。
            </P>
            <P>
              今回はもうひとつの計算箱の機能である「
              <Emoji>🔁</Emoji> <Strong>繰り返しの機能</Strong>
              」について説明します。
            </P>
            <EmojiSeparator
              nodes={[<Emoji>✨</Emoji>, <Emoji>🔁</Emoji>, <Emoji>✨</Emoji>]}
              description={<>繰り返しの機能</>}
            />
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
              「<Emoji>🔁</Emoji> <Strong>繰り返しの機能</Strong>
              」について説明する前に、
              <H args={{ name: 'yesNoQuiz' }} />
              を解いてみましょう。
              <H args={{ name: 'lookAtThisMathBox' }} />:
            </P>
            <R.Dfjp />
            <P>
              <H args={{ name: 'whatHappensAtTheEndMathBoxQuestion' }} />
            </P>
            <R.Zdat />
            <YesNoButtons answer="yes" />
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
              <H args={{ name: 'theAnswerIs', isYes: true, sentence: true }} />
              <H args={{ name: 'pressPlay' }} />
            </P>
            <R.Lxrk />
            <P>
              つまり、結果は <EmojiNumber number={3} /> になります。
              <Strong>
                <CustomEmoji type="minusOne" /> が7個あるので、
                <EmojiNumber number={10} /> <Emoji>➖</Emoji>{' '}
                <EmojiNumber number={7} /> の計算が行われるわけです。
              </Strong>
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={10} />,
                <Emoji>➖</Emoji>,
                <EmojiNumber number={7} />
              ]}
            />
          </>
        )
      },
      {
        title: (
          <>
            <CustomEmoji type="minusOne" /> の数を間違えたらダメ
          </>
        ),
        content: (
          <>
            <P>
              先ほどの例だと、計算箱の中に
              <Strong>
                <CustomEmoji type="minusOne" />{' '}
                が7個あるのを正しく数えなければいけませんでした。
              </Strong>
              数え間違いがあったら、
              <H args={{ name: 'yesNoQuiz' }} />
              に間違っていたでしょう。
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />
              ]}
              description={
                <>
                  <CustomEmoji type="minusOne" /> の数を間違えたらダメ！
                </>
              }
            />
            <P>
              <Em>
                計算箱に頼っていたラムダ村の人々にとって、
                <CustomEmoji type="plusOne" /> や{' '}
                <CustomEmoji type="minusOne" />{' '}
                の数え間違いは、避けないといけない問題でした。
              </Em>
            </P>
            <P>
              たとえば、
              <EmojiNumber number={10} /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={7} /> を計算しようとして、間違えて{' '}
              <CustomEmoji type="minusOne" /> を「<Strong>8個</Strong>
              」配置してしまったら、
              <EmojiNumber number={10} /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={8} /> を
            </P>
            <P>
              では、
              <Em>
                どうすれば <CustomEmoji type="plusOne" /> や{' '}
                <CustomEmoji type="minusOne" />{' '}
                の数を数え間違えずにすむのでしょうか？
              </Em>{' '}
              <Emoji>🤔</Emoji>
            </P>
          </>
        )
      }
    ]}
  />
)
