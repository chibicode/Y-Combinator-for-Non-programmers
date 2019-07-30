import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import { P, Strong } from 'src/components/ContentTags'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import Emoji from 'src/components/Emoji'
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
            <R.Orhj />
            <ExpressionRunnerSeparator />
            <R.Aimm />
            <P>
              前回も書きましたが、計算箱にはこの 「
              <CustomEmoji type="plusMinus" />{' '}
              <Strong>プラスマイナスの機能</Strong>
              」以外にもさらにふたつの機能があります。今回はふたつめの機能、「
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
        title: <>プラスマイナスの機能の問題点</>,
        content: <></>
      }
    ]}
  />
)
