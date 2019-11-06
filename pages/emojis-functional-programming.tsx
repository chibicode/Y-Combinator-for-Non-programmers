/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core'
import { useState } from 'react'
import Page from 'src/components/Page'
import Head from 'next/head'
import { ns, radii, fontSizes, colors, spaces, maxWidths } from 'src/lib/theme'
import { lessonTitle } from 'src/lib/titles'
import Container from 'src/components/Container'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import ExpressionRunnerCaptionWrapper from 'src/components/ExpressionRunnerCaptionWrapper'
import BottomRightBadge from 'src/components/BottomRightBadge'
import Emoji from 'src/components/Emoji'
import H from 'src/components/H'
import EmojiForLetter from 'src/components/EmojiForLetter'
import EpisodeHero from 'src/components/EpisodeHero'
import InlinePrioritiesLabel from 'src/components/InlinePrioritiesLabel'
import EpisodePageFooter from 'src/components/EpisodePageFooter'
import CustomEmoji from 'src/components/CustomEmoji'
import ButtonWithTouchActiveStates from 'src/components/ButtonWithTouchActiveStates'
import * as R from 'src/components/Runners'
import {
  ExternalLink,
  P,
  Italic,
  Bold,
  InternalLink,
  Highlight,
  H3,
  Ul,
  Hr,
  UlLi
} from 'src/components/ContentTags'
import locale from 'src/lib/locale'
import { DateTime } from 'luxon'
import { enBaseUrl } from 'src/lib/meta'
import BaseAlert, { alertSpacing, AlertProps } from 'src/components/Alert'
import PrismHighlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwlLight'
import BubbleQuoteContext from 'src/components/BubbleQuoteContext'
import EmojiWithText from 'src/components/EmojiWithText'
import ExpressionRunnerConfigContext from 'src/components/ExpressionRunnerConfigContext'
import {
  StepOne,
  StepTwo,
  InstructionTwo,
  StepThree,
  InstructionThree,
  InstructionFour,
  StepFour
} from 'src/contents/4.en'
import VariableShadeContext from 'src/components/VariableShadeContext'

const hackerNewsLink = ``

const numSteps = 100

const date = DateTime.fromISO('2019-11-08T12:00:00Z')
// const dateString = date
//   .setLocale('en')
//   .setZone('America/Los_Angeles')
//   .toFormat('LLL d, yyyy')
const dateSchemaString = date.setZone('America/Los_Angeles').toISO()

const title = 'Using Emojis to Teach Functional Programming to Non-programmers'
const titleWithEmoji = `🍱 ${title}`
const titleSplit = (
  <>
    Using Emojis to Teach
    <br />
    Functional Programming to
    <br />
    Non-programmers
  </>
)
const description =
  'A visual implementation of Lambda calculus, Church encoding, and Y combinator'
const url = `${enBaseUrl}/emojis-functional-programming`
const ogImageUrl = `${enBaseUrl}/static/images/blog-og.png`

const tweetUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
  url
)}&via=chibicode&text=${encodeURIComponent(title)}`

const Alert = (props: AlertProps) => (
  <BubbleQuoteContext.Provider value={{ inQuote: false }}>
    <BaseAlert {...props} />
  </BubbleQuoteContext.Provider>
)

Alert.defaultProps = BaseAlert.defaultProps

const Subheading = ({
  step,
  noHrTop,
  children,
  coveredIn,
  ...props
}: JSX.IntrinsicElements['h3'] & {
  noHrTop?: boolean
  step: number | 'none'
  coveredIn: number | 'none'
}) => (
  <>
    {!noHrTop && (
      <Hr
        css={css`
          border-bottom: 5px solid ${colors('codeBg')};
          margin-top: ${spaces(2.25)};
        `}
      />
    )}
    {step !== 'none' && coveredIn !== 'none' && (
      <div
        css={css`
          color: ${colors('indigo300')};
          margin-bottom: ${spaces(0.25)};
        `}
      >
        Step{' '}
        <Bold
          css={css`
            color: ${colors('indigo400')};
          `}
        >
          {step}
        </Bold>
        /{numSteps}
        <span
          css={css`
            font-size: ${fontSizes(0.75)};
            ${ns} {
              font-size: ${fontSizes(0.85)};
            }
          `}
        >
          {' '}
          &middot; From my course’s{' '}
          <InternalLink href={`/${coveredIn}`}>
            <H
              args={{
                name: 'titlePrefixColored'
              }}
              episodeNumberOverrides={coveredIn}
            />
          </InternalLink>{' '}
          level
        </span>
      </div>
    )}
    <H3
      {...props}
      css={css`
        margin: ${noHrTop ? spaces(2) : 0} 0 ${spaces(0.5)};
      `}
    >
      {children}
    </H3>
  </>
)

const codeFontFamily = `'Victor Mono', SFMono-Regular, Consolas,
Liberation Mono, Menlo, Courier, monospace`

const InlineCode = ({
  children,
  highlighted
}: {
  children: string
  highlighted?: boolean
}) => (
  <code
    css={css`
      font-weight: 600;
      font-family: ${codeFontFamily};
      background-color: ${highlighted ? colors('yellow200') : colors('codeBg')};
      display: inline-block;
      font-size: 0.85em;
      padding: 0.075em 0.2em;
      border-radius: ${radii(0.25)};
    `}
  >
    {children}
  </code>
)

const CodeBlock = ({
  children,
  shouldHighlight,
  result,
  pointToRunButton,
  defaultResultVisible,
  caption
}: {
  children: string
  shouldHighlight?: (lineNumber: number, tokenNumber: number) => boolean
  result?: string
  pointToRunButton?: boolean
  defaultResultVisible: boolean
  caption?: React.ReactNode
}) => {
  const [resultVisible, setResultVisible] = useState(defaultResultVisible)
  const buttonOnClick = () => setResultVisible(true)
  return (
    <>
      {caption && (
        <ExpressionRunnerCaptionWrapper
          css={css`
            margin-top: ${spaces(1.75)};
          `}
        >
          {caption}
        </ExpressionRunnerCaptionWrapper>
      )}
      <PrismHighlight
        {...defaultProps}
        code={children}
        theme={theme}
        language="javascript"
      >
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre
            css={[
              alertSpacing,
              css`
                background-color: ${colors('codeBg')};
                font-weight: 600;
                font-family: ${codeFontFamily};
                margin: ${caption ? 0 : spaces(1.75)} auto
                  ${result ? 0 : spaces(1.75)};
                font-size: ${fontSizes(0.85)};
                max-width: ${maxWidths('xs')};
              `,
              result
                ? css`
                    border-top-left-radius: ${radii(0.5)};
                    border-top-right-radius: ${radii(0.5)};
                  `
                : css`
                    border-radius: ${radii(0.5)};
                  `,
              (!(result && resultVisible) || !result) &&
                css`
                  border-bottom-right-radius: ${radii(0.5)};
                `
            ]}
          >
            <div
              css={css`
                overflow-x: auto;
              `}
            >
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span
                      {...getTokenProps({ token, key })}
                      css={[
                        css`
                          font-style: normal !important;
                        `,
                        !!shouldHighlight &&
                          shouldHighlight(i, key) &&
                          css`
                            background: ${colors('yellow200')};
                            border-bottom: 2px solid ${colors('deepOrange200')};
                          `
                      ]}
                    />
                  ))}
                </div>
              ))}
            </div>
          </pre>
        )}
      </PrismHighlight>
      {result && (
        <>
          <div
            css={css`
              max-width: ${maxWidths('xs')};
              margin-bottom: ${spaces(1.75)};
              margin-left: auto;
              margin-right: auto;
            `}
          >
            {resultVisible ? (
              <div
                css={[
                  alertSpacing,
                  css`
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;
                    border-bottom-left-radius: ${radii(0.5)};
                    border-bottom-right-radius: ${radii(0.5)};
                    background: #fff;
                    border-left: 0.25rem solid ${colors('codeBg')};
                    border-bottom: 0.25rem solid ${colors('codeBg')};
                    border-right: 0.25rem solid ${colors('codeBg')};
                    padding-top: 0.425rem;
                    padding-bottom: 0.425rem;
                    margin-top: 0;

                    ${ns} {
                      padding-top: 0.65rem;
                      padding-bottom: 0.65rem;
                    }
                  `
                ]}
              >
                <Bold
                  css={css`
                    color: ${colors('indigo400')};
                    font-size: ${fontSizes(0.85)};
                    margin-left: -0.25rem;
                  `}
                >
                  Result:{' '}
                </Bold>
                <span
                  css={css`
                    color: ${colors('indigo500')};
                  `}
                >
                  <InlineCode highlighted>{result}</InlineCode>
                </span>
              </div>
            ) : (
              <>
                <ButtonWithTouchActiveStates
                  onClick={buttonOnClick}
                  activeBackgroundColor={colors('indigo50')}
                  css={[
                    alertSpacing,
                    css`
                      border-top-left-radius: 0;
                      border-top-right-radius: 0;
                      border-bottom-left-radius: ${radii(0.5)};
                      border-bottom-right-radius: ${radii(0.5)};
                      line-height: 1.1rem;
                      border: none;
                      margin-top: 0;
                      margin-bottom: 0;
                      font-weight: bold;
                      font-size: ${fontSizes(0.85)};
                      background: ${colors('codeButtonBg')};
                      color: ${colors('indigo500')};
                      padding-left: ${spaces(1.25)};
                      padding-right: ${spaces(1.25)};

                      &:enabled {
                        cursor: pointer;
                      }

                      @media (hover: hover) {
                        &:hover:enabled {
                          background: ${colors('indigo50')};
                        }
                        &:focus {
                          box-shadow: inset 0 0 0 1px ${colors('codeBg')};
                          outline: none;
                        }
                      }
                      &:active:enabled {
                        background: ${colors('indigo50')};
                      }
                    `
                  ]}
                >
                  Run <Emoji>▶️</Emoji>
                </ButtonWithTouchActiveStates>
                {pointToRunButton && (
                  <span
                    css={[
                      alertSpacing,
                      css`
                        font-size: ${fontSizes(0.85)};
                        animation: pointToCodeRunButton 1s infinite;
                        color: ${colors('grey700')};

                        @keyframes pointToCodeRunButton {
                          0% {
                            margin-left: 0;
                          }
                          50% {
                            margin-left: -0.5em;
                          }
                          100% {
                            margin-left: 0;
                          }
                        }
                      `
                    ]}
                  >
                    ← <H args={{ name: 'pointToRunButton' }} />
                  </span>
                )}
              </>
            )}
          </div>
        </>
      )}
    </>
  )
}

CodeBlock.defaultProps = {
  defaultResultVisible: false
}

const PointToRunButton = ({ children }: { children: React.ReactNode }) => (
  <ExpressionRunnerConfigContext.Provider
    value={{
      pointToRunButton: true
    }}
  >
    {children}
  </ExpressionRunnerConfigContext.Provider>
)

const DimUnhighlighted = ({ children }: { children: React.ReactNode }) => (
  <VariableShadeContext.Provider
    value={{
      shadeNonHighlighted: true
    }}
  >
    {children}
  </VariableShadeContext.Provider>
)

const guessTheResult = (
  <>
    Guess what the result would be
    <br />
    before pressing the <H args={{ name: 'run' }} /> button!
  </>
)

export default () => {
  let step = 1
  return locale === 'en' ? (
    <Page>
      <Global
        styles={[
          css`
            @font-face {
              font-family: 'Victor Mono';
              src: url('/static/fonts/VictorMono-SemiBold.woff2')
                  format('woff2'),
                url('/static/fonts/woff/SemiBold.woff') format('woff');
              font-weight: 400;
              font-display: fallback;
              font-style: normal;
            }
          `
        ]}
      />
      <Head>
        <title key="title">{titleWithEmoji}</title>
        <meta property="og:title" content={titleWithEmoji} />
        <meta property="og:site_name" content={lessonTitle} />
        <meta property="og:url" content={url} />
        <link rel="canonical" href={url} />
        <meta property="og:description" content={description} />
        <meta name="description" content={description} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="article:published_time" content={dateSchemaString} />
      </Head>
      <Container
        size="smsm"
        horizontalPadding={0.5}
        cssOverrides={css`
          padding-top: ${spaces(1.5)};
        `}
      >
        <EpisodeHero mainTitle={titleSplit} threeLineTitle />
      </Container>
      <Container
        size="smsm"
        horizontalPadding={0.75}
        cssOverrides={css`
          padding-bottom: ${spaces(6)};
        `}
      >
        <h2
          css={css`
            text-align: center;
            color: ${colors('indigo400')};
            font-size: ${fontSizes(1)};
            font-style: italic;
            font-weight: normal;
            margin: 0;

            ${ns} {
              font-size: ${fontSizes(1.2)};
            }
          `}
        >
          {description}
        </h2>
        <img
          src="/static/images/animated@2x.gif"
          alt={title}
          css={css`
            width: 6rem;
            margin: ${spaces(1.75)} auto ${spaces(2)};
            display: block;
            ${ns} {
              width: 7rem;
            }
          `}
        />

        <BubbleQuoteContext.Provider value={{ inQuote: true }}>
          <P>
            <Highlight>
              Last month, I published a free online course called “
              <InternalLink href="/">
                <Bold>Y Combinator for Non-programmers</Bold>
              </InternalLink>
              ”.
            </Highlight>{' '}
            In this 17-page course, I teach computer science concepts such as
            functional programming, lambda calculus, Church encoding, and Y
            combinator in a way such that{' '}
            <Italic>
              people who have zero programming knowledge can understand
            </Italic>
            —without sacrificing rigor.
          </P>
          <P>
            To explain these concepts, I created{' '}
            <Bold>an educational puzzle using emojis</Bold> <Emoji>🍱</Emoji>.
            In this article, I’ll explain how my emoji puzzles can represent and
            execute functional code <Italic>visually</Italic>. Here’s a sneak
            peek—
            <Highlight>
              try pressing <H args={{ name: 'run' }} /> below!
            </Highlight>
            :
          </P>
          <CodeBlock
            result={`'sandwich'`}
            pointToRunButton
            caption={<>Functional JS code:</>}
          >{`(sushi => sushi)('sandwich')`}</CodeBlock>
          <PointToRunButton>
            <R.Itbm>Equivalent emoji puzzle:</R.Itbm>
          </PointToRunButton>
          <P>
            If you like to teach programming to beginners, or if you like
            functional programming in general, I think you’ll enjoy this
            article.
          </P>
          <Subheading noHrTop step="none" coveredIn="none">
            Overview
          </Subheading>
          <Ul>
            <UlLi>
              <Bold>First,</Bold> I’ll show you how some simple JavaScript code
              can be represented using my emoji puzzle. Even if you’re not
              familiar with JS, you should still be able to understand it.
            </UlLi>
            <UlLi>
              <Bold>After that,</Bold> I’ll talk about how to use my emoji
              puzzle to teach lambda calculus, Church encoding, and Y
              Combinator.
            </UlLi>
            <UlLi>
              To help you track how far along you are in the article, I’ll show
              a “<Bold>step</Bold>” number above each subheading. There are a
              total of <Bold>{numSteps}</Bold> steps in this article.
            </UlLi>
            <UlLi>
              <Bold>If you decide to read later:</Bold> I’d appreciate it if you
              could share this article before you go!{' '}
              <ExternalLink href={tweetUrl}>
                <CustomEmoji type="twitter" size="mdlg" />{' '}
                <Highlight>Click here to Tweet this article.</Highlight>
              </ExternalLink>
              {hackerNewsLink && (
                <>
                  {' '}
                  You can also discuss this on{' '}
                  <ExternalLink href={hackerNewsLink}>Hacker News</ExternalLink>
                  .
                </>
              )}
            </UlLi>
            <UlLi>
              Also,{' '}
              <ExternalLink href="https://github.com/chibicode/ycombinator/blob/master/pages/emojis-functional-programming.tsx">
                the source code for this article is available on GitHub
              </ExternalLink>
              —please ★ star it!
            </UlLi>
          </Ul>
          <Alert>
            <div
              css={css`
                font-size: ${fontSizes(0.85)};
              `}
            >
              <Emoji>⚠️</Emoji> <Bold>Note:</Bold> This article is for
              programmers. If you’re a non-programmer, check out the course
              itself instead: “
              <InternalLink href="/">
                <Bold>Y Combinator for Non-programmers</Bold>
              </InternalLink>
              ”.
            </div>
          </Alert>
          <Alert backgroundColor="brown">
            <div
              css={css`
                font-size: ${fontSizes(0.85)};
              `}
            >
              <Emoji>👋</Emoji> <Bold>Available for Hire:</Bold> My name is{' '}
              <Bold>Shu Uesugi</Bold>, a freelance full-stack engineer who’s
              looking for a <Italic>full-time position</Italic> (remote or in
              SF/LA). Scroll to the bottom of this article for details.
            </div>
          </Alert>
          <Subheading step={step++} coveredIn={3}>
            Identity function in JS
          </Subheading>
          <P>
            First, take a look at the following code. It’s an{' '}
            <Italic>identity function</Italic> in JavaScript that returns the
            argument.
          </P>
          <CodeBlock>{`// Identity function in JS
