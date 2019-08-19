import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong } from 'src/components/ContentTags'
import CustomEmoji from 'src/components/CustomEmoji'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import Emoji from 'src/components/Emoji'
// import EmojiForLetter from 'src/components/EmojiForLetter'
import H from 'src/components/H'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
// import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import EmojiSeparator from 'src/components/EmojiSeparator'
import * as R from 'src/components/Runners'
// import EmojiWithText from 'src/components/EmojiWithText'
// import InlinePrioritiesLabel from 'src/components/InlinePrioritiesLabel'
// import NextLessonButton from 'src/components/NextLessonButton'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>サヤちゃん現る</>,
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <Emoji>😭</Emoji>,
                <CustomEmoji type="plusOneOrange" />,
                <Emoji>😭</Emoji>
              ]}
            />
            <P>ラムダ村の村人たちは、前回の問題に四苦八苦していました。</P>
            <R.Envj>
              <Strong>
                どのような法則に基づいて <CustomEmoji type="questionFoodGrey" />{' '}
                に料理を入れると…
              </Strong>
            </R.Envj>
            <R.Jguj>
              <Strong>
                <H args={{ name: 'plusOneEffect' }} />
                がある弁当箱になる？
              </Strong>
            </R.Jguj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>だめだ…全然分からない！</P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        これを解かないと計算箱を返してもらえないのに…どうしよう…
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              その時です。ラムダ村に暮らす少女の<Strong>サヤちゃん</Strong>{' '}
              <Emoji size="mdlg">👧🏻</Emoji>{' '}
              が、問題に苦戦している村人たちに話しかけてきました。
            </P>
            <EmojiSeparator
              emojis={['✨', '👧🏻', '✨']}
              description={
                <>
                  ラムダ村に暮らす少女の<Strong>サヤちゃん</Strong>
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'girl',
                  children: (
                    <>
                      <P>ねえねえ、みんな何してるの？</P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>おお、サヤちゃんか。</P>
                      <P>
                        にっくき悪魔 <Emoji>😈</Emoji>{' '}
                        に計算箱を奪われてしまったんだ。奴が出題した問題を解かないと計算箱を返してもらえないんだけど、俺らには難しくて解けないんだよ。
                      </P>
                      <P>その問題は以下の通りさ。</P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              どのような法則に基づいて
              <br />
              <CustomEmoji size="mdlg" type="questionFoodGrey" />{' '}
              に料理を入れると…
            </R.Envj>
            <R.Omwd>
              <CustomEmoji type="blankNumber" size="mdlg" />{' '}
              に変換できる弁当箱と合体させて
              <br />
              <H args={{ name: 'runAndConertToMathbox' }} />
              すると、
              <br />
              結果が <CustomEmoji type="blankNumber" size="mdlg" />{' '}
              <Emoji size="mdlg">➕</Emoji>{' '}
              <EmojiNumber number={1} size="mdlg" /> になる？
            </R.Omwd>
            <ExpressionRunnerSeparator />
            <R.Jxvy></R.Jxvy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'girl',
                  children: (
                    <>
                      <P>ふーん、じゃあサヤも解くのを手伝うよ！</P>
                    </>
                  )
                },
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>
                        手伝ってくれるのはありがたいけど、そう簡単に解ける問題じゃないよ。俺らがどれだけ頑張っても分からなかったんだ。
                      </P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      }
    ]}
  />
)
