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
import SideNoteSection from 'src/components/SideNoteSection'
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
      <SideNoteSection heading={'Review Quiz: Labels'} color="pink">
        <P>
          <Strong>Question:</Strong>{' '}
          <Em>
            What are the correct labels for the following {h('ycBentoBox')}?
          </Em>
        </P>
        {episode2[i++]()}
        <P>
          <Strong>Answer:</Strong>{' '}
          <Em>
            The chicken <Emoji size="mdlg">🍗</Emoji> is{' '}
            <BottomRightBadge inline bottomRightBadgeType="callArg" /> and the
            burgers <Emoji size="mdlg">🍔</Emoji> are{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcArg" /> and{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcBound" />.
          </Em>
        </P>
        {episode2[i++]()}
      </SideNoteSection>
      <H3>
        Check for matches in{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcArg" /> and{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcBound" />
      </H3>
      <P>
        Next, we’ll look for items that appear in both{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcArg" /> and{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcBound" />.
      </P>
      {episode2[i++]()}
      <P>
        <Em>
          If there are the same items in{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcArg" /> and{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcBound" />, we call
          it a <Strong>match</Strong>, and we show{' '}
          <TopLeftBadge inline topLeftBadgeType="match" /> next to{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcBound" />.
        </Em>
      </P>
      {episode2[i++]()}
      <P>
        In the above case, there’s sushi <Emoji size="mdlg">🍣</Emoji> in both{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcArg" /> and{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcBound" />, so it’s a
        match <TopLeftBadge inline topLeftBadgeType="match" />.
      </P>
      <SideNoteSection heading={'Review Quiz: Matches'} color="pink">
        <P>
          <Strong>Question:</Strong>{' '}
          <Em>Does the following {h('ycBentoBox')} have a match?</Em>
        </P>
        {episode2[i++]()}
        <P>
          <Strong>Answer:</Strong>{' '}
          <Em>
            Yes. The burgers <Emoji size="mdlg">🍔</Emoji> match{' '}
            <TopLeftBadge inline topLeftBadgeType="match" />.
          </Em>
        </P>
        {episode2[i++]()}
      </SideNoteSection>
      <H3>
        Matched items become the same as{' '}
        <BottomRightBadge inline bottomRightBadgeType="callArg" />
      </H3>
      <P>
        <Em>
          Next, every matching <TopLeftBadge inline topLeftBadgeType="match" />{' '}
          item in <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
          <Strong>becomes</Strong> the same as the items in{' '}
          <BottomRightBadge inline bottomRightBadgeType="callArg" />. We show{' '}
          <TopLeftBadge inline topLeftBadgeType="betaReduced" /> next to it.
        </Em>
      </P>
      {episode2[i++]()}
      <P>
        In the above case, the matched{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcBound" /> becomes the
        sandwich <Emoji size="mdlg">🥪</Emoji> (which is in{' '}
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
