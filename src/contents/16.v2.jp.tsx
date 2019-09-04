import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, InlineHeader, Em } from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import BubbleQuotes from 'src/components/BubbleQuotes'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>これが最後のページです！</>,
        content: (
          <>
            <P>
              これが最後のページです。ここまで読んでくださり、ありがとうございます！
            </P>
            <EmojiSeparator
              emojis={['🎉', '🤗', '🎉']}
              description={<>お疲れ様でした！</>}
            />
            <P>
              さて、前回の最後に、ラムダ村の村人は次のような質問をしました。
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <Strong>弁当箱にできない計算はあるのかな？</Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              この質問に答えるためには、「
              <Strong>
                そもそも弁当箱というアイデアはどうやって生まれたのか
              </Strong>
              」という質問にまず答える必要があります。
            </P>
            <EmojiSeparator
              emojis={['❓', '🍱', '❓']}
              description={
                <>
                  そもそも、弁当箱というアイデアは
                  <br />
                  どうやって生まれたのか？
                </>
              }
            />
            <P>
              そのためには、
              <Strong>ラムダ村の世界ではなく、現実世界の歴史</Strong>
              を知る必要があります。
            </P>
            <EmojiSeparator
              emojis={['📜', '🧐', '📚']}
              description={<>現実世界の歴史を知る必要がある</>}
            />
            <P>
              というわけで、これから現実世界の話をしますが、お付き合いいただけると嬉しいです。ラムダ村の話からはいったん離れますが、このページの最後で戻ってきます。
            </P>
          </>
        )
      },
      {
        title: <>そもそもコンピュータとは何か</>,
        content: (
          <>
            <P>
              この記事のタイトルは「
              <InlineHeader>
                <Em>コンピュータ</Em>サイエンスと魔法のYコンビネータ
              </InlineHeader>
              」ですが、はじめに、「
              <Strong>そもそもコンピュータとは何か</Strong>
              」という質問について考えてみましょう。
            </P>
            <EmojiSeparator
              emojis={['🤔', '💻', '❓']}
              description={<>そもそもコンピュータとは何か？</>}
            />
            <P>
              「コンピュータ」というとパソコンやタブレット、スマホ、ロボットを思い浮かべる方が多いかもしれません。
            </P>
            <EmojiSeparator emojis={['💻', '📱', '🤖']} />
            <P>
              しかし、コンピュータは本質的には「<Strong>計算機</Strong>
              」なのです。
            </P>
            <EmojiSeparator
              emojis={['➕', '✖️', '💻', '➖', '➗']}
              description={
                <>
                  コンピュータは本質的には「<Strong>計算機</Strong>」
                </>
              }
            />
            <P>
              コンピュータを使えば情報を瞬時に検索できたり、美しいCGを描いたりすることができます。最近はAIが顔認証や会話をするようになりました。
            </P>
            <P>
              <Em>
                こういった便利な機能は、
                コンピュータが大量の計算を瞬時に行えるからこそ実現されているのです。
              </Em>
              だから、コンピュータは「<Strong>計算機</Strong>」なのですね。
            </P>
            <EmojiSeparator
              emojis={['🔢', '🔢', '💻', '🔢', '🔢']}
              description={<>コンピュータは、大量の計算を行える計算機</>}
            />
          </>
        )
      }
    ]}
  />
)
