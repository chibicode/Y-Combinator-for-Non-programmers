import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  HighlightBold,
  Bold,
  Italic,
  Highlight,
  ExternalLink,
  Img,
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

export const WhatIsComputer = () => (
  <>
    <P>
      <Bold>
        Before we talk about computer science, let’s ask ourselves this
        question:
      </Bold>{' '}
      <Italic>“What is a computer?”</Italic>
    </P>
    <EmojiSeparator
      emojis={['🤔', '💻', '❓']}
      description={<>What is a computer?</>}
    />
    <P>
      If you see the word “computer”, you might think about:{' '}
      <Italic>a desktop/laptop computer, smartphone, or even a robot.</Italic>
    </P>
    <EmojiSeparator emojis={['💻', '📱', '🤖']} />
    <P>
      <Bold>However:</Bold>{' '}
      <Highlight>
        A computer, at its core, is a <Bold>computing device</Bold>. It’s a
        device that can <Italic>compute</Italic>.
      </Highlight>
    </P>
    <EmojiSeparator
      emojis={['➕', '✖️', '💻', '➖', '➗']}
      description={
        <>
          A computer, at its core, is a<br />
          <Bold>computing device</Bold>.
        </>
      }
    />
    <P>
      Computers can search for information quickly, draw beautiful graphics,
      recognize faces, or have conversations with humans.{' '}
    </P>
    <P>
      <Bold>
        This is possible because computers can do a large amount of computations
        very quickly:
      </Bold>{' '}
      Search engines do a lot of computations to rank search results. Face
      recognition engines do a lot of computations to process image data.
    </P>
    <EmojiSeparator
      emojis={['🔢', '🔢', '💻', '🔢', '🔢']}
      description={
        <>
          Computers can do a large amount of
          <br />
          computations very quickly
        </>
      }
    />
    <P>
      This is why a computer, at its core, is a <Bold>computing device.</Bold>
    </P>
  </>
)

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
              To answer that question,{' '}
              <Highlight>
                we need to talk briefly about the history of computing.
              </Highlight>
            </P>
            <EmojiSeparator
              emojis={['📜', '🧐', '📚']}
              description={
                <>
                  We need to talk about
                  <br />
                  the history of computing
                </>
              }
            />
            <P>
              <Bold>So:</Bold> Let’s talk about history! We’ll come back to the
              original question later.
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <Bold>Note:</Bold> We’ll talk about the history of computing and
                computer science in an{' '}
                <Highlight>extremely simplified way</Highlight>, in order to
                make it easier to understand for non-technical people.
              </P>
              <P>
                So if you’re a history nerd, you might be angry at me for not
                being comprehensive. Hope you understand that it was a tough
                tradeoff.
              </P>
            </>
          )
        }
      },
      {
        title: <>What is a computer?</>,
        content: (
          <>
            <WhatIsComputer />
          </>
        )
      },
      {
        title: <>History of computers</>,
        content: (
          <>
            <P>
              Let’s now talk about the history of computers, or computing
              devices!
            </P>
            <P>
              One of the key breakthroughs in the history of computers is the{' '}
              <Bold>tabulating machine</Bold>, which was invented in the 1880s
              in the United States.
            </P>
            <P>
              <Img
                src="/static/images/Hollerith_census_machine_at_the_Computer_History_Museum.jpg"
                alt="Hollerith_census_machine_at_the_Computer_History_Museum"
                size="medium"
                caption={
                  <>
                    The tabulating machine on display at Computer History Museum
                    in Silicon Valley, California. (
                    <ExternalLink href="https://commons.wikimedia.org/wiki/File:Hollerith_census_machine_at_the_Computer_History_Museum.jpg">
                      Photo: Anton Chiang, CC BY 2.0
                    </ExternalLink>
                    )
                  </>
                }
              />
            </P>
            <P>
              <Bold>Tabulating machines</Bold> were computing devices designed
              to help process data for the 1890s U.S. Census. It summarized
              information stored on punched cards. It’s kind of like Microsoft
              Excel or Google Spreadsheets.
            </P>
            <EmojiSeparator
              emojis={['📈', '📊', '📉']}
              description={
                <>
                  Tabulating machines were computing devices to
                  <br />
                  process data for the 1890s U.S. Census
                </>
              }
            />
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <Bold>Side Note:</Bold> Herman Hollerith, who invented
                tabulating machines, later founded a company that became part of
                IBM. IBM continued to develop better tabulating machines, and
                eventually became the top computer company in 1960s.
              </P>
            </>
          )
        }
      },
      {
        title: <>History of computer science</>,
        content: (
          <>
            <P>
              In the 20th century, computers evolved from tabulating machines to
              digital computers.
            </P>
            <EmojiSeparator
              emojis={['✨', '💻', '✨']}
              description={<>Computers kept evolving in the 20th century</>}
            />
            <P>
              Also in the 20th century, <Bold>Computer Science</Bold>, which is
              the study of computing and computers, started to emerge.
            </P>
            <P>
              <Bold>Computer scientists asked themselves this question:</Bold>{' '}
              <Highlight>
                How can we improve the way we build or use computers so that, we
                can solve computing problems more efficiently?
              </Highlight>
            </P>
            <EmojiSeparator
              emojis={['💻', '🤔', '💻']}
              description={
                <>
                  <Bold>An important question in computer science:</Bold>
                  <br />
                  How can we improve the way we build
                  <br />
                  or use computers so that, we can solve
                  <br />
                  computing problems more efficiently?
                </>
              }
            />
            <P>
              And there were two famous computer scientists who built
              foundations of modern computer science. One was{' '}
              <Bold>Alan Turing</Bold> <Emoji>🧑🏻</Emoji> from the United
              Kingdom, and the other was <Bold>Alonzo Church</Bold>{' '}
              <Emoji>👨🏻‍🦳</Emoji> from the United States.
            </P>
            <EmojiSeparator
              emojis={['🧑🏻', '👨🏻‍🦳']}
              description={
                <>
                  The research done by <Bold>Alan Turing</Bold> and
                  <br />
                  <Bold>Alonzo Church</Bold> became the foundation of
                  <br />
                  modern computer science
                </>
              }
            />
          </>
        )
      },
      {
        title: <>A hypothetical computer</>,
        content: (
          <>
            <P>
              <Bold>In the 1930s,</Bold> Alan Turing and Alonzo Church were both
              working (separately) on a very difficult math problem called{' '}
              <Italic>“Hilbert’s decision problem”</Italic>.{' '}
            </P>
            <P>
              We won’t talk about what this problem is about - it’s too
              difficult to explain. However, we’ll talk briefly about{' '}
              <Highlight>how Turing and Church solved this problem</Highlight>,
              which is very interesting.
            </P>
            <EmojiSeparator
              emojis={['🧑🏻', '❓', '👨🏻‍🦳']}
              description={
                <>
                  <Bold>Turing</Bold> and <Bold>Church</Bold> worked on
                  <br />a difficult math problem separately
                </>
              }
            />
            <P>
              In order to solve this problem, Turing and Church both came up
              with an idea of a{' '}
              <HighlightBold>hypothetical computer</HighlightBold>. A{' '}
              <Bold>hypothetical computer</Bold> is{' '}
              <Highlight>
                an imaginary computing device that doesn’t exist in real life
              </Highlight>{' '}
              (at least in the 1930s),{' '}
              <Highlight>but if it did exist, it’s very powerful.</Highlight>
            </P>
            <EmojiSeparator
              emojis={['❓', '💭', '💻', '❓']}
              description={
                <>
                  A <HighlightBold>hypothetical computer</HighlightBold> is
                  <br />a powerful but imaginary computing device
                </>
              }
            />
            <P>
              <Bold>Then:</Bold> Turing and Church each solved{' '}
              <Italic>Hilbert’s decision problem</Italic> by using this
              hypothetical computer as part of the proof.
            </P>
            <EmojiSeparator emojis={['🧑🏻', '💭', '💻']} noBottomMargin />
            <EmojiSeparator
              emojis={['👨🏻‍🦳', '💭', '💻']}
              noTopMargin
              description={
                <>
                  They solved <Italic>Hilbert’s decision problem</Italic>
                  <br />
                  by using a hypothetical computer
                  <br />
                  as part of the proof
                </>
              }
            />
            <P>
              <Bold>Now, here’s the important point:</Bold>{' '}
              <Highlight>
                The hypothetical computers Turing and Church imagined became
                very influential in the development of modern computers and
                programming languages.
              </Highlight>
            </P>
            <P>
              <Bold>In other words:</Bold> They were solving{' '}
              <Italic>Hilbert’s decision problem</Italic>, but{' '}
              <Highlight>the method they used</Highlight> - using a hypothetical
              computer - accidentally became the foundation of modern computer
              science.
            </P>
            <Hr />
            <P>
              <Bold>Next:</Bold> Let’s talk about what those hypothetical
              computers are.
            </P>
            <P>
              In 1930s, <Bold>Alan Turing</Bold> came up with an idea of a
              hypothetical computer called a{' '}
              <HighlightBold>Turing machine.</HighlightBold> He used this Turing
              machine in his solution to{' '}
              <Italic>Hilbert’s decision problem</Italic>.
            </P>
            <P>
              We won’t talk about how a Turing machine works here (you should
              search on Google), but we’ll say this:{' '}
              <Highlight>
                A Turing machine is very similar to modern computers, and
                therefore was very influential in the evolution of modern
                computer science.
              </Highlight>
            </P>
            <EmojiSeparator
              emojis={['🧑🏻', '💭', '💻']}
              description={
                <>
                  Turing came up with a{' '}
                  <HighlightBold>Turing machine</HighlightBold>,<br />
                  a hypothetical computer that’s similar to
                  <br />
                  modern computers. He used this to
                  <br />
                  solve <Italic>Hilbert’s decision problem</Italic>.
                </>
              }
            />
            <P>
              Around the same time, <Bold>Alonzo Church</Bold> came up with a{' '}
              <Italic>different</Italic> hypothetical computer called{' '}
              <HighlightBold>Lambda Calculus.</HighlightBold> He used Lambda
              Calculus in his solution to{' '}
              <Italic>Hilbert’s decision problem</Italic>.
            </P>
            <EmojiSeparator
              emojis={['👨🏻‍🦳', '💭', '💻']}
              description={
                <>
                  Church came up with{' '}
                  <HighlightBold>Lambda Calculus</HighlightBold>,<br />
                  a hypothetical computer. He used this to
                  <br />
                  solve <Italic>Hilbert’s decision problem</Italic>.
                </>
              }
            />
            <P>
              <Bold>Now, here’s the question:</Bold>{' '}
              <Highlight>How does Lambda Calculus work?</Highlight>
            </P>
            <P>
              <Bold>In fact, you already know the answer:</Bold>{' '}
              <Highlight>
                Lambda Calculus works exactly like the <Bold>lunchboxes</Bold>{' '}
                we’ve seen so far <Emoji>🍱</Emoji>.
              </Highlight>
            </P>
            <EmojiSeparator
              emojis={['👨🏻‍🦳', '💭', '🍱']}
              description={
                <>
                  Church’s <Bold>Lambda Calculus</Bold> works
                  <br />
                  exactly like <HighlightBold>lunchboxes!</HighlightBold>{' '}
                  <Emoji>🍱</Emoji>
                </>
              }
            />
          </>
        )
      },
      {
        title: <>Lambda Calculus and Lunchboxes</>,
        content: (
          <>
            <P>
              <Bold>Lambda Calculus</Bold>, Church’s hypothetical computer,
              works exactly like a lunchbox - although they{' '}
              <Italic>look</Italic> different.
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="lambda" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>
              ]}
              description={
                <>
                  Lambda Calculus works exactly like
                  <br />a lunchbox
                </>
              }
            />
            <P>
              <Bold>Here is an example of lambda calculus.</Bold> The leftmost
              letter, <HighlightBold>λ</HighlightBold>, is a Greek letter
              “lambda”.
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
              <Bold>Similarly:</Bold> If you compute the earlier lambda calculus
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
                The previous lambda expression is{' '}
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
                But in reality, we really were talking about{' '}
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
                Lunchboxes are actually the same as lambda calculus.
              </Highlight>{' '}
              So we can rephrase the above question as follows:
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
              <Bold>In 1930s, it was proven that:</Bold>{' '}
              <Highlight>
                No matter how powerful the computers become, anything they can
                compute will also be computable by lambda calculus
              </Highlight>
              .
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="lambda" />,
                <Emoji>🆚</Emoji>,
                <Emoji>💻</Emoji>
              ]}
              description={
                <>
                  <Bold>Proven in 1930s:</Bold>
                  <br />
                  No matter how powerful
                  <br />
                  the computers become,
                  <br />
                  anything they can compute will
                  <br />
                  also be computable by lambda calculus
                </>
              }
            />
            <P>
              <Bold>
                And because lunchboxes are the same as lambda calculus:
              </Bold>{' '}
              <Highlight>
                If something can be calculated by today’s computer, it can also
                be done using a lunchbox.
              </Highlight>
            </P>
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
        ),
        footer: {
          content: (
            <>
              <P>
                <Bold>Note:</Bold> Like lambda calculus, Turing’s Turing machine
                can also do any computations that a computer can do.
              </P>
            </>
          )
        }
      },
      {
        title: <>ラムダ計算の影響</>,
        content: (
          <>
            <P>
              先ほど説明したように、ラムダ計算はもともと、とある数学の問題を解くためにチャーチが考案したものでした。しかし、ラムダ計算もまた、
              <Highlight>
                コンピュータサイエンスの発展に大きな影響を与えた
              </Highlight>
              のです。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>✨</Emoji>,
                <CustomEmoji type="lambda" />,
                <Emoji>✨</Emoji>
              ]}
              description={
                <>
                  ラムダ計算は、コンピュータサイエンスの
                  <br />
                  発展に大きな影響を与えた
                </>
              }
            />
            <P>
              特に、ラムダ計算は
              <HighlightBold>数々のプログラミング言語</HighlightBold>
              に影響を与えました。現存するプログラミング言語の多くには、ラムダ計算の名残が残っています。
            </P>
            <P>
              たとえば、執筆時点で世界で最も人気のプログラミング言語のひとつである、
              <HighlightBold>Python (パイソン)</HighlightBold>
              という言語があります。ちなみにパイソンとは大蛇のことで、Python言語のロゴにもヘビの絵が描かれています。
            </P>
            <EmojiSeparator
              emojis={['🐍', '🐍', '🐍']}
              description={<>Python言語</>}
            />
            <P>
              このPython言語にも、「<HighlightBold>lambda</HighlightBold>{' '}
              (ラムダ)」という機能があります。たとえば、以下のPython言語のコードをご覧ください。
            </P>
            <CenteredCode size="sm">(lambda A: A)('B')</CenteredCode>
            <P>
              上のPython言語のコードは、以下のラムダ計算とほぼ同じ意味です。
            </P>
            <CenteredCode size="md">λA.A B</CenteredCode>
            <P>
              これは、弁当箱に例えると以下のようになり、実行結果は{' '}
              <Emoji>🅱️</Emoji> になります。
            </P>
            <R.Aklf>下が左右とも同じなので…</R.Aklf>
            <ExpressionRunnerSeparator />
            <R.Gemh>
              上にあった <Emoji>🅱️</Emoji> が残る
            </R.Gemh>
            <P>
              だから同じように、今回紹介したPythonのコードも、実行すると結果は{' '}
              <Code>B</Code> になります。
            </P>
            <CenteredCode size="sm">(lambda A: A)('B')</CenteredCode>
            <ExpressionRunnerSeparator />
            <CenteredCode size="sm">'B'</CenteredCode>
            <P>
              まとめると、
              <Highlight>
                Python言語のような人気のプログラミング言語も、1930年代に考えられたラムダ計算の影響を間接的に受けている
              </Highlight>
              のです。
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="lambda" />,
                <CustomEmoji type="singleArrow" />,
                <Emoji>🐍</Emoji>
              ]}
              description={
                <>
                  Python言語のような
                  <br />
                  人気のプログラミング言語も、
                  <br />
                  1930年代に考えられた
                  <br />
                  ラムダ計算の影響を間接的に受けている
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
