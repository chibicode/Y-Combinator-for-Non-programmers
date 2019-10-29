import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  Highlight,
  ExternalLink,
  P,
  HighlightBold,
  Bold,
  Italic,
  Hr
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiNumber from 'src/components/EmojiNumber'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import BubbleQuotes from 'src/components/BubbleQuotes'
import NextLessonButton from 'src/components/NextLessonButton'
import CardContent from 'src/components/CardContent'
import Toc from 'src/components/Toc'
import H from 'src/components/H'
import YoutubeEmbed from 'src/components/YoutubeEmbed'
import { githubRepo } from 'src/lib/meta'
import * as R from 'src/components/Runners'

const StarOnGitHub = () => (
  <>
    <P>
      <Bold>Also, for programmers:</Bold> This course is written in TypeScript
      and React, and{' '}
      <ExternalLink href={githubRepo}>
        the source is available on GitHub
      </ExternalLink>
      . Please ★ star it! <Emoji>😉</Emoji>
    </P>
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
                <HighlightBold>Y Combinator</HighlightBold>.
              </Highlight>{' '}
              It’s <HighlightBold>100% FREE</HighlightBold> (no signup
              required), and you can do it from your smartphone, tablet, or
              computer.
            </P>
            <EmojiSeparator
              emojis={['📱', '🆓', '💻']}
              description={
                <>
                  It’s <HighlightBold>100% FREE</HighlightBold>, and you can do
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
              introduction shouldn’t take much time to read.
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
        ),
        footer: {
          content: (
            <>
              <P>
                <Bold>If you just want to get started:</Bold> Press the button
                below to go to the next page!
              </P>
              <NextLessonButton />
              <P>
                <Bold>Or,</Bold> if you want to keep reading the introduction,
                scroll down below!
              </P>
            </>
          )
        }
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
              <Bold>First:</Bold> I studied computer science at Carnegie Mellon
              University (one of the top schools), and I can also say that{' '}
              <Italic>
                Y Combinator is one of the coolest concepts in computer science
                I learned.
              </Italic>
            </P>
            <P>
              <Bold>So:</Bold>{' '}
              <Highlight>From a non-programmer’s point of view,</Highlight> by
              taking this course,{' '}
              <Highlight>
                they can learn one of the coolest ideas in computer science as
                quickly as possible
              </Highlight>
              , without having to learn to code or study other boring stuff
              along the way. It could be the fastest way for non-programmers to
              understand why computer science is interesting. <Emoji>😉</Emoji>
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
            <P>But that’s not the only reason.</P>
            <P>
              <Bold>Y Combinator is a difficult concept.</Bold> If you ask a
              random programmer in San Francisco to write the Y Combinator
              program without looking it up,{' '}
              <Highlight>I bet 95% of them won’t be able to do it.</Highlight>{' '}
              It’s not easy.
            </P>
            <EmojiSeparator
              emojis={['❌', '😭', '❌']}
              description={
                <>
                  Most programmers won’t be able to
                  <br />
                  write the Y Combinator program
                  <br />
                  without looking it up
                </>
              }
            />
            <P>
              <Emoji>🤔</Emoji> <Bold>So I thought:</Bold> If I could teach a
              difficult computer science concept like Y Combinator to
              non-programmers in 2 to 3 hours, that means{' '}
              <Highlight>
                I’d be able to teach{' '}
                <Italic>other difficult computer science concepts</Italic> to
                non-programmers too.
              </Highlight>
            </P>
            <P>
              <Bold>And that’s important because…</Bold> I know that{' '}
              <Highlight>
                many of my non-programmer friends want to{' '}
                <Italic>actually understand</Italic> difficult computer science
                concepts
              </Highlight>
              , such as AI or blockchain. They <Italic>genuinely</Italic> want
              to understand how the software they’re using works.
            </P>
            <P>
              But they can’t learn it because{' '}
              <Highlight>
                they don’t have the necessary programming knowledge
              </Highlight>
              . Pretty much all learning resources that teach difficult computer
              science concepts <Italic>assume</Italic> that you know
              programming.
            </P>
            <Hr />
            <P>
              <Emoji>😠</Emoji> <Bold>I want to change this.</Bold>{' '}
              <Highlight>
                I want to make it easier for non-programmers to learn difficult
                computer science concepts as quickly as possible
              </Highlight>{' '}
              - without having to learn to code. This course is my first step in
              this direction.
            </P>
            <EmojiSeparator
              emojis={['🙂', '✨', '🙂']}
              description={
                <>
                  I want to make it easier for
                  <br />
                  non-programmers to learn
                  <br />
                  difficult computer science concepts
                </>
              }
            />
            <P>
              <Bold>Downside:</Bold> I admit that this is not the best way to
              introduce computer science to non-programmers. That’s why I’m
              calling this course a <Italic>“wild”</Italic> introduction to
              computer science.
            </P>
            <P>
              The ideal way to teach computer science would be to{' '}
              <Highlight>teach programming first.</Highlight> However, learning
              to code takes time, and{' '}
              <Highlight>
                most people - especially adults - won’t ever learn to code.
              </Highlight>{' '}
              As{' '}
              <ExternalLink href="https://a16z.com/2011/08/20/why-software-is-eating-the-world/">
                software is eating the world
              </ExternalLink>
              , I believe there need to be more ways to teach computer science
              without requiring programming knowledge -{' '}
              <Italic>even if they’re not ideal.</Italic>
            </P>
          </>
        )
      },
      {
        title: <>How to teach Y Combinator for non-programmers</>,
        content: (
          <>
            <P>
              <Bold>Puzzles, not programming:</Bold> In this course, I will
              teach you Y Combinator using{' '}
              <HighlightBold>puzzles</HighlightBold>. There’s no programming
              involved.
            </P>
            <EmojiSeparator
              emojis={['✨', '🧩', '✨']}
              description={
                <>
                  Learn Y Combinator using puzzles.
                  <br />
                  No programming required!
                </>
              }
            />
            <P>
              <Bold>The puzzles look like this:</Bold> I’ll explain how it works
              on the next page, but for now,{' '}
              <Highlight>
                try pressing the <H args={{ name: 'run' }} /> button.
              </Highlight>{' '}
              It will calculate <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={1} />.
            </P>
            <R.Mcug>
              You’ll be solving puzzles like this:
              <br />
              Try pressing <H args={{ name: 'run' }} />!
            </R.Mcug>
            <P>
              These puzzles are great also because{' '}
              <Highlight>they are optimized for smartphones</Highlight>. A lot
              of “learn to code” resources are either (1){' '}
              <Italic>great, but not smartphone-ready</Italic> or (2){' '}
              <Italic>smartphone-ready, but not great.</Italic> I tried to fix
              that. <Emoji>😉</Emoji>
            </P>
            <EmojiSeparator
              emojis={['📱', '🧩', '💻']}
              description={
                <>
                  Puzzles are optimized for smartphones.
                  <br />
                  They can be done on a computer too.
                </>
              }
            />
            <P>
              <Bold>100% FREE, takes 2 to 3 hours:</Bold> Finally, this course
              is <HighlightBold>100% FREE</HighlightBold> (no signup required)
              and should take about <HighlightBold>2 to 3 hours</HighlightBold>{' '}
              to read for most people.
            </P>
            <EmojiSeparator
              emojis={['🆓', '🤗', '🆓']}
              description={<>100% FREE!</>}
            />
            <P>
              I had to pack a lot of materials so it can be read in under 3
              hours, so <Highlight>it’s fast-paced and challenging.</Highlight>{' '}
              You might find it difficult if you don’t enjoy puzzles, but{' '}
              <Highlight>you’ll never get stuck</Highlight>. I made it so that
              you can keep reading even if you don’t understand everything.
            </P>
          </>
        ),
        footer: {
          content: (
            <CardContent
              preview={{
                text: <>Continue reading</>,
                content: (
                  <>
                    <P>
                      <Bold>For programmers:</Bold> This course is optimized for
                      non-programmers,{' '}
                      <Highlight>
                        so if you’re a programmer and want to learn Y
                        Combinator, there are other better resources.
                      </Highlight>{' '}
                      Press “Continue reading” below to learn more.
                    </P>
                  </>
                ),
                afterText: <StarOnGitHub />
              }}
            >
              <Hr />
              <P>
                <Bold>
                  For programmers interested in learning about Y Combinator, I
                  recommend this video:
                </Bold>{' '}
                <ExternalLink href="https://www.youtube.com/watch?v=FITJMJjASUs">
                  “Y Not- Adventures in Functional Programming”
                </ExternalLink>
                .
              </P>
              <P>
                This is a talk by{' '}
                <ExternalLink href="https://en.wikipedia.org/wiki/Jim_Weirich">
                  Jim Weirich
                </ExternalLink>
                , a legendary Ruby programmer who passed away in 2014. He gave
                this talk at RubyConf 2012, and I was in the audience. It was an
                amazing talk.
              </P>
              <YoutubeEmbed
                width={560}
                height={315}
                src="https://www.youtube.com/embed/FITJMJjASUs"
              />
              <Hr />
              <StarOnGitHub />
            </CardContent>
          )
        }
      },
      {
        title: <>Let’s get started!</>,
        content: (
          <>
            <EmojiSeparator emojis={['✨', '🙂', '✨']} />
            <P>
              <Bold>Let’s get started!</Bold>{' '}
              <Highlight>
                Press the button below to go to the next page!
              </Highlight>
            </P>
            <NextLessonButton />
          </>
        ),
        footer: {
          content: (
            <>
              <P>Also, sorry for not introducing myself earlier…</P>
              <H args={{ name: 'aboutMe' }} />
              <P>To go to the next page, press this button:</P>
              <NextLessonButton />
            </>
          )
        }
      }
    ]}
  />
)
