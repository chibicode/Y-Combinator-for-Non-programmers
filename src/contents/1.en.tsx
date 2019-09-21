import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Em, Bold, Ul, UlLi, Hr } from 'src/components/ContentTags'
import H from 'src/components/H'
import Emoji from 'src/components/Emoji'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiNumber from 'src/components/EmojiNumber'
import NextLessonButton from 'src/components/NextLessonButton'
import * as R from 'src/components/Runners'

export default () => (
  <EpisodeCardList
    underConstruction
    cards={[
      {
        title: <>Welcome!</>,
        content: (
          <>
            <P>
              In this course, we’ll learn about Y Combinator through a short
              story. Let’s first talk about <Strong>“mathboxes”</Strong>, one of
              the key items of this story.
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="mathBox" />
              ]}
              description={<>This is the icon for mathboxes</>}
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
              <Strong>“Lambda Village”</Strong>. The villagers worked to earn
              just enough for a modest lifestyle.
            </P>
            <EmojiSeparator
              emojis={['🌲', '🙂', '🙂', '🌲']}
              description={<>Lambda Village and the villagers</>}
            />
            <P>
              In Lambda Village, a tool called <Strong>“Mathbox”</Strong> has
              been passed down from one generation to next. As its name
              suggests, a <Bold>mathbox</Bold> is a magical tool that can solve{' '}
              <Em>math questions</Em>. You can think of it as a{' '}
              <Em>simple calculator</Em>.
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>✨</Emoji>,
                <CustomEmoji type="mathBox" />,
                <Emoji>✨</Emoji>
              ]}
              description={
                <>
                  <Strong>Mathbox</Strong> is a magical tool that can do math.
                </>
              }
            />
            <P>
              Let me explain how mathbox works! <Emoji>🤗</Emoji>
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <Bold>Note:</Bold> Later, I’ll explain why the village is named
                after “lambda”, the 11th letter of the Greek alphabet.
              </P>
            </>
          )
        }
      },
      {
        title: <>How mathboxes work</>,
        content: (
          <>
            <P>
              Here’s an example <Strong>mathbox</Strong>:
            </P>
            <R.Lizi>
              Mathbox <CustomEmoji type="mathBox" />
            </R.Lizi>
            <Ul>
              <UlLi>
                There’s <EmojiNumber number={1} /> on the top, and
              </UlLi>
              <UlLi>
                There’s an “plus 1” icon <CustomEmoji type="plusOne" /> on the
                bottom.
              </UlLi>
            </Ul>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <Emoji>1️⃣</Emoji>,
                <CustomEmoji type="plusOne" />
              ]}
            />
            <P>
              Next, we’ll talk about how we can{' '}
              <H args={{ name: 'play', lowerCase: true }} /> this mathbox.
            </P>
          </>
        )
      },
      {
        title: (
          <>
            The <H args={{ name: 'play' }} /> button
          </>
        ),
        content: (
          <>
            <P>
              Each mathbox has a{' '}
              <Strong>
                <H args={{ name: 'play' }} /> button
              </Strong>
              . If you press it, the mathbox calculates the result.{' '}
              <Strong>
                <H args={{ name: 'pressPlay', capitalize: true }} />
              </Strong>{' '}
              on the mathbox below.
            </P>
            <R.Mcug />
            <P>
              <Strong>
                The result is <EmojiNumber number={2} />
              </Strong>
              . That means it calculated <EmojiNumber number={1} />{' '}
              <Emoji>➕</Emoji> <EmojiNumber number={1} />! <Emoji>🙂</Emoji>
            </P>
            <Hr />
            <P>
              Let’s look at other mathboxes.{' '}
              <Strong>
                <H args={{ name: 'pressPlay', capitalize: true }} />
              </Strong>{' '}
              on this one:
            </P>
            <R.Aovj />
            <P>
              The result is <EmojiNumber number={4} />, which means it
              calculated <EmojiNumber number={3} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={1} />! <Emoji>🙂</Emoji>
            </P>
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'plusOneFeature', capitalize: true }} />
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
                <Em>
                  There’s some number <CustomEmoji type="blankNumber" /> on the
                  top, and…
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  There’s <CustomEmoji type="plusOne" /> on the bottom. That
                  means…
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  If you <H args={{ name: 'play', lowerCase: true }} /> it, the
                  result will be <CustomEmoji type="blankNumber" />{' '}
                  <Emoji>➕</Emoji> <EmojiNumber number={1} />.
                </Em>
              </UlLi>
            </Ul>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="blankNumber" />,
                <Emoji>➕</Emoji>,
                <EmojiNumber number={1} />
              ]}
            />
            <P>
              <Bold>This is the first feature of mathbox:</Bold>{' '}
              <H args={{ name: 'plusOneFeature' }} />.{' '}
              <Em>
                It lets you add <EmojiNumber number={1} /> to some number
              </Em>
              .
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>✨</Emoji>,
                <CustomEmoji type="plusOne" />,
                <Emoji>✨</Emoji>
              ]}
              description={
                <>
                  <H args={{ name: 'plusOneFeature', capitalize: true }} />:
                  <br />
                  Add <EmojiNumber number={1} /> to some number
                </>
              }
            />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'minusOneFeature', capitalize: true }} />
          </>
        ),
        content: (
          <>
            <P>
              Mathboxes can also <Strong>subtract 1</Strong> from a number.{' '}
              <H args={{ name: 'pressPlay', capitalize: true }} /> below:
            </P>
            <R.Xmqp />
            <P>
              The result is <EmojiNumber number={2} />. So it calculated{' '}
              <EmojiNumber number={3} /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={1} />! <Emoji>🙂</Emoji>
            </P>
            <Hr />
            <P>
              <Bold>Summary:</Bold>{' '}
              <Em>
                If you combine <CustomEmoji type="blankNumber" /> with{' '}
                <CustomEmoji type="minusOne" />, it will calculate{' '}
                <CustomEmoji type="blankNumber" /> <Emoji>➖</Emoji>{' '}
                <EmojiNumber number={1} />.
              </Em>
            </P>
            <R.Ditw>
              Calculates <CustomEmoji type="blankNumber" /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={1} />
            </R.Ditw>
            <P>
              <Bold>This is the second feature of mathbox:</Bold>{' '}
              <H args={{ name: 'minusOneFeature' }} />.{' '}
              <Em>
                It lets you subtract <EmojiNumber number={1} /> from some number
              </Em>
              .
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>✨</Emoji>,
                <CustomEmoji type="minusOne" />,
                <Emoji>✨</Emoji>
              ]}
              description={
                <>
                  <H args={{ name: 'minusOneFeature', capitalize: true }} />:
                  <br />
                  Subtracts <EmojiNumber number={1} /> from some number
                </>
              }
            />
          </>
        )
      },
      {
        title: (
          <>
            You can only use <CustomEmoji type="plusOne" /> and{' '}
            <CustomEmoji type="minusOne" />
          </>
        ),
        content: (
          <>
            <P>
              <Bold>Important:</Bold> You can{' '}
              <Strong>
                only use <CustomEmoji type="plusOne" /> and{' '}
                <CustomEmoji type="minusOne" />
              </Strong>{' '}
              in mathboxes.
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="minusOne" />
              ]}
              description={
                <>
                  You can only use <CustomEmoji type="plusOne" /> and{' '}
                  <CustomEmoji type="minusOne" />
                </>
              }
            />
            <P>
              <Bold>Question:</Bold> If you can only use{' '}
              <CustomEmoji type="plusOne" /> and <CustomEmoji type="minusOne" />
              , then{' '}
              <Strong>
                how do you calculate something like <EmojiNumber number={2} />{' '}
                <Emoji>➕</Emoji> <EmojiNumber number={2} />
              </Strong>{' '}
              using a mathbox?
              <Emoji>🤔</Emoji>
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
              <Strong>
                use <CustomEmoji type="plusOne" /> twice
              </Strong>{' '}
              on <EmojiNumber number={2} />.
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={2} />,
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="plusOne" />
              ]}
              description={
                <>
                  Use <CustomEmoji type="plusOne" /> twice
                </>
              }
            />
            <P>
              Here’s the mathbox that uses <CustomEmoji type="plusOne" /> twice.{' '}
              <H args={{ name: 'pressPlay', capitalize: true }} />:
            </P>
            <R.Jiqb />
            <P>
              The result is <EmojiNumber number={4} />. So it calculated{' '}
              <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={2} />! <Emoji>🙂</Emoji>
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
              <Bold>Note:</Bold> You can use both{' '}
              <Strong>
                <CustomEmoji type="plusOne" /> and{' '}
                <CustomEmoji type="minusOne" /> as many times as you like
              </Strong>
              . <Emoji>😉</Emoji>
            </P>
            <EmojiSeparator
              noBottomMargin
              nodes={[
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="plusOne" />
              ]}
            />
            <EmojiSeparator
              noTopMargin
              nodes={[
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />
              ]}
              description={
                <>
                  Use <CustomEmoji type="plusOne" /> and{' '}
                  <CustomEmoji type="minusOne" />
                  <br />
                  as many times as you like
                </>
              }
            />
            <P>
              <Bold>Example:</Bold> This one uses{' '}
              <Strong>
                <CustomEmoji type="plusOne" /> three times
              </Strong>{' '}
              to calculate <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={3} />.
            </P>
            <R.Eagi>
              Calculates <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={3} />
            </R.Eagi>
            <P>
              <Bold>Another Example:</Bold> This one uses{' '}
              <Strong>
                <CustomEmoji type="minusOne" /> four times
              </Strong>{' '}
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
              <Bold>Therefore:</Bold> By using <CustomEmoji type="plusOne" />{' '}
              and <CustomEmoji type="minusOne" /> many times, you can{' '}
              <Em>
                calculate any addition or subtraction, no matter how large the
                numbers are
              </Em>{' '}
              .
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="horizontalDotDotDot" />,
                <CustomEmoji type="plusOne" />
              ]}
              noBottomMargin
            />
            <EmojiSeparator
              noTopMargin
              nodes={[
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="horizontalDotDotDotRed" />,
                <CustomEmoji type="minusOne" />
              ]}
              description={
                <>
                  By using <CustomEmoji type="plusOne" /> and{' '}
                  <CustomEmoji type="minusOne" /> many times,
                  <br />
                  you can calculate any addition or subtraction
                </>
              }
            />
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
              <Strong>
                <EmojiNumber number={10} /> with ten{' '}
                <CustomEmoji type="plusOne" />
                ’s
              </Strong>
              .
            </P>
            <R.Amoq>
              Use <CustomEmoji type="plusOne" /> ten times
            </R.Amoq>
            <P>
              Now you know how to add or subtract large numbers using a mathbox!{' '}
              <Emoji>😉</Emoji>
            </P>
          </>
        )
      },
      {
        title: <>Villagers were very bad at math</>,
        content: (
          <>
            <P>
              <Bold>Summary:</Bold> A <Bold>Mathbox</Bold> is a{' '}
              <Strong>
                magical tool that can calculate additions and subtractions
              </Strong>
              .
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
              <Bold>Why mathboxes were important:</Bold> Villagers in Lambda
              Village were all <Strong>very bad at math</Strong>. They even had
              to rely on mathboxes to calculate simple additions like{' '}
              <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
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
                  We suck at math, so we must use mathboxes
                  <br />
                  to do simple additions like <EmojiNumber number={2} />{' '}
                  <Emoji>➕</Emoji> <EmojiNumber number={3} />!
                </>
              }
            />
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <Bold>Note:</Bold>{' '}
                <Em>
                  Unfortunately, mathboxes cannot do{' '}
                  <Strong>multiplications</Strong> <Emoji>✖️</Emoji> or{' '}
                  <Strong>divisions</Strong> <Emoji>➗</Emoji>.
                </Em>
              </P>
              <EmojiSeparator
                emojis={['✖️', '😭', '➗']}
                description={<>No multiplications or divisions</>}
              />
              <P>
                However, for villagers who all struggle with math, mathboxes'
                ability to do addition and subtraction was better than nothing.
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
              <Bold>Next up:</Bold> It turns out that mathboxes have{' '}
              <Strong>one more feature</Strong> other than{' '}
              <H args={{ name: 'plusOneFeature' }} /> and{' '}
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
            <P>
              We’ll talk about this new feature on the next page!{' '}
              <Emoji>🤗</Emoji>
            </P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
