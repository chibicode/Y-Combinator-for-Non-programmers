import { css } from 'emotion'
import React from 'react'
import {
  Blockquote,
  Em,
  ExternalLink,
  H3,
  Hr,
  Ol,
  OlLi,
  P,
  Strong,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import SideNoteSection from 'src/components/SideNoteSection'
import StarRating from 'src/components/StarRating'
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
        Welcome to <Strong>Beginner Level 1</Strong> of “Y Combinator for
        Non-Programmers”! <Emoji>👋</Emoji>
      </P>
      <P>
        In this level, we’ll cover{' '}
        <Em>the basics of the puzzles we’ll be solving.</Em>
      </P>
      <Ul>
        <UlLi>
          <Strong>Reading Time:</Strong> <Em>5 minutes</Em>
        </UlLi>
        <UlLi>
          <Strong>Difficulty:</Strong> <StarRating num={2} /> — It will be
          challenging because everything is new to you.
        </UlLi>
        <UlLi>
          <Strong>Fun:</Strong> <StarRating num={1} /> — We’ll cover basics, so
          it might be a bit boring, but it’ll get much better later!
        </UlLi>
      </Ul>
      <Hr />
      <H3>Let’s Get Started!</H3>
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
      <P>
        They look complicated, but they’re actually very simple after you get
        used to it. Let’s take a look!
      </P>
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
          matching <TopRightBadge inline topRightBadgeType="match" /> item in{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcBound" />.
        </Em>
      </P>
      {episode2[i++]()}
      <P>
        <Em>
          The matching <TopRightBadge inline topRightBadgeType="match" /> item
          in <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
          <Strong>turns into</Strong> what’s in{' '}
          <BottomRightBadge inline bottomRightBadgeType="callArg" />.
        </Em>{' '}
      </P>
      {episode2[i++]()}
      <P>
        We show <TopRightBadge inline topRightBadgeType="betaReduced" /> next to{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcBound" /> when this
        happens.
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
            <TopRightBadge inline topRightBadgeType="betaReduced" />.
          </Em>
        </P>
        {episode2[i++]()}
      </SideNoteSection>
      <H3>
        Step 4 (Last Step): Remove{' '}
        <BottomRightBadge inline bottomRightBadgeType="callArg" /> and{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcArg" />
      </H3>
      <P>This is the last step! We’ll continue from the end of step 3:</P>
      {episode2[i++]()}
      <P>
        In this last step,{' '}
        <Em>
          we remove <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
          and <BottomRightBadge inline bottomRightBadgeType="funcArg" />:
        </Em>
      </P>
      {episode2[i++]()}
      <P>So in the end, the {h('ycBentoBox')} becomes this. </P>
      {episode2[i++]()}
      <P>
        <Strong>Note:</Strong> we{' '}
        <Em>
          remove the{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcBound" /> label
        </Em>{' '}
        on this step as well.
      </P>
      <SideNoteSection
        heading={'Review Quiz: Step 4'}
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
            <BottomRightBadge inline bottomRightBadgeType="callArg" /> and{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcArg" /> are
            removed…
          </Em>
        </P>
        {episode2[i++]()}
        <P>
          So in the end, it becomes just chicken <Emoji size="mdlg">🍗</Emoji>:
        </P>
        {episode2[i++]()}
      </SideNoteSection>
      <H3>Putting All Steps Together</H3>
      <YcNextLessonButton nextEpisodeNumber={2} />
    </>
  )
}
