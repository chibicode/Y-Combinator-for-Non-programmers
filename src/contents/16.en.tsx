/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  HighlightBold,
  Bold,
  Italic,
  Highlight,
  CenteredCode,
  Pre,
  Code,
  Ol,
  OlLi,
  Hr
} from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiNumber from 'src/components/EmojiNumber'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiForLetter from 'src/components/EmojiForLetter'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import H from 'src/components/H'
import Emoji from 'src/components/Emoji'
import CustomEmoji from 'src/components/CustomEmoji'
import BubbleQuotes from 'src/components/BubbleQuotes'
// import * as R from 'src/components/Runners'
import * as R from 'src/components/Runners/fakeIndex'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import CardContent from 'src/components/CardContent'
import { colors } from 'src/lib/theme'

const pythonCss = css`
  background: ${colors('green800')};
  color: ${colors('white')};
`

export default () => (
  <EpisodeCardList
    cards={[
      {
        type: 'summary',
        title: <>This is the final page!</>,
        content: (
          <>
            <P>
              This is the final page! Thank you for reading all the way through!
            </P>
            <EmojiSeparator
              emojis={['🎉', '🤗', '🎉']}
              description={
                <>
                  Thank you for reading
                  <br />
                  all the way through!
                </>
              }
            />
          </>
        )
      },
      {
        title: <>Who invented lunchboxes?</>,
        content: (
          <>
            <P>
              In the last episode, a villager from Lambda Village asked the
              following question:
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          Is there any calculations that lunchboxes cannot do?
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <Bold>
                To answer this question, we need to ask another question:
              </Bold>{' '}
              <Highlight>Who invented lunchboxes?</Highlight>
            </P>
            <EmojiSeparator
              emojis={['❓', '🍱', '❓']}
              description={<>Who invented lunchboxes?</>}
            />
            <P>
              <Bold>Answer:</Bold> Lunchboxes were invented in the 1930s by a
              mathematician <Bold>Alonzo Church</Bold>.
            </P>
            <EmojiSeparator
              emojis={['👨🏻‍🦳', '💭', '🍱']}
              noTopMargin
              description={
                <>
                  Lunchboxes were invented in the 1930s
                  <br />
                  by a mathematician <Bold>Alonzo Church</Bold>
                </>
              }
            />
            <P>
              <Bold>However:</Bold> Alonzo Church <Italic>did not</Italic> call
              it “lunchbox” when he invented it. Instead, he called it “
              <HighlightBold>Lambda calculus</HighlightBold>”.
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>👨🏻‍🦳</Emoji>,
                <Emoji>💭</Emoji>,
                <CustomEmoji type="lambda" />
              ]}
              noTopMargin
              description={
                <>
                  It was called <HighlightBold>“Lambda calculus”</HighlightBold>
                  <br />
                  instead of “lunchbox”
                </>
              }
            />
            <P>Let’s now talk about lambda calculus!</P>
          </>
        )
      },
      {
        title: <>Lambda calculus and lunchboxes</>,
        content: (
          <>
            <P>
              <Bold>Lambda calculus</Bold>, invented by Alonzo Church, works
              exactly like a lunchbox - although they <Italic>look</Italic>{' '}
              different.
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="lambda" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>
              ]}
              description={
                <>
                  Lambda calculus works exactly like
                  <br />a lunchbox
                </>
              }
            />
            <P>
              <Bold>Here is an example of lambda calculus.</Bold> The leftmost
              letter, <HighlightBold>λ</HighlightBold>, is a Greek letter
              <Italic>“lambda”</Italic>. That’s why it’s called{' '}
              <Italic>“lambda calculus.”</Italic>
            </P>
            <CenteredCode size="md">λA.B C</CenteredCode>
            <P>
              <Highlight>
                The above lambda calculus expression is exactly the same as the
                following lunchbox:
              </Highlight>
            </P>
            <R.Kzkg>
              The above lambda calculus expression is
              <br />
              exactly the same as this lunchbox:
            </R.Kzkg>
            <P>
              If you <H args={{ name: 'run', lowerCase: true }} /> the above
              lunchbox, it will become <Emoji>🅱️</Emoji>.{' '}
              <H args={{ name: 'pressRun' }} />
            </P>
            <R.Unxf></R.Unxf>
            <P>
              <Bold>Similarly:</Bold> If you “run” the earlier lambda calculus
              expression,{' '}
              <Highlight>
                the result will also be <Emoji>🅱️</Emoji>.
              </Highlight>
            </P>
            <CenteredCode size="md">λA.B C</CenteredCode>
            <ExpressionRunnerSeparator />
            <CenteredCode size="md">B</CenteredCode>
            <P>
              Of course, there are more complicated lambda calculus expressions.
              Take a look at this one:
            </P>
            <CenteredCode size="sm">λA.(λB.A(B B))(λB.A(B B))</CenteredCode>
            <P>
              <Highlight>
                The above lambda calculus expression is exactly the same as this
                lunchbox:
              </Highlight>
            </P>
            <R.Rjho></R.Rjho>
            <P>
              If you replace <Emoji>🅰️</Emoji> with <EmojiWithText letter="a" />
              , and replace <Emoji>🅱️</Emoji> with a{' '}
              <EmojiWithText letter="b" />, it will be the same as the{' '}
              <HighlightBold>Y Combinator</HighlightBold> lunchbox we used on
              previous pages.
            </P>
            <R.Xjzx>
              If you replace <Emoji>🅰️</Emoji> with{' '}
              <EmojiForLetter letter="a" />, and
              <br />
              <Emoji>🅱️</Emoji> with <EmojiForLetter letter="b" />, it’s the
              same as
              <br />
              the <HighlightBold>Y Combinator</HighlightBold> lunchbox
            </R.Xjzx>
            <P>
              <Bold>So:</Bold>{' '}
              <Highlight>
                The previous lambda expression represents{' '}
                <HighlightBold>Y Combinator</HighlightBold>.
              </Highlight>
            </P>
            <CenteredCode size="sm">λA.(λB.A(B B))(λB.A(B B))</CenteredCode>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              <HighlightBold>Y Combinator</HighlightBold>
            </ExpressionRunnerCaptionOnly>
            <P>
              We had been talking about lunchboxes in this course.{' '}
              <Highlight>
                But in reality, we actually were talking about{' '}
                <HighlightBold>lambda calculus</HighlightBold>.
              </Highlight>{' '}
              We used lunchboxes to make lambda calculus more approachable for
              non-programmers.
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="lambda" />,
                <CustomEmoji type="singleArrow" />,
                <Emoji>🍱</Emoji>
              ]}
              description={
                <>
                  We used lunchboxes to make
                  <br />
                  lambda calculus more approachable
                </>
              }
            />
          </>
        )
      },
      {
        title: <>Back to the villager’s question</>,
        content: (
          <>
            <P>Now, let’s revisit the villager’s question:</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        Is there any calculations that lunchboxes cannot do?
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <Bold>Earlier, we said that:</Bold>{' '}
              <Highlight>
                Lambda calculus works exactly like a lunchbox.
              </Highlight>
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="lambda" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>
              ]}
              description={
                <>
                  Lambda calculus works exactly like
                  <br />a lunchbox
                </>
              }
            />
            <P>
              So we can <Italic>rephrase</Italic> the above question as follows:
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        Is there any calculations that{' '}
                        <HighlightBold>lambda calculus</HighlightBold> cannot
                        do?
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <Bold>And here’s the answer:</Bold>{' '}
              <Highlight>
                Lambda calculus can do any calculations that can be done by
                today’s computers.
              </Highlight>{' '}
              Therefore, any calculations that your computer or smartphone can
              do are also possible for lambda calculus.
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="lambda" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>💻</Emoji>
              ]}
              description={
                <>
                  Lambda calculus can do
                  <br />
                  any calculations that can be
                  <br />
                  done by today’s computers.
                </>
              }
            />
            <P>
              <Bold>
                And because lunchboxes are the same as lambda calculus:
              </Bold>{' '}
              <Highlight>
                If something can be calculated by today’s computer, it can also
                be done using a lunchbox. <Emoji>🍱</Emoji>
              </Highlight>
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>So, to answer the villager’s question:</Bold>{' '}
                        <Emoji>🍱</Emoji> Lunchboxes can do any calculations
                        that can be done by today’s computers.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>💻</Emoji>
              ]}
              description={
                <>
                  Lunchboxes can also do
                  <br />
                  any calculations that can be
                  <br />
                  done by today’s computers.
                </>
              }
            />
          </>
        )
      },
      {
        title: <>Legacy of lambda calculus</>,
        content: (
          <>
            <P>
              Lambda calculus, invented by Alonzo Church in the 1930s, had a big
              impact in the evolution of modern computer science.
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="lambda" />,
                <CustomEmoji type="singleArrow" />,
                <Emoji>🍱</Emoji>
              ]}
              description={
                <>
                  Lambda calculus had a big impact
                  <br />
                  in the evolution of modern computer science
                </>
              }
            />
            <P>
              <Bold>Specifically:</Bold>{' '}
              <Highlight>
                Lambda calculus influenced many programming languages.
              </Highlight>{' '}
              Popular programming languages people use today usually have a
              feature inspired by lambda calculus.
            </P>
            <P>
              <Bold>Example:</Bold> <HighlightBold>Python</HighlightBold> is one
              of the most popular programming languages today, especially in the
              field of AI.
            </P>
            <EmojiSeparator
              emojis={['🐍', '🐍', '🐍']}
              description={<>Python Programming Language</>}
            />
            <P>
              The python language has a feature called{' '}
              <HighlightBold>“lambda”</HighlightBold>, which is inspired by
              lambda calculus.
            </P>
            <P>
              <Bold>Here’s an example of python’s “lambda” feature:</Bold> Take
              a look at the python code below (we’ll use{' '}
              <span css={pythonCss}>
                <Bold>green</Bold>
              </span>{' '}
              for Python code).
            </P>
            <CenteredCode python size="sm">
              (lambda A: A)('B')
            </CenteredCode>
            <P>
              The above python code is pretty much the same as the lambda
              calculus expression below:
            </P>
            <CenteredCode size="md">λA.A B</CenteredCode>
            <P>
              If we represent this using a lunchbox, the final result will be{' '}
              <Emoji>🅱️</Emoji>.
            </P>
            <R.Aklf>Because the bottom two are the same…</R.Aklf>
            <ExpressionRunnerSeparator />
            <R.Gemh>
              <Emoji>🅱️</Emoji> on the top remains
            </R.Gemh>
            <P>
              Similarly, if you run the earlier python code, the result will be{' '}
              <Code css={pythonCss}>'B'</Code> as well.
            </P>
            <CenteredCode python size="sm">
              (lambda A: A)('B')
            </CenteredCode>
            <ExpressionRunnerSeparator />
            <CenteredCode python size="sm">
              'B'
            </CenteredCode>
            <P>
              <Bold>Summary:</Bold>{' '}
              <Highlight>
                Today’s popular programming languages like Python have a feature
                inspired by lambda calculus.
              </Highlight>
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="lambda" />,
                <CustomEmoji type="singleArrow" />,
                <Emoji>🐍</Emoji>
              ]}
              description={
                <>
                  Popular programming languages
                  <br />
                  like Python have a feature
                  <br />
                  inspired by lambda calculus.
                </>
              }
            />
          </>
        )
      },
      {
        title: <>工夫すること</>,
        content: (
          <>
            <P>
              そろそろ終わりが近づいてきましたが、最後に「
              <Bold>コンピュータサイエンス＝計算機科学</Bold>
              」についてもう一言だけお話をさせてください。
            </P>
            <P>
              それは、
              <Highlight>
                「<HighlightBold>計算機を工夫すること</HighlightBold>
                」が、コンピュータサイエンスではとても大事
              </Highlight>
              というお話です。
            </P>
            <ExpressionRunnerCaptionOnly>
              <HighlightBold>重要:</HighlightBold> 計算機を工夫することが、
              <br />
              コンピュータサイエンスではとても大事
            </ExpressionRunnerCaptionOnly>
            <P>
              今回紹介したラムダ計算、すなわち弁当箱は、
              <Highlight>仕組みはとてもシンプルです</Highlight>
              。弁当箱の基本の法則は、初級その3〜5で紹介したように、非常にシンプルです。
            </P>
            <R.Zzxj>弁当箱の基本の法則は非常にシンプル</R.Zzxj>
            <ExpressionRunnerSeparator />
            <R.Keck />
            <ExpressionRunnerSeparator />
            <R.Qoms />
            <ExpressionRunnerSeparator />
            <R.Mhgm />
            <ExpressionRunnerSeparator />
            <R.Osqo />
            <P>
              しかし、こんなシンプルな弁当箱でも、現代のコンピュータが行えるすべての計算を行うことができるのです。
              <HighlightBold>
                それができる理由は、弁当箱を工夫すれば、四則演算や、条件分岐や、繰り返しを行うことができるからです。
              </HighlightBold>
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>➕</Emoji>,
                <Emoji>✖️</Emoji>,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="condition" />,
                <Emoji>🔁</Emoji>
              ]}
              description={
                <>
                  弁当箱を工夫すれば、四則演算や、
                  <br />
                  条件分岐や、繰り返しを行うことができる
                </>
              }
            />
            <P>
              たとえば今回紹介した通り、Yコンビネータの弁当箱を使えば、繰り返しを行うことができますよね。他にも工夫次第で、さまざまな計算を行うことができます。
            </P>
            <R.Rjho>
              「<HighlightBold>Yコンビネータ</HighlightBold>」の弁当箱を使えば
              <br />
              繰り返しを行うことができる
            </R.Rjho>
            <P>
              コンピュータサイエンスは、「
              <Highlight>
                計算機(コンピュータ)の作り方や使い方をどう工夫すれば、より効率的に問題を解けるのか
              </Highlight>
              」について考える学問です。
            </P>
            <P>
              そして、今回学んだ弁当箱は、
              <Highlight>
                シンプルでも工夫次第で複雑な計算ができる計算機です。
              </Highlight>
              そんな弁当箱には、
              <HighlightBold>
                コンピュータサイエンスのエッセンスが詰まっている
              </HighlightBold>
              と思うのです。
            </P>
            <EmojiSeparator
              emojis={['✨', '🍱', '✨']}
              description={
                <>
                  弁当箱は、シンプルでも工夫次第で
                  <br />
                  複雑な計算ができる計算機。だからこそ
                  <br />
                  コンピュータサイエンスのエッセンスが
                  <br />
                  詰まっている
                </>
              }
            />
          </>
        ),
        footer: {
          content: (
            <>
              <CardContent
                preview={{
                  text: <>プログラミングで試してみる</>,
                  content: (
                    <>
                      <P>
                        <Bold>ちなみに:</Bold> プログラマの方で、「
                        <Highlight>
                          Yコンビネータを実際にプログラミングで試してみたい
                        </Highlight>
                        」と思った方は、↓の「プログラミングで試してみる」を押してみてください。
                      </P>
                    </>
                  )
                }}
              >
                <Hr />
                <P>
                  下のコードは、
                  <Highlight>
                    JavaScriptでYコンビネータを使って「
                    <EmojiNumber number={4} /> の階乗」、すなわち{' '}
                    <EmojiNumber number={4} /> <Emoji>✖️</Emoji>{' '}
                    <EmojiNumber number={3} /> <Emoji>✖️</Emoji>{' '}
                    <EmojiNumber number={2} /> <Emoji>✖️</Emoji>{' '}
                    <EmojiNumber number={1} /> を計算するコード
                  </Highlight>
                  です。
                </P>
                <Pre>
                  <Code
                    children={`console.log(
  (a =>
    (b => a(c => b(b)(c)))(b =>
      a(c => b(b)(c))
    ))(f => n =>
    n === 0 ? 1 : n * f(n - 1)
  )(4)
)`}
                  ></Code>
                </Pre>
                <P>
                  上のコードをブラウザの開発者ツールにコピーして実行すると、「
                  <EmojiNumber number={4} /> の階乗」である「
                  <Code>24</Code>
                  」が出力されます。また、下から2行目にある <Code>4</Code>{' '}
                  をたとえば <Code>5</Code> に変えると、
                  <EmojiNumber number={5} /> の階乗である「<Code>120</Code>
                  」が出力されます。
                </P>
                <P>
                  ふつう、JavaScriptで階乗を計算するには <Code>for</Code> や{' '}
                  <Code>while</Code> といったループ機能、<Code>reduce</Code>{' '}
                  といった関数、または関数の再帰を使います。しかし、
                  <Highlight>
                    Yコンビネータを使えば、それらを一切使わずに階乗を計算できる
                  </Highlight>
                  のです。
                </P>
              </CardContent>
            </>
          )
        }
      },
      {
        title: <>コンピュータサイエンスの他の分野でも同じ</>,
        content: (
          <>
            <P>
              今回は時間の都合で、たくさんあるコンピュータサイエンスの題材のうち、ラムダ計算(弁当箱)しか紹介できませんでした。
            </P>
            <P>
              とはいえ、コンピュータサイエンスの他の分野を学ぶときも、やることは弁当箱のときと同じです。なぜならどの分野でも、弁当箱のように「
              <Highlight>
                計算機(コンピュータ)を<HighlightBold>工夫して</HighlightBold>
                、問題を解く」ことが大事になってくるからです。
              </Highlight>
            </P>
            <P>
              コンピュータサイエンスのどの分野でも、
              <HighlightBold>キーワードは「工夫」</HighlightBold>
              なのです。たとえば、「
              <Highlight>
                コンピュータを<HighlightBold>どう工夫して</HighlightBold>
                使えば、美しいCGや、人工知能や、仮想通貨が作れるだろう？
              </Highlight>
              」といった感じですね。
            </P>
            <EmojiSeparator
              emojis={['✨', '🤖', '💰']}
              description={
                <>
                  コンピュータをどう工夫して使えば、
                  <br />
                  美しいCGや、人工知能や、
                  <br />
                  仮想通貨が作れるだろう？
                </>
              }
            />
            <P>
              長くなりましたが、本稿を読んで、「
              <Highlight>
                コンピュータサイエンスの他の分野でも、コンピュータの工夫の仕方を学んでみたい
              </Highlight>
              」と思ってくだされば嬉しいです。
            </P>
          </>
        )
      },
      {
        type: 'summary',
        title: <>まとめ</>,
        content: (
          <>
            <P>本稿で学んだことを短くまとめると、以下のようになります。</P>
            <Ol>
              <OlLi>
                <Highlight>
                  弁当箱は、工夫次第で四則演算や、条件分岐や、繰り返しといった複雑な計算ができる。また、繰り返しを行う弁当箱を
                  <HighlightBold>Yコンビネータ</HighlightBold>と呼ぶ。
                </Highlight>
              </OlLi>
              <OlLi>
                <Highlight>
                  弁当箱は、1930年代に考案された空想上の計算機「ラムダ計算」が基になっている。ラムダ計算は、現代のコンピュータが行えるすべての計算を行うことができ、また多くのプログラミング言語に影響を与えた。
                </Highlight>
              </OlLi>
              <OlLi>
                <Highlight>
                  コンピュータサイエンスは「
                  <HighlightBold>
                    計算機(コンピュータ)をどう工夫して問題を解くか
                  </HighlightBold>
                  」を考える学問。工夫次第で複雑な計算ができる弁当箱には、そのエッセンスが詰まっている。
                </Highlight>
              </OlLi>
            </Ol>
            <EmojiSeparator emojis={['✨', '🍱', '✨']} />
          </>
        )
      }
    ]}
  />
)
