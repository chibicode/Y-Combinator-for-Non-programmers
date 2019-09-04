import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Strong,
  InlineHeader,
  Em,
  ExternalLink,
  Img
} from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import Emoji from 'src/components/Emoji'
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
              コンピュータを使えば情報を瞬時に検索できたり、美しいCGを描いたりすることができます。最近はAIを使って顔認証や会話ができるようになりました。
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
      },
      {
        title: <>計算機の歴史</>,
        content: (
          <>
            <P>
              コンピュータは計算機であるからこそ、
              <Strong>コンピュータの歴史はすなわち、計算機の歴史</Strong>
              なのです。
            </P>
            <P>
              歴史を振り返ると、たとえば昔の日本では、中国から伝わった
              <InlineHeader>そろばん</InlineHeader> <Emoji>🧮</Emoji>{' '}
              が計算機の主役でしたね。
            </P>
            <EmojiSeparator
              emojis={['🧮', '🏯', '🧮']}
              description={
                <>
                  昔の日本で「計算機」といえば
                  <br />
                  そろばんだった
                </>
              }
            />
            <P>
              一方、海の向こうのアメリカでは、1890年に「
              <InlineHeader>タビュレーティングマシン</InlineHeader>
              」という計算機が台頭しました。
            </P>
            <P>
              <Img
                src="/static/images/Hollerith_census_machine_at_the_Computer_History_Museum.jpg"
                alt="Hollerith_census_machine_at_the_Computer_History_Museum"
                size="medium"
                caption={
                  <>
                    シリコンバレーのコンピュータ歴史博物館に展示されているタビュレーティングマシン(
                    <ExternalLink href="https://commons.wikimedia.org/wiki/File:Hollerith_census_machine_at_the_Computer_History_Museum.jpg">
                      撮影: Anton Chiang, CC BY 2.0
                    </ExternalLink>
                    )
                  </>
                }
              />
            </P>
            <P>
              <Em>
                タビュレーティングマシンは、アメリカの国勢調査、すなわち国全体のアンケート調査を集計するために使われた計算機でした。
              </Em>
              パンチカードと呼ばれるマークシートのような紙に空いた穴を読み取って計算することで、大量のデータをすばやく集計できたのです。
              <Em>現代のエクセルのようなもの</Em>ですね。
            </P>
            <EmojiSeparator
              emojis={['📈', '📊', '📉']}
              description={
                <>
                  アメリカでは「タビュレーティングマシン」
                  <br />
                  という計算機が国勢調査で使われた
                </>
              }
            />
            <P>
              ちなみに、
              <Em>
                この計算機の発明者であるホレリスは、IBMの前身となる会社を創業しました。
              </Em>
              IBMはさらに強力な計算機を開発し続け、1960年代に世界一のコンピュータ企業になったのです。
            </P>
          </>
        )
      },
      {
        title: <>計算機「科学」のはじまり</>,
        content: (
          <>
            <P>
              上記の「タビュレーティングマシン」を皮切りに、計算機は20世紀に入ってどんどん進化していき、アナログだったものが電子化され、今の「コンピュータ」と呼ばれるような機械になっていきました。
            </P>
            <EmojiSeparator
              emojis={['✨', '💻', '✨']}
              description={<>計算機は20世紀にどんどん進化した</>}
            />
            <P>
              一方同時期に、<Strong>計算機について科学する学問</Strong>である、
              「<InlineHeader>コンピュータサイエンス = 計算機科学</InlineHeader>
              」 も生まれ、進化していきました。計算機科学の研究者たちは、「
              <Em>
                計算機の作り方や使い方をどう工夫すれば、より効率的に問題を解けるのか
              </Em>
              」といった問いに取り組んだのです。
            </P>
            <EmojiSeparator
              emojis={['💻', '🤔', '💻']}
              description={
                <>
                  <InlineHeader>計算機科学: </InlineHeader>
                  <br />
                  計算機の作り方や使い方をどう工夫
                  <br />
                  すれば、より効率的に問題を解けるのか
                </>
              }
            />
          </>
        )
      }
    ]}
  />
)
