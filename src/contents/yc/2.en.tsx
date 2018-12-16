import React from 'react'
import { Em, H3, P, Strong, Ul, UlLi } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EpisodeInfo from 'src/components/EpisodeInfo'
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
      <EpisodeInfo
        episodeNumber={2}
        progressText={'You’re halfway done with beginner levels after this!'}
        introText={
          <>
            In this level, we’ll talk about <Em>three more scenarios</Em> for
            the {h('ycBentoBox', true)}.
          </>
        }
        readingTime={5}
        funNum={1}
        funText="It’s not too exciting yet. But please keep reading!"
      />
      {h('ycQuizReview', 1)}
      <P>
        (<Strong>The question was:</Strong> What will happen to the following{' '}
        {h('ycBentoBox')} after taking all the steps?)
      </P>
      {episode2[i++]()}
      <P>Let’s try and see what happens. {h('ycTryUntilDone')}.</P>
      {episode2[i++]()}
      <P>
        <Strong>So the answer was:</Strong>
      </P>
      {episode2[i++]()}
      <H3>Explanation</H3>
      <P>
        Let’s quickly go over what happened. First, these are the labels. The
        burger <Emoji size="mdlg">🍔</Emoji> on the top row is{' '}
        <BottomRightBadge inline bottomRightBadgeType="callArg" />.{' '}
      </P>
      {episode2[i++]()}
      <P>
        On the bottom row, sushi <Emoji size="mdlg">🍣</Emoji> on the left is{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcArg" />. Then there
        are <Em>two items</Em> on the right (sushi <Emoji size="mdlg">🍣</Emoji>{' '}
        and sandwich <Emoji size="mdlg">🥪</Emoji>
        ), both are labeled as{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcBound" />.
      </P>
      <P>
        <Strong>Next:</Strong> Let’s look at matches{' '}
        <TopRightBadge inline topRightBadgeType="match" />.
      </P>
      {episode2[i++]()}
      <P>
        On <BottomRightBadge inline bottomRightBadgeType="funcBound" />, sushi{' '}
        <Emoji size="mdlg">🍣</Emoji> matches{' '}
        <TopRightBadge inline topRightBadgeType="match" />, but sandwich{' '}
        <Emoji size="mdlg">🥪</Emoji> does not match{' '}
        <TopRightBadge inline topRightBadgeType="unmatch" />.
      </P>
      {episode2[i++]()}
      <P>
        Therefore, on{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcBound" />, sushi{' '}
        <Emoji size="mdlg">🍣</Emoji> becomes burger{' '}
        <Emoji size="mdlg">🍔</Emoji> (which was in{' '}
        <BottomRightBadge inline bottomRightBadgeType="callArg" />
        ),{' '}
        <Strong>
          but sandwich <Emoji size="mdlg">🥪</Emoji> does not change.
        </Strong>
      </P>
      <P>After that, it’s the same as before:</P>
      {episode2[i++]()}
      <P>Hope everything made sense!</P>
      <EmojiSeparator emojis={['❌', '🤗', '✅']} />
      <H3>
        New in this episode: The Middle{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcUnbound" /> Item
      </H3>
      <P>Next, we’ll take a look at this {h('ycBentoBox')}:</P>
      {episode2[i++]()}
      <P>
        Unlike the ones we’ve seen before,{' '}
        <Em>
          there’s an item in the <Strong>middle section</Strong> of the bottom
          row
        </Em>{' '}
        (sandwich <Emoji size="mdlg">🥪</Emoji>):
      </P>
      {episode2[i++]()}
      <P>
        Let’s see what label this has.{' '}
        <Em>Press {h('ycNext')} several times below:</Em>
      </P>
      {episode2[i++]()}
      <P>
        As you can see, the sandwich <Emoji size="mdlg">🥪</Emoji> in the middle
        is labeled as{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />.
      </P>
      <P>
        Let’s see what happens next. <Em>Press {h('ycNext')} once below:</Em>
      </P>
      {episode2[i++]()}
      <P>
        As you just saw, you can <Strong>ignore</Strong>{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcUnbound" /> when
        we’re checking for matches{' '}
        <TopRightBadge inline topRightBadgeType="match" />.
      </P>
      <P>Let’s keep going: {h('ycTryUntilDone')}:</P>
      {episode2[i++]()}
      <P>So, here’s what we learned:</P>
      <SideNoteSection heading={'What we’ve learned so far'} color="yellow">
        <Ul>
          <UlLi>
            Middle items in the bottom row are labeled as{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />.
          </UlLi>
          <UlLi>
            You can ignore{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" /> when
            we’re checking for matches{' '}
            <TopRightBadge inline topRightBadgeType="match" />.
          </UlLi>
        </Ul>
      </SideNoteSection>
      <P>Let’s try a challenge quiz!</P>
      <H3>
        <Emoji>🔥</Emoji> Challenge Quiz <Emoji>🔥</Emoji>
      </H3>
      <P>
        <Strong>Question:</Strong>{' '}
        <Em>
          What will happen to the following {h('ycBentoBox')} after taking all
          the steps?
        </Em>
      </P>
      {episode2[i++]()}
      <P>
        <Strong>Hint:</Strong> The middle two items (sandwich{' '}
        <Emoji size="mdlg">🥪</Emoji> and burger <Emoji size="mdlg">🍔</Emoji>)
        are <Strong>both</Strong>{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />.
      </P>
      <YcNextLessonButton nextEpisodeNumber={3} />
    </>
  )
}
