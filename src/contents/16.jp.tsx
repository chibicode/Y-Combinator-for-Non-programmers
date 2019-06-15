import React from 'react'
import {
  Em,
  P,
  Strong,
  ExternalLink,
  Blockquote,
  Img,
  Ol,
  OlLi,
  InlineHeader
} from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EpisodeCardList from 'src/components/EpisodeCardList'
import Emoji from 'src/components/Emoji'
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
        title: (
          <>
            <H args={{ name: 'computerScience' }} />
          </>
        ),
        content: (
          <>
            <P>
              当記事の題名に入っている「
              <Strong>
                <H args={{ name: 'computerScience' }} />
              </Strong>
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
        ),
        footer: {
          content: (
            <>
              <P>
                <InlineHeader>ちなみに:</InlineHeader> これからコンピュータや
                <H args={{ name: 'computerScience' }} />
                の歴史について非常に手短に語りますが、
                <Em>
                  わかりやすさや簡潔さを優先するために、正確性をあえて犠牲にしたり、さまざまな出来事を省いたりしています
                </Em>
                。コンピュータ史に詳しい方のなかには、怒り心頭に発する方が出てくるかもしれません。雑な歴史の紹介であることをお許しください。
              </P>
            </>
          )
        }
      },
      {
        title: <>計算機科学</>,
        content: (
          <>
            <P>
              実は
              <H args={{ name: 'computerScience' }} />
              には「
              <ExternalLink href="https://ja.wikipedia.org/wiki/%E8%A8%88%E7%AE%97%E6%A9%9F%E7%A7%91%E5%AD%A6">
                <Strong>計算機科学</Strong>
              </ExternalLink>
              」という日本語訳もあります。
            </P>
            <EmojiSeparator emojis={['💻', '📱', '🤖']} />
            <P>
              コンピュータというとパソコンやタブレット、スマホ、ロボットを思い浮かべるかもしれませんが、コンピュータは本質的には
              <Strong>「計算機」</Strong>です。
            </P>
            <P>
              <Strong>電卓という意味での計算機ではなく</Strong>、 「
              <Em>膨大な量の計算を行うことで、便利な機能を実現している</Em>
              」という意味での計算機です。たとえば美しいCGや賢いAIも、大量の計算を短時間で正確に行うことによって実現されています。
            </P>
            <EmojiSeparator emojis={['🔢', '🔢', '🔢']} />
            <P>
              <Em>計算機は時代とともに進化してきました。</Em>
              たとえば昔の日本では、中国から伝わったそろばん <Emoji>
                🧮
              </Emoji>{' '}
              が計算機の主役でした。
            </P>
            <P>
              アメリカでは、1890年の国勢調査において、
              <Em>
                <ExternalLink href="https://ja.wikipedia.org/wiki/%E3%83%91%E3%83%B3%E3%83%81%E3%82%AB%E3%83%BC%E3%83%89">
                  パンチカード
                </ExternalLink>
                と呼ばれるマークシートのような紙に空いた穴を読み取り、データを集計できる計算機「
                <ExternalLink href="https://ja.wikipedia.org/wiki/%E3%82%BF%E3%83%93%E3%83%A5%E3%83%AC%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%83%9E%E3%82%B7%E3%83%B3">
                  タビュレーティングマシン
                </ExternalLink>
                」が使われました。
              </Em>
              これを発明した
              <ExternalLink href="https://ja.wikipedia.org/wiki/%E3%83%8F%E3%83%BC%E3%83%9E%E3%83%B3%E3%83%BB%E3%83%9B%E3%83%AC%E3%83%AA%E3%82%B9">
                ハーマン・ホレリス
              </ExternalLink>
              は、後のIBMになる会社を創業しています。IBMはパンチカードを読み取る機械を更に進化させ、1960年代に世界一のコンピュータ企業になりました。
            </P>
            <P>
              <Img
                src="/static/images/Hollerith_census_machine_at_the_Computer_History_Museum.jpg"
                alt="Hollerith_census_machine_at_the_Computer_History_Museum"
                size="medium"
                caption={
                  <>
                    シリコンバレーのコンピュータ歴史博物館には、ホレリスのタビュレーティングマシンが展示されています。(
                    <ExternalLink href="https://commons.wikimedia.org/wiki/File:Hollerith_census_machine_at_the_Computer_History_Museum.jpg">
                      撮影: Anton Chiang, CC BY 2.0
                    </ExternalLink>
                    )
                  </>
                }
              />
            </P>
            <P>
              20世紀には、計算機の進化とは別に、「
              <Strong>計算機について研究する学問</Strong>
              」も発展していきました。研究者たちは、「
              <Em>
                計算機の作り方や使い方をどう工夫すれば、より効率的に問題を解けるのか
              </Em>
              」「<Em>そもそも、計算機にできない計算はあるのか</Em>
              」といった問いに取り組んだのです。こうして、
              <H args={{ name: 'computerScience' }} /> =
              計算機科学が注目を浴びるようになりました。
            </P>
            <EmojiSeparator emojis={['🧮', '🤔', '🧮']} />
          </>
        )
      },
      {
        title: <>空想上の計算機</>,
        content: (
          <>
            <P>
              <H args={{ name: 'computerScience' }} />
              が発展しはじめたころ、<Strong>空想上の計算機</Strong>
              について考える研究者が出てきました。
              <Em>
                空想上の計算機とはその名の通り、物理的には存在しない(または作ることができない)計算機のことです。
              </Em>
            </P>
            <EmojiSeparator emojis={['🤔', '💭', '❓']} />
            <P>
              空想上の計算機について考える研究者は、1930年代に次のような問いに取り組んでいました。(分かりやすさを優先した、雑な説明です)
            </P>
            <Ol>
              <OlLi>
                <Em>これから、物理的な計算機はどんどん進化していくだろう。</Em>
              </OlLi>
              <OlLi>
                <Em>
                  しかし、計算機がどれほど進化しようと、「
                  <Strong>計算機で行える計算の限界</Strong>
                  」がいつかはくるはずだ。
                </Em>
              </OlLi>
              <OlLi>
                <Em>
                  では、
                  <Strong>
                    「計算機で行える計算の限界」とは、どんな計算なんだろう？
                  </Strong>
                </Em>
              </OlLi>
              <OlLi>
                <Em>
                  それを知るために、まず空想上でいいから、「
                  <Strong>最強の計算機</Strong>
                  」を考案してみよう。
                </Em>
              </OlLi>
              <OlLi>
                <Em>
                  「最強」とはすなわち、これからどれほど計算機が進化しようが、それを上回ることができないということ。
                </Em>
              </OlLi>
              <OlLi>
                <Em>
                  これからどれほど計算機が進化しようが、それにできる計算であれば、「空想上の最強の計算機」でも同じ計算ができる、ということだ。
                </Em>
              </OlLi>
              <OlLi>
                <Strong>
                  ということは、その「空想上の最強の計算機」が行うことができる計算のすべてが、「計算機で行える計算の限界」というわけだ。
                </Strong>
              </OlLi>
              <OlLi>
                <Strong>
                  では、その「空想上の最強の計算機」とはどんなものだろう？
                </Strong>
              </OlLi>
              <OlLi>
                <Em>
                  そうそう、その「空想上の最強の計算機」は、
                  <Strong>できるだけシンプルな設計にしたい</Strong>
                  。そのほうが論じやすいからだ。
                </Em>
              </OlLi>
            </Ol>
            <EmojiSeparator emojis={['🤔', '💭', '🤖']} />
            <P>
              <Em>
                こうして、1930年代に「空想上の最強の計算機」がいくつか考案されました。
              </Em>
              ここでは詳しく説明しませんが、アラン・チューリングが1936年に発表した「
              <ExternalLink href="https://ja.wikipedia.org/wiki/%E3%83%81%E3%83%A5%E3%83%BC%E3%83%AA%E3%83%B3%E3%82%B0%E3%83%9E%E3%82%B7%E3%83%B3">
                チューリングマシン
              </ExternalLink>
              」が、「空想上の最強の計算機」として有名になりました。このチューリングマシンは、近代のコンピュータ開発に大きな影響を与えました。
            </P>
            <P>
              <Em>
                さらに同時期に、「このチューリングマシンと同じくらい最強な、空想上の計算機」が考案されました。みなさんは、その計算機のことをすでに知っています。
              </Em>
            </P>
            <P>
              <Strong>そう、弁当箱のことです。</Strong>
            </P>
            <EmojiSeparator emojis={['🤔', '💭', '🍱']} />
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                ここまで読んで、「言っていることが難しすぎる」「何が何だか分からない」と思われても大丈夫です。すぐに具体例を用いて解説します！
              </P>
            </>
          )
        }
      },
      {
        title: <>弁当箱は「空想上の最強の計算機」</>,
        content: (
          <>
            <P>
              <Strong>弁当箱は、空想上の最強の計算機のひとつです。</Strong>
              これはつまり、
              <Strong>
                どれだけ計算機が進化しようと、それで行うことができる計算は、弁当箱でも行うことができる
              </Strong>
              という意味です。
            </P>
            <EmojiSeparator emojis={['✨', '🍱', '✨']} />
            <P>たとえば、みなさんが使われているスマホは、</P>
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
              <H args={{ name: 'computerScience' }} />
              は、「計算機」について考える学問です。そして学問なので、さまざまな
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
