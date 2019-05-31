import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Ol, OlLi, Em } from 'src/components/ContentTags'
import H from 'src/components/H'
import AER from 'src/components/AER'
import EmojiSeparator from 'src/components/EmojiSeparator'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>これが上級最後！</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              これが上級最後のページです(次のページはエピローグです)。
            </P>
            <EmojiSeparator emojis={['🎉', '🤗', '🎉']} />
            <P>
              前回話した通り、この上級最終回では 「
              <Strong>ある条件を満たすまで、何かを繰り返す弁当箱</Strong>」
              の解説をします。
            </P>
            <EmojiSeparator emojis={['🤔', '🍱', '❓']} />
            <P>
              できるだけ分かりやすく解説するために、以下の順番で解説していきます。
            </P>
            <Ol>
              <OlLi>
                まず、
                <Strong>実際には存在しない架空の弁当箱の機能を使い</Strong>
                、「<Em>ある条件を満たすまで、何かを繰り返す弁当箱</Em>
                」を作ってみます。
              </OlLi>
              <OlLi>
                その後に、<Strong>従来の弁当箱の機能だけを使い</Strong>
                、「<Em>ある条件を満たすまで、何かを繰り返す弁当箱</Em>
                」を作ってみます。
              </OlLi>
            </Ol>
            <P>
              「架空の機能って何？」とお考えかもしれません。さっそく説明していきます！
            </P>
            <EmojiSeparator emojis={['🤔', '💭', '❓']} />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'witch' }} />
          </>
        ),
        content: (
          <>
            <P>
              まず、「
              <Strong>
                弁当箱の
                <H args={{ name: 'witch' }} />
              </Strong>
              」という「架空の」機能を紹介します。
            </P>
            <EmojiSeparator emojis={['✨', '🧙‍♀️', '✨']} />
            <P>
              この機能は実際には存在しない機能なのですが、
              <Em>
                もし仮にこの機能を使うことができれば、「
                <Strong>ある条件を満たすまで、何かを繰り返す弁当箱</Strong>
                」をラクに作ることができます。
              </Em>
              どういう機能か説明しましょう。
            </P>
          </>
        )
      }
    ]}
  />
)
