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
import { Quiz as Quiz1 } from 'src/contents/yc/1.en'
import h from 'src/lib/h'

export default () => {
  let i = 0
  return (
    <>
      <EpisodeInfo
        episodeNumber={2}
        introText={
          <>In this level, we’ll cover some more {h('ycBentoBox')} basics.</>
        }
      />
      {h('ycQuizReview', 1)}
      <SideNoteSection color="pink" noPaddingBottom>
        <Quiz1 />
      </SideNoteSection>
      <P>
        <Strong>Here’s the answer.</Strong> {h('ycTryUntilDone')}.
      </P>
      {episode2[i++]()}
      <P>
        So the answer for the {h('ycTrueOrFalse')} question was:{' '}
        <Em>{h('ycTrue')}</Em>:
      </P>
      {episode2[i++]()}
      <H3>Quick Explanation</H3>
      <P>
        Let’s quickly go over what happened. First, these are the labels. The
        burger <Emoji size="mdlg">🍔</Emoji> on the top row is{' '}
        <BottomRightBadge inline bottomRightBadgeType="callArg" />.
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
      <P>
        After that, <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
        and <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
        disappear, like before:
      </P>
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
      <P>Let’s try a quiz!</P>
      <H3>{h('ycTrueOrFalse')} Quiz</H3>
      <P>
        <Strong>Question:</Strong>{' '}
        <Em>
          Suppose we take all the steps on the following {h('ycBentoBox')}:
        </Em>
      </P>
      {episode2[i++]()}
      <P>{h('ycTrueOrFalse')}: Will it eventually become this?</P>
      {episode2[i++]()}
      {h('ycTryGuessing')}
      <YcNextLessonButton nextEpisodeNumber={3} />
    </>
  )
}
