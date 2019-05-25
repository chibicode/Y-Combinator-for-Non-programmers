import React from 'react'
import { P, Strong, InlineHeader } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import AER from 'src/components/Yc/AER'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import EmojiWithText from 'src/components/EmojiWithText'
import YesNoButtons from 'src/components/YesNoButtons'
import EpisodeCardList from 'src/components/EpisodeCardList'
import H from 'src/components/H'
import episodeEmojis from 'src/lib/episodeEmojis'

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
              <H args={{ name: 'bentoBoxPuzzle' }} />
              の法則 <Emoji>🤫</Emoji> を紹介していきましょう。
            </P>
            <P>
              ここでは、前回のはじめに登場した
              <H args={{ name: 'bentoBoxPuzzle', short: true }} />(
              <Strong>例その1</Strong>)を使って説明します:
            </P>
            {AER.uqwm}
          </>
        )
      },
      {
        title: '法則その1: 印をつける',
        content: (
          <>
            <P>
              まず、
              <Strong>
                上の料理には{' '}
                <BottomRightBadge inline bottomRightBadgeType="callArg" />
                、左の料理には
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />
                、右の料理には
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                の印をつけます。
              </Strong>
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />,
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
              ]}
            />
            <P>
              <H args={{ name: 'pressNext' }} />
            </P>
            {AER.ozbe}
            <P>
              <EmojiWithText letter="b" />に
              <BottomRightBadge inline bottomRightBadgeType="callArg" />
              の印が、下の
              <EmojiWithText letter="a" />
              ふたつにそれぞれ
              <BottomRightBadge inline bottomRightBadgeType="funcArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />
              の印がつきました。
            </P>
          </>
        )
      },
      {
        title: <>法則その2: 一致チェック</>,
        content: (
          <>
            <P>
              続いて、
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                が一致するかチェックし、一致した料理には、
                <Emoji>✅</Emoji>を付けます。
              </Strong>
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />,
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />,
                <Emoji>✅</Emoji>
              ]}
            />
            <P>
              <H args={{ name: 'pressNext' }} />
            </P>
            {AER.rqjo}
            <P>
              <BottomRightBadge inline bottomRightBadgeType="funcArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />の
              <EmojiWithText letter="a" />が<H args={{ name: 'match' }} />
              しました。
            </P>
          </>
        )
      },
      {
        title: <>法則その3: コピーする</>,
        content: (
          <>
            <P>
              続いて、
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="callArg" />
                の料理を、
                <H args={{ name: 'match' }} />
                した
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                の部分にコピーします。
              </Strong>
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <Emoji>↘️</Emoji>,
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
              ]}
            />
            <P>
              <H args={{ name: 'pressNext' }} />
            </P>
            {AER.evqx}
            <P>
              <BottomRightBadge inline bottomRightBadgeType="callArg" />の
              <EmojiWithText letter="b" />が
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />に
              <H args={{ name: 'copy' }} />
              されました。
            </P>
          </>
        )
      },
      {
        title: <>法則その4: 消す</>,
        content: (
          <>
            <P>
              最後に、
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />
                が消えます。
              </Strong>
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>💥</Emoji>,
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />
              ]}
            />
            <P>
              <H args={{ name: 'pressNext' }} />
            </P>
            {AER.msiw}
            <P>
              そして、最終的に
              <EmojiWithText letter="b" />
              だけになります。
            </P>
            {AER.osqo}
            <P>以上です！簡単だったでしょう？</P>
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'summary' }} />
          </>
        ),
        type: 'summary',
        content: (
          <>
            <P>
              1. <InlineHeader>印をつける:</InlineHeader>{' '}
              <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />
            </P>
            {AER.zzxj}
            <P>
              2. <InlineHeader>一致チェック:</InlineHeader>{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
              <Emoji>✅</Emoji>
            </P>
            {AER.keck}
            <P>
              3. <InlineHeader>コピーする:</InlineHeader>{' '}
              <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
              <Emoji>↘️</Emoji>{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />
            </P>
            {AER.qoms}
            <P>
              4. <InlineHeader>消す:</InlineHeader> <Emoji>💥</Emoji>{' '}
              <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcArg" />
            </P>
            {AER.mhgm}
          </>
        )
      },
      {
        title: <>一致しなかったら？</>,
        content: (
          <>
            <P>
              <Strong>
                もし
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                が一致しなかったらどうするのでしょうか？
              </Strong>
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />,
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />,
                <Emoji>❌</Emoji>
              ]}
            />
            <P>
              たとえば、前回にもあったマクドナルド風の
              <H args={{ name: 'bentoBoxPuzzle', short: true }} />
              は、
              <BottomRightBadge inline bottomRightBadgeType="funcArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />
              が一致しません。
              <H args={{ name: 'pressNext' }} />
            </P>
            {AER.sgfj}
            <P>こういう場合どうするかというと…(下に続く)</P>
          </>
        )
      },
      {
        title: <>コピーはせず、消すだけ！</>,
        content: (
          <>
            <P>
              <Strong>
                コピー (
                <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                <Emoji>↘️</Emoji>{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                )はせずに、ただ
                <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />
                を消すだけです。
              </Strong>
            </P>
            <P>
              <H args={{ name: 'pressNext' }} />
            </P>
            {AER.gwtp}
            <P>
              そして、最終的に
              <EmojiWithText letter="d" />
              だけになります。
            </P>
            {AER.ahsd}
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'summary' }} />: 一致しなかった場合
          </>
        ),
        type: 'summary',
        content: (
          <>
            <P>
              一致しなかった場合、
              <Strong>
                コピー (
                <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                <Emoji>↘️</Emoji>{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                )はせずに、ただ
                <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />
                を消す
              </Strong>
              。
            </P>
            {AER.zxfv}
          </>
        )
      },
      {
        title: <>早送りで見てみましょう</>,
        content: (
          <>
            <P>
              締めくくりに、それぞれ最初から最後まで早送りで見てみましょう。
            </P>
            <P>
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.wunw}
            <P>
              こちらも
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.jbam}
            <P>法則を覚えたら、次に進みましょう！</P>
          </>
        )
      },
      {
        title: (
          <>
            予告: 4品の
            <H args={{ name: 'bentoBoxPuzzle', short: true }} />
          </>
        ),
        content: (
          <>
            <P>
              次のページからは4品の料理が入った
              <H args={{ name: 'bentoBoxPuzzle' }} />
              が登場します。
            </P>
            <EmojiSeparator emojis={episodeEmojis[3]} />
            <P>
              <InlineHeader>たとえばこちらをご覧ください。</InlineHeader>
              <Strong>上に2マス、下にも2マス</Strong>
              ありますね。この場合はどうなるのでしょうか？
            </P>
            {AER.ljjg}
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
          </>
        ),
        content: (
          <>
            <P>
              次のページで詳しく説明しますが、先に
              <H args={{ name: 'yesNoQuiz' }} />
              をやってみましょう。勘で答えてみてください。
            </P>
            {AER.ljjg}
            <P>
              <H args={{ name: 'whatHappensAtTheEndQuestion' }} />
            </P>
            {AER.ebag}
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
            {AER.skzv}
            <P>どういう法則でこうなるのかは、次のページで説明します！</P>
            <YcNextLessonButton />
          </>
        )
      }
    ]}
  />
)
