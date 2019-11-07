import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  HighlightBold,
  Highlight,
  Bold,
  Ul,
  UlLi,
  Hr,
  Italic
} from 'src/components/ContentTags'
import H from 'src/components/H'
import Emoji from 'src/components/Emoji'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiNumber from 'src/components/EmojiNumber'
import NextLessonButton from 'src/components/NextLessonButton'
import * as R from 'src/components/Runners'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>Welcome!</>,
        content: (
          <>
            <P>
              In this course, we’ll learn about Y Combinator through a short
              story. Let’s first talk about{' '}
              <HighlightBold>“mathboxes”</HighlightBold>, one of the key items
              of this story.
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="mathBox" />
              ]}
              description={<>Mathboxes</>}
            />
          </>
        )
      },
      {
        title: <>Once upon a time…</>,
        content: (
          <>
            <P>
              Once upon a time, there was a rural village called{' '}
              <HighlightBold>“Lambda Village”</HighlightBold>. The villagers
              worked to earn just enough for a modest lifestyle.
            </P>
            <EmojiSeparator
              emojis={['🌲', '🙂', '🙂', '🌲']}
              description={<>Lambda Village and the villagers</>}
            />
            <P>
              In Lambda Village, a tool called{' '}
              <HighlightBold>“Mathbox”</HighlightBold> has been passed down from
              one generation to next. As its name suggests, a{' '}
              <Bold>mathbox</Bold> is a magical tool that can solve{' '}
              <Italic>math questions</Italic>. You can think of it as a{' '}
              <Italic>simple calculator</Italic>.
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>✨</Emoji>,
                <CustomEmoji type="mathBox" />,
                <Emoji>✨</Emoji>
              ]}
              description={
                <>
                  <Bold>Mathbox</Bold> is a magical tool
                  <br />
                  that can solve math questions
                </>
              }
            />
            <P>Let me explain how it works.</P>
          </>
        )
      },
      {
        title: <>How mathboxes work</>,
        content: (
          <>
            <P>
              Here’s an example <Bold>mathbox</Bold>:
            </P>
            <R.Lizi>
              A mathbox <CustomEmoji type="mathBox" />
            </R.Lizi>
            <Ul>
              <UlLi>
                <Highlight>
                  There’s <EmojiNumber number={1} /> on the top
                </Highlight>
                , and
              </UlLi>
              <UlLi>
                <Highlight>
                  There’s a “plus 1” icon <CustomEmoji type="plusOne" /> on the
                  bottom.
                </Highlight>
              </UlLi>
            </Ul>
            <P>
              Before I explain what these icons mean, let’s talk about how we
              can <H args={{ name: 'run', lowerCase: true }} /> this mathbox.
            </P>
          </>
        )
      },
      {
        title: (
          <>
            The <H args={{ name: 'run' }} /> button
          </>
        ),
        content: (
          <>
            <P>
              Each mathbox has a{' '}
              <HighlightBold>
                <H args={{ name: 'run' }} /> button
              </HighlightBold>
              . If you press it, the mathbox calculates the result.{' '}
              <H args={{ name: 'deprecatedPressRun', capitalize: true }} /> on the
              mathbox below.
            </P>
            <R.Mcug />
            <P>
              The result is <EmojiNumber number={2} />. That means it calculated{' '}
              <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={1} />.
            </P>
            <Hr />
            <P>
              Let’s look at other mathboxes.{' '}
              <H args={{ name: 'deprecatedPressRun', capitalize: true }} /> on this one:
            </P>
            <R.Aovj />
            <P>
              The result is <EmojiNumber number={4} />, which means it
              calculated <EmojiNumber number={3} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={1} />.
            </P>
          </>
        )
      },
      {
        title: (
          <>
            <H
              args={{
                name: 'plusOneFeature',
                capitalize: true
              }}
            />
          </>
        ),
        content: (
          <>
            <P>
              <Bold>Summary:</Bold> Suppose that you have a mathbox like below:
            </P>
            <R.Rviy />
            <Ul>
              <UlLi>
                There’s some number <CustomEmoji type="blankNumber" /> on the
                top, and…
              </UlLi>
              <UlLi>
                There’s <CustomEmoji type="plusOne" /> on the bottom. That
                means…
              </UlLi>
              <UlLi>
                <Highlight>
                  If you <H args={{ name: 'run', lowerCase: true }} /> it, the
                  result will be <CustomEmoji type="blankNumber" />{' '}
                  <Emoji>➕</Emoji> <EmojiNumber number={1} />.
                </Highlight>
              </UlLi>
            </Ul>
            <R.Rviy>
              If you <H args={{ name: 'run', lowerCase: true }} /> it…
            </R.Rviy>
            <ExpressionRunnerSeparator />
            <R.Ymtp>
              The result will be <CustomEmoji type="blankNumber" />{' '}
              <Emoji>➕</Emoji> <EmojiNumber number={1} />
            </R.Ymtp>
            <P>
              <Bold>This is the first feature of mathbox:</Bold>{' '}
              <Highlight>
                <H args={{ name: 'plusOneFeature' }} />
              </Highlight>
              . It lets you add <EmojiNumber number={1} /> to some number.
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>✨</Emoji>,
                <CustomEmoji type="plusOne" />,
                <Emoji>✨</Emoji>
              ]}
              description={
                <>
                  <HighlightBold>
                    <H args={{ name: 'plusOneFeature', capitalize: true }} />
                  </HighlightBold>
                  :
                  <br />
                  Adds <EmojiNumber number={1} /> to some number
                </>
              }
            />
          </>
        )
      },
      {
        title: (
          <>
            <H
              args={{
                name: 'minusOneFeature',
                capitalize: true
              }}
            />
          </>
        ),
        content: (
          <>
            <P>
              Mathboxes can also <Italic>subtract 1</Italic> from a number.{' '}
              <H args={{ name: 'deprecatedPressRun', capitalize: true }} /> below:
            </P>
            <R.Xmqp />
            <P>
              The result is <EmojiNumber number={2} />. So it calculated{' '}
              <EmojiNumber number={3} /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={1} />.
            </P>
            <Hr />
            <P>
              <Bold>Summary:</Bold> If you combine{' '}
              <CustomEmoji type="blankNumber" /> with{' '}
              <CustomEmoji type="minusOne" />, it will calculate{' '}
              <CustomEmoji type="blankNumber" /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={1} />.
            </P>
            <R.Ditw>
              Calculates <CustomEmoji type="blankNumber" /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={1} />
            </R.Ditw>
            <P>
              <Bold>This is the second feature of mathbox:</Bold>{' '}
              <Highlight>
                <H args={{ name: 'minusOneFeature' }} />
              </Highlight>
              . It lets you subtract <EmojiNumber number={1} /> from some
              number.
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>✨</Emoji>,
                <CustomEmoji type="minusOne" />,
                <Emoji>✨</Emoji>
              ]}
              description={
                <>
                  <HighlightBold>
                    <H args={{ name: 'minusOneFeature', capitalize: true }} />
                  </HighlightBold>
                  :
                  <br />
                  Subtracts <EmojiNumber number={1} /> from some number
                </>
              }
            />
          </>
        )
      },
      {
        type: 'challengeProblem',
        title: <>How can we calculate this?</>,
        content: (
          <>
            <P>
              <Emoji>🤔</Emoji> <Bold>Now, here’s a question:</Bold>{' '}
              <Highlight>
                Can you think of a way to calculate something like{' '}
                <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
                <EmojiNumber number={2} />
              </Highlight>{' '}
              using a mathbox?
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={2} />,
                <Emoji>➕</Emoji>,
                <EmojiNumber number={2} />
              ]}
              description={<>How do you calculate this using a mathbox?</>}
            />
          </>
        )
      },
      {
        title: (
          <>
            Answer: Use <CustomEmoji type="plusOne" /> twice
          </>
        ),
        content: (
          <>
            <P>
              <Bold>Answer:</Bold> To calculate <EmojiNumber number={2} />{' '}
              <Emoji>➕</Emoji> <EmojiNumber number={2} />,{' '}
              <Highlight>
                use <CustomEmoji type="plusOne" /> twice
              </Highlight>{' '}
              on <EmojiNumber number={2} />.
            </P>
            <P>
              Here’s an example.{' '}
              <H args={{ name: 'deprecatedPressRun', capitalize: true }} />:
            </P>
            <R.Jiqb />
            <P>
              The result is <EmojiNumber number={4} />. So it calculated{' '}
              <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={2} />.
            </P>
          </>
        )
      },
      {
        title: (
          <>
            Use <CustomEmoji type="plusOne" /> and{' '}
            <CustomEmoji type="minusOne" /> as many times as you like
          </>
        ),
        content: (
          <>
            <P>
              You can use both{' '}
              <Highlight>
                <CustomEmoji type="plusOne" /> and{' '}
                <CustomEmoji type="minusOne" /> as many times as you like
              </Highlight>
              .
            </P>
            <P>
              <Bold>Example:</Bold> This one uses{' '}
              <Italic>
                <CustomEmoji type="plusOne" /> three times
              </Italic>{' '}
              to calculate <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={3} />.
            </P>
            <R.Eagi>
              Calculates <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={3} />
            </R.Eagi>
            <P>
              <Bold>Another example:</Bold> This one uses{' '}
              <Italic>
                <CustomEmoji type="minusOne" /> four times
              </Italic>{' '}
              to calculate <EmojiNumber number={5} /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={4} />.
            </P>
            <R.Yjur>
              Calculates <EmojiNumber number={5} /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={4} />.
            </R.Yjur>
          </>
        )
      },
      {
        title: <>Calculate any addition or subtraction</>,
        content: (
          <>
            <P>
              By using <CustomEmoji type="plusOne" /> and{' '}
              <CustomEmoji type="minusOne" /> many times, you can{' '}
              <Highlight>
                calculate any addition or subtraction, no matter how large the
                numbers are
              </Highlight>{' '}
              .
            </P>
            <P>
              <Bold>Example:</Bold> Suppose that you want to calculate{' '}
              <EmojiNumber number={10} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={10} />. What would the mathbox look like?
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={10} />,
                <Emoji>➕</Emoji>,
                <EmojiNumber number={10} />
              ]}
            />
            <P>
              <Bold>Answer:</Bold> Combine{' '}
              <Italic>
                <EmojiNumber number={10} /> with ten{' '}
                <CustomEmoji type="plusOne" />
                ’s
              </Italic>
              .
            </P>
            <R.Amoq>
              Use <CustomEmoji type="plusOne" /> ten times
            </R.Amoq>
          </>
        )
      },
      {
        title: <>The villagers were very bad at math</>,
        content: (
          <>
            <P>
              <Bold>Summary:</Bold>{' '}
              <Highlight>
                A <Bold>Mathbox</Bold> is a magical tool that can calculate
                additions and subtractions.
              </Highlight>
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>➕</Emoji>,
                <CustomEmoji type="mathBox" />,
                <Emoji>➖</Emoji>
              ]}
              description={<>Mathboxes can do additions and subtractions</>}
            />
            <P>
              <Bold>Why mathboxes were important:</Bold>{' '}
              <Highlight>
                The villagers in Lambda Village were all{' '}
                <Italic>very bad at math</Italic>.
              </Highlight>{' '}
              They even had to rely on mathboxes to calculate simple additions
              like <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={3} />.
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>🌲</Emoji>,
                <Emoji>🙂</Emoji>,
                <CustomEmoji type="mathBox" />,
                <Emoji>🙂</Emoji>,
                <Emoji>🌲</Emoji>
              ]}
              description={
                <>
                  “We suck at math, so we must use
                  <br />
                  mathboxes to do even simple additions.”
                </>
              }
            />
            <P>The villagers couldn’t live without mathboxes.</P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <Bold>Note:</Bold> Unfortunately, mathboxes cannot do{' '}
                <Italic>multiplications</Italic> <Emoji>✖️</Emoji> or{' '}
                <Italic>divisions</Italic> <Emoji>➗</Emoji>.
              </P>
            </>
          )
        }
      },
      {
        title: <>The third feature of a mathbox</>,
        content: (
          <>
            <P>
              <Highlight>
                It turns out that mathboxes have{' '}
                <Italic>one more feature</Italic>
              </Highlight>{' '}
              other than <H args={{ name: 'plusOneFeature' }} /> and{' '}
              <H args={{ name: 'minusOneFeature' }} /> that we just described.
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="minusOne" />,
                <Emoji>❓</Emoji>
              ]}
              description={<>A mathbox has one more feature…</>}
            />
            <P>Let’s talk about this third feature on the next page.</P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
