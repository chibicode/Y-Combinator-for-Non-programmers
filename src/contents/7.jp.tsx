import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Highlight,
  HighlightBold,
  Ul,
  UlLi,
  Bold,
  Hr
} from 'src/components/ContentTags'
import CustomEmoji from 'src/components/CustomEmoji'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import Emoji from 'src/components/Emoji'
import EmojiForLetter from 'src/components/EmojiForLetter'
import H from 'src/components/H'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import EmojiSeparator from 'src/components/EmojiSeparator'
import * as R from 'src/components/Runners'
import EmojiWithText from 'src/components/EmojiWithText'
import InlinePrioritiesLabel from 'src/components/InlinePrioritiesLabel'
import NextLessonButton from 'src/components/NextLessonButton'
import { Beginner5Rules } from 'src/contents/5.jp'
import CardContent from 'src/components/CardContent'

export const Problem = () => (
  <>
    <R.Stda>
      <HighlightBold>
        問題: それぞれの <CustomEmoji type="questionFoodGrey" /> に、
        <br />
        どんな料理を入れると、
      </HighlightBold>
    </R.Stda>
    <ExpressionRunnerSeparator />
    <R.Jzwg>
      <HighlightBold>
        <H args={{ name: 'run' }} /> した後に
        <br />
        <EmojiNumber number={1} /> に変換できる弁当箱になる？
      </HighlightBold>
    </R.Jzwg>
  </>
)

export const StepOne = () => (
  <>
    <BubbleQuotes
      quotes={[
        {
          type: 'dog',
          children: (
            <>
              <P>
                それでは、
                <H args={{ name: 'run' }} /> しましょう！
              </P>
              <P>
                まず、
                <HighlightBold>
                  <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                  のペアが左右ふたつ以上あるので、一番左の{' '}
                  <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                  のペアからはじめます。
                </HighlightBold>
              </P>
            </>
          )
        }
      ]}
    />
    <P>
      <H
        args={{
          name: 'pressRun',
          mentionRightArrow: true
        }}
      />
    </P>
  </>
)

export const StepTwo = () => (
  <>
    <BubbleQuotes
      quotes={[
        {
          type: 'dog',
          children: (
            <>
              <P>
                続いて、また{' '}
                <Highlight>
                  <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                  のペアからはじめたいのですが、
                  <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                  のペアの一番下の段にひとつの料理(
                  <EmojiWithText letter="b" />
                  )しかないので不可能です。
                </Highlight>
              </P>
              <P>
                というわけで、
                <HighlightBold>
                  次は <InlinePrioritiesLabel>2</InlinePrioritiesLabel>{' '}
                  のペアから
                </HighlightBold>
                はじめます。
              </P>
            </>
          )
        }
      ]}
    />
    <P>
      <H
        args={{
          name: 'pressRun'
        }}
      />
    </P>
  </>
)

export const StepThree = () => (
  <>
    <BubbleQuotes
      quotes={[
        {
          type: 'dog',
          children: (
            <>
              <P>
                次も前回と同じく、
                <HighlightBold>
                  <InlinePrioritiesLabel>2</InlinePrioritiesLabel>{' '}
                  のペアからはじめます。
                </HighlightBold>
              </P>
            </>
          )
        }
      ]}
    />
    <P>
      <H
        args={{
          name: 'pressRun'
        }}
      />
    </P>
  </>
)

