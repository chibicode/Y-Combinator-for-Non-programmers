/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Hr,
  Highlight,
  Ul,
  UlLi,
  Bold,
  Italic
} from 'src/components/ContentTags'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiNumber from 'src/components/EmojiNumber'
import Emoji from 'src/components/Emoji'
import H from 'src/components/H'
import * as R from 'src/components/Runners'
import YesNoButtons from 'src/components/YesNoButtons'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import NextLessonButton from 'src/components/NextLessonButton'
import InlineBorder from 'src/components/InlineBorder'

export const TwoPlusFour = () => (
  <>
    <R.Ednv />
    <P>
      The result is <EmojiNumber number={6} />. Because there’s{' '}
      <InlineBorder>
        <EmojiNumber number={4} />
      </InlineBorder>{' '}
      next to <CustomEmoji type="plusOne" />, it repeats{' '}
      <CustomEmoji type="plusOne" /> <Italic>four times</Italic>.
    </P>
    <R.Xpks />
    <ExpressionRunnerSeparator />
    <R.Dgpx>
      Repeats <CustomEmoji type="plusOne" /> four times
    </R.Dgpx>
    <ExpressionRunnerSeparator />
    <R.Iwmu>
      Calculated <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
      <EmojiNumber number={4} />
    </R.Iwmu>
  </>
)