sushi => sushi`}</CodeBlock>
          <P>
            If you apply the above function on a string{' '}
            <InlineCode>'sandwich'</InlineCode>, then the result would be{' '}
            <InlineCode>'sandwich'</InlineCode>.
          </P>
          <CodeBlock>{`// The result would be 'sandwich'
(sushi => sushi)('sandwich')`}</CodeBlock>
          <P>
            <Bold>Now, here’s the interesting part:</Bold> One day, I realized
            that the above JS code can be{' '}
            <Italic>described visually using emojis.</Italic> Check this out:
          </P>
          <R.Ilpo>
            An “<Bold>emoji puzzle</Bold>” that visually describes
            <br />
            the JS code from the above
          </R.Ilpo>
          <P>
            The above emoji puzzle is equivalent to the earlier JS code. First,
            the identity function <InlineCode>sushi => sushi</InlineCode>…
          </P>
          <CodeBlock
            shouldHighlight={(lineNumber, tokenNumber) =>
              lineNumber === 0 && tokenNumber > 0 && tokenNumber < 5
            }
          >{`(sushi => sushi)('sandwich')`}</CodeBlock>
          <P>
            …is represented by <Italic>the bottom two items</Italic> on the
            puzzle, which are both <EmojiWithText letter="a" />.
          </P>
          <DimUnhighlighted>
            <R.Elku>
              <InlineCode>sushi => sushi</InlineCode> is represented
              <br />
              by the bottom two items
            </R.Elku>
          </DimUnhighlighted>
          <P>
            Second, the argument <InlineCode>'sandwich'</InlineCode> to the
            identity function…
          </P>
          <CodeBlock
            shouldHighlight={(lineNumber, tokenNumber) =>
              lineNumber === 0 && tokenNumber > 6 && tokenNumber < 8
            }
          >{`(sushi => sushi)('sandwich')`}</CodeBlock>
          <P>
            …is represented by <Italic>the top item</Italic> on the puzzle,
            which is a <EmojiWithText letter="b" />.
          </P>
          <DimUnhighlighted>
            <R.Vowa>
              The argument <InlineCode>'sandwich'</InlineCode> is represented
              <br />
              by the top item
            </R.Vowa>
          </DimUnhighlighted>
          <P>
            That’s how my emoji puzzle can visually describe a simple JS
            expression. Next, let’s talk about how we can{' '}
            <H args={{ name: 'run', lowerCase: true }} /> it.
          </P>
          <Alert backgroundColor="brown">
            <Bold>Side Note:</Bold> To keep things simple, this puzzle doesn’t
            distinguish between variable names (e.g.{' '}
            <InlineCode>sushi</InlineCode>) and strings (e.g.{' '}
            <InlineCode>'sushi'</InlineCode>). Therefore, both{' '}
            <InlineCode>sushi</InlineCode> and <InlineCode>'sushi'</InlineCode>{' '}
            will be represented as <EmojiForLetter letter="a" size="semilg" />.
          </Alert>
          <Subheading step={step++} coveredIn={4}>
            Running the function
          </Subheading>
          <P>
            I’ve added the <H args={{ name: 'run' }} /> button to the JS code
            snippet so you can see the result.{' '}
            <Highlight>
              If you press <H args={{ name: 'run' }} />,
            </Highlight>{' '}
            you’ll see that the result is <InlineCode>'sandwich'</InlineCode>.
          </P>
          <CodeBlock
            result={`'sandwich'`}
            pointToRunButton
          >{`(sushi => sushi)('sandwich')`}</CodeBlock>
          <P>
            Now, we can also “run” the equivalent emoji puzzle and get the same
            result.{' '}
            <Highlight>
              Try pressing the <H args={{ name: 'run' }} /> button below the
              puzzle.
            </Highlight>
          </P>
          <PointToRunButton>
            <R.Itbm></R.Itbm>
          </PointToRunButton>
          <P>
            The result is <EmojiWithText letter="b" />, which is the same as
            what happens when you run the equivalent JS code.
          </P>
          <P>
            So, you can <H args={{ name: 'run', lowerCase: true }} /> an emoji
            puzzle just as you can run a piece of JS code. Basically, this is
            how I taught functional programming to non-programmers in my course
            (
            <InternalLink href="/">
              Y Combinator for Non-programmers
            </InternalLink>
            )—without showing any code.
          </P>
          <Subheading step={step++} coveredIn={4}>
            Another example
          </Subheading>
          <P>
            Let’s take a look at another example. Here’s a piece of JS code
            that’s slightly different from before. It’s a function that{' '}
            <Italic>ignores the input</Italic> and always returns{' '}
            <InlineCode>'pizza'</InlineCode>.
          </P>
          <CodeBlock>{`// A function that ignores the input
