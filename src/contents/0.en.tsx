import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
// import {
//   numEpisodesExceptFirstAndLast,
//   numTotalPages
// } from 'src/lib/episodeCategories'
import {
  Highlight,
  // Img,
  ExternalLink,
  P,
  HighlightBold,
  Bold,
  Italic,
  // Ol,
  // OlLi,
  Hr
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import BubbleQuotes from 'src/components/BubbleQuotes'
import NextLessonButton from 'src/components/NextLessonButton'
import CardContent from 'src/components/CardContent'
import Toc from 'src/components/Toc'
import H from 'src/components/H'
// import { lessonTitle } from 'src/lib/titles'
// import YoutubeEmbed from 'src/components/YoutubeEmbed'
// import { githubRepo } from 'src/lib/meta'
// import * as R from 'src/components/Runners'

export default () => (
  <EpisodeCardList
    underConstruction
    cards={[
      {
        title: <>Welcome!</>,
        content: (
          <>
            <P>
              <Emoji>🤗</Emoji> <Bold>Welcome!</Bold> This is an interactive
              online course where{' '}
              <Highlight>
                non-programmers can learn learn about{' '}
                <HighlightBold>Y Combinator</HighlightBold>.
              </Highlight>{' '}
              It’s <HighlightBold>100% free</HighlightBold> (no signup
              required), and you can do it from your smartphone, tablet, or
              computer.
            </P>
            <EmojiSeparator
              emojis={['📱', '🆓', '💻']}
              description={
                <>
                  It’s <HighlightBold>100% free</HighlightBold>, and you can do
                  it from
                  <br />
                  your smartphone, tablet, or computer.
                </>
              }
            />
            <P>
              <CustomEmoji type="index" /> <Bold>Overview:</Bold> This course
              consists of{' '}
              <Bold>
                <H
                  args={{
                    name: 'categoryNameColored',
                    category: 'beginner',
                    text: <>5 beginner levels</>
                  }}
                />
              </Bold>
              ,{' '}
              <Bold>
                <H
                  args={{
                    name: 'categoryNameColored',
                    category: 'intermediate',
                    text: <>5 intermediate levels</>
                  }}
                />
              </Bold>
              , and{' '}
              <Bold>
                <H
                  args={{
                    name: 'categoryNameColored',
                    category: 'advanced',
                    text: <>5 advanced levels</>
                  }}
                />
              </Bold>
              . It should take about <HighlightBold>2 to 3 hours</HighlightBold>{' '}
              to read for most people.
            </P>
            <EmojiSeparator
              emojis={['📗', '📘', '📕']}
              description={
                <>
                  <Bold>
                    <H
                      args={{
                        name: 'categoryNameColored',
                        category: 'beginner',
                        text: <>5 beginner levels</>
                      }}
                    />
                  </Bold>
                  ,{' '}
                  <Bold>
                    <H
                      args={{
                        name: 'categoryNameColored',
                        category: 'intermediate',
                        text: <>5 intermediate levels</>
                      }}
                    />
                  </Bold>
                  ,<br />
                  and{' '}
                  <Bold>
                    <H
                      args={{
                        name: 'categoryNameColored',
                        category: 'advanced',
                        text: <>5 advanced levels</>
                      }}
                    />
                  </Bold>
                </>
              }
            />
            <CardContent
              preview={{
                text: <>Press here to view the table of contents.</>
              }}
            >
              <Bold>Table of Contents:</Bold> Press each title below to jump to
              that page.
              <Toc />
            </CardContent>
          </>
        ),
        footer: {
          content: (
            <>
              <H args={{ name: 'dateAndSource', includeAboutMe: true }} />
            </>
          )
        }
      },
      {
        title: <>Start now or read the introduction</>,
        content: (
          <>
            <P>
              <Emoji>😁</Emoji>{' '}
              <Bold>If you want to get started as soon as possible:</Bold>{' '}
              <Highlight>
                Press the button below to go to the next page!
              </Highlight>
            </P>
            <NextLessonButton />
            <P>
              <Emoji>🤔</Emoji>{' '}
              <Bold>If you want to read the introduction</Bold> before you get
              started, <Highlight>scroll down and keep reading!</Highlight> The
              introduction only takes a few minutes to read.
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="singleArrowDown" />,
                <CustomEmoji type="singleArrowDown" />,
                <CustomEmoji type="singleArrowDown" />
              ]}
              topDescription={<>Scroll down to read the introduction!</>}
            />
          </>
        )
      },
      {
        title: <>Introduction: Have you heard of “Y Combinator”?</>,
        content: (
          <>
            <P>
              <Emoji>🤔</Emoji> <Bold>Have you heard of “Y Combinator”?</Bold>{' '}
              If you’re into technology, you might have heard that{' '}
              <Highlight>
                Y Combinator is the name of a startup investing firm.
              </Highlight>{' '}
            </P>
            <P>
              <ExternalLink href="https://www.ycombinator.com/">
                Y Combinator
              </ExternalLink>
              , the startup investing firm, has invested in more than 2000
              startups since 2005.{' '}
              <ExternalLink href="https://www.ycombinator.com/topcompanies/">
                The combined valuation
              </ExternalLink>{' '}
              of top companies they invested (such as AirBnB) is more than $150
              billion dollars as of October 2019.
            </P>
            <EmojiSeparator
              emojis={['💰', '😎', '💰']}
              description={
                <>
                  Y Combinator is the name of
                  <br />a startup investing firm
                </>
              }
            />
            <P>
              <Emoji>⚠️</Emoji> <Bold>However:</Bold> In this course, we will
              NOT talk about this startup investing firm.{' '}
              <Highlight>
                Y Combinator is actually the name of{' '}
                <Bold>an interesting concept in computer science</Bold>, and
                that’s what we’re going to talk about.
              </Highlight>
            </P>
            <EmojiSeparator
              emojis={['✨', '💻', '✨']}
              description={
                <>
                  Y Combinator is actually the name of
                  <br />
                  <Italic>an interesting concept in computer science</Italic>
                </>
              }
            />
            <P>
              <Bold>In fact:</Bold> The startup investing firm Y Combinator was{' '}
              <Italic>named after</Italic> this computer science concept. On
              their{' '}
              <ExternalLink href="https://www.ycombinator.com/faq">
                FAQ page
              </ExternalLink>
              , they say they chose the name “Y Combinator” because it’s{' '}
              <Italic>“one of the coolest ideas in computer science.”</Italic>
            </P>
            <P>
              <Bold>Furthermore:</Bold>{' '}
              <HighlightBold>
                <Emoji>👨🏻‍🦳</Emoji> Paul Graham
              </HighlightBold>
              , a co-founder of the firm, said this in{' '}
              <ExternalLink href="https://mixergy.com/interviews/y-combinator-paul-graham/">
                his 2010 interview
              </ExternalLink>
              , when asked why he named his firm “Y Combinator”:
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'manLightSkinWhiteHair',
                  children: (
                    <>
                      <P>
                        [<Bold>Y Combinator is</Bold>] a programming trick. … I
                        wanted to call it Y Combinator just because I thought
                        the Y Combinator was a really cool thing. So it would be
                        the perfect name for picking out the kind of people that
                        we wanted.
                      </P>
                      <P>
                        <Bold>Hackers</Bold> would look at this and think,{' '}
                        <Italic>
                          “That’s so cool. They’re named after the Y Combinator.
                          There must be something going on here.”
                        </Italic>{' '}
                        And <Bold>suits</Bold> would look at it and think,{' '}
                        <Italic>“Y Combinator, what’s that?”</Italic>
                      </P>
                      <P>
                        That was what we wanted. We wanted hackers to notice us,
                        and suits, we didn’t care.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <Emoji>👨🏻‍🦳</Emoji> <Bold>Explanation of the above quote:</Bold>{' '}
              Paul Graham, a computer scientist,{' '}
              <Highlight>
                wanted to invest in entrepreneurs who are also programmers (“
                <Bold>hackers</Bold>” <Emoji>😎</Emoji>)
              </Highlight>
              . So he named his investing firm “Y Combinator”, which is a
              computer science (programming) concept, in order to attract
              hackers.
            </P>
            <P>
              And because Y Combinator is a very technical concept,{' '}
              <Highlight>
                he assumed businesspeople (“<Bold>suits</Bold>”{' '}
                <Emoji>👔</Emoji>) won’t understand what it means
              </Highlight>{' '}
              and therefore won’t be attracted.
            </P>
            <EmojiSeparator
              emojis={['😎', '🆚', '👔']}
              description={
                <>
                  <Bold>Hackers vs Suits:</Bold>
                  <br />
                  To attract programmers
                  <br />
                  but not businesspeople,
                  <br />
                  Paul Graham named his investing firm
                  <br />
                  “Y Combinator”
                </>
              }
            />
            <P>
              <Emoji>😉</Emoji> <Bold>But don’t worry:</Bold>{' '}
              <Highlight>
                Even if you have no programming background, by the time you
                finish this course, you’ll understand what Y Combinator is.
              </Highlight>
            </P>
            <P>Let’s now talk about this course!</P>
          </>
        )
      },
      {
        title: <>Why teach Y Combinator for non-programmers?</>,
        content: (
          <>
            <P>
              <Emoji>🤔</Emoji> <Bold>You might be wondering:</Bold>{' '}
              <Highlight>
                Why did I decide to teach Y Combinator for non-programmers?
              </Highlight>{' '}
              <Italic>Why not other topic? Why non-programmers?</Italic> Well,
              here’s my answer.
            </P>
            <EmojiSeparator
              emojis={['❓', '🤔', '❓']}
              description={
                <>
                  Why not other topic?
                  <br />
                  Why non-programmers?
                </>
              }
            />
          </>
        ),
        footer: {
          content: (
            <>
              <P>For programmers</P>
              <P>Please ★ star it on GitHub!</P>
            </>
          )
        }
      },
      {
        title: <>How to teach Y Combinator for non-programmers</>,
        content: <></>,
        footer: {
          content: (
            <>
              <P>Travel</P>
            </>
          )
        }
      },
      {
        title: <>Let’s begin!</>,
        content: <></>,
        footer: {
          content: (
            <>
              <CardContent
                preview={{
                  text: <>Continue reading</>,
                  content: (
                    <>
                      <P>
                        <Emoji>👨🏻‍💻</Emoji> <Bold>About me:</Bold> Sorry for not
                        introducing myself earlier!{' '}
                        <Highlight>
                          I’m <Bold>Shu Uesugi</Bold>, a full-stack developer
                          based in San Francisco Bay Area, USA.
                        </Highlight>
                      </P>
                      <P>
                        <Emoji>👋</Emoji> <Bold>Available for hire:</Bold>{' '}
                        <Highlight>
                          I’m looking for a{' '}
                          <Bold>full-time senior engineering position</Bold>.
                        </Highlight>{' '}
                        Press “Continue reading” below to learn more about me!{' '}
                        <Emoji>😉</Emoji>
                      </P>
                    </>
                  )
                }}
              >
                <Hr />
                <P>?</P>
              </CardContent>
            </>
          )
        }
      }
    ]}
  />
)
