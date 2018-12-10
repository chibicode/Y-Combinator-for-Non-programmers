import { css } from 'emotion'
import React from 'react'
import {
  Blockquote,
  Em,
  ExternalLink,
  H3,
  Ol,
  OlLi,
  P,
  Strong
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import SideNoteSection from 'src/components/SideNoteSection'
import { episode2 } from 'src/components/Yc/AllExpressionRunners'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import TopRightBadge from 'src/components/Yc/TopRightBadge'
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
        Just like real bento boxes <Emoji>🍱</Emoji>,{' '}
        <Em>each cell has a food item</Em>. The top item is sandwich{' '}
        <Emoji size="mdlg">🥪</Emoji> and the bottom two items are sushi{' '}
        <Emoji size="mdlg">🍣</Emoji>.
      </P>
      <H3>4 Steps</H3>
      <P>
        There are <Strong>4 main steps</Strong> in bento box puzzles:
      </P>
      <Ol>
        <OlLi>
          <Em>
            Label each item using{' '}
            <BottomRightBadge inline bottomRightBadgeType="callArg" />,{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcArg" /> and{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcBound" />
          </Em>
        </OlLi>
        <OlLi>
          <Em>
            Check for matches in{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcArg" /> and{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcBound" />
          </Em>
        </OlLi>
        <OlLi>
          <Em>
            Matched <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
            become the same as{' '}
            <BottomRightBadge inline bottomRightBadgeType="callArg" />
          </Em>
        </OlLi>
        <OlLi>
          <Em>
            Remove <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
            and <BottomRightBadge inline bottomRightBadgeType="funcArg" />
          </Em>
        </OlLi>
      </Ol>
      <P>We’ll cover each step.</P>
      <H3>
        Step 1: Label each item using{' '}
        <BottomRightBadge inline bottomRightBadgeType="callArg" />,{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcArg" /> and{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcBound" />
      </H3>
      <P>
        Each food item has a label.{' '}
        <Em>
          The <Strong>top</Strong> item is labeled as{' '}
          <BottomRightBadge inline bottomRightBadgeType="callArg" /> (
          <Strong>T</Strong>
          op).
        </Em>
      </P>
      {episode2[i++]()}
      <P>
        <Em>
          The <Strong>bottom left</Strong> item is labeled as{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcArg" /> (
          <Strong>L</Strong>
          eft).
        </Em>
      </P>
      {episode2[i++]()}
      <P>
        Finally,{' '}
        <Em>
          the <Strong>bottom right</Strong> item is labeled as{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcBound" /> (
          <Strong>R</Strong>
          ight).
        </Em>
      </P>
      {episode2[i++]()}
      <SideNoteSection
        heading={'Review Quiz: Step 1'}
        color="pink"
        noPaddingBottom
      >
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
        Step 2: Check for matches in{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcArg" /> and{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcBound" />
      </H3>
      <P>
        Next, we’ll look for{' '}
        <Em>
          items that appear in both{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcArg" /> and{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcBound" />.
        </Em>
      </P>
      {episode2[i++]()}
      <P>
        <Em>
          If there are the same items in{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcArg" /> and{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcBound" />, we call
          it a <Strong>match</Strong>{' '}
          <TopRightBadge inline topRightBadgeType="match" />.
        </Em>
      </P>
      {episode2[i++]()}
      <P>
        In the above case, there’s sushi <Emoji size="mdlg">🍣</Emoji> in both{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcArg" /> and{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcBound" />, so it’s a
        match <TopRightBadge inline topRightBadgeType="match" />.
      </P>
      <SideNoteSection
        heading={'Review Quiz: Step 2'}
        color="pink"
        noPaddingBottom
      >
        <P>
          <Strong>Question:</Strong>{' '}
          <Em>Does the following {h('ycBentoBox')} have a match?</Em>
        </P>
        {episode2[i++]()}
        <P>
          <Strong>Answer:</Strong>{' '}
          <Em>
            Yes. The burgers <Emoji size="mdlg">🍔</Emoji> match{' '}
            <TopRightBadge inline topRightBadgeType="match" />.
          </Em>
        </P>
        {episode2[i++]()}
      </SideNoteSection>
      <H3>
        Step 3: Matched{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcBound" /> become the
        same as <BottomRightBadge inline bottomRightBadgeType="callArg" />
      </H3>
      <P>
        Next, we’ll look at{' '}
        <Em>
          <BottomRightBadge inline bottomRightBadgeType="callArg" /> and the
          matching <TopRightBadge inline topRightBadgeType="match" /> items in{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcBound" />.
        </Em>
      </P>
      {episode2[i++]()}
      <P>
        <Em>
          Every matching <TopRightBadge inline topRightBadgeType="match" /> item
          in <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
          <Strong>turns into</Strong> the items in{' '}
          <BottomRightBadge inline bottomRightBadgeType="callArg" />. We show{' '}
          <TopRightBadge inline topRightBadgeType="betaReduced" /> next to{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcBound" />.
        </Em>
      </P>
      {episode2[i++]()}
      <P>
        In the above case, the matched sushi <Emoji size="mdlg">🍣</Emoji> in{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcBound" /> becomes the
        sandwich <Emoji size="mdlg">🥪</Emoji> (which is in{' '}
        <BottomRightBadge inline bottomRightBadgeType="callArg" />
        ).
      </P>
      <SideNoteSection
        heading={'Review Quiz: Step 3'}
        color="pink"
        noPaddingBottom
      >
        <P>
          <Strong>Question:</Strong>{' '}
          <Em>What happens next on the following {h('ycBentoBox')}?</Em>
        </P>
        {episode2[i++]()}
        <P>
          <Strong>Answer:</Strong>{' '}
          <Em>
            <TopRightBadge inline topRightBadgeType="match" /> The matching
            burger <Emoji size="mdlg">🍔</Emoji> becomes chicken{' '}
            <Emoji size="mdlg">🍗</Emoji>{' '}
            <TopRightBadge inline topRightBadgeType="betaReduced" />
          </Em>
        </P>
        {episode2[i++]()}
      </SideNoteSection>
      <H3>
        Step 4: Remove{' '}
        <BottomRightBadge inline bottomRightBadgeType="callArg" /> and{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcArg" />
      </H3>
      <P>
        Finally,{' '}
        <Em>
          we remove <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
          and <BottomRightBadge inline bottomRightBadgeType="funcArg" />:
        </Em>
      </P>
      {episode2[i++]()}
      <P>
        So in the end, the {h('ycBentoBox')} becomes this.{' '}
        <Strong>Note:</Strong>{' '}
        <Em>
          we’ve removed the{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcBound" /> label.
        </Em>
      </P>
      {episode2[i++]()}
      <P>That’s all the steps!</P>
      <YcNextLessonButton nextEpisodeNumber={2} />
    </>
  )
}
