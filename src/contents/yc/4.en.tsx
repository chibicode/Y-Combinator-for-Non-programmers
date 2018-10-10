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
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import ExpressionRunner from 'src/components/Yc/ExpressionRunner'
import h from 'src/lib/h'
import { yc } from 'src/lib/pathHelpers'
import {
  episode3Expression1,
  episode4Expression1,
  episode4Expression2
} from 'src/lib/yc/lessonExpressions'

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
    <ExpressionRunner
      expressionContainer={episode3Expression1}
      showPriorities={false}
      showControls
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'callArgJustHighlighted'
        }
      ]}
    />
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
      chef <Emoji>👨‍🍳</Emoji> is preparing will not replace the sandwich{' '}
      <Emoji>🥪</Emoji>. Therefore just the sandwich <Emoji>🥪</Emoji> remains:
    </P>
    <Ul size="lg">
      <UlLi>
        <Emoji size="lg">🍽</Emoji> Dishes → <Emoji size="lg">🥪</Emoji>
      </UlLi>
    </Ul>
    <P>
      <Em>
        <Strong>Important:</Strong> The salad <Emoji>🥗</Emoji> the chef{' '}
        <Emoji>👨‍🍳</Emoji> prepared is wasted, and it <Strong>disappears</Strong>
        .
      </Em>
    </P>
    <H3>Three cells on the bottom</H3>
    <P>
      Next, we’ll talk about the case when there are more than two cells on the
      bottom. Check out this one:
    </P>
    <ExpressionRunner
      expressionContainer={episode4Expression1}
      showPriorities={false}
      showControls={false}
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'readyToHighlight'
        }
      ]}
    />
    <P>
      Here’s how to interpret this. The <Strong>bottom rightmost</Strong> cell
      represents all available dishes <Emoji>🍽</Emoji>.
    </P>
    <ExpressionRunner
      expressionContainer={episode4Expression1}
      showPriorities={false}
      showControls={false}
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'funcBodyJustHighlighted'
        }
      ]}
    />
    <P>
      The <Strong>bottom leftmost</Strong> cell represents what you’re eating
      next <Emoji>😋</Emoji>.
    </P>
    <ExpressionRunner
      expressionContainer={episode4Expression1}
      showPriorities={false}
      showControls={false}
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'funcArgJustHighlighted'
        }
      ]}
    />
    <P>
      And the <Strong>top cell</Strong> represents what the chef is preparing.
      This is the same as before.
    </P>
    <ExpressionRunner
      expressionContainer={episode4Expression1}
      showPriorities={false}
      showControls={false}
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'callArgJustHighlighted'
        }
      ]}
    />
    <P>
      <Strong>Important:</Strong> In this case,{' '}
      <Em>
        the sandwich <Emoji>🥪</Emoji> doesn’t belong to any of the three
        categories. So when you step forward, the cell with the sandwich{' '}
        <Emoji>🥪</Emoji> will <Strong>remain the same</Strong>.
      </Em>
      .
    </P>
    <P>
      <Em>Try clicking {h('ycNext')}</Em> to see what happens on the next step.
    </P>
    <ExpressionRunner
      expressionContainer={episode4Expression1}
      showPriorities={false}
      showControls
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'callArgJustHighlighted'
        }
      ]}
    />
    <P>
      <Strong>Here’s what happened:</Strong>
    </P>
    <Ul>
      <UlLi>
        <Emoji>🥪</Emoji> The sandwich remained the same.
      </UlLi>
      <UlLi>
        <Emoji>😋</Emoji> You ate sushi <Emoji>🍣</Emoji>.
      </UlLi>
      <UlLi>
        <Emoji>🍽</Emoji> So the sushi <Emoji>🍣</Emoji> on the bottom right was
        replaced by the salad <Emoji>🥗</Emoji> the chef <Emoji>👨‍🍳</Emoji>{' '}
        prepared.
      </UlLi>
      <UlLi>
        <Em>
          As a result, the bottom left cell (<Emoji>😋</Emoji> →{' '}
          <Emoji>🍣</Emoji>) and the top cell (<Emoji>👨‍🍳</Emoji> →{' '}
          <Emoji>🥗</Emoji>) <Strong>disappeared</Strong>
        </Em>
        .
      </UlLi>
    </Ul>
    <EmojiSeparator emojis={['🤯', '🤯', '🤯']} />
    <P>It’s getting difficult quickly, right? But you’re doing great so far!</P>
    <H3>Quiz: Four cells on the bottom</H3>
    <P>
      How about <Em>four cells on the bottom</Em>? What do you think will happen
      on the next step?
    </P>
    <ExpressionRunner
      containerSize="xs"
      expressionContainer={episode4Expression2}
      showPriorities={false}
      showControls={false}
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'readyToHighlight'
        }
      ]}
    />
    <P>
      <Strong>Here’s the hint:</Strong>
    </P>
    <ExpressionRunner
      containerSize="xs"
      expressionContainer={episode4Expression2}
      showPriorities={false}
      showControls={false}
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'callArgJustHighlighted'
        }
      ]}
    />
    <YcNextLessonButton nextEpisodeNumber={5} />
  </>
)
