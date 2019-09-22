/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Em, Ul, UlLi, Bold } from 'src/components/ContentTags'
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

export const TwoPlusFour = () => (
  <>
    <R.Ednv />
    <P>
      結果は <EmojiNumber number={6} /> になりました。この計算箱は、
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
    <ExpressionRunnerSeparator />
    <R.Iwmu>
      <EmojiNumber number={2} /> <Emoji>➕</Emoji> <EmojiNumber number={4} />{' '}
      を計算できました！
    </R.Iwmu>
  </>
)

export const Conclusion = () => (
  <>
    <P>
      このように繰り返しの機能を使えば、
      <Strong>
        <CustomEmoji type="plusOne" /> や <CustomEmoji type="minusOne" />{' '}
        を数え間違えることなく、確実に足し算や引き算を行うことができます。
      </Strong>
      だからこそ、繰り返しの機能はラムダ村で重宝されていたのです。
    </P>
    <EmojiSeparator
      emojis={['➕', '🤗', '➖']}
      description={
        <>
          繰り返しの機能を使えば、
          <br />
          確実に足し算や引き算を行える！
        </>
      }
    />
  </>
)

export default () => (
  <EpisodeCardList
    underConstruction
    cards={[
      {
        title: <>The “Repeat” Feature</>,
        content: (
          <>
            <P>
              <Bold>Review:</Bold> Last time, we talked about Lambda Village and{' '}
              <Strong>mathboxes</Strong> used by its villagers.
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>🌲</Emoji>,
                <Emoji>🙂</Emoji>,
                <CustomEmoji type="mathBox" />,
                <Emoji>🙂</Emoji>,
                <Emoji>🌲</Emoji>
              ]}
              description={<>Villagers in Lambda Village and their mathbox</>}
            />
            <P>
              We also talked about the first two features of a mathbox:{' '}
              <H args={{ name: 'plusOneFeature', capitalize: true }} /> and{' '}
              <H args={{ name: 'minusOneFeature' }} />, which enables addition
              and subtraction.
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="minusOne" />
              ]}
              description={
                <>
                  <H args={{ name: 'plusOneFeature', capitalize: true }} /> and
                  <br />
                  <H args={{ name: 'minusOneFeature' }} />
                </>
              }
            />
            <P>
              This time, we’ll talk about the <Strong>third</Strong> feature of
              a mathbox: <H args={{ name: 'repeatFeature' }} />.
            </P>
            <EmojiSeparator
              nodes={[<Emoji>✨</Emoji>, <Emoji>🔁</Emoji>, <Emoji>✨</Emoji>]}
              description={
                <>
                  <H args={{ name: 'repeatFeature', capitalize: true }} />
                </>
              }
            />
            <P>
              Let’s start with a <H args={{ name: 'yesNoQuiz' }} />!
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
        content: (
          <>
            <P>
              Villagers living in Lambda Village were all bad at math, so they
              had to rely on mathboxes to solve even the simplest problems.
            </P>
            <P>
              One day, a villager attempted to use a mathbox to calculate{' '}
              <EmojiNumber number={10} /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={8} />.
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
                  Need to calculate <EmojiNumber number={10} />{' '}
                  <Emoji>➖</Emoji> <EmojiNumber number={8} />…
                </>
              }
            />
            <P>So he came up with the following mathbox:</P>
            <R.Dfjp>
              <Emoji>😉</Emoji> This will calculate <EmojiNumber number={10} />{' '}
              <Emoji>➖</Emoji> <EmojiNumber number={8} />!
            </R.Dfjp>
            <P>
              <Bold>Question:</Bold> Will the above mathbox correctly calculate{' '}
              <Strong>
                <EmojiNumber number={10} /> <Emoji>➖</Emoji>{' '}
                <EmojiNumber number={8} />？
              </Strong>{' '}
              Select <H args={{ name: 'yesNoQuizYes' }} /> or{' '}
              <H args={{ name: 'yesNoQuizNo' }} />.
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
            <EmojiSeparator
              emojis={['❌', '😭', '❌']}
              description={
                <>
                  <EmojiNumber number={10} /> <Emoji>➖</Emoji>{' '}
                  <EmojiNumber number={8} /> を計算できなかった！
                </>
              }
            />
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
              description={
                <>
                  <CustomEmoji type="minusOne" /> の数が間違っていた
                </>
              }
            />
            <P>
              <EmojiNumber number={10} /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={8} /> を計算したければ、
              <CustomEmoji type="minusOne" /> を<Strong>8個配置する</Strong>
              必要がありますが、
              <Em>
                先ほどの計算箱には <CustomEmoji type="minusOne" /> が
                <Strong>7個しか</Strong>ありませんでした
              </Em>
              。
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
              description={
                <>
                  どうすれば、
                  <CustomEmoji type="plusOne" /> や{' '}
                  <CustomEmoji type="minusOne" /> の数を
                  <br />
                  間違えずにすむのか？
                </>
              }
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
              <H args={{ name: 'repeatFeature' }} />
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
                すると、計算をする前に、下の部分が次のように変化します。
              </Em>
              変化後には、
              <EmojiNumber number={10} /> の下に <CustomEmoji type="minusOne" />{' '}
              が<Strong>8個</Strong>あるのに注目です。
            </P>
            <R.Sucz>計算をする前に…</R.Sucz>
            <ExpressionRunnerSeparator />
            <R.Xlgb>
              <EmojiNumber number={10} /> の下に <CustomEmoji type="minusOne" />{' '}
              が<Strong>8個</Strong>出現する
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
              <H args={{ name: 'pressPlay' }} />
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
            <TwoPlusFour />
            <P>
              こうすれば、
              <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={4} /> を計算できるのです。
            </P>
          </>
        )
      },
      {
        title: <>繰り返しの機能</>,
        content: (
          <>
            <P>つまり、下の計算箱のように、</P>
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
            </Ul>
            <P>
              これが、計算箱の「
              <H args={{ name: 'repeatFeature' }} />
              」です。
            </P>
            <EmojiSeparator
              nodes={[<Emoji>✨</Emoji>, <Emoji>🔁</Emoji>, <Emoji>✨</Emoji>]}
              description={<>繰り返しの機能</>}
            />
            <P>
              もちろん、
              <Em>
                <CustomEmoji type="plusOne" /> の代わりに{' '}
                <CustomEmoji type="minusOne" /> を使った場合も同じ
              </Em>
              ように繰り返されます。
            </P>
            <R.Ewfr>
              <CustomEmoji type="minusOne" /> を{' '}
              <CustomEmoji type="blankNumber" /> 回分繰り返す
            </R.Ewfr>
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
              を計算したかったら、以下のような計算箱を用意すればいいのです。
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
            <R.Etku>
              <Emoji>🅰️</Emoji> に <EmojiNumber number={5} /> を、
              <Emoji>🅱️</Emoji> に <EmojiNumber number={3} /> を入れる
            </R.Etku>
            <P>
              後は
              <H args={{ name: 'play' }} /> するだけで、
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
          </>
        )
      },
      {
        title: <>引き算も同じ</>,
        content: (
          <>
            <P>
              引き算でも同じです。<Emoji>🅰️</Emoji> <Emoji>➖</Emoji>{' '}
              <Emoji>🅱️</Emoji>{' '}
              を計算するには、以下のような計算箱を使えばできます。
            </P>
            <R.Jaqs>
              <Emoji>🅰️</Emoji> <Emoji>➖</Emoji> <Emoji>🅱️</Emoji> を計算
            </R.Jaqs>
          </>
        )
      },
      {
        title: <>確実に足し算や引き算を行う</>,
        content: (
          <>
            <Conclusion />
          </>
        )
      },
      {
        title: <>ラムダ村にとって、計算箱は必要不可欠</>,
        content: (
          <>
            <P>
              前回も話したように、
              <Strong>ラムダ村の村人は計算がとても苦手でした</Strong>
              。だから彼らは、足し算や引き算を行うときは、計算箱に頼り切っていました。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>🌲</Emoji>,
                <Emoji>😍</Emoji>,
                <CustomEmoji type="mathBox" />,
                <Emoji>😍</Emoji>,
                <Emoji>🌲</Emoji>
              ]}
              description={
                <>
                  俺ら計算が苦手だから、
                  <br />
                  計算箱が無いとやってけない！
                </>
              }
            />
            <P>
              村人たちは、計算箱の
              <Em>
                「<H args={{ name: 'plusOneFeature' }} />
                」、「
                <H args={{ name: 'minusOneFeature' }} />
                」、そして今回紹介した「
                <H args={{ name: 'repeatFeature' }} />
                」を組み合わせる
              </Em>
              ことで、足し算や引き算を正確に行っていたのです。
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="minusOne" />,
                <Emoji>🔁</Emoji>
              ]}
              description={
                <>
                  計算箱の3つの機能を組み合わせることで、
                  <br />
                  足し算や引き算を正確に行うことができる
                </>
              }
            />
            <P>
              そんなある日、<Strong>ラムダ村である異変が起きました。</Strong>
            </P>
            <EmojiSeparator
              emojis={['🌲', '😮', '❓', '😮', '🌲']}
              description={<>ある日、ラムダ村で異変が！</>}
            />
            <P>詳しくは次のページでお話します！</P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
