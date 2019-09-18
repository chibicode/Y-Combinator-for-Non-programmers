import React from 'react'
import { P, Hr } from 'src/components/ContentTags'
import EpisodeCardList from 'src/components/EpisodeCardList'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import H from 'src/components/H'
import * as R from 'src/components/Runners'

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
      }
    ]}
  />
)

export default DemoCardList
