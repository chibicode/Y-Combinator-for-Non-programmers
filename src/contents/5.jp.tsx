import React from 'react'
import {
  Em,
  H3,
  P,
  Strong,
  Hr,
  Ol,
  OlLi,
  InlineHeader
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode6 } from 'src/components/Yc/AllExpressionRunners'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import InlinePrioritiesLabel from 'src/components/Yc/InlinePrioritiesLabel'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'
import H from 'src/components/H'
import EpisodeCardList from 'src/components/EpisodeCardList'
import AER from 'src/components/Yc/AllExpressionRunners'
import YesNoButtons from 'src/components/YesNoButtons'
import EmojiWithText from 'src/components/EmojiWithText'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>応用問題</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              今回が初級の最後です。
            </P>
            <EmojiSeparator emojis={['🎉', '🤗', '🎉']} />
            <P>
              中級に進む前に、
              <Strong>どういう順番でやるのか分かりにくい</Strong>
              <H args={{ name: 'bentoBox' }} />
              を3つ紹介します:
            </P>
            <Ol>
              <OlLi>
                <InlineHeader>第1問:</InlineHeader>{' '}
                <Strong>
                  <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
                  のツーペア
                </Strong>
              </OlLi>
              <OlLi>
                <InlineHeader>第2問:</InlineHeader>{' '}
                <Strong>
                  <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
                  ができない
                </Strong>
              </OlLi>
            </Ol>
            <P>さっそく見ていきましょう！</P>
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: (
          <>
            第1問: <InlinePrioritiesLabel>1</InlinePrioritiesLabel>のツーペア
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'lookAtThisBentoBox' }} />。
              <Strong>
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
                のペアがふたつありますね。
              </Strong>
            </P>
            {AER.laea}
            <P>
              <H args={{ name: 'whatHappensAtTheEndQuestion' }} />
            </P>
            {AER.cgpd}
            <YesNoButtons answer="yes" />
          </>
        )
      },
      {
        title: (
          <>
            正解は<Emoji>⭕️</Emoji>
          </>
        ),
        content: (
          <>
            <P>
              <Strong>
                正解は<Emoji>⭕️</Emoji>でした。
              </Strong>
              <H args={{ name: 'pressPlay' }} />
            </P>
            {AER.ijot}
            <P>詳しく解説しますね！</P>
          </>
        )
      },
      {
        title: (
          <>
            第1問の解説その1: いちばん左の
            <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
            のペアからはじめる
          </>
        ),
        content: (
          <>
            <P>
              <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
              のペアがふたつ以上ある場合は、
              <Strong>いちばん左のペアからはじめます。</Strong> (下の場合は
              <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>
              のペアから)
            </P>
            {AER.aezk}
          </>
        )
      },
      {
        title: (
          <>
            第1問の解説その2:{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcBound" />と
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
            はこうなる
          </>
        ),
        content: (
          <>
            <P>
              さらに、
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.ainx}
            <P>
              解説のために、
              <BottomRightBadge inline bottomRightBadgeType="callArg" /> →
              <BottomRightBadge inline bottomRightBadgeType="funcArg" /> →
              <BottomRightBadge inline bottomRightBadgeType="funcBound" /> →
              …と順番に表示しています。
            </P>
            <P>
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />
              になったのは
              <EmojiWithText letter="b" />
              と右側の
              <EmojiWithText letter="c" />
              でした。
              <Strong>
                このふたつは右端の枠に接してるので、
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                になるのです。
              </Strong>
            </P>
            <Hr />
            <P>
              そして、
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              になるのは真ん中の
              <EmojiWithText letter="c" />
              です。
            </P>
            {AER.ielw}
          </>
        )
      },
      {
        title: (
          <>
            第1問の解説その3: <H args={{ name: 'match' }} />と
            <H args={{ name: 'unmatch' }} />
          </>
        ),
        content: (
          <>
            <P>
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />
              にあるふたつの料理のうち、
              <BottomRightBadge inline bottomRightBadgeType="funcArg" />と
              <H args={{ name: 'match' }} />
              するのは
              <EmojiWithText letter="b" />
              だけです。
            </P>
            {AER.dtzu}
            <Hr />
            <P>
              というわけで、
              <BottomRightBadge inline bottomRightBadgeType="callArg" />
              にある
              <EmojiWithText letter="a" />
              が、
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />の
              <EmojiWithText letter="b" />
              のところに
              <H args={{ name: 'copy' }} />
              されます。
            </P>
            <P>
              <H args={{ name: 'pressNext' }} />
            </P>
            {AER.efyy}
            <P>
              残りは
              <H args={{ name: 'fastForward' }} />
              で見ていきましょう:
            </P>
            {AER.izgz}
            <P>
              というわけで、最後に残ったのは
              <EmojiWithText letter="a" />
              でした。
            </P>
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: (
          <>
            第2問: <InlinePrioritiesLabel>1</InlinePrioritiesLabel>ができない
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'lookAtThisBentoBox' }} />:
            </P>
            {AER.pqfs}
            <P>
              <H args={{ name: 'whatHappensAtTheEndQuestion' }} />
            </P>
            {AER.mbrh}
            <YesNoButtons answer="yes" />
          </>
        )
      },
      {
        title: (
          <>
            正解は<Emoji>⭕️</Emoji>
          </>
        ),
        content: (
          <>
            <P>
              <Strong>
                正解は<Emoji>⭕️</Emoji>でした。
              </Strong>
              <H args={{ name: 'pressPlay' }} />
            </P>
            {AER.wbru}
            <P>詳しく解説しますね！</P>
          </>
        )
      },
      {
        title: <></>,
        content: (
          <>
            <P>
              <InlinePrioritiesLabel>2</InlinePrioritiesLabel>を先にやるときは
              <InlinePrioritiesLabel>1</InlinePrioritiesLabel>の部分がすべて
              <BottomRightBadge bottomRightBadgeType="callArg" inline />
              になる
            </P>
          </>
        )
      },
      {
        title: <></>,
        content: (
          <>
            <P>まとめ…覚えなくても大丈夫!</P>
          </>
        )
      }
    ]}
  />
)

