import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Em } from 'src/components/ContentTags'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import AER from 'src/components/Yc/AER'
import H from 'src/components/H'
import YesNoButtons from 'src/components/YesNoButtons'
import Emoji from 'src/components/Emoji'
import { InlineEmojiBoxesForQuestion } from 'src/components/Yc/InlineEmojiBoxes'
import EmojiSeparator from 'src/components/EmojiSeparator'

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
                <InlineEmojiBoxesForQuestion />
                が毎回ひとつずつ増えています。
              </Strong>
            </P>
            <EmojiSeparator
              nodes={[
                <InlineEmojiBoxesForQuestion />,
                <InlineEmojiBoxesForQuestion />,
                <InlineEmojiBoxesForQuestion />
              ]}
            />
            <P>
              上の例は長くなるので3回目で中断しましたが、たとえば5回繰り返された時点では、
              <InlineEmojiBoxesForQuestion />
              が一番下に5個登場します。
            </P>
            {AER.opvb}
            <P>
              そしてこのまま続けていけば、
              <InlineEmojiBoxesForQuestion />
              の数は無限に増えていくのです。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>♾</Emoji>,
                <InlineEmojiBoxesForQuestion />,
                <Emoji>♾</Emoji>
              ]}
            />
          </>
        )
      },
      {
        title: (
          <>
            <InlineEmojiBoxesForQuestion />
            には何を入れてもいい
          </>
        ),
        content: (
          <>
            <P>
              <InlineEmojiBoxesForQuestion />
              には何を入れてもいいので、たとえば以前紹介した「
              <Strong>
                1を足す
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
              </Strong>
              」を入れることもできます。
            </P>
            {AER.nehp}
            <P>
              先ほどの
              <InlineEmojiBoxesForQuestion />
              の部分に入れてみます(<Em>黄色の部分</Em>)。
            </P>
            {AER.mizw}
            <P>
              これを
              <H args={{ name: 'play' }} />
              すれば、先ほどと同じように、
              <Strong>
                1を足す
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
              </Strong>
              がどんどん一番下に追加されていきます。(時間の都合上、ここでは省略します。)
            </P>
            <P>
              つまり、<Strong>1 + 1 + 1 + 1…</Strong>
              という、無限に続く1の足し算ができるのです。
            </P>
            <EmojiSeparator emojis={['➕', '1️⃣', '♾']} />
          </>
        )
      },
      {
        title: <>しかし、それでも役に立たない</>,
        content: (
          <>
            <P>
              しかし、無限に続く計算ができても、あまり意味はありません。1を無限に足し算しても、何の役にも立ちません。
            </P>
            <P>
              求められているのは、「無限に何かを繰り返す
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              」ではなく、「
              <Strong>
                ある条件を満たすまで、何かを繰り返す
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
              </Strong>
              」です。そういう
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              があれば、役に立ちます。
            </P>
            <EmojiSeparator emojis={['❓', '🍱', '❓']} />
            <P>
              たとえば、「<Strong>2を10回掛けたら何になるか</Strong>
              」を求めたいとします:
            </P>
            <P>
              <Strong highlightType="white">
                2 ✕ 2 ✕ 2 ✕ 2 ✕ 2 ✕ 2 ✕ 2 ✕ 2 ✕ 2 ✕ 2
              </Strong>
            </P>
            <P>
              答えは「1024」なのですが、これを求めるためには、「
              <Em>
                2の掛け算を<Strong>10回だけ</Strong>繰り返す
              </Em>
              」
              <H args={{ name: 'bentoBox', short: true }} />
              が必要になってきます。
              <Em>
                「10回繰り返す」という<Strong>条件</Strong>
                を満たしたら、自動的に実行を終了しなければいけません
              </Em>
              。
            </P>
            <EmojiSeparator emojis={['🔟', '🤔', '❓']} />
            <P>
              では、
              <Em>
                <Strong>
                  どんな
                  <H args={{ name: 'bentoBox', skipEmoji: true }} />
                  を使えば
                </Strong>
                、決められた条件を満たすまで計算を繰り返すことができるのでしょう？
              </Em>
            </P>
          </>
        )
      },
      {
        title: <>答えは上級編で</>,
        content: (
          <>
            <P>
              というわけで、次からはじまる上級編では、「
              <Strong>
                ある条件を満たすまで、何かを繰り返す
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
              </Strong>
              」が果たして存在するのかどうか、検証していきたいと思います。
            </P>
            <EmojiSeparator emojis={['❓', '🍱', '❓']} />
            <P>
              そして上級編ではついに、記事の題名にもある「
              <Strong>
                魔法の
                <H args={{ name: 'yCombinator' }} />
              </Strong>
              」が登場します。
            </P>
            <EmojiSeparator emojis={['✨', '🧙‍♂️', '✨']} />
            <P>
              ここまで読んでくださり、ありがとうございます！最後まで楽しんでいただけると嬉しいです。下のボタンから、上級編に進むことができます。
            </P>
            <YcNextLessonButton />
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
