import { css } from 'emotion'
import React from 'react'
import {
  Em,
  H3,
  P,
  Strong,
  Table,
  Td,
  Th,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode9 } from 'src/components/Yc/AllExpressionRunners'
import InlineEmojiBoxes from 'src/components/Yc/InlineEmojiBoxes'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'
import { colors } from 'src/lib/theme'

export default () => {
  let i = 0
  return (
    <>
      {h('ycQuizReview', 8)}
      <P>{h('ycPlayUntilDone')}:</P>
      {episode9[i++]()}
      <P>
        <Strong>まとめると:</Strong>
      </P>
      <Ul>
        <UlLi>
          最初は <InlineEmojiBoxes emojis={['🥗', '🥩', '🥩']} /> 、すなわち{' '}
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
      {episode9[i++]()}
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
      {episode9[i++]()}
      <H3>ケース1 (全部で4つ)</H3>
      <P>
        まず、 <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} />{' '}
        のパターンのものをふたつ、上にくっつけます。
      </P>
      {episode9[i++]()}
      <P>
        これで、
        {h('ycPlayUntilDone')}。
      </P>
      {episode9[i++]()}
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
        {h('ycPlayUntilDone')}。
      </P>
      {episode9[i++]()}
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
        {h('ycPlayUntilDone')}。
      </P>
      {episode9[i++]()}
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
        {h('ycPlayUntilDone')}。
      </P>
      {episode9[i++]()}
      <P>
        <Strong>おっと！</Strong> <Emoji>😳</Emoji> 今回は、{' '}
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} /> になりました。
      </P>
      <EmojiSeparator emojis={['😳', '😳', '😳']} />
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
      {episode9[i++]()}
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
              className={css`
                background-color: ${colors('yellow100')};
              `}
            >
              真
            </Td>
            <Td
              className={css`
                background-color: ${colors('yellow100')};
              `}
            >
              真
            </Td>
            <Td
              className={css`
                background-color: ${colors('yellow100')};
              `}
            >
              真
            </Td>
          </tr>
          <tr>
            <Td
              className={css`
                background-color: ${colors('yellow100')};
              `}
            >
              真
            </Td>
            <Td
              className={css`
                background-color: ${colors('pink50')};
              `}
            >
              偽
            </Td>
            <Td
              className={css`
                background-color: ${colors('yellow100')};
              `}
            >
              真
            </Td>
          </tr>
          <tr>
            <Td
              className={css`
                background-color: ${colors('pink50')};
              `}
            >
              偽
            </Td>
            <Td
              className={css`
                background-color: ${colors('yellow100')};
              `}
            >
              真
            </Td>
            <Td
              className={css`
                background-color: ${colors('yellow100')};
              `}
            >
              真
            </Td>
          </tr>
          <tr>
            <Td
              className={css`
                background-color: ${colors('pink50')};
              `}
            >
              偽
            </Td>
            <Td
              className={css`
                background-color: ${colors('pink50')};
              `}
            >
              偽
            </Td>
            <Td
              className={css`
                background-color: ${colors('pink50')};
              `}
            >
              偽
            </Td>
          </tr>
        </tbody>
      </Table>

      <YcNextLessonButton nextEpisodeNumber={10} />
    </>
  )
}
