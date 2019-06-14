import React from 'react'
import {
  Em,
  P,
  Strong,
  ExternalLink,
  Blockquote
} from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EpisodeCardList from 'src/components/EpisodeCardList'
import H from 'src/components/H'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>最後のページです！</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              これが最後のページです。ここまで読んでくださり、ありがとうございます！
            </P>
            <EmojiSeparator emojis={['🎉', '🤗', '🎉']} />
            <P>
              最後に、
              <Strong>
                弁当箱と
                <H args={{ name: 'computerScience' }} />
                のつながり
              </Strong>
              について語って終わりにしたいと思います。
            </P>
            <EmojiSeparator emojis={['🍱', '🤔', '🤖']} />
          </>
        )
      },
      {
        title: <>コンピュータサイエンス</>,
        content: (
          <>
            <P>
              当記事の題名に入っている「
              <Strong>コンピュータサイエンス</Strong>
              」という学問について、冒頭で以下のように説明しました:
            </P>
            <Blockquote>
              <H
                args={{
                  name: 'csDescription'
                }}
              />
            </Blockquote>
            <EmojiSeparator emojis={['🔎', '🗺', '📷']} />
            <P>今回は、この説明の続きをしていきます！</P>
          </>
        )
      },
      {
        title: <></>,
        content: (
          <>
            <P>
              実はコンピュータサイエンスは、日本語では「
              <ExternalLink href="https://ja.wikipedia.org/wiki/%E8%A8%88%E7%AE%97%E6%A9%9F%E7%A7%91%E5%AD%A6">
                <Strong>計算機科学</Strong>
              </ExternalLink>
              」と訳されています。
            </P>
            <P>
              コンピュータというとパソコンやタブレット、スマホ、ロボットを思い浮かべるかもしれませんが、コンピュータは本質的には
              <Strong>「計算機」</Strong>
              です。たとえば美しいCGや賢いAIも、大量の計算を短時間で行うことによって実現されています。
            </P>
            <EmojiSeparator emojis={['💻', '📱', '🤖']} />
            <P>
              だから、
              <Em>
                「コンピュータサイエンス = 計算機科学」は、
                <Strong>「計算機」について考える学問</Strong>なのです
              </Em>
              。
            </P>
          </>
        )
      },
      {
        title: <>弁当箱も計算機</>,
        content: (
          <>
            <EmojiSeparator emojis={['💡', '🧓🏻', '🍱']} />
            <P>
              そして実は、
              <Em>
                <H args={{ name: 'bentoBoxPuzzle' }} />
                と非常に似た計算機が、1930年代にコンピュータ科学者達によって考案されているのです。
              </Em>
              その計算機は「
              <ExternalLink href="https://ja.wikipedia.org/wiki/%E3%83%A9%E3%83%A0%E3%83%80%E8%A8%88%E7%AE%97">
                <Strong>ラムダ計算</Strong>
              </ExternalLink>
              」と呼ばれました。シンプルで高性能なこの計算機は、特にプログラミング言語の開発に大きな影響を与えました。
            </P>
          </>
        )
      },
      {
        title: (
          <>ほとんどの計算ができる、最もシンプルな計算機はどんなものだろう？</>
        ),
        content: (
          <>
            <P>
              コンピュータサイエンスは、「計算機」について考える学問です。そして学問なので、さまざまな
              <Strong>問い(命題)</Strong>
              があります。
            </P>
            <EmojiSeparator emojis={['❓', '🤔', '❓']} />
            <P>
              ここでは、重要な問いをひとつ見ていきます。その問いとは、以下のようなものです:
            </P>
            <P>
              <Strong>
                「ほとんどの計算ができる、最もシンプルな計算機はどんなものだろう？」
              </Strong>
            </P>
          </>
        )
      },
      {
        title: <>?</>,
        content: (
          <>
            <P>
              先ほど話したように、弁当箱は
              <Em>
                足し算・掛け算・引き算・割り算といった四則演算ができる計算機です
              </Em>
              。
            </P>
            <P>
              弁当箱が面白いのは、
              <Strong>仕組みがシンプルでありながら高性能である</Strong>
              ということです。
              <H args={{ name: 'play' }} />
              する際のルールも、暗号の法則も、すぐに覚えられるくらい単純です。しかし、
              <Em>
                その単純さとは裏腹に、足し算や掛け算といった遥かに複雑な計算を行うことができる
              </Em>
              のです。
            </P>
            <EmojiSeparator emojis={['➕', '🤨', '✖️']} />
            <P>
              一方、
              <Em>
                四則演算ができるくらいでは、問いにあったように
                <Strong>「ほとんどの計算ができる」とは言えない</Strong>
              </Em>
              でしょう。もっと難しい計算ができないといけません。
            </P>
            <P>
              というわけで、次のページからは、弁当箱を使ったさらにハイレベルな計算を紹介していきます。数学的に難しいわけではないので、ご心配なく！
            </P>
          </>
        )
      }
    ]}
  />
)
