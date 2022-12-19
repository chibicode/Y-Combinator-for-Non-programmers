/** @jsx jsx */
import { css, jsx } from '@emotion/react'
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
  Hr,
  Ul,
  UlLi
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
import * as R from 'src/components/Runners'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import CardContent from 'src/components/CardContent'
import { colors } from 'src/lib/theme'
import { Conclusion } from 'src/contents/15.en'
import { JimsTalk } from 'src/contents/0.en'

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
            <EmojiSeparator
              emojis={['🎉', '🤗', '🎉']}
              description={<>This is the final page!</>}
            />
          </>
        )
      },
      {
        title: <>Who invented lunchboxes?</>,
        content: (
          <>
            <P>
              In the last page, a villager from Lambda Village asked the
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
                          Are there any calculations that lunchboxes cannot do?
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
              <Bold>Answer:</Bold>{' '}
              <Highlight>
                Lunchboxes were invented in the 1930s by a mathematician{' '}
                <Bold>Alonzo Church</Bold>.
              </Highlight>
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
              it a “lunchbox” when he invented it. Instead, he called it “
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
                  instead of a “lunchbox”
                </>
              }
            />
            <P>Let’s now talk about lambda calculus.</P>
          </>
        )
      },
      {
        title: <>Lambda calculus and lunchboxes</>,
        content: (
          <>
            <P>
              <Bold>Lambda calculus</Bold>, invented by Alonzo Church, works
              exactly like a lunchbox—although they <Italic>look</Italic>{' '}
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
              letter, <HighlightBold>λ</HighlightBold>, is a Greek letter “
              <Italic>lambda</Italic>”. That’s why it’s called “
              <Italic>lambda calculus.</Italic>”
            </P>
            <CenteredCode size="md">λA.B C</CenteredCode>
            <P>
              <Highlight>
                The above lambda calculus expression is exactly the same as the
                following lunchbox:
              </Highlight>
            </P>
            <CenteredCode size="md">λA.B C</CenteredCode>
            <ExpressionRunnerSeparator />
            <R.Kzkg>
              The above lambda calculus expression is
              <br />
              exactly the same as this lunchbox:
            </R.Kzkg>
            <P>
              If you run the above lunchbox, it will become <Emoji>🅱️</Emoji>.{' '}
              <H args={{ name: 'pressRun' }} />
            </P>
            <R.Unxf></R.Unxf>
            <P>
              <Bold>Similarly:</Bold> If you “run” the earlier lambda calculus
              expression,{' '}
              <Highlight>
                the result will also be <Code>B</Code>.
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
              We have been talking about lunchboxes in this course.{' '}
              <Highlight>
                But we really were talking about{' '}
                <HighlightBold>lambda calculus</HighlightBold>.
              </Highlight>{' '}
              I invented lunchboxes to make lambda calculus more approachable
              for non-programmers.
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="lambda" />,
                <CustomEmoji type="singleArrow" />,
                <Emoji>🍱</Emoji>
              ]}
              description={
                <>
                  I invented lunchboxes to make
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
                        Are there any calculations that lunchboxes cannot do?
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
                        Are there any calculations that{' '}
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
                  done by today’s computers
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
                  Lunchboxes can do
                  <br />
                  any calculations that can be
                  <br />
                  done by today’s computers
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
                <Emoji>💻</Emoji>
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
              Today’s popular programming languages usually have a feature that
              originated from lambda calculus.
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
              <HighlightBold>“lambda”</HighlightBold>, which is similar to
              lambda calculus.
            </P>
            <P>
              <Bold>Here’s an example of python’s “lambda” feature:</Bold> Take
              a look at the Python code below (we’ll use{' '}
              <span css={pythonCss}>
                <Bold>green</Bold>
              </span>{' '}
              for the Python code).
            </P>
            <CenteredCode python size="sm">
              (lambda A: A)('B')
            </CenteredCode>
            <P>
              The above Python code is pretty much the same as the lambda
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
              Similarly, if you run the earlier Python code, the result will be{' '}
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
                that originated from lambda calculus.
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
                  that originated from lambda calculus
                </>
              }
            />
          </>
        )
      },
      {
        title: <>Building a complex thing from simple things</>,
        content: (
          <>
            <P>
              We’re almost done, but let me say a few things about computer
              science and Y Combinator.
            </P>
            <Hr />
            <P>
              <Bold>One of the most important ideas in computer science</Bold>{' '}
              is to{' '}
              <Highlight>build a complex thing from simple things.</Highlight>{' '}
              After all, computers are made of very simple things: 0’s and 1’s.
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="zeroOne" />,
                <CustomEmoji type="singleArrow" />,
                <Emoji>💻</Emoji>
              ]}
              description={
                <>
                  <Bold>
                    One of the most important ideas
                    <br />
                    in computer science:
                  </Bold>
                  <br />
                  <Highlight>
                    Build a complex thing from
                    <br />
                    simple things
                  </Highlight>
                </>
              }
            />
            <P>
              In this course, we learned about lunchboxes (or lambda calculus).{' '}
              And <Highlight>lunchboxes are simple</Highlight>. There are only a
              few rules you need to know:
            </P>
            <R.Zzxj>
              <Bold>Lunchboxes are simple:</Bold>
              <br />
              There are only a few rules
              <br />
              you need to know
            </R.Zzxj>
            <ExpressionRunnerSeparator />
            <R.Keck />
            <ExpressionRunnerSeparator />
            <R.Qoms />
            <ExpressionRunnerSeparator />
            <R.Mhgm />
            <ExpressionRunnerSeparator />
            <R.Osqo />
            <P>
              <Bold>But we learned that:</Bold> Even though lunchboxes are very
              simple, they can do any calculations that can be done by today’s
              computers.
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>💻</Emoji>
              ]}
              description={
                <>
                  Lunchboxes can do
                  <br />
                  any calculations that can be
                  <br />
                  done by today’s computers
                </>
              }
            />
            <P>
              <Bold>Why is that possible?</Bold> Because, as we’ve seen so far,{' '}
              <Highlight>
                by combining simple lunchboxes, you can build a complex lunchbox
                that can do complex calculations.
              </Highlight>
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="fourLunchboxes" />,
                <CustomEmoji type="singleArrow" />,
                <CustomEmoji type="complexCalculations" />
              ]}
              description={
                <>
                  By combining simple lunchboxes,
                  <br />
                  you can build a complex lunchbox
                  <br />
                  that can do complex calculations
                </>
              }
            />
            <P>
              <Bold>For example:</Bold> We learned that we can use the{' '}
              <HighlightBold>Y Combinator</HighlightBold> lunchbox to do complex
              calculations like factorials.
            </P>
            <Conclusion />
            <P>
              <Bold>Again:</Bold> Computer science is all about building a
              complex thing from simple things.{' '}
              <Highlight>
                I think lunchboxes—especially Y Combinator—are a great example
                of this idea.
              </Highlight>
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="fourLunchboxes" />,
                <CustomEmoji type="singleArrow" />,
                <CustomEmoji type="complexCalculations" />
              ]}
              description={
                <>
                  Computer science is all about
                  <br />
                  building a complex thing from simple things.
                  <br />
                  Lunchboxes and Y Combinator are
                  <br />a great example of this idea.
                </>
              }
            />
            <P>
              We didn’t have time to talk about any other topics in computer
              science.{' '}
              <Highlight>
                But in every sub-field of computer science, you’ll learn to
                build a complex thing from simple things.
              </Highlight>
            </P>
            <P>
              <Bold>For example</Bold>: If you study artificial intelligence,
              you’ll learn to build a <Bold>“neural network”</Bold>{' '}
              <Emoji>🧠</Emoji>—a complex thing that can be used to process
              images—by combining simple things called <Bold>“neurons”</Bold>{' '}
              <CustomEmoji type="nodes" />.
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="nodes" />,
                <CustomEmoji type="singleArrow" />,
                <Emoji>🧠</Emoji>
              ]}
              description={
                <>
                  In AI, you’ll learn to build
                  <br />a <Bold>neural network</Bold> (a complex thing)
                  <br />
                  using <Bold>neurons</Bold> (a simple thing)
                </>
              }
            />
            <P>
              <Bold>
                Hopefully, this course gave you an idea of what learning
                computer science is like.
              </Bold>{' '}
              If you do end up learning computer science, you’ll be surprised
              that{' '}
              <Highlight>
                most innovative ideas in computer science are based on lots of
                simple ideas.
              </Highlight>
            </P>
          </>
        )
      },
      {
        type: 'summary',
        title: <>Conclusion</>,
        content: (
          <>
            <P>Here’s a quick summary of what we learned in this course:</P>
            <Ol>
              <OlLi>
                <Highlight>
                  <Emoji>🍱</Emoji> <Bold>Lunchboxes</Bold> are simple, but by
                  combining them, you can create a lunchbox that can do complex
                  calculations.
                </Highlight>
              </OlLi>
              <OlLi>
                <Highlight>
                  <Bold>Y Combinator</Bold> is a special kind of a lunchbox that
                  allows you to <Emoji>🔁</Emoji> <Bold>repeat</Bold> any
                  calculations.
                </Highlight>
              </OlLi>
              <OlLi>
                <Highlight>
                  Lunchboxes are the same thing as <Bold>lambda calculus</Bold>
                </Highlight>
                , which was invented in the 1930s and influenced many
                programming languages.
              </OlLi>
              <OlLi>
                <Highlight>
                  <Bold>Computer science</Bold> is all about building a complex
                  thing from simple things.
                </Highlight>{' '}
                Lunchboxes—especially Y Combinator—are a great example of this.
              </OlLi>
            </Ol>
            <EmojiSeparator emojis={['✨', '🍱', '✨']} />
            <P>
              That’s it for this course! <Emoji>🤗</Emoji>
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <CardContent
                preview={{
                  text: <>Test Y Combinator in devtools</>,
                  content: (
                    <>
                      <P>
                        <Bold>If you’re a programmer</Bold> and are interested
                        in trying out the{' '}
                        <HighlightBold>Y Combinator</HighlightBold> program,
                        press “Test Y Combinator in devtools” below.
                      </P>
                      <P>
                        <Emoji>⚠️</Emoji>{' '}
                        <Highlight>
                          You need to be on a desktop browser though—you can’t
                          do it on a smartphone.
                        </Highlight>
                      </P>
                    </>
                  )
                }}
              >
                <Hr />
                <P>
                  The JavaScript code below uses Y Combinator to calculate the{' '}
                  <HighlightBold>
                    factorial of <EmojiNumber number={4} />
                  </HighlightBold>
                  , which is equal to <EmojiNumber number={4} />{' '}
                  <Emoji>✖️</Emoji> <EmojiNumber number={3} /> <Emoji>✖️</Emoji>{' '}
                  <EmojiNumber number={2} /> <Emoji>✖️</Emoji>{' '}
                  <EmojiNumber number={1} />.
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
                <Ul>
                  <UlLi>
                    <Bold>
                      Run the above code on your desktop browser’s developer
                      tools
                    </Bold>
                    , and{' '}
                    <Highlight>
                      it will show <Code>24</Code>
                    </Highlight>
                    , which is the factorial of <EmojiNumber number={4} />.
                  </UlLi>
                  <UlLi>
                    <Bold>Also:</Bold> If you change the <Code>4</Code> on the
                    bottom to <Code>5</Code> and run it, it will calculate the
                    factorial of <EmojiNumber number={5} />, which is{' '}
                    <Code>120</Code>.
                  </UlLi>
                </Ul>
                <P>
                  To calculate the factorial of a number in JavaScript, you’d
                  usually use loops like <Code>for</Code>, <Code>while</Code>,
                  or <Code>reduce</Code>. Or you might use recursion.
                </P>
                <P>
                  <Highlight>
                    However, the above code does not use any of them because it
                    uses Y Combinator.
                  </Highlight>{' '}
                  Interesting, right?
                </P>
                <Hr />
                <JimsTalk />
              </CardContent>
            </>
          )
        }
      }
    ]}
  />
)
