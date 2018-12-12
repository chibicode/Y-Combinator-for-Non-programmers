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
  Strong
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EpisodeInfo from 'src/components/EpisodeInfo'
import SideNoteSection from 'src/components/SideNoteSection'
import { episode1 } from 'src/components/Yc/AllExpressionRunners'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import TopRightBadge from 'src/components/Yc/TopRightBadge'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'

const Step1 = () => (
  <>
    Label each item using{' '}
    <BottomRightBadge inline bottomRightBadgeType="callArg" />,{' '}
    <BottomRightBadge inline bottomRightBadgeType="funcArg" /> and{' '}
    <BottomRightBadge inline bottomRightBadgeType="funcBound" />
  </>
)

const Step2 = () => (
  <>
    Check for matches in{' '}
    <BottomRightBadge inline bottomRightBadgeType="funcArg" /> and{' '}
    <BottomRightBadge inline bottomRightBadgeType="funcBound" />
  </>
)

const Step3 = () => (
  <>
    Matched <TopRightBadge inline topRightBadgeType="match" />{' '}
    <BottomRightBadge inline bottomRightBadgeType="funcBound" /> become the same
    as <BottomRightBadge inline bottomRightBadgeType="callArg" />
  </>
)

const Step4 = () => (
  <>
    Remove <BottomRightBadge inline bottomRightBadgeType="callArg" /> and{' '}
    <BottomRightBadge inline bottomRightBadgeType="funcArg" />
  </>
)