// and always returns 'pizza'
sushi => 'pizza'`}</CodeBlock>
          <P>
            Let’s run the above code with <InlineCode>'sandwich'</InlineCode> as
            the argument. <H args={{ name: 'pressRun' }} />
          </P>
          <CodeBlock
            result={`'pizza'`}
          >{`(sushi => 'pizza')('sandwich')`}</CodeBlock>
          <P>
            As expected, the result is <InlineCode>'pizza'</InlineCode>. Now,
            this code can be represented using my emoji puzzle as follows.{' '}
            <H args={{ name: 'pressRun' }} />
          </P>
          <R.Qcme></R.Qcme>
          <P>
            Just like the JS code, the emoji puzzle ended up with a{' '}
            <EmojiWithText letter="f" /> after running it.
          </P>
          <Alert backgroundColor="pink">
            <P>
              <Bold>What we learned so far:</Bold> Simple JS code like below can
              be visually represented using emoji puzzles.
            </P>
            <CodeBlock
              defaultResultVisible
              result={`'sandwich'`}
              caption={<>Functional JS code:</>}
            >{`(sushi => sushi)('sandwich')`}</CodeBlock>
            <R.Ilpo>Equivalent emoji puzzle:</R.Ilpo>
            <ExpressionRunnerSeparator />
            <R.Lngo></R.Lngo>
            <Hr />
            <CodeBlock
              defaultResultVisible
              result={`'pizza'`}
              caption={<>Functional JS code:</>}
            >{`(sushi => 'pizza')('sandwich')`}</CodeBlock>
            <R.Bjny>Equivalent emoji puzzle:</R.Bjny>
            <ExpressionRunnerSeparator />
            <R.Ukzq></R.Ukzq>
          </Alert>
          <Subheading step={step++} coveredIn={4}>
            Visualizing evaluation rules
          </Subheading>
          <P>
            Because you know how to code, you have a mental model of how
            function evaluation works. If you see{' '}
            <InlineCode>(sushi => sushi)('sandwich')</InlineCode>, you can
            quickly figure out that the result would be{' '}
            <InlineCode>'sandwich'</InlineCode>. If you see{' '}
            <InlineCode>(sushi => 'pizza')('sandwich')</InlineCode>, you know
            that the result would be <InlineCode>'pizza'</InlineCode>. You know
            what free variables and bound variables mean.
          </P>
          <P>
            On the other hand, non-programmers may not have a mental model of
            how function evaluation works. To help them develop a mental model
            without showing them any code, I created a{' '}
            <Italic>step-by-step visualization</Italic> of function evaluation
            rules using the emoji puzzle I mentioned earlier.
          </P>
          <P>Let’s reuse the earlier example again:</P>
          <CodeBlock
            caption={<>Functional JS code:</>}
          >{`(sushi => sushi)('sandwich')`}</CodeBlock>
          <R.Ilpo>Equivalent emoji puzzle:</R.Ilpo>
          <P>
            On the puzzle below,{' '}
            <Highlight>
              try pressing the <H args={{ name: 'run' }} /> button
            </Highlight>
            . This button is a bit different from the last time—
            <Italic>
              it shows all the steps that happen in between the beginning and
              the end
            </Italic>
            .
          </P>
          <PointToRunButton>
            <R.Wunw></R.Wunw>
          </PointToRunButton>
          <P>Here are the four steps it displayed:</P>
          <P>
            <Bold>Step 1.</Bold>{' '}
            <Highlight>
              <StepOne />
            </Highlight>
          </P>
          <P>
            First, we label each emoji.{' '}
            <Highlight>
              The top item is labeled as{' '}
              <BottomRightBadge inline bottomRightBadgeType="callArg" /> (for “
              <Bold>T</Bold>op”), the left item is labeled as{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcArg" /> (for “
              <Bold>L</Bold>eft”), and the right item is labeled as{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcBound" /> (for
              “<Bold>R</Bold>ight”).
            </Highlight>
          </P>
          <R.Zzxj>
            <StepOne />
          </R.Zzxj>
          <P>
            <Bold>Step 2.</Bold>{' '}
            <Highlight>
              <StepTwo />
            </Highlight>
          </P>
          <P>
            Second, <InstructionTwo lowerCase /> In this case, both the
            bottom-left and the bottom-right are <EmojiWithText letter="a" />,
            so there’s a match.
          </P>
          <R.Keck>
            <StepTwo />
          </R.Keck>
          <P>
            <Bold>Step 3.</Bold>{' '}
            <Highlight>
              <StepThree />
            </Highlight>
          </P>
          <P>
            Third, <InstructionThree lowerCase /> In this case, we copy the{' '}
            <EmojiWithText letter="b" /> on the top to the bottom-right.
          </P>
          <R.Qoms>
            <StepThree />
          </R.Qoms>
          <P>
            <Bold>Step 4.</Bold>{' '}
            <Highlight>
              <StepFour />
            </Highlight>
          </P>
          <P>
            Finally, <InstructionFour lowerCase /> We’re left with just the{' '}
            <EmojiWithText letter="b" /> at the end.
          </P>
          <R.Mhgm>
            <StepFour />
          </R.Mhgm>
          <ExpressionRunnerSeparator />
          <R.Lngo></R.Lngo>
          <P>
            The above steps visually represent how functions are evaluated—they
            are equivalent to how JavaScript evaluates{' '}
            <InlineCode>(sushi => sushi)('sandwich')</InlineCode>. By learning
            these rules, non-programmers can evaluate functions intuitively,
            without learning about how variable bindings work.
          </P>
          <Subheading step={step++} coveredIn={4}>
            If there’s no match
          </Subheading>
          <P>Let’s take a look at the other example from earlier:</P>
          <CodeBlock
            caption={<>Functional JS code:</>}
          >{`(sushi => 'pizza')('sandwich')`}</CodeBlock>
          <R.Bjny>Equivalent emoji puzzle:</R.Bjny>
          <P>
            <Highlight>
              Try pressing the <H args={{ name: 'run' }} /> button and see what
              happens:
            </Highlight>
          </P>
          <R.Gthd></R.Gthd>
          <P>Here are the three steps it displayed:</P>
          <P>
            <Bold>Step 1.</Bold>{' '}
            <Highlight>
              <StepOne />
              —this is the same as before.
            </Highlight>
          </P>
          <R.Zzxj>
            <StepOne />
          </R.Zzxj>
          <P>
            <Bold>Step 2.</Bold>{' '}
            <Highlight>
              This time, there’s <Bold>no match</Bold> between{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcArg" /> and{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />. The
              bottom-left is <EmojiWithText letter="a" />, but the bottom-right
              is <EmojiWithText letter="f" />.
            </Highlight>
          </P>
          <R.Zvpc>
            <Bold>No match:</Bold>{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
            <Emoji>❌</Emoji>
          </R.Zvpc>
          <P>
            If there’s no match,{' '}
            <Highlight>
              we skip step 3 (<StepThree />) and go directly to step 4.
            </Highlight>
          </P>
          <P>
            <Bold>Step 4.</Bold>{' '}
            <Highlight>
              <StepFour />
            </Highlight>
          </P>
          <R.Nsds></R.Nsds>
          <ExpressionRunnerSeparator />
          <R.Ukzq></R.Ukzq>
          <P>
            That’s how the emoji puzzle visualizes the evaluation of a function
            when there’s no matching variable in the function body—like{' '}
            <InlineCode>{`(sushi => 'pizza')('sandwich')`}</InlineCode>.
          </P>
          <Alert backgroundColor="blue">
            <P>
              <Bold>More examples (optional read):</Bold> Here are more examples
              that might be helpful for your understanding. You can{' '}
              <Highlight>
                press <H args={{ name: 'run', lowerCase: true }} />
              </Highlight>{' '}
              on each example to see the evaluation visualization.{' '}
              <H args={{ name: 'mentionRightArrow' }} />
            </P>
            <CodeBlock
              defaultResultVisible
              result={`(spaghetti => 'bread')`}
              caption={<>Functional JS code:</>}
            >{`(pizza => pizza)(spaghetti => 'bread')`}</CodeBlock>
            <R.Hluq>Equivalent emoji puzzle:</R.Hluq>
            <Hr />
            <CodeBlock
              defaultResultVisible
              result={`'hotDog'`}
              caption={<>Functional JS code:</>}
            >{`(salad => 'hotDog')(curry => 'tacos')`}</CodeBlock>
            <R.Zuus>Equivalent emoji puzzle:</R.Zuus>
          </Alert>
          <Subheading step={step++} coveredIn={5}>
            More complicated expressions
          </Subheading>
          <P>
            Let’s take a look at more complicated functional JS expressions and
            see if they can be represented using an emoji puzzle. Check out the
            following JS expression, and
            <Highlight>
              {' '}
              try to guess what the result would be before pressing the{' '}
              <H args={{ name: 'run' }} /> button.
            </Highlight>
          </P>
          <CodeBlock
            result={`'hamburger'`}
            caption={
              <>
                Guess what the result would be
                <br />
                before pressing the <H args={{ name: 'run' }} /> button!
              </>
            }
          >{`(sushi => sandwich => sushi)(
  'hamburger'
)('chicken')`}</CodeBlock>
          <P>
            The result was <InlineCode>{`'hamburger'`}</InlineCode>. It’s
            because <InlineCode>{'sushi'}</InlineCode> is bound to{' '}
            <InlineCode>{`'hamburger'`}</InlineCode>,{' '}
            <InlineCode>{'sandwich'}</InlineCode> is bound to{' '}
            <InlineCode>{`'chicken'`}</InlineCode>, and it returns what’s in{' '}
            <InlineCode>{'sushi'}</InlineCode>.
          </P>
          <P>And here’s the equivalent emoji puzzle:</P>
          <R.Cvtc></R.Cvtc>
          <P>Let’s break it down. First, the function expression…</P>
          <CodeBlock
            shouldHighlight={(lineNumber, tokenNumber) =>
              lineNumber === 0 && tokenNumber > 0 && tokenNumber < 9
            }
          >{`(sushi => sandwich => sushi)(
  'hamburger'
)('chicken')`}</CodeBlock>
          <P>…is represented by the bottom row:</P>
          <DimUnhighlighted>
            <R.Lxzn>
              <InlineCode>sushi => sandwich => sushi</InlineCode>
            </R.Lxzn>
          </DimUnhighlighted>
          <P>And the two arguments…</P>
          <CodeBlock
            shouldHighlight={(lineNumber, tokenNumber) =>
              (lineNumber === 1 && tokenNumber > 0 && tokenNumber < 2) ||
              (lineNumber === 2 && tokenNumber > 2 && tokenNumber < 4)
            }
          >{`(sushi => sandwich => sushi)(
  'hamburger'
)('chicken')`}</CodeBlock>
          <P>…are represented by the top and the middle rows:</P>
          <DimUnhighlighted>
            <R.Ujuq>
              <InlineCode>('hamburger')('chicken')</InlineCode>
            </R.Ujuq>
          </DimUnhighlighted>
          <P>
            Now, let’s talk about how we evaluate this function. In JS, we first
            evaluate the function call with the argument{' '}
            <InlineCode>'hamburger'</InlineCode>.
          </P>
          <CodeBlock
            caption={<>In JS, we evaluate this part first</>}
            shouldHighlight={(lineNumber, tokenNumber) =>
              lineNumber === 0 ||
              (lineNumber === 1 && tokenNumber > 0 && tokenNumber < 2) ||
              (lineNumber === 2 && tokenNumber < 2)
            }
          >{`(sushi => sandwich => sushi)(
  'hamburger'
)('chicken')`}</CodeBlock>
          <P>
            Equivalently, in the emoji puzzle,{' '}
            <Italic>we evaluate the bottom two rows first.</Italic> We ignore
            the top row initially, which is shaded in blue.
          </P>
          <R.Bcgp>
            <Bold>Focus</Bold> on <Italic>the bottom two rows</Italic>, and
            <br />
            <Bold>Ignore</Bold> the <Italic>top row</Italic> for now
          </R.Bcgp>
          <P>
            If you look at the left edge of the puzzle, the bottom two rows
            correspond to the pair of{' '}
            <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>
            ’s. That’s the rule:{' '}
            <Highlight>
              In an emoji puzzle with 3 rows, you start with the pair of{' '}
              <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>’s.
            </Highlight>
          </P>
          <P>
            Next, let’s label each item on the bottom two rows. This time, in
            addition to{' '}
            <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcBound" />,{' '}
            <Highlight>
              we now have a new label{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
            </Highlight>{' '}
            for the <EmojiWithText letter="b" />.
          </P>
          <R.Pbhg>
            There’s a new label{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
            <br />
            for the <EmojiWithText letter="b" />
          </R.Pbhg>
          <P>
            <Bold>Here’s the rule:</Bold>{' '}
            <Highlight>
              The middle items on the bottom row are labeled as{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />,
              and you can <Bold>ignore them</Bold>.
            </Highlight>{' '}
            You can pretend that{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
            ’s don’t exist and apply the other rules from before.
          </P>
          <P>Let’s take a look at the next few steps in this iteration:</P>
          <R.Itvv></R.Itvv>
          <ExpressionRunnerSeparator />
          <R.Nefh></R.Nefh>
          <ExpressionRunnerSeparator />
          <R.Qwtn></R.Qwtn>
          <ExpressionRunnerSeparator />
          <R.Hbbv></R.Hbbv>
          <P>This is exactly like how the earlier JS code is evaluated.</P>
          <CodeBlock
            caption={<>After evaluating this part…</>}
            shouldHighlight={(lineNumber, tokenNumber) =>
              lineNumber === 0 ||
              (lineNumber === 1 && tokenNumber > 0 && tokenNumber < 2) ||
              (lineNumber === 2 && tokenNumber < 2)
            }
          >{`(sushi => sandwich => sushi)(
  'hamburger'
)('chicken')`}</CodeBlock>
          <ExpressionRunnerSeparator halfMargin />
          <CodeBlock
            caption={
              <>
                …it becomes this, which is
                <br />
                equivalent to the above emoji puzzle
              </>
            }
          >{`(sandwich => 'hamburger')('chicken')`}</CodeBlock>
          <P>
            <Bold>But we’re not done yet!</Bold> Let’s continue to the end by{' '}
            <Highlight>
              pressing the <H args={{ name: 'run' }} /> button below:
            </Highlight>
          </P>
          <R.Iwxm>Let’s continue to the end!</R.Iwxm>
          <P>
            We ended up with a <EmojiWithText letter="c" />, which is exactly
            the same as what the JS code evaluated to. So we’ve shown that
            complex functional JS expressions can be represented using an emoji
            puzzle.
          </P>
          <Alert backgroundColor="pink">
            <P>
              <Bold>What we learned so far:</Bold> Complex functional JS
              expressions can be represented using an emoji puzzle.
            </P>
            <CodeBlock
              defaultResultVisible
              result={`'hamburger'`}
              caption={<>Functional JS code:</>}
            >{`(sushi => sandwich => sushi)(
  'hamburger'
)('chicken')`}</CodeBlock>
            <R.Cvtc>
              Equivalent emoji puzzle:
              <br />
              (Start with the pair of{' '}
              <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s)
            </R.Cvtc>
            <ExpressionRunnerSeparator />
            <R.Yxel></R.Yxel>
          </Alert>
          <Alert backgroundColor="blue">
            <P>
              <Bold>More examples (optional read):</Bold> Here’s another example
              that might be helpful for your understanding. Check out the
              following JS expression, and{' '}
              <Highlight>
                try to guess what the result would be before pressing the{' '}
                <H args={{ name: 'run' }} /> button.
              </Highlight>
            </P>
            <CodeBlock
              result={`'salad'`}
              caption={guessTheResult}
            >{`(friedPotatoes => pizza => pizza)(
  spaghetti => spaghetti
)('salad')`}</CodeBlock>
            <P>
              The result was <InlineCode>'salad'</InlineCode>. Now, here’s the
              equivalent emoji puzzle below.{' '}
              <Highlight>
                Try pressing <H args={{ name: 'run' }} />.
              </Highlight>{' '}
              Again, remember that:
            </P>
            <Ul>
              <UlLi>
                We start with the pair of{' '}
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s.
              </UlLi>
              <UlLi>
                The middle items on the bottom row are labeled as{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />,
                and you can <Bold>ignore them</Bold>.
              </UlLi>
            </Ul>
            <R.Xhje>Equivalent emoji puzzle:</R.Xhje>
            <Hr />
            <P>
              Next, here’s slightly different JS code.{' '}
              <Highlight>
                There’s an extra pair of parentheses around{' '}
                <InlineCode>(spaghetti => spaghetti)('salad')</InlineCode>, so
                this will be evaluated first
              </Highlight>
              , and the result will be different from the last time.
            </P>
            <CodeBlock
              result={`pizza => pizza`}
              caption={guessTheResult}
            >{`(friedPotatoes => pizza => pizza)(
  (spaghetti => spaghetti)("salad")
)`}</CodeBlock>
            <P>
              Let’s take a look at the equivalent emoji puzzle. This time,{' '}
              <Highlight>
                the pair of <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s
                is on the top two rows
              </Highlight>{' '}
              instead.{' '}
              <Highlight>
                Try pressing <H args={{ name: 'run' }} />
              </Highlight>{' '}
              and see what happens!
            </P>
            <R.Hyvj>
              This time, the pair of{' '}
              <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s is
              <br />
              on the top two rows instead
            </R.Hyvj>
            <P>
              <Bold>Summary:</Bold>
            </P>
            <Ul>
              <UlLi>
                In <Bold>JavaScript</Bold>, you can change the evaluation order
                of an expression by placing <Highlight>parentheses</Highlight>{' '}
                on different locations.
              </UlLi>
              <UlLi>
                In <Bold>emoji puzzles</Bold>, you can change the evaluation
                order by placing{' '}
                <Highlight>
                  the numbers (e.g.{' '}
                  <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s and{' '}
                  <InlinePrioritiesLabel>2</InlinePrioritiesLabel>’s)
                </Highlight>{' '}
                on different locations.
              </UlLi>
            </Ul>
          </Alert>
          <Subheading step={step++} coveredIn={6}>
            Church numerals
          </Subheading>
          <P>
            Let’s take a look at something more interesting. Here’s a function
            called <InlineCode>convert</InlineCode> that takes a function as an
            argument. It then applies <InlineCode>(n => n + 1)(0)</InlineCode>{' '}
            to it.
          </P>
          <CodeBlock>{`function convert(f) {
  return f(n => n + 1)(0)
}`}</CodeBlock>
          <P>
            Now, suppose that we apply <InlineCode>convert</InlineCode> on this
            function: <InlineCode>sushi => sandwich => sandwich</InlineCode>.
            What would the result be?{' '}
            <Highlight>
              Try to guess before pressing the <H args={{ name: 'run' }} />{' '}
              button!
            </Highlight>
          </P>
          <CodeBlock result="0" caption={guessTheResult}>{`function convert(f) {
  return f(n => n + 1)(0)
}

