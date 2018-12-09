import { css } from 'emotion'
import React from 'react'
import {
  Blockquote,
  Em,
  ExternalLink,
  H3,
  P,
  Strong,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode2 } from 'src/components/Yc/AllExpressionRunners'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import TopLeftBadge from 'src/components/Yc/TopLeftBadge'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'

export default () => {
  let i = 0
  return (
    <>
      <P>
        First, we’ll talk about <Strong>Bento Boxes</Strong>.
      </P>
      <EmojiSeparator emojis={['🍱', '🤔', '🍱']} />
      <P>
        <Strong>Bento boxes</Strong> <Emoji>🍱</Emoji> are{' '}
        <Em>traditional Japanese lunch boxes</Em>. Here’s what{' '}
        <ExternalLink href="https://simple.wikipedia.org/wiki/Bento">
          Wikipedia (Simple English)
        </ExternalLink>{' '}
        says:
      </P>
      <Blockquote>
        <P>
          <Strong>Bento [box]</Strong> is a meal common in Japanese cuisine,
          made to take away from home to be eaten somewhere else. … People often
          take bento for a picnic.
        </P>
      </Blockquote>
      <P>
        And just like the bento box emoji,{' '}
        <Em>a bento box has multiple cells, each with a food item</Em>.
      </P>
      <P
        className={css`
          text-align: center;
        `}
      >
        <Emoji size="huge">🍱</Emoji>
      </P>
      <H3>Bento Box Puzzles</H3>
      <P>
        In this tutorial, we’re going to play with{' '}
        <Em>
          bento box puzzles <Emoji>🍱</Emoji>
        </Em>
        . Here’s what it looks like:
      </P>
      {episode2[i++]()}
      <P>
        Just like real bento boxes <Emoji>🍱</Emoji>, each cell has a food item.
        The top item is sandwich <Emoji size="mdlg">🥪</Emoji> and the bottom
        two items are sushi <Emoji size="mdlg">🍣</Emoji>.
      </P>
      <H3>Labels</H3>
      <P>
        Each food item has a label.{' '}
        <Em>
          The <Strong>top</Strong> item is labeled as{' '}
          <BottomRightBadge inline bottomRightBadgeType="callArg" /> (
          <Strong>T</Strong>
          op)
        </Em>
        .
      </P>
      {episode2[i++]()}
      <P>
        <Em>
          The <Strong>bottom left</Strong> item is labeled as{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcArg" /> (
          <Strong>L</Strong>
          eft)
        </Em>
        .
      </P>
      {episode2[i++]()}
      <P>
        Finally,{' '}
        <Em>
          the <Strong>bottom right</Strong> item is labeled as{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcBound" /> (
          <Strong>R</Strong>
          ight)
        </Em>
        .
      </P>
      {episode2[i++]()}
      <H3>Quiz: Labels</H3>
      <P>Let’s do a quiz to check your understanding.</P>
      <P>
        <Strong>Question:</Strong>{' '}
        <Em>
          What do the labels look like for the following {h('ycBentoBox')}?
        </Em>
      </P>
      <H3>
        Check for matches in{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcArg" /> and{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcBound" />
      </H3>
      <P>
        <Em>
          If there are same items in{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcArg" /> and{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcBound" />, we call
          it a <Strong>match</Strong>, and we show{' '}
          <TopLeftBadge inline topLeftBadgeType="match" /> next to the matching{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcBound" /> item.
        </Em>
      </P>
      {episode2[i++]()}
      <P>
        In the above case, there’s sushi <Emoji size="mdlg">🍣</Emoji> on both{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcArg" /> and{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcBound" />, so it’s a
        match. We show <TopLeftBadge inline topLeftBadgeType="match" /> next to{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcBound" />.
      </P>
      <H3>
        Matched items become the same as{' '}
        <BottomRightBadge inline bottomRightBadgeType="callArg" />
      </H3>
      <P>
        <Em>
          Next, every matching <TopLeftBadge inline topLeftBadgeType="match" />{' '}
          item in <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
          <Strong>becomes</Strong> the same as items labeled as{' '}
          <BottomRightBadge inline bottomRightBadgeType="callArg" />. We show{' '}
          <TopLeftBadge inline topLeftBadgeType="betaReduced" /> next to it.
        </Em>
      </P>
      {episode2[i++]()}
      <P>
        In the above case, the matched{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcBound" /> becomes the
        sandwich <Emoji size="mdlg">🥪</Emoji> (which is labeled as{' '}
        <BottomRightBadge inline bottomRightBadgeType="callArg" />
        ).
      </P>
      <P>Let’s do a quiz to check if you understood this!</P>
      <EmojiSeparator emojis={['❓', '🤔', '❓']} />
      <H3>Quiz</H3>
      <P>What scenario does the this {h('ycBentoBox')} represent?</P>
      {episode2[i++]()}
      <Ul size="lg">
        <UlLi>
          <Emoji size="lg">🍽</Emoji> Dishes → <Emoji size="lg">❓</Emoji>
        </UlLi>
        <UlLi>
          <Emoji size="lg">😋</Emoji> Eating → <Emoji size="lg">❓</Emoji>
        </UlLi>
        <UlLi>
          <Emoji size="lg">👨‍🍳</Emoji> Preparing → <Emoji size="lg">❓</Emoji>
        </UlLi>
      </Ul>
      <P>Go to the next page to find out the answer!</P>
      <YcNextLessonButton nextEpisodeNumber={2} />
    </>
  )
}