const FourSteps = () => (
  <>
    <P>
      There are <Strong>4 main steps</Strong> in bento box puzzles:
    </P>
    <Ol>
      <OlLi>
        <Em>
          <Step1 />
        </Em>
      </OlLi>
      <OlLi>
        <Em>
          <Step2 />
        </Em>
      </OlLi>
      <OlLi>
        <Em>
          <Step3 />
        </Em>
      </OlLi>
      <OlLi>
        <Em>
          <Step4 />
        </Em>
      </OlLi>
    </Ol>
  </>
)

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
      <EpisodeInfo
        readingTime={6}
        difficultyNum={3}
        difficultyText="It will be
        challenging because everything is new to you."
        funNum={1}
        funText="We’ll cover basics, so
        it might be a bit boring, but it’ll get much better later!"
      />
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
      {episode1[i++]()}
      <P>
        Just like real bento boxes <Emoji>🍱</Emoji>,{' '}
        <Em>each cell has a food item</Em>. The top item is sandwich{' '}
        <Emoji size="mdlg">🥪</Emoji> and the bottom two items are sushi{' '}
        <Emoji size="mdlg">🍣</Emoji>.
      </P>
      <P>Here’s another {h('ycBentoBox')}:</P>
      {episode1[i++]()}
      <P>
        The top item is chicken <Emoji size="mdlg">🍗</Emoji> and the bottom two
        items are hamburgers <Emoji size="mdlg">🍔</Emoji>.
      </P>
      <P>
        Next, let’s talk about the basic rules of the bento box puzzles{' '}
        <Emoji>🍱</Emoji>.
      </P>
      <H3>4 Steps</H3>
      <FourSteps />
      <P>
        They look complicated, but they’re actually very simple after you get
        used to it. Let’s take a look!
      </P>
      <EmojiSeparator emojis={['🔢', '🍱', '🔢']} />
      <H3>
        Step 1: <Step1 />
      </H3>
      <P>
        Each food item has a label.{' '}
        <Em>
          The <Strong>top</Strong> sandwich <Emoji size="mdlg">🥪</Emoji>. is
          labeled as <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
          (<Strong>T</Strong>
          op).
        </Em>
      </P>
      {episode1[i++]()}
      <P>
        <Em>
          The <Strong>bottom left</Strong> sushi <Emoji size="mdlg">🍣</Emoji>.
          is labeled as{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcArg" /> (
          <Strong>L</Strong>
          eft).
        </Em>
      </P>
      {episode1[i++]()}
      <P>
        Finally,{' '}
        <Em>
          the <Strong>bottom right</Strong> sushi <Emoji size="mdlg">🍣</Emoji>.
          is labeled as{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcBound" /> (
          <Strong>R</Strong>
          ight).
        </Em>
      </P>
      {episode1[i++]()}
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
        {episode1[i++]()}
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
        {episode1[i++]()}
      </SideNoteSection>
      <H3>
        Step 2: <Step2 />
      </H3>
      <P>
        Next, we’ll look for{' '}
        <Em>
          items that appear in both{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcArg" /> and{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcBound" />.
        </Em>
      </P>
      {episode1[i++]()}
      <P>
        <Em>
          If there are the same items in{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcArg" /> and{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcBound" />, we call
          it a <Strong>match</Strong>{' '}
          <TopRightBadge inline topRightBadgeType="match" />.
        </Em>
      </P>
      {episode1[i++]()}
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
        {episode1[i++]()}
        <P>
          <Strong>Answer:</Strong>{' '}
          <Em>
            Yes. The burgers <Emoji size="mdlg">🍔</Emoji> match{' '}
            <TopRightBadge inline topRightBadgeType="match" />.
          </Em>
        </P>
        {episode1[i++]()}
      </SideNoteSection>
      <H3>
        Step 3: <Step3 />
      </H3>
      <P>
        Next, we’ll look at{' '}
        <Em>
          <BottomRightBadge inline bottomRightBadgeType="callArg" /> and the
          matching <TopRightBadge inline topRightBadgeType="match" /> item in{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcBound" />.
        </Em>
      </P>
      {episode1[i++]()}
      <P>
        <Strong>In this step</Strong>,{' '}
        <Em>
          the matching <TopRightBadge inline topRightBadgeType="match" /> item
          in <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
          <Strong>becomes the same</Strong> as{' '}
          <BottomRightBadge inline bottomRightBadgeType="callArg" />.
        </Em>{' '}
      </P>
      {episode1[i++]()}
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
        {episode1[i++]()}
        <P>
          <Strong>Answer:</Strong>{' '}
          <Em>
            <TopRightBadge inline topRightBadgeType="match" /> The matching
            burger <Emoji size="mdlg">🍔</Emoji> in{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcBound" /> becomes
            chicken <Emoji size="mdlg">🍗</Emoji>{' '}
            <TopRightBadge inline topRightBadgeType="betaReduced" />.
          </Em>
        </P>
        {episode1[i++]()}
      </SideNoteSection>
      <H3>
        Step 4 (Last Step): <Step4 />
      </H3>
      <P>This is the last step! We’ll continue from the end of step 3:</P>
      {episode1[i++]()}
      <P>
        In this step,{' '}
        <Em>
          we remove <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
          and <BottomRightBadge inline bottomRightBadgeType="funcArg" />:
        </Em>
      </P>
      {episode1[i++]()}
      <P>
        So in the end, the {h('ycBentoBox')} has just the sandwich{' '}
        <Emoji size="mdlg">🥪</Emoji>.{' '}
      </P>
      {episode1[i++]()}
      <P>
        <Strong>Note:</Strong> In this step, we{' '}
        <Em>
          remove the{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcBound" /> label
        </Em>{' '}
        as well.
      </P>
      <P>That’s it! We’ve covered all four steps!</P>
      <SideNoteSection
        heading={'Review Quiz: Step 4'}
        color="pink"
        noPaddingBottom
      >
        <P>
          <Strong>Question:</Strong>{' '}
          <Em>What happens next on the following {h('ycBentoBox')}?</Em>
        </P>
        {episode1[i++]()}
        <P>
          <Strong>Answer:</Strong>{' '}
          <Em>
            <BottomRightBadge inline bottomRightBadgeType="callArg" /> and{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcArg" /> are
            removed…
          </Em>
        </P>
        {episode1[i++]()}
        <P>
          So in the end, it becomes just chicken <Emoji size="mdlg">🍗</Emoji>:
        </P>
        {episode1[i++]()}
      </SideNoteSection>
      <P>
        Now that we’ve covered all the steps,{' '}
        <Em>let’s review the steps from the beginning.</Em>
      </P>
      <H3>Putting all steps together</H3>
      <P>
        To do this interactively,{' '}
        <Em>
          I’ve added the {h('ycPrevious')} and {h('ycNext')} buttons to the{' '}
          {h('ycBentoBox')}.
        </Em>
      </P>
      <EmojiSeparator emojis={['⬅️', '🍱', '➡️']} />
      <P>
        In the {h('ycBentoBox')} below, {h('ycTryUntilDone', false)}.
      </P>
      {episode1[i++]()}
      <P>
        How about this {h('ycBentoBox')}? {h('ycTryUntilDone')}.
      </P>
      {episode1[i++]()}
      <P>Hope everything makes sense!</P>
      <SideNoteSection heading={'What we’ve learned so far'} color="yellow">
        <FourSteps />
      </SideNoteSection>
      <H3>Challenge Quiz</H3>
      <P>
        At the end of each episode, we give you a{' '}
        <Strong>challenge quiz</Strong>.{' '}
        <Em>
          You should try, but they’re hard, so don’t worry if you have no idea.
        </Em>
      </P>
      <P>
        <Strong>Here’s the quiz:</Strong> What do you think will happen to the
        following {h('ycBentoBox')} after taking all the steps?
      </P>
      {episode1[i++]()}
      <P>
        <Strong>Hint:</Strong> Here are the labels.{' '}
        <Em>
          Notice that <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
          and <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
          <Strong>do not match</Strong>.
        </Em>{' '}
        What do you think happens then? Try guessing!
      </P>
      {episode1[i++]()}
      <P>Click on the button below to see the answer!</P>
      <YcNextLessonButton nextEpisodeNumber={2} />
    </>
  )
}
