import React from 'react'
import { Em, H3, Hr, Ol, OlLi, P, Strong } from 'src/components/ContentTags'
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
    それぞれの食べ物に
    <BottomRightBadge inline bottomRightBadgeType="callArg" />、
    <BottomRightBadge inline bottomRightBadgeType="funcArg" />、
    <BottomRightBadge inline bottomRightBadgeType="funcBound" />
    の印をつける
  </>
)

const Step2 = () => (
  <>
    <BottomRightBadge inline bottomRightBadgeType="funcArg" />と
    <BottomRightBadge inline bottomRightBadgeType="funcBound" />
    がマッチするかチェック
  </>
)

const Step3 = () => (
  <>
    マッチした
    <TopRightBadge inline topRightBadgeType="match" />{' '}
    <BottomRightBadge inline bottomRightBadgeType="funcBound" />が
    <BottomRightBadge inline bottomRightBadgeType="callArg" />
    と同じ食べ物になる
  </>
)

const Step4 = () => (
  <>
    <BottomRightBadge inline bottomRightBadgeType="callArg" />と
    <BottomRightBadge inline bottomRightBadgeType="funcArg" />
    が消える
  </>
)

const FourSteps = () => (
  <>
    <P>
      {h('ycBentoBox')}
      のパズルには
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

export default () => {
  let i = 0
  return (
    <>
      <P>
        「あなたの知らないYコンビネーター」の
        <Strong>初級その1</Strong>
        へようこそ！ <Emoji>👋</Emoji>
      </P>
      <P>
        今回は、
        <Em>これから何度も行うパズルの基本ルール</Em>
        を紹介します。
      </P>
      <EpisodeInfo
        readingTime={6}
        difficultyNum={3}
        difficultyText="はじめてのことが多いので、少々難しいかもしれません。"
        funNum={1}
        funText="基本ルールを紹介するので、少々つまらないかも。でも、後から面白くなるので、めげずに読み進めてください！"
      />
      <Hr />
      <H3>不思議な弁当箱</H3>
      <P>
        まずはじめに、
        <Strong>{h('ycBentoBox')}</Strong>
        について解説します。
      </P>
      <EmojiSeparator emojis={['🍱', '🤔', '🍱']} />
      <P>
        下の図が、
        <Strong>{h('ycBentoBox')}</Strong>
        です。実際の弁当箱のように、四角の中に何個かマスがあり、それぞれのマスの中に食べ物が入っています。
      </P>
      {episode1[i++]()}
      <P>
        上のマスにはサンドイッチ <Emoji size="mdlg">🥪</Emoji>{' '}
        があり、下の左右のマスには寿司 <Emoji size="mdlg">🍣</Emoji>{' '}
        が入っています。
      </P>
      <P>
        もうひとつ、
        {h('ycBentoBox')}
        の例を紹介しましょう:
      </P>
      {episode1[i++]()}
      <P>
        上のマスにはチキン <Emoji size="mdlg">🍗</Emoji>
        、下の左右のマスにはハンバーガー <Emoji size="mdlg">🍔</Emoji>{' '}
        が入っています。
      </P>
      <P>
        これらの
        {h('ycBentoBox')}
        は実はパズルになっています。そのルールを紹介しましょう。
      </P>
      <H3>4つのステップ</H3>
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
        の中にある食べ物に印をつけるところからはじめましょう。
      </P>
      <P>
        <Em>
          <Strong>上段</Strong>
          にあるサンドイッチ <Emoji size="mdlg">🥪</Emoji> には、
          <BottomRightBadge inline bottomRightBadgeType="callArg" />
          の印をつけます。
        </Em>
      </P>
      {episode1[i++]()}
      <P>
        <Em>
          <Strong>下段の左</Strong>
          にある寿司 <Emoji size="mdlg">🍣</Emoji> には、
          <BottomRightBadge inline bottomRightBadgeType="funcArg" />
          の印をつけます。
        </Em>
      </P>
      {episode1[i++]()}
      <P>
        最後に、
        <Em>
          <Strong>下段の右</Strong>
          にある寿司 <Emoji size="mdlg">🍣</Emoji> には、
          <BottomRightBadge inline bottomRightBadgeType="funcBound" />
          の印をつけます。
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
            にある食べ物にはそれぞれどんな印がつくでしょう？
          </Em>
        </P>
        {episode1[i++]()}
        <P>
          <Strong>答え:</Strong>{' '}
          <Em>
            チキン <Emoji size="mdlg">🍗</Emoji> には{' '}
            <BottomRightBadge inline bottomRightBadgeType="callArg" />
            、バーガー <Emoji size="mdlg">🍔</Emoji> には{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcArg" /> と
            <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
            の印がつきます。
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
          両方にある食べ物を探します。
        </Em>
      </P>
      {episode1[i++]()}
      <P>
        <Em>
          <BottomRightBadge inline bottomRightBadgeType="funcArg" /> と{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
          それぞれに同じ食べ物があると、「
          <Strong>マッチ</Strong>{' '}
          <TopRightBadge inline topRightBadgeType="match" />
          」です！
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
          <Em>Does the following {h('ycBentoBox')} have a match?</Em>
        </P>
        {episode1[i++]()}
        <P>
          <Strong>答え:</Strong>{' '}
          <Em>
            Yes. The burgers <Emoji size="mdlg">🍔</Emoji> match{' '}
            <TopRightBadge inline topRightBadgeType="match" />.
          </Em>
        </P>
        {episode1[i++]()}
      </SideNoteSection>
      <H3>
        ステップ3: <Step3 />
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
        <Em>
          The matching <TopRightBadge inline topRightBadgeType="match" /> item
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
        heading={'復習問題: ステップ3'}
        color="pink"
        noPaddingBottom
      >
        <P>
          <Strong>質問:</Strong>{' '}
          <Em>What happens next on the following {h('ycBentoBox')}?</Em>
        </P>
        {episode1[i++]()}
        <P>
          <Strong>答え:</Strong>{' '}
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
        ステップ4 (これが最後): <Step4 />
      </H3>
      <P>This is the last step! We’ll continue from the end of step 3:</P>
      {episode1[i++]()}
      <P>
        In this last step,{' '}
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
        <Strong>Note:</Strong> we{' '}
        <Em>
          remove the{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcBound" /> label
        </Em>{' '}
        as well.
      </P>
      <P>That’s it! We’ve covered all four steps!</P>
      <SideNoteSection
        heading={'復習問題: ステップ4'}
        color="pink"
        noPaddingBottom
      >
        <P>
          <Strong>質問:</Strong>{' '}
          <Em>What happens next on the following {h('ycBentoBox')}?</Em>
        </P>
        {episode1[i++]()}
        <P>
          <Strong>答え:</Strong>{' '}
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
      <H3>Putting all steps together</H3>
      <P>
        Let’s review the steps from the beginning. In the {h('ycBentoBox')}{' '}
        below, {h('ycTryUntilDone', false)}.
      </P>
      {episode1[i++]()}
      <P>How about this one? {h('ycTryUntilDone')}.</P>
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