export const Conclusion = () => (
  <>
    <P>
      By using{' '}
      <H
        args={{
          name: 'repeatFeature'
        }}
      />
      ,{' '}
      <Highlight>
        you’ll always use the correct number of <CustomEmoji type="plusOne" />
        ’s or <CustomEmoji type="minusOne" />
        ’s
      </Highlight>
      . You can be confident that your additions and subtractions are accurate.
    </P>
    <P>
      This is why{' '}
      <H
        args={{
          name: 'repeatFeature'
        }}
      />{' '}
      was absolutely necessary for the villagers in Lambda Village.
    </P>
    <EmojiSeparator
      emojis={['➕', '🤗', '➖']}
      description={
        <>
          By using{' '}
          <H
            args={{
              name: 'repeatFeature'
            }}
          />
          , we can do
          <br />
          additions and subtractions accurately!
        </>
      }
    />
  </>
)

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: (
          <>
            <H
              args={{
                name: 'repeatFeature',
                capitalize: true
              }}
            />
          </>
        ),
        content: (
          <>
            <P>
              <Bold>Review:</Bold> Last time, we talked about Lambda Village and{' '}
              <Bold>mathboxes</Bold> used by its villagers.
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
                  The villagers in Lambda Village
                  <br />
                  and their mathbox
                </>
              }
            />
            <P>
              We also talked about the first two features of a mathbox:{' '}
              <H args={{ name: 'plusOneFeature', capitalize: true }} /> and{' '}
              <H args={{ name: 'minusOneFeature' }} />, which enables addition
              and subtraction.
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="minusOne" />
              ]}
              description={
                <>
                  <H args={{ name: 'plusOneFeature', capitalize: true }} /> and
                  <br />
                  <H args={{ name: 'minusOneFeature' }} />
                </>
              }
            />
            <P>
              This time, we’ll talk about the <Italic>third</Italic> feature of
              a mathbox:{' '}
              <Highlight>
                <H args={{ name: 'repeatFeature' }} />
              </Highlight>
              .
            </P>
            <EmojiSeparator
              nodes={[<Emoji>✨</Emoji>, <Emoji>🔁</Emoji>, <Emoji>✨</Emoji>]}
              description={
                <>
                  <Highlight>
                    <H args={{ name: 'repeatFeature', capitalize: true }} />
                  </Highlight>
                </>
              }
            />
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
          </>
        ),
        content: (
          <>
            <P>
              <Bold>
                We’ll start this page with a{' '}
                <Highlight>
                  <H args={{ name: 'yesNoQuiz', lowerCase: true }} />
                </Highlight>
                .
              </Bold>{' '}
              It doesn’t matter if you get it right or wrong, so don’t worry too
              much!
            </P>
            <EmojiSeparator
              emojis={['👍', '🤔', '👎']}
              description={<>We’ll do a Yes/No quiz!</>}
            />
            <P>
              The villagers living in Lambda Village were all bad at math, so
              they had to rely on mathboxes to solve even the simplest problems.
            </P>
            <P>
              <Bold>One day</Bold>:{' '}
              <Highlight>
                A villager needed to use a mathbox to calculate{' '}
                <EmojiNumber number={10} /> <Emoji>➖</Emoji>{' '}
                <EmojiNumber number={8} />.
              </Highlight>
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={10} />,
                <Emoji>➖</Emoji>,
                <EmojiNumber number={8} />
              ]}
              description={
                <>
                  <Emoji size="mdlg">🤔</Emoji> Need to calculate this…
                </>
              }
            />
            <P>So he came up with the following mathbox:</P>
            <R.Dfjp>
              <Emoji>😉</Emoji> This will calculate <EmojiNumber number={10} />{' '}
              <Emoji>➖</Emoji> <EmojiNumber number={8} />!
            </R.Dfjp>
            <P>
              <Bold>Question:</Bold>{' '}
              <Highlight>
                Will the above mathbox correctly calculate{' '}
                <EmojiNumber number={10} /> <Emoji>➖</Emoji>{' '}
                <EmojiNumber number={8} />? Select{' '}
                <H args={{ name: 'yesNoQuizYes' }} /> or{' '}
                <H args={{ name: 'yesNoQuizNo' }} />.
              </Highlight>
            </P>
            <YesNoButtons answer={'no'} />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'theAnswerIs', isYes: false }} />
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'theAnswerIs', isYes: false }} />
              . <H args={{ name: 'pressPlay', capitalize: true }} />:
            </P>
            <R.Lxrk />
            <P>
              <Bold>
                So the result is <EmojiNumber number={3} />.
              </Bold>{' '}
              <Highlight>
                Instead of calculating <EmojiNumber number={10} />{' '}
                <Emoji>➖</Emoji> <EmojiNumber number={8} />, we calculated{' '}
                <EmojiNumber number={10} /> <Emoji>➖</Emoji>{' '}
                <EmojiNumber number={7} /> by mistake
              </Highlight>
              .
            </P>
            <EmojiSeparator
              emojis={['❌', '😭', '❌']}
              description={
                <>
                  Oops! It didn’t calculate <EmojiNumber number={10} />{' '}
                  <Emoji>➖</Emoji> <EmojiNumber number={8} />
                </>
              }
            />
            <P>
              Were you able to figure out why this happened? <Emoji>😉</Emoji>
            </P>
          </>
        )
      },
      {
        title: (
          <>
            Wrong number of <CustomEmoji type="minusOne" />
            ’s
          </>
        ),
        content: (
          <>
            <P>
              The reason it calculated <EmojiNumber number={10} />{' '}
              <Emoji>➖</Emoji> <EmojiNumber number={7} /> instead of{' '}
              <EmojiNumber number={10} /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={8} /> is that{' '}
              <Highlight>
                there was the wrong number of <CustomEmoji type="minusOne" />
                ’s
              </Highlight>
              .
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>❌</Emoji>,
                <CustomEmoji type="minusOne" />,
                <Emoji>❌</Emoji>
              ]}
              description={
                <>
                  Wrong number of <CustomEmoji type="minusOne" />
                  ’s
                </>
              }
            />
            <P>
              If you wanted to calculate <EmojiNumber number={10} />{' '}
              <Emoji>➖</Emoji> <EmojiNumber number={8} />, you need to have{' '}
              <Italic>eight</Italic> <CustomEmoji type="minusOne" />
              ’s. However,{' '}
              <Highlight>
                the previous mathbox only had <Italic>seven</Italic> of them.
              </Highlight>
            </P>
            <EmojiSeparator
              size="mdsm"
              nodes={[
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji
                  type="minusOne"
                  cssOverrides={css`
                    opacity: 0.3;
                  `}
                />
              ]}
              description={
                <>
                  Needed <Italic>eight</Italic> <CustomEmoji type="minusOne" />
                  ’s,
                  <br />
                  but there was only <Italic>seven</Italic> of them
                </>
              }
            />
            <P>You can check again:</P>
            <R.Dfjp>
              Needed <Italic>eight</Italic> <CustomEmoji type="minusOne" />
              ’s,
              <br />
              but there was only <Italic>seven</Italic> of them
            </R.Dfjp>
            <P>
              <Bold>Summary:</Bold> If you put the wrong number of{' '}
              <CustomEmoji type="plusOne" />
              ’s or <CustomEmoji type="minusOne" />
              ’s, then you won’t be able to calculate additions or subtractions
              correctly. <Emoji>😭</Emoji>
            </P>
            <P>
              <Bold>Now, here’s a question:</Bold>{' '}
              <Highlight>How can we avoid mistakes like this?</Highlight>
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusOne" />,
                <Emoji>🤔</Emoji>,
                <CustomEmoji type="minusOne" />
              ]}
              description={
                <>
                  How do we avoid putting
                  <br />
                  the wrong number of <CustomEmoji type="plusOne" />
                  ’s or <CustomEmoji type="minusOne" />
                  ’s?
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
                name: 'repeatFeature',
                capitalize: true
              }}
            />
          </>
        ),
        content: (
          <>
            <P>
              Mathboxes do have a feature that helps avoid mistakes like this.
              It’s called:{' '}
              <Highlight>
                <H args={{ name: 'repeatFeature' }} />
              </Highlight>
              .
            </P>
            <EmojiSeparator
              nodes={[<Emoji>✨</Emoji>, <Emoji>🔁</Emoji>, <Emoji>✨</Emoji>]}
              description={
                <>
                  <Highlight>
                    <H args={{ name: 'repeatFeature', capitalize: true }} />
                  </Highlight>
                </>
              }
            />
            <P>
              <Bold>Example:</Bold> Take a look at this mathbox that uses{' '}
              <H args={{ name: 'repeatFeature' }} />:
            </P>
            <R.Sucz />
            <P>
              <Bold>Notice that</Bold>{' '}
              <Highlight>
                there’s{' '}
                <InlineBorder>
                  <EmojiNumber number={8} />
                </InlineBorder>{' '}
                on the bottom-left, next to <CustomEmoji type="minusOne" />.
              </Highlight>
            </P>
          </>
        )
      },
      {
        title: (
          <>
            Repeats <CustomEmoji type="minusOne" />
          </>
        ),
        content: (
          <>
            <P>
              If you <H args={{ name: 'run', lowerCase: true }} /> the above
              mathbox,{' '}
              <Highlight>
                it automatically expands the bottom half before calculating the
                result
              </Highlight>
              . After the expansion, there will be <Italic>eight</Italic>{' '}
              <CustomEmoji type="minusOne" />
              ’s.
            </P>
            <R.Sucz>
              If you <H args={{ name: 'run', lowerCase: true }} /> this…
            </R.Sucz>
            <ExpressionRunnerSeparator />
            <R.Xlgb>
              <Bold>Before calculating the result:</Bold>
              <br />
              The bottom half automatically becomes
              <br />
              <Italic>eight</Italic> <CustomEmoji type="minusOne" />
              ’s
            </R.Xlgb>
            <P>
              <Bold>So:</Bold> The above mathbox calculates{' '}
              <EmojiNumber number={10} /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={8} /> and the result is{' '}
              <EmojiNumber number={2} />.{' '}
              <H args={{ name: 'pressPlay', capitalize: true }} />:
            </P>
            <R.Pgxb />
            <P>
              <Bold>Summary:</Bold>{' '}
              <Highlight>
                If there’s{' '}
                <InlineBorder>
                  <EmojiNumber number={8} />
                </InlineBorder>{' '}
                next to <CustomEmoji type="minusOne" />, it repeats{' '}
                <CustomEmoji type="minusOne" /> eight times
              </Highlight>
              .
            </P>
            <EmojiSeparator
              nodes={[
                <InlineBorder small>
                  <EmojiNumber number={8} />
                </InlineBorder>,
                <CustomEmoji type="minusOne" />
              ]}
            />
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              size="mdsm"
              nodes={[
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />
              ]}
              description={
                <>
                  Repeats <CustomEmoji type="minusOne" /> eight times
                </>
              }
            />
            <P>
              By using <H args={{ name: 'repeatFeature' }} />,{' '}
              <Italic>
                you can specify the number of times{' '}
                <CustomEmoji type="minusOne" /> gets repeated
              </Italic>
              . <Emoji>🤗</Emoji>
            </P>
          </>
        )
      },
      {
        title: (
          <>
            You can repeat <CustomEmoji type="plusOne" /> too
          </>
        ),
        content: (
          <>
            <P>
              <Bold>
                You can also repeat <CustomEmoji type="plusOne" />
                ’s
              </Bold>
              . Take a look at this mathbox, and{' '}
              <H args={{ name: 'pressPlay' }} />:
            </P>
            <TwoPlusFour />
            <P>
              This is how you can calculate <EmojiNumber number={2} />{' '}
              <Emoji>➕</Emoji> <EmojiNumber number={4} />. <Emoji>😉</Emoji>
            </P>
          </>
        )
      },
      {
        title: (
          <>
            <H
              args={{
                name: 'repeatFeature',
                capitalize: true
              }}
            />
          </>
        ),
        content: (
          <>
            <P>Here’s the summary:</P>
            <R.Bwnp />
            <Ul>
              <UlLi>
                <Highlight>
                  If there’s{' '}
                  <InlineBorder>
                    <CustomEmoji type="blankNumber" />
                  </InlineBorder>{' '}
                  to the left of <CustomEmoji type="plusOne" />, then…
                </Highlight>
              </UlLi>
              <UlLi>
                <Highlight>
                  When you <H args={{ name: 'run', lowerCase: true }} /> it,{' '}
                  <CustomEmoji type="plusOne" /> gets repeated for{' '}
                  <CustomEmoji type="blankNumber" /> times.
                </Highlight>
              </UlLi>
            </Ul>
            <Hr />
            <P>
              Of course, you can use <CustomEmoji type="minusOne" /> instead of{' '}
              <CustomEmoji type="plusOne" /> as well.
            </P>
            <R.Ewfr>
              <CustomEmoji type="minusOne" /> gets repeated{' '}
              <CustomEmoji type="blankNumber" /> times
            </R.Ewfr>
            <Hr />
            <P>
              So this is how{' '}
              <Highlight>
                <H args={{ name: 'repeatFeature' }} />
              </Highlight>{' '}
              works!
            </P>
            <EmojiSeparator
              nodes={[<Emoji>✨</Emoji>, <Emoji>🔁</Emoji>, <Emoji>✨</Emoji>]}
              description={
                <>
                  <Highlight>
                    <H args={{ name: 'repeatFeature', capitalize: true }} />
                  </Highlight>
                </>
              }
            />
          </>
        )
      },
      {
        title: (
          <>
            How to calculate <Emoji>🅰️</Emoji> <Emoji>➕</Emoji>{' '}
            <Emoji>🅱️</Emoji>
          </>
        ),
        content: (
          <>
            <P>
              <Bold>So:</Bold>{' '}
              <Highlight>
                If you want to calculate <Emoji>🅰️</Emoji> <Emoji>➕</Emoji>{' '}
                <Emoji>🅱️</Emoji>, you can use the following mathbox:
              </Highlight>
            </P>
            <R.Nmbt>
              Calculates <Emoji>🅰️</Emoji> <Emoji>➕</Emoji> <Emoji>🅱️</Emoji>
            </R.Nmbt>
            <P>
              <Bold>Example:</Bold> To calculate <EmojiNumber number={5} />{' '}
              <Emoji>➕</Emoji> <EmojiNumber number={3} />, set{' '}
              <Emoji>🅰️</Emoji> as <EmojiNumber number={5} /> and{' '}
              <Emoji>🅱️</Emoji> as <EmojiNumber number={3} />.
            </P>
            <R.Etku>
              Set <Emoji>🅰️</Emoji> as <EmojiNumber number={5} /> and{' '}
              <Emoji>🅱️</Emoji> as <EmojiNumber number={3} />.
            </R.Etku>
            <P>
              If you <H args={{ name: 'run', lowerCase: true }} /> it, it
              calculates <EmojiNumber number={5} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={3} />.
            </P>
            <R.Iczf>
              Repeat <CustomEmoji type="plusOne" /> three times
            </R.Iczf>
            <ExpressionRunnerSeparator />
            <R.Vsvt>
              Calculated <EmojiNumber number={5} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={3} />
            </R.Vsvt>
            <P>
              By using this technique,{' '}
              <Italic>
                you won’t use the wrong number of <CustomEmoji type="plusOne" />
                ’s again!
              </Italic>{' '}
              <Emoji>😉</Emoji>
            </P>
          </>
        )
      },
      {
        title: <>Same for subtraction</>,
        content: (
          <>
            <P>
              <Bold>You can use the same technique for subtraction:</Bold>{' '}
              <Highlight>
                To calculate <Emoji>🅰️</Emoji> <Emoji>➖</Emoji>{' '}
                <Emoji>🅱️</Emoji>, use the following mathbox:
              </Highlight>
            </P>
            <R.Jaqs>
              Calculates <Emoji>🅰️</Emoji> <Emoji>➖</Emoji> <Emoji>🅱️</Emoji>
            </R.Jaqs>
          </>
        )
      },
      {
        title: <>Do additions and subtractions accurately</>,
        content: (
          <>
            <Conclusion />
          </>
        )
      },
      {
        title: <>The villagers couldn’t live without mathboxes</>,
        content: (
          <>
            <P>
              <Bold>As we mentioned on the last page:</Bold>{' '}
              <Italic>
                The villagers in Lambda Village were all very bad at math
              </Italic>
              . They had to rely on mathboxes to do even simple additions or
              subtractions.
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>🌲</Emoji>,
                <Emoji>😍</Emoji>,
                <CustomEmoji type="mathBox" />,
                <Emoji>😍</Emoji>,
                <Emoji>🌲</Emoji>
              ]}
              description={
                <>
                  We are bad at math,
                  <br />
                  so we can’t live without mathboxes!
                </>
              }
            />
            <P>
              However, one day, <Italic>something terrible happened</Italic> in
              Lambda Village that changed everything.
            </P>
            <EmojiSeparator
              emojis={['🌲', '😭', '❓', '😭', '🌲']}
              description={<>Something terrible happened!</>}
            />
            <P>We’ll talk about it on the next page!</P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
