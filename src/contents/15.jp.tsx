import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { Ul, UlLi, P, Strong, Ol, OlLi, Em } from 'src/components/ContentTags'
import H from 'src/components/H'
import AER from 'src/components/AER'
import { InlineEmojiBoxesForQuestion } from 'src/components/InlineEmojiBoxes'
import EmojiSeparator from 'src/components/EmojiSeparator'
import Emoji from 'src/components/Emoji'
import EmojiWithText from 'src/components/EmojiWithText'
import magicalVariableName from 'src/lib/magicalVariableName'

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
            弁当箱の
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
              まずはどういう機能か説明しましょう。
            </P>
            <P>
              次の弁当箱は、下に
              <H args={{ name: 'witch' }} />
              が、上に<Emoji>3️⃣</Emoji>
              が入っています。
            </P>
            {AER.zxux}
            <P>
              これを進めると、下の
              <H args={{ name: 'witch' }} />
              の部分が次のように変化します。
              <H args={{ name: 'pressNext' }} />
            </P>
            {AER.itzl}
            <P>ポイントは次の3点です:</P>
            <Ul>
              <UlLi>
                先ほどのように、弁当箱の下側に
                <H args={{ name: 'witch' }} />
                がある場合、必ずこのように変化します。
              </UlLi>
              <UlLi>
                上の<Emoji>3️⃣</Emoji>には何も起きません。
              </UlLi>
              <UlLi>
                変化後の弁当箱には
                <EmojiWithText letter={magicalVariableName} />や
                <Emoji>1️⃣</Emoji>や<InlineEmojiBoxesForQuestion />
                があるのに加え、
                <Strong>
                  <H args={{ name: 'witch' }} />
                  がまた出現しているのに注目です
                </Strong>
                。
              </UlLi>
            </Ul>
            {AER.gtnr}
            <P>
              <Strong>重要: このルールを覚える必要はありません！</Strong>
              とりあえず読み進めてみてください。
            </P>
          </>
        )
      },
      {
        title: <>魔女がもう一度</>,
        content: (
          <>
            <P>
              先に進めてみましょう。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.syfp}
          </>
        )
      }
    ]}
  />
)
