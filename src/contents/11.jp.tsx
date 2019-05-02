import React from 'react'
import {
  Em,
  P,
  Strong,
  ExternalLink,
  InlineHeader,
  Blockquote,
  Ul,
  Hr,
  UlLi
} from 'src/components/ContentTags'
import AER from 'src/components/Yc/AER'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EpisodeCardList from 'src/components/EpisodeCardList'
import EmojiWithText from 'src/components/EmojiWithText'
import YesNoButtons from 'src/components/YesNoButtons'
import H from 'src/components/H'
import { InlineEmojiBoxesForQuestion } from 'src/components/Yc/InlineEmojiBoxes'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>前回の続き</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              前回紹介した「条件分岐」の
              <H args={{ name: 'bentoBox', short: true }} />
              をもう一度ご覧ください。
            </P>
            {AER.nlxe}
            <P>
              <InlineHeader>復習:</InlineHeader> 上の
              <H args={{ name: 'bentoBox', short: true }} />の
              <InlineEmojiBoxesForQuestion />
              の部分に…
            </P>
            <Ul>
              <UlLi>
                暗号が<Strong>「0」</Strong>の
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                を埋め込むと、
                <Strong>
                  <EmojiWithText letter="y" />
                  が残る
                </Strong>
              </UlLi>
              <UlLi>
                暗号が<Strong>「1以上」</Strong>の
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                を埋め込むと、
                <Strong>
                  <EmojiWithText letter="z" />
                  が残る
                </Strong>
              </UlLi>
            </Ul>
            <Hr />
            <P>
              それでは、ここで
              <H args={{ name: 'yesNoQuiz' }} />
              の時間です！
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
              こちらに、<Strong>暗号が「1」</Strong>の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              を用意します。
            </P>
            {AER.azge}
            <P>
              こちらを、先ほどの
              <H args={{ name: 'bentoBox', skipEmoji: true }} />の
              <InlineEmojiBoxesForQuestion />
              の部分に埋め込んでみます。
            </P>
            {AER.eigf}
            <P>
              暗号が
              <Strong>「1以上」</Strong>の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              を埋め込むと、
              <Strong>
                <EmojiWithText letter="z" />
                が残る
              </Strong>
              、と先ほど書きました。というわけで質問です。
            </P>
            <Hr />
            <P>
              <H args={{ name: 'question' }} /> 上の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />を
              <H args={{ name: 'play' }} />
              したら最後に残るのは「
              <Strong>
                <EmojiWithText letter="z" />
              </Strong>
              」だ。
              <H args={{ name: 'yesOrNo' }} />
            </P>
            <YesNoButtons answer="no" tooHard />
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
            {AER.eqbo}
            <P>
              なんと、もともとの暗号は
              <Strong>「1」</Strong>だったのに、
              <EmojiWithText letter="z" />
              ではなく、
              <Strong>
                下のような全然関係ない
                <H args={{ name: 'bentoBox', short: true }} />
              </Strong>
              が残ってしまいました！
            </P>
            {AER.xlwo}
            <P>前回では上手くいったのに、どうしてこうなったのでしょう？</P>
            <EmojiSeparator emojis={['🤯', '❓', '🍬']} />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'bentoBox', skipEmoji: true }} />
            も計算機
          </>
        ),
        content: (
          <>
            <EmojiSeparator emojis={['💡', '🧓🏻', '🍱']} />
            <P>
              そして実は、
              <Em>
                <H args={{ name: 'bentoBox' }} />
                と非常に似た計算機が、1930年代にコンピューター科学者達によって考案されているのです。
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
        title: <>コンピューターサイエンス = 計算機科学</>,
        content: (
          <>
            <P>
              この記事の題名に入っている「
              <Strong>コンピューターサイエンス</Strong>
              」という言葉について、最初のページで以下のように説明しました:
            </P>
            <Blockquote>
              <P>
                <H args={{ name: 'whatIsComputerScience' }} />
              </P>
            </Blockquote>
            <P>
              実はコンピューターサイエンスは、日本語では「
              <ExternalLink href="https://ja.wikipedia.org/wiki/%E8%A8%88%E7%AE%97%E6%A9%9F%E7%A7%91%E5%AD%A6">
                <Strong>計算機科学</Strong>
              </ExternalLink>
              」と訳されています。
            </P>
            <P>
              コンピューターというとパソコンやタブレット、スマホ、ロボットを思い浮かべるかもしれませんが、コンピューターは本質的には
              <Strong>「計算機」</Strong>
              です。たとえば美しいCGや賢いAIも、大量の計算を短時間で行うことによって実現されています。
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
              コンピューターサイエンスは、「計算機」について考える学問です。そして学問なので、さまざまな
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
