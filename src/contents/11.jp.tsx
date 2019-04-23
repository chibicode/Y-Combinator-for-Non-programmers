/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import {
  Em,
  H3,
  P,
  Strong,
  Table,
  Td,
  Th,
  Ul,
  UlLi,
  ExternalLink,
  Blockquote
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode12 } from 'src/components/Yc/AllExpressionRunners'
import InlineEmojiBoxes from 'src/components/Yc/InlineEmojiBoxes'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'
import { colors } from 'src/lib/theme'
import EpisodeCardList from 'src/components/EpisodeCardList'
import H from 'src/components/H'
import { whatIsComputerScience } from 'src/contents/0.jp'

export default () => (
  <EpisodeCardList
    cards={[
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
            <Blockquote>{whatIsComputerScience}</Blockquote>
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

export const old = () => {
  let i = 0
  return (
    <>
      {h('ycQuizReview', 11)}
      <P>{h('ycpressPlay')}:</P>
      {episode12[i++]()}
      <P>
        <Strong>まとめると:</Strong>
      </P>
      <Ul>
        <UlLi>
          最初は <InlineEmojiBoxes emojis={['🍔', '🍗', '🍗']} /> 、すなわち{' '}
          <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} />{' '}
          のパターンからはじまった。
        </UlLi>
        <UlLi>
          最終的には <InlineEmojiBoxes emojis={['🍕', '🍛', '🍕']} /> 、すなわち{' '}
          <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} /> のパターンになった。
        </UlLi>
        <UlLi>
          <Em>
            つまり <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} /> が{' '}
            <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} /> になった。
          </Em>
        </UlLi>
      </Ul>
      <P>うーん、ということは…!</P>
      <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
      <H3>
        この
        {h('ycBentoBox')}
        にはどんな効果があるのか
      </H3>
      <P>
        ここまでをまとめると、下の
        {h('ycBentoBox')}
        は、
      </P>
      {episode12[i++]()}
      <P>次のような効果があるようです:</P>
      <Ul>
        <UlLi>
          <Em>
            <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} /> を{' '}
            <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} />{' '}
            に変える。(前のページの例より)
          </Em>
        </UlLi>
        <UlLi>
          <Em>
            <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} /> を{' '}
            <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} /> に変える。
          </Em>
        </UlLi>
      </Ul>
      <P>ここで気になることがひとつ。</P>
      <H3>
        まだまだ他にも、面白い効果がある
        {h('ycBentoBox', true)}
        はあるのでしょうか？
      </H3>
      <P>
        <Strong>
          答え: <Em>あります。</Em> <Emoji>👍</Emoji>
        </Strong>{' '}
        こちらの
        {h('ycBentoBox')}
        がそうです:
      </P>
      {episode12[i++]()}
      <H3>ケース1 (全部で4つ)</H3>
      <P>
        まず、 <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} />{' '}
        のパターンのものをふたつ、上にくっつけます。
      </P>
      {episode12[i++]()}
      <P>
        これで、
        {h('ycpressPlay')}。
      </P>
      {episode12[i++]()}
      <P>
        <Strong>答え:</Strong>
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} /> になりました！
      </P>
      <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
      <H3>ケース2 (全部で4つ)</H3>
      <P>
        それでは、上に <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} /> と{' '}
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} />{' '}
        をくっつけたらどうなるでしょう？これで
        {h('ycpressPlay')}。
      </P>
      {episode12[i++]()}
      <P>
        <Strong>答え:</Strong> またしても{' '}
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} /> になりましたね。
      </P>
      <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
      <H3>ケース3 (全部で4つ)</H3>
      <P>
        それでは順番を変えて、上に{' '}
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} /> と{' '}
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} />{' '}
        をくっつけたらどうなるでしょう？これで
        {h('ycpressPlay')}。
      </P>
      {episode12[i++]()}
      <P>
        <Strong>答え:</Strong> 今回も{' '}
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} /> になりました。
      </P>
      <P>
        ここまで見ると、
        <Em>
          毎回 <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} />
        </Em>{' '}
        になるように思えてきます。では、最後のケースではどうでしょうか。
      </P>
      <H3>ケース4 (全部で4つ)</H3>
      <P>
        最後は、 <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} /> と{' '}
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} />{' '}
        を上にくっつけてみます。これで
        {h('ycpressPlay')}。
      </P>
      {episode12[i++]()}
      <P>
        <Strong>おっと！</Strong> <Emoji>😲</Emoji> 今回は、{' '}
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} /> になりました。
      </P>
      <EmojiSeparator emojis={['😲', '😲', '😲']} />
      <P>ほかの3つのケースとくらべて、これだけ違うのですね…</P>
      <H3>
        この
        {h('ycBentoBox')}
        にはどんな効果があるのか
      </H3>
      <P>
        というわけで、下の
        {h('ycBentoBox')}
        には…
      </P>
      {episode12[i++]()}
      <P>…次のような効果があるようです:</P>
      <Ul>
        <UlLi>
          <Em>
            <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} /> と{' '}
            <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} /> を{' '}
            <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} /> に変える。
          </Em>
        </UlLi>
        <UlLi>
          <Em>
            <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} /> と{' '}
            <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} /> を{' '}
            <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} /> に変える。
          </Em>
        </UlLi>
        <UlLi>
          <Em>
            <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} /> と{' '}
            <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} /> を{' '}
            <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} /> に変える。
          </Em>
        </UlLi>
        <UlLi>
          <Em>
            <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} /> と{' '}
            <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} /> を{' '}
            <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} /> に変える。
          </Em>
        </UlLi>
      </Ul>
      <P>うーん、これ、どこかで聞いたようなことがある気がしませんか？</P>
      <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
      <H3>クイズ</H3>
      <P>
        <Strong>
          ここまでの例と、似たような現象をどこかで見たことがないでしょうか？
        </Strong>
        もしかしたら、
        <Em>高校の数学</Em>
        でやったことがあるかもしれません。
      </P>
      <P>
        (もし、プログラミングの経験がおありでしたら、プログラミングの考え方で近いものが思い浮かぶかもしれません。)
      </P>
      <P>
        <Strong>ヒント:</Strong> 次のような表を見たことがありますか？{' '}
        <Emoji>😉</Emoji> この表と先ほどの例との関連性に気付けるでしょうか？
      </P>
      <Table>
        <thead>
          <tr>
            <Th>A</Th>
            <Th>B</Th>
            <Th>AまたはB</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td
              css={css`
                background-color: ${colors('yellow100')};
              `}
            >
              真
            </Td>
            <Td
              css={css`
                background-color: ${colors('yellow100')};
              `}
            >
              真
            </Td>
            <Td
              css={css`
                background-color: ${colors('yellow100')};
              `}
            >
              真
            </Td>
          </tr>
          <tr>
            <Td
              css={css`
                background-color: ${colors('yellow100')};
              `}
            >
              真
            </Td>
            <Td
              css={css`
                background-color: ${colors('pink50')};
              `}
            >
              偽
            </Td>
            <Td
              css={css`
                background-color: ${colors('yellow100')};
              `}
            >
              真
            </Td>
          </tr>
          <tr>
            <Td
              css={css`
                background-color: ${colors('pink50')};
              `}
            >
              偽
            </Td>
            <Td
              css={css`
                background-color: ${colors('yellow100')};
              `}
            >
              真
            </Td>
            <Td
              css={css`
                background-color: ${colors('yellow100')};
              `}
            >
              真
            </Td>
          </tr>
          <tr>
            <Td
              css={css`
                background-color: ${colors('pink50')};
              `}
            >
              偽
            </Td>
            <Td
              css={css`
                background-color: ${colors('pink50')};
              `}
            >
              偽
            </Td>
            <Td
              css={css`
                background-color: ${colors('pink50')};
              `}
            >
              偽
            </Td>
          </tr>
        </tbody>
      </Table>

      <YcNextLessonButton nextEpisodeNumber={12} />
    </>
  )
}
