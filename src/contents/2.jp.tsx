import React from 'react'
import {
  Em,
  H3,
  P,
  Strong,
  Ul,
  UlLi,
  Ol,
  OlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import SideNoteSection from 'src/components/SideNoteSection'
import {
  episode1,
  episode1Quiz,
  episode2,
  episode2Quiz
} from 'src/components/Yc/AllExpressionRunners'
import BasicTrueFalseQuiz from 'src/components/Yc/BasicTrueFalseQuiz'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import TopRightBadge from 'src/components/Yc/TopRightBadge'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
// import EmojiWithText from 'src/components/EmojiWithText'
// import YesNoButtons from 'src/components/YesNoButtons'
// import AER from 'src/components/Yc/AllExpressionRunners'
import EpisodeCardList from 'src/components/EpisodeCardList'
import H from 'src/components/H'
import h from 'src/lib/h'

const Step1 = () => (
  <>
    それぞれの料理に <BottomRightBadge inline bottomRightBadgeType="callArg" />
    、
    <BottomRightBadge inline bottomRightBadgeType="funcArg" />、
    <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
    のバッジをつける
  </>
)

const Step2 = () => (
  <>
    <BottomRightBadge inline bottomRightBadgeType="funcArg" /> と{' '}
    <BottomRightBadge inline bottomRightBadgeType="funcBound" /> にマッチ{' '}
    <TopRightBadge inline topRightBadgeType="match" /> する料理があるかチェック
  </>
)

const Step3 = () => (
  <>
    マッチ <TopRightBadge inline topRightBadgeType="match" /> した{' '}
    <BottomRightBadge inline bottomRightBadgeType="funcBound" /> が{' '}
    <BottomRightBadge inline bottomRightBadgeType="callArg" /> と同じ料理になる
  </>
)

const Step4 = () => (
  <>
    <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
    <BottomRightBadge inline bottomRightBadgeType="funcArg" /> が消える
  </>
)

const FourSteps = () => (
  <>
    <P>
      {h('ycBentoBox')}には
      <Strong>4つのステップ</Strong>
      があります:
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

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: '弁当箱の法則',
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              さっそく前回紹介した
              <H args={{ name: 'bentoBox' }} />
              の法則を紹介していきましょう。
            </P>
            <P>?</P>
          </>
        )
      }
    ]}
  />
)

