import React from 'react'
import {
  Em,
  P,
  Strong,
  Hr,
  Ul,
  UlLi,
  InlineHeader
} from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import BottomRightBadge from 'src/components/BottomRightBadge'
import InlinePrioritiesLabel from 'src/components/InlinePrioritiesLabel'
import NextLessonButton from 'src/components/NextLessonButton'
import H from 'src/components/H'
import EpisodeCardList from 'src/components/EpisodeCardList'
import AER from 'src/components/AER'
import YesNoButtons from 'src/components/YesNoButtons'
import EmojiWithText from 'src/components/EmojiWithText'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>初級の最後です！</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              <Strong>今回が初級の最後です。</Strong>
            </P>
            <EmojiSeparator emojis={['🎉', '🤗', '🎉']} />
            <P>
              中級に進む前に、
              <Strong>どう進めるのか分かりにくい</Strong>
              <H args={{ name: 'bentoBoxPuzzle' }} />
              を3つ紹介します:
            </P>
            <Ul>
              <UlLi>
                <InlineHeader>第1問:</InlineHeader>{' '}
                <Strong>
                  <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
                  のツーペア
                </Strong>
              </UlLi>
              <UlLi>
                <InlineHeader>第2問:</InlineHeader>{' '}
                <Strong>
                  <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
                  のペアの中に<InlinePrioritiesLabel>2</InlinePrioritiesLabel>
                  のペアがある
                </Strong>
              </UlLi>
              <UlLi>
                <InlineHeader>第3問:</InlineHeader>{' '}
                <Strong>
                  <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
                  のペアからはじめられない
                </Strong>
              </UlLi>
            </Ul>
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
              わからなくてもいいので、先に
              <H args={{ name: 'yesNoQuiz' }} />
              を解いてみましょう！クイズの後に解説していきます。
            </P>
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
            <H args={{ name: 'theAnswerIs', isYes: true }} />
          </>
        ),
        content: (
          <>
            <P>
              <Strong>
                <H args={{ name: 'theAnswerIs', isYes: true }} />
                でした。
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
              <Strong>いちばん左のペアからはじめます。</Strong>
            </P>
            <P>
              下のような場合、 左側にある
              <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>
              のペアから からはじめます。
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
            <P>
              (解説のために、
              <BottomRightBadge inline bottomRightBadgeType="callArg" /> →
              <BottomRightBadge inline bottomRightBadgeType="funcArg" /> →
              <BottomRightBadge inline bottomRightBadgeType="funcBound" /> →
              …と順番に表示します。)
            </P>
            {AER.ainx}
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
            第2問: <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
            のペアの中に<InlinePrioritiesLabel>2</InlinePrioritiesLabel>
            のペアがある
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'lookAtThisBentoBox' }} />:
            </P>
            {AER.zywk}
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
            <H args={{ name: 'theAnswerIs', isYes: true }} />
          </>
        ),
        content: (
          <>
            <P>
              <Strong>
                <H args={{ name: 'theAnswerIs', isYes: true }} />
                でした。
              </Strong>
              <H args={{ name: 'pressPlay' }} />
            </P>
            {AER.wbru}
            <P>詳しく解説しますね！</P>
          </>
        )
      },
      {
        title: (
          <>
            第2問の解説: <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
            のペアの中に<InlinePrioritiesLabel>2</InlinePrioritiesLabel>
            のペアがある場合、
            <BottomRightBadge bottomRightBadgeType="callArg" inline />
            はこうなる
          </>
        ),
        content: (
          <>
            <P>
              <Strong>
                この弁当箱の
                <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>
                のペアの中には、<InlinePrioritiesLabel>2</InlinePrioritiesLabel>
                のペアが入っています。
              </Strong>
            </P>
            {AER.pqfs}
            <P>
              <Strong>
                この場合、<InlinePrioritiesLabel>2</InlinePrioritiesLabel>
                のペアの部分が
                <BottomRightBadge bottomRightBadgeType="callArg" inline />
                になります。
              </Strong>
            </P>
            {AER.hwtu}
            <Hr />
            <P>
              残りは
              <H args={{ name: 'fastForward' }} />
              で見ていきましょう:
            </P>
            {AER.usta}
            <P>
              というわけで、最終的に
              <EmojiWithText letter="c" />と<EmojiWithText letter="b" />
              が残りました。
            </P>
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: (
          <>
            第3問: <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
            のペアからはじめられない
          </>
        ),
        content: (
          <>
            <P>
              これが最後の問題です！
              <H args={{ name: 'lookAtThisBentoBox' }} />:
            </P>
            {AER.gtdu}
            <P>
              <H args={{ name: 'whatHappensAtTheEndQuestion' }} />
            </P>
            {AER.qpkm}
            <YesNoButtons answer="yes" />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'theAnswerIs', isYes: true }} />
          </>
        ),
        content: (
          <>
            <P>
              <Strong>
                <H args={{ name: 'theAnswerIs', isYes: true }} />
                でした。
              </Strong>
              <H args={{ name: 'pressPlay' }} />
            </P>
            {AER.udvh}
            <P>詳しく解説しますね！</P>
          </>
        )
      },
      {
        title: (
          <>
            第3問の解説: <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
            のペアのからはじめられない場合、
            <InlinePrioritiesLabel>2</InlinePrioritiesLabel>のペアからはじめる
          </>
        ),
        content: (
          <>
            <P>
              今回は
              <Em>
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
                のペアからはじめようとしても、
                <Strong>
                  下段には
                  <EmojiWithText letter="b" />
                  しかありません。
                </Strong>
              </Em>
            </P>
            {AER.gtdu}
            <P>
              <Strong>
                下段にふたつの料理 (
                <BottomRightBadge bottomRightBadgeType="funcArg" inline />と
                <BottomRightBadge bottomRightBadgeType="funcBound" inline />)
                がないので、先に進められないのです
              </Strong>
              。
            </P>
            <P>
              このように<InlinePrioritiesLabel>1</InlinePrioritiesLabel>
              のペアからはじめられない場合は、
              <Strong>
                <InlinePrioritiesLabel>2</InlinePrioritiesLabel>
                のペアからはじめます。
              </Strong>
            </P>
            {AER.dqey}
            <Hr />
            <P>
              残りは
              <H args={{ name: 'fastForward' }} />
              で見ていきましょう:
            </P>
            {AER.diis}
            <P>
              というわけで、最終的に
              <EmojiWithText letter="c" />と<EmojiWithText letter="b" />
              が残りました。
            </P>
          </>
        )
      },
      {
        type: 'summary',
        title: (
          <>
            <H args={{ name: 'summary' }} />
          </>
        ),
        content: (
          <>
            <P>
              <InlineHeader>1.</InlineHeader>{' '}
              <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
              のペアがふたつ以上ある場合は、
              <Strong>いちばん左のペアからはじめます。</Strong>
            </P>
            {AER.hykj}
            <P>
              <InlineHeader>2.</InlineHeader>{' '}
              <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
              のペアの間に<InlinePrioritiesLabel>2</InlinePrioritiesLabel>
              のペアがある場合、
              <Strong>
                <InlinePrioritiesLabel>2</InlinePrioritiesLabel>
                のペアの部分が
                <BottomRightBadge bottomRightBadgeType="callArg" inline />
                になります。
              </Strong>
            </P>
            {AER.mpal}
            <P>
              <InlineHeader>3.</InlineHeader>{' '}
              <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
              のペアからはじめられない場合、(下段にひとつの料理しかない場合)
              <Strong>
                <InlinePrioritiesLabel>2</InlinePrioritiesLabel>
                のペアの部分からはじめます。
              </Strong>
            </P>
            {AER.dqey}
          </>
        )
      },
      {
        title: <>暗記する必要はありません！</>,
        content: (
          <>
            <EmojiSeparator emojis={['✨', '😉', '✨']} />
            <P>
              <InlineHeader>重要:</InlineHeader>{' '}
              <Strong>これらの法則を暗記する必要はありません。</Strong>
              なんとなく「<Em>こういうルールがあるんだな</Em>
              」と思ってくだされば大丈夫です。
              中級以降、これらの法則を使う場面が出てきますが、覚えていなくても先に進めますのでご心配なく。
            </P>
          </>
        )
      },
      {
        title: <>初級はここまで！</>,
        content: (
          <>
            <P>
              以上が初級編でした！基礎はほとんどカバーしたので、次の中級編からは応用に入っていきます。
            </P>
            <EmojiSeparator emojis={['🎉', '🤗', '🎉']} />
            <P>
              <Em>
                「法則を覚えきれていない」という方でも、先に進むにあたって支障はありません。
              </Em>
              「なんとなく」の理解で十分です！
            </P>
            <NextLessonButton />
          </>
        )
      },
      {
        type: 'sideNote',
        title: <>ちょっと休憩？</>,
        content: (
          <>
            <H args={{ name: 'takeABreak' }} />
          </>
        )
      },
      {
        title: <>それでは中級に進みましょう！</>,
        content: (
          <>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
