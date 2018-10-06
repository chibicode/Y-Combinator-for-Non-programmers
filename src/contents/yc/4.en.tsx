import React from 'react'
import {
  Em,
  H3,
  InternalLink,
  // Ol,
  // OlLi,
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
import h from 'src/lib/h'
import { yc } from 'src/lib/pathHelpers'
import {
  // episode2Expression1,
  // episode2Expression2,
  episode3Expression1,
  episode4Expression1
} from 'src/lib/yc/lessonExpressions'
// import letterEmojiMapping from 'src/lib/yc/letterEmojiMapping'

export default () => (
  <>
    <P>
      <Strong>Quiz Review:</Strong> Let’s take a look at{' '}
      <InternalLink href={yc(3)}>the quiz from the last episode</InternalLink>:
    </P>
    <P>
      I added the previous and next buttons. <Em>Try clicking {h('ycNext')}</Em>{' '}
      to see the answer.
    </P>
    <ExpressionRunnerWrapper>
      <ExpressionRunner
        expressionContainer={episode3Expression1}
        showPriorities={false}
        showControls
        variableSize={'lg'}
        expressionContainerManagerOptions={{
          skipReadyToBetaReduce: true,
          skipJustBetaReduced: true,
          skipDefault: true
        }}
        initializeInstructions={[
          {
            type: 'stepForwardUntilPreviouslyChangedExpressionState',
            state: 'callArgJustHighlighted'
          }
        ]}
      />
    </ExpressionRunnerWrapper>
    <P>
      So the answer is:{' '}
      <Em>
        <Strong>
          sandwich <Emoji>🥪</Emoji>
        </Strong>
      </Em>
      . But why?
    </P>
    <EmojiSeparator emojis={['🥪', '🤔', '🥪']} />
    <P>
      This is because you want to eat sushi <Emoji>🍣</Emoji>, but it is not
      available.
    </P>
    <Ul size="lg">
      <UlLi>
        <Emoji size="lg">🍽</Emoji> Dishes → <Emoji size="lg">🥪</Emoji>
      </UlLi>
      <UlLi>
        <Emoji size="lg">😋</Emoji> Eating → <Emoji size="lg">🍣</Emoji>
      </UlLi>
      <UlLi>
        <Emoji size="lg">👨‍🍳</Emoji> Preparing → <Emoji size="lg">🥗</Emoji>
      </UlLi>
    </Ul>
    <P>
      <Em>So you don’t eat anything</Em>, and the salad <Emoji>🥗</Emoji> the
      chef is preparing will not replace the sandwich <Emoji>🥪</Emoji>.
      Therefore it becomes:
    </P>
    <Ul size="lg">
      <UlLi>
        <Emoji size="lg">🍽</Emoji> Dishes → <Emoji size="lg">🥪</Emoji>
      </UlLi>
    </Ul>
    <H3>Three cells on the bottom</H3>
    <P>
      Next, we’ll talk about the case when there are more than two cells on the
      bottom. Check out this one:
    </P>
    <ExpressionRunnerWrapper>
      <ExpressionRunner
        expressionContainer={episode4Expression1}
        showPriorities={false}
        showControls={false}
        variableSize={'lg'}
      />
    </ExpressionRunnerWrapper>
    <P>
      Here’s how to interpret this. The <Strong>bottom rightmost</Strong> cell
      represents all available dishes <Emoji>🍽</Emoji>.
    </P>
    <ExpressionRunnerWrapper>
      <ExpressionRunner
        expressionContainer={episode4Expression1}
        showPriorities={false}
        showControls
        variableSize={'lg'}
        initializeInstructions={[
          {
            type: 'stepForwardUntilPreviouslyChangedExpressionState',
            state: 'funcBodyJustHighlighted'
          }
        ]}
      />
    </ExpressionRunnerWrapper>
  </>
)
