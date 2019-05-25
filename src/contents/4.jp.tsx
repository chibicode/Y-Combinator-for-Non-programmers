import React from 'react'
import { Hr, Em, P, Strong, InlineHeader } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import InlineBackground from 'src/components/InlineBackground'
import InlinePrioritiesLabel from 'src/components/InlinePrioritiesLabel'
import YcNextLessonButton from 'src/components/YcNextLessonButton'
import EpisodeCardList from 'src/components/EpisodeCardList'
import AER from 'src/components/AER'
import H from 'src/components/H'
import EmojiWithText from 'src/components/EmojiWithText'
import YesNoButtons from 'src/components/YesNoButtons'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: (
          <>
            3段の
            <H args={{ name: 'bentoBox' }} />
            の法則
          </>
        ),
        content: (
          <>
            <EmojiSeparator emojis={['🍱', '3️⃣', '🍱']} />
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              前回は、以下のような3段の
              <H args={{ name: 'bentoBoxPuzzle' }} />
              を紹介しました。
            </P>
            {AER.cvtc}
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
                <EmojiWithText letter="d" />
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
                <Emoji>➡</Emoji>,
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
            <H args={{ name: 'summary' }} />
          </>
        ),
        type: 'summary',
        content: (
          <>
            <P>
              1.{' '}
              <InlineHeader>
                先に<InlinePrioritiesLabel>1</InlinePrioritiesLabel>
                のペアをやる
              </InlineHeader>
            </P>
            <P>
              2.{' '}
              <InlineHeader>
                それが終わると同時に、
                <InlinePrioritiesLabel>2</InlinePrioritiesLabel>が
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>になる
              </InlineHeader>
            </P>
            {AER.jrxw}
            <P>
              3.{' '}
              <InlineHeader>
                同じことを繰り返して最後まで終わらせる
              </InlineHeader>
            </P>
            {AER.esyi}
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <H args={{ name: 'byTheWay' }} />{' '}
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>や
                <InlinePrioritiesLabel>2</InlinePrioritiesLabel>以外にも、
                <InlinePrioritiesLabel>3</InlinePrioritiesLabel>や
                <InlinePrioritiesLabel>4</InlinePrioritiesLabel>
                などが登場する場合もあります。
              </P>
              <P>
                この場合も似たようになります。すなわち
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
                のペアが終わったときに、
                <Strong>
                  <InlinePrioritiesLabel>3</InlinePrioritiesLabel>が
                  <InlinePrioritiesLabel>2</InlinePrioritiesLabel>になり、
                  <InlinePrioritiesLabel>4</InlinePrioritiesLabel>が
                  <InlinePrioritiesLabel>3</InlinePrioritiesLabel>に
                </Strong>
                なります。
              </P>
            </>
          )
        }
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
              マスターしたか、
              <H args={{ name: 'yesNoQuiz' }} />
              でチェックしてみましょう！
              <H args={{ name: 'lookAtThisBentoBox' }} />:
            </P>
            {AER.dkiy}
            <P>
              <H args={{ name: 'whatHappensAtTheEndQuestion' }} />
            </P>
            {AER.owcy}
            <YesNoButtons answer="no" />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'theAnswerIs', isYes: false }} />
          </>
        ),
        content: (
          <>
            <P>
              <Strong>
                <H args={{ name: 'theAnswerIs', isYes: false }} />
                でした。
              </Strong>
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.hdxc}
            <P>
              <H args={{ name: 'pauseIfLost' }} />
            </P>
            <Hr />
            <P>
              <InlineHeader>1周目はこうなり…</InlineHeader>
            </P>
            {AER.wepe}
            <P>
              <InlineHeader>
                最終的には
                <EmojiWithText letter="h" />
                が残ります:
              </InlineHeader>
            </P>
            {AER.bwop}
          </>
        )
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
            <YcNextLessonButton />
          </>
        )
      }
    ]}
  />
)
