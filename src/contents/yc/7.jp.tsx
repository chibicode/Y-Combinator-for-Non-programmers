import React from 'react'
import { Em, H3, P, Strong, Ul, UlLi } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode7 } from 'src/components/Yc/AllExpressionRunners'
import EmojiBadge from 'src/components/Yc/EmojiBadge'
import InlineBackground from 'src/components/Yc/InlineBackground'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'

export default () => {
  let i = 0
  return (
    <>
      {h('ycQuizReview', 6)}
      <P>{h('ycTryUntilDone')}:</P>
      {episode7[i++]()}
      <P>
        最終的には以下のようになったので、答えは
        <Strong>Yes</Strong>
        でした。
      </P>
      {episode7[i++]()}
      <P>
        <Strong>ちょっと難しかった部分:</Strong>{' '}
        下のステップはちょっと難しかったかもしれません。(
        <Em>{h('ycNext')} を押してみてください</Em>
        ):
      </P>
      {episode7[i++]()}
      <P>
        ご覧の通り、
        <Em>
          <EmojiBadge badgeType="callArg" inline />
          がついている料理がすべて <InlineBackground bgPattern="star" />{' '}
          の部分にコピペされた
        </Em>
        のがわかります。
      </P>
      <P>
        それでは、いよいよ次が最後の基本ルールです。
        <Strong>
          小悪魔 <Emoji>😈</Emoji>
        </Strong>{' '}
        のルールを紹介します。
      </P>
      <EmojiSeparator emojis={['😈', '😈', '😈']} />
      <H3>小悪魔</H3>
      <P>
        次の
        {h('ycBentoBox')}
        をご覧ください。{' '}
        <Em>
          <Strong>
            サンドイッチ <Emoji size="mdlg">🥪</Emoji>
          </Strong>{' '}
          が、
          <EmojiBadge badgeType="callArg" inline /> と{' '}
          <EmojiBadge badgeType="funcUnbound" inline /> と{' '}
          <EmojiBadge badgeType="funcBound" inline />
          にあることに注目です。
        </Em>
        .
      </P>
      {episode7[i++]()}
      <P>
        <Em>
          同じ料理が
          <EmojiBadge badgeType="callArg" inline /> と{' '}
          <EmojiBadge badgeType="funcUnbound" inline /> と{' '}
          <EmojiBadge badgeType="funcBound" inline />
          にあると、
          <Strong>
            小悪魔 <Emoji>😈</Emoji>
          </Strong>{' '}
          が登場します。
        </Em>
      </P>
      {episode7[i++]()}
      <P>
        <Strong>
          小悪魔は <Emoji>😈</Emoji>
        </Strong>{' '}
        こんなイタズラをしちゃいます:
      </P>
      <Ul>
        <UlLi>
          <Em>
            <EmojiBadge badgeType="funcUnbound" inline /> と{' '}
            <EmojiBadge badgeType="funcBound" inline /> にある全てのサンドイッチ{' '}
            <Emoji size="mdlg">🥪</Emoji> をランダムに
            <Strong>新しい</Strong>
            料理に変えてしまう。
          </Em>
        </UlLi>
        <UlLi>
          <EmojiBadge badgeType="callArg" inline /> にあるサンドイッチ{' '}
          <Emoji size="mdlg">🥪</Emoji> はそのまま。
        </UlLi>
      </Ul>
      {episode7[i++]()}
      <P>
        ここではサンドイッチ <Emoji size="mdlg">🥪</Emoji>{' '}
        がステーキになりました <Emoji size="mdlg">🥩</Emoji> 。
      </P>
      <P>
        あとはいつも通り、
        {h('ycTryUntilDone')}:
      </P>
      {episode7[i++]()}
      <P>以上です！</P>
      <EmojiSeparator emojis={['😈', '😈', '😈']} />
      <H3>もうひとつの例</H3>
      <P>
        小悪魔 <Emoji>😈</Emoji> が登場するもうひとつの例はこちら。
        {h('ycTryUntilDone')}:
      </P>
      {episode7[i++]()}
      <H3>それではここで…</H3>
      <P>良いお知らせがあります！</P>
      <Ul>
        <UlLi>
          <Strong>
            <Em>
              小悪魔ルール <Emoji>😈</Emoji> を暗記する必要はありません。
            </Em>
          </Strong>{' '}
          「こういうルールもあるんだ」と思っていただければ大丈夫です。
        </UlLi>
        <UlLi>
          <Strong>{h('ycBentoBox')} のルール説明はこれで最後です。</Strong>{' '}
          次からは面白い問題を解いていきます。
        </UlLi>
        <UlLi>
          <Strong>今回はクイズはなしです。</Strong>
          そのまま次のページに進んでください！
        </UlLi>
      </Ul>
      <YcNextLessonButton nextEpisodeNumber={8} primaryTextType="nextPage" />
    </>
  )
}
