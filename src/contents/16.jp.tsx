import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  HighlightBold,
  Bold,
  Em,
  ExternalLink,
  Img,
  CenteredCode,
  Pre,
  Code,
  Ol,
  OlLi,
  Hr
} from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiNumber from 'src/components/EmojiNumber'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import H from 'src/components/H'
import Emoji from 'src/components/Emoji'
import CustomEmoji from 'src/components/CustomEmoji'
import BubbleQuotes from 'src/components/BubbleQuotes'
import * as R from 'src/components/Runners'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import CardContent from 'src/components/CardContent'

export default () => (
  <EpisodeCardList
    cards={[
      {
        type: 'summary',
        title: <>これが最後のページです！</>,
        content: (
          <>
            <P>
              これが最後のページです。ここまで読んでくださり、ありがとうございました！
            </P>
            <EmojiSeparator
              emojis={['🎉', '🤗', '🎉']}
              description={<>お疲れ様でした！</>}
            />
          </>
        )
      },
      {
        title: <>そもそも弁当箱というアイデアはどこから来たのか</>,
        content: (
          <>
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
                        <HighlightBold>
                          弁当箱にできない計算はあるのかな？
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              この質問に答えるためには、「
              <HighlightBold>
                そもそも弁当箱というアイデアはどこから来たのか
              </HighlightBold>
              」という質問にまず答える必要があります。
            </P>
            <EmojiSeparator
              emojis={['❓', '🍱', '❓']}
              description={
                <>
                  そもそも、弁当箱というアイデアは
                  <br />
                  どこから来たのか？
                </>
              }
            />
            <P>
              そのためには、
              <HighlightBold>
                ラムダ村の世界ではなく、現実世界の歴史
              </HighlightBold>
              を学ばないといけません。
            </P>
            <EmojiSeparator
              emojis={['📜', '🧐', '📚']}
              description={<>現実世界の歴史を学ばないといけない</>}
            />
            <P>
              というわけで、これから現実世界の歴史の話をします。ラムダ村の話からはいったん離れますが、このページの最後で戻ってきます。
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <Bold>ちなみに:</Bold>{' '}
                これからコンピュータやコンピュータサイエンスの歴史について語りますが、
                <Em>
                  簡潔さを優先するために、正確性をあえて犠牲にしたり、ほとんどの出来事を省いたりしています
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
              <Bold>
                <Em>コンピュータ</Em>サイエンスと魔法のYコンビネータ
              </Bold>
              」ですが、はじめに、「
              <HighlightBold>そもそもコンピュータとは何か</HighlightBold>
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
              しかし、コンピュータは本質的には「
              <HighlightBold>計算機</HighlightBold>
              」なのです。
            </P>
            <EmojiSeparator
              emojis={['➕', '✖️', '💻', '➖', '➗']}
              description={
                <>
                  コンピュータは本質的には「
                  <HighlightBold>計算機</HighlightBold>」
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
            </P>
            <P>
              たとえば、検索エンジンは膨大な数のデータをランク付けするために計算を行います。AIが顔認証をするときは、センサーが取り込んだ顔のデータを数値化し、それをもとに複雑な計算を行って本人かどうかを確かめているのです。
            </P>
            <EmojiSeparator
              emojis={['🔢', '🔢', '💻', '🔢', '🔢']}
              description={<>コンピュータは、大量の計算を行える計算機</>}
            />
            <P>
              だから、コンピュータは「<HighlightBold>計算機</HighlightBold>
              」なのですね。
            </P>
          </>
        )
      },
      {
        title: <>計算機の歴史</>,
        content: (
          <>
            <P>
              コンピュータは計算機であるからこそ、
              <HighlightBold>
                コンピュータの歴史はすなわち、計算機の歴史
              </HighlightBold>
              なのです。
            </P>
            <P>
              歴史を振り返ると、たとえば昔の日本では、中国から伝わった
              <Bold>そろばん</Bold> <Emoji>🧮</Emoji> が計算機の主役でしたね。
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
              <Bold>タビュレーティングマシン</Bold>
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
              マークシートのような紙に空いた穴を読み取って計算することで、大量のデータをすばやく集計できたのです。
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
              上記の「タビュレーティングマシン」を皮切りに、計算機は20世紀に入ってどんどん進化していきました。やがて計算機は電子化され、今の「コンピュータ」と呼ばれるような機械になっていきました。
            </P>
            <EmojiSeparator
              emojis={['✨', '💻', '✨']}
              description={<>計算機は20世紀にどんどん進化した</>}
            />
            <P>
              いっぽう同時期に、
              <HighlightBold>計算機について科学する学問</HighlightBold>
              である「
              <Bold>コンピュータサイエンス＝計算機科学</Bold>」
              も生まれ、進化していきました。
            </P>
            <P>
              そんなコンピュータサイエンスの研究者たちは、「
              <Em>
                コンピュータ＝計算機の作り方や使い方をどう工夫すれば、より効率的に問題を解けるのか
              </Em>
              」といった問いに取り組んだのです。
            </P>
            <EmojiSeparator
              emojis={['💻', '🤔', '💻']}
              description={
                <>
                  <Bold>コンピュータサイエンス: </Bold>
                  <br />
                  計算機の作り方や使い方をどう工夫
                  <br />
                  すれば、より効率的に問題を解けるのか
                </>
              }
            />
            <P>
              そして、<Em>コンピュータサイエンスの礎を築いた</Em>
              と言われているのが、英国の数学者だった
              <Bold>アラン・チューリング</Bold> <Emoji>🧑🏻</Emoji>{' '}
              と、米国の数学者だった
              <Bold>アロンゾ・チャーチ</Bold> <Emoji>👨🏻‍🦳</Emoji>{' '}
              です。ふたりの研究が、学問としてのコンピュータサイエンスの大本になっているのです。
            </P>
            <EmojiSeparator
              emojis={['🧑🏻', '👨🏻‍🦳']}
              description={
                <>
                  <Bold>アラン・チューリング</Bold>と<br />
                  <Bold>アロンゾ・チャーチ</Bold>による
                  <br />
                  研究が、コンピュータサイエンスの礎となった
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
                チューリングとチャーチは1930年代に、「
                <HighlightBold>ヒルベルトの決定問題</HighlightBold>
                」という、とある難しい数学の問題に別々に取り組んでいました。
              </Em>
              それがどんな問題かを説明するのは非常に難しいので省略しますが、ふたりが
              <HighlightBold>その問題をどのようにして解いたか</HighlightBold>
              が興味深かったのです。
            </P>
            <EmojiSeparator
              emojis={['🧑🏻', '❓', '👨🏻‍🦳']}
              description={
                <>
                  <Bold>チューリング</Bold>と<Bold>チャーチ</Bold>は、
                  <br />
                  とある数学の問題に別々に取り組んでいた
                </>
              }
            />
            <P>
              その問題を解くために、ふたりはそれぞれ別々の「
              <HighlightBold>空想上の計算機</HighlightBold>
              」を考案する必要がありました。「
              <Bold>空想上の計算機</Bold>
              」とはすなわち、
              <Em>
                実際には(少なくとも1930年代の当時は)存在しないけど、もし存在したとしたら非常に複雑な計算ができる、
                <HighlightBold>仮想上の計算機</HighlightBold>
              </Em>
              のことです。
            </P>
            <EmojiSeparator
              emojis={['❓', '💭', '💻', '❓']}
              description={
                <>
                  <HighlightBold>空想上の計算機</HighlightBold>とは、
                  <br />
                  実際には存在しないが、もしも存在したら
                  <br />
                  非常に複雑な計算ができる
                  <br />
                  <HighlightBold>仮想上の計算機</HighlightBold>のこと。
                </>
              }
            />
            <P>
              「
              <HighlightBold>
                もし仮にそんな計算機がこの世に存在したら…
              </HighlightBold>
              」と仮定したうえで理論を展開することで、ふたりはそれぞれ別々に、先述の問題を解くことができたのです。
            </P>
            <EmojiSeparator emojis={['🧑🏻', '💭', '💻']} noBottomMargin />
            <EmojiSeparator
              emojis={['👨🏻‍🦳', '💭', '💻']}
              noTopMargin
              description={
                <>
                  先述の問題を解くために、ふたりはそれぞれ
                  <br />「<HighlightBold>空想上の計算機</HighlightBold>
                  」を頭の中で設計した。
                  <br />「<Em>もしこういった計算機が存在したら…</Em>」と
                  <br />
                  仮定した上で理論を展開して問題を解いた
                </>
              }
            />
            <P>
              実は、この時にふたりが別々に考案した、当時の技術では作ることができない「
              <HighlightBold>空想上の計算機</HighlightBold>
              」が、
              <Em>
                その後のコンピュータの開発や、プログラミング言語の開発、ひいてはコンピュータサイエンスそのものに大きな影響を与えました。
              </Em>
            </P>
            <P>
              言い換えると、このふたりは「ヒルベルトの決定問題」という数学の問題を解いていたのですが、
              <Em>
                その問題を解くためにふたりが考えたアイデアが偶然にも、近代のコンピュータサイエンスの土台になった
              </Em>
              のです。
            </P>
            <Hr />
            <P>
              1930年代半ばに、<HighlightBold>チューリング</HighlightBold>
              は先述の問題を解くために「
              <Bold>チューリングマシン</Bold>
              」という空想上の計算機を考案しました。「このチューリングマシンが仮に存在したら…」と論を展開することで、彼は先述の数学の問題を解くことができたのです。
            </P>
            <P>
              そして、ここでは詳しく説明しませんが、
              <Em>
                このチューリングマシンの仕組みはシンプルながら、現代のコンピュータの仕組みと非常に似ており、近代的なコンピュータの発展に大きな影響を与えたのです。
              </Em>
            </P>
            <EmojiSeparator
              emojis={['🧑🏻', '💭', '💻']}
              description={
                <>
                  チューリングは、「
                  <Bold>チューリングマシン</Bold>」
                  <br />
                  という、現代のコンピュータに似ている
                  <br />
                  空想上の計算機を頭の中で考え、
                  <br />
                  それを使って先述の問題を解いた
                </>
              }
            />
            <P>
              一方、ほぼ時を同じくして、<HighlightBold>チャーチ</HighlightBold>
              は先述の問題を解くために「
              <HighlightBold>ラムダ計算</HighlightBold>
              」という空想上の計算機を考案しました。では、この「
              <HighlightBold>ラムダ計算</HighlightBold>
              」とはどんな仕組みだったのでしょうか。
            </P>
            <EmojiSeparator
              emojis={['👨🏻‍🦳', '💭', '💻']}
              description={
                <>
                  チャーチは、「
                  <Bold>ラムダ計算</Bold>」という
                  <br />
                  空想上の計算機を頭の中で考えた
                </>
              }
            />
            <P>
              <Em>
                実は、みなさんはすでに「
                <HighlightBold>ラムダ計算</HighlightBold>
                」がどんな仕組みかを知っています。
              </Em>
              そう、
              <HighlightBold>
                <Emoji>🍱</Emoji> 弁当箱のことです。
              </HighlightBold>
            </P>
            <EmojiSeparator
              emojis={['👨🏻‍🦳', '💭', '🍱']}
              description={
                <>
                  チャーチが考えた空想上の計算機
                  <br />「<Bold>ラムダ計算</Bold>
                  」は、<HighlightBold>弁当箱と仕組みが同じ</HighlightBold>
                </>
              }
            />
          </>
        )
      },
      {
        title: <>ラムダ計算と弁当箱</>,
        content: (
          <>
            <P>
              チャーチが考えた空想上の計算機「
              <HighlightBold>ラムダ計算</HighlightBold>
              」は、<Em>見た目は弁当箱とは違いますが、仕組みは同じ</Em>でした。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>✨</Emoji>,
                <CustomEmoji type="lambda" />,
                <Emoji>✨</Emoji>
              ]}
              description={<>ラムダ計算。弁当箱と仕組みは同じ</>}
            />
            <P>
              たとえば、こちらが「<Bold>ラムダ計算</Bold>
              」の記述式です。一番左にある「<HighlightBold>λ</HighlightBold>
              」の記号はギリシャ文字で「
              <HighlightBold>ラムダ</HighlightBold>
              」と呼ぶことから、「ラムダ計算」と呼ばれています。
            </P>
            <CenteredCode size="md">λA.B C</CenteredCode>
            <P>
              上のラムダ計算の記述式は、以下の弁当箱とまったく同じことを表しています。
            </P>
            <R.Kzkg>
              上のラムダ計算の記述式は、
              <br />
              この弁当箱とまったく同じ
            </R.Kzkg>
            <P>
              上の弁当箱は、
              <H args={{ name: 'play' }} /> すると <Emoji>🅱️</Emoji>{' '}
              になります。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            <R.Unxf></R.Unxf>
            <P>
              <Em>
                それと同じで、先ほどの「ラムダ計算」の記述式も、
                <H args={{ name: 'play' }} /> すると
                <HighlightBold>B</HighlightBold>が残るのです。
              </Em>
            </P>
            <CenteredCode size="md">λA.B C</CenteredCode>
            <ExpressionRunnerSeparator />
            <CenteredCode size="md">B</CenteredCode>
            <P>
              もちろん、もっと複雑なラムダ計算の記述式もあります。たとえば、こちらをご覧ください。この記述式は、何を表しているか分かりますか？
            </P>
            <CenteredCode size="sm">λA.(λB.A(B B))(λB.A(B B))</CenteredCode>
            <P>
              答えを言うと、上の記述式は
              <HighlightBold>Yコンビネータを表している</HighlightBold>
              のです。つまり、下の弁当箱とまったく同じです。
            </P>
            <R.Rjho>
              上のラムダ計算の記述式は、
              <br />「<HighlightBold>Yコンビネータ</HighlightBold>
              」の弁当箱と同じ
            </R.Rjho>
            <P>
              つまり本稿では、
              <HighlightBold>
                実はみなさんにラムダ計算を教えていたのです。
              </HighlightBold>
              <Em>
                ラムダ計算の記述式は見た目が複雑なので、
                <H args={{ name: 'bentoBoxPuzzle' }} />
                という形で教えることで、とっつきやすくしていた
              </Em>
              というわけですね。
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="lambda" />,
                <CustomEmoji type="singleArrow" />,
                <Emoji>🍱</Emoji>
              ]}
              description={
                <>
                  本稿では、実はラムダ計算を教えていた。
                  <br />
                  ラムダ計算の記述式は見た目が複雑なので、
                  <br />
                  <H args={{ name: 'bentoBoxPuzzle' }} />
                  という形で教える
                  <br />
                  ことで、とっつきやすくしていた。
                </>
              }
            />
            <P>
              そして繰り返しますが、このラムダ計算は、1930年代に考えられた「
              <HighlightBold>空想上の計算機</HighlightBold>」というわけです。
            </P>
          </>
        )
      },
      {
        title: <>村人の質問に戻ると…</>,
        content: (
          <>
            <P>ここで、ラムダ村の村人の質問に戻りましょう。</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>弁当箱にできない計算はあるのかな？</P>
                    </>
                  )
                }
              ]}
            />
            <P>
              先ほど、「<HighlightBold>弁当箱とラムダ計算は同じ</HighlightBold>
              」という話をしましたね。つまり、上の質問は以下のように言い換えることができます。
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <HighlightBold>ラムダ計算にできない計算</HighlightBold>
                        はあるのかな？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>では、ラムダ計算にできない計算はあるのでしょうか？</P>
            <P>
              結論から言うと、
              <HighlightBold>
                ラムダ計算は、現代のコンピュータが行うことができるすべての計算を行うことができます。
              </HighlightBold>
              つまり、あなたのパソコンやスマホができる計算はすべて、ラムダ計算にもできるということです。
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="lambda" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>💻</Emoji>
              ]}
              description={
                <>
                  ラムダ計算は、現代のコンピュータが行える
                  <br />
                  すべての計算を行うことができる
                </>
              }
            />
            <P>
              ということはつまり、
              <HighlightBold>
                弁当箱も、現代のコンピュータが行えるすべての計算を行うことができる
              </HighlightBold>
              というわけですね。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>💻</Emoji>
              ]}
              description={
                <>
                  弁当箱も、現代のコンピュータが行える
                  <br />
                  すべての計算を行うことができる
                </>
              }
            />
            <P>
              このことは、1930年代に証明されました。「
              <Em>
                これから先にどれほど強力な計算機が登場しても、その計算機ができる計算は、理論上はラムダ計算にもできる
              </Em>
              」ということが数学的に証明されたのです。もちろん、この証明は難しすぎるので省略します。
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="lambda" />,
                <Emoji>🆚</Emoji>,
                <Emoji>💻</Emoji>
              ]}
              description={
                <>
                  「どれほど強力な計算機が登場しても、
                  <br />
                  その計算機ができる計算は、
                  <br />
                  理論上はラムダ計算にもできる」と
                  <br />
                  1930年代に証明された
                </>
              }
            />
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <Bold>ちなみに:</Bold>{' '}
                チャーチが考案したラムダ計算だけでなく、チューリングが考案した空想上の計算機「チューリングマシン」も、現代のコンピュータが行えるすべての計算を(理論上は)行うことができます。このことも、1930年代に証明されました。
              </P>
            </>
          )
        }
      },
      {
        title: <>ラムダ計算の影響</>,
        content: (
          <>
            <P>
              先ほど説明したように、ラムダ計算はもともと、とある数学の問題を解くためにチャーチが考案したものでした。しかし、ラムダ計算もまた、
              <Em>コンピュータサイエンスの発展に大きな影響を与えた</Em>のです。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>✨</Emoji>,
                <CustomEmoji type="lambda" />,
                <Emoji>✨</Emoji>
              ]}
              description={
                <>
                  ラムダ計算は、コンピュータサイエンスの
                  <br />
                  発展に大きな影響を与えた
                </>
              }
            />
            <P>
              特に、ラムダ計算は
              <HighlightBold>数々のプログラミング言語</HighlightBold>
              に影響を与えました。現存するプログラミング言語の多くには、ラムダ計算の名残が残っています。
            </P>
            <P>
              たとえば、執筆時点で世界で最も人気のプログラミング言語のひとつである、
              <HighlightBold>Python (パイソン)</HighlightBold>
              という言語があります。ちなみにパイソンとは大蛇のことで、Python言語のロゴにもヘビの絵が描かれています。
            </P>
            <EmojiSeparator
              emojis={['🐍', '🐍', '🐍']}
              description={<>Python言語</>}
            />
            <P>
              このPython言語にも、「<HighlightBold>lambda</HighlightBold>{' '}
              (ラムダ)」という機能があります。たとえば、以下のPython言語のコードをご覧ください。
            </P>
            <CenteredCode size="sm">(lambda A: A)('B')</CenteredCode>
            <P>
              上のPython言語のコードは、以下のラムダ計算とほぼ同じ意味です。
            </P>
            <CenteredCode size="md">λA.A B</CenteredCode>
            <P>
              これは、弁当箱に例えると以下のようになり、実行結果は{' '}
              <Emoji>🅱️</Emoji> になります。
            </P>
            <R.Aklf>下が左右とも同じなので…</R.Aklf>
            <ExpressionRunnerSeparator />
            <R.Gemh>
              上にあった <Emoji>🅱️</Emoji> が残る
            </R.Gemh>
            <P>
              だから同じように、今回紹介したPythonのコードも、実行すると結果は{' '}
              <Code>B</Code> になります。
            </P>
            <CenteredCode size="sm">(lambda A: A)('B')</CenteredCode>
            <ExpressionRunnerSeparator />
            <CenteredCode size="sm">'B'</CenteredCode>
            <P>
              まとめると、
              <Em>
                Python言語のような人気のプログラミング言語も、1930年代に考えられたラムダ計算の影響を間接的に受けている
              </Em>
              のです。
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="lambda" />,
                <CustomEmoji type="singleArrow" />,
                <Emoji>🐍</Emoji>
              ]}
              description={
                <>
                  Python言語のような
                  <br />
                  人気のプログラミング言語も、
                  <br />
                  1930年代に考えられた
                  <br />
                  ラムダ計算の影響を間接的に受けている
                </>
              }
            />
          </>
        )
      },
      {
        title: <>工夫すること</>,
        content: (
          <>
            <P>
              そろそろ終わりが近づいてきましたが、最後に「
              <Bold>コンピュータサイエンス＝計算機科学</Bold>
              」についてもう一言だけお話をさせてください。
            </P>
            <P>
              それは、
              <Em>
                「<HighlightBold>計算機を工夫すること</HighlightBold>
                」が、コンピュータサイエンスではとても大事
              </Em>
              というお話です。
            </P>
            <ExpressionRunnerCaptionOnly>
              <HighlightBold>重要:</HighlightBold> 計算機を工夫することが、
              <br />
              コンピュータサイエンスではとても大事
            </ExpressionRunnerCaptionOnly>
            <P>
              今回紹介したラムダ計算、すなわち弁当箱は、
              <Em>仕組みはとてもシンプルです</Em>
              。弁当箱の基本の法則は、初級その3〜5で紹介したように、非常にシンプルです。
            </P>
            <R.Zzxj>弁当箱の基本の法則は非常にシンプル</R.Zzxj>
            <ExpressionRunnerSeparator />
            <R.Keck />
            <ExpressionRunnerSeparator />
            <R.Qoms />
            <ExpressionRunnerSeparator />
            <R.Mhgm />
            <ExpressionRunnerSeparator />
            <R.Osqo />
            <P>
              しかし、こんなシンプルな弁当箱でも、現代のコンピュータが行えるすべての計算を行うことができるのです。
              <HighlightBold>
                それができる理由は、弁当箱を工夫すれば、四則演算や、条件分岐や、繰り返しを行うことができるからです。
              </HighlightBold>
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>➕</Emoji>,
                <Emoji>✖️</Emoji>,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="condition" />,
                <Emoji>🔁</Emoji>
              ]}
              description={
                <>
                  弁当箱を工夫すれば、四則演算や、
                  <br />
                  条件分岐や、繰り返しを行うことができる
                </>
              }
            />
            <P>
              たとえば今回紹介した通り、Yコンビネータの弁当箱を使えば、繰り返しを行うことができますよね。他にも工夫次第で、さまざまな計算を行うことができます。
            </P>
            <R.Rjho>
              「<HighlightBold>Yコンビネータ</HighlightBold>」の弁当箱を使えば
              <br />
              繰り返しを行うことができる
            </R.Rjho>
            <P>
              コンピュータサイエンスは、「
              <Em>
                計算機(コンピュータ)の作り方や使い方をどう工夫すれば、より効率的に問題を解けるのか
              </Em>
              」について考える学問です。
            </P>
            <P>
              そして、今回学んだ弁当箱は、
              <Em>シンプルでも工夫次第で複雑な計算ができる計算機です。</Em>
              そんな弁当箱には、
              <HighlightBold>
                コンピュータサイエンスのエッセンスが詰まっている
              </HighlightBold>
              と思うのです。
            </P>
            <EmojiSeparator
              emojis={['✨', '🍱', '✨']}
              description={
                <>
                  弁当箱は、シンプルでも工夫次第で
                  <br />
                  複雑な計算ができる計算機。だからこそ
                  <br />
                  コンピュータサイエンスのエッセンスが
                  <br />
                  詰まっている
                </>
              }
            />
          </>
        )
      },
      {
        title: <>コンピュータサイエンスの他の分野でも同じ</>,
        content: (
          <>
            <P>
              今回は時間の都合で、たくさんあるコンピュータサイエンスの題材のうち、ラムダ計算(弁当箱)しか紹介できませんでした。
            </P>
            <P>
              とはいえ、コンピュータサイエンスの他の分野を学ぶときも、やることは弁当箱のときと同じです。なぜならどの分野でも、弁当箱のように「
              <Em>
                計算機(コンピュータ)を<HighlightBold>工夫して</HighlightBold>
                、問題を解く」ことが大事になってくるからです。
              </Em>
            </P>
            <P>
              コンピュータサイエンスのどの分野でも、
              <HighlightBold>キーワードは「工夫」</HighlightBold>
              なのです。たとえば、「
              <Em>
                コンピュータを<HighlightBold>どう工夫して</HighlightBold>
                使えば、美しいCGや、人工知能や、仮想通貨が作れるだろう？
              </Em>
              」といった感じですね。
            </P>
            <EmojiSeparator
              emojis={['✨', '🤖', '💰']}
              description={
                <>
                  コンピュータをどう工夫して使えば、
                  <br />
                  美しいCGや、人工知能や、
                  <br />
                  仮想通貨が作れるだろう？
                </>
              }
            />
            <P>
              長くなりましたが、本稿を読んで、「
              <Em>
                コンピュータサイエンスの他の分野でも、コンピュータの工夫の仕方を学んでみたい
              </Em>
              」と思ってくだされば嬉しいです。
            </P>
          </>
        )
      },
      {
        type: 'summary',
        title: <>まとめ</>,
        content: (
          <>
            <P>本稿で学んだことを短くまとめると、以下のようになります。</P>
            <Ol>
              <OlLi>
                <Em>
                  弁当箱は、工夫次第で四則演算や、条件分岐や、繰り返しといった複雑な計算ができる。また、繰り返しを行う弁当箱を
                  <HighlightBold>Yコンビネータ</HighlightBold>と呼ぶ。
                </Em>
              </OlLi>
              <OlLi>
                <Em>
                  弁当箱は、1930年代に考案された空想上の計算機「ラムダ計算」が基になっている。ラムダ計算は、現代のコンピュータが行えるすべての計算を行うことができ、また多くのプログラミング言語に影響を与えた。
                </Em>
              </OlLi>
              <OlLi>
                <Em>
                  コンピュータサイエンスは「
                  <HighlightBold>
                    計算機(コンピュータ)をどう工夫して問題を解くか
                  </HighlightBold>
                  」を考える学問。工夫次第で複雑な計算ができる弁当箱には、そのエッセンスが詰まっている。
                </Em>
              </OlLi>
            </Ol>
            <EmojiSeparator emojis={['✨', '🍱', '✨']} />
          </>
        )
      },
      {
        title: <>その後: チューリング</>,
        content: (
          <>
            <P>最後に、「その後」の話をしましょう。</P>
            <P>
              まず、先述したイギリスの数学者で、空想上の計算機「
              <Bold>チューリングマシン</Bold>」を考案した
              <HighlightBold>アラン・チューリング</HighlightBold>
              。彼はチューリングマシンを考案したのち、イギリスからアメリカに渡り、
              <Em>ラムダ計算(弁当箱)を考案したチャーチのもとで学びました。</Em>
            </P>
            <EmojiSeparator
              emojis={['🧑🏻', '🎓', '👨🏻‍🦳']}
              description={
                <>
                  <Bold>チューリングマシン</Bold>を考案した
                  <br />
                  <HighlightBold>アラン・チューリング</HighlightBold>は、
                  <br />
                  <Bold>ラムダ計算(弁当箱)</Bold>を考案した
                  <br />
                  <HighlightBold>チャーチ</HighlightBold>に弟子入りした
                </>
              }
            />
            <P>
              その後チューリングはイギリスに戻り、第2次世界大戦でドイツ軍の暗号通信「エニグマ」を解読しました。その後、彼は人工知能の分野でも先駆的な役割を果たし、「人工知能の父」とも呼ばれるようになりました。
            </P>
            <EmojiSeparator
              emojis={['✨', '🧑🏻', '✨']}
              description={<>チューリングは「人工知能の父」に</>}
            />
            <P>
              チューリングは同性愛者で、当時のイギリスでは同性愛行為が違法でした。ある日、若い男性との性的関係を持ったことが発覚し、チューリングは有罪になりました。彼は薬品投与による「化学的去勢」を受け続け、42歳になる直前に毒物を服用して亡くなってしまいました。
            </P>
            <P>
              チューリングが亡くなってから55年後の2009年、英政府はチューリングに対する迫害を謝罪し、2013年には亡きチューリングに恩赦が与えられました。
            </P>
            <P>
              <Em>
                そしてこの記事の執筆中、2019年7月15日に、イギリスの新しい50ポンド紙幣の肖像にチューリングが採用されることになったのです。
              </Em>
              その50ポンド紙幣には、彼が考えた空想上の計算機「チューリングマシン」のイラストが載っています。(参考:{' '}
              <ExternalLink href="https://www.bbc.com/japanese/48991921">
                BBC
              </ExternalLink>
              )
            </P>
          </>
        )
      },
      {
        title: <>その後: ラムダ村</>,
        content: (
          <>
            <P>ではその後、ラムダ村はどうなったかというと…</P>
            <EmojiSeparator emojis={['🐶', '🙂', '😈', '👧🏻']} />
            <P>
              <Bold>村人たち</Bold>
              は、何でも計算できる弁当箱を村の外の人たちに売りさばき、大金持ちになろうと悪巧み中です。
            </P>
            <EmojiSeparator
              emojis={['🍱', '💰', '🤑', '💰', '🍱']}
              description={
                <>
                  弁当箱は何でも計算できるから、
                  <br />
                  高く売れる！がっぽり稼ぐぞ！
                </>
              }
            />
            <P>
              <Bold>悪魔</Bold>
              は暇になったので、日々<Bold>ミニオン</Bold>
              に新しい芸を覚えさせようとしていますが、なかなかうまくいっていません。
            </P>
            <EmojiSeparator
              emojis={['😈', '🐶', '❓']}
              description={
                <>
                  ミニオン、「おすわり」しなさい！
                  <br />
                  何度言ったらわかるんだ！
                </>
              }
            />
            <P>
              そして、年頃になった<Bold>サヤちゃん</Bold>
              は、好きなアーティストのコンサートにもっと参戦したいからと言って、ラムダ村を出ていきました。
            </P>
            <EmojiSeparator
              emojis={['👧🏻', '❤️', '👨‍🎤']}
              description={<>今日も自担が尊い〜</>}
            />
            <P>
              以上でおしまいです！ラムダ村の名前の由来も、今回お分かりになったかと思います。ここまでお付き合いくださり、本当にありがとうございました。
            </P>
          </>
        )
      },
      {
        type: 'sideNote',
        title: <>プログラマの方へのメッセージ</>,
        preview: {
          text: <>続きを読む</>,
          content: (
            <>
              <P>
                本稿をお読みになったプログラマの方の中には、「
                <Em>
                  これはプログラミング未経験者にとっては難しすぎるのではないか
                </Em>
                」と思われた方もいるかもしれません。そんな方に伝えたいことがあります。
              </P>
            </>
          )
        },
        content: (
          <>
            <CardContent
              preview={{
                text: <>プログラミングで試してみる</>,
                content: (
                  <>
                    <Hr />
                    <P>
                      個人的な話で恐縮ですが、わたしは今まで「
                      <Em>
                        この人はほんとうに頭がいいな、知的好奇心が旺盛だな
                      </Em>
                      」と思った方に数多く出会いました。たとえば、わたしは20代のときに母を癌で亡くしているのですが、母がお世話になったお医者様の方々と話したときは、「こんなに賢い人に出会ったのは初めてだ」と思ったものです。
                    </P>
                    <EmojiSeparator
                      emojis={['💉', '👩🏽‍⚕️', '💊']}
                      description={
                        <>
                          冒頭でコンピュータサイエンスを
                          <br />
                          医学に例えたのも、そんなお医者様に
                          <br />
                          出会ったことが理由です
                        </>
                      }
                    />
                    <P>
                      そして、今までわたしが「
                      <Em>
                        この人はほんとうに頭がいいな、知的好奇心が旺盛だな
                      </Em>
                      」と思った人々の内訳を見てみると、
                      <Em>
                        プログラマの方よりも、プログラマでない方のほうが遥かに多い
                      </Em>
                      のです。もちろん、これは当たり前ですね。プログラマは世の中では圧倒的少数派ですから、母数のケタが違います。
                    </P>
                    <P>
                      そういった、「
                      <HighlightBold>
                        世の中にたくさんいる、プログラマではない、とても知的好奇心が旺盛な人々向けにコンピュータサイエンスの入門書を書くとしたら、どういう教材がいいだろう？
                      </HighlightBold>
                      」と考えた結果、完成したのが本稿です。
                    </P>
                    <P>
                      だから、そういう方々に「
                      <Em>知的に面白い</Em>
                      」と思っていただくために、難易度はあえて高めに設定しました。本稿は
                      <Em>
                        「プログラミング未経験者向けの入門書」とは謳っていますが、「誰にでも、何ならサルにでも分かる入門書」だとは謳っていない
                      </Em>
                      理由は、そういうところにあります。
                    </P>
                    <P>
                      しかし同時に、
                      <Em>
                        せっかく時間をかけて書くのであれば、できるかぎり読者層の裾野を広げたい
                      </Em>
                      とも思いました。どうせなら、たくさんの人に読んでもらいたい。だから、難易度は妥協しないけれど、説明はできる限り平易にしようと心がけました。
                    </P>
                    <P>
                      また、冒頭でも書いた通り、いきなり高度な内容を理解することができれば、「
                      <Em>これが理解できたんだから、他の内容も学べるだろう</Em>
                      」と自信がつきます。高度な内容を分かりやすく書くことができれば、こういったメリットもあります。
                    </P>
                    <P>
                      努力はしたものの、それでも本稿がまだまだ難しいのは承知しております。本稿はあくまで、「
                      <Em>邪道な</Em>
                      」入門書なのです。ただ、その上でひとこと言わせていただくと、
                      <Em>
                        内容を完全には理解できなくても、雰囲気だけでも楽しんでくださった方や、「よくわからないけど、コンピュータサイエンスって面白そう」と感じてくださった方が、ひとりでも多くいればいいな
                      </Em>
                      と思っています。
                    </P>
                    <BubbleQuotes
                      quotes={[
                        {
                          type: 'devil',
                          children: (
                            <>
                              <P>
                                悪魔のわたしに言わせれば…「
                                <Em>
                                  入門書を必要以上に難しくしたら、その分野に苦手意識を持つ人が増える
                                </Em>
                                」というのは確かにそうだと思う。
                              </P>
                              <P>
                                一方、「
                                <Em>
                                  ある分野の入門書や入門コースが知的に面白かったから、その分野に興味を持つようになった
                                </Em>
                                」という人も、一定数いると思う。大抵は、知的好奇心が旺盛な人たちだ。わたしはどうせ発信するなら、そういう人たちに好かれるものを作りたい。
                              </P>
                              <P>
                                そして、
                                <Em>
                                  「知的に面白い」と思ってもらえる入門書には、ある程度の難しさは欠かせない
                                </Em>
                                と思う。簡単すぎたら退屈だからだ。
                              </P>
                              <P>
                                「難しすぎて敬遠してしまう人」の数を抑えつつ、「難しくて面白いと思ってくれる人」の数を増やす、というのは
                                <HighlightBold>トレードオフ</HighlightBold>
                                だ。どこでバランスを取るかは教材作成者が自由に決めるべきで、
                                <Em>「これが正解」というのは無い</Em>
                                と思うんだ。
                              </P>
                            </>
                          )
                        }
                      ]}
                    />
                    <P>
                      <Bold>ちなみに:</Bold> プログラマの方で、「
                      <Em>Yコンビネータを実際にプログラミングで試してみたい</Em>
                      」と思った方は、↓の「プログラミングで試してみる」を押してみてください。
                    </P>
                  </>
                )
              }}
            >
              <Hr />
              <P>
                下のコードは、
                <Em>
                  JavaScriptでYコンビネータを使って「
                  <EmojiNumber number={4} /> の階乗」、すなわち{' '}
                  <EmojiNumber number={4} /> <Emoji>✖️</Emoji>{' '}
                  <EmojiNumber number={3} /> <Emoji>✖️</Emoji>{' '}
                  <EmojiNumber number={2} /> <Emoji>✖️</Emoji>{' '}
                  <EmojiNumber number={1} /> を計算するコード
                </Em>
                です。
              </P>
              <Pre>
                <Code
                  children={`console.log(
  (a =>
    (b => a(c => b(b)(c)))(b =>
      a(c => b(b)(c))
    ))(f => n =>
    n === 0 ? 1 : n * f(n - 1)
  )(4)
)`}
                ></Code>
              </Pre>
              <P>
                上のコードをブラウザの開発者ツールにコピーして実行すると、「
                <EmojiNumber number={4} /> の階乗」である「
                <Code>24</Code>
                」が出力されます。また、下から2行目にある <Code>4</Code>{' '}
                をたとえば <Code>5</Code> に変えると、
                <EmojiNumber number={5} /> の階乗である「<Code>120</Code>
                」が出力されます。
              </P>
              <P>
                ふつう、JavaScriptで階乗を計算するには <Code>for</Code> や{' '}
                <Code>while</Code> といったループ機能、<Code>reduce</Code>{' '}
                といった関数、または関数の再帰を使います。しかし、
                <Em>
                  Yコンビネータを使えば、それらを一切使わずに階乗を計算できる
                </Em>
                のです。
              </P>
            </CardContent>
          </>
        )
      }
    ]}
  />
)
