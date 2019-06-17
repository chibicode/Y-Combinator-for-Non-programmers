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
  Ul,
  UlLi,
  InlineHeader,
  CenteredCode,
  Pre,
  Code,
  Hr
} from 'src/components/ContentTags'
import { InlineEmojiBoxesForCondition } from 'src/components/InlineEmojiBoxes'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EpisodeCardList from 'src/components/EpisodeCardList'
import InlineEmojiBoxes from 'src/components/InlineEmojiBoxes'
import Emoji from 'src/components/Emoji'
import InlinePrioritiesLabel from 'src/components/InlinePrioritiesLabel'
import BottomRightBadge from 'src/components/BottomRightBadge'
import EmojiNumber from 'src/components/EmojiNumber'
import H from 'src/components/H'
import AER from 'src/components/AER'
import { colors, spaces, fontSizes } from 'src/lib/theme'
import { BasicRules } from 'src/contents/2.jp'

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
                <Strong>しかし、理論上は可能なのです。</Strong>
              </Em>
            </P>
            <EmojiSeparator emojis={['💪', '🍱', '💪']} />
            <P>
              <Em>
                どれだけ計算機(現代ならコンピュータやスマホ)が進化しようと、それで行うことができる計算は、弁当箱でも行うことができる。
                <Strong>
                  この事実は、ここでは詳しく書きませんが、1930年代に研究者によって発見されました。
                </Strong>
                そしてこれが、弁当箱は空想上の最強の計算機と言われる所以です。
              </Em>
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <InlineHeader>ところで:</InlineHeader> なぜ弁当箱は「
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
                「弁当箱」というコンセプトは、筆者が勝手に考えたものです。
              </Strong>
            </P>
            <P>
              弁当箱は「
              <Strong>
                <ExternalLink href="https://ja.wikipedia.org/wiki/%E3%83%A9%E3%83%A0%E3%83%80%E8%A8%88%E7%AE%97">
                  ラムダ計算
                </ExternalLink>
              </Strong>
              」をもとにしており、これはアロンゾ・チャーチとスティーヴン・コール・クリーネによって1930年代に考案された空想上の計算機です。
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
              が一番左に来ており、その右にスペースをあけて上にあった
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
              1930年代に考案されたラムダ計算は、このような見た目だったのです。ちなみに、なぜギリシャ文字の「
              <Strong>ラムダ</Strong>」が使われたのかは
              <ExternalLink href="https://en.wikipedia.org/wiki/Lambda_calculus#Origin_of_the_lambda_symbol">
                諸説あるようです
              </ExternalLink>
              。
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
              について学ぶときは、おそらくこのラムダ計算の記述方法で学ぶはずです。
              <ExternalLink href="https://ja.wikipedia.org/wiki/%E4%B8%8D%E5%8B%95%E7%82%B9%E3%82%B3%E3%83%B3%E3%83%93%E3%83%8D%E3%83%BC%E3%82%BF">
                Wikipediaにも、この記述方法で載っています
              </ExternalLink>
              。なんとなく、弁当箱に比べて小難しそうな記述方法ですよね。特に数学が嫌いな人には敬遠されそうです。
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
            <P>まとめると、</P>
            <Ul>
              <UlLi>
                <Em>
                  弁当箱は筆者のアイデアですが、それは1930年代に考えられた空想上の最強の計算機「ラムダ計算」がもとになっています。
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  ラムダ計算は複雑な見た目なので、とっつきやすい見た目の弁当箱を説明に使うことで、読者の方の心理的なハードルを下げようとした、というわけです。
                </Em>
              </UlLi>
            </Ul>
          </>
        )
      },
      {
        title: <>ラムダ計算とプログラミング言語</>,
        content: (
          <>
            <P>
              こちらがラムダ計算で記述した
              <H args={{ name: 'yCombinator' }} />
              ですが、
            </P>
            <CenteredCode size="sm">λA.(λB.A(B B))(λB.A(B B))</CenteredCode>
            <P>
              これを見て、なんとなく「<Em>プログラミング言語みたい</Em>
              」と思いませんか？プログラミング経験者の方も、未経験者の方も、「これはプログラミング言語だよ」と言われれば、頷いてしまうのではないでしょうか。
            </P>
            <P>
              <Em>
                1930年代に考案されたラムダ計算は、後に誕生したいくつかのプログラミング言語の設計に大きな影響を与えました。
              </Em>
              現存するプログラミング言語の多くには、ラムダ計算の名残が残っています。
            </P>
            <Hr />
            <P>
              たとえば、執筆時点で世界で最も使われているプログラミング言語のひとつで、特にAI開発で人気の
              <Strong>Python (パイソン)</Strong>
              という言語があります。ちなみにパイソンとは大蛇のことで、Python言語のロゴにもヘビの絵が描かれています。
            </P>
            <EmojiSeparator emojis={['🐍', '🐍', '🐍']} />
            <P>
              <Strong>
                そのPython言語で
                <H args={{ name: 'yCombinator' }} />
                を記述すると、次のようになります。
              </Strong>
            </P>
            <Pre>
              <Code
                children={`lambda a: (
    lambda b: a(lambda c: (b(b))(c))
)(lambda b: a(lambda c: (b(b))(c)))`}
              ></Code>
            </Pre>
            <P>
              <Em>
                <Strong>lambda</Strong>{' '}
                (ラムダ)という単語が使われており、それ以外もラムダ計算の
                <H args={{ name: 'yCombinator' }} />
                となんとなく似ていますよね。
              </Em>
            </P>
            <P>
              <Strong>
                まとめると、Python言語のような現在人気のプログラミング言語にも、1930年代に考えられたラムダ計算の名残が残っているのです。
              </Strong>
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <InlineHeader>ちなみに:</InlineHeader> Python言語の
                <H args={{ name: 'yCombinator' }} />
                で使われているアルファベットをよく見ると、<Code>a</Code>と
                <Code>b</Code>
                以外に
                <Code>c</Code>が使われています。<Code>c</Code>
                が使われている理由は、Python言語の仕様がラムダ計算と微妙に異なるからです。専門用語を使うと、言語の
                <ExternalLink href="https://ja.wikipedia.org/wiki/%E8%A9%95%E4%BE%A1%E6%88%A6%E7%95%A5">
                  評価戦略
                </ExternalLink>
                が「値渡し」か「名前渡し」かの違いによるものです。
              </P>
            </>
          )
        }
      },
      {
        type: 'sideNote',
        title: <>余談: プログラミングができる方へ</>,
        content: (
          <>
            <P>
              <Em>
                プログラミングができる方は、以下のPython言語のコードを実行してみてください。
              </Em>
              (Pythonのバージョンは
              <Strong>3</Strong>です)
            </P>
            <Pre>
              <Code
                children={`print(
    (
`}
              ></Code>
              <Code
                css={css`
                  color: ${colors('pink600')};
                `}
                children={`        lambda a: (
            lambda b: a(lambda c: (b(b))(c))
        )(lambda b: a(lambda c: (b(b))(c)))`}
              ></Code>
              <Code
                css={css`
                  color: ${colors('blue400')};
                `}
                children={`
    )(
        lambda f: lambda n: 1
        if n == 0
        else n * f(n - 1)`}
              ></Code>
              <Code
                children={`
    )(
        5
    )
)`}
              ></Code>
            </Pre>
            <P>コードをよく見てみると、</P>
            <Ul>
              <UlLi>
                <Strong
                  css={css`
                    color: ${colors('pink600')};
                  `}
                >
                  ピンクの文字
                </Strong>
                の部分は、先述したPython言語の
                <H args={{ name: 'yCombinator' }} />
                です。
              </UlLi>
              <UlLi>
                <Strong
                  css={css`
                    color: ${colors('blue400')};
                  `}
                >
                  青の文字
                </Strong>
                の部分には、条件分岐(<Code>if</Code>と<Code>else</Code>
                )・掛け算・1を引く計算があります。
              </UlLi>
              <UlLi>
                一番下に数字の
                <EmojiNumber number={5} />
                があります。
              </UlLi>
            </Ul>
            <P>
              すなわちこれは、
              <Strong>
                <H args={{ name: 'yCombinator' }} />
                を使って
                <H args={{ name: 'inlineFactorial', start: 5 }} />
                を計算するPython言語のコードです。
              </Strong>
              だからこれを実行すると、
              <H args={{ name: 'factorialComputation', start: 5 }} />
              が出力されます。
            </P>
            <P>
              もちろん、一番下の
              <EmojiNumber number={5} />
              をたとえば
              <EmojiNumber number={4} />
              に変えて実行すれば、
              <H args={{ name: 'factorialComputation', start: 4 }} />
              が計算できます。
            </P>
            <EmojiSeparator emojis={['🔁', '🐍', '🔁']} />
            <P>
              本来、Pythonで繰り返し処理を行うときは、<Code>for</Code>
              などのループ機能を使うか、関数を定義して
              <Strong>再帰処理</Strong>
              を行います。
              <Em>
                しかし上記の例のように、
                <H args={{ name: 'yCombinator' }} />
                を使えば、<Code>for</Code>や再帰処理を一切使わずに、
                <Code>lambda</Code>
                だけで繰り返し処理を行うことも可能なのです。
              </Em>
            </P>
            <P>
              言いかえると、
              <Strong>
                <Code>lambda</Code>
                が備わっているプログラミング言語なら、ループ機能や再帰機能が備わっていなくても、
                <H args={{ name: 'yCombinator' }} />
                を使うことで繰り返し処理を行うことができるのです。
              </Strong>
            </P>
          </>
        )
      },
      {
        title: <>弁当箱はシンプル</>,
        content: (
          <>
            <P>
              文字数も残り少なくなってまいりました。
              <Strong>ここから、話を弁当箱に戻します。</Strong>
              (弁当箱とラムダ計算は、記述方法が違うだけで機能は同じなので、この話はラムダ計算にも当てはまります。)
            </P>
            <EmojiSeparator emojis={['✨', '🍱', '✨']} />
            <P>
              弁当箱は、<Em>法則としてはとてもシンプルです。</Em>
              基本的な法則は、初級その2で紹介した以下の4つしかありません。
            </P>
            <Hr />
            <BasicRules includeFuncUnbound />
            <Hr />
            <P>これ以外の法則は、</P>
            <Ul>
              <UlLi>
                初級その3〜その5で紹介した「<Strong>実行の順番</Strong>
                」(
                <InlinePrioritiesLabel>2</InlinePrioritiesLabel>より
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
                を先にやる等)
              </UlLi>
              <UlLi>
                上級その1で紹介した「
                <Strong>結果が変わるのを避ける</Strong>」(
                <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                に同じ料理がある場合は、
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />と
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                を別の料理に変える)
              </UlLi>
            </Ul>
            <P>
              しかありません。弁当箱の法則はたったこれだけ。
              <Strong>非常にシンプル</Strong>なのです。
            </P>
            <EmojiSeparator
              size="sm"
              nodes={[
                <InlinePrioritiesLabel>2</InlinePrioritiesLabel>,
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>,
                <Emoji>✅</Emoji>,
                <Emoji>🍱</Emoji>,
                <Emoji>❌</Emoji>,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />,
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
              ]}
            />
            <P>
              しかし、
              <Em>
                こんなシンプルな弁当箱でも、<Strong>工夫すること</Strong>
                で非常に複雑な計算を行うことができます。
              </Em>
              今回紹介しただけでも、以下のことができます。
            </P>
            <Ul>
              <UlLi>
                <Em>
                  弁当箱の暗号を使って<Strong>数字</Strong> <Emoji>🔢</Emoji>{' '}
                  として表すことができる。
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  弁当箱の暗号を使って<Strong>四則演算</Strong>
                  を行うことができる。
                  <Emoji>➕</Emoji> <Emoji>✖️</Emoji> <Emoji>➖</Emoji>
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  弁当箱の暗号を使って<Strong>条件分岐</Strong>ができる。{' '}
                  <InlineEmojiBoxesForCondition type="condition" />{' '}
                  <InlineEmojiBoxesForCondition type="trueCase" />{' '}
                  <InlineEmojiBoxesForCondition type="falseCase" />
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  <H args={{ name: 'yCombinator' }} />
                  を使って<Strong>繰り返し処理</Strong>ができる。
                </Em>
              </UlLi>
            </Ul>
            <P>
              弁当箱は、今回紹介できなかったさらに複雑な計算も行うことができます。コンピュータにできる計算なら、理論上は弁当箱でも実行できるのです。
            </P>
            <EmojiSeparator emojis={['✨', '🍱', '✨']} />
            <P>
              <Em>
                弁当箱はシンプルだけど、
                <Strong>工夫の力で</Strong>、最強の計算機になれるのです。
              </Em>
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <InlineHeader>余談:</InlineHeader> じゃあ、
                <Em>弁当箱にできない計算はあるの？</Em>
                と思われた方がいるかもしれません。
                <Em>
                  実は、弁当箱にも、どんなに進化した計算機(コンピュータ)にも絶対に解けない計算問題は存在します。
                </Em>
                それは「
                <ExternalLink href="https://ja.wikipedia.org/wiki/%E5%81%9C%E6%AD%A2%E6%80%A7%E5%95%8F%E9%A1%8C">
                  <Strong>停止性問題</Strong>
                </ExternalLink>
                」という特殊な計算問題です。難しいのでここでは説明しませんが、興味のある方は調べてみてください。
              </P>
            </>
          )
        }
      },
      {
        type: 'summary',
        title: (
          <>
            <H args={{ name: 'computerScience' }} />
            とは
          </>
        ),
        content: (
          <>
            <P>
              当記事では、
              <Strong>
                シンプルな法則しかない弁当箱でも、工夫して
                <H args={{ name: 'yCombinator' }} />
                などを作ることによって、さまざまな計算が行えることを証明しました。
              </Strong>
              このことに、
              <H args={{ name: 'computerScience' }} />
              のエッセンスが詰まっている気がします。
            </P>
            <EmojiSeparator emojis={['🤔', '💭', '💡']} />
            <P>
              <H args={{ name: 'computerScience' }} />
              とは、突き詰めると「
              <Strong>計算機(コンピュータ)を工夫して、問題を解く</Strong>
              」ことを学べる学問です。
            </P>
            <P>
              今回紹介したのは、
              <H args={{ name: 'computerScience' }} />
              のなかでも「<Em>計算理論</Em>」と呼ばれる分野ですが、
              <H args={{ name: 'computerScience' }} />
              にある他の分野でも、「
              <Strong>計算機(コンピュータ)を工夫して、問題を解く</Strong>
              」ことが命題となっています。「
              <Em>
                コンピュータをどう工夫して使えば、美しいCGや、人工知能や、仮想通貨が作れるだろう？
              </Em>
              」といった感じですね。
            </P>
            <EmojiSeparator emojis={['✨', '🍱', '✨']} />
            <P>
              今回紹介できるのはここまでですが、当記事を読んで、 「
              <Em>
                <H args={{ name: 'computerScience' }} />
                のことが、なんとなくわかった気がする
              </Em>
              」「<Em>工夫の力ってすごいなあ</Em>
              」と思っていただけたら幸いです。
            </P>
            <P>
              そして、「
              <Strong>
                <H args={{ name: 'yCombinator' }} />
                は、シンプルな計算機でも、繰り返し処理を可能にする工夫
              </Strong>
              」だいうことも、頭の片隅に入れておいてくださると嬉しいです。
            </P>
            {AER.news}
          </>
        )
      },
      {
        title: (
          <>
            最後に: スマホ向けの
            <H args={{ name: 'computerScience' }} />
            の教材
          </>
        ),
        content: (
          <>
            <P>
              最後に私見を述べさせていただきますが、わたしは当記事のような「
              <Strong>
                スマホで学べる
                <H args={{ name: 'computerScience' }} />
                の教材
              </Strong>
              」がもっと増えたらいいな、と思っています。
            </P>
            <EmojiSeparator emojis={['📱', '🤔', '📱']} />
            <P>
              ほとんどの
              <H args={{ name: 'computerScience' }} />
              の教材は、「講義を聞いたり文章を読み、そこで紹介された問題を紙で解いたり、コードをパソコンで書いて学ぶ」ことが前提となっています。
              <Em>
                講義を聞いたり文章を読むのはスマホでできますが、実際に手を動かしたり、問題を解いて学ぶときには、どうしても紙やパソコンが必要になる場合が多いです。
              </Em>
              スマホで数式を解いたり、コードを書くのは苦痛だからです。
            </P>
            <P>
              <Strong>
                そして手を動かしたり、問題を解いて学ばないと、
                <H args={{ name: 'computerScience' }} />
                は身に付きません。
              </Strong>
            </P>
            <P>
              しかし、当記事で紹介した
              <H args={{ name: 'bentoBoxPuzzle' }} />
              のように、<Strong>スマホでもできるパズル的な教材</Strong>
              を作れば、紙やパソコン抜きにスマホだけで手を動かして学ぶことができます。
            </P>
            <EmojiSeparator emojis={['📱', '🍱', '📱']} />
            <P>
              これは仮説ですが、
              <Strong>
                ほとんどの
                <H args={{ name: 'computerScience' }} />
                の題材は、スマホでもできるパズル教材にすることができると思うのです。
              </Strong>
              たとえばAIなら
              <ExternalLink href="https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%83%E3%82%AF%E3%83%97%E3%83%AD%E3%83%91%E3%82%B2%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3">
                誤差逆伝播法
              </ExternalLink>
              、アルゴリズムなら
              <ExternalLink href="https://ja.wikipedia.org/wiki/%E5%8B%95%E7%9A%84%E8%A8%88%E7%94%BB%E6%B3%95">
                動的計画法
              </ExternalLink>
              、コンパイラなら
              <ExternalLink href="https://ja.wikipedia.org/wiki/%E3%83%AC%E3%82%B8%E3%82%B9%E3%82%BF%E5%89%B2%E3%82%8A%E4%BB%98%E3%81%91">
                レジスタ割り付け
              </ExternalLink>
              など、
              <Em>
                どんな基礎的な学習内容でも、ちょっと考えればスマホで学べるパズルを作ることができる気がします。
              </Em>
            </P>
            <P>
              <Strong>
                <H args={{ name: 'yCombinator' }} />
                のパズルが作れるなら、どんな
                <H args={{ name: 'computerScience' }} />
                の題材のパズルも作れるはずです。
              </Strong>
            </P>
            <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
            <P>
              そして、「なぜスマホ向けの
              <H args={{ name: 'computerScience' }} />
              の教材が大事なのか」聞かれれば、わたしはこう答えます。
            </P>
            <Ul>
              <UlLi>
                <Em>
                  <Strong>
                    ほとんどの人にとって、プログラミングを行う機会はほとんどありません。どれだけプログラミング教育が充実したとしても、「世の中の圧倒的多数の人は、プログラミング未経験」という状態はおそらく未来永劫続くでしょう。
                  </Strong>
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  一方、これからソフトウェアが世の中を変え続け、「AIが仕事を奪う」と言われ続けるなかで、
                  <H args={{ name: 'computerScience' }} />
                  のリテラシーを少しでも体得することは大事になってきます。
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  世の中の圧倒的多数の人は、
                  <Strong>
                    プログラミング未経験でも、スマホを持っています。
                  </Strong>
                  だから、プログラミング抜きにスマホで学べる
                  <H args={{ name: 'computerScience' }} />
                  の教材がもっと増えるべきだと思います。
                </Em>
              </UlLi>
            </Ul>
            <EmojiSeparator emojis={['📱', '🤗', '🤖']} />
            <P>
              言いたいことは以上です！ここまでお付き合いくださり、本当にありがとうございました。
            </P>
          </>
        )
      }
    ]}
  />
)
