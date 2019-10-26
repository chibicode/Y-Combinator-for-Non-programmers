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
                programming languages
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
                therefore was very influential in modern computer science.
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
        title: <>ラムダ計算と弁当箱</>,
        content: (
          <>
            <P>
              チャーチが考えた空想上の計算機「
              <HighlightBold>ラムダ計算</HighlightBold>
              」は、
              <Highlight>見た目は弁当箱とは違いますが、仕組みは同じ</Highlight>
              でした。
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="lambda" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>
              ]}
              description={<>ラムダ計算。弁当箱と仕組みは同じ</>}
            />
            <P>
              たとえば、こちらが「<Bold>ラムダ計算</Bold>
              」の記述式です。一番左にある「<HighlightBold>λ</HighlightBold>
              」の記号はギリシャ文字で「
              <HighlightBold>ラムダ</HighlightBold>
              」と呼ぶことから、「ラムダ計算」と呼ばれています。
            </P>
            <CenteredCode size="md">λA.B C</CenteredCode>
            <P>
              上のラムダ計算の記述式は、以下の弁当箱とまったく同じことを表しています。
            </P>
            <R.Kzkg>
              上のラムダ計算の記述式は、
              <br />
              この弁当箱とまったく同じ
            </R.Kzkg>
            <P>
              上の弁当箱は、
              <H args={{ name: 'run' }} /> すると <Emoji>🅱️</Emoji> になります。
              <H args={{ name: 'pressRun' }} />
            </P>
            <R.Unxf></R.Unxf>
            <P>
              <Highlight>
                それと同じで、先ほどの「ラムダ計算」の記述式も、
                <H args={{ name: 'run' }} /> すると
                <HighlightBold>B</HighlightBold>が残るのです。
              </Highlight>
            </P>
            <CenteredCode size="md">λA.B C</CenteredCode>
            <ExpressionRunnerSeparator />
            <CenteredCode size="md">B</CenteredCode>
            <P>
              もちろん、もっと複雑なラムダ計算の記述式もあります。たとえば、こちらをご覧ください。この記述式は、何を表しているか分かりますか？
            </P>
            <CenteredCode size="sm">λA.(λB.A(B B))(λB.A(B B))</CenteredCode>
            <P>これを弁当箱にすると、次のようになります。</P>
            <R.Rjho></R.Rjho>
            <P>
              もし <Emoji>🅰️</Emoji> に<EmojiWithText letter="a" /> を、
              <Emoji>🅱️</Emoji> に<EmojiWithText letter="b" /> を当てはめると、
              <HighlightBold>
                上級編で登場したYコンビネータの弁当箱
              </HighlightBold>
              になります。
            </P>
            <R.Xjzx>
              <Emoji>🅰️</Emoji> に<EmojiWithText letter="a" /> を、
              <br />
              <Emoji>🅱️</Emoji> に<EmojiWithText letter="b" /> を当てはめると、
              <br />
              Yコンビネータの弁当箱になる
            </R.Xjzx>
            <P>
              つまり、先ほどのラムダ計算の記述式は
              <HighlightBold>Yコンビネータを表している</HighlightBold>
              のです。
            </P>
            <CenteredCode size="sm">λA.(λB.A(B B))(λB.A(B B))</CenteredCode>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              <HighlightBold>Yコンビネータを表している</HighlightBold>
            </ExpressionRunnerCaptionOnly>
            <P>
              まとめると、本稿では、
              <HighlightBold>
                実はみなさんにラムダ計算を教えていたのです。
              </HighlightBold>
              <Highlight>
                ラムダ計算の記述式は見た目が複雑なので、
                <H args={{ name: 'bentoBoxPuzzle' }} />
                という形で教えることで、とっつきやすくしていた
              </Highlight>
              というわけですね。
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="lambda" />,
                <CustomEmoji type="singleArrow" />,
                <Emoji>🍱</Emoji>
              ]}
              description={
                <>
                  本稿では、実はラムダ計算を教えていた。
                  <br />
                  ラムダ計算の記述式は見た目が複雑なので、
                  <br />
                  <H args={{ name: 'bentoBoxPuzzle' }} />
                  という形で教える
                  <br />
                  ことで、とっつきやすくしていた。
                </>
              }
            />
            <P>
              そして繰り返しますが、このラムダ計算は、1930年代に考えられた「
              <HighlightBold>空想上の計算機</HighlightBold>」というわけです。
            </P>
          </>
        )
      },
      {
        title: <>村人の質問に戻ると…</>,
        content: (
          <>
            <P>ここで、ラムダ村の村人の質問に戻りましょう。</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>弁当箱にできない計算はあるのかな？</P>
                    </>
                  )
                }
              ]}
            />
            <P>
              先ほど、「<HighlightBold>弁当箱とラムダ計算は同じ</HighlightBold>
              」という話をしましたね。つまり、上の質問は以下のように言い換えることができます。
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <HighlightBold>ラムダ計算にできない計算</HighlightBold>
                        はあるのかな？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>では、ラムダ計算にできない計算はあるのでしょうか？</P>
            <P>
              結論から言うと、
              <HighlightBold>
                ラムダ計算は、現代のコンピュータが行うことができるすべての計算を行うことができます。
              </HighlightBold>
              つまり、あなたのパソコンやスマホができる計算はすべて、ラムダ計算にもできるということです。
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="lambda" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>💻</Emoji>
              ]}
              description={
                <>
                  ラムダ計算は、現代のコンピュータが行える
                  <br />
                  すべての計算を行うことができる
                </>
              }
            />
            <P>
              ということはつまり、
              <HighlightBold>
                弁当箱も、現代のコンピュータが行えるすべての計算を行うことができる
              </HighlightBold>
              というわけですね。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>💻</Emoji>
              ]}
              description={
                <>
                  弁当箱も、現代のコンピュータが行える
                  <br />
                  すべての計算を行うことができる
                </>
              }
            />
            <P>
              このことは、1930年代に証明されました。「
              <Highlight>
                これから先にどれほど強力な計算機が登場しても、その計算機ができる計算は、理論上はラムダ計算にもできる
              </Highlight>
              」ということが数学的に証明されたのです。もちろん、この証明は難しすぎるので省略します。
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="lambda" />,
                <Emoji>🆚</Emoji>,
                <Emoji>💻</Emoji>
              ]}
              description={
                <>
                  「どれほど強力な計算機が登場しても、
                  <br />
                  その計算機ができる計算は、
                  <br />
                  理論上はラムダ計算にもできる」と
                  <br />
                  1930年代に証明された
                </>
              }
            />
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <Bold>ちなみに:</Bold>{' '}
                チャーチが考案したラムダ計算だけでなく、チューリングが考案した空想上の計算機「チューリングマシン」も、現代のコンピュータが行えるすべての計算を(理論上は)行うことができます。このことも、1930年代に証明されました。
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
        )
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
      },
      {
        title: <>その後: チューリング</>,
        content: (
          <>
            <P>最後に、「その後」の話をしましょう。</P>
            <P>
              まず、先述したイギリスの数学者で、空想上の計算機「
              <Bold>チューリングマシン</Bold>」を考案した
              <HighlightBold>アラン・チューリング</HighlightBold>
              。彼はチューリングマシンを考案したのち、イギリスからアメリカに渡り、
              <Highlight>
                ラムダ計算(弁当箱)を考案したチャーチのもとで学びました。
              </Highlight>
            </P>
            <EmojiSeparator
              emojis={['🧑🏻', '🎓', '👨🏻‍🦳']}
              description={
                <>
                  <Bold>チューリングマシン</Bold>を考案した
                  <br />
                  <HighlightBold>アラン・チューリング</HighlightBold>は、
                  <br />
                  <Bold>ラムダ計算(弁当箱)</Bold>を考案した
                  <br />
                  <HighlightBold>チャーチ</HighlightBold>に弟子入りした
                </>
              }
            />
            <P>
              その後チューリングはイギリスに戻り、第2次世界大戦でドイツ軍の暗号通信「エニグマ」を解読しました。その後、彼は人工知能の分野でも先駆的な役割を果たし、「人工知能の父」とも呼ばれるようになりました。
            </P>
            <EmojiSeparator
              emojis={['✨', '🧑🏻', '✨']}
              description={<>チューリングは「人工知能の父」に</>}
            />
            <P>
              チューリングは同性愛者で、当時のイギリスでは同性愛行為が違法でした。ある日、若い男性との性的関係を持ったことが発覚し、チューリングは有罪になりました。彼は薬品投与による「化学的去勢」を受け続け、42歳になる直前に毒物を服用して亡くなってしまいました。
            </P>
            <P>
              チューリングが亡くなってから55年後の2009年、英政府はチューリングに対する迫害を謝罪し、2013年には亡きチューリングに恩赦が与えられました。
            </P>
            <P>
              <Highlight>
                そしてこの記事の執筆中、2019年7月15日に、イギリスの新しい50ポンド紙幣の肖像にチューリングが採用されることになったのです。
              </Highlight>
              その50ポンド紙幣には、彼が考えた空想上の計算機「チューリングマシン」のイラストが載っています。(参考:{' '}
              <ExternalLink href="https://www.bbc.com/japanese/48991921">
                BBC
              </ExternalLink>
              )
            </P>
          </>
        )
      },
      {
        title: <>その後: ラムダ村</>,
        content: (
          <>
            <P>ではその後、ラムダ村はどうなったかというと…</P>
            <EmojiSeparator emojis={['🐶', '🙂', '😈', '👧🏻']} />
            <P>
              <Bold>村人たち</Bold>
              は、何でも計算できる弁当箱を村の外の人たちに売りさばき、大金持ちになろうと悪巧み中です。
            </P>
            <EmojiSeparator
              emojis={['🍱', '💰', '🤑', '💰', '🍱']}
              description={
                <>
                  弁当箱は何でも計算できるから、
                  <br />
                  高く売れる！がっぽり稼ぐぞ！
                </>
              }
            />
            <P>
              <Bold>悪魔</Bold>
              は暇になったので、日々<Bold>ミニオン</Bold>
              に新しい芸を覚えさせようとしていますが、なかなかうまくいっていません。
            </P>
            <EmojiSeparator
              emojis={['😈', '🐶', '❓']}
              description={
                <>
                  ミニオン、「おすわり」しなさい！
                  <br />
                  何度言ったらわかるんだ！
                </>
              }
            />
            <P>
              そして、年頃になった<Bold>サヤちゃん</Bold>
              は、好きなアーティストのコンサートにもっと参戦したいからと言って、ラムダ村を出ていきました。
            </P>
            <EmojiSeparator
              emojis={['👧🏻', '❤️', '👨‍🎤']}
              description={<>今日も自担が尊い〜</>}
            />
            <P>
              以上でおしまいです！ラムダ村の名前の由来も、今回お分かりになったかと思います。ここまでお付き合いくださり、本当にありがとうございました。
            </P>
          </>
        )
      },
      {
        type: 'sideNote',
        title: <>プログラマの方へのメッセージ</>,
        preview: {
          text: <>続きを読む</>,
          content: (
            <>
              <P>
                本稿をお読みになったプログラマの方の中には、「
                <Highlight>
                  これはプログラミング未経験者にとっては難しすぎるのではないか
                </Highlight>
                」と思われた方もいるかもしれません。そんな方に伝えたいことがあります。
              </P>
            </>
          )
        },
        content: (
          <>
            <CardContent
              preview={{
                text: <>プログラミングで試してみる</>,
                content: (
                  <>
                    <Hr />
                    <P>
                      個人的な話で恐縮ですが、わたしは今まで「
                      <Highlight>
                        この人はほんとうに頭がいいな、知的好奇心が旺盛だな
                      </Highlight>
                      」と思った方に数多く出会いました。たとえば、わたしは20代のときに母を癌で亡くしているのですが、母がお世話になったお医者様の方々と話したときは、「こんなに賢い人に出会ったのは初めてだ」と思ったものです。
                    </P>
                    <EmojiSeparator
                      emojis={['💉', '👩🏽‍⚕️', '💊']}
                      description={
                        <>
                          冒頭でコンピュータサイエンスを
                          <br />
                          医学に例えたのも、そんなお医者様に
                          <br />
                          出会ったことが理由です
                        </>
                      }
                    />
                    <P>
                      そして、今までわたしが「
                      <Highlight>
                        この人はほんとうに頭がいいな、知的好奇心が旺盛だな
                      </Highlight>
                      」と思った人々の内訳を見てみると、
                      <Highlight>
                        プログラマの方よりも、プログラマでない方のほうが遥かに多い
                      </Highlight>
                      のです。もちろん、これは当たり前ですね。プログラマは世の中では圧倒的少数派ですから、母数のケタが違います。
                    </P>
                    <P>
                      そういった、「
                      <HighlightBold>
                        世の中にたくさんいる、プログラマではない、とても知的好奇心が旺盛な人々向けにコンピュータサイエンスの入門書を書くとしたら、どういう教材がいいだろう？
                      </HighlightBold>
                      」と考えた結果、完成したのが本稿です。
                    </P>
                    <P>
                      だから、そういう方々に「
                      <Highlight>知的に面白い</Highlight>
                      」と思っていただくために、難易度はあえて高めに設定しました。本稿は
                      <Highlight>
                        「プログラミング未経験者向けの入門書」とは謳っていますが、「誰にでも、何ならサルにでも分かる入門書」だとは謳っていない
                      </Highlight>
                      理由は、そういうところにあります。
                    </P>
                    <P>
                      しかし同時に、
                      <Highlight>
                        せっかく時間をかけて書くのであれば、できるかぎり読者層の裾野を広げたい
                      </Highlight>
                      とも思いました。どうせなら、たくさんの人に読んでもらいたい。だから、難易度は妥協しないけれど、説明はできる限り平易にしようと心がけました。
                    </P>
                    <P>
                      また、冒頭でも書いた通り、いきなり高度な内容を理解することができれば、「
                      <Highlight>
                        これが理解できたんだから、他の内容も学べるだろう
                      </Highlight>
                      」と自信がつきます。高度な内容を分かりやすく書くことができれば、こういったメリットもあります。
                    </P>
                    <P>
                      努力はしたものの、それでも本稿がまだまだ難しいのは承知しております。本稿はあくまで、「
                      <Highlight>邪道な</Highlight>
                      」入門書なのです。ただ、その上でひとこと言わせていただくと、
                      <Highlight>
                        内容を完全には理解できなくても、雰囲気だけでも楽しんでくださった方や、「よくわからないけど、コンピュータサイエンスって面白そう」と感じてくださった方が、ひとりでも多くいればいいな
                      </Highlight>
                      と思っています。
                    </P>
                    <BubbleQuotes
                      quotes={[
                        {
                          type: 'devil',
                          children: (
                            <>
                              <P>
                                悪魔のわたしに言わせれば…「
                                <Highlight>
                                  入門書を必要以上に難しくしたら、その分野に苦手意識を持つ人が増える
                                </Highlight>
                                」というのは確かにそうだと思う。
                              </P>
                              <P>
                                一方、「
                                <Highlight>
                                  ある分野の入門書や入門コースが知的に面白かったから、その分野に興味を持つようになった
                                </Highlight>
                                」という人も、一定数いると思う。大抵は、知的好奇心が旺盛な人たちだ。わたしはどうせ発信するなら、そういう人たちに好かれるものを作りたい。
                              </P>
                              <P>
                                そして、
                                <Highlight>
                                  「知的に面白い」と思ってもらえる入門書には、ある程度の難しさは欠かせない
                                </Highlight>
                                と思う。簡単すぎたら退屈だからだ。
                              </P>
                              <P>
                                「難しすぎて敬遠してしまう人」の数を抑えつつ、「難しくて面白いと思ってくれる人」の数を増やす、というのは
                                <HighlightBold>トレードオフ</HighlightBold>
                                だ。どこでバランスを取るかは教材作成者が自由に決めるべきで、
                                <Highlight>
                                  「これが正解」というのは無い
                                </Highlight>
                                と思うんだ。
                              </P>
                            </>
                          )
                        }
                      ]}
                    />
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
    ]}
  />
)
