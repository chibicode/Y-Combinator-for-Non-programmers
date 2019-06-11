import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Em, Ul, UlLi } from 'src/components/ContentTags'
import H from 'src/components/H'
import EmojiSeparator from 'src/components/EmojiSeparator'
import AER from 'src/components/AER'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiForLetter from 'src/components/EmojiForLetter'
import Emoji from 'src/components/Emoji'
import EmojiNumber from 'src/components/EmojiNumber'
import {
  InlineEmojiBoxesForCondition,
  InlineEmojiBoxesForQuestion
} from 'src/components/InlineEmojiBoxes'
import YesNoButtons from 'src/components/YesNoButtons'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>今回が上級最後！</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              今回が上級最後です！残るのはこのページと、次のページにあるエピローグだけです。ここまでお疲れ様でした！
            </P>
            <EmojiSeparator emojis={['🎉', '🤗', '🎉']} />
            <P>
              前回は、「
              <Strong>
                弁当箱の
                <H args={{ name: 'witch' }} />
              </Strong>
              」について解説しました。復習になりますが、
              <H args={{ name: 'witch' }} />
              は次のように変化します。
            </P>
            {AER.xsve}
            <P>
              この
              <H args={{ name: 'witch' }} />
              を使うと、
            </P>
            <EmojiSeparator size="sm" emojis={['3️⃣', '✖️', '2️⃣', '✖️', '1️⃣']} />
            <P>といった計算を行うことができます。</P>
            {AER.urhc}
            <P>
              しかし、「
              <Strong>
                弁当箱の
                <H args={{ name: 'witch' }} />
              </Strong>
              」は、実際には弁当箱に備わっていない「架空の」機能です。
              <Strong>
                <H args={{ name: 'witch' }} />
                を使わず、従来の弁当箱の機能だけで、同じ計算ができるでしょうか？
              </Strong>
            </P>
            <EmojiSeparator emojis={['❌', '🧙‍♀️', '❌']} />
            <P>今回はそれを検証していきます。</P>
          </>
        )
      },
      {
        title: <>魔女の代わりに</>,
        content: (
          <>
            <P>
              まず、
              <H args={{ name: 'witch' }} />
              の変化に注目してみます。
            </P>
            {AER.xsve}
            <P>
              変化後の弁当箱にも
              <H args={{ name: 'witch' }} />
              がまた登場しています。
            </P>
            {AER.cfms}
            <P>
              <Strong>
                この
                <H args={{ name: 'witch' }} />
                の代わりに、他の料理を使ってみることを検討してみましょう。
              </Strong>
              別に何でもいいですが、とりあえず
              <H args={{ name: 'witch' }} />
              の代わりに
              <EmojiWithText letter="s" />
              を使ってみます。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>🧙‍♀️</Emoji>,
                <Emoji>➡</Emoji>,
                <EmojiForLetter letter="s" />
              ]}
            />
            <P>すると、こうなります。</P>
            {AER.tdau}
            <P>
              そして、理由はまだ明かしませんが、左側にも
              <EmojiWithText letter="s" />
              を入れます。
            </P>
            {AER.lkwr}
            <P>
              そして、同じく理由はまだ明かしませんが、下側にも次のように
              <EmojiWithText letter="a" />と<EmojiWithText letter="b" />
              が入っている弁当箱を配置します。
            </P>
            {AER.osih}
            <P>
              では、ここで質問です:{' '}
              <Strong>
                上の弁当箱の
                <InlineEmojiBoxesForQuestion />
                に暗号の数字を入れてみると、何が起きるでしょう？
              </Strong>
            </P>
            <EmojiSeparator emojis={['❓', '🤔', '❓']} />
          </>
        )
      },
      {
        title: (
          <>
            <EmojiNumber number={3} />
            を入れた場合
          </>
        ),
        content: (
          <>
            <P>
              たとえば、
              <Strong>
                先ほどの弁当箱の
                <InlineEmojiBoxesForQuestion />
                の部分に
                <EmojiNumber number={3} />
                を入れたとします
              </Strong>
              (<Em>一番上の黄色の部分</Em>)。
            </P>
            {AER.hzlj}
            <P>
              これを
              <H args={{ name: 'play' }} />
              すると、結果はどうなるでしょう？
            </P>
          </>
        )
      },
      {
        title: <>検証してみましょう</>,
        content: (
          <>
            <P>途中で何回か止めながら見ていきましょう！</P>
            <Ul>
              <UlLi>弁当箱が縦長になるので、料理を小さく表示しています。</UlLi>
              <UlLi>
                解説のため、
                <Strong>
                  一番最初に
                  <InlineEmojiBoxesForCondition type="condition" />{' '}
                  の中にある暗号が「0」かどうかチェックするタイミングで一旦止めます。
                </Strong>
              </UlLi>
            </Ul>
            <P>
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.plts}
            <P>
              <InlineEmojiBoxesForCondition type="condition" /> が
              <EmojiNumber number={2} />
              なので、上側の <InlineEmojiBoxesForCondition type="falseCase" />{' '}
              が残ります。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.olri}
            <P>
              かなり複雑な弁当箱になりました。ここで、
              <Strong>上から2番目と3番目の部分</Strong>を
              <Em>黄色に塗りつぶしてみました</Em>。すると、
              <Strong>
                黄色の部分の上半分と下半分は、まったく同じ形をしている
              </Strong>
              のがわかります。
            </P>
            {AER.pnux}
            <P>
              いったん、<Em>黄色の部分</Em>
              を省略してみましょう。すると次のようになります。
            </P>
            {AER.zhby}
            <P>残った部分をよく見ると、下のような構造になっています。</P>
            {AER.xcnu}
            <P>
              前回、
              <H args={{ name: 'witch' }} />
              を使ったときも、途中で似たような形になったのを覚えていますか？
            </P>
            {AER.iisx}
            <P>
              ここまでは、前回
              <H args={{ name: 'witch' }} />
              を使った場合と似たような形になっています。ということは、
              <Strong>
                最終結果も
                <H args={{ name: 'witch' }} />
                を使った場合と同じになるのでしょうか？
              </Strong>
            </P>
            <EmojiSeparator emojis={['🤔', '❓', '🧙‍♀️']} />
          </>
        )
      }
    ]}
  />
)
