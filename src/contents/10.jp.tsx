import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Em } from 'src/components/ContentTags'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import AER from 'src/components/Yc/AER'
// import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import H from 'src/components/H'
import YesNoButtons from 'src/components/YesNoButtons'
import Emoji from 'src/components/Emoji'
import EmojiForLetter from 'src/components/EmojiForLetter'
// import { InlineEmojiBoxesForQuestion } from 'src/components/Yc/InlineEmojiBoxes'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiWithText from 'src/components/EmojiWithText'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>中級の最後です！</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              <Strong>今回が中級の最後です。</Strong>
            </P>
            <EmojiSeparator emojis={['🎉', '🤗', '🎉']} />
            <P>
              <H args={{ name: 'yesNoQuiz' }} />
              からやっていきましょう！
            </P>
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
              <H args={{ name: 'lookAtThisBentoBox' }} />:
            </P>
            {AER.ofee}
            <P>
              <H args={{ name: 'whatHappensAtTheEndQuestion' }} />
            </P>
            {AER.wwdd}
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
              <H args={{ name: 'theAnswerIs', isYes: false }} />
              でした。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.ggxt}
            <P>
              <Strong>
                なんと、一周して最初と同じ
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                に戻ってしまいました！
              </Strong>
            </P>
            <P>
              そう、これは、永遠に終わりがない
              <Strong>
                <H args={{ name: 'infiniteBentoBox' }} />
              </Strong>
              なのです。
            </P>
            <EmojiSeparator emojis={['♾', '🍱', '♾']} />
          </>
        )
      },
      {
        title: <>何の役に立つの？</>,
        content: (
          <>
            <P>
              <H args={{ name: 'infiniteBentoBox' }} />
              は興味深いですが、<Em>いったい何の役に立つのでしょうか？</Em>
              所詮、ただ同じことを繰り返すだけですよね。
            </P>
            <EmojiSeparator emojis={['😒', '🍱', '♾']} />
            <P>
              たしかに、先ほどの
              <H args={{ name: 'infiniteBentoBox' }} />
              のままでは何の役にも立ちません。では、少し工夫を加えてみましょう！
            </P>
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
              <H args={{ name: 'lookAtThisBentoBox' }} />:
            </P>
            {AER.gxuj}
            <P>
              <H args={{ name: 'question' }} /> この
              <H args={{ name: 'bentoBox', short: true }} />を
              <H args={{ name: 'fastForward' }} />
              すると、先ほどと同じように
              <Strong>
                一周して同じ
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                に戻る。
              </Strong>
              <H args={{ name: 'yesOrNo' }} />
            </P>
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
              <H args={{ name: 'theAnswerIs', isYes: false }} />
              でした。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.aqbs}
            <P>
              お気づきでしょうか？これも
              <H args={{ name: 'infiniteBentoBox' }} />
              なのですが、さきほどと違い、
              <Strong>
                一番下にある
                <EmojiWithText letter="a" />
                が毎回ひとつずつ増えています。
              </Strong>
            </P>
            <EmojiSeparator letters={['a', 'a', 'a']} />
            <P>
              上の例は長くなるので3回目のループで中断しましたが、たとえばループが5回繰り返された時点では、
              <EmojiWithText letter="a" />
              が一番下に5個登場します。
            </P>
            {AER.opvb}
            <P>
              そしてこのまま続けていけば、
              <EmojiWithText letter="a" />
              の数は無限に増えていくのです。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>♾</Emoji>,
                <EmojiForLetter letter="a" />,
                <Emoji>♾</Emoji>
              ]}
            />
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
        title: <>それでは上級に進みましょう！</>,
        content: (
          <>
            <YcNextLessonButton />
          </>
        )
      }
    ]}
  />
)
