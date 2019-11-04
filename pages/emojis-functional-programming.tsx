/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core'
import { useState } from 'react'
import Page from 'src/components/Page'
import Head from 'next/head'
import { ns, radii, fontSizes, colors, spaces } from 'src/lib/theme'
import { lessonTitle } from 'src/lib/titles'
import Container from 'src/components/Container'
import Emoji from 'src/components/Emoji'
import H from 'src/components/H'
import EmojiForLetter from 'src/components/EmojiForLetter'
import EpisodeHero from 'src/components/EpisodeHero'
import EpisodePageFooter from 'src/components/EpisodePageFooter'
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
import Warning, { warningSpacing } from 'src/components/Warning'
import PrismHighlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwlLight'
import BubbleQuoteContext from 'src/components/BubbleQuoteContext'
import EmojiWithText from 'src/components/EmojiWithText'
import ExpressionRunnerConfigContext from 'src/components/ExpressionRunnerConfigContext'

const numSteps = 100
const wordCount = 10000
const minRead = wordCount / 200

const date = DateTime.fromISO('2019-11-06T12:00:00Z')
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

const Subheading = ({
  step,
  noHrTop,
  children,
  ...props
}: JSX.IntrinsicElements['h3'] & {
  noHrTop?: boolean
  step: number | 'none'
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
    <H3
      {...props}
      css={css`
        margin: ${noHrTop ? spaces(2) : 0} 0 ${spaces(0.5)};
      `}
    >
      {children}
      {step !== 'none' && (
        <>
          {' '}
          <span
            css={css`
              font-size: 0.7em;
              color: ${colors('indigo300')};
              font-weight: normal;
            `}
          >
            (Step{' '}
            <Bold
              css={css`
                color: ${colors('indigo400')};
              `}
            >
              {step}
            </Bold>
            /{numSteps})
          </span>
        </>
      )}
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
  showGuide
}: {
  children: string
  shouldHighlight?: (lineNumber: number, tokenNumber: number) => boolean
  result?: string
  showGuide?: boolean
}) => {
  const [resultVisible, setResultVisible] = useState(false)
  const buttonOnClick = () => setResultVisible(true)
  return (
    <>
      <PrismHighlight
        {...defaultProps}
        code={children}
        theme={theme}
        language="javascript"
      >
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre
            css={[
              warningSpacing,
              css`
                background-color: ${colors('codeBg')};
                font-weight: 600;
                font-family: ${codeFontFamily};
                margin: ${spaces(1.25)} 0 ${result ? 0 : spaces(1.25)};
                font-size: ${fontSizes(0.85)};
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
              margin-bottom: ${spaces(1.25)};
            `}
          >
            {resultVisible ? (
              <div
                css={[
                  warningSpacing,
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
                    warningSpacing,
                    css`
                      border-top-left-radius: 0;
                      border-top-right-radius: 0;
                      border-bottom-left-radius: ${radii(0.5)};
                      border-bottom-right-radius: ${radii(0.5)};
                      line-height: 1.1rem;
                      border: none;
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
                {showGuide && (
                  <span
                    css={[
                      warningSpacing,
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
            Last month, I published a free online course called “
            <InternalLink href="/">
              <Bold>Y Combinator for Non-programmers</Bold>
            </InternalLink>
            ”. In this 17-page course, I teach computer science concepts such as
            functional programming, lambda calculus, Church encoding, and Y
            combinator in a way such that{' '}
            <Italic>
              people who have zero programming knowledge can understand
            </Italic>
            .
          </P>
          <P>
            To explain these concepts, I created{' '}
            <Bold>an educational puzzle using emojis</Bold> <Emoji>🍱</Emoji>.
            In this article, I’ll explain how my emoji puzzles can represent and
            execute functional code <Italic>visually</Italic>. If you like to
            teach programming to beginners, or if you like functional
            programming in general, I think you’ll enjoy this article.
          </P>
        </BubbleQuoteContext.Provider>
        <Warning>
          <P>
            <Emoji>⚠️</Emoji> <Bold>Note:</Bold> This article is for programmers
            who are familiar with functional programming. If you’re a
            non-programmer, check out “
            <InternalLink href="/">
              <Bold>Y Combinator for Non-programmers</Bold>
            </InternalLink>
            ” instead.
          </P>
          <P
            css={css`
              margin-bottom: 0;
            `}
          >
            I’ll use <Bold>JavaScript</Bold> in this article. Even if you’re not
            familiar with JS, you should still be able to understand it. P.S.{' '}
            <ExternalLink href="https://github.com/chibicode/ycombinator/blob/master/pages/emojis-functional-programming.tsx">
              The source code for this article is available on GitHub
            </ExternalLink>
            —please ★ star it!
          </P>
        </Warning>
        <Warning backgroundColor="brown">
          <Emoji>👋</Emoji> <Bold>Available for Hire:</Bold> My name is{' '}
          <Bold>Shu Uesugi</Bold>, a full-stack engineer who’s looking for a{' '}
          <Italic>full-time position</Italic> (remote or in SF/LA). Scroll to
          the bottom of this article for details.
        </Warning>
        <BubbleQuoteContext.Provider value={{ inQuote: true }}>
          <Subheading noHrTop step="none">
            Overview of this article
          </Subheading>
          <Ul>
            <UlLi>
              <Bold>First,</Bold> I’ll show you how some simple JavaScript code
              can be represented using my emoji puzzle.
            </UlLi>
            <UlLi>
              <Bold>After that,</Bold> I’ll talk about how to use my emoji
              puzzle to talk about lambda calculus, Church encoding, and Y
              Combinator.
            </UlLi>
            <UlLi>
              This article is long—it’s about{' '}
              <Bold>{wordCount.toLocaleString('en-US')}</Bold> words (
              <Bold>{minRead} min.</Bold> read). To help you track how far along
              you are in the article, I’ll show a “step” number next to each
              subheading. There are a total of <Bold>{numSteps}</Bold> steps in
              this article.
            </UlLi>
          </Ul>
          <Subheading step={step++}>Identity function in JS</Subheading>
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
          <R.Elku>
            <InlineCode>sushi => sushi</InlineCode> is represented
            <br />
            by the bottom two items
          </R.Elku>
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
          <R.Vowa>
            The argument <InlineCode>'sandwich'</InlineCode> is represented
            <br />
            by the top item
          </R.Vowa>
          <P>
            That’s how my emoji puzzle can visually describe a simple JS
            expression. Next, let’s talk about how we can{' '}
            <H args={{ name: 'run', lowerCase: true }} /> it.
          </P>
          <Warning backgroundColor="brown">
            <Bold>Side Note:</Bold> To keep things simple, this puzzle doesn’t
            distinguish between variable names (e.g.{' '}
            <InlineCode>sushi</InlineCode>) and strings (e.g.{' '}
            <InlineCode>'sushi'</InlineCode>). Therefore, both{' '}
            <InlineCode>sushi</InlineCode> and <InlineCode>'sushi'</InlineCode>{' '}
            will be represented as <EmojiForLetter letter="a" size="semilg" />.
          </Warning>
          <Subheading step={step++}>Running the function</Subheading>
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
            showGuide
          >{`(sushi => sushi)('sandwich')`}</CodeBlock>
          <P>
            Now, we can also “run” the equivalent emoji puzzle and get the same
            result.{' '}
            <Highlight>
              Try pressing the <H args={{ name: 'run' }} /> button below the
              puzzle.
            </Highlight>
          </P>
          <ExpressionRunnerConfigContext.Provider
            value={{ pointToRunButton: true }}
          >
            <R.Itbm></R.Itbm>
          </ExpressionRunnerConfigContext.Provider>
          <P>
            The result is <EmojiWithText letter="b" />, which is the same as
            what happens when you run the JS code (
            <InlineCode>'sandwich'</InlineCode>).
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
        </BubbleQuoteContext.Provider>
      </Container>
      <EpisodePageFooter />
    </Page>
  ) : (
    <></>
  )
}
