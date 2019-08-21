import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Em } from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import EmojiSeparator from 'src/components/EmojiSeparator'
import Emoji from 'src/components/Emoji'
import * as R from 'src/components/Runners'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>サヤちゃんの疑問</>,
        content: (
          <>
            <P>
              サヤちゃんは、
              <H args={{ name: 'plusOneEffect' }} />
              がある弁当箱について、あることに気が付きました。
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'girl',
                  children: (
                    <>
                      <P>ねえねえ、見てほしいものがあるんだけど。</P>
                      <P>
                        まず、
                        <Em>
                          これは <EmojiNumber number={1} /> に変換できる弁当箱
                        </Em>
                        だよね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Cmla>
              <H
                args={{
                  name: 'canBeConvertedCaption',
                  letter: 'd',
                  number: 1
                }}
              />
            </R.Cmla>
            <BubbleQuotes
              quotes={[
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>うん、そうだけど、それがどうしたの？</P>
                    </>
                  )
                },
                {
                  type: 'girl',
                  children: (
                    <>
                      <P>
                        これを、前回わたしが考えた
                        <H args={{ name: 'plusOneEffect' }} />
                        と合体させて、
                        <H args={{ name: 'runAndConertToMathbox' }} />{' '}
                        すると、どうなると思う？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nhqo>
              <H args={{ name: 'plusOneEffect' }} />
              と合体させて、
              <br />
              <H args={{ name: 'runAndConertToMathbox' }} />
              <br />
              するとどうなる？
            </R.Nhqo>
            <BubbleQuotes
              quotes={[
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>
                        そりゃあ、
                        <Em>
                          <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
                          <EmojiNumber number={1} /> を計算できるんだから、
                          <EmojiNumber number={2} /> になるに決まっている
                        </Em>
                        だろう？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={1} />,
                <Emoji>➕</Emoji>,
                <EmojiNumber number={1} />
              ]}
              description={
                <>
                  結果は <EmojiNumber number={2} /> になるはず…？
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'girl',
                  children: (
                    <>
                      <P>
                        じゃあ、
                        <H args={{ name: 'play' }} />
                        してみてよ！
                      </P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>実行してみると…</>,
        content: (
          <>
            <P>
              それでは、
              <H args={{ name: 'pressFastForward', skippable: true }} />
            </P>
            <R.Akik />
          </>
        )
      }
    ]}
  />
)
