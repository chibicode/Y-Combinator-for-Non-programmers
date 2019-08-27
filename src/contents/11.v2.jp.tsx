import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Hr } from 'src/components/ContentTags'
// import H from 'src/components/H'
// import BubbleQuotes from 'src/components/BubbleQuotes'
// import EmojiNumber from 'src/components/EmojiNumber'
// import BottomRightBadge from 'src/components/BottomRightBadge'
import EmojiSeparator from 'src/components/EmojiSeparator'
import CustomEmoji from 'src/components/CustomEmoji'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
// import EmojiWithText from 'src/components/EmojiWithText'
import Emoji from 'src/components/Emoji'
// import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import TwoColGrid from 'src/components/TwoColGrid'
import * as R from 'src/components/Runners'
// import NextLessonButton from 'src/components/NextLessonButton'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>上級編へようこそ！</>,
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusOne" />,
                <Emoji>🤗</Emoji>,
                <CustomEmoji type="minusOne" />
              ]}
            />
            <P>
              中級編では、村人たちは計算箱の「<Strong>1を足す機能</Strong>{' '}
              <CustomEmoji type="plusOne" />
              」と「<Strong>1を引く機能</Strong> <CustomEmoji type="minusOne" />
              」を返してもらいました。どちらも、弁当箱で再現することができたのです。
            </P>
            <R.Rviy>
              「<Strong>1を足す機能</Strong> <CustomEmoji type="plusOne" />」
            </R.Rviy>
            <ExpressionRunnerSeparator />
            <R.Eweo>弁当箱で再現</R.Eweo>
            <Hr />
            <R.Ditw>
              <Strong>1を引く機能</Strong> <CustomEmoji type="minusOne" />
            </R.Ditw>
            <ExpressionRunnerSeparator />
            <R.Bgko>弁当箱で再現</R.Bgko>
            <Hr />
            <P>
              一方、「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
              」は、まだ返してもらっていません。これを弁当箱で再現できないと返してもらえないのです。
            </P>
            <TwoColGrid
              left={
                <>
                  <R.Bwnp>
                    <CustomEmoji type="plusOne" /> を{' '}
                    <CustomEmoji type="blankNumber" /> 回<br />
                    繰り返す
                  </R.Bwnp>
                </>
              }
              right={
                <>
                  <R.Ewfr>
                    <CustomEmoji type="minusOne" /> を{' '}
                    <CustomEmoji type="blankNumber" /> 回<br />
                    繰り返す
                  </R.Ewfr>
                </>
              }
            />
          </>
        )
      },
      {
        title: (
          <>
            「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
            」の復習
          </>
        ),
        content: (
          <>
            <P>
              「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
              」について忘れてしまった方も多いと思うので、ここで復習をしましょう。
            </P>
          </>
        )
      }
    ]}
  />
)
