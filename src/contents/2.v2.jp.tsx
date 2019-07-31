/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Em, Ul, UlLi, Hr } from 'src/components/ContentTags'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiNumber from 'src/components/EmojiNumber'
import Emoji from 'src/components/Emoji'
import H from 'src/components/H'
import * as R from 'src/components/Runners'
import YesNoButtons from 'src/components/YesNoButtons'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import NextLessonButton from 'src/components/NextLessonButton'
import InlineBorder from 'src/components/InlineBorder'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>繰り返しの機能</>,
        content: (
          <>
            <P>
              前回は、ラムダ村に代々伝わる「<Emoji>🎁</Emoji>{' '}
              <Strong>計算箱</Strong>」の話をしました。
            </P>
            <EmojiSeparator emojis={['🌲', '🙂', '🎁', '🙂', '🌲']} />
            <P>
              そして、足し算や引き算を可能にする、計算箱の「
              <CustomEmoji type="plusMinus" />{' '}
              <Strong>プラスマイナスの機能</Strong>
              」について紹介しました。
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="plusMinus" />,
                <CustomEmoji type="minusOne" />
              ]}
              description={<>プラスマイナスの機能</>}
            />
            <P>
              今回はもうひとつの計算箱の機能である「
              <Emoji>🔁</Emoji> <Strong>繰り返しの機能</Strong>
              」について説明します。
            </P>
            <EmojiSeparator
              nodes={[<Emoji>✨</Emoji>, <Emoji>🔁</Emoji>, <Emoji>✨</Emoji>]}
              description={<>繰り返しの機能</>}
            />
            <P>
              まずは
              <H args={{ name: 'yesNoQuiz' }} />
              からはじめましょう！
            </P>
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
          </>
        ),
        // CHANGE QUIZ: Suppose that they want to do 10 - 9 ... are they doing it right or not? The answer should be no, they made a mistake
        content: (
          <>
            <P>
              あるラムダ村の村人は、計算箱を使って <EmojiNumber number={10} />{' '}
              <Emoji>➖</Emoji> <EmojiNumber number={8} />{' '}
              を計算しようとしていました。
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={10} />,
                <Emoji>➖</Emoji>,
                <EmojiNumber number={8} />,
                <Emoji>🤔</Emoji>,
                <Emoji>❓</Emoji>
              ]}
              description={
                <>
                  ラムダ村の村人は計算が苦手だったので、
                  <br />
                  簡単な計算でも計算箱に頼っていたのです。
                </>
              }
            />
            <P>
              というわけでラムダ村の村人は、以下のような計算箱を
              <H args={{ name: 'play' }} />
              しようとしました。
            </P>
            <R.Dfjp>
              <Emoji>😉</Emoji>「これで <EmojiNumber number={10} />{' '}
              <Emoji>➖</Emoji> <EmojiNumber number={8} /> を計算しよう！」
            </R.Dfjp>
            <P>
              ここで質問です。上の計算箱は、
              <Strong>
                <EmojiNumber number={10} /> <Emoji>➖</Emoji>{' '}
                <EmojiNumber number={8} /> を正しく計算できるでしょうか？
              </Strong>
            </P>
            <YesNoButtons answer={'no'} />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'theAnswerIs', isYes: false }} />
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'theAnswerIs', isYes: false, sentence: true }} />
              <H args={{ name: 'pressPlay' }} />
            </P>
            <R.Lxrk />
            <P>
              答えは <EmojiNumber number={3} />{' '}
              になりました。つまり、もともと意図していた
              <Strong>
                <EmojiNumber number={10} /> <Emoji>➖</Emoji>{' '}
                <EmojiNumber number={8} /> ではなく、
                <EmojiNumber number={10} /> <Emoji>➖</Emoji>{' '}
                <EmojiNumber number={7} /> を計算してしまった
              </Strong>
              のです。
            </P>
            <EmojiSeparator emojis={['❌', '😭', '❌']} />
            <P>どうしてこうなったか、お分かりでしょうか？</P>
          </>
        )
      },
      {
        title: (
          <>
            <CustomEmoji type="plusOne" /> や <CustomEmoji type="minusOne" />{' '}
            の数を間違えないようにするには
          </>
        ),
        content: (
          <>
            <P>
              <EmojiNumber number={10} /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={8} /> ではなく、
              <EmojiNumber number={10} /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={7} /> を計算してしまった理由は、
              <Strong>
                <CustomEmoji type="minusOne" /> の数が間違っていたから
              </Strong>
              です。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>❌</Emoji>,
                <CustomEmoji type="minusOne" />,
                <Emoji>❌</Emoji>
              ]}
            />
            <P>
              <EmojiNumber number={10} /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={8} /> を計算したければ、
              <CustomEmoji type="minusOne" /> を8個配置する必要がありますが、
              <Em>先ほどの計算箱には7個しかありませんでした</Em>。
            </P>
            <EmojiSeparator
              size="mdsm"
              nodes={[
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji
                  type="minusOne"
                  cssOverrides={css`
                    opacity: 0.4;
                  `}
                />
              ]}
              description={
                <>
                  <CustomEmoji type="minusOne" />{' '}
                  が8個必要だったが、7個しかなかった
                </>
              }
            />
            <P>
              このように、
              <CustomEmoji type="plusOne" /> や <CustomEmoji type="minusOne" />{' '}
              の数をひとつでも間違えると、計算箱では正確な計算ができません。
              <Em>ではどうすれば、こういったミスを防げるのでしょうか？</Em>
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusOne" />,
                <Emoji>🤔</Emoji>,
                <CustomEmoji type="minusOne" />
              ]}
            />
          </>
        )
      },
      {
        title: <>繰り返しの機能</>,
        content: (
          <>
            <P>
              実は計算箱には、こういったミスを防ぐために役立つ「
              <Emoji>🔁</Emoji> <Strong>繰り返しの機能</Strong>
              」が備わっています。
            </P>
            <EmojiSeparator
              nodes={[<Emoji>✨</Emoji>, <Emoji>🔁</Emoji>, <Emoji>✨</Emoji>]}
              description={<>繰り返しの機能</>}
            />
            <P>
              どんな機能か紹介しましょう。
              <H args={{ name: 'lookAtThisMathBox' }} />:
            </P>
            <R.Sucz />
            <P>
              注目ポイントは、
              <Strong>
                下の <CustomEmoji type="minusOne" /> の左側に{' '}
                <InlineBorder>
                  <EmojiNumber number={8} />
                </InlineBorder>{' '}
                の印があることです。
              </Strong>
            </P>
          </>
        )
      },
      {
        title: (
          <>
            <CustomEmoji type="minusOne" /> を繰り返す
          </>
        ),
        content: (
          <>
            <P>
              <Em>
                上の計算箱を
                <H args={{ name: 'play' }} />
                すると、計算をする前に、まず下の部分が次のように変化します。
              </Em>
              変化後には、
              <EmojiNumber number={10} /> の下に <CustomEmoji type="minusOne" />{' '}
              が<Strong>8個</Strong>あるのに注目です。
            </P>
            <R.Sucz />
            <ExpressionRunnerSeparator />
            <R.Xlgb>
              <EmojiNumber number={10} /> の下に <CustomEmoji type="minusOne" />{' '}
              が<Strong>8個</Strong>出現しました
            </R.Xlgb>
            <P>
              つまり、
              <Strong>
                左側に{' '}
                <InlineBorder>
                  <EmojiNumber number={8} />
                </InlineBorder>{' '}
                の印があると、その部分にあった <CustomEmoji type="minusOne" />{' '}
                が8回繰り返されるということ
              </Strong>
              です。
            </P>
            <EmojiSeparator
              nodes={[
                <InlineBorder small>
                  <EmojiNumber number={8} />
                </InlineBorder>,
                <CustomEmoji type="minusOne" />
              ]}
            />
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              size="mdsm"
              nodes={[
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />
              ]}
              description={
                <>
                  <CustomEmoji type="minusOne" /> が8回繰り返される
                </>
              }
            />
            <P>
              ということは <EmojiNumber number={10} /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={8} /> を計算してくれるので、結果は{' '}
              <EmojiNumber number={2} /> になります。
              <H args={{ name: 'pressPlay' }} />:
            </P>
            <R.Pgxb />
            <P>
              まとめると、
              <Em>
                繰り返しの機能を使うことで、
                <CustomEmoji type="minusOne" />{' '}
                を指定した回数分繰り返すことができる
              </Em>
              ということです。
            </P>
          </>
        )
      },
      {
        title: (
          <>
            <CustomEmoji type="plusOne" /> も繰り返せる
          </>
        ),
        content: (
          <>
            <P>
              もちろん、
              <Strong>
                <CustomEmoji type="plusOne" /> を繰り返すこともできます。
              </Strong>
              こちらの計算箱をご覧になり、
              <H args={{ name: 'pressPlay' }} />
            </P>
            <R.Ednv />
            <P>
              結果は <EmojiNumber number={6} /> になりました。上の計算箱は、
              <Em>
                下の <CustomEmoji type="plusOne" /> の左側に{' '}
                <InlineBorder>
                  <EmojiNumber number={4} />
                </InlineBorder>{' '}
                があるので、
                <CustomEmoji type="plusOne" /> が4回繰り返されるのです。
              </Em>
            </P>
            <R.Xpks />
            <ExpressionRunnerSeparator />
            <R.Dgpx>
              <CustomEmoji type="plusOne" /> が4回繰り返される
            </R.Dgpx>
            <P>
              つまり、
              <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={4} /> を計算できるというわけですね。
            </P>
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
            <P>ここまでをまとめると、下の計算箱のように、</P>
            <R.Bwnp />
            <Ul>
              <UlLi>
                <Em>
                  <CustomEmoji type="plusOne" /> の左側に何らかの数字{' '}
                  <InlineBorder>
                    <CustomEmoji type="blankNumber" />
                  </InlineBorder>{' '}
                  が入っている場合、
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  <H args={{ name: 'play' }} /> すると、
                  <CustomEmoji type="plusOne" /> が{' '}
                  <CustomEmoji type="blankNumber" /> 回分繰り返される。
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  <CustomEmoji type="plusOne" /> の代わりに{' '}
                  <CustomEmoji type="minusOne" /> を使った場合も同じ。
                </Em>
              </UlLi>
            </Ul>
            <P>
              これが、計算箱の「
              <Emoji>🔁</Emoji> <Strong>繰り返しの機能</Strong>
              」です。
            </P>
            <EmojiSeparator
              nodes={[<Emoji>✨</Emoji>, <Emoji>🔁</Emoji>, <Emoji>✨</Emoji>]}
              description={<>繰り返しの機能</>}
            />
          </>
        )
      },
      {
        title: (
          <>
            <Emoji>🅰️</Emoji> <Emoji>➕</Emoji> <Emoji>🅱️</Emoji> を計算するには
          </>
        ),
        content: (
          <>
            <P>
              ということは、もし例えば <Emoji>🅰️</Emoji> <Emoji>➕</Emoji>{' '}
              <Emoji>🅱️</Emoji>{' '}
              を計算箱で計算したかったら、以下のような計算箱を用意すればいいのです。
            </P>
            <R.Nmbt>
              <Emoji>🅰️</Emoji> <Emoji>➕</Emoji> <Emoji>🅱️</Emoji> を計算
            </R.Nmbt>
            <P>
              たとえば、
              <EmojiNumber number={5} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={3} /> を計算するには、<Emoji>🅰️</Emoji> に{' '}
              <EmojiNumber number={5} /> を、<Emoji>🅱️</Emoji> に{' '}
              <EmojiNumber number={3} /> を入れます。
            </P>
            <R.Etku />
            <P>
              後は
              <H args={{ name: 'play' }} />
              するだけで、
              <EmojiNumber number={5} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={3} /> を計算してくれます。
            </P>
            <R.Iczf>
              <CustomEmoji type="plusOne" /> を3回繰り返します
            </R.Iczf>
            <ExpressionRunnerSeparator />
            <R.Vsvt>
              <EmojiNumber number={5} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={3} /> を計算できました！
            </R.Vsvt>
            <P>
              このようにすれば、
              <CustomEmoji type="plusOne" /> の数を間違えることはありませんね！
            </P>
            <Hr />
            <P>
              引き算でも同じです。<Emoji>🅰️</Emoji> <Emoji>➖</Emoji>{' '}
              <Emoji>🅱️</Emoji>{' '}
              を計算するには、以下のような計算箱を使えばできます。
            </P>
            <R.Jaqs>
              <Emoji>🅰️</Emoji> <Emoji>➖</Emoji> <Emoji>🅱️</Emoji> を計算
            </R.Jaqs>
            <P>
              このように繰り返しの機能を使えば、
              <Strong>
                <CustomEmoji type="plusOne" /> や{' '}
                <CustomEmoji type="minusOne" />{' '}
                を数え間違えることなく、確実に足し算や引き算を行うことができるのです。
              </Strong>
            </P>
            <EmojiSeparator
              emojis={['➕', '🤗', '➖']}
              description={<>確実に足し算や引き算を行うことができる！</>}
            />
          </>
        )
      },
      {
        title: <>ラムダ村にとって、計算箱は必要不可欠</>,
        content: (
          <>
            <P>
              ラムダ村の村人たちは、計算箱の「
              <CustomEmoji type="plusMinus" />{' '}
              <Strong>プラスマイナスの機能</Strong>」 と「
              <Emoji>🔁</Emoji> <Strong>繰り返しの機能</Strong>
              」を組み合わせることで、足し算や引き算を行っていました。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>🙂</Emoji>,
                <CustomEmoji type="plusMinus" />,
                <Emoji>🎁</Emoji>,
                <Emoji>🔁</Emoji>,
                <Emoji>🙂</Emoji>
              ]}
            />
            <P>
              <Em>
                残念ながら、計算箱は掛け算 <Emoji>✖️</Emoji> や割り算{' '}
                <Emoji>➗</Emoji> を行うことはできませんでした。
              </Em>
              とはいえ、計算がとても苦手だったラムダ村の村人たちにとって、足し算や引き算を自動で行ってくれる計算箱は、必要不可欠な道具でした。
            </P>
            <EmojiSeparator
              emojis={['🌲', '😍', '🎁', '😍', '🌲']}
              description={<>「計算箱が無いとやってけない！」</>}
            />
            <P>
              そんなある日、ラムダ村である出来事が起きました。詳しくは次のページでお話します。
            </P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