export const old = () => {
  let i = 0
  let j = 0
  return (
    <>
      <FourSteps />
      <P>
        複雑に聞こえるかもしれませんが、慣れたら簡単です。早速やってみましょう！
      </P>
      <EmojiSeparator emojis={['🔢', '🍱', '🔢']} />
      <H3>
        ステップ1: <Step1 />
      </H3>
      <P>
        まず、
        {h('ycBentoBox')}
        の中にある料理にバッジをつけるところからはじめましょう。
      </P>
      <P>
        <Em>
          <Strong>上段</Strong>
          にあるサンドイッチ <Emoji size="mdlg">🥪</Emoji> には、
          <BottomRightBadge inline bottomRightBadgeType="callArg" />
          のバッジをつけます。
        </Em>
      </P>
      {episode1[i++]()}
      <P>
        <Em>
          <Strong>下段の左</Strong>
          にある寿司 <Emoji size="mdlg">🍣</Emoji> には、
          <BottomRightBadge inline bottomRightBadgeType="funcArg" />
          のバッジをつけます。
        </Em>
      </P>
      {episode1[i++]()}
      <P>
        最後に、
        <Em>
          <Strong>下段の右</Strong>
          にある寿司 <Emoji size="mdlg">🍣</Emoji> には、
          <BottomRightBadge inline bottomRightBadgeType="funcBound" />
          のバッジをつけます。
        </Em>
      </P>
      {episode1[i++]()}
      <SideNoteSection
        heading={'復習問題: ステップ1'}
        color="pink"
        noPaddingBottom
      >
        <P>
          <Strong>質問:</Strong>{' '}
          <Em>
            次の
            {h('ycBentoBox')}
            にある料理にはそれぞれどんなバッジがつくでしょう？
          </Em>
        </P>
        {episode1[i++]()}
        <P>
          <Strong>答え:</Strong>{' '}
          <Em>
            チキン <Emoji size="mdlg">🍗</Emoji> には{' '}
            <BottomRightBadge inline bottomRightBadgeType="callArg" />
            、ハンバーガー <Emoji size="mdlg">🍔</Emoji> には{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcArg" /> と
            <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
            のバッジがつきます。
          </Em>
        </P>
        {episode1[i++]()}
      </SideNoteSection>
      <H3>
        ステップ2: <Step2 />
      </H3>
      <P>
        次に、
        <Em>
          <BottomRightBadge inline bottomRightBadgeType="funcArg" /> と{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
          両方にある料理を探します。
        </Em>
      </P>
      {episode1[i++]()}
      <P>
        <Em>
          もし、ある料理が{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcArg" /> と{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
          の両方にある場合、それを「
          <Strong>マッチ</Strong>{' '}
          <TopRightBadge inline topRightBadgeType="match" />
          」と呼びます。
        </Em>
      </P>
      {episode1[i++]()}
      <P>
        上の
        {h('ycBentoBox')}
        の場合、寿司 <Emoji size="mdlg">🍣</Emoji> が
        <BottomRightBadge inline bottomRightBadgeType="funcArg" /> と
        <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
        それぞれにあるので、 「
        <Strong>
          マッチ <TopRightBadge inline topRightBadgeType="match" />
        </Strong>
        」ということになります。
      </P>
      <SideNoteSection
        heading={'復習問題: ステップ2'}
        color="pink"
        noPaddingBottom
      >
        <P>
          <Strong>質問:</Strong>{' '}
          <Em>下の{h('ycBentoBox')}にはマッチした料理があるでしょうか？</Em>
        </P>
        {episode1[i++]()}
        <P>
          <Strong>答え:</Strong>{' '}
          <Em>
            あります。ハンバーガー <Emoji size="mdlg">🍔</Emoji> が
            <BottomRightBadge inline bottomRightBadgeType="funcArg" /> と
            <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
            それぞれにあるからです。
          </Em>
        </P>
        {episode1[i++]()}
      </SideNoteSection>
      <H3>
        ステップ3: <Step3 />
      </H3>
      <P>
        次に、
        <Em>
          <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
          の料理と、さきほどマッチ{' '}
          <TopRightBadge inline topRightBadgeType="match" /> した{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
          の料理に注目します。
        </Em>
      </P>
      {episode1[i++]()}
      <P>
        <Strong>このステップでは、</Strong>{' '}
        <Em>
          マッチ <TopRightBadge inline topRightBadgeType="match" /> した{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
          の料理が、
          <BottomRightBadge inline bottomRightBadgeType="callArg" /> と
          <Strong>同じ料理</Strong>になります。
        </Em>
      </P>
      {episode1[i++]()}
      <P>
        このとき、 <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
        の料理に <TopRightBadge inline topRightBadgeType="betaReduced" />{' '}
        というバッジが表示されます。
      </P>
      <SideNoteSection
        heading={'復習問題: ステップ3'}
        color="pink"
        noPaddingBottom
      >
        <P>
          <Strong>質問:</Strong>{' '}
          <Em>下の{h('ycBentoBox')}は、次のステップでどうなるでしょう？</Em>
        </P>
        {episode1[i++]()}
        <P>
          <Strong>答え:</Strong>{' '}
          <Em>
            マッチ <TopRightBadge inline topRightBadgeType="match" /> した{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
            のハンバーガー <Emoji size="mdlg">🍔</Emoji> が、チキン{' '}
            <Emoji size="mdlg">🍗</Emoji> になります{' '}
            <TopRightBadge inline topRightBadgeType="betaReduced" />。
          </Em>
        </P>
        {episode1[i++]()}
      </SideNoteSection>
      <H3>
        ステップ4 (これが最後): <Step4 />
      </H3>
      <P>
        これが最後のステップです！ステップ3のあと、{h('ycBentoBox')}
        はこうなっています:
      </P>
      {episode1[i++]()}
      <P>
        このステップでは、
        <Em>
          <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
          が消えます。
        </Em>
      </P>
      {episode1[i++]()}
      <P>
        つまり、残るのはサンドイッチ <Emoji size="mdlg">🥪</Emoji>{' '}
        だけになります。
      </P>
      {episode1[i++]()}
      <P>
        <Strong>ちなみに:</Strong> このステップで、{' '}
        <Em>
          <BottomRightBadge inline bottomRightBadgeType="funcBound" /> のバッジ
        </Em>
        も外れます。
      </P>
      <P>
        <Strong>
          これで終了 <Emoji>🏁</Emoji> です！
        </Strong>
        以上が、{h('ycBentoBox')}の4つのステップでした。
      </P>
      <SideNoteSection
        heading={'復習問題: ステップ4'}
        color="pink"
        noPaddingBottom
      >
        <P>
          <Strong>質問:</Strong>{' '}
          <Em>下の{h('ycBentoBox')}は、次のステップでどうなるでしょう？</Em>
        </P>
        {episode1[i++]()}
        <P>
          <Strong>答え:</Strong>{' '}
          <Em>
            <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
            が消えるので…
          </Em>
        </P>
        {episode1[i++]()}
        <P>
          最終的にはチキン <Emoji size="mdlg">🍗</Emoji> だけになります。
        </P>
        {episode1[i++]()}
      </SideNoteSection>
      <P>
        全部のステップを説明し終えたところで、きちんと覚えるために
        <Em>もう一度最初からやってみましょう。</Em>
      </P>
      <H3>もう一度おさらい</H3>
      <P>
        実際に手を動かして見れるように、{' '}
        <Em>
          {h('ycBentoBox')}に「{h('ycPrevious')}」と「{h('ycNext')}」
          ボタンを追加しました。
        </Em>
      </P>
      <EmojiSeparator emojis={['⬅️', '🍱', '➡️']} />
      <P>
        次の{h('ycBentoBox')}の下にある、「{h('ycNext')}」ボタンを「
        {h('ycDone')}」 になるまで何度も押してみてください。
      </P>
      {episode1[i++]()}
      <P>
        もう一つの{h('ycBentoBox')}でもやってみましょう。こちらでも、
        {h('ycTryUntilDone')}.
      </P>
      {episode1[i++]()}
      <P>ここまでは理解できたでしょうか？</P>
      <SideNoteSection heading={h('ycWhatWeHaveLearned')} color="yellow">
        <FourSteps />
      </SideNoteSection>
      <H3>二択クイズに挑戦</H3>
      <P>
        ページの最後には、
        <Strong>ちょっと難しい二択クイズ</Strong>を用意しています。
        <Em>わからなくてもいいので、チャレンジしてみてください。</Em>
      </P>
      <BasicTrueFalseQuiz
        prefix={<Strong>クイズはこちら。</Strong>}
        quizzes={episode1Quiz}
      />
      {h('ycTryGuessing')}
      <YcNextLessonButton nextEpisodeNumber={2} />
      {h('ycQuizReview', 1)}
      <SideNoteSection color="pink" noPaddingBottom>
        <BasicTrueFalseQuiz quizzes={episode1Quiz} />
      </SideNoteSection>
      <P>
        <Strong>答えはこちら。</Strong>
        {h('ycTryUntilDone')}.
      </P>
      {episode2[j++]()}
      <P>
        というわけで、二択問題の答えは<Em>{h('ycTrue')}</Em>でした。
      </P>
      {episode2[j++]()}
      <H3>手短に説明</H3>
      <P>
        どうしてこうなるか、手短に説明します。まず、バッジは下のようになります。上段では、ハンバーガー{' '}
        <Emoji size="mdlg">🍔</Emoji> のバッジが{' '}
        <BottomRightBadge inline bottomRightBadgeType="callArg" />
        です。
      </P>
      {episode2[j++]()}
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
      {episode2[j++]()}
      <P>
        <BottomRightBadge inline bottomRightBadgeType="funcBound" /> の寿司{' '}
        <Emoji size="mdlg">🍣</Emoji> はマッチ{' '}
        <TopRightBadge inline topRightBadgeType="match" />{' '}
        しましたが、サンドイッチ <Emoji size="mdlg">🥪</Emoji>{' '}
        はマッチしませんでした。{' '}
        <TopRightBadge inline topRightBadgeType="unmatch" />
      </P>
      {episode2[j++]()}
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
      {episode2[j++]()}
      <P>どうだったでしょう。正解できましたか？</P>
      <EmojiSeparator emojis={['❌', '🤗', '✅']} />
      <H3>
        今回新登場の「
        <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
        」(真ん中の料理)
      </H3>
      <P>今回は、次の{h('ycBentoBox')}をやってみます:</P>
      {episode2[j++]()}
      <P>
        以前のとは違い、
        <Em>
          下段の<Strong>真ん中に</Strong>料理があります
        </Em>{' '}
        (サンドイッチ <Emoji size="mdlg">🥪</Emoji>):
      </P>
      {episode2[j++]()}
      <P>
        これのバッジは何になるでしょう？{' '}
        <Em>{h('ycNext')} を何度か押してみてください:</Em>
      </P>
      {episode2[j++]()}
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
      {episode2[j++]()}
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
      {episode2[j++]()}
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
