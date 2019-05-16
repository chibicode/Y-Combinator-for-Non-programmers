import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
// import { P, Strong } from 'src/components/ContentTags'
import H from 'src/components/H'
// import AER from 'src/components/Yc/AER'
// import { InlineEmojiBoxesForQuestion } from 'src/components/Yc/InlineEmojiBoxes'
// import EmojiWithText from 'src/components/EmojiWithText'

export default () => (
  <EpisodeCardList
    cards={[
      {
        type: 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
          </>
        ),
        content: <></>
      }
    ]}
  />
)
