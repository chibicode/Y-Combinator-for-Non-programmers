import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Strong,
  Em
  // Hr,
  // InlineHeader
} from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import EmojiSeparator from 'src/components/EmojiSeparator'
import CustomEmoji from 'src/components/CustomEmoji'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import Emoji from 'src/components/Emoji'
import InlineBorder from 'src/components/InlineBorder'
import * as R from 'src/components/Runners'
// import NextLessonButton from 'src/components/NextLessonButton'
// import YesNoButtons from 'src/components/YesNoButtons'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>条件分岐の再現</>,
        content: (
          <>
            <P>
              村人たちは与えられたヒントをもとに、「
              <Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>
              」を弁当箱で再現しようとしていました。
            </P>
            <R.Rhoa>
              「<Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>」を…
            </R.Rhoa>
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              emojis={['❓', '🍱', '❓']}
              description={
                <>
                  <Strong>弁当箱で再現できる？</Strong>
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        復習すると、上の計算箱は、
                        <Strong>
                          もし <CustomEmoji type="blankNumberGrey" /> に{' '}
                          <EmojiNumber number={0} /> を入れたら下の{' '}
                          <CustomEmoji type="blankNumberPurple" /> が残り…
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Dqwh>
              <InlineBorder type="condition" /> に <EmojiNumber number={0} />{' '}
              を入れた場合…
            </R.Dqwh>
            <ExpressionRunnerSeparator />
            <R.Vwvb>
              <InlineBorder type="trueCase" /> に入っている{' '}
              <CustomEmoji type="blankNumberPurple" /> が残る
            </R.Vwvb>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        そして、
                        <Strong>
                          もし <CustomEmoji type="blankNumberGrey" /> に{' '}
                          <EmojiNumber number={0} />{' '}
                          を以外の数字を入れたら、上の{' '}
                          <CustomEmoji type="blankNumberPink" />{' '}
                          が残るんだよな。
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Glbk>
              <InlineBorder type="condition" /> に <EmojiNumber number={0} />{' '}
              以外の数字を入れた場合…
            </R.Glbk>
            <ExpressionRunnerSeparator />
            <R.Rtza>
              <InlineBorder type="falseCase" /> に入っている{' '}
              <CustomEmoji type="blankNumberPink" /> が残る
            </R.Rtza>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        これを弁当箱で再現するにいは、どうすればいいんだろう…？
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
        title: <>サヤちゃんの案</>,
        content: (
          <>
            <P>するといつものように、サヤちゃんが何かひらめいたようです。</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>サヤもちょっと考えてみた！これを見てくれる？</P>
                    </>
                  )
                }
              ]}
            />
            <R.Rhoa>
              「<Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>」を…
            </R.Rhoa>
            <ExpressionRunnerSeparator />
            <R.Sdta>
              <Emoji>👧🏻</Emoji> 弁当箱で再現してみた！
            </R.Sdta>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>なんと！もうひらめいたの？ </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        うん！
                        <Em>
                          まず、一番下の「
                          <Strong>
                            <CustomEmoji type="blankNumberGrey" />{' '}
                            に変換できる弁当箱
                          </Strong>
                          」のところに、
                          <Strong>
                            こちらの <EmojiNumber number={0} />{' '}
                            に変換できる弁当箱
                          </Strong>
                          を入れてみるね。
                        </Em>
                      </P>
                      <R.Elyq>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'f',
                            number: 0
                          }}
                        />
                      </R.Elyq>
                      <P>
                        入れてみると次のようになるよ。
                        <H args={{ name: 'pressFastForward', girl: true }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nmrp>
              「
              <Strong>
                <CustomEmoji type="blankNumberGrey" /> に変換できる弁当箱
              </Strong>
              」のところに、
              <br />
              <Strong>
                <EmojiNumber number={0} /> に変換できる弁当箱
              </Strong>
              を入れてみた
              <br />(<Strong>一番下の黄色い部分</Strong>)
            </R.Nmrp>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <CustomEmoji type="blankNumberPurple" />{' '}
                        に変換できる弁当箱が残った！
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        うん、これって「<Strong>条件分岐の機能</Strong>{' '}
                        <Emoji>↕️</Emoji>」を使ったときと同じだよね？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              「<Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>」を使った場合:
            </P>
            <R.Dqwh>
              <InlineBorder type="condition" /> に <EmojiNumber number={0} />{' '}
              を入れた場合…
            </R.Dqwh>
            <ExpressionRunnerSeparator />
            <R.Vwvb>
              <InlineBorder type="trueCase" /> に入っている{' '}
              <CustomEmoji type="blankNumberPurple" /> が残る
            </R.Vwvb>
            <P>
              <Emoji>👧🏻</Emoji> サヤの弁当箱を使った場合:
            </P>
            <R.Ycpk>
              一番下に <EmojiNumber number={0} /> に変換できる
              <br />
              弁当箱を入れた場合
            </R.Ycpk>
            <ExpressionRunnerSeparator />
            <R.Bndi>
              <CustomEmoji type="blankNumberPurple" /> が残る
            </R.Bndi>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        たしかに、
                        <Strong>
                          両方とも <EmojiNumber number={0} /> を入れると{' '}
                          <CustomEmoji type="blankNumberPurple" /> が残る
                        </Strong>
                        ね！
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
        title: (
          <>
            <EmojiNumber number={0} /> 以外の数字を入れた場合
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        じゃあ、次は{' '}
                        <Strong>
                          <EmojiNumber number={1} /> に変換できる弁当箱を{' '}
                          <CustomEmoji type="blankNumberGrey" /> に入れてみる
                        </Strong>
                        ね！
                      </P>
                      <R.Ooya>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'f',
                            number: 1
                          }}
                        />
                      </R.Ooya>
                      <P>
                        入れてみると次のようになるよ。
                        <H args={{ name: 'pressFastForward', girl: true }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Gpat>
              「
              <Strong>
                <CustomEmoji type="blankNumberGrey" /> に変換できる弁当箱
              </Strong>
              」のところに、
              <br />
              <Strong>
                <EmojiNumber number={1} /> に変換できる弁当箱
              </Strong>
              を入れてみた
              <br />(<Strong>一番下の黄色い部分</Strong>)
            </R.Gpat>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        おお、今度は先ほどと逆に、{' '}
                        <CustomEmoji type="blankNumberPink" />{' '}
                        に変換できる弁当箱が残った！
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        これも、「<Strong>条件分岐の機能</Strong>{' '}
                        <Emoji>↕️</Emoji>」を使ったときと同じだよね？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              「<Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>」を使った場合:
            </P>
            <R.Glbk>
              <InlineBorder type="condition" /> に <EmojiNumber number={1} />{' '}
              を入れた場合…
            </R.Glbk>
            <ExpressionRunnerSeparator />
            <R.Rtza>
              <InlineBorder type="falseCase" /> に入っている{' '}
              <CustomEmoji type="blankNumberPink" /> が残る
            </R.Rtza>
            <P>
              <Emoji>👧🏻</Emoji> サヤの弁当箱を使った場合:
            </P>
            <R.Psyv>
              一番下に <EmojiNumber number={1} /> に変換できる
              <br />
              弁当箱を入れた場合
            </R.Psyv>
            <ExpressionRunnerSeparator />
            <R.Kiiq>
              <CustomEmoji type="blankNumberPink" /> が残る
            </R.Kiiq>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        たしかに、
                        <Strong>
                          両方とも <EmojiNumber number={1} /> を入れると{' '}
                          <CustomEmoji type="blankNumberPink" /> が残る
                        </Strong>
                        ね！
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
        title: (
          <>
            <CustomEmoji type="blankNumberPink" />{' '}
            <CustomEmoji type="blankNumberGrey" />{' '}
            <CustomEmoji type="blankNumberPurple" /> 全部を埋める
          </>
        ),
        content: <></>
      }
    ]}
  />
)
