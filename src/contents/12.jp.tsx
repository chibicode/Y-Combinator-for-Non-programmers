import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong } from 'src/components/ContentTags'
import H from 'src/components/H'
import AER from 'src/components/Yc/AER'
// import { InlineEmojiBoxesForQuestion } from 'src/components/Yc/InlineEmojiBoxes'
// import EmojiWithText from 'src/components/EmojiWithText'

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
          </>
        )
      }
    ]}
  />
)
