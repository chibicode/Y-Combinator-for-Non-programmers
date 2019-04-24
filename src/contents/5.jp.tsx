/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import {
  Em,
  P,
  Strong,
  Hr,
  Ul,
  UlLi,
  InlineHeader,
  NoOpLink,
  Blockquote
} from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import InlinePrioritiesLabel from 'src/components/Yc/InlinePrioritiesLabel'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import H from 'src/components/H'
import EpisodeCardList from 'src/components/EpisodeCardList'
import AER from 'src/components/Yc/AllExpressionRunners'
import YesNoButtons from 'src/components/YesNoButtons'
import EmojiWithText from 'src/components/EmojiWithText'
import { episodeUrl } from 'src/lib/meta'
import { fontSizes } from 'src/lib/theme'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>順番はどうなる？</>,
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
                  ができない
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
            {AER.aezk}
            <P>
              上の
              <H args={{ name: 'bentoBox', short: true }} />
              の場合は、 左にある
              <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>
              のペアからはじめます。
            </P>
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
            第2問の解説その1: <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
            のペアができない場合、
            <InlinePrioritiesLabel>2</InlinePrioritiesLabel>のペアからはじめる
          </>
        ),
        content: (
          <>
            <P>
              <Strong>
                この
                <H args={{ name: 'bentoBox', short: true }} />の
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
                のペアをご覧ください。
              </Strong>
            </P>
            {AER.pqfs}
            <P>
              <Em>
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
                のペアは
                <EmojiWithText letter="b" />と<EmojiWithText letter="c" />
                のふたつだけなので、先に進むことができません。
              </Em>{' '}
            </P>
            <P>
              <Strong>
                <BottomRightBadge bottomRightBadgeType="callArg" inline />{' '}
                <BottomRightBadge bottomRightBadgeType="funcArg" inline />{' '}
                <BottomRightBadge bottomRightBadgeType="funcBound" inline />
                の3つが揃ってないと進めない
              </Strong>
              のです。
            </P>
            <Hr />
            <P>
              こういう場合は、
              <Strong>
                <InlinePrioritiesLabel>2</InlinePrioritiesLabel>
                のペアからはじめます。
              </Strong>
            </P>
            {AER.tntc}
            <P>
              この時、
              <BottomRightBadge bottomRightBadgeType="callArg" inline />{' '}
              <BottomRightBadge bottomRightBadgeType="funcArg" inline />{' '}
              <BottomRightBadge bottomRightBadgeType="funcBound" inline />
              がどうなるかは次で解説します！
            </P>
          </>
        )
      },
      {
        title: (
          <>
            第2問の解説その2: <InlinePrioritiesLabel>2</InlinePrioritiesLabel>
            のペアからはじめる場合、
            <BottomRightBadge bottomRightBadgeType="callArg" inline />
            はこうなる
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <InlineHeader>余談:</InlineHeader>{' '}
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>のペアにも、
                <InlinePrioritiesLabel>2</InlinePrioritiesLabel>のペアにも
                <BottomRightBadge bottomRightBadgeType="callArg" inline />{' '}
                <BottomRightBadge bottomRightBadgeType="funcArg" inline />{' '}
                <BottomRightBadge bottomRightBadgeType="funcBound" inline />
                が揃っていない場合、
                <Em>
                  <InlinePrioritiesLabel>3</InlinePrioritiesLabel>
                  のペアからはじめることになります。
                </Em>
              </P>
              <P>
                その場合、
                <Em>
                  <InlinePrioritiesLabel>1</InlinePrioritiesLabel>と
                  <InlinePrioritiesLabel>2</InlinePrioritiesLabel>両方が
                  <BottomRightBadge bottomRightBadgeType="callArg" inline />
                  になります。
                </Em>
              </P>
            </>
          )
        },
        content: (
          <>
            <P>
              <InlinePrioritiesLabel>2</InlinePrioritiesLabel>
              のペアからはじめる場合、
              <Strong>
                <BottomRightBadge bottomRightBadgeType="callArg" inline />は
                <EmojiWithText letter="b" />と<EmojiWithText letter="c" />
                両方になります。
              </Strong>
            </P>
            <P>
              <H args={{ name: 'pressNext' }} />
            </P>
            {AER.hwtu}
            <P>
              <Em>
                <InlinePrioritiesLabel>2</InlinePrioritiesLabel>
                のペアからはじめる場合、
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>のペアの部分が
                <BottomRightBadge bottomRightBadgeType="callArg" inline />
                になります。
              </Em>
            </P>
            <Hr />
            <P>
              残りは
              <H args={{ name: 'fastForward' }} />
              で見ていきましょう:
            </P>
            {AER.usta}
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
              <InlineHeader>重要:</InlineHeader>{' '}
              <Strong>これらの法則を暗記する必要はありません。</Strong>
              中級以降、これらの法則を使う場面が出てきますが、覚えていなくても先に進めますのでご心配なく。
            </P>
            <Hr />
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
              のペアに料理が2つしかない場合、そこから始めるのは無理なので、
              <Strong>
                <InlinePrioritiesLabel>2</InlinePrioritiesLabel>
                のペアからはじめます。
              </Strong>
              そしてこの場合、
              <Strong>
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
                のペアの部分が
                <BottomRightBadge bottomRightBadgeType="callArg" inline />
                になります。
              </Strong>
            </P>
            {AER.mpal}
            <P>
              <InlineHeader>
                繰り返しますが、これらの法則を暗記する必要はありません！
              </InlineHeader>
              なんとなく「ふーん、そういう法則もあるんだ」と思っていただければ大丈夫です。
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
              <InlineHeader>
                「法則を覚えきれていない」という方でも、先に進むにあたって支障はありません。
              </InlineHeader>
              「なんとなく」の理解で十分です！
            </P>
            <YcNextLessonButton nextEpisodeNumber={6} />
          </>
        )
      },
      {
        type: 'sideNote',
        title: <>ちょっと休憩？</>,
        content: (
          <>
            <P>
              「中級に入る前にちょっと休憩したい」という方は、もしよければですが、ツイッターなどのSNSで
            </P>
            <Blockquote>
              <P>
                <Strong>
                  「魔法のYコンビネーター、とりあえず初級編は終わった」
                </Strong>
              </P>
            </Blockquote>
            <P>とつぶやいてくださると、宣伝になるので大変ありがたいです。</P>
            <EmojiSeparator emojis={['📱', '🙂', '💬']} />
            <P>
              <InlineHeader>
                その際には、こちらのリンクをコピーしてシェアしてください↓
              </InlineHeader>
            </P>
            <P
              css={css`
                text-align: center;
                font-size: ${fontSizes(1.2)};
              `}
            >
              <Em>
                <NoOpLink href={episodeUrl(6)}>{episodeUrl(6)}</NoOpLink>
              </Em>
            </P>
          </>
        )
      },
      {
        title: <>それでは中級に進みましょう！</>,
        content: (
          <>
            <YcNextLessonButton nextEpisodeNumber={6} />
          </>
        )
      }
    ]}
  />
)
