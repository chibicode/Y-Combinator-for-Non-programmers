import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong } from 'src/components/ContentTags'
import H from 'src/components/H'
import AER from 'src/components/Yc/AER'
import { InlineEmojiBoxesForQuestion } from 'src/components/Yc/InlineEmojiBoxes'
import YesNoButtons from 'src/components/YesNoButtons'
import EmojiSeparator from 'src/components/EmojiSeparator'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: (
          <>
            複雑な
            <H args={{ name: 'bentoBox', short: true }} />
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              早速、
              <H args={{ name: 'lookAtThisBentoBox' }} />。
            </P>
            {AER.gopk}
            <P>
              今まで見たことがないくらい複雑な
              <H args={{ name: 'bentoBox', short: true }} />
              ですね。これは、どういう効果があるのでしょうか？
            </P>
            <P>
              <H args={{ name: 'yesNoQuiz' }} />
              で検証してみましょう！
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
              こちらに、暗号が「<Strong>2</Strong>」の
              <H args={{ name: 'bentoBox', short: true }} />
              を用意しました。
            </P>
            {AER.imgp}
            <P>
              これを、先ほどの
              <H args={{ name: 'bentoBox', skipEmoji: true }} />の
              <InlineEmojiBoxesForQuestion />
              の部分に埋め込んでみます。
            </P>
            {AER.lxnu}
            <P>
              <H args={{ name: 'whatsTheNumberQuestion', number: 1 }} />
            </P>
            <YesNoButtons answer="yes" tooHard />
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
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.ccon}
            <P>
              最後に残ったのは、暗号が「<Strong>1</Strong>」の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              でした。
            </P>
            {AER.npfx}
            <P>
              もともとの暗号は「<Strong>2</Strong>」だったので、「
              <Strong>2</Strong>」が「<Strong>1</Strong>」になったわけです。
            </P>
            <EmojiSeparator emojis={['2️⃣', '➡️', '1️⃣']} />
          </>
        )
      }
    ]}
  />
)
