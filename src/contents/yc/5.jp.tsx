import React from 'react'
import {
  Em,
  H3,
  Ol,
  OlLi,
  P,
  Strong,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode5 } from 'src/components/Yc/AllExpressionRunners'
import InlineBackground from 'src/components/Yc/InlineBackground'
import InlinePrioritiesLabel from 'src/components/Yc/InlinePrioritiesLabel'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'

export default () => {
  let i = 0
  return (
    <>
      {h('ycQuizReview', 4)}
      <P>{h('ycTryUntilDone')}</P>
      {episode5[i++]()}
      <P>いかがでしょう。正解できましたか？</P>
      <H3>続いては: 縦に3段以上ある場合</H3>
      <P>
        次は、 <Em>縦に3段以上ある</Em>
        {h('ycBentoBox')}
        を見ていきましょう。
      </P>
      {episode5[i++]()}
      <P>
        <Strong>疑問点:</Strong>
      </P>
      <Ul>
        <UlLi>
          <Em>縦に3段あった場合、どうすればいいのか？</Em>
        </UlLi>
        <UlLi>
          <Em>
            <InlinePrioritiesLabel>1</InlinePrioritiesLabel>や{' '}
            <InlinePrioritiesLabel>2</InlinePrioritiesLabel>
            と書いているのは何なのか？
          </Em>
        </UlLi>
      </Ul>
      <EmojiSeparator emojis={['🥇', '🤔', '🥈']} />
      <P>
        <Strong>答えはこちら:</Strong>
      </P>
      <Ol>
        <OlLi>
          まず、{' '}
          <Em>
            <Strong>左上と左下</Strong>が
            <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
            の部分
          </Em>
          を先にやる。
        </OlLi>
        <OlLi>
          その後、
          <Em>
            <InlinePrioritiesLabel>2</InlinePrioritiesLabel>
            だった部分が
            <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
            になるので
          </Em>
          、それをやる。
        </OlLi>
      </Ol>
      <P>実際にやってみると分かりやすいです！</P>
      <EmojiSeparator emojis={['🥇', '➡️', '🥈']} />
      <H3>例</H3>
      <P>
        下の例で
        <Em>{h('ycNext')}</Em>
        を押してみてください。
      </P>
      {episode5[i++]()}
      <P>すると、</P>
      <Ul>
        <UlLi>
          <Em>
            <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel> が
            <Strong>左上</Strong>か<Strong>左下</Strong>
          </Em>
          にある部分は白いまま。
          <InlineBackground bgColor="white" />
        </UlLi>
        <UlLi>
          <Em>
            その他のマスは塗りつぶされている。
            <InlineBackground bgColor="indigo50" />
          </Em>{' '}
          こちらはいったん
          <Strong>置いておきます</Strong>。
        </UlLi>
      </Ul>
      <H3>その次は？</H3>
      <P>
        <Em>
          白いマスの部分 <InlineBackground bgColor="white" />
        </Em>{' '}
        を以前と同じようにやります。塗りつぶされた部分は無視します。
        <InlineBackground bgColor="indigo50" />
      </P>
      <P>
        <Em>
          {h('ycNext')}
          を何度か押してみてください
        </Em>
        :
      </P>
      {episode5[i++]()}
      <P>
        バツ印のマス <InlineBackground bgPattern="cross" />{' '}
        が消えた後はどうなるでしょう？
        <Em>
          {h('ycNext')}
          を押してみてください。
        </Em>
      </P>
      {episode5[i++]()}
      <P>
        <Strong>箇条書きで書くと:</Strong>
      </P>
      <Ul>
        <UlLi>
          <Em>
            全部のマスがまた白背景に。 <InlineBackground bgColor="white" />
          </Em>
        </UlLi>
        <UlLi>
          <Em>
            ステーキ <Emoji>🥩</Emoji>
          </Em>{' '}
          のマスが降りてきた。
        </UlLi>
        <UlLi>
          <Strong>最も重要なポイント:</Strong> 前回の{' '}
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel> が消え、{' '}
          <Em>
            前回の <InlinePrioritiesLabel>2</InlinePrioritiesLabel> が
            <Strong>新しく</Strong>{' '}
            <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
            <Strong>になった</Strong>。
          </Em>
        </UlLi>
      </Ul>
      <H3>その次は？</H3>
      <P>
        最後まで見ていきましょう。
        <Em>
          {h('ycNext')}
          を何度か押してみてください。
        </Em>
      </P>
      {episode5[i++]()}
      <P>
        <Strong>以上です！</Strong> まとめにもう一度、
        <Em>最初から最後まで見てみてください</Em>:
      </P>
      {episode5[i++]()}
      <P>それでは、ここでクイズです。</P>
      <EmojiSeparator emojis={['🥇', '🤔', '🥈']} />
      <H3>クイズ</H3>
      <P>
        次の
        {h('ycBentoBox')}
        を最後まで進めると…
      </P>
      {episode5[i++]()}
      <P>
        <Strong>最後にひとつだけ残るのはどの料理でしょう？</Strong>
      </P>
      <Ol>
        <OlLi>
          <Emoji size="lg">🍣</Emoji>
        </OlLi>
        <OlLi>
          <Emoji size="lg">🍔</Emoji>
        </OlLi>
        <OlLi>
          <Emoji size="lg">🥩</Emoji>
        </OlLi>
      </Ol>
      <P>
        <Em>頭の中で解くのは難しい問題なので</Em>
        、自信がなくても大丈夫です！
      </P>
      <YcNextLessonButton nextEpisodeNumber={6} />
    </>
  )
}
