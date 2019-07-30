import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import { P, Strong } from 'src/components/ContentTags'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import Emoji from 'src/components/Emoji'
import H from 'src/components/H'
import * as R from 'src/components/Runners'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>ふたつめの機能</>,
        content: (
          <>
            <P>
              前回は、計算箱の「
              <CustomEmoji type="plusMinus" />{' '}
              <Strong>プラスマイナスの機能</Strong>
              」について紹介しました。復習になりますが、これは数字に1を足したり、引いたりすることができる機能です。
            </P>
            <R.Orhj>
              <CustomEmoji type="plusMinus" /> プラスマイナスの機能
            </R.Orhj>
            <ExpressionRunnerSeparator />
            <R.Aimm />
            <P>
              前回も書きましたが、計算箱にはこの 「
              <CustomEmoji type="plusMinus" />{' '}
              <Strong>プラスマイナスの機能</Strong>
              」以外にもさらに<Strong>ふたつ</Strong>
              の機能があります。今回はふたつめの機能、「
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
          </>
        )
      }
    ]}
  />
)
