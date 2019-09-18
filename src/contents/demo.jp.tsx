import React from 'react'
import { P, Hr } from 'src/components/ContentTags'
import EpisodeCardList from 'src/components/EpisodeCardList'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import EmojiSeparator from 'src/components/EmojiSeparator'
import Emoji from 'src/components/Emoji'
import CustomEmoji from 'src/components/CustomEmoji'
import H from 'src/components/H'
import * as R from 'src/components/Runners'
import { BasicRules, Unmatched } from 'src/contents/4.jp'
import { ThreeRowRules, Beginner5Rules } from 'src/contents/5.jp'

const DemoCardList = () => (
  <EpisodeCardList
    demo
    cards={[
      {
        type: 'summary',
        title: <>これはデモページです</>,
        content: (
          <>
            <P>
              このページはデモ用に作ったページです。わたしがデモを行いながらこのページを使うので、説明は一切書いていません。
            </P>
          </>
        )
      },
      {
        title: <>パート1: 計算箱の説明</>,
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="mathBox" />
              ]}
              description={<>計算箱</>}
            />
          </>
        )
      },
      {
        title: (
          <>
            計算箱の「
            <H args={{ name: 'plusOneFeature' }} />」
          </>
        ),
        content: (
          <>
            <R.Mcug />
            <R.Aovj />
          </>
        )
      },
      {
        title: (
          <>
            計算箱の「
            <H args={{ name: 'minusOneFeature' }} />」
          </>
        ),
        content: (
          <>
            <R.Xmqp />
          </>
        )
      },
      {
        title: (
          <>
            「
            <H args={{ name: 'plusOneFeature' }} />
            」と「
            <H args={{ name: 'minusOneFeature' }} />
            」を複数使う
          </>
        ),
        content: (
          <>
            <R.Eagi></R.Eagi>
            <R.Yjur></R.Yjur>
          </>
        )
      },
      {
        title: (
          <>
            計算箱の「
            <H args={{ name: 'repeatFeature' }} />」
          </>
        ),
        content: (
          <>
            <R.Ednv />
            <R.Pgxb />
            <Hr />
            <R.Xpks />
            <ExpressionRunnerSeparator />
            <R.Dgpx></R.Dgpx>
            <Hr />
            <R.Sucz></R.Sucz>
            <ExpressionRunnerSeparator />
            <R.Xlgb></R.Xlgb>
          </>
        )
      },
      {
        title: <>パート2: 弁当箱の説明</>,
        content: (
          <>
            <EmojiSeparator
              nodes={[<Emoji>🍱</Emoji>, <Emoji>🍱</Emoji>, <Emoji>🍱</Emoji>]}
              description={<>弁当箱</>}
            />
          </>
        )
      },
      {
        title: <>2段の弁当箱</>,
        content: (
          <>
            <R.Wunw />
            <R.Hluq />
            <R.Jbam />
            <R.Zuus />
          </>
        )
      },
      {
        title: <>弁当箱の法則</>,
        type: 'summary',
        content: (
          <>
            <BasicRules includeFuncUnbound />
            <Hr />
            <Unmatched />
          </>
        )
      },
      {
        title: <>3段の弁当箱</>,
        content: (
          <>
            <R.Beiz />
            <R.Hdxc />
            <R.Thkn />
            <R.Cuwg />
          </>
        )
      },
      {
        type: 'summary',
        title: <>3段の弁当箱の法則</>,
        content: (
          <>
            <ThreeRowRules />
            <Hr />
            <Beginner5Rules />
          </>
        )
      }
    ]}
  />
)

export default DemoCardList
