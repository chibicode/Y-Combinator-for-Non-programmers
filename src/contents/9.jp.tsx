import React from 'react'
import { Em, H3, P, Strong } from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode10 } from 'src/components/Yc/AllExpressionRunners'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'
import EpisodeCardList from 'src/components/EpisodeCardList'
import EmojiWithText from 'src/components/EmojiWithText'
import Emoji from 'src/components/Emoji'
import EmojiForLetter from 'src/components/EmojiForLetter'
import H from 'src/components/H'
import AER from 'src/components/Yc/AllExpressionRunners'
import { InlineEmojiBoxesForQuestion } from 'src/components/Yc/InlineEmojiBoxes'
import YesNoButtons from 'src/components/YesNoButtons'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: (
          <>
            おやつが入っている
            <H args={{ name: 'bentoBox', skipEmoji: true }} />
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              今回は、次の
              <H args={{ name: 'bentoBox' }} />
              を見ていきます:
            </P>
            {AER.bxfv}
            <P>
              この
              <H args={{ name: 'bentoBox', short: true }} />、
              <Em>
                上のほうに
                <EmojiWithText letter="z" />と<EmojiWithText letter="y" />
                といった「おやつ」がある
              </Em>
              のに注目です。
            </P>
            <EmojiSeparator emojis={['🍬', '😍', '🍩']} />
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: (
          <>
            <EmojiForLetter letter="z" /> か <EmojiForLetter letter="y" />
            、どっち？
          </>
        ),
        content: (
          <>
            <P>
              次に、<Strong>暗号が「0」</Strong>の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              を用意します。
            </P>
            {AER.fhlw}
            <P>
              こちらを、先ほどの
              <H args={{ name: 'bentoBox', skipEmoji: true }} />の
              <InlineEmojiBoxesForQuestion />
              の部分に埋め込んでみます。
            </P>
            {AER.tkqr}
            <P>
              実は、これを最後まで
              <H args={{ name: 'play' }} />
              すると、
              <Strong>
                最終的に
                <EmojiWithText letter="z" />か<EmojiWithText letter="y" />
                のどちらかが残ります
              </Strong>
              。
            </P>
            <EmojiSeparator emojis={['🍬', '🤔', '🍩']} />
            <P>というわけで、ここで質問です！</P>
            <P>
              <Strong>質問:</Strong> 上の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />を
              <H args={{ name: 'play' }} />
              したら最後に残るのは「
              <EmojiWithText letter="z" />
              」だ。<Emoji>⭕️</Emoji>か<Emoji>❌</Emoji>か？
            </P>
            <YesNoButtons answer="no" tooHard />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'theAnswerIs', isYes: false }} /> (残るのは
            <EmojiWithText letter="y" />)
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'theAnswerIs', isYes: false }} />
              でした。残るのは
              <EmojiWithText letter="y" />
              です。
            </P>
            <P>
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.jliw}
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
      {h('ycQuizReview', 9)}
      <P>{h('ycpressPlay')}:</P>
      <P>
        (<Strong>ちなみに:</Strong> ステップが多いため、
        {h('ycPlay')} ボタンの実行速度を少し速くしています。)
      </P>
      {episode10[i++]()}
      <P>
        最終的に暗号は
        <Strong>5</Strong>
        になりました。
      </P>
      {episode10[i++]()}
      <P>
        最初は、暗号が
        <Strong>2</Strong>と<Strong>3</Strong>
        の弁当箱からはじめましたよね。
      </P>
      {episode10[i++]()}
      {episode10[i++]()}
      <P>
        結果が
        <Strong>5</Strong>
        ということは、つまり
        <Strong>2 + 3</Strong>
        を計算したことになります。
        <Em>
          つまり、
          <Strong>足し算</Strong>
          をやったのです。
        </Em>
        こちらの弁当箱は、
        <Em>
          <Strong>ふたつの暗号の数字を合計することができるのです</Strong>。
        </Em>
      </P>
      {episode10[i++]()}
      <P>
        だから、下の弁当箱は
        <Strong>2 + 3</Strong>
        を表しているというわけです。
      </P>
      {episode10[i++]()}
      <H3>ここまでのまとめ</H3>
      <P>
        <Em>
          {h('ycBentoBox')}
          を使えば、
          <Strong>ふたつの数字の足し算ができる</Strong>。
        </Em>
      </P>
      <EmojiSeparator emojis={['🍱', '➕', '🍱']} />
      <H3>掛け算もできます</H3>
      <P>
        足し算だけでなく、
        <Em>
          <Strong>ふたつの数字の掛け算</Strong>
        </Em>
        も、弁当箱を使えばできちゃいます。
      </P>
      <EmojiSeparator emojis={['🍱', '✖️', '🍱']} />
      <P>
        <Strong>掛け算</Strong>
        をするための弁当箱はこちら。
      </P>
      {episode10[i++]()}
      <P>
        <Strong>さっそくやってみましょう！</Strong>
        <Em>
          <Strong>2</Strong> × <Strong>3</Strong>
        </Em>
        を計算してみます。
      </P>
      <P>
        掛け算をするのに、暗号がそれぞれ
        <Strong>2</Strong>と<Strong>3</Strong>
        の弁当箱を使います。
      </P>
      {episode10[i++]()}
      {episode10[i++]()}
      <P>
        さきほどの弁当箱と組み合わせれば、
        <Strong>2</Strong> × <Strong>3</Strong>
        を計算してくれます。
        {h('ycpressPlay')}。
      </P>
      {episode10[i++]()}
      <P>
        最終的に暗号が
        <Strong>6</Strong>
        の弁当箱になりました。
        <Strong>2</Strong> × <Strong>3</Strong>
        と同じですね。
      </P>
      {episode10[i++]()}
      <P>
        というわけで、こちらの弁当箱が
        <Strong>2</Strong> × <Strong>3</Strong>
        を計算してくれることを確かめることができました！
      </P>
      {episode10[i++]()}
      <H3>ここまでのまとめ</H3>
      <P>
        <Em>
          {h('ycBentoBox')}は<Strong>足し算</Strong>も<Strong>掛け算</Strong>
          もできる。
        </Em>
      </P>
      {episode10[i++]()}
      {episode10[i++]()}
      <EmojiSeparator emojis={['➕', '🍱', '✖️']} />
      <P>
        <Strong>さらに:</Strong> ここでは詳しく書きませんが、弁当箱を使って
        <Strong>引き算</Strong>や<Strong>割り算</Strong>
        をすることもできます。
      </P>
      <EmojiSeparator emojis={['➖', '🍱', '➗']} />
      <P>
        <Strong>ということは:</Strong>{' '}
        <Em>
          弁当箱は
          <Strong>電卓のように使える</Strong>
          ということです。
        </Em>
      </P>
      <P>とっても興味深いと思いませんか？</P>
      <EmojiSeparator emojis={['🔢', '😲', '🔢']} />
      <H3>弁当箱は「論理」もできる</H3>
      <P>
        弁当箱は計算だけでなく、
        <Strong>論理</Strong>
        もできます。
      </P>
      <P>
        次のページでは、弁当箱を使って
        <Strong>論理演算</Strong>
        をやる方法を紹介していきます。
      </P>
      <YcNextLessonButton nextEpisodeNumber={10} />
    </>
  )
}
