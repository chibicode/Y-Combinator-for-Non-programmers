import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Em, Ul, UlLi } from 'src/components/ContentTags'
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

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>条件分岐の再現</>,
        content: (
          <>
            <P>
              村人たちは与えられたアドバイスをもとに、「
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
                          <EmojiNumber number={0} /> 以外の数字を入れたら、上の{' '}
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
        title: <>再現できてるか確かめよう</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Em>
                          まず、サヤの弁当箱の一番下の「
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
              <br />(<Strong>一番下の黄色の部分</Strong>)
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
              弁当箱を入れた場合…
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
              <br />(<Strong>一番下の黄色の部分</Strong>)
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
              弁当箱を入れた場合…
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
            <CustomEmoji type="blankNumberPurple" /> 全てを埋める
          </>
        ),
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
                        <Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>
                        」の再現としては正解なのかな？
                      </P>
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
              <Emoji>👧🏻</Emoji> サヤちゃんが弁当箱で再現してみた！
              <br />
              <Strong>果たして、これが正解なのか？</Strong>
            </R.Sdta>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>いちおう最後のチェックとして、</P>
                      <Ul>
                        <UlLi>
                          <Em>
                            <CustomEmoji type="blankNumberPink" />{' '}
                            <CustomEmoji type="blankNumberGrey" />{' '}
                            <CustomEmoji type="blankNumberPurple" />{' '}
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
                            <CustomEmoji type="blankNumberPink" />{' '}
                            <CustomEmoji type="blankNumberGrey" />{' '}
                            <CustomEmoji type="blankNumberPurple" /> に、
                          </Em>
                        </UlLi>
                        <UlLi>
                          <Em>
                            それぞれ <EmojiNumber number={1} />{' '}
                            <EmojiNumber number={2} />{' '}
                            <EmojiNumber number={3} /> を入れた場合…
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
              <CustomEmoji type="blankNumberPink" />{' '}
              <CustomEmoji type="blankNumberGrey" />{' '}
              <CustomEmoji type="blankNumberPurple" /> の部分に、
            </R.Rhoa>
            <ExpressionRunnerSeparator />
            <R.Zdpf>
              <EmojiNumber number={1} /> <EmojiNumber number={2} />{' '}
              <EmojiNumber number={3} /> を入れた場合、
              <br />
              <InlineBorder type="condition" /> が <EmojiNumber number={0} />{' '}
              ではないので…
            </R.Zdpf>
            <ExpressionRunnerSeparator />
            <R.Rnug>
              <InlineBorder type="falseCase" /> に入っていた{' '}
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
                          サヤの弁当箱の <CustomEmoji type="blankNumberPink" />{' '}
                          <CustomEmoji type="blankNumberGrey" />{' '}
                          <CustomEmoji type="blankNumberPurple" /> にも{' '}
                          <EmojiNumber number={1} /> <EmojiNumber number={2} />{' '}
                          <EmojiNumber number={3} /> を入れてみるよ。
                        </Em>
                      </P>
                      <P>
                        これを
                        <H args={{ name: 'play' }} /> したとき、
                        <Em>
                          先ほど同じく結果が <EmojiNumber number={1} /> になれば
                          <Strong>成功</Strong> <Emoji>🎉</Emoji>{' '}
                          というわけだよね。
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
              <CustomEmoji type="blankNumberPink" /> (一番上)に{' '}
              <EmojiNumber number={1} /> を、
              <br />
              <CustomEmoji type="blankNumberGrey" /> (一番下)に{' '}
              <EmojiNumber number={2} /> を、
              <br />
              <CustomEmoji type="blankNumberPurple" /> (上から二番目)に{' '}
              <EmojiNumber number={3} /> を入れてみた
            </R.Jbqw>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              <Em>
                <EmojiNumber number={1} /> に変換できる弁当箱
                <br />
                になれば<Strong>成功</Strong> <Emoji>🎉</Emoji>
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
                        <EmojiNumber number={1} /> <EmojiNumber number={2} />{' '}
                        <EmojiNumber number={3} />{' '}
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
                          <Strong>
                            <H args={{ name: 'skipToTheEnd' }} /> →
                          </Strong>
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
              <EmojiNumber number={1} /> に変換できる弁当箱、
              <br />
              <EmojiNumber number={3} /> に変換できる弁当箱、
              <br />
              <EmojiNumber number={2} /> に変換できる弁当箱。
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
                            letter: 'h',
                            number: 1
                          }}
                        />
                      </R.Oclg>
                      <P>
                        だから、
                        <EmojiNumber number={1} /> が残ったので、
                        <Strong>成功</Strong> <Emoji>🎉</Emoji> です！
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
                        サヤちゃんの弁当箱は、「<Strong>条件分岐の機能</Strong>{' '}
                        <Emoji>↕️</Emoji>」を再現しています！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rhoa>
              「<Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>」は…
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
                          計算箱の「<Strong>条件分岐の機能</Strong>{' '}
                          <Emoji>↕️</Emoji>
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
                <Emoji>↕️</Emoji>,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <Emoji>↕️</Emoji>
              ]}
              description={
                <>
                  計算箱の「<Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>
                  」も、
                  <br />
                  弁当箱で「<Strong>再現</Strong>」することができる
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
                        <Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
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
                        「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                        」は、「
                        <Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>
                        」と<Strong>関連がある</Strong>のです。
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
                <Emoji>↕️</Emoji>
              ]}
              description={
                <>
                  「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                  」は、
                  <br />「<Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>
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
                        <Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>
                        」を弁当箱で再現したことによって、
                      </P>
                      <P>
                        みなさんは「<Strong>繰り返しの機能</Strong>{' '}
                        <Emoji>🔁</Emoji>
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
                <Emoji>↕️</Emoji>,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <Emoji>↕️</Emoji>
              ]}
              description={
                <>
                  「<Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>
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
                  「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
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
                        <Strong>次のページでまたヒントを出しましょう！</Strong>
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
