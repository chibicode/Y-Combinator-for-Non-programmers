/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import {
  Em,
  P,
  Strong,
  ExternalLink,
  Blockquote,
  Img,
  Ol,
  OlLi,
  InlineHeader,
  CenteredCode,
  Hr
} from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EpisodeCardList from 'src/components/EpisodeCardList'
import InlineEmojiBoxes from 'src/components/InlineEmojiBoxes'
import Emoji from 'src/components/Emoji'
import H from 'src/components/H'
import AER from 'src/components/AER'
import { spaces, fontSizes } from 'src/lib/theme'

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
                <Em>チューリングマシン</Em>
              </ExternalLink>
              」が、「空想上の最強の計算機」として有名になりました。このチューリングマシンは、近代のコンピュータ開発に大きな影響を与えました。
            </P>
            <EmojiSeparator
              emojis={['0️⃣', '📼', '1️⃣']}
              description={
                <>
                  チューリングマシンは、<Emoji>0️⃣</Emoji>と<Emoji>1️⃣</Emoji>
                  が書かれた無限の長さのテープ<Emoji>📼</Emoji>
                  でできた空想上の計算機です。ここでは紹介しませんが、とても興味深いので、ぜひ調べてみてください！
                </>
              }
            />
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
            <EmojiSeparator emojis={['💪', '🍱', '💪']} />
            <P>
              たとえば、みなさんが使われている<Strong>スマホ</Strong>
              は、非常に強力な計算機です。これは先ほど書いたように、
              <Strong>電卓という意味での計算機ではありません。</Strong>
              <Em>
                スマホのさまざまな機能を実現するために、膨大な量の計算が行われているから、非常に強力な計算機なのです。
              </Em>
            </P>
            <EmojiSeparator emojis={['💪', '📱', '💪']} />
            <P>
              たとえば、最新のスマホには<Strong>顔認証機能</Strong>
              があります。顔認証機能は、まずセンサーやカメラから顔のデータを数値化して取り込み、その数値をもとに膨大な計算を行い、最終的に本人かどうかを判断します。スマホが超強力な計算機であるからこそ、顔認証機能が実現できているのです。
            </P>
            <EmojiSeparator emojis={['👩🏻', '📱', '🧑🏿']} />
            <P>
              この「
              <Em>
                数値化された顔のデータから膨大な計算を行い、本人かどうかを判断する
              </Em>
              」という計算は、
              <Strong>理論上は弁当箱でも行うことができます</Strong>。
            </P>
            <EmojiSeparator emojis={['👩🏽', '🍱', '🧑']} />
            <P>
              今回学んだように、弁当箱は数字を暗号として表すことができ、四則演算や条件分岐、繰り返しを行うことができます。今回は紹介できませんでしたが、それ以上に複雑な計算も行うことができます。
            </P>
            <P>
              <Em>
                スマホが顔認証の際に行っている計算を弁当箱でやろうとすると、気が遠くなるほど複雑な弁当箱を用意しなければならないし、実行を終えるまでにも気が遠くなるほどの時間が必要かもしれません。
                <Strong>
                  しかし、理論上は可能なのです。これが、弁当箱は空想上の最強の計算機と言われる所以です。
                </Strong>
              </Em>
            </P>
            <EmojiSeparator emojis={['💪', '🍱', '💪']} />
            <P>
              繰り返しますが、
              <Em>
                どれだけ計算機(現代ならコンピュータやスマホ)が進化しようと、それで行うことができる計算は、弁当箱でも行うことができるのです。
              </Em>
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <InlineHeader>ちなみに:</InlineHeader> なぜ弁当箱は「
                <Strong>空想上の</Strong>
                」計算機なのか？と思われるかもしれません。
              </P>
              <P>
                「空想上の」と呼ぶ第一の理由は、少なくとも1930年代には弁当箱のような計算機を実際に作ることはできず、空想上で考え出されたアイデアだからです。第二の理由は、顔認証の計算ができるような、気が遠くなるほど複雑な弁当箱を作るには、世界中のスーパーコンピュータを集めても処理能力がおそらく足りないからです。
              </P>
              <EmojiSeparator emojis={['🤔', '💭', '🍱']} />
              <P>
                <Em>
                  理論上は弁当箱はどんな計算でもできるけど、実際には複雑な弁当箱を作ろうとしたら資源が足りないから、「空想上の」計算機、というわけです。
                </Em>
              </P>
            </>
          )
        }
      },
      {
        title: <>ラムダ計算</>,
        content: (
          <>
            <P>
              ここで、ひとつ謝らないといけないことがあります。
              <Em>実は、今まで嘘をついていました。</Em>
              <Strong>
                「弁当箱」という名前は、筆者が勝手につけたものです。
              </Strong>
            </P>
            <P>
              本来の名前は、「
              <Strong>
                <ExternalLink href="https://ja.wikipedia.org/wiki/%E3%83%A9%E3%83%A0%E3%83%80%E8%A8%88%E7%AE%97">
                  ラムダ計算
                </ExternalLink>
              </Strong>
              」と言います。アロンゾ・チャーチとスティーヴン・コール・クリーネによって1930年代に考案された空想上の計算機です。
            </P>
            <EmojiSeparator emojis={['🧓🏻', '🍱', '🧓🏻']} />
            <P>
              ラムダ計算の
              <Em>
                仕組みは弁当箱と同じですが、<Strong>記述の方法</Strong>
                はかなり違います。
              </Em>
              機能は同じだけど、見た目が違うということです。
            </P>
            <P>
              それを説明するために、こちらの弁当箱をラムダ計算の記述に置き換えてみましょう。当記事の一番最初に紹介した弁当箱です。
            </P>
            {AER.ilpo}
            <P>
              <Em>
                まず、ラムダ計算では料理を使わず、アルファベットを使います。
              </Em>
              それぞれアルファベットに置き換えてみると、こうなります:
            </P>
            {AER.ytcf}
            <P>
              <Em>次に、ラムダ計算ではマスを次のように配置します。</Em>
              下側にあった
              <InlineEmojiBoxes emojis={['🅰️', '🅰️']} />
              が一番左に来ており、その右にスペースを開けて上にあった
              <InlineEmojiBoxes emojis={['🅱️']} />
              を配置しています。
            </P>
            <div
              css={css`
                text-align: center;
                font-size: ${fontSizes(1.6)};
                margin: ${spaces(1.75)} 0;
              `}
            >
              <InlineEmojiBoxes emojis={['🅰️', '🅰️']} />{' '}
              <InlineEmojiBoxes emojis={['🅱️']} />
            </div>
            <P>
              最後に、ギリシャ文字の「<Strong>ラムダ</Strong>」(
              <Strong
                css={css`
                  font-size: ${fontSizes(1.4)};
                `}
              >
                {' '}
                λ{' '}
              </Strong>
              )などを使い、以下のように表記を変えます。これで、弁当箱をラムダ計算の記述に書き換えることができました。
            </P>
            <CenteredCode size="md">λA.A B</CenteredCode>
            <P>
              1930年代に考案されたラムダ計算は、このような見た目だったのです。
            </P>
            <Hr />
            <P>
              他の例も見てみましょう。たとえば、前回紹介した
              <Strong>
                <H args={{ name: 'yCombinator' }} />
              </Strong>
              をご覧ください。
            </P>
            {AER.news}
            <P>これを、ラムダ計算の記述に書き換えると、次のようになります。</P>
            <CenteredCode size="sm">λA.(λB.A(B B))(λB.A(B B))</CenteredCode>
            <P>
              大学の
              <H args={{ name: 'computerScience' }} />
              の授業で
              <H args={{ name: 'yCombinator' }} />
              について学ぶときは、おそらくこのラムダ計算の記述方法で学ぶはずです。なんとなく、弁当箱に比べて小難しそうな記述方法ですよね。特に数学が嫌いな人には敬遠されそうです。
            </P>
            <P>
              だからわたしは、「
              <Em>
                ラムダ計算の機能はそのままに、もっと分かりやすい見た目で表現できないか？
              </Em>
              」と考えました。
              <Strong>
                そこでわたしが思いついたのが、弁当箱という形でラムダ計算を表現することだったのです。
              </Strong>
            </P>
            <EmojiSeparator emojis={['🔠', '🤔', '🍱']} />
            <P>
              「弁当箱を使うことで、とっつきやすかった」と思っていただければ嬉しいです。
            </P>
          </>
        )
      }
    ]}
  />
)
