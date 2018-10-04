import React from 'react'
import Content from 'src/components/Content'
import {
  // Blockquote,
  // Em,
  // ExternalLink,
  H3,
  InternalLink,
  P,
  Strong,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
// import EmojiSeparator from 'src/components/EmojiSeparator'
// import NextLessonButton from 'src/components/NextLessonButton'
import ExpressionRunner from 'src/components/Yc/ExpressionRunner'
import ExpressionRunnerWrapper from 'src/components/Yc/ExpressionRunnerWrapper'
import { yc } from 'src/lib/pathHelpers'
import {
  // episode2Expression1,
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
    <H3>What will happen in the next step?</H3>
    <P>
      In the above scenario, after you eat salad <Emoji>🥗</Emoji>, the chef
      brings steak <Emoji>🥩</Emoji>. So in the next step, it’ll become:
    </P>
    <Ul size="lg">
      <UlLi>
        <Emoji size="lg">🍽</Emoji> Dishes → <Emoji size="lg">🥩</Emoji>
      </UlLi>
    </Ul>
    <P>
      In terms of the <Content name="yc/BentoBox" />, it will look like this:
    </P>
  </>
)
