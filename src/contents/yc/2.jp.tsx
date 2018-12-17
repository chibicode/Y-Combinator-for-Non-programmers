import React from 'react'
import { Em, H3, P, Strong, Ul, UlLi } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EpisodeInfo from 'src/components/EpisodeInfo'
import SideNoteSection from 'src/components/SideNoteSection'
import {
  episode1Quiz,
  episode2,
  episode2Quiz
} from 'src/components/Yc/AllExpressionRunners'
import BasicTrueFalseQuiz from 'src/components/Yc/BasicTrueFalseQuiz'
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
        introText={<>今回も{h('ycBentoBox')}の基本操作を説明していきます。</>}
      />
      {h('ycQuizReview', 1)}
      <SideNoteSection color="pink" noPaddingBottom>
        <BasicTrueFalseQuiz quizzes={episode1Quiz} />
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
        どうしてこうなるか、手短に説明します。まず、バッジは下のようになります。上段では、ハンバーガー{' '}
        <Emoji size="mdlg">🍔</Emoji> のバッジが{' '}
        <BottomRightBadge inline bottomRightBadgeType="callArg" />
        です。
      </P>
      {episode2[i++]()}
      <P>
        下段だと、左の寿司 <Emoji size="mdlg">🍣</Emoji> のバッジが{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
        で、右にある寿司 <Emoji size="mdlg">🍣</Emoji> とサンドイッチ{' '}
        <Emoji size="mdlg">🥪</Emoji> のバッジは両方とも{' '}
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
        今回新登場の「
        <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
        」(真ん中の料理)
      </H3>
      <P>今回は、次の{h('ycBentoBox')}をやってみます:</P>
      {episode2[i++]()}
      <P>
        以前のとは違い、
        <Em>
          下段の<Strong>真ん中に</Strong>料理があります
        </Em>{' '}
        (サンドイッチ <Emoji size="mdlg">🥪</Emoji>):
      </P>
      {episode2[i++]()}
      <P>
        これのバッジは何になるでしょう？{' '}
        <Em>{h('ycNext')} を何度か押してみてください:</Em>
      </P>
      {episode2[i++]()}
      <P>
        というわけで、真ん中にあるサンドイッチ <Emoji size="mdlg">🥪</Emoji>{' '}
        のバッジは{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
        のようです。
      </P>
      <P>
        このままいくとどうなるでしょう。
        <Em>もう一度 {h('ycNext')} を押してみてください:</Em>
      </P>
      {episode2[i++]()}
      <P>
        <Em>
          見ての通り、マッチ <TopRightBadge inline topRightBadgeType="match" />{' '}
          を探す際に、{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
          の料理は
          <Strong>無視してかまいません</Strong>。
        </Em>
      </P>
      <P>では、このまま最後までやってみましょう。{h('ycTryUntilDone')}。</P>
      {episode2[i++]()}
      <P>というわけで、まとめるとこうなります。</P>
      <SideNoteSection heading={h('ycWhatWeHaveLearned')} color="yellow">
        <Ul>
          <UlLi>
            下段の真ん中にある料理には{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
            のバッジをつける。
          </UlLi>
          <UlLi>
            マッチ <TopRightBadge inline topRightBadgeType="match" />{' '}
            を探す際に、
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
            の料理は
            <Strong>無視してかまわない</Strong>。
          </UlLi>
        </Ul>
      </SideNoteSection>
      <P>それではここでクイズです！</P>
      <H3>二択クイズ</H3>
      <BasicTrueFalseQuiz quizzes={episode2Quiz} />
      {h('ycTryGuessing')}
      <YcNextLessonButton nextEpisodeNumber={3} />
    </>
  )
}
