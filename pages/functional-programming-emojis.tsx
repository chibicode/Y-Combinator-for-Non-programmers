/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core'
import { useState, useContext } from 'react'
import Page from 'src/components/Page'
import Head from 'next/head'
import {
  ns,
  radii,
  fontSizes,
  colors,
  spaces,
  maxWidths,
  lineHeights
} from 'src/lib/theme'
import { lessonTitle } from 'src/lib/titles'
import Container from 'src/components/Container'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import EmojiSeparator from 'src/components/EmojiSeparator'
import ExpressionRunnerCaptionWrapper from 'src/components/ExpressionRunnerCaptionWrapper'
import BottomRightBadge from 'src/components/BottomRightBadge'
import Emoji from 'src/components/Emoji'
import H from 'src/components/H'
import EmojiForLetter from 'src/components/EmojiForLetter'
import EpisodeHero from 'src/components/EpisodeHero'
import InlinePrioritiesLabel from 'src/components/InlinePrioritiesLabel'
import EpisodePageFooter from 'src/components/EpisodePageFooter'
import EmojiNumber from 'src/components/EmojiNumber'
import CustomEmoji from 'src/components/CustomEmoji'
import ButtonWithTouchActiveStates from 'src/components/ButtonWithTouchActiveStates'
import * as R from 'src/components/Runners'
import { JimsTalk } from 'src/contents/0.en'
import {
  ExternalLink,
  P,
  Italic,
  HighlightBold,
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
import { enBaseUrl, githubRepo } from 'src/lib/meta'
import BaseAlert, { alertSpacing, AlertProps } from 'src/components/Alert'
import PrismHighlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwlLight'
import BubbleQuoteContext from 'src/components/BubbleQuoteContext'
import EmojiWithText from 'src/components/EmojiWithText'
import ExpressionRunnerConfigContext from 'src/components/ExpressionRunnerConfigContext'
import TwitterEmbed from 'src/components/TwitterEmbed'
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
import TwoColGrid from 'src/components/TwoColGrid'

const numSteps = 10

const date = DateTime.fromISO('2019-11-08T12:00:00Z')
const dateString = date
  .setLocale('en')
  .setZone('America/Los_Angeles')
  .toFormat('LLL d, yyyy')
const dateSchemaString = date.setZone('America/Los_Angeles').toISO()

const title = 'You Can Explain Functional Programming Using Emojis'
const description =
  'A visual representation of Lambda calculus, Church encoding, and Y combinator'
const url = `${enBaseUrl}/functional-programming-emojis`
const ogImageUrl = `${enBaseUrl}/static/images/blog-og.png`

const tweetUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
  url
)}&via=chibicode&text=${encodeURIComponent(title)}`

const Ads = ({ shareId }: { shareId?: string }) => (
  <>
    <Ul>
      <UlLi>
        I’d love it if you could share this on Twitter.{' '}
        <ExternalLink href={tweetUrl}>
          <HighlightBold>
            <CustomEmoji type="twitter" /> Click here to Tweet this article.
          </HighlightBold>
        </ExternalLink>
      </UlLi>
      <UlLi>
        Also, the source code is{' '}
        <ExternalLink href={githubRepo}>available on GitHub</ExternalLink>:{' '}
        <iframe
          css={css`
            vertical-align: middle;
            transform: translateY(-0.1em);
          `}
          src="https://ghbtns.com/github-btn.html?user=chibicode&repo=Y-Combinator-for-Non-programmers&type=star&count=true&size=large"
          frameBorder="0"
          scrolling="0"
          width="160px"
          height="30px"
        ></iframe>
      </UlLi>
      <UlLi>
        You can also discuss this on{' '}
        <ExternalLink href="https://news.ycombinator.com/item?id=21484016">
          Hacker News
        </ExternalLink>
        .
      </UlLi>
    </Ul>
    {shareId && (
      <>
        <P>Here’s my Twitter:</P>
        <TwitterEmbed showCard id={shareId} />
      </>
    )}
  </>
)

const Alert = (props: AlertProps) => (
  <BubbleQuoteContext.Provider value={{ inQuote: false }}>
    <div
      css={css`
        margin-left: ${spaces('-0.25')};
        margin-right: ${spaces('-0.25')};

        ${ns} {
          margin-left: 0;
          margin-right: 0;
        }
      `}
    >
      <BaseAlert {...props} />
    </div>
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
        id={step !== 'none' ? `${step}` : undefined}
        css={css`
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
      font-weight: 400;
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
  caption,
  noHighlight
}: {
  children: string
  shouldHighlight?: (lineNumber: number, tokenNumber: number) => boolean
  result?: string
  pointToRunButton?: boolean
  defaultResultVisible: boolean
  caption?: React.ReactNode
  noHighlight?: boolean
}) => {
  const [resultVisible, setResultVisible] = useState(defaultResultVisible)
  const buttonOnClick = () => setResultVisible(true)
  return (
    <div
      css={css`
        margin-left: auto;
        margin-right: auto;
        max-width: ${maxWidths('xs')};
      `}
    >
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
        language={noHighlight ? 'diff' : 'javascript'}
      >
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre
            css={[
              alertSpacing,
              css`
                background-color: ${colors('codeBg')};
                font-weight: 400;
                font-family: ${codeFontFamily};
                margin-top: ${caption ? 0 : spaces(1.75)};
                margin-left: ${spaces('-0.25')};
                margin-right: ${spaces('-0.25')};
                margin-bottom: ${result ? 0 : spaces(1.75)};
                font-size: ${fontSizes(0.8)};

                ${ns} {
                  margin-left: 0;
                  margin-right: 0;
                  font-size: ${fontSizes(0.85)};
                }
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
                            background: ${colors('yellow300')};
                            border-bottom: 2px solid ${colors('deepOrange400')};
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
              margin-left: ${spaces('-0.25')};
              margin-right: ${spaces('-0.25')};
              ${ns} {
                margin-left: 0;
                margin-right: 0;
              }
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
                            margin-left: 0px;
                          }
                          50% {
                            margin-left: -5px;
                          }
                          100% {
                            margin-left: 0px;
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
    </div>
  )
}

CodeBlock.defaultProps = {
  defaultResultVisible: false
}

const PointToRunButton = ({ children }: { children: React.ReactNode }) => {
  const config = useContext(ExpressionRunnerConfigContext)
  return (
    <ExpressionRunnerConfigContext.Provider
      value={{
        ...config,
        pointToRunButton: true
      }}
    >
      {children}
    </ExpressionRunnerConfigContext.Provider>
  )
}

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
    before pressing the <H args={{ name: 'run' }} /> button.
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
        <title key="title">{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={lessonTitle} />
        <meta property="og:url" content={url} />
        <link rel="canonical" href={url} />
        <meta property="og:description" content={description} />
        <meta name="description" content={description} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="article:published_time" content={dateSchemaString} />
      </Head>
      <Container
        Component="article"
        size="smsm"
        horizontalPadding={0.875}
        cssOverrides={css`
          padding-top: ${spaces(1.5)};
          padding-bottom: ${spaces(6)};
        `}
      >
        <EpisodeHero mainTitle={title} threeLineTitle />
        <h2
          css={css`
            text-align: center;
            color: ${colors('indigo400')};
            font-size: ${fontSizes(1)};
            font-style: italic;
            font-weight: normal;
            margin: 0 0 ${spaces(0.5)};

            ${ns} {
              font-size: ${fontSizes(1.2)};
            }
          `}
        >
          {description}
        </h2>
        <div
          css={css`
            font-size: ${fontSizes(0.8)};
            color: ${colors('grey600')};
            text-align: center;
            margin-bottom: ${spaces(2)};
          `}
        >
          Shu Uesugi (
          <ExternalLink href="https://twitter.com/chibicode">
            @chibicode
          </ExternalLink>
          )
        </div>
        <img
          src="/static/images/animated@2x.gif"
          alt={title}
          css={css`
            width: 6rem;
            margin: ${spaces(2)} auto ${spaces(2.25)};
            display: block;
            ${ns} {
              width: 7rem;
            }
          `}
        />
        <ExpressionRunnerConfigContext.Provider
          value={{ churchNumerals: true }}
        >
          <BubbleQuoteContext.Provider value={{ inQuote: true }}>
            <P>
              <Highlight>
                Last month, I published a free online course called “
                <InternalLink href="/">
                  <Bold>Y Combinator for Non-programmers</Bold>
                </InternalLink>
                ”.
              </Highlight>{' '}
              In this 17-page course, I explain functional programming concepts
              such as lambda calculus, Church encoding, and Y combinator in a
              way such that people{' '}
              <Italic>who have zero programming knowledge</Italic> can
              understand.
            </P>
            <P>
              I didn’t use any code to explain these concepts. Instead,{' '}
              <Highlight>
                I created something called “<Bold>emoji puzzles</Bold>” that can{' '}
                <Italic>visualize</Italic> functional code.
              </Highlight>{' '}
              In this article, I’ll explain how my emoji puzzles can represent
              and execute functional code visually.
            </P>
            <Subheading noHrTop step="none" coveredIn="none">
              Quick Demo
            </Subheading>
            <P>
              First, here’s simple, functional JS code.{' '}
              <Highlight>
                Try pressing <H args={{ name: 'run' }} /> below
              </Highlight>{' '}
              to see the result:
            </P>
            <CodeBlock
              result={`'sandwich'`}
              pointToRunButton
              caption={<>Functional JS code:</>}
            >{`(sushi => sushi)('sandwich')`}</CodeBlock>
            <P>
              The above code can be expressed visually using my{' '}
              <Bold>emoji puzzle</Bold> below.{' '}
              <Highlight>
                Try pressing <H args={{ name: 'run' }} />
              </Highlight>
              :
            </P>
            <PointToRunButton>
              <R.Itbm>Equivalent emoji puzzle:</R.Itbm>
            </PointToRunButton>
            <P>
              I’ll explain how it works shortly. If you like to teach
              programming, or if you like functional programming, I think you’ll
              enjoy this article.
            </P>
            <Subheading noHrTop step="none" coveredIn="none">
              Overview
            </Subheading>
            <P>
              This article has <Bold>10 steps:</Bold>
            </P>
            <Ul>
              <UlLi>
                <Bold>In the first half (steps 1 - 5):</Bold> I’ll show you how
                simple JavaScript code can be represented visually using my
                emoji puzzles. You’ll be able to understand it even if you’re
                not familiar with JS.
              </UlLi>
              <UlLi>
                <Bold>In the second half (steps 6 - 10):</Bold> I’ll talk about
                how I used my emoji puzzles to explain functional programming
                concepts such as lambda calculus, Church encoding, and Y
                combinator.
              </UlLi>
            </Ul>
            <P>Some announcements:</P>
            <Ads />
            <Alert>
              <div
                css={css`
                  font-size: ${fontSizes(0.85)};
                `}
              >
                <Emoji>⚠️</Emoji> This article is for programmers. If you’re a
                non-programmer, check out my course instead: “
                <InternalLink href="/">
                  <Bold>Y Combinator for Non-programmers</Bold>
                </InternalLink>
                ”.
              </div>
            </Alert>
            <Subheading step={step++} coveredIn={3}>
              Identity function in JS
            </Subheading>
            <P>
              Take a look at the following code. It’s an{' '}
              <Italic>identity function</Italic> in JavaScript that returns the
              argument.
            </P>
            <CodeBlock>{`// Identity function in JS
sushi => sushi`}</CodeBlock>
            <P>
              If you apply the above function on a string{' '}
              <InlineCode>'sandwich'</InlineCode>, the result will be{' '}
              <InlineCode>'sandwich'</InlineCode>.
            </P>
            <CodeBlock>{`// The result will be 'sandwich'
(sushi => sushi)('sandwich')`}</CodeBlock>
            <P>
              One day, I realized that the above JS code can be{' '}
              <Italic>described visually</Italic> using emojis like below. I
              called this an “<Bold>emoji puzzle</Bold>”.
            </P>
            <R.Ilpo>
              An “<Bold>emoji puzzle</Bold>” that visually describes
              <br />
              <InlineCode>(sushi => sushi)('sandwich')</InlineCode>
            </R.Ilpo>
            <P>
              The above emoji puzzle is equivalent to the earlier JS code.
              First, the identity function{' '}
              <InlineCode>sushi => sushi</InlineCode>…
            </P>
            <CodeBlock
              shouldHighlight={(lineNumber, tokenNumber) =>
                lineNumber === 0 && tokenNumber > 0 && tokenNumber < 5
              }
            >{`(sushi => sushi)('sandwich')`}</CodeBlock>
            <P>
              …is represented by <Italic>the bottom two items</Italic>, which
              are both <EmojiWithText letter="a" />.
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
              …is represented by <Italic>the top item</Italic>, which is a{' '}
              <EmojiWithText letter="b" />.
            </P>
            <DimUnhighlighted>
              <R.Vowa>
                The argument <InlineCode>'sandwich'</InlineCode> is represented
                <br />
                by the top item
              </R.Vowa>
            </DimUnhighlighted>
            <P>
              That’s how my emoji puzzles can visually describe a simple JS
              expression. Next, let’s talk about how we can{' '}
              <H args={{ name: 'run', lowerCase: true }} /> it.
            </P>
            <Alert backgroundColor="brown">
              <P>
                <Bold>Note:</Bold> To keep things simple, emoji puzzles don’t
                distinguish between variable names (e.g.{' '}
                <InlineCode>sushi</InlineCode>) and strings (e.g.{' '}
                <InlineCode>'sushi'</InlineCode>). Therefore, both{' '}
                <InlineCode>sushi</InlineCode> and{' '}
                <InlineCode>'sushi'</InlineCode> will be represented as{' '}
                <EmojiForLetter letter="a" size="semilg" />.
              </P>
              <P
                css={css`
                  margin-bottom: 0;
                `}
              >
                <Bold>Why emojis?</Bold> I used emojis because they are not
                scary-looking for non-programers. I used food emojis because…I
                like food. <Emoji>😉</Emoji>
              </P>
            </Alert>
            <Subheading step={step++} coveredIn={4}>
              Running the function
            </Subheading>
            <P>
              I’ve added the <H args={{ name: 'run' }} /> button to the JS code
              snippet below. <Highlight>If you press it,</Highlight> you’ll see
              that the result is <InlineCode>'sandwich'</InlineCode>.
            </P>
            <CodeBlock
              result={`'sandwich'`}
              pointToRunButton
            >{`(sushi => sushi)('sandwich')`}</CodeBlock>
            <P>
              We can also “run” the equivalent emoji puzzle and get the same
              result.{' '}
              <Highlight>
                Try pressing the <H args={{ name: 'run' }} /> button below.
              </Highlight>
            </P>
            <PointToRunButton>
              <R.Itbm>
                An emoji puzzle that’s equivalent to
                <br />
                <InlineCode>(sushi => sushi)('sandwich')</InlineCode>
              </R.Itbm>
            </PointToRunButton>
            <P>
              The result is a <EmojiWithText letter="b" />, which is the same as
              what happens when you run the equivalent JS code.
            </P>
            <P>
              So, you can <H args={{ name: 'run', lowerCase: true }} /> an emoji
              puzzle just as you can run a piece of JS code.{' '}
              <Highlight>
                This is how I taught functional programming to non-programmers
                in my course (
                <InternalLink href="/">
                  Y Combinator for Non-programmers
                </InternalLink>
                )—without showing any code.
              </Highlight>
            </P>
            <P>
              <Bold>Let’s take a look at another example.</Bold> Here’s a piece
              of JS code that’s slightly different from before. It’s a function
              that <Italic>ignores the input</Italic> and always returns{' '}
              <InlineCode>'pizza'</InlineCode>.
            </P>
            <CodeBlock>{`// A function that ignores the input
// and always returns 'pizza'
sushi => 'pizza'`}</CodeBlock>
            <P>
              Let’s run the above code with <InlineCode>'sandwich'</InlineCode>{' '}
              as the argument. <H args={{ name: 'pressRun' }} />
            </P>
            <CodeBlock
              result={`'pizza'`}
            >{`(sushi => 'pizza')('sandwich')`}</CodeBlock>
            <P>
              As expected, the result is <InlineCode>'pizza'</InlineCode>. Now,
              this code can be represented using an emoji puzzle as follows.{' '}
              <H args={{ name: 'pressRun' }} />
            </P>
            <R.Qcme>
              An emoji puzzle that’s equivalent to
              <br />
              <InlineCode>(sushi => 'pizza')('sandwich')</InlineCode>
            </R.Qcme>
            <P>
              Just like the JS code, the emoji puzzle ended up with a{' '}
              <EmojiWithText letter="f" /> after running it.
            </P>
            <Alert backgroundColor="pink">
              <P>
                <Bold>What we have learned so far:</Bold> Simple JS code like
                below can be represented using emoji puzzles.
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
              If you know how to code, you have a <Italic>mental model</Italic>{' '}
              of how function evaluation works:
            </P>
            <Ul>
              <UlLi>
                If you see <InlineCode>(sushi => sushi)('sandwich')</InlineCode>
                , you can quickly figure out that the result would be{' '}
                <InlineCode>'sandwich'</InlineCode>.
              </UlLi>
              <UlLi>
                If you see{' '}
                <InlineCode>(sushi => 'pizza')('sandwich')</InlineCode>, you
                know that the result would be <InlineCode>'pizza'</InlineCode>.
              </UlLi>
              <UlLi>
                You know what free variables and bound variables mean.
              </UlLi>
            </Ul>
            <P>
              On the other hand, most non-programmers don’t have a mental model
              of how function evaluation works. To help them develop the mental
              model,{' '}
              <Highlight>
                I created a <Italic>step-by-step visualization</Italic> of
                function evaluation rules using emoji puzzles.
              </Highlight>
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
              . This button is a bit different from the last time—it shows{' '}
              <Italic>every step</Italic> that happens in between.
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
                <BottomRightBadge inline bottomRightBadgeType="callArg" /> (for
                “<Bold>T</Bold>op”), the left item is labeled as{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" /> (for
                “<Bold>L</Bold>eft”), and the right item is labeled as{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                (for “<Bold>R</Bold>ight”).
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
              The above steps are a visual representation of how functions are
              evaluated. They are equivalent to how JavaScript evaluates{' '}
              <InlineCode>(sushi => sushi)('sandwich')</InlineCode>.
            </P>
            <P>
              By learning these rules, non-programmers will be able to evaluate
              functions intuitively.
            </P>
            <Alert>
              <P>
                <Bold>Note:</Bold> The above steps would look{' '}
                <Italic>very</Italic> confusing to most programmers. As
                programmers, we already know how to evaluate functional
                expressions, and we instinctively try to map the above diagrams
                to code in our head.
              </P>
              <P>
                But in my testing,{' '}
                <Italic>
                  it seems to be less confusing to non-programmers
                </Italic>{' '}
                who don’t already have a mental model of function evaluation.
                Furthermore,{' '}
                <InternalLink href="/">in the course itself</InternalLink>, I
                slow down and spend a lot more time covering the above rules—the
                explanations are spread out in a full page (
                <InternalLink href="/4">here</InternalLink>
                ). And I don’t show any code in my course—I only show emoji
                puzzles, so one less source of confusion compared to this
                article.
              </P>
              <P>
                One thing I learned is that the feedback on my course from
                programmers and non-programmers are complete opposites—
                <Italic>generally negative from programmers</Italic> but{' '}
                <Italic>generally positive from non-programmers</Italic>. I
                believe that’s because{' '}
                <Bold>
                  many programmers find that using code is simpler than using
                  the above diagrams, but many non-programmers think the
                  opposite.
                </Bold>
              </P>
              <P
                css={css`
                  margin-bottom: 0;
                `}
              >
                Some people have incredible difficulty understanding code or
                math symbols, and sometimes visual alternatives help them. I
                believe the more alternative teaching methods are offered in CS
                education, the better.
              </P>
            </Alert>
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
                Try pressing the <H args={{ name: 'run' }} /> button and see
                what happens:
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
            <R.Gogn>
              <StepOne />
            </R.Gogn>
            <P>
              <Bold>Step 2.</Bold>{' '}
              <Highlight>
                This time, there’s <Bold>no match</Bold> between{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" /> and{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />.
                The bottom-left is <EmojiWithText letter="a" />, but the
                bottom-right is <EmojiWithText letter="f" />.
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
              So we’re left with a <EmojiWithText letter="f" />. That’s how the
              emoji puzzle visualizes the evaluation of a function when there’s
              no matching variable in the function body.
            </P>
            <Alert backgroundColor="blue">
              <P>
                <Bold>More examples (optional read):</Bold> Here are more
                examples that might be helpful for your understanding. You can{' '}
                <Highlight>
                  press <H args={{ name: 'run' }} />
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
              Let’s take a look at more complicated functional JS expressions
              and see if they can be represented using an emoji puzzle.
            </P>
            <P>
              Check out the following JS expression, and
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
                  before pressing the <H args={{ name: 'run' }} /> button.
                </>
              }
            >{`(sushi => sandwich => sushi)(
  'hamburger'
)('chicken')`}</CodeBlock>
            <P>
              The result was <InlineCode>{`'hamburger'`}</InlineCode>. It’s
              because:
            </P>
            <Ul>
              <UlLi>
                <InlineCode>{'sushi'}</InlineCode> is bound to{' '}
                <InlineCode>{`'hamburger'`}</InlineCode>,
              </UlLi>
              <UlLi>
                <InlineCode>{'sandwich'}</InlineCode> is bound to{' '}
                <InlineCode>{`'chicken'`}</InlineCode>,
              </UlLi>
              <UlLi>
                And it returns the value of <InlineCode>{'sushi'}</InlineCode>,
                which is <InlineCode>{`'hamburger'`}</InlineCode>.
              </UlLi>
            </Ul>
            <P>Now, here’s the equivalent emoji puzzle:</P>
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
              How do we evaluate this function? Well, in JS, we first evaluate
              the function call with the argument{' '}
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
              Equivalently, in an emoji puzzle,{' '}
              <Highlight>we evaluate the bottom two rows first.</Highlight> We
              ignore the top row initially, which is shaded in blue.
            </P>
            <R.Bcgp>
              <Bold>Focus</Bold> on <Italic>the bottom two rows</Italic>, and
              <br />
              <Bold>Ignore</Bold> the <Italic>top row</Italic> for now
            </R.Bcgp>
            <P>
              Also, if you look at the left edge of the puzzle above, the bottom
              two rows correspond to the pair of{' '}
              <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>
              ’s. That’s how you know that you must start with the bottom two
              rows.{' '}
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
                The middle item on the bottom row is labeled as{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
                (for “<Bold>M</Bold>iddle”), and you can <Bold>ignore it</Bold>.
              </Highlight>{' '}
              You can pretend that{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              ’s don’t exist.
            </P>
            <P>
              Let’s take a look at the next few steps in this iteration, which
              is just like what we saw earlier:
            </P>
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
                  <br />
                  (but it’s not done yet!)
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
              the same as what the JS code evaluated to.
            </P>
            <Alert backgroundColor="pink">
              <P>
                <Bold>What we have learned so far:</Bold> Complex functional JS
                expressions can be represented and evaluated using an emoji
                puzzle.
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
                <Bold>More examples (optional read):</Bold> Here’s another
                example that might be helpful for your understanding. Check out
                the following JS expression, and{' '}
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
                  The middle item on the bottom row is labeled as{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                  , and you can <Bold>ignore it</Bold>.
                </UlLi>
              </Ul>
              <R.Xhje>Equivalent emoji puzzle:</R.Xhje>
              <Hr />
              <P>
                Next, here’s slightly different JS code. Compared to the last
                time,{' '}
                <Highlight>
                  there’s an extra pair of parentheses around{' '}
                  <InlineCode>(spaghetti => spaghetti)('salad')</InlineCode>,
                  which changes the result.
                </Highlight>
              </P>
              <CodeBlock
                result={`pizza => pizza`}
                caption={guessTheResult}
              >{`// There’s an extra pair of parens around
// (spaghetti => spaghetti)("salad")
(friedPotatoes => pizza => pizza)(
  (spaghetti => spaghetti)("salad")
)`}</CodeBlock>
              <P>
                Let’s take a look at the equivalent emoji puzzle. This time,{' '}
                <Highlight>
                  the pair of <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s
                  is on the top two rows
                </Highlight>{' '}
                instead. So we start with the top two rows this time.{' '}
                <Highlight>
                  Try pressing <H args={{ name: 'run' }} />
                </Highlight>{' '}
                and see what happens.
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
                  In <Bold>JavaScript</Bold>, you can change the evaluation
                  order of an expression by placing{' '}
                  <Highlight>parentheses</Highlight> on different locations.
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
            <Alert backgroundColor="yellow">
              <div
                css={css`
                  font-size: ${fontSizes(0.85)};
                `}
              >
                <P>
                  <Bold>You’re halfway there:</Bold> 5 steps down, 5 more to go!
                </P>
                <P
                  css={css`
                    margin-bottom: 0;
                  `}
                >
                  If you’re thinking of taking a break, I’d appreciate it if you
                  could{' '}
                  <ExternalLink href={tweetUrl}>
                    <CustomEmoji type="twitter" />{' '}
                    <Bold>Share this article on Twitter</Bold>
                  </ExternalLink>{' '}
                  before you close this page.
                </P>
              </div>
            </Alert>
            <P>
              From now on, we’ll apply what we’ve learned so far to solve more
              interesting problems.
            </P>
            <P>
              Here’s a function called <InlineCode>convert</InlineCode> that
              takes a function <InlineCode>f</InlineCode> as an argument. It
              then calls <InlineCode>f</InlineCode> with{' '}
              <InlineCode>(n => n + 1)(0)</InlineCode>.
            </P>
            <CodeBlock>{`function convert(f) {
  return f(n => n + 1)(0)
}`}</CodeBlock>
            <P>
              Now, suppose that we apply <InlineCode>convert</InlineCode> on
              this function:{' '}
              <InlineCode>sushi => sandwich => sandwich</InlineCode>. What would
              the result be?{' '}
              <Highlight>
                Try to guess before pressing the <H args={{ name: 'run' }} />{' '}
                button.
              </Highlight>
            </P>
            <CodeBlock
              result="0"
              caption={guessTheResult}
            >{`function convert(f) {
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
              <Bold>Next:</Bold> What if the input to{' '}
              <InlineCode>convert</InlineCode> changes as follows?{' '}
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
                <Bold>What we have learned so far:</Bold> If we have a function
                that has one of the following patterns:
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
              <Bold>Important:</Bold>{' '}
              <Highlight>
                These functions that can be converted to a number using{' '}
                <InlineCode>convert()</InlineCode> have a{' '}
                <Italic>special name.</Italic>
              </Highlight>{' '}
              They are called{' '}
              <ExternalLink href="https://en.wikipedia.org/wiki/Church_encoding">
                <Bold>Church numerals</Bold>
              </ExternalLink>
              . Each function represents a Church numeral, like this:
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
              Don’t worry—I’ll tell you why Church numerals are interesting
              shortly. But before I do, let me explain{' '}
              <Highlight>
                how emoji puzzles can express Church numerals.
              </Highlight>
            </P>
            <P>
              Here’s an emoji puzzle that represents{' '}
              <InlineCode>sushi => sandwich => sandwich</InlineCode>, which is{' '}
              Church numeral <Bold>0</Bold>.
            </P>
            <R.Jarm>
              <Bold>Represents:</Bold>
              <br />
              <InlineCode>sushi => sandwich => sandwich</InlineCode>
              <br />
              (Church numeral <Bold>0</Bold>)
            </R.Jarm>
            <P>
              <Bold>Here’s what’s new:</Bold>{' '}
              <Highlight>
                We now have the “<H args={{ name: 'convertToChurchNumeral' }} />
                ” button below the puzzle which converts it to the corresponding
                Church number.
              </Highlight>{' '}
              Try pressing it:
            </P>
            <PointToRunButton>
              <R.Jjjh></R.Jjjh>
            </PointToRunButton>
            <P>
              Other Church numeral functions can also be represented using emoji
              puzzles, and they can be converted to a number. And we can use
              emojis other than <EmojiForLetter letter="a" /> and{' '}
              <EmojiForLetter letter="b" />
              —as long as they follow the same pattern.
            </P>
            <R.Mifg>
              <Bold>Represents:</Bold>
              <br />
              <InlineCode>
                hamburger => chicken => hamburger(chicken)
              </InlineCode>
              <br />
              (Church numeral <Bold>1</Bold>)
            </R.Mifg>
            <R.Fgen>
              Church numeral <Bold>2</Bold>
            </R.Fgen>
            <R.Pebp>
              Church numeral <Bold>3</Bold>
            </R.Pebp>
            <P>
              Now that we’ve covered the basics of Church numerals, we’ll talk
              next about why Church numerals are interesting.
            </P>
            <Subheading step={step++} coveredIn={8}>
              Arithmetic with functions
            </Subheading>
            <P>
              Church numerals are interesting because{' '}
              <Italic>they let you do arithmetic with functions.</Italic> Take a
              look at this function:
            </P>
            <CodeBlock>{`sushi => sandwich => pizza =>
  sandwich(
    sushi(sandwich)(pizza)
  )`}</CodeBlock>
            <P>
              It looks pretty complicated, but don’t worry too much. Now,
              suppose that:
            </P>
            <Ul>
              <UlLi>
                We apply the above function to the Church numeral zero (has the
                pattern <InlineCode>a => b => b</InlineCode>), and
              </UlLi>
              <UlLi>
                Run <InlineCode>convert()</InlineCode> (from earlier) on it.
              </UlLi>
              <UlLi>What would the result be?</UlLi>
            </Ul>
            <P>
              Let’s take a look.{' '}
              <Highlight>
                Try to guess before pressing the <H args={{ name: 'run' }} />{' '}
                button.
              </Highlight>
            </P>
            <CodeBlock result="1">{`// Function from the above
const f = sushi => sandwich => pizza =>
  sandwich(
    sushi(sandwich)(pizza)
  )

// Church numeral zero
const zero = chicken => salad => salad

// What happens when you apply f to zero,
// and convert it?
convert(f(zero))`}</CodeBlock>
            <P>
              The result is <InlineCode>1</InlineCode>, which is 1 greater than
              the input Church numeral, which was <InlineCode>0</InlineCode>. In
              other words, <InlineCode>0</InlineCode> became{' '}
              <InlineCode>1</InlineCode>.
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={0} />,
                <CustomEmoji type="singleArrow" />,
                <EmojiNumber number={1} />
              ]}
              description={
                <>
                  <InlineCode>0</InlineCode> became <InlineCode>1</InlineCode>
                </>
              }
            />
            <P>
              <Bold>Here’s the secret:</Bold>{' '}
              <Highlight>
                This function <InlineCode>f</InlineCode> we used actually{' '}
                <Bold>adds 1</Bold> to the input Church numeral.
              </Highlight>{' '}
              When you apply <InlineCode>f</InlineCode> to a Church numeral, it
              returns a <Italic>new Church numeral</Italic> that’s 1 greater
              than before.
            </P>
            <CodeBlock>{`// If we apply this function to a
// Church numeral, it returns a new
// Church numeral that’s greater by 1.
const f = sushi => sandwich => pizza =>
  sandwich(
    sushi(sandwich)(pizza)
  )`}</CodeBlock>
            <P>You can try out more examples to verify this:</P>
            <CodeBlock result="2">{`// Church numeral one
const one = chicken => salad =>
  chicken(salad)

convert(f(one))`}</CodeBlock>
            <CodeBlock result="3">{`// Church numeral two
const two = chicken => salad =>
  chicken(chicken(salad))

convert(f(two))`}</CodeBlock>
            <P>
              This is what I mean by “
              <Italic>doing arithmetic with functions</Italic>”:
            </P>
            <Ul>
              <UlLi>
                <Highlight>
                  By using a Church numeral function that can be converted to{' '}
                  <InlineCode>someNumber</InlineCode>…
                </Highlight>
              </UlLi>
              <UlLi>
                <Highlight>
                  …and the function <InlineCode>f</InlineCode> we saw earlier,
                </Highlight>
              </UlLi>
              <UlLi>
                <Highlight>
                  You can calculate <InlineCode>someNumber + 1</InlineCode>.
                </Highlight>
              </UlLi>
            </Ul>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="blankNumber" />,
                <Emoji>➕</Emoji>,
                <EmojiNumber number={1} />
              ]}
              description={
                <>
                  You can calculate <InlineCode>someNumber + 1</InlineCode>
                  <br />
                  using just functions
                </>
              }
            />
            <P>
              <Highlight>
                Now, let’s see if we can explain this to non-programmers using
                emoji puzzles.
              </Highlight>
            </P>
            <P>
              First, here’s an emoji puzzle representation of the Church numeral{' '}
              <Bold>0</Bold>. You can confirm that it can be converted to{' '}
              <EmojiNumber number={0} /> by pressing the button below.
            </P>
            <R.Hfgh>
              <Bold>Represents:</Bold>
              <br />
              <InlineCode>chicken => salad => salad</InlineCode>
              <br />
              (Church numeral <Bold>0</Bold>)
            </R.Hfgh>
            <P>
              And here’s the function <InlineCode>f</InlineCode> we saw earlier,
              represented as an emoji puzzle:
            </P>
            <CodeBlock>{`const f = sushi => sandwich => pizza =>
  sandwich(
    sushi(sandwich)(pizza)
  )`}</CodeBlock>
            <ExpressionRunnerSeparator halfMarginTop />
            <R.Qyhn>Equivalent emoji puzzle:</R.Qyhn>
            <P>
              Let’s apply <InlineCode>f</InlineCode> to the Church numeral{' '}
              <Bold>0</Bold>. To do that, we just combine the above two emoji
              puzzles and run it. <H args={{ name: 'pressRun' }} />
            </P>
            <R.Afxj>Combined the above two emoji puzzles</R.Afxj>
            <P>
              The result is equivalent to{' '}
              <InlineCode>sandwich => pizza => sandwich(pizza)</InlineCode>,
              which is Church numeral <Bold>1</Bold>.
            </P>
            <R.Uxno>
              <Bold>Represents:</Bold>
              <br />
              <InlineCode>sandwich => pizza => sandwich(pizza)</InlineCode>
              <br />
              (Church numeral <Bold>1</Bold>)
            </R.Uxno>
            <Alert backgroundColor="pink">
              <P>
                <Bold>What just happened:</Bold> An emoji puzzle that can be
                converted to <EmojiNumber number={0} /> became a puzzle that can
                be converted to <EmojiNumber number={1} />.
              </P>
              <R.Pjih></R.Pjih>
              <ExpressionRunnerSeparator />
              <R.Jzwg></R.Jzwg>
              <P
                css={css`
                  margin-bottom: 0;
                `}
              >
                <Bold>In other words:</Bold>{' '}
                <Highlight>
                  We can use an emoji puzzle to calculate{' '}
                  <InlineCode>someNumber + 1</InlineCode>.
                </Highlight>
              </P>
            </Alert>
            <Alert backgroundColor="blue">
              <P>
                <Bold>More examples (optional read):</Bold> Let’s see if we can
                calculate <InlineCode>1 + 1 = 2</InlineCode> using the same
                method. Here’s an emoji puzzle that can be converted to{' '}
                <EmojiNumber number={1} />:
              </P>
              <R.Yfwq>
                <Bold>Represents:</Bold>
                <br />
                <InlineCode>chicken => salad => chicken(salad)</InlineCode>
                <br />
                (Church numeral <Bold>1</Bold>)
              </R.Yfwq>
              <P>
                And let’s combine it with the earlier emoji puzzle and run it.{' '}
                <H args={{ name: 'pressRun' }} />
              </P>
              <R.Egka></R.Egka>
              <P>
                The result is equivalent to Church numeral <Bold>2</Bold> and
                can be converted to <EmojiNumber number={2} />.
              </P>
              <R.Dvio>
                Church numeral <Bold>2</Bold>
              </R.Dvio>
              <P>
                So, it successfully calculated{' '}
                <InlineCode>1 + 1 = 2</InlineCode>. Again, this is what just
                happened:
              </P>
              <R.Kqtz></R.Kqtz>
              <ExpressionRunnerSeparator />
              <R.Cawl></R.Cawl>
            </Alert>
            <Subheading step={step++} coveredIn={15}>
              Multiplications
            </Subheading>
            <P>
              You can do pretty much any computation with Church numerals.
              Consider <Bold>multiplication.</Bold> Here’s a JS function that{' '}
              <Italic>multiplies two Church numerals</Italic>:
            </P>
            <CodeBlock>{`// Multiplies two Church numerals
const mul = sushi => sandwich => pizza =>
  sushi(sandwich(pizza))`}</CodeBlock>
            <P>
              Let’s compute <InlineCode>2 x 3</InlineCode> using the above{' '}
              <InlineCode>mul</InlineCode> function. We use two Church numeral
              functions—one for <InlineCode>2</InlineCode> and the other for{' '}
              <InlineCode>3</InlineCode>, and feed them into{' '}
              <InlineCode>mul</InlineCode>. Take a look at the code below and{' '}
              <Highlight>
                press <H args={{ name: 'run' }} />
              </Highlight>
              :
            </P>
            <CodeBlock result="6">{`// Church numeral two
const two = chicken => salad =>
  chicken(chicken(salad))

// Church numeral three
const three = curry => hamburger =>
  curry(curry(curry(hamburger)))

const result = mul(two)(three)

convert(result)`}</CodeBlock>
            <P>
              The result was <InlineCode>6</InlineCode>, so it successfully
              calculated <InlineCode>2 x 3</InlineCode>.
            </P>
            <P>
              Now, let’s see if we can do the same using emoji puzzles. First,
              here’s an emoji puzzle that’s equivalent to the{' '}
              <InlineCode>mul</InlineCode> function.
            </P>
            <CodeBlock>{`// Multiplies two Church numerals
const mul = sushi => sandwich => pizza =>
  sushi(sandwich(pizza))`}</CodeBlock>
            <ExpressionRunnerSeparator halfMarginTop />
            <R.Nnzx>Equivalent emoji puzzle:</R.Nnzx>
            <P>
              Let’s combine it with emoji puzzles that can be converted to{' '}
              <EmojiNumber number={2} /> and <EmojiNumber number={3} />:
            </P>
            <TwoColGrid
              noBottomNegativeMargin
              noTopNegativeMargin
              maxVariableSize="sm"
              left={
                <>
                  <R.Njqi>
                    Converts to <EmojiNumber number={2} />
                  </R.Njqi>
                </>
              }
              right={
                <>
                  <R.Kdxf>
                    Converts to <EmojiNumber number={3} />
                  </R.Kdxf>
                </>
              }
            />
            <P>
              Here’s the combined puzzle.{' '}
              <Highlight>
                Press <H args={{ name: 'run' }} />
              </Highlight>{' '}
              and see what happens. (Because it takes time, we’ll fast-forward
              it at 4x speed.)
            </P>
            <R.Anfx></R.Anfx>
            <P>
              The result is equivalent to Church numeral <Bold>6</Bold> and can
              be converted to <EmojiNumber number={6} />.
            </P>
            <R.Mili>Church numeral 6</R.Mili>
            <P>
              So emoji puzzles can calculate multiplications too.{' '}
              <InternalLink href="/10">In my course</InternalLink>, I also show
              how we can do <Bold>subtractions</Bold> using emoji puzzles.
              Divisions are very complicated but possible.
            </P>
            <Subheading step={step++} coveredIn={12}>
              Conditionals
            </Subheading>
            <P>
              In addition to arithmetic, we can also implement{' '}
              <Bold>conditionals</Bold> such as <InlineCode>if/else</InlineCode>{' '}
              statements using emoji puzzles.
            </P>
            <P>
              Consider the following JS code. This is a simple{' '}
              <InlineCode>if/else</InlineCode> statement that does different
              things based on what <InlineCode>x</InlineCode> is.
            </P>
            <CodeBlock>{`if (x === 0) {
  // is Zero
} else {
  // is NOT Zero
}`}</CodeBlock>
            <P>
              It turns out that <InlineCode>if/else</InlineCode> statements like
              the above can also be expressed using Church numerals. To save
              time,{' '}
              <Highlight>
                I won’t show JS code this time and will only show the emoji
                puzzle.
              </Highlight>{' '}
              Check out the following:
            </P>
            <R.Pmss>
              An emoji puzzle that represents
              <br />
              <InlineCode>{`if (x === 0) { ... } else { ... }`}</InlineCode>
            </R.Pmss>
            <P>The above emoji puzzle will become:</P>
            <Ul>
              <UlLi>
                <Highlight>
                  <CustomEmoji type="isZero" size="mdlg" /> if you put an emoji
                  puzzle that can be converted to <EmojiNumber number={0} /> on
                  the bottom
                </Highlight>
              </UlLi>
              <UlLi>
                <Highlight>
                  <CustomEmoji type="isNotZero" size="mdlg" /> otherwise
                </Highlight>
              </UlLi>
            </Ul>
            <P>
              Let’s try it out. First, we’ll put an emoji puzzle that can be
              converted to <EmojiNumber number={0} /> on the bottom.{' '}
              <H args={{ name: 'pressRun' }} />
            </P>
            <R.Vdcr>
              The bottom emoji puzzle (yellow background)
              <br />
              can be converted to <EmojiNumber number={0} />
            </R.Vdcr>
            <P>
              <Bold>What just happened:</Bold>{' '}
              <Highlight>
                We started out with <EmojiNumber number={0} />
                , and it ended up with <CustomEmoji type="isZero" size="mdlg" />
                .
              </Highlight>
            </P>
            <P>
              Now, what if we started out with an emoji puzzle that can be
              converted to <EmojiNumber number={1} />?{' '}
              <H args={{ name: 'pressRun' }} />
            </P>
            <R.Vyic>
              The bottom emoji puzzle (yellow background)
              <br />
              can be converted to <EmojiNumber number={1} />
            </R.Vyic>
            <P>
              <Bold>What just happened:</Bold>{' '}
              <Highlight>
                We started out with <EmojiNumber number={1} />, and it ended up
                with <CustomEmoji type="isNotZero" size="mdlg" />.
              </Highlight>
            </P>
            <P>
              As you just saw, in addition to math expressions, we can also
              represent <Bold>conditional</Bold> statements using emoji puzzles.
            </P>
            <Alert backgroundColor="brown">
              <P>
                <Bold>Column: Lambda calculus and Church encoding:</Bold>
              </P>
              <P>
                There’s a programming language called{' '}
                <Bold>Lambda calculus</Bold> (
                <ExternalLink href="https://en.wikipedia.org/wiki/Lambda_calculus">
                  Wikipedia
                </ExternalLink>
                ), created by a mathematician Alonzo Church in 1930s. It only
                has two features:{' '}
                <Highlight>variables and anonymous functions</Highlight>. Here’s
                a piece of lambda calculus code:
              </P>
              <CodeBlock
                noHighlight
                caption={
                  <>
                    <InlineCode>λ</InlineCode> is the greek alphabet “lambda”
                  </>
                }
              >{`λsushi.sushi sandwich`}</CodeBlock>
              <P>
                The above code is equivalent to the following JS code. There are
                no strings in lambda calculus—everything is either a variable or
                an anonymous function.
              </P>
              <CodeBlock>{`(sushi => sushi)(sandwich)`}</CodeBlock>
              <P>
                You might have realized that{' '}
                <Highlight>
                  all the functional JS code we represented using emoji puzzles
                  can be expressed in lambda calculus.
                </Highlight>{' '}
                For example, the emoji puzzle that multiplies two Church
                numerals…
              </P>
              <R.Nnzx>
                Emoji puzzle that multiplies
                <br />
                two Church numerals
              </R.Nnzx>
              <P>…is equivalent to the following lambda calculus code:</P>
              <CodeBlock
                noHighlight
                caption={<>Equivalent lambda calculus code</>}
              >{`λsushi.λsandwich.λpizza
  sushi (sandwich pizza)`}</CodeBlock>
              <P>
                <Bold>So, here’s the secret:</Bold>{' '}
                <Highlight>
                  My emoji puzzles are actually a visual representation of
                  lambda calculus.
                </Highlight>{' '}
                And by using emoji puzzles, lambda calculus can be explained
                visually to non-programmers!
              </P>
              <EmojiSeparator
                nodes={[
                  <Emoji>🍣</Emoji>,
                  <CustomEmoji type="doubleArrow" />,
                  <CustomEmoji type="lambda" />
                ]}
                description={
                  <>
                    My emoji puzzles are actually
                    <br />a visual representation of lambda calculus
                  </>
                }
              />
              <P>
                <Bold>Finally:</Bold> We saw that emoji puzzles, or lambda
                calculus, can express not only numbers and arithmetic but also
                conditionals. In fact,{' '}
                <Highlight>
                  lambda calculus can express pretty much anything any
                  programming language can do—it’s Turing complete.
                </Highlight>{' '}
                And this method of encoding data and operators using lambda
                calculus is called <Bold>Church encoding</Bold> (
                <ExternalLink href="https://en.wikipedia.org/wiki/Church_encoding">
                  Wikipedia
                </ExternalLink>
                ).
              </P>
            </Alert>
            <Subheading step={step++} coveredIn={14}>
              Control flow and Y combinator
            </Subheading>
            <Alert backgroundColor="yellow">
              <div
                css={css`
                  font-size: ${fontSizes(0.85)};
                `}
              >
                <Bold>You’re almost done:</Bold> This is the final step in this
                article.
              </div>
            </Alert>
            <P>
              <Bold>Question:</Bold> If we can express conditionals (e.g.{' '}
              <InlineCode>if</InlineCode>) using functions/emoji puzzles, can we
              express <Bold>control flow</Bold> (e.g. loops) as well?
            </P>
            <P>
              The answer is yes. We can express control flow using{' '}
              <Highlight>
                <Bold>Y combinator</Bold>
              </Highlight>
              .
            </P>
            <P>
              <Bold>Y combinator</Bold>{' '}
              <Highlight>
                is a function that allows you to create a recursive function
                without using named functions.
              </Highlight>{' '}
            </P>
            <P>
              Y combinator is complex, so if we go into detail we’ll need
              another article. In fact, I used two full pages (
              <InternalLink href="/14">here</InternalLink> and{' '}
              <InternalLink href="/15">here</InternalLink>) in my course to
              explain Y combinator using emoji puzzles. So here I’ll briefly
              explain what Y combinator is.
            </P>
            <P>
              Take a look at this JS code. It calculates the{' '}
              <Bold>factorial</Bold> of a number using recursion.
            </P>
            <CodeBlock
              caption={
                <>
                  Calculates the factorial of a number:
                  <br />
                  <InlineCode>n * n-1 * ... * 1</InlineCode>
                </>
              }
            >{`function fact(n) {
  if (n === 0) {
    return 1
  }
  else {
    return n * fact(n - 1)
  }
}`}</CodeBlock>
            <P>
              If you run it on <InlineCode>5</InlineCode>, it calculates{' '}
              <InlineCode>5 * 4 * 3 * 2 * 1</InlineCode>.{' '}
              <H args={{ name: 'pressRun' }} />
            </P>
            <CodeBlock
              caption={
                <>
                  <InlineCode>5 * 4 * 3 * 2 * 1</InlineCode>
                </>
              }
              result="120"
            >{`fact(5)`}</CodeBlock>
            <P>
              Note that the above recursive function was a{' '}
              <Italic>named</Italic> function. It had the name{' '}
              <InlineCode>fact</InlineCode>, which was called from the function
              body to do recursion.
            </P>
            <CodeBlock
              shouldHighlight={(lineNumber, tokenNumber) =>
                (lineNumber === 0 && tokenNumber > 1 && tokenNumber < 3) ||
                (lineNumber === 5 && tokenNumber > 4 && tokenNumber < 6)
              }
              caption={
                <>
                  This is a <Italic>named</Italic> function called{' '}
                  <InlineCode>fact</InlineCode>
                </>
              }
            >{`function fact(n) {
  if (n === 0) {
    return 1
  }
  else {
    return n * fact(n - 1)
  }
}`}</CodeBlock>
            <P>
              You’d usually use a named function to do recursion. However,{' '}
              <Highlight>
                if you use Y combinator, you can do recursion without using a
                named function.
              </Highlight>{' '}
            </P>
            <P>
              Let me show you how. Here’s the Y combinator function{' '}
              <InlineCode>yc</InlineCode>:
            </P>
            <CodeBlock
              caption={<>The Y combinator function</>}
              shouldHighlight={(lineNumber, tokenNumber) =>
                lineNumber === 0 && tokenNumber > 1 && tokenNumber < 3
              }
            >{`const yCombinator = sushi =>
  (pizza =>
    sushi(sandwich =>
      pizza(pizza)(sandwich)
    ))(pizza =>
    sushi(sandwich =>
      pizza(pizza)(sandwich)
    )
  )`}</CodeBlock>
            <P>
              Now, we’ll apply <InlineCode>yCombinator</InlineCode> on another
              anonymous function.{' '}
              <Highlight>
                This time, <InlineCode>fact</InlineCode> is NOT a function name,
                but it’s a <Italic>parameter</Italic> name.
              </Highlight>{' '}
              We haven’t used any named function yet—we’ve only used anonymous
              functions.
            </P>
            <CodeBlock
              caption={
                <>
                  <InlineCode>fact</InlineCode> is now a parameter
                </>
              }
              shouldHighlight={(lineNumber, tokenNumber) =>
                (lineNumber === 0 && tokenNumber > 1 && tokenNumber < 3) ||
                (lineNumber === 4 && tokenNumber > 4 && tokenNumber < 6)
              }
            >{`yCombinator(fact => n => {
  if (n === 0) {
    return 1
  } else {
    return n * fact(n - 1)
  }
})`}</CodeBlock>
            <P>
              Finally, let’s run the above function on{' '}
              <InlineCode>5</InlineCode> and see what happens:
            </P>
            <CodeBlock
              caption={
                <>
                  Run it on <InlineCode>5</InlineCode>
                </>
              }
              result="120"
              shouldHighlight={(lineNumber, tokenNumber) =>
                lineNumber === 6 && tokenNumber > 3 && tokenNumber < 5
              }
            >{`yCombinator(fact => n => {
  if (n === 0) {
    return 1
  } else {
    return n * fact(n - 1)
  }
})(5) // ← run it on 5`}</CodeBlock>
            <P>
              The result was <InlineCode>120</InlineCode>, so it successfully
              calculated the factorial{' '}
              <InlineCode>5 * 4 * 3 * 2 * 1</InlineCode>.
            </P>
            <P>
              <Bold>So:</Bold>{' '}
              <Highlight>
                By using the <InlineCode>yCombinator</InlineCode> function, you
                can create a recursive function without using named functions.
              </Highlight>{' '}
              It allows you to implement control flow (loops) using anonymous
              functions.
            </P>
            <P>
              Of course, Y combinator can be represented using an emoji puzzle:
            </P>
            <CodeBlock
              caption={<>The Y combinator function</>}
            >{`const yCombinator = sushi =>
  (pizza =>
    sushi(sandwich =>
      pizza(pizza)(sandwich)
    ))(pizza =>
    sushi(sandwich =>
      pizza(pizza)(sandwich)
    )
  )`}</CodeBlock>
            <ExpressionRunnerSeparator halfMarginTop />
            <R.Weow>Y combinator using emojis</R.Weow>
            <P>
              In{' '}
              <InternalLink href="/15">
                the final lesson of my course
              </InternalLink>
              , I show how to use the Y combinator emoji puzzle to calculate
              factorials (I won’t show it here because it’s pretty complex).
            </P>
            <P>
              <Bold>In any case,</Bold>{' '}
              <Highlight>
                you can teach Y combinator to non-programmers using emoji
                puzzles.
              </Highlight>
            </P>
            <Alert backgroundColor="blue">
              <P>
                The Y Combinator I showed above is for{' '}
                <ExternalLink href="https://en.wikipedia.org/wiki/Evaluation_strategy#Applicative_order">
                  applicative order
                </ExternalLink>{' '}
                languages like JavaScript. For{' '}
                <ExternalLink href="https://en.wikipedia.org/wiki/Evaluation_strategy#Normal_order">
                  normal order
                </ExternalLink>{' '}
                languages like Haskell, Y Combinator would look visually
                simpler, like this:
              </P>
              <R.Xjzx>
                Y Combinator for
                <br />
                normal order languages
              </R.Xjzx>
              <P>
                The emoji puzzles on this page run in the applicative order
                because I tried to compare it with JavaScript.{' '}
                <Highlight>
                  However, in my course, the emoji puzzles actually run in the
                  normal order instead,
                </Highlight>{' '}
                simply because Y Combinator would be visually less complex.
              </P>
              <P>
                The bottom line is that my emoji puzzles support both
                applicative and normal orders of evaluation, which was
                nontrivial to implement.
              </P>
            </Alert>
            <Alert backgroundColor="brown">
              <JimsTalk onBlog />
            </Alert>
            <Subheading step="none" coveredIn="none">
              Conclusion
            </Subheading>
            <P>
              <Bold>One-line summary:</Bold>{' '}
              <Highlight>
                By using emoji puzzles, you explain functional programming
                concepts such as lambda calculus, Church encoding, and Y
                combinator to non-programmers—without using any code.
              </Highlight>
            </P>
            <P>
              <Bold>Why did I make emoji puzzles?</Bold> As someone who is
              passionate about teaching,{' '}
              <Highlight>
                I wanted to challenge myself to explain a{' '}
                <Italic>difficult computer science concept</Italic> (like Y
                combinator) to non-programmers
              </Highlight>{' '}
              while satisfying the following constraints:
            </P>
            <Ul>
              <UlLi>Don’t use any code</UlLi>
              <UlLi>Don’t sacrifice rigor</UlLi>
              <UlLi>Must be doable on a smartphone in under 2-3 hours</UlLi>
            </Ul>
            <P>
              That’s how I came up with emoji puzzles (they’re
              smartphone-friendly too). In the future, I plan to develop
              something similar with other CS topics. In the meantime, you can
              take a look at my course,{' '}
              <InternalLink href="/">
                Y Combinator for Non-programmers
              </InternalLink>
              , here:
            </P>
            <div
              css={css`
                text-align: center;
                margin: ${spaces(2)} 0 ${spaces(2)};
              `}
            >
              <InternalLink
                href="/"
                css={css`
                  display: inline-block;
                  padding: ${spaces(0.5)} ${spaces(1.5)} ${spaces(0.75)};
                  border-radius: ${radii(0.5)};
                  border: 2px solid ${colors('pink600')};
                  background: ${colors('pink400')};
                  color: #fff;
                  text-decoration: none;
                  line-height: ${lineHeights(1.3)};
                  -webkit-user-select: none;

                  &:focus {
                    box-shadow: inset 0 0 0 1px ${colors('pink600')};
                    outline: none;
                  }

                  &:hover {
                    background: ${colors('pink500')};
                  }

                  &:active {
                    background: ${colors('pink500')};
                  }
                `}
              >
                <span
                  css={css`
                    font-size: ${fontSizes(1.2)};
                    font-weight: bold;
                    display: block;
                  `}
                >
                  View My Course
                </span>
                <span
                  css={css`
                    font-size: ${fontSizes(0.85)};
                    display: block;
                  `}
                >
                  Y Combinator for Non-programmers
                </span>
              </InternalLink>
            </div>
            <Subheading noHrTop step="none" coveredIn="none">
              Thank you for reading!
            </Subheading>
            <Ads shareId="1192843729565962241" />
            <P
              css={css`
                color: ${colors('grey600')};
              `}
            >
              This article was published on{' '}
              <time dateTime={dateSchemaString}>{dateString}</time>.
            </P>
            <Hr />
            <H args={{ name: 'aboutMe', hideNextPageButton: true }} />
          </BubbleQuoteContext.Provider>
        </ExpressionRunnerConfigContext.Provider>
      </Container>
      <EpisodePageFooter />
    </Page>
  ) : (
    <></>
  )
}