convert(sushi => sandwich =>
  sandwich
)`}</CodeBlock>
          <P>
            The result is <InlineCode>0</InlineCode> because:
          </P>
          <Ul>
            <UlLi>
              <InlineCode>sushi</InlineCode> is bound to{' '}
              <InlineCode>n => n + 1</InlineCode>
            </UlLi>
            <UlLi>
              <InlineCode>sandwich</InlineCode> is bound to{' '}
              <InlineCode>0</InlineCode>
            </UlLi>
            <UlLi>
              And it returns <InlineCode>sandwich</InlineCode>, which is{' '}
              <InlineCode>0</InlineCode>.
            </UlLi>
          </Ul>
          <P>
            <Bold>Now, what if the input changes as follows?</Bold>{' '}
            <Highlight>
              Try pressing <H args={{ name: 'run' }} /> on each example.
            </Highlight>
          </P>
          <CodeBlock result="1">{`convert(sushi => sandwich =>
  sushi(sandwich)
)`}</CodeBlock>
          <CodeBlock result="2">{`convert(sushi => sandwich =>
  sushi(sushi(sandwich))
)`}</CodeBlock>
          <CodeBlock result="3">{`convert(sushi => sandwich =>
  sushi(sushi(sushi(sandwich)))
)`}</CodeBlock>
          <P>
            The results are <InlineCode>1</InlineCode>,{' '}
            <InlineCode>2</InlineCode>, and <InlineCode>3</InlineCode>{' '}
            respectively because:
          </P>
          <Ul>
            <UlLi>
              <InlineCode>sushi</InlineCode> is bound to{' '}
              <InlineCode>n => n + 1</InlineCode>
            </UlLi>
            <UlLi>
              <InlineCode>sandwich</InlineCode> is bound to{' '}
              <InlineCode>0</InlineCode>
            </UlLi>
            <UlLi>
              So it applies <InlineCode>n => n + 1</InlineCode> to{' '}
              <InlineCode>0</InlineCode> for the number of times{' '}
              <InlineCode>sushi</InlineCode> is used in the function body.
            </UlLi>
          </Ul>
          <Alert backgroundColor="pink">
            <P>
              <Bold>What we learned so far:</Bold> If we have a function that
              has one of the following patterns:
            </P>
            <CodeBlock>{`// a & b can be any variable name
