import React from 'react'
import { P, Hr } from 'src/components/ContentTags'
import EpisodeCardList from 'src/components/EpisodeCardList'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import EmojiSeparator from 'src/components/EmojiSeparator'
import Emoji from 'src/components/Emoji'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiNumber from 'src/components/EmojiNumber'
import H from 'src/components/H'
import * as R from 'src/components/Runners'
import { BasicRules, Unmatched } from 'src/contents/4.jp'
import { ThreeRowRules, Beginner5Rules } from 'src/contents/5.jp'

const DemoCardList = () => (
  <EpisodeCardList
    demo
    cards={[
      {
        type: 'meta',
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
        type: 'sideNote',
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
        type: 'sideNote',
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
        title: <>3段以上の弁当箱の法則</>,
        content: (
          <>
            <ThreeRowRules />
            <Hr />
            <Beginner5Rules />
          </>
        )
      },
      {
        type: 'sideNote',
        title: <>パート3: 弁当箱を計算箱に変換</>,
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="singleArrow" />,
                <CustomEmoji type="mathBox" />
              ]}
            />
          </>
        )
      },
      {
        title: <>弁当箱を計算箱に変換</>,
        content: (
          <>
            <R.Jjjh />
            <R.Mifg />
            <R.Epoi />
            <R.Vlob />
          </>
        )
      },
      {
        title: <>計算箱に変換する法則</>,
        type: 'summary',
        content: (
          <>
            <R.Eozk>
              <H args={{ name: 'convertiblePatternCaption' }} />
            </R.Eozk>
            <R.Hehx>
              <H args={{ name: 'whatTheNumberIsCaption' }} />
            </R.Hehx>
            <Hr />
            <R.Wopl>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'e', number: 2 }}
              />
            </R.Wopl>
            <ExpressionRunnerSeparator />
            <R.Pmdm />
            <Hr />
            <R.Duuk>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'i', number: 4 }}
              />
            </R.Duuk>
            <ExpressionRunnerSeparator />
            <R.Kizi />
            <Hr />
            <R.Dwzy>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'a', number: 0 }}
              />
            </R.Dwzy>
            <ExpressionRunnerSeparator />
            <R.Jwah />
          </>
        )
      },
      {
        title: <>パート4: 1を足す</>,
        type: 'sideNote',
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="blankNumber" />,
                <Emoji>➕</Emoji>,
                <EmojiNumber number={1} />
              ]}
            />
          </>
        )
      },
      {
        title: (
          <>
            <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
            <EmojiNumber number={1} /> を計算
          </>
        ),
        content: (
          <>
            <R.Rbup>
              <H
                args={{
                  name: 'canBeConvertedCaption',
                  letter: 'd',
                  number: 1
                }}
              />
            </R.Rbup>
            <Hr />
            <R.Rjzw></R.Rjzw>
            <Hr />
            <R.Rico>
              <H
                args={{ name: 'canBeConvertedCaption', number: 2, letter: 'b' }}
              />
            </R.Rico>
          </>
        )
      },
      {
        title: (
          <>
            <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
            <EmojiNumber number={1} /> を計算
          </>
        ),
        content: (
          <>
            <R.Spga>
              <H
                args={{
                  name: 'canBeConvertedCaption',
                  letter: 'f',
                  number: 2
                }}
              />
            </R.Spga>
            <Hr />
            <R.Nlbn />
            <Hr />
            <R.Nngz>
              <H
                args={{ name: 'canBeConvertedCaption', number: 3, letter: 'b' }}
              />
            </R.Nngz>
          </>
        )
      },
      {
        title: <>計算箱は弁当箱で再現できる</>,
        content: (
          <>
            <R.Lizi></R.Lizi>
            <ExpressionRunnerSeparator />
            <R.Plde></R.Plde>
            <Hr />
            <R.Gnwm></R.Gnwm>
            <ExpressionRunnerSeparator />
            <R.Awwn></R.Awwn>
          </>
        )
      }
    ]}
  />
)

export default DemoCardList
