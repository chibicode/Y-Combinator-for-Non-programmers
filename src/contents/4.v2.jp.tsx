import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong } from 'src/components/ContentTags'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiSeparator from 'src/components/EmojiSeparator'

import H from 'src/components/H'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>法則が分かった！</>,
        content: (
          <>
            <EmojiSeparator emojis={['🍱', '😁', '🍱']} />
            <P>
              どうやら、村人たちは
              <H args={{ name: 'bentoBoxPuzzle' }} />
              の法則を見抜いたようです！
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'happy',
                  children: (
                    <>
                      <P>
                        <Strong>やった、法則が分かったぞ！</Strong>
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        ばかな…本当に分かったというなら、説明してみることだな！
                      </P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      }
    ]}
  />
)
