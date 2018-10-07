import React from 'react'
import {
  Em,
  H3,
  InternalLink,
  P,
  Strong,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
// import NextLessonButton from 'src/components/NextLessonButton'
import ExpressionRunner from 'src/components/Yc/ExpressionRunner'
import ExpressionRunnerWrapper from 'src/components/Yc/ExpressionRunnerWrapper'
import InlinePrioritiesLabel from 'src/components/Yc/InlinePrioritiesLabel'
import h from 'src/lib/h'
import { yc } from 'src/lib/pathHelpers'
import {
  episode4Expression2,
  episode5Expression1
} from 'src/lib/yc/lessonExpressions'

export default () => (
  <>
    <P>
      <Strong>Quiz Review:</Strong> Let’s take a look at{' '}
      <InternalLink href={yc(4)}>the quiz from the last episode</InternalLink>:
    </P>
    <P>
      I added the previous and next buttons. <Em>Try clicking {h('ycNext')}</Em>{' '}
      several times to see the answer.
    </P>
    <ExpressionRunnerWrapper size="xs">
      <ExpressionRunner
        expressionContainer={episode4Expression2}
        showPriorities={false}
        showControls
        variableSize={'lg'}
        expressionContainerManagerSkipOptions={{
          readyToBetaReduce: true,
          justBetaReduced: true,
          default: true
        }}
        initializeInstructions={[
          {
            type: 'stepForwardUntilPreviouslyChangedExpressionState',
            state: 'readyToHighlight'
          }
        ]}
      />
    </ExpressionRunnerWrapper>
    <P>
      <Strong>Here’s what happened:</Strong>
    </P>
    <Ul>
      <UlLi>
        <Emoji>🥪</Emoji> <Emoji>🥗</Emoji> The sandwich and salad remained the
        same.
      </UlLi>
      <UlLi>
        <Emoji>😋</Emoji> You wanted to eat sushi <Emoji>🍣</Emoji>, but the
        only available dish <Emoji>🍽</Emoji> was steak <Emoji>🥩</Emoji>.
      </UlLi>
      <UlLi>
        <Em>
          As a result, the bottom left cell (<Emoji>😋</Emoji> →{' '}
          <Emoji>🍣</Emoji>) and the top cell (<Emoji>👨‍🍳</Emoji> →{' '}
          <Emoji>🍔</Emoji>) <Strong>disappeared</Strong>, and nothing else
          changed
        </Em>
        .
      </UlLi>
    </Ul>
    <EmojiSeparator emojis={['🥪', '🥗', '🥩']} />
    <P>Hope this wasn’t too difficult!</P>
    <H3>Next Topic: More than 2 cells vertically</H3>
    <P>
      Next, we’ll talk about the case where{' '}
      <Em>there are more than 2 cells stacked on top of each other</Em>. Take a
      look at this one:
    </P>
    <ExpressionRunnerWrapper>
      <ExpressionRunner
        expressionContainer={episode5Expression1}
        showPriorities
        showControls={false}
        variableSize={'lg'}
        disableReadyToHighlightColoring
      />
    </ExpressionRunnerWrapper>
    <P>You might be wondering:</P>
    <Ul>
      <UlLi>
        <Em>If there are 3 cells stacked vertically, what do we do?</Em>
      </UlLi>
      <UlLi>
        <Em>
          What are the signs that say{' '}
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel> and{' '}
          <InlinePrioritiesLabel>2</InlinePrioritiesLabel>?
        </Em>
      </UlLi>
    </Ul>
    <P>
      <Strong>Here’s the answer:</Strong>
    </P>
    <Ul>
      <UlLi>
        <Em>
          First, do the part bounded by{' '}
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>.
        </Em>
      </UlLi>
      <UlLi>
        <Em>
          Then, do the part bounded by{' '}
          <InlinePrioritiesLabel>2</InlinePrioritiesLabel>.
        </Em>
      </UlLi>
    </Ul>
    <P>This will make sense after we work on an example!</P>
    <EmojiSeparator emojis={['🥇', '➡️', '🥈']} />
    <H3>Example</H3>
    <P>
      On the following example, everything is shaded in light blue initially.{' '}
    </P>
    <P>
      <Em>
        If you click on {h('ycNext')}, it will highlight (in white background)
        the part bounded by <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
      </Em>
      . The remaining part will be shaded (in light blue background).
    </P>
    <ExpressionRunnerWrapper>
      <ExpressionRunner
        expressionContainer={episode5Expression1}
        showPriorities
        variableSize={'lg'}
        maxStepsAllowed={1}
      />
    </ExpressionRunnerWrapper>
  </>
)
