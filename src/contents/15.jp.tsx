import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Em, Ul, UlLi, Hr } from 'src/components/ContentTags'
import H from 'src/components/H'
import EmojiSeparator from 'src/components/EmojiSeparator'
import AER from 'src/components/AER'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiForLetter from 'src/components/EmojiForLetter'
import Emoji from 'src/components/Emoji'
import EmojiNumber from 'src/components/EmojiNumber'
import { InlineEmojiBoxesForQuestion } from 'src/components/InlineEmojiBoxes'

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
            <P>
              途中で何回か止めながら見ていきましょう！
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.plts}
            <P>
              かなり複雑な弁当箱になりましたが、落ち着いて見ていきましょう。まず、
              <Strong>上から2番目と3番目の部分</Strong>
              <Em>を黄色に塗りつぶしてみました</Em>。
            </P>
            {AER.pnux}
            <P>
              この<Em>黄色に塗りつぶした部分</Em>
              を省略してみましょう。すると次のようになります。
            </P>
            {AER.zhby}
            <P>省略していない部分をよく見ると、</P>
            <Ul>
              <UlLi>
                <Em>
                  一番上の数字が
                  <EmojiNumber number={3} />
                  から
                  <EmojiNumber number={2} />
                  になり、(黄色の部分)
                </Em>
              </UlLi>
              <UlLi>
                <Em highlightType="blue">
                  一番下に<Emoji>✖️</Emoji>
                  <EmojiNumber number={3} />
                  が追加されました。(青色の部分)
                </Em>
              </UlLi>
            </Ul>
            {AER.xcnu}
            <P>
              これを、
              <Strong>
                前回
                <H args={{ name: 'witch' }} />
                を使った時と比べてみましょう。
              </Strong>
              <H args={{ name: 'witch' }} />
              を使った場合は、途中で下のような形になっていました。
              <Em>かなり似ていると思いませんか？</Em>
            </P>
            {AER.iisx}
            <P>
              ということは、
              <Em>
                最終的な結果も、
                <H args={{ name: 'witch' }} />
                を使った場合と同じになるのかもしれません。
              </Em>
              引き続き見ていきましょう！
            </P>
            <EmojiSeparator emojis={['🤔', '❓', '🧙‍♀️']} />
          </>
        )
      },
      {
        title: <>続きはどうなる？</>,
        content: (
          <>
            <P>
              続きを見てみましょう。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.pzui}
            <P>
              前回と同じように、
              <Em>
                <Strong>上から2番目と3番目の部分</Strong>
                を黄色に塗りつぶしてみました。
              </Em>
            </P>
            {AER.kfrt}
            <P>省略すると、こうなります。</P>
            {AER.iygh}
            <P>
              よく見ると、
              <Em>
                一番上の数字が
                <EmojiNumber number={2} />
                から
                <EmojiNumber number={1} />
                になり、
              </Em>
              <Em highlightType="blue">
                <Emoji>✖️</Emoji>
                <EmojiNumber number={2} />
                が追加されました。
              </Em>
            </P>
            {AER.ines}
            <P>
              またしても、前回
              <H args={{ name: 'witch' }} />
              を使った場合と同じような途中経過になっています。
            </P>
            {AER.gcnt}
            <P>それでは、最後まで進めてみましょう！</P>
          </>
        )
      },
      {
        title: <>結果は…？</>,
        content: (
          <>
            <P>
              先ほどの続きからです。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.mdsc}
            <P>
              なんと、
              <H args={{ name: 'inlineFactorial', start: 3 }} />
              の計算を行う弁当箱になりました！
            </P>
            <P>
              というわけで、最終結果は
              <H args={{ name: 'factorialComputation', start: 3 }} />
              になります。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.jruw}
          </>
        )
      },
      {
        type: 'summary',
        title: <>ということは…</>,
        content: (
          <>
            <P>
              <Strong>
                <H args={{ name: 'witch' }} />
                を一切使わずに、
                <H args={{ name: 'inlineFactorial', start: 3 }} />
                の計算ができてしまった
              </Strong>
              、ということになります！
            </P>
            {AER.mscz}
          </>
        )
      },
      {
        title: (
          <>
            <EmojiNumber number={4} />や<EmojiNumber number={5} />
            からはじめた場合
          </>
        ),
        content: (
          <>
            <P>
              では、
              <EmojiNumber number={4} />や<EmojiNumber number={5} />
              からはじめた場合はどうなるでしょう？同じような計算ができるでしょうか？
            </P>
            <EmojiSeparator
              size="sm"
              emojis={['4️⃣', '✖️', '3️⃣', '✖️', '2️⃣', '✖️', '1️⃣']}
              description={
                <>
                  ちなみに、答えは「<Strong>24</Strong>」になります
                </>
              }
            />
            <EmojiSeparator
              size="sm"
              emojis={['5️⃣', '✖️', '4️⃣', '✖️', '3️⃣', '✖️', '2️⃣', '✖️', '1️⃣']}
              description={
                <>
                  ちなみに、答えは「<Strong>120</Strong>」になります
                </>
              }
            />
            <P>
              ここからは時間を節約するために、最初から最後まで超特急で見ていきましょう！
            </P>
            <EmojiSeparator emojis={['🚅', '🤗', '🚅']} />
            <P>
              先ほどと同じく、こちらの弁当箱を使います。
              <Strong>
                <H args={{ name: 'witch' }} />
                はどこにも入っていないので、タネも仕掛けもありません！
              </Strong>
            </P>
            {AER.dkbt}
          </>
        )
      },
      {
        title: <>結果は…</>,
        content: (
          <>
            <P>
              まず、
              <InlineEmojiBoxesForQuestion />に<EmojiNumber number={4} />
              を入れてみました(<Em>黄色の部分</Em>)。
              <H args={{ name: 'pressFastForward', skippingSteps: true }} />
            </P>
            {AER.jreq}
            <P>
              結果、
              <H args={{ name: 'inlineFactorial', start: 4 }} />
              の弁当箱になりました！というわけで、最終的に
              <H args={{ name: 'factorialComputation', start: 4 }} />
              になります。
            </P>
            {AER.uitu}
            <Hr />
            <P>
              次は、
              <InlineEmojiBoxesForQuestion />に<EmojiNumber number={5} />
              を入れてみましょう(<Em>黄色の部分</Em>)。
              <H args={{ name: 'pressFastForward', skippingSteps: true }} />
            </P>
            {AER.bozr}
            <P>
              結果、
              <H args={{ name: 'inlineFactorial', start: 5 }} />
              の弁当箱になりました！というわけで、最終的に
              <H args={{ name: 'factorialComputation', start: 5 }} />
              になります。
            </P>
            {AER.wxqy}
            <P>
              つまり、
              <Strong>
                <EmojiNumber number={4} />
                からはじめても
                <EmojiNumber number={5} />
                からはじめても、
                <H args={{ name: 'witch' }} />
                を使った場合と同じ結果になる
              </Strong>
              のです！
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
              こちらのような弁当箱の一番上に<Em>暗号を入れて(黄色の部分)</Em>
              <H args={{ name: 'fastForward' }} />
              すると、
            </P>
            {AER.wcwd}
            <P>途中で以下のような形になります。</P>
            {AER.fapu}
            <P>
              つまり、
              <H args={{ name: 'factorialDefinition' }} />
              という計算を行うことができるのです。
            </P>
          </>
        )
      }
    ]}
  />
)
