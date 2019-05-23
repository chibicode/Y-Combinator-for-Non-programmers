import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Ul, UlLi } from 'src/components/ContentTags'
import H from 'src/components/H'
import AER from 'src/components/Yc/AER'
import EmojiWithText from 'src/components/EmojiWithText'
import Emoji from 'src/components/Emoji'
import EmojiForLetter from 'src/components/EmojiForLetter'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { InlineEmojiBoxesForQuestion } from 'src/components/Yc/InlineEmojiBoxes'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>条件分岐の弁当箱</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              今回は、以前紹介した「<Strong>条件分岐の弁当箱</Strong>
              」を省略表記していきます。まずは、復習から:
            </P>
            {AER.nlxe}
            <Ul>
              <UlLi>
                もし
                <InlineEmojiBoxesForQuestion />に<Strong>暗号が「0」</Strong>の
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                を埋め込んで実行した場合、最後に
                <Strong>
                  <EmojiWithText letter="y" />
                </Strong>
                が残ります 。
              </UlLi>
            </Ul>
            <EmojiSeparator
              nodes={[
                <Emoji>0️⃣</Emoji>,
                <Emoji>➡️</Emoji>,
                <EmojiForLetter letter="y" />
              ]}
            />
            <Ul>
              <UlLi>
                もし
                <InlineEmojiBoxesForQuestion />に
                <Strong>暗号が「1以上」</Strong>の
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                を埋め込んで実行した場合、最後に
                <Strong>
                  <EmojiWithText letter="z" />
                </Strong>
                が残ります 。
              </UlLi>
            </Ul>
            <EmojiSeparator
              nodes={[
                <Emoji>🔢</Emoji>,
                <Emoji>➡️</Emoji>,
                <EmojiForLetter letter="z" />
              ]}
            />
            <P>では、これを省略表記するとどうなるでしょう？</P>
          </>
        )
      }
    ]}
  />
)