a => b => b
a => b => a(b)
a => b => a(a(b))
a => b => a(a(a(b)))
// ...and so on...`}</CodeBlock>
            <P>
              Then, when the function is passed to{' '}
              <InlineCode>convert()</InlineCode>,{' '}
              <Highlight>
                it returns the number of times <InlineCode>a</InlineCode> is
                applied to <InlineCode>b</InlineCode>
              </Highlight>{' '}
              in the function body.
            </P>
            <CodeBlock>{`convert(a => b => b)          // 0
convert(a => b => a(b))       // 1
convert(a => b => a(a(b)))    // 2
convert(a => b => a(a(a(b)))) // 3
// ...and so on...`}</CodeBlock>
          </Alert>
          <P>
            These functions that can be converted to numbers using{' '}
            <InlineCode>convert()</InlineCode> have a{' '}
            <Italic>special name.</Italic> They are called{' '}
            <ExternalLink href="https://en.wikipedia.org/wiki/Church_encoding">
              <Bold>Church numerals</Bold>
            </ExternalLink>
            . Each function represents some Church numeral.
          </P>
          <CodeBlock>{`// Church numeral 0
a => b => b

// Church numeral 1
a => b => a(b)

// Church numeral 2
a => b => a(a(b)))

// Church numeral 3
a => b => a(a(a(b))))

// ...and so on...`}</CodeBlock>
          <P>
            <Bold>You might be wondering:</Bold> “What’s the point of this?”
            I’ll explain it shortly, but before I do so, let me explain how my
            emoji puzzles can express Church numerals.
          </P>
        </BubbleQuoteContext.Provider>
      </Container>
      <EpisodePageFooter />
    </Page>
  ) : (
    <></>
  )
}
