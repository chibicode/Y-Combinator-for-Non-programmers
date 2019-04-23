import React from 'react'
import {
  InlineHeader,
  Em,
  P,
  Strong,
  Ul,
  UlLi,
  Blockquote,
  ExternalLink
} from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { InlineEmojiBoxesForQuestion } from 'src/components/Yc/InlineEmojiBoxes'
import AER from 'src/components/Yc/AllExpressionRunners'
import H from 'src/components/H'
import YesNoButtons from 'src/components/YesNoButtons'
import { whatIsComputerScience } from 'src/contents/0.jp'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>どんな計算ができる？</>,
        content: (
          <>
            <P>
              こちらが、前回紹介した<Strong>「足し算」</Strong>ができる
              <H args={{ name: 'bentoBox', short: true }} />
              です:
            </P>
            {AER.bxdf}
            <P>
              そして下にあるのが、上のと微妙に違う
              <H args={{ name: 'bentoBox', short: true }} />
              です。 <Strong>右下の部分が微妙に違う</Strong>
              のがお分かりでしょうか。
            </P>
            {AER.ksya}
            <P>
              「足し算」の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              では右下に<Strong>5個</Strong>の料理がありましたが、こちらには
              <Strong>4個</Strong>しかありません。
            </P>
            <P>
              では、
              <Em>
                こちらの
                <H args={{ name: 'bentoBox', short: true }} />
                は、どんな計算ができるのでしょう？
              </Em>
            </P>
            <EmojiSeparator emojis={['🍱', '❓', '️🍱']} />
            <P>
              やっぱり前回と同じく、足し算ができるのでしょうか？
              <H args={{ name: 'yesNoQuiz' }} />
              で見ていきましょう！
            </P>
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
          </>
        ),
        content: (
          <>
            <P>
              ここに暗号が<Strong>「1」</Strong>の
              <H args={{ name: 'bentoBox', short: true }} />
              がふたつあります:
            </P>
            {AER.dymt}
            {AER.mhwq}
            <P>
              さきほどの
              <H args={{ name: 'bentoBox', short: true }} />の
              <InlineEmojiBoxesForQuestion />
              の部分に埋め込んでみます:
            </P>
            {AER.sojz}
            <P>
              さきほどの「足し算」の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              とは
              <Em>
                微妙に右下が違いますが、こちらも足し算(
                <Strong>1 + 1 = 2</Strong>
                )になるのでしょうか？それとも、別な計算結果が出るのでしょうか？
              </Em>
              というわけで、質問です。
            </P>
            <P>
              <H args={{ name: 'whatsTheNumberQuestion', number: 2 }} />
            </P>
            <YesNoButtons answer="no" />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'theAnswerIs', isYes: false }} />
          </>
        ),
        content: (
          <>
            <P>
              <Strong>
                <H args={{ name: 'theAnswerIs', isYes: false }} />
                でした。
              </Strong>
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.ktyt}
            <P>
              なんと、最終的に暗号が<Strong>「1」</Strong>になりました！
            </P>
            {AER.aeyv}
            <P>つまり、</P>
            <Ul>
              <UlLi>
                暗号が<Strong>「1」</Strong>の
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                ふたつを埋め込んで
                <H args={{ name: 'play' }} />
                すると、
              </UlLi>
              <UlLi>
                最終的に暗号が<Strong>「1」</Strong>の
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                になる。
              </UlLi>
            </Ul>
            <P>どういう計算が起きているか、分かりましたか？</P>
          </>
        )
      },
      {
        title: <>2と3を組み合わせると…</>,
        content: (
          <>
            <P>
              今度は暗号が<Strong>「2」</Strong>と<Strong>「3」</Strong>の
              <H args={{ name: 'bentoBox', short: true }} />
              を使ってみましょう:
            </P>
            {AER.bdlj}
            {AER.ifwb}
            <P>
              埋め込むとこうなります。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.ngus}
            <P>
              こちらは、最終的に暗号が<Strong>「6」</Strong>になりました！
            </P>
            {AER.ujfj}
            <P>つまり、</P>
            <Ul>
              <UlLi>
                暗号が<Strong>「2」</Strong>と<Strong>「3」</Strong>の
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                ふたつを埋め込んで
                <H args={{ name: 'play' }} />
                すると、
              </UlLi>
              <UlLi>
                最終的に暗号が<Strong>「6」</Strong>の
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                になる。
              </UlLi>
            </Ul>
            <P>そろそろどんな計算が起きたかお分かりでしょうか？</P>
          </>
        )
      },
      {
        title: (
          <>
            掛け算の
            <H args={{ name: 'bentoBox', skipEmoji: true }} />
          </>
        ),
        content: (
          <>
            <EmojiSeparator emojis={['🍱', '✖️', '️🍱']} />
            <P>
              そう、答えは<Strong>「掛け算」</Strong>です。
              <Em>「1 ✕ 1 = 1」「2 ✕ 3 = 6」</Em>を計算していたんですね。
            </P>
          </>
        )
      },
      {
        type: 'summary',
        title: (
          <>
            <H args={{ name: 'summary' }} />
          </>
        ),
        content: (
          <>
            <P>
              まとめると、この
              <H args={{ name: 'bentoBox', short: true }} />
              は、
              <Strong>
                ふたつの
                <InlineEmojiBoxesForQuestion />
                に入っている
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                の暗号を掛け算してくれます。
              </Strong>
            </P>
            {AER.drvu}
            <P>
              足し算の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              は右下に料理が5個ありましたが、こちらは
              <Strong>右下の料理が4個</Strong>
              しかないのがポイントです。
            </P>
            <P>
              <InlineHeader>ちなみに:</InlineHeader> 今回も、
              <Strong>
                上の
                <H args={{ name: 'bentoBox', short: true }} />
                を暗記する必要はありません。
              </Strong>
              そのまま読み進めて下さい！
            </P>
          </>
        )
      },
      {
        title: <>他の計算もできます</>,
        content: (
          <>
            <P>
              時間の都合上ここでは紹介できませんが、掛け算以外にも、暗号の
              <Strong>引き算や割り算</Strong>
              ができる
              <H args={{ name: 'bentoBox', short: true }} />
              もあります。
            </P>
            <EmojiSeparator emojis={['➖', '🍱️', '➗']} />
            <P>
              つまり、
              <H args={{ name: 'bentoBox' }} />は<Strong>電卓</Strong>
              のように使えるのです。ある種の<Strong>「計算機」</Strong>
              と読んでも過言ではないでしょう。
            </P>
          </>
        )
      },
      {
        title: <>コンピューターサイエンス = 計算機科学</>,
        content: (
          <>
            <P>
              この記事の題名に入っている「
              <Strong>コンピューターサイエンス</Strong>
              」という言葉について、最初のページで以下のように説明しました:
            </P>
            <Blockquote>{whatIsComputerScience}</Blockquote>
            <P>
              実はコンピューターサイエンスは、日本語では「
              <ExternalLink href="https://ja.wikipedia.org/wiki/%E8%A8%88%E7%AE%97%E6%A9%9F%E7%A7%91%E5%AD%A6">
                <Strong>計算機科学</Strong>
              </ExternalLink>
              」と訳されています。
            </P>
            <P>
              コンピューターというとパソコンやタブレット、スマホ、ロボットを思い浮かべるかもしれませんが、本来コンピューターは
              <Strong>「計算機」</Strong>
              です。たとえば美しいCGや賢いAIも、大量の「計算」を短時間で行うことによって実現されています。
            </P>
            <EmojiSeparator emojis={['💻', '📱', '🤖']} />
            <P>
              だから、
              <Em>
                「コンピューターサイエンス = 計算機科学」は、
                <Strong>「計算機」について考える学問</Strong>なのです
              </Em>
              。
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
              コンピューターサイエンスは計算機について考える学問で、さまざまな
              <Em>問い(命題)</Em>があります。そのうちのひとつがこちら:
            </P>
            <P>
              <Strong>
                「ほとんどの計算ができる、最もシンプルな計算機はどんなものだろう？」
              </Strong>
            </P>
            <EmojiSeparator emojis={['❓', '🤔', '❓']} />
            <P>
              <Strong>
                実は、この問いの答えが
                <H args={{ name: 'bentoBox', short: true }} />
                なのです。
              </Strong>
            </P>
            <EmojiSeparator emojis={['🍱', '😲', '🍱']} />
            <P>
              先ほど話したように、
              <H args={{ name: 'bentoBox', skipEmoji: true }} />は
              <Em>
                足し算・掛け算・引き算・割り算といった四則演算ができる計算機です
              </Em>
              。
            </P>
            <P>
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              が面白いのは、
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
              というわけで、次のページからは、
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              を使ったさらにハイレベルな計算を紹介していきます。数学的に難しいわけではないので、ご心配なく！
            </P>
          </>
        )
      }
    ]}
  />
)
