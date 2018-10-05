import React from 'react'
import Content from 'src/components/Content'
import {
  // Blockquote,
  Em,
  // ExternalLink,
  H3,
  InternalLink,
  Ol,
  OlLi,
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
import { yc } from 'src/lib/pathHelpers'
import {
  episode2Expression1,
  episode2Expression2
} from 'src/lib/yc/lessonExpressions'

export default () => (
  <>
    <P>
      <Strong>Quiz Review:</Strong> Let’s take a look at{' '}
      <InternalLink href={yc(2)}>the quiz from the last episode</InternalLink>:
    </P>
    <ExpressionRunnerWrapper>
      <ExpressionRunner
        expressionContainer={episode2Expression2}
        showPriorities={false}
        showControls={false}
        variableSize={'lg'}
      />
    </ExpressionRunnerWrapper>
    <P>
      <Strong>Answer:</Strong> the above bento box represents:
    </P>
    <Ul size="lg">
      <UlLi>
        <Emoji size="lg">🍽</Emoji> Dishes → <Emoji size="lg">🥗</Emoji>
      </UlLi>
      <UlLi>
        <Emoji size="lg">😋</Emoji> Eating → <Emoji size="lg">🥗</Emoji>
      </UlLi>
      <UlLi>
        <Emoji size="lg">👨‍🍳</Emoji> Preparing → <Emoji size="lg">🥩</Emoji>
      </UlLi>
    </Ul>
    <P>Here’s the annotated version:</P>
    <ExpressionRunnerWrapper>
      <ExpressionRunner
        expressionContainer={episode2Expression2}
        showPriorities={false}
        showControls={false}
        variableSize={'lg'}
        initializeInstructions={[
          {
            type: 'stepForwardUntilPreviouslyChangedExpressionState',
            state: 'readyToBetaReduce'
          }
        ]}
      />
    </ExpressionRunnerWrapper>
    <H3>What will happen in the next step?</H3>
    <P>
      In the above scenario, after you eat salad <Emoji>🥗</Emoji>, the chef
      brings steak <Emoji>🥩</Emoji>. So in the next step, the dishes will look
      like this:
    </P>
    <Ul size="lg">
      <UlLi>
        <Emoji size="lg">🍽</Emoji> Dishes → <Emoji size="lg">🥩</Emoji>
      </UlLi>
    </Ul>
    <P>
      In terms of the <Content name="yc/BentoBox" />, it will look like this.
    </P>
    <ExpressionRunnerWrapper>
      <ExpressionRunner
        expressionContainer={episode2Expression2}
        showPriorities={false}
        showControls={false}
        variableSize={'lg'}
        initializeInstructions={[
          {
            type: 'stepForwardUntilPreviouslyChangedExpressionState',
            state: 'justBetaReduced'
          },
          {
            type: 'stepForwardMultiple',
            count: 1
          }
        ]}
      />
    </ExpressionRunnerWrapper>
    <H3>The Next and Previous Buttons</H3>
    <P>To see this interactively, I’ve added the next and previous buttons.</P>
    <Ol>
      <OlLi>
        <Em>
          Try pressing <Strong>Next</Strong> <Emoji>⏩</Emoji> several times
          until you see <Strong>Done</Strong> <Emoji>✅</Emoji>.
        </Em>
      </OlLi>
      <OlLi>
        Then try pressing <Emoji>⏪</Emoji> <Strong>Previous</Strong> a few
        times.
      </OlLi>
    </Ol>
    <ExpressionRunnerWrapper>
      <ExpressionRunner
        expressionContainer={episode2Expression2}
        showPriorities={false}
        showControls={true}
        variableSize={'lg'}
        expressionContainerManagerOptions={{
          skipReadyToBetaReduce: true,
          skipJustBetaReduced: true,
          skipDefault: true
        }}
      />
    </ExpressionRunnerWrapper>
    <P>Try this one too!</P>
    <ExpressionRunnerWrapper>
      <ExpressionRunner
        expressionContainer={episode2Expression1}
        showPriorities={false}
        showControls={true}
        variableSize={'lg'}
        expressionContainerManagerOptions={{
          skipReadyToBetaReduce: true,
          skipJustBetaReduced: true,
          skipDefault: true
        }}
      />
    </ExpressionRunnerWrapper>
    <P>Hope you get the idea!</P>
    <EmojiSeparator emojis={['⏪', '🤗', '⏩']} />
    <H3>Too easy?</H3>
    <P>We’ll do something harder on the next episode.</P>
  </>
)
