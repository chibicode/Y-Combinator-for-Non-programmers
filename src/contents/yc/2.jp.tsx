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
import { Quiz as Quiz1 } from 'src/contents/yc/1.jp'
import h from 'src/lib/h'

export default () => {
  let i = 0
  return (
    <>
      <EpisodeInfo
        episodeNumber={2}
        introText={<>今回も{h('ycBentoBox')}の基本操作を説明していきます。</>}
      />
      {h('ycQuizReview', 1)}
      <SideNoteSection color="pink" noPaddingBottom>
        <Quiz1 />
      </SideNoteSection>
      <P>
        <Strong>答えはこちら。</Strong>
        {h('ycTryUntilDone')}.
      </P>
      {episode2[i++]()}
      <P>
        というわけで、二択問題の答えは<Em>{h('ycTrue')}</Em>でした。
      </P>
      {episode2[i++]()}
      <H3>手短に説明</H3>
      <P>
        どうしてこうなるか、手短に説明します。まず、印は下のようになります。上段では、ハンバーガー{' '}
        <Emoji size="mdlg">🍔</Emoji> の印が{' '}
        <BottomRightBadge inline bottomRightBadgeType="callArg" />
        です。
      </P>
      {episode2[i++]()}
      <P>
        下段だと、左の寿司 <Emoji size="mdlg">🍣</Emoji> の印が{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
        で、右にある寿司 <Emoji size="mdlg">🍣</Emoji> とサンドイッチ{' '}
        <Emoji size="mdlg">🥪</Emoji> の印は両方とも{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcBound" /> です。
      </P>
      <P>
        <Strong>次は、</Strong>マッチするかどうか{' '}
        <TopRightBadge inline topRightBadgeType="match" /> 見てみましょう。
      </P>
      {episode2[i++]()}
      <P>
        <BottomRightBadge inline bottomRightBadgeType="funcBound" /> の寿司{' '}
        <Emoji size="mdlg">🍣</Emoji> はマッチ{' '}
        <TopRightBadge inline topRightBadgeType="match" />{' '}
        しましたが、サンドイッチ <Emoji size="mdlg">🥪</Emoji>{' '}
        はマッチしませんでした。{' '}
        <TopRightBadge inline topRightBadgeType="unmatch" />
      </P>
      {episode2[i++]()}
      <P>
        <BottomRightBadge inline bottomRightBadgeType="funcBound" /> の寿司{' '}
        <Emoji size="mdlg">🍣</Emoji> は{' '}
        <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
        と同じハンバーグ <Emoji size="mdlg">🍔</Emoji>{' '}
        に変わりますが、マッチしなかった
        <Strong>
          サンドイッチ <Emoji size="mdlg">🥪</Emoji> は変わりません。
        </Strong>
      </P>
      <P>
        そのあとは前回と同じく、{' '}
        <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcArg" /> が消えます:
      </P>
      {episode2[i++]()}
      <P>どうだったでしょう。正解できましたか？</P>
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