export const old = () => {
  let i = 0
  return (
    <>
      {h('ycQuizReview', 5)}
      <P>{h('ycTryUntilDone')}:</P>
      {episode6[i++]()}
      <P>
        というわけで、答えは
        <Strong>お寿司</Strong> <Emoji>🍣</Emoji> です。
      </P>
      <P>
        <Strong>お気づきかもしれませんが、</Strong>
        実行をスピーディーにするために、{' '}
        <BottomRightBadge bottomRightBadgeType="funcBound" inline />{' '}
        <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />{' '}
        <BottomRightBadge bottomRightBadgeType="funcArg" inline />{' '}
        <BottomRightBadge bottomRightBadgeType="callArg" inline />{' '}
        をすべて同時に表示しています。
      </P>
      <H3>続いてはこちら</H3>
      <P>
        今度はこの
        {h('ycBentoBox')}
        を見てみましょう:
      </P>
      {episode6[i++]()}
      <P>
        <Em>
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel> が4つもありますよね。
        </Em>{' '}
        どれから先にやればいいのでしょうか？
      </P>
      <P>
        <Strong>答え:</Strong>{' '}
        <Em>
          <Strong>いちばん左にある</Strong>{' '}
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
          のペアからはじめます。
        </Em>
      </P>
      <H3>いちばん左</H3>
      <P>
        <Em>{h('ycNext')} を押してみてください</Em>
        。いちばん左にあるふたつの{' '}
        <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>{' '}
        の部分からはじめるということが分かります。
      </P>
      {episode6[i++]()}
      <P>このまま最後まで進めてしまいましょう:</P>
      {episode6[i++]()}
      <H3>ここまでのまとめ</H3>
      <P>
        <InlinePrioritiesLabel>1</InlinePrioritiesLabel> が複数あるときは、
        <Em>
          <Strong>いちばん左にある</Strong>{' '}
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
          のペアからはじめること。
        </Em>
      </P>
      <EmojiSeparator emojis={['⬅️', '🤔', '⬅️']} />
      <H3>1のペアからはじめられない場合</H3>
      <P>
        <Strong>
          たまに、
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
          のペアからはじめられない場合があります。
        </Strong>
        こちらをご覧ください:
      </P>
      {episode6[i++]()}
      <P>
        <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
        のペアはこちらですが、
        <Em>
          これはマスがふたつしかないので、先に進むことができないやつです！
        </Em>
      </P>
      {episode6[i++]()}
      <P>
        このように
        <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
        のペア からはじめられない時は、
        <InlinePrioritiesLabel>2</InlinePrioritiesLabel>
        のペア からはじめる必要があります。
      </P>
      {episode6[i++]()}
      <H3>ここまでのまとめ</H3>
      <P>
        <Em>
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
          のペアからはじめられない時は、
          <InlinePrioritiesLabel>2</InlinePrioritiesLabel>
          のペアからはじめ、
        </Em>
        それが無理なら次の数字へ…と続ける。
      </P>
      <P>それでは、ここでまたクイズです！</P>
      <H3>クイズ</H3>
      <P>
        下の
        {h('ycBentoBox')}を {h('ycNext')} とどんどん進めたとします。
      </P>
      {episode6[i++]()}
      <P>
        <Strong>YesかNoで答えてみてください:</Strong>{' '}
        <Em>最終的に {h('ycBentoBox')} は次のようになるでしょうか？</Em>
      </P>
      {episode6[i++]()}
      <P>
        <Strong>これはちょっと難しい問題ですが</Strong>
        、諦めずにチャレンジしてみてください！
      </P>
      <YcNextLessonButton nextEpisodeNumber={6} />
    </>
  )
}
