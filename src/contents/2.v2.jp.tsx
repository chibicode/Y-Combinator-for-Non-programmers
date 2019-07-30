import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong } from 'src/components/ContentTags'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
// import EmojiNumber from 'src/components/EmojiNumber'
import Emoji from 'src/components/Emoji'
import H from 'src/components/H'
// import * as R from 'src/components/Runners'
// import YesNoButtons from 'src/components/YesNoButtons'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>繰り返しの機能</>,
        content: (
          <>
            <P>
              前回は、計算箱の「
              <CustomEmoji type="plusMinus" />{' '}
              <Strong>プラスマイナスの機能</Strong>
              」について紹介しました。
            </P>
            <P>
              今回はもうひとつの計算箱の機能である「
              <Emoji>🔁</Emoji> <Strong>繰り返しの機能</Strong>
              」について説明します。
            </P>
            <EmojiSeparator
              nodes={[<Emoji>✨</Emoji>, <Emoji>🔁</Emoji>, <Emoji>✨</Emoji>]}
              description={<>繰り返しの機能</>}
            />
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
        // CHANGE QUIZ: Suppose that they want to do 10 - 9 ... are they doing it right or not? The answer should be no, they made a mistake
        content: <></>
      }
    ]}
  />
)
