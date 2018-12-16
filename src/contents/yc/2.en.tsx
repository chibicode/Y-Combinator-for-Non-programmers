import React from 'react'
import {
  Em,
  H3,
  Ol,
  OlLi,
  P,
  Strong,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EpisodeInfo from 'src/components/EpisodeInfo'
import { episode2 } from 'src/components/Yc/AllExpressionRunners'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import InlineBackground from 'src/components/Yc/InlineBackground'
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
        readingTime={6}
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
      <YcNextLessonButton nextEpisodeNumber={3} />
    </>
  )
}
