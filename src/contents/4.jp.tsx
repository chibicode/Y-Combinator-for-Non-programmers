import React from 'react'
import {
  Em,
  Ol,
  OlLi,
  P,
  Strong,
  InlineHeader
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import InlineBackground from 'src/components/Yc/InlineBackground'
import InlinePrioritiesLabel from 'src/components/Yc/InlinePrioritiesLabel'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import EpisodeCardList from 'src/components/EpisodeCardList'
import AER from 'src/components/Yc/AllExpressionRunners'
import H from 'src/components/H'
import EmojiWithText from 'src/components/EmojiWithText'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: (
          <>
            3段の
            <H args={{ name: 'bentoBox', short: true }} />
            の法則
          </>
        ),
        content: (
          <>
            <EmojiSeparator emojis={['🍱', '3️⃣', '🍱']} />
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              前回は、以下のような3段の
              <H args={{ name: 'bentoBox' }} />
              を紹介しました。
            </P>
            {AER.dkiy}
            <P>
              これを
              <H args={{ name: 'play' }} />
              するとどうなるのか説明していきます！
            </P>
          </>
        )
      },
      {
        title: (
          <>
            先に<InlinePrioritiesLabel>1</InlinePrioritiesLabel>のペアに注目
          </>
        ),
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>,
                <Emoji>🥇</Emoji>,
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
              ]}
            />
            <P>
              <Strong>
                まず、左上と左下に
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
                の印がある部分に注目します。
              </Strong>
            </P>
            <P>
              <H args={{ name: 'pressNext' }} />
            </P>
            {AER.aaov}
            <P>
              <Em>
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
                のペアがピンク色
                <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>
                になり、中段と下段以外の背景が暗い色{' '}
                <InlineBackground bgColor={'indigo50'} /> になりました。
              </Em>
            </P>
          </>
        )
      },
      {
        title: (
          <>
            <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>
            のペア部分を終わらせる
          </>
        ),
        content: (
          <>
            <P>
              次に、
              <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>
              のペア部分(
              <Em>
                背景が白色 <InlineBackground bgColor={'white'} />
              </Em>
              )を今までと同じように終わらせます。
            </P>
            <P>
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.qxgl}
            <P>
              <InlineHeader>ポイント:</InlineHeader> 最後に
              <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>
              の印も<Emoji>💥</Emoji>に変化していることに注目です。
            </P>
          </>
        )
      },
      {
        title: (
          <>
            <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>が消え
            <Emoji>💥</Emoji>、<InlinePrioritiesLabel>2</InlinePrioritiesLabel>
            が<InlinePrioritiesLabel>1</InlinePrioritiesLabel>に
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <InlineHeader>余談:</InlineHeader> このタイミングで
                <EmojiWithText letter="m" />
                の部分の背景も暗い色 <InlineBackground
                  bgColor={'indigo50'}
                />{' '}
                から白色 <InlineBackground bgColor={'white'} />{' '}
                にリセットされます。
              </P>
            </>
          )
        },
        content: (
          <>
            <P>
              続いて<InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>
              の印が消え <Emoji>💥</Emoji>、
              <Strong>
                <InlinePrioritiesLabel>2</InlinePrioritiesLabel>の印が
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>の印になります。
              </Strong>
            </P>
            <P>
              <H args={{ name: 'pressNext' }} />
            </P>
            {AER.uwma}
            <P>
              ご覧の通り、
              <Strong>
                <InlinePrioritiesLabel>2</InlinePrioritiesLabel>の印が
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
                の印になりました。
              </Strong>
            </P>
            <EmojiSeparator
              nodes={[
                <InlinePrioritiesLabel>2</InlinePrioritiesLabel>,
                <Emoji>👉</Emoji>,
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
              ]}
            />
          </>
        )
      },
      {
        title: (
          <>
            残った<InlinePrioritiesLabel>1</InlinePrioritiesLabel>
            のペアを終わらせる
          </>
        ),
        content: (
          <>
            <P>
              最後に、残った<InlinePrioritiesLabel>1</InlinePrioritiesLabel>
              のペアを終わらせます。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.kvso}
            <P>以上です！</P>
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'heresWhatYouNeedToKnow' }} />
          </>
        ),
        type: 'summary',
        content: (
          <>
            <Ol>
              <OlLi>
                <InlineHeader>
                  先に<InlinePrioritiesLabel>1</InlinePrioritiesLabel>
                  のペアをやる
                </InlineHeader>
              </OlLi>
              <OlLi>
                <InlineHeader>
                  それが終わると同時に、
                  <InlinePrioritiesLabel>2</InlinePrioritiesLabel>が
                  <InlinePrioritiesLabel>1</InlinePrioritiesLabel>になる
                </InlineHeader>
              </OlLi>
              <OlLi>↑を繰り返して最後まで終わらせる</OlLi>
            </Ol>
            <EmojiSeparator emojis={['🥇', '🤩', '🥈']} />
            <P>
              先ほどの
              <H args={{ name: 'bentoBox', short: true }} />
              を最初から
              <H args={{ name: 'fastForward' }} />
              すると、流れがつかめるかなと思います:
            </P>
            {AER.snsr}
          </>
        ),
        footer: {
          content: (
            <P>
              <H args={{ name: 'pauseIfLost' }} />
            </P>
          )
        }
      },
      {
        title: <>他の例でも試してみましょう</>,
        content: (
          <>
            <P>
              前のページで登場した他の2つの
              <H args={{ name: 'bentoBox', short: true }} />
              の例も見てみましょう。
            </P>
            <P>
              <InlineHeader>例その1 </InlineHeader> /{' '}
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.gmck}
            <P>
              <InlineHeader>例その2</InlineHeader> /{' '}
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.hdxc}
          </>
        ),
        footer: {
          content: (
            <P>
              <H args={{ name: 'pauseIfLost' }} />
            </P>
          )
        }
      },
      {
        title: <>次が初級ラスト！</>,
        content: (
          <>
            <P>
              お疲れ様です！<Strong>次が初級最後</Strong>
              のページです。ここまでお付き合いいただき、ありがとうございます！
            </P>
            <EmojiSeparator emojis={['🎉', '🤗', '🎉']} />
            <YcNextLessonButton nextEpisodeNumber={5} />
          </>
        )
      }
    ]}
  />
)
