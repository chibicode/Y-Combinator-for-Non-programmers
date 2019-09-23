import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, HighlightBold, Em, Ul, UlLi } from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import EmojiSeparator from 'src/components/EmojiSeparator'
import CustomEmoji from 'src/components/CustomEmoji'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import TwoColGrid from 'src/components/TwoColGrid'
import Emoji from 'src/components/Emoji'
import InlineBorder from 'src/components/InlineBorder'
import * as R from 'src/components/Runners'
import NextLessonButton from 'src/components/NextLessonButton'
import { TrueCaseExplanation, FalseCaseExplanation } from 'src/contents/11.jp'

export default () => (
  <EpisodeCardList
    cards={[
      {
        type: 'summary',
        title: <>本格的に上級向けになります</>,
        content: (
          <>
            <P>
              <HighlightBold>
                このページから、本格的に上級向けになります。
              </HighlightBold>
              前のページに比べて、読むのに時間がかかるかもしれません。
            </P>
            <EmojiSeparator
              emojis={['🤔', '🤔', '🤔']}
              description={<>本格的に上級向けになります！</>}
            />
          </>
        )
      },
      {
        title: <>条件分岐の再現</>,
        content: (
          <>
            <P>
              村人たちは与えられたアドバイスをもとに、「
              <H args={{ name: 'conditionFeature' }} />
              」を弁当箱で再現しようとしていました。
            </P>
            <R.Rhoa>
              「<H args={{ name: 'conditionFeature' }} />
              」を…
            </R.Rhoa>
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              emojis={['❓', '🍱', '❓']}
              description={
                <>
                  <HighlightBold>弁当箱で再現できる？</HighlightBold>
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
                        <HighlightBold>
                          もし <InlineBorder type="condition" /> が{' '}
                          <EmojiNumber number={0} /> なら真ん中の{' '}
                          <CustomEmoji type="blankNumberYellow" /> が残り…
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <TrueCaseExplanation />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        そして、
                        <HighlightBold>
                          もし <InlineBorder type="condition" /> が{' '}
                          <EmojiNumber number={0} /> 以外の数字なら、上の{' '}
                          <CustomEmoji type="blankNumberRed" /> が残るんだよな。
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <FalseCaseExplanation />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        これを弁当箱で再現するには、どうすればいいんだろう…？
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
              「<H args={{ name: 'conditionFeature' }} />
              」を…
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
                      <P>
                        なんと！じゃあ、これが本当に再現できてるか、確かめてみよう！
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
            <EmojiNumber number={0} /> を入れた場合
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
                        では、まずサヤの弁当箱の一番下の「
                        <HighlightBold>
                          <CustomEmoji type="blankNumberGreen" />{' '}
                          に変換できる弁当箱
                        </HighlightBold>
                        」のところに、「
                        <HighlightBold>
                          <EmojiNumber number={0} /> に変換できる弁当箱
                        </HighlightBold>
                        」を入れてみるね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ycpk>
              一番下の 「
              <HighlightBold>
                <CustomEmoji type="blankNumberGreen" /> に変換できる弁当箱
              </HighlightBold>
              」<br />
              のところに、
              <EmojiNumber number={0} /> に変換できる
              <br />
              弁当箱を入れてみる
            </R.Ycpk>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Em>
                          使うのは、
                          <HighlightBold>
                            こちらの <EmojiNumber number={0} />{' '}
                            に変換できる弁当箱
                          </HighlightBold>
                          です！
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
              <HighlightBold>
                <CustomEmoji type="blankNumberGreen" /> に変換できる弁当箱
              </HighlightBold>
              」のところに、
              <br />
              <HighlightBold>
                <EmojiNumber number={0} /> に変換できる弁当箱
              </HighlightBold>
              を入れてみた
              <br />(<HighlightBold>一番下の黄色の部分</HighlightBold>)
            </R.Nmrp>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <CustomEmoji type="blankNumberYellow" />{' '}
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
                        うん、これって「
                        <H args={{ name: 'conditionFeature' }} />
                        」を使ったときと同じだよね？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              「<H args={{ name: 'conditionFeature' }} />
              」を使った場合:
            </P>
            <R.Dqwh>
              <InlineBorder type="condition" /> に <EmojiNumber number={0} />{' '}
              を入れた場合…
            </R.Dqwh>
            <ExpressionRunnerSeparator />
            <R.Vwvb>
              <InlineBorder type="trueCase" /> に入っている{' '}
              <CustomEmoji type="blankNumberYellow" /> が残る
            </R.Vwvb>
            <P>
              <Emoji>👧🏻</Emoji> サヤの弁当箱を使った場合:
            </P>
            <R.Ycpk>
              一番下に <EmojiNumber number={0} /> に変換できる
              <br />
              弁当箱を入れた場合…
            </R.Ycpk>
            <ExpressionRunnerSeparator />
            <R.Bndi>
              <CustomEmoji type="blankNumberYellow" /> が残る
            </R.Bndi>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        たしかに、
                        <HighlightBold>
                          両方とも <EmojiNumber number={0} /> を入れると{' '}
                          <CustomEmoji type="blankNumberYellow" /> が残る
                        </HighlightBold>
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
            <EmojiNumber number={1} /> を入れた場合
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
                        次は、サヤの弁当箱の一番下の「
                        <HighlightBold>
                          <CustomEmoji type="blankNumberGreen" />{' '}
                          に変換できる弁当箱
                        </HighlightBold>
                        」のところに、「
                        <HighlightBold>
                          <EmojiNumber number={1} /> に変換できる弁当箱
                        </HighlightBold>
                        」を入れてみるね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Psyv>
              一番下の 「
              <HighlightBold>
                <CustomEmoji type="blankNumberGreen" /> に変換できる弁当箱
              </HighlightBold>
              」<br />
              のところに、
              <EmojiNumber number={1} /> に変換できる
              <br />
              弁当箱を入れてみる
            </R.Psyv>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Em>
                          使うのは、
                          <HighlightBold>
                            こちらの <EmojiNumber number={1} />{' '}
                            に変換できる弁当箱
                          </HighlightBold>
                          です！
                        </Em>
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
              <HighlightBold>
                <CustomEmoji type="blankNumberGreen" /> に変換できる弁当箱
              </HighlightBold>
              」のところに、
              <br />
              <HighlightBold>
                <EmojiNumber number={1} /> に変換できる弁当箱
              </HighlightBold>
              を入れてみた
              <br />(<HighlightBold>一番下の黄色の部分</HighlightBold>)
            </R.Gpat>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        おお、今度は先ほどと逆に、{' '}
                        <CustomEmoji type="blankNumberRed" />{' '}
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
                        これも、「
                        <H args={{ name: 'conditionFeature' }} />
                        」を使ったときと同じだよね？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              「<H args={{ name: 'conditionFeature' }} />
              」を使った場合:
            </P>
            <R.Glbk>
              <InlineBorder type="condition" /> に <EmojiNumber number={1} />{' '}
              を入れた場合…
            </R.Glbk>
            <ExpressionRunnerSeparator />
            <R.Rtza>
              <InlineBorder type="falseCase" /> に入っている{' '}
              <CustomEmoji type="blankNumberRed" /> が残る
            </R.Rtza>
            <P>
              <Emoji>👧🏻</Emoji> サヤの弁当箱を使った場合:
            </P>
            <R.Psyv>
              一番下に <EmojiNumber number={1} /> に変換できる
              <br />
              弁当箱を入れた場合…
            </R.Psyv>
            <ExpressionRunnerSeparator />
            <R.Kiiq>
              <CustomEmoji type="blankNumberRed" /> が残る
            </R.Kiiq>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        たしかに、
                        <HighlightBold>
                          両方とも <EmojiNumber number={1} /> を入れると{' '}
                          <CustomEmoji type="blankNumberRed" /> が残る
                        </HighlightBold>
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
        title: <>やっぱりサヤちゃんが正解？</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        とういうことは、やっぱりサヤちゃんの弁当箱が、「
                        <H args={{ name: 'conditionFeature' }} />
                        」の再現としては正解なのかな？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rhoa>
              「<H args={{ name: 'conditionFeature' }} />
              」を…
            </R.Rhoa>
            <ExpressionRunnerSeparator />
            <R.Sdta>
              <Emoji>👧🏻</Emoji> サヤちゃんが弁当箱で再現してみた！
              <br />
              <HighlightBold>果たして、これが正解なのか？</HighlightBold>
            </R.Sdta>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>念のため、最終チェックをしたほうがいいかも！</P>
                    </>
                  )
                },
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>最終チェックだって？</P>
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
            <CustomEmoji type="blankNumberRed" />{' '}
            <CustomEmoji type="blankNumberYellow" />{' '}
            <CustomEmoji type="blankNumberGreen" /> 全てを埋める
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
                      <P>いちおう最終チェックとして、</P>
                      <Ul>
                        <UlLi>
                          <Em>
                            <CustomEmoji type="blankNumberRed" />{' '}
                            <CustomEmoji type="blankNumberYellow" />{' '}
                            <CustomEmoji type="blankNumberGreen" />{' '}
                            の全てを埋めてみて、
                          </Em>
                        </UlLi>
                        <UlLi>
                          <Em>
                            それをサヤの弁当箱でも再現できるかやってみるよ！
                          </Em>
                        </UlLi>
                      </Ul>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>ん？どういうこと？</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>たとえば、</P>
                      <Ul>
                        <UlLi>
                          <Em>
                            条件分岐の機能がある計算箱の{' '}
                            <CustomEmoji type="blankNumberRed" />{' '}
                            <CustomEmoji type="blankNumberYellow" />{' '}
                            <CustomEmoji type="blankNumberGreen" /> に、
                          </Em>
                        </UlLi>
                        <UlLi>
                          <Em>
                            それぞれ <EmojiNumber number={2} />{' '}
                            <EmojiNumber number={1} />{' '}
                            <EmojiNumber number={0} /> を入れた場合…
                          </Em>
                        </UlLi>
                        <UlLi>
                          最終的に <EmojiNumber number={1} /> が残るよね。
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Rhoa>
              <CustomEmoji type="blankNumberRed" />{' '}
              <CustomEmoji type="blankNumberYellow" />{' '}
              <CustomEmoji type="blankNumberGreen" /> の部分に、
            </R.Rhoa>
            <ExpressionRunnerSeparator />
            <R.Zdpf>
              <EmojiNumber number={2} /> <EmojiNumber number={1} />{' '}
              <EmojiNumber number={0} /> を入れた場合、
              <br />
              <InlineBorder type="condition" /> が <EmojiNumber number={0} />{' '}
              なので…
            </R.Zdpf>
            <ExpressionRunnerSeparator />
            <R.Rnug>
              <InlineBorder type="trueCase" /> に入っていた{' '}
              <EmojiNumber number={1} /> が残る
            </R.Rnug>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        では、
                        <Em>
                          サヤの弁当箱の <CustomEmoji type="blankNumberRed" />{' '}
                          <CustomEmoji type="blankNumberYellow" />{' '}
                          <CustomEmoji type="blankNumberGreen" /> にも{' '}
                          <EmojiNumber number={2} /> <EmojiNumber number={1} />{' '}
                          <EmojiNumber number={0} /> を入れてみるよ。
                        </Em>
                      </P>
                      <P>
                        これを
                        <H args={{ name: 'play' }} /> したとき、
                        <Em>
                          先ほど同じく結果が <EmojiNumber number={1} /> になれば
                          <HighlightBold>
                            成功
                          </HighlightBold> <Emoji>🎉</Emoji> というわけだよね。
                        </Em>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Sdta>
              <Emoji>👧🏻</Emoji> サヤの弁当箱の…
            </R.Sdta>
            <ExpressionRunnerSeparator />
            <R.Jbqw>
              <CustomEmoji type="blankNumberRed" /> に{' '}
              <EmojiNumber number={2} /> を、
              <br />
              <CustomEmoji type="blankNumberYellow" /> に{' '}
              <EmojiNumber number={1} /> を、
              <br />
              <CustomEmoji type="blankNumberGreen" /> に{' '}
              <EmojiNumber number={0} /> を入れてみた
            </R.Jbqw>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              <Em>
                <EmojiNumber size="semilg" number={1} /> に変換できる弁当箱
                <br />
                になれば<HighlightBold>成功</HighlightBold> <Emoji>🎉</Emoji>
              </Em>
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        なるほど。これを実行して計算箱に変換したときに{' '}
                        <EmojiNumber number={1} /> になれば…
                      </P>
                      <P>
                        サヤちゃんの弁当箱が条件分岐の弁当箱を再現できていると見て間違いないな。
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
        title: <>では確かめてみよう！</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        では、
                        <EmojiNumber number={2} /> <EmojiNumber number={1} />{' '}
                        <EmojiNumber number={0} />{' '}
                        にそれぞれ変換できる弁当箱を入れてみたよ。(黄色の部分)
                      </P>
                      <P>
                        というわけで、
                        <H args={{ name: 'pressFastForward', girl: true }} />
                      </P>
                      <Ul>
                        <UlLi>
                          複雑なので、<Em>目で追わなくても大丈夫だよ！</Em>
                        </UlLi>
                        <UlLi>
                          ちょっと時間がかかるので、待てない方は下の「
                          <HighlightBold>
                            <H args={{ name: 'skipToTheEnd' }} /> →
                          </HighlightBold>
                          」を押してね！
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Svbd>
              黄色の部分は、上から順に
              <br />
              <EmojiNumber number={2} /> に変換できる弁当箱、
              <br />
              <EmojiNumber number={1} /> に変換できる弁当箱、
              <br />
              <EmojiNumber number={0} /> に変換できる弁当箱。
            </R.Svbd>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        最終的に残ったこちらの弁当箱は、
                        <EmojiNumber number={1} /> に変換できる弁当箱だね。
                      </P>
                      <R.Oclg>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'f',
                            number: 1
                          }}
                        />
                      </R.Oclg>
                      <P>
                        だから、
                        <EmojiNumber number={1} /> が残ったので、
                        <HighlightBold>
                          成功
                        </HighlightBold> <Emoji>🎉</Emoji> です！
                      </P>
                    </>
                  )
                },
                {
                  type: 'celebrate',
                  children: (
                    <>
                      <P>やったー、さすがサヤちゃん！</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        type: 'summary',
        title: (
          <>
            <H args={{ name: 'summary' }} />
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
                      <P>お見事！サヤちゃん、正解です！</P>
                      <P>
                        サヤちゃんの弁当箱は、「
                        <H args={{ name: 'conditionFeature' }} />
                        」を再現しています！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rhoa>
              「<H args={{ name: 'conditionFeature' }} />
              」は…
            </R.Rhoa>
            <ExpressionRunnerSeparator />
            <R.Sdta>
              <Emoji>👧🏻</Emoji> サヤちゃんの弁当箱で
              <br />
              再現できている！
            </R.Sdta>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>やったー！</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        ちなみに、
                        <Em>
                          以下のような <Emoji>🅰️</Emoji> <Emoji>🅱️</Emoji>{' '}
                          <CustomEmoji type="C" /> <CustomEmoji type="D" />{' '}
                          <CustomEmoji type="E" />{' '}
                          の法則に沿っていれば、それぞれに何の料理が入っていても、条件分岐の機能を再現することができます。
                        </Em>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Fton>
              以下の法則に当てはまる弁当箱で
              <br />
              あれば、条件分岐の機能を再現できる
            </R.Fton>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        まとめると、
                        <Em>
                          計算箱の「
                          <H args={{ name: 'conditionFeature' }} />
                          」も、弁当箱で再現することができる
                        </Em>
                        のです。このポイントさえ覚えていただければ、細かいことは分からなくても大丈夫です！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="condition" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="condition" />
              ]}
              description={
                <>
                  計算箱の「
                  <H args={{ name: 'conditionFeature' }} />
                  」も、
                  <br />
                  弁当箱で「<HighlightBold>再現</HighlightBold>
                  」することができる
                </>
              }
            />
          </>
        )
      },
      {
        title: <>繰り返しの機能は？</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>うーん、条件分岐の機能を再現できたのはいいとして…</P>
                      <P>
                        俺らがやりたいのは、「
                        <H args={{ name: 'repeatFeature' }} />
                        」を弁当箱で再現することなんだけど…
                      </P>
                    </>
                  )
                }
              ]}
            />
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
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        そうですね。しかし、上級その1でぼくが言ったことを思い出して下さい。
                      </P>
                      <P>
                        「<H args={{ name: 'repeatFeature' }} />
                        」は、「
                        <H args={{ name: 'conditionFeature' }} />
                        」と<HighlightBold>関連がある</HighlightBold>のです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <Emoji>🔁</Emoji>,
                <CustomEmoji type="doubleArrow" />,
                <CustomEmoji type="condition" />
              ]}
              description={
                <>
                  「<H args={{ name: 'repeatFeature' }} />
                  」は、
                  <br />「<H args={{ name: 'conditionFeature' }} />
                  」と関連がある
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        だから、先ほど「
                        <H args={{ name: 'conditionFeature' }} />
                        」を弁当箱で再現したことによって、
                      </P>
                      <P>
                        みなさんは「
                        <H args={{ name: 'repeatFeature' }} />
                        」を弁当箱で再現するのに大きく近づいたのです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="condition" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="condition" />
              ]}
              description={
                <>
                  「<H args={{ name: 'conditionFeature' }} />
                  」を
                  <br />
                  弁当箱で再現したことにより…
                </>
              }
            />
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <Emoji>🔁</Emoji>,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <Emoji>❓</Emoji>
              ]}
              description={
                <>
                  「<H args={{ name: 'repeatFeature' }} />
                  」を
                  <br />
                  弁当箱で再現するのに大きく近づいた！
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>うーん…そう言われても、どういうことやらさっぱり…</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        では、
                        <HighlightBold>
                          次のページでまたヒントを出しましょう！
                        </HighlightBold>
                      </P>
                      <P>というわけで、先に進んでみてください。</P>
                    </>
                  )
                }
              ]}
            />
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
