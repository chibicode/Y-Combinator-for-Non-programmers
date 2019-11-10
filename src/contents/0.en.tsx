import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  Highlight,
  ExternalLink,
  P,
  HighlightBold,
  Bold,
  Italic,
  InternalLink
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import BubbleQuotes from 'src/components/BubbleQuotes'
import NextLessonButton from 'src/components/NextLessonButton'
import Toc from 'src/components/Toc'
import H from 'src/components/H'
import YoutubeEmbed from 'src/components/YoutubeEmbed'
import * as R from 'src/components/Runners'

export const IfYouAreAProgrammer = () => (
  <>
    <P>
      <Bold>If you’re a programmer,</Bold> you should check out this article of
      mine instead: “
      <InternalLink href="/functional-programming-emojis">
        <Highlight>
          You Can Explain Functional Programming Using Emojis
        </Highlight>
      </InternalLink>
      ”.
    </P>
  </>
)

export const JimsTalk = ({ onBlog }: { onBlog?: boolean }) => (
  <>
    <P>
      {onBlog ? <>If you are</> : <>For programmers</>} interested in learning
      about Y Combinator, I recommend this video:{' '}
      <ExternalLink href="https://www.youtube.com/watch?v=FITJMJjASUs">
        <HighlightBold>
          “Y Not- Adventures in Functional Programming”
        </HighlightBold>
      </ExternalLink>
      .
    </P>
    <P>
      This is a talk by{' '}
      <ExternalLink href="https://en.wikipedia.org/wiki/Jim_Weirich">
        Jim Weirich
      </ExternalLink>
      , a legendary Ruby programmer who passed away in 2014. He gave this talk
      at RubyConf 2012, and I was in the audience. It was an amazing talk.
    </P>
    <YoutubeEmbed
      width={560}
      height={315}
      src="https://www.youtube.com/embed/FITJMJjASUs"
    />
  </>
)

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>Welcome!</>,
        content: (
          <>
            <P>
              <Emoji>🤗</Emoji> <Bold>Welcome!</Bold> This is an interactive
              online course where{' '}
              <Highlight>
                non-programmers can learn about{' '}
                <HighlightBold>Y Combinator</HighlightBold>
              </Highlight>
              , one of the coolest ideas in computer science.
            </P>
            <P>
              This course is <HighlightBold>free</HighlightBold> (no signup
              required), and you can do it from your <Emoji>📱</Emoji>{' '}
              smartphone or <Emoji>💻</Emoji> computer.
            </P>
            <P>
              <Emoji>🍱</Emoji> <Bold>Quick demo:</Bold> In this course, you’ll
              learn computer science concepts by{' '}
              <Highlight>
                solving <Bold>puzzles</Bold>—no coding required
              </Highlight>
              . Here’s a quick demo. I’ll explain how this puzzle works later,
              but for now,{' '}
              <Highlight>
                try pressing <H args={{ name: 'run' }} /> and see what happens:
              </Highlight>
            </P>
            <R.Wunw>
              You’ll see puzzles like this:
              <br />
              Try pressing <H args={{ name: 'run' }} />.
            </R.Wunw>
          </>
        ),
        footer: {
          content: (
            <>
              <IfYouAreAProgrammer />
            </>
          )
        }
      },
      {
        type: 'meta',
        title: <>Table of Contents</>,
        content: (
          <>
            <P>
              This course consists of{' '}
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
            <EmojiSeparator emojis={['📗', '📘', '📕']} />
            <P>↓ Press each title to jump to that page.</P>
            <Toc />
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
                Press the button below to go to the next page.
              </Highlight>
            </P>
            <NextLessonButton />
            <P>
              <Emoji>🤔</Emoji>{' '}
              <Bold>If you want to read the introduction</Bold> before you get
              started, <Highlight>scroll down and keep reading.</Highlight> The
              introduction should take only a few minutes to read.
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="singleArrowDown" />,
                <CustomEmoji type="singleArrowDown" />,
                <CustomEmoji type="singleArrowDown" />
              ]}
              topDescription={<>Scroll down to read the introduction</>}
            />
          </>
        )
      },
      {
        title: <>Introduction: Have you heard of “Y Combinator”?</>,
        content: (
          <>
            <P>
              <Bold>Have you heard of “Y Combinator”?</Bold> If you’re into
              technology, you might have heard that{' '}
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
            <P>
              <Bold>However:</Bold> In this course, we will NOT talk about this
              startup investing firm.{' '}
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
              , they say they chose the name “Y Combinator” because it’s “
              <Italic>one of the coolest ideas in computer science.</Italic>”
            </P>
            <P>
              <Bold>Furthermore:</Bold>{' '}
              <HighlightBold>
                <Emoji>👨🏻‍🦳</Emoji> Paul Graham
              </HighlightBold>
              , a co-founder of this firm, said this in{' '}
              <ExternalLink href="https://mixergy.com/interviews/y-combinator-paul-graham/">
                his 2010 interview
              </ExternalLink>{' '}
              when asked why he named his firm “Y Combinator”:
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
                        And <Bold>suits</Bold> would look at it and think, “
                        <Italic>Y Combinator, what’s that?</Italic>”
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
              <Bold>Explanation of the above quote:</Bold> Paul Graham, a
              computer scientist,{' '}
              <Highlight>
                wanted to invest in entrepreneurs who are also programmers (“
                <Bold>hackers</Bold>” <Emoji>😎</Emoji>)
              </Highlight>
              . So he named his investing firm “Y Combinator”, which is a
              computer science (programming) concept, in order to attract
              hackers.
            </P>
            <P>
              And because Y Combinator is a very technical concept, he assumed
              businesspeople (“<Bold>suits</Bold>” <Emoji>👔</Emoji>) won’t
              understand what it means and therefore won’t be attracted.
            </P>
            <P>
              <Bold>But don’t worry:</Bold>{' '}
              <Highlight>
                Even if you have no programming background, by the time you
                finish this course, you’ll understand what Y Combinator is.
              </Highlight>
            </P>
            <P>Let’s now talk about this course.</P>
          </>
        )
      },
      {
        title: <>Why teach Y Combinator for non-programmers?</>,
        content: (
          <>
            <P>
              <Bold>You might be wondering:</Bold>{' '}
              <Highlight>
                Why did I decide to teach Y Combinator for non-programmers?
              </Highlight>{' '}
              <Italic>Why not other topics? Why non-programmers?</Italic> Well,
              here’s my answer.
            </P>
            <EmojiSeparator
              emojis={['❓', '🤔', '❓']}
              description={
                <>
                  Why not other topics?
                  <br />
                  Why non-programmers?
                </>
              }
            />
            <P>
              <Bold>First:</Bold> I studied computer science in college, and I
              can also say that{' '}
              <Italic>
                Y Combinator is one of the coolest concepts in computer science
                I learned.
              </Italic>
            </P>
            <P>
              So, <Highlight>from a non-programmer’s point of view,</Highlight>{' '}
              by taking this course,{' '}
              <Highlight>
                they can learn one of the coolest ideas in computer science as
                quickly as possible
              </Highlight>
              , without having to learn to code or study other boring stuff
              along the way. It could be the fastest way for non-programmers to
              understand why computer science is interesting.
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>😒</Emoji>,
                <CustomEmoji type="singleArrow" />,
                <Emoji>😮</Emoji>
              ]}
              description={
                <>
                  Non-programmers can quickly understand
                  <br />
                  why computer science is interesting
                </>
              }
            />
            <P>
              <Bold>Second:</Bold> I know that{' '}
              <Highlight>
                many of my non-programmer friends want to{' '}
                <Italic>actually understand</Italic> computer science concepts
              </Highlight>
              , such as AI or blockchain. However, they can’t learn these ideas
              because they don’t have the necessary programming knowledge.
              Pretty much all learning resources that teach computer science
              concepts <Italic>assume</Italic> that you know programming.
            </P>
            <P>
              So{' '}
              <Highlight>
                I want to make it easier for non-programmers to learn computer
                science concepts as quickly as possible
              </Highlight>
              —without having to learn to code. This course is my first step in
              this direction.
            </P>
            <EmojiSeparator
              nodes={[<Emoji>✨</Emoji>, <Emoji>🤗</Emoji>, <Emoji>✨</Emoji>]}
              description={
                <>
                  Non-programmers should be able to learn
                  <br />
                  computer science without having learn to code
                </>
              }
            />
            <P>
              <Bold>Downside:</Bold> I admit that{' '}
              <Highlight>
                this approach is not the best way to introduce computer science
                to non-programmers
              </Highlight>
              .
            </P>
            <P>
              The ideal way to teach computer science would be to teach
              programming first. However, learning to code takes time, and{' '}
              <Highlight>
                most people—especially adults—won’t ever learn to code.
              </Highlight>{' '}
              As{' '}
              <ExternalLink href="https://a16z.com/2011/08/20/why-software-is-eating-the-world/">
                software is eating the world
              </ExternalLink>
              , I believe there need to be more ways to teach computer science
              without requiring programming knowledge.
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <IfYouAreAProgrammer />
            </>
          )
        }
      },
      {
        title: <>Let’s get started</>,
        content: (
          <>
            <P>
              In this course, I will teach you Y Combinator using{' '}
              <HighlightBold>puzzles</HighlightBold>. There’s no programming
              involved.
            </P>
            <EmojiSeparator
              emojis={['✨', '🧩', '✨']}
              description={
                <>
                  Learn Y Combinator using puzzles.
                  <br />
                  No programming involved.
                </>
              }
            />
            <P>
              <Bold>Let’s get started</Bold> and take a look at what the puzzles
              look like.{' '}
              <Highlight>
                Press the button below to go to the next page.
              </Highlight>
            </P>
            <NextLessonButton />
          </>
        ),
        footer: {
          content: (
            <>
              <P>Also, sorry for not introducing myself earlier…</P>
              <H args={{ name: 'aboutMe', hideNextPageButton: true }} />
            </>
          )
        }
      }
    ]}
  />
)
