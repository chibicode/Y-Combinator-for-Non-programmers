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
        ),
        footer: {
          content: (
            <>
              <P>
                <InlineHeader>ちなみに:</InlineHeader>{' '}
                これからコンピュータやコンピュータサイエンスの歴史について非常に手短に語りますが、
                <Em>
                  わかりやすさや簡潔さを優先するために、正確性をあえて犠牲にしたり、さまざまな出来事を省いたりしています
                </Em>
                。
              </P>
              <P>
                コンピュータ史に詳しい方のなかには、怒り心頭に発する方が出てくるかもしれません。雑な歴史の紹介であることをお許しください。
              </P>
            </>
          )
        }
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
            <P>
              この<Em>計算機科学の礎を築いた</Em>
              と言われているのが、英国の数学者である
              <InlineHeader>アラン・チューリング</InlineHeader>
              と、米国の数学者である
              <InlineHeader>アロンゾ・チャーチ</InlineHeader>
              です。ふたりの研究が、学問としてのコンピュータサイエンスの大本になっているのです。
            </P>
            <EmojiSeparator
              emojis={['🧑🏻', '🧓🏻']}
              description={
                <>
                  <InlineHeader>アラン・チューリング</InlineHeader>と<br />
                  <InlineHeader>アロンゾ・チャーチ</InlineHeader>による
                  <br />
                  研究が、計算機科学の礎となった
                </>
              }
            />
          </>
        )
      },
      {
        title: <>空想上の計算機</>,
        content: (
          <>
            <P>
              <Em>
                チューリングとチャーチは1930年代に、とある難しい論理の問題に別々に取り組んでいました。
              </Em>
              それがどんな問題かを説明するのは非常に難しいので省略しますが、ふたりが
              <Strong>その問題をどのようにして解いたか</Strong>
              が興味深かったのです。
            </P>
            <EmojiSeparator
              emojis={['🧑🏻', '❓', '🧓🏻']}
              description={
                <>
                  <InlineHeader>チューリング</InlineHeader>と
                  <InlineHeader>チャーチ</InlineHeader>は、
                  <br />
                  とある論理の問題に別々に取り組んでいた
                </>
              }
            />
            <P>
              その問題を解くために、ふたりはそれぞれ別々の「
              <Strong>空想上の計算機</Strong>
              」を頭の中で考案しました。「
              <InlineHeader>空想上の計算機</InlineHeader>
              」とはすなわち、
              <Em>
                実際には(少なくとも1930年代の当時は)存在しないけど、もし存在したとしたら非常に複雑な計算ができる、
                <Strong>仮想上の計算機</Strong>
              </Em>
              のことです。
            </P>
            <P>
              「<Strong>もし仮にそんな計算機がこの世に存在したら…</Strong>
              」と仮定したうえで理論を展開することで、先述の論理の問題を解くことができたのです。
            </P>
            <EmojiSeparator emojis={['🧑🏻', '💭', '💻']} noBottomMargin />
            <EmojiSeparator
              emojis={['🧓🏻', '💭', '💻']}
              noTopMargin
              description={
                <>
                  問題を解くために、ふたりはそれぞれ
                  <br />「<Strong>空想上の計算機</Strong>」を頭の中で設計した。
                  <br />「<Em>もしこういった計算機が存在したら…</Em>」と
                  <br />
                  仮定した上で理論を展開して問題を解いた
                </>
              }
            />
            <P>
              実は、この時にふたりが別々に考案した、当時の技術では作ることができない「
              <Strong>空想上の計算機</Strong>
              」が、
              <Em>
                その後のコンピュータの開発や、プログラミング言語の開発、ひいては計算機科学そのものに大きな影響を与えました。
              </Em>
            </P>
            <P>
              イギリスの数学者のチューリングは「
              <InlineHeader>チューリングマシン</InlineHeader>
              」という空想上の計算機を考案しました。ここでは詳しく説明しませんが、
              <Em>
                このチューリングマシンの仕組みはシンプルながら、現代のコンピュータの仕組みと非常に似ていた
              </Em>
              のです。
            </P>
            <EmojiSeparator
              emojis={['🧑🏻', '💭', '💻']}
              description={
                <>
                  チューリングは、「
                  <InlineHeader>チューリングマシン</InlineHeader>」
                  <br />
                  という、現代のコンピュータに似ている
                  <br />
                  空想上の計算機を頭の中で考えた
                </>
              }
            />
            <P>
              一方、ほぼ時を同じくして、アメリカの数学者のチャーチは「
              <Strong>ラムダ計算</Strong>
              」という空想上の計算機を考案しました。では、この「
              <Strong>ラムダ計算</Strong>
              」とはどんな仕組みだったのでしょうか。
            </P>
            <EmojiSeparator
              emojis={['🧓🏻', '💭', '💻']}
              description={
                <>
                  チャーチは、「
                  <InlineHeader>ラムダ計算</InlineHeader>」という
                  <br />
                  空想上の計算機を頭の中で考えた
                </>
              }
            />
            <P>
              <Em>
                実は、みなさんはすでに「
                <Strong>ラムダ計算</Strong>
                」がどんな仕組みかを知っています。
              </Em>
              そう、
              <Strong>
                <Emoji>🍱</Emoji> 弁当箱のことです。
              </Strong>
            </P>
            <EmojiSeparator
              emojis={['🧓🏻', '💭', '🍱']}
              description={
                <>
                  チャーチが考えた空想上の計算機
                  <br />「<InlineHeader>ラムダ計算</InlineHeader>
                  」は、<Strong>弁当箱と仕組みが同じ</Strong>
                </>
              }
            />
          </>
        )
      }
    ]}
  />
)
