import React from 'react'
import {
  Em,
  H3,
  P,
  Strong,
  InlineHeader,
  Ul,
  UlLi,
  Ol,
  OlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import SideNoteSection from 'src/components/SideNoteSection'
import AER, {
  episode1,
  episode1Quiz,
  episode2,
  episode2Quiz
} from 'src/components/Yc/AllExpressionRunners'
import BasicTrueFalseQuiz from 'src/components/Yc/BasicTrueFalseQuiz'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import TopBadge from 'src/components/Yc/TopBadge'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import EmojiWithText from 'src/components/EmojiWithText'
import YesNoButtons from 'src/components/YesNoButtons'
import EpisodeCardList from 'src/components/EpisodeCardList'
import H from 'src/components/H'
import h from 'src/lib/h'

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
              の法則 <Emoji>🤫</Emoji> を紹介していきましょう。
            </P>
            <P>
              ここでは、前回のはじめに登場した
              <H args={{ name: 'bentoBox', short: true }} />(
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
              size="sm"
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
              size="sm"
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
          </>
        )
      },
      {
        title: <>法則その3: コピペする</>,
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
                の部分にコピペします。
              </Strong>
            </P>
            <EmojiSeparator
              size="sm"
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <Emoji>➡️</Emoji>,
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
              ]}
            />
            <P>
              <H args={{ name: 'pressNext' }} />
            </P>
            {AER.evqx}
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
              size="sm"
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
        title: <>ここまでのまとめ</>,
        type: 'summary',
        content: (
          <>
            <P>まとめるとこんな感じになります:</P>
            <Ol>
              <OlLi>
                <InlineHeader>印をつける:</InlineHeader>{' '}
                <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
              </OlLi>
              <OlLi>
                <InlineHeader>一致チェック:</InlineHeader>{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                <Emoji>✅</Emoji>
              </OlLi>
              <OlLi>
                <InlineHeader>コピペする:</InlineHeader>{' '}
                <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                <Emoji>➡️</Emoji>{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
              </OlLi>
              <OlLi>
                <InlineHeader>消す:</InlineHeader> <Emoji>💥</Emoji>{' '}
                <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />
              </OlLi>
            </Ol>
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
              size="sm"
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />,
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />,
                <Emoji>❌</Emoji>
              ]}
            />
            <P>
              たとえば、前回にもあったマクドナルド風の
              <H args={{ name: 'bentoBox', short: true }} />
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
        title: <>コピペはせず、消すだけ！</>,
        content: (
          <>
            <P>
              <Strong>
                コピペ (
                <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                <Emoji>➡️</Emoji>{' '}
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
        title: <>ここまでのまとめ(改訂版)</>,
        type: 'summary',
        content: (
          <>
            <P>
              まとめるとこんな感じになります(
              <Em>
                ステップ3に<Strong>変更点</Strong>を加えました
              </Em>
              ):
            </P>
            <Ol>
              <OlLi>
                <InlineHeader>印をつける:</InlineHeader>{' '}
                <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
              </OlLi>
              <OlLi>
                <InlineHeader>一致チェック:</InlineHeader>{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                <Emoji>✅</Emoji>
              </OlLi>
              <OlLi>
                <Strong>
                  (<H args={{ name: 'match' }} />
                  した部分のみ)
                </Strong>
                <InlineHeader>コピペする:</InlineHeader>{' '}
                <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                <Emoji>➡️</Emoji>{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
              </OlLi>
              <OlLi>
                <InlineHeader>消す:</InlineHeader> <Emoji>💥</Emoji>{' '}
                <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />
              </OlLi>
            </Ol>
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
              次のページからはもう少し複雑な
              <H args={{ name: 'bentoBox' }} />
              が登場します。
            </P>
            <P>
              <InlineHeader>たとえばこちらをご覧ください。</InlineHeader>
              下には3つのマスがありますね。この場合はどうなるのでしょうか？
            </P>
            {AER.xwim}
            <P>
              答えは次のページにありますが、試しに
              <H args={{ name: 'yesNoQuiz' }} />
              をやってみましょう。
            </P>
            <P>
              <H args={{ name: 'question' }} /> 上の
              <H args={{ name: 'bentoBox', short: true }} />を
              <H args={{ name: 'play' }} />
              すると、<Strong>最終的に下のようになるでしょうか？</Strong>
            </P>
            {AER.awxz}
            <YesNoButtons answer="yes" />
          </>
        )
      },
      {
        title: <>答え合わせ</>,
        content: (
          <>
            <P>
              正解は<Emoji>⭕️</Emoji>でした。
              <H args={{ name: 'play' }} />
              してみてください:
            </P>
            {AER.ldts}
            <P>どういう法則でこうなるのかは、次のページで説明します！</P>
            <YcNextLessonButton nextEpisodeNumber={3} />
          </>
        )
      }
    ]}
  />
)