export default () => (
  <EpisodeCardList
    cards={[
      {
        type: 'summary',
        title: <>難易度が急激に上がります</>,
        content: (
          <>
            <P>
              <HighlightBold>
                このページから難易度が急激に上がります。
              </HighlightBold>
              弁当箱も、以前に比べて複雑になります。
            </P>
            <EmojiSeparator
              emojis={['⚠️', '🍱', '⚠️']}
              description={<>難易度が上がり、弁当箱も複雑に</>}
            />
            <P>
              ただ、
              <Highlight>
                内容を完全に理解する必要はありません。少しくらい分からなくても、雰囲気で読み進めていただいて大丈夫です。
              </Highlight>
              また、先に進んでから読み返すことで理解できる場合もあるので、分からなくてもとりあえず先に進んでみてください。
            </P>
            <EmojiSeparator
              emojis={['✨', '🤗', '✨']}
              description={<>完全に理解する必要はありません！</>}
            />
          </>
        )
      },
      {
        title: <>問題の説明</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        では約束通り、
                        <Highlight>
                          これから出す問題に答えることができたら、計算箱を返してやろう！
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <Emoji>😈</Emoji>,
                <CustomEmoji type="mathBox" />
              ]}
              description={
                <>
                  これから出す難しい問題に
                  <br />
                  答えられたら計算箱を返してやろう！
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <HighlightBold>この問題は非常に難しい</HighlightBold>
                        から覚悟するんだな。ミニオン、問題を説明するんだ！
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        わかりました。まず、
                        <H args={{ name: 'lookAtThisBentoBox' }} />。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Dvfg></R.Dvfg>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        前回の復習ですが、この弁当箱は、
                        <HighlightBold>
                          ぼくが計算箱に変換すると <EmojiNumber number={0} />{' '}
                          になります。
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Hkbs>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'd', number: 0 }}
              />
            </R.Hkbs>
            <ExpressionRunnerSeparator />
            <R.Jwah />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        次に、
                        <HighlightBold>
                          上の弁当箱と、こちらの弁当箱を合体させます。
                        </HighlightBold>
                      </P>
                      <P>
                        それぞれの <CustomEmoji type="questionFoodGrey" /> には
                        <Highlight>何らかの料理が入る</Highlight>
                        のですが、それについてはこれから説明します。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              こちらの弁当箱と合体させる。
              <br />
              それぞれの <CustomEmoji type="questionFoodGrey" /> には
              <br />
              何らかの料理が入る
            </R.Envj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>合体させると、次のようになります。</P>
                    </>
                  )
                }
              ]}
            />
            <R.Stda>合体させるとこうなる</R.Stda>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>それでは、ここで質問です！</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        type: 'challengeProblem',
        title: (
          <>
            <EmojiNumber number={0} /> を <EmojiNumber number={1} /> に
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>実は、先ほどの弁当箱は、</P>
                      <Ul>
                        <UlLi>
                          <HighlightBold>
                            それぞれの <CustomEmoji type="questionFoodGrey" />{' '}
                            に、ある法則に基づいて料理を入れて
                            <H args={{ name: 'run' }} /> すると、
                          </HighlightBold>
                        </UlLi>
                        <UlLi>
                          <EmojiNumber number={1} />{' '}
                          に変換できる弁当箱になります。
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Stda>
              それぞれの <CustomEmoji type="questionFoodGrey" /> に、
              <br />
              ある法則に基づいて料理を入れ、
            </R.Stda>
            <ExpressionRunnerSeparator />
            <R.Jzwg>
              <H args={{ name: 'run' }} /> すると、
              <br />
              <EmojiNumber number={1} /> に変換できる弁当箱になる
            </R.Jzwg>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        もともとの弁当箱が <EmojiNumber number={0} />{' '}
                        に変換できる弁当箱だったので、
                      </P>
                      <R.Hkbs>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'd',
                            number: 0
                          }}
                        />
                      </R.Hkbs>
                      <P>実行することで、</P>
                      <Ul>
                        <UlLi>
                          <HighlightBold>
                            <EmojiNumber number={0} /> に変換できる弁当箱が、
                          </HighlightBold>
                        </UlLi>
                        <UlLi>
                          <HighlightBold>
                            <EmojiNumber number={1} /> に変換できる弁当箱になる
                          </HighlightBold>
                        </UlLi>
                      </Ul>
                      <P>というわけですね。</P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={0} />,
                <CustomEmoji type="singleArrow" />,
                <EmojiNumber number={1} />
              ]}
              description={
                <>
                  <EmojiNumber number={0} /> に変換できる弁当箱が、
                  <br />
                  <EmojiNumber number={1} /> に変換できる弁当箱になる
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>それでは、ここで問題です！</P>
                      <P>
                        <HighlightBold>
                          それぞれの <CustomEmoji type="questionFoodGrey" />{' '}
                          にどんな料理を入れると、実行後に{' '}
                          <EmojiNumber number={1} />{' '}
                          に変換できる弁当箱になるでしょう？
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <Problem />
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        この問題こそが、以前から話していた「
                        <Bold>難しい問題</Bold>」だ。
                        <Highlight>
                          これを解けたら、約束通り計算箱を返してやろう！
                        </Highlight>
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
        title: <>試しに適当な料理を入れてみる</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>
                        うーん…
                        <Highlight>
                          問題を完全に理解できた自信がないし、どうやって解けばいいかさっぱり分からない！
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>大丈夫、安心してください！</P>
                      <P>
                        <HighlightBold>
                          試しに、
                          <CustomEmoji type="questionFoodGrey" />{' '}
                          に適当な料理を入れてみると、問題を理解できると思います。
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Stda>
              <CustomEmoji type="questionFoodGrey" />{' '}
              に適当な料理を入れてみて下さい！<Emoji>🐶</Emoji>
            </R.Stda>
            <BubbleQuotes
              quotes={[
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        わかった。じゃあとりあえず、
                        <CustomEmoji type="questionFoodGrey" />{' '}
                        に適当な料理を入れてみよう。
                      </P>
                      <P>
                        <Highlight>
                          <EmojiWithText letter="a" />、
                          <EmojiWithText letter="b" />、
                          <EmojiWithText letter="c" />
                          を適当な組み合わせで{' '}
                          <CustomEmoji type="questionFoodGrey" />{' '}
                          に入れてみたよ。
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Fzpz>
              <EmojiForLetter letter="a" /> <EmojiForLetter letter="b" />{' '}
              <EmojiForLetter letter="c" /> を適当に{' '}
              <CustomEmoji type="questionFoodGrey" /> に入れてみた
            </R.Fzpz>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        では、問題を復習しましょう。上の弁当箱を実行したときに、結果が…
                      </P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            <EmojiNumber number={1} />{' '}
                            に変換できる弁当箱になれば
                            <Bold>成功</Bold> <Emoji>🎉</Emoji>
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            それ以外なら<Bold>失敗</Bold> <Emoji>😭</Emoji>
                          </Highlight>
                        </UlLi>
                      </Ul>
                      <P>というわけです。</P>
                    </>
                  )
                }
              ]}
            />
            <R.Nuco>こちらの弁当箱を実行して…</R.Nuco>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              <EmojiNumber number={1} size="mdlg" /> に変換できる
              <br />
              弁当箱になれば <HighlightBold>成功</HighlightBold>{' '}
              <Emoji>🎉</Emoji>
              <br />
              それ以外なら<HighlightBold>失敗</HighlightBold> <Emoji>😭</Emoji>
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        では、上の弁当箱を実行したらどうなるか見てみましょう！
                      </P>
                    </>
                  )
                }
              ]}
            />
          </>
        ),
        footer: {
          content: (
            <>
              <CardContent
                children={
                  <>
                    <Hr />
                    <Beginner5Rules />
                  </>
                }
                preview={{
                  text: <>初級編の内容を復習する</>,
                  content: (
                    <>
                      <P>
                        <Bold>復習が必要ですか？:</Bold> 今回の弁当箱では、
                        <Highlight>初級その5で学んだ法則が登場</Highlight>
                        します。
                      </P>
                      <P>
                        復習したい場合は、↓の「初級編の内容を復習する」を押してください。
                      </P>
                    </>
                  )
                }}
              />
            </>
          )
        }
      },
      {
        title: <>実行してみよう</>,
        content: (
          <>
            <StepOne />
            <R.Dhiu>
              <H args={{ name: 'startWithLeftMostOneCaption' }} />
            </R.Dhiu>
            <StepTwo />
            <R.Akjy>
              <H args={{ name: 'startWithTwoCaption' }} />
            </R.Akjy>
            <StepThree />
            <R.Hnyn>
              <H args={{ name: 'startWithTwoCaption' }} />
            </R.Hnyn>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>つまり、最終的に以下のようになりました！</P>
                    </>
                  )
                }
              ]}
            />
            <R.Bwff>実行結果</R.Bwff>
          </>
        )
      },
      {
        title: <>計算箱に変換できない</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        実行を終えたので、
                        <H args={{ name: 'convertToMathbox' }} />{' '}
                        したいところですが…
                      </P>
                      <P>
                        残念ながら、
                        <HighlightBold>
                          この弁当箱はぼくが計算箱に変換することができません。
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Xwzc>
              <Emoji>❌</Emoji> 計算箱に変換できない <Emoji>❌</Emoji>
            </R.Xwzc>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        理由は、
                        <Highlight>
                          以下の法則に沿っていないからです。
                        </Highlight>
                      </P>
                      <R.Eozk>
                        <H args={{ name: 'convertiblePatternCaption' }} />
                      </R.Eozk>
                      <P>
                        <Highlight>
                          右上には <Emoji>🅱️</Emoji>{' '}
                          の料理がひとつないといけませんが、ここでは{' '}
                          <Emoji>🅰️</Emoji> になっている
                        </Highlight>
                        ので、計算箱に変換できないのです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Fhrd>
              右上が <Emoji>🅱️</Emoji> の<EmojiWithText letter="c" /> ではなく、
              <br />
              <Emoji>🅰️</Emoji> の<EmojiWithText letter="b" /> なので
              <br />
              計算箱に変換できない
            </R.Fhrd>
            <BubbleQuotes
              quotes={[
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        ダメか…
                        <Highlight>
                          もし仮に右上が
                          <EmojiWithText letter="b" />
                          ではなくて
                          <EmojiWithText letter="c" />
                          だったら、
                          <EmojiNumber number={1} /> に変換できていたのになあ。
                        </Highlight>
                        あとちょっとだったのに！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Bgxi>
              もし仮に右上が
              <EmojiWithText letter="c" />
              <br />
              だったら、
              <EmojiNumber number={1} /> に変換できていた
            </R.Bgxi>
            <ExpressionRunnerSeparator />
            <R.Rnug />
          </>
        )
      },
      {
        title: (
          <>
            失敗 <Emoji>😭</Emoji>
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        つまり、実行しても{' '}
                        <EmojiNumber number={1} size="mdlg" />{' '}
                        に変換できる弁当箱にならなかったので…
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nuco>実行しても…</R.Nuco>
            <ExpressionRunnerSeparator />
            <R.Xwzc>
              <HighlightBold>
                <EmojiNumber number={1} size="mdlg" />{' '}
                に変換できる弁当箱にならなかった
              </HighlightBold>
            </R.Xwzc>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        つまり、
                        <HighlightBold>不正解でした！</HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              それぞれの <CustomEmoji type="questionFoodGrey" /> に…
            </R.Envj>
            <ExpressionRunnerSeparator />
            <R.Olyw>
              先ほどのように料理を
              <br />
              当てはめるのは<HighlightBold>不正解</HighlightBold>{' '}
              <Emoji>😭</Emoji>
            </R.Olyw>
            <BubbleQuotes
              quotes={[
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>
                        残念…やっぱり、適当に{' '}
                        <CustomEmoji type="questionFoodGrey" />{' '}
                        に料理を埋めても正解にはならないかあ…
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
        type: 'challengeProblem',
        title: <>問題をもう一度</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>それでは、もう一度聞きますね！</P>
                      <P>
                        <HighlightBold>
                          それぞれの <CustomEmoji type="questionFoodGrey" />{' '}
                          にどんな料理を入れると、実行後に{' '}
                          <EmojiNumber number={1} />{' '}
                          に変換できる弁当箱になるでしょう？
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <Problem />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        繰り返しますが、先ほど適当に料理を入れた以下の弁当箱は、不正解でした！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Olyw>こちらは不正解だった</R.Olyw>
            <BubbleQuotes
              quotes={[
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>
                        うーん…問題の意味は分かったけど、答え方が分からない！
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
        title: <>答えは次のページに</>,
        content: (
          <>
            <P>
              せっかく計算箱を返してもらえるチャンスなのに、問題が難しくて村人は苦戦しているようですね。
            </P>
            <EmojiSeparator
              emojis={['❓', '😭', '❓']}
              description={<>難しすぎて見当もつかない！</>}
            />
            <P>
              しかし、
              <HighlightBold>次のページで答えが判明します。</HighlightBold>
              ぜひ先に進んでみてください！
            </P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
