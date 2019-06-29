import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Strong,
  Em,
  Ul,
  UlLi,
  Hr,
  InlineHeader
} from 'src/components/ContentTags'
import H from 'src/components/H'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiForLetter from 'src/components/EmojiForLetter'
import Emoji from 'src/components/Emoji'
import EmojiNumber from 'src/components/EmojiNumber'
import {
  InlineEmojiBoxesForCondition,
  InlineEmojiBoxesForQuestion
} from 'src/components/InlineEmojiBoxes'
import YesNoButtons from 'src/components/YesNoButtons'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import NextLessonButton from 'src/components/NextLessonButton'
import * as R from 'src/components/Runners'

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
            <R.Xjae />
            <ExpressionRunnerSeparator />
            <R.Xsve />
            <P>
              この
              <H args={{ name: 'witch' }} />
              を使うと、
            </P>
            <EmojiSeparator size="sm" emojis={['3️⃣', '✖️', '2️⃣', '✖️', '1️⃣']} />
            <P>といった計算を行うことができます。</P>
            <R.Igrt />
            <ExpressionRunnerSeparator />
            <R.Woft />
            <ExpressionRunnerSeparator />
            <R.Urhc />
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
            <R.Xjae />
            <ExpressionRunnerSeparator />
            <R.Xsve />
            <P>
              変化後の弁当箱にも
              <H args={{ name: 'witch' }} />
              がまた登場しています。
            </P>
            <R.Cfms />
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
            <R.Tdau />
            <P>
              そして、理由はまだ明かしませんが、左側にも
              <EmojiWithText letter="s" />
              を入れます。
            </P>
            <R.Lkwr />
            <P>
              そして、同じく理由はまだ明かしませんが、下側にも次のように
              <EmojiWithText letter="a" />と<EmojiWithText letter="b" />
              が入っている弁当箱を配置します。
            </P>
            <R.Osih />
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
            <R.Hzlj />
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
            <R.Plts />
            <P>
              かなり複雑な弁当箱になりましたが、落ち着いて見ていきましょう。まず、
              <Strong>上から2番目と3番目の部分</Strong>
              <Em>を黄色に塗りつぶしてみました</Em>。
            </P>
            <R.Pnux />
            <P>
              この<Em>黄色に塗りつぶした部分</Em>
              を省略してみましょう。すると次のようになります。
            </P>
            <R.Zhby />
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
            <R.Xcnu />
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
            <R.Iisx />
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
            <R.Pzui />
            <P>
              前回と同じように、
              <Em>
                <Strong>上から2番目と3番目の部分</Strong>
                を黄色に塗りつぶしてみました。
              </Em>
            </P>
            <R.Kfrt />
            <P>省略すると、こうなります。</P>
            <R.Iygh />
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
            <R.Ines />
            <P>
              またしても、前回
              <H args={{ name: 'witch' }} />
              を使った場合と同じような途中経過になっています。
            </P>
            <R.Gcnt />
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
            <R.Pgtx />
            <P>
              ここで、
              <InlineEmojiBoxesForCondition type="condition" /> の中にある暗号が
              <EmojiNumber number={0} />
              になりました。ということは、下側の{' '}
              <InlineEmojiBoxesForCondition type="trueCase" /> に入っている
              <EmojiNumber number={1} />
              が残るということです。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            <R.Gswd />
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
            <R.Jruw />
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
            <R.Nnhc />
            <ExpressionRunnerSeparator />
            <R.Pzvr />
            <ExpressionRunnerSeparator />
            <R.Mscz />
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
            <R.Dkbt />
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
            <R.Jreq />
            <P>
              結果、
              <H args={{ name: 'inlineFactorial', start: 4 }} />
              の弁当箱になりました！というわけで、最終的に
              <H args={{ name: 'factorialComputation', start: 4 }} />
              になります。
            </P>
            <R.Vpmj />
            <ExpressionRunnerSeparator />
            <R.Uitu />
            <Hr />
            <P>
              次は、
              <InlineEmojiBoxesForQuestion />に<EmojiNumber number={5} />
              を入れてみましょう(<Em>黄色の部分</Em>)。
              <H args={{ name: 'pressFastForward', skippingSteps: true }} />
            </P>
            <R.Bozr />
            <P>
              結果、
              <H args={{ name: 'inlineFactorial', start: 5 }} />
              の弁当箱になりました！というわけで、最終的に
              <H args={{ name: 'factorialComputation', start: 5 }} />
              になります。
            </P>
            <R.Angp />
            <ExpressionRunnerSeparator />
            <R.Wxqy />
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
            <R.Wcwd />
            <P>途中で以下のような形になります。</P>
            <R.Fapu />
            <P>
              つまり、
              <H args={{ name: 'factorialDefinition' }} />
              という計算を行うことができるのです。
            </P>
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'witch' }} />
            よりも有能
          </>
        ),
        content: (
          <>
            <P>
              繰り返しますが、たとえば
              <H args={{ name: 'inlineFactorial', start: 3 }} />
              を計算するのに、下のような
              <H args={{ name: 'witch' }} />
              の弁当箱を使わずとも、
            </P>
            <R.Zxux />
            <P>
              下の弁当箱を使えば、<Strong>従来の弁当箱の機能だけで</Strong>
              <H args={{ name: 'inlineFactorial', start: 3 }} />
              を計算できます。
            </P>
            <R.Bcgc />
            <P>
              しかも、上の弁当箱は
              <H args={{ name: 'witch' }} />
              よりも<Strong>優れている点</Strong>があります。それは、
              <Strong>少し変更を加えることで、さらに違う計算もできる</Strong>
              ということです。
            </P>
            <EmojiSeparator emojis={['❓', '🤔', '❓']} />
            <P>
              <Strong>さらに違う計算もできる</Strong>とはどういうことか、
              <H args={{ name: 'yesNoQuiz' }} />
              で見てみましょう！
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
              <H args={{ name: 'lookAtThisBentoBox' }} />
              。前回の弁当箱に<Strong>二箇所</Strong>変更を加えました。
              前回と比べて、
              <Strong>
                黄色の部分が両方とも
                <EmojiNumber number={2} />
                になっています。
              </Strong>
            </P>
            <R.Szou />
            <P>
              <H args={{ name: 'whatHappensAtTheEndQuestion' }} />
            </P>
            <R.Ysji />
            <YesNoButtons answer="yes" />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'theAnswerIs', isYes: true }} />
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'theAnswerIs', isYes: true, sentence: true }} />
              <H args={{ name: 'pressFastForward', skippingSteps: true }} />
            </P>
            <R.Ilrn />
            <P>
              つまり、
              <Strong>
                <EmojiNumber number={2} />
                を3回繰り返して掛ける計算
              </Strong>
              になりました！(数学用語だと「<Em>2の3乗</Em>
              」と言いますが、覚えなくても結構です。)
            </P>
            <EmojiSeparator size="sm" emojis={['2️⃣', '✖️', '2️⃣', '✖️', '2️⃣']} />
            <P>
              というわけで、最終的に
              <H args={{ name: 'powerComputation', power: 3 }} />
              になります。
            </P>
            <R.Xsgz />
            <ExpressionRunnerSeparator />
            <R.Dret />
          </>
        )
      },
      {
        title: (
          <>
            <EmojiNumber number={4} />
            を入れた場合
          </>
        ),
        content: (
          <>
            <P>
              では、一番上に
              <EmojiNumber number={4} />
              を入れた場合はどうなるでしょう？(<Em>黄色の部分</Em>)
            </P>
            <P>
              <H args={{ name: 'pressFastForward', skippingSteps: true }} />
            </P>
            <R.Bpsz />
            <P>
              つまり、
              <Strong>
                <EmojiNumber number={2} />
                を4回繰り返して掛ける計算
              </Strong>
              になりました！
            </P>
            <EmojiSeparator
              size="sm"
              emojis={['2️⃣', '✖️', '2️⃣', '✖️', '2️⃣', '✖️', '2️⃣']}
            />
            <P>
              というわけで、最終的に
              <H args={{ name: 'powerComputation', power: 4 }} />
              になります。
            </P>
            <R.Fotb />
            <ExpressionRunnerSeparator />
            <R.Zfcz />
          </>
        )
      },
      {
        type: 'summary',
        title: <>ということは…</>,
        content: (
          <>
            <P>
              この弁当箱は、
              <Strong>
                上に入っている暗号の回数分、
                <EmojiNumber number={2} />
                を繰り返して掛ける
              </Strong>
              弁当箱ということになります。
            </P>
            <R.Jtai />
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              size="sm"
              addDotDotDotEnd
              emojis={['2️⃣', '✖️', '2️⃣', '✖️', '2️⃣', '✖️']}
              description={
                <>
                  暗号の回数分、
                  <EmojiNumber number={2} />
                  を繰り返して掛ける
                </>
              }
            />
          </>
        )
      },
      {
        title: <>弁当箱は、繰り返し処理ができる</>,
        content: (
          <>
            <P>
              何が言いたいかというと、下の弁当箱の
              <InlineEmojiBoxesForQuestion />
              の部分を変えることで、さまざまな<Strong>繰り返し処理</Strong>
              を行うことができるのです。
            </P>
            <R.Nmoc />
            <P>
              たとえば、これまでは<Em>掛け算</Em>を紹介してきましたが、たとえば
              <Em>
                上に入っている暗号が
                <EmojiNumber number={1} />
                になるまで「<Strong>足し算</Strong>」を繰り返す、
              </Em>
              という計算もできます。
            </P>
            <EmojiSeparator
              size="sm"
              emojis={['➕', '3️⃣', '➕', '2️⃣', '➕', '1️⃣']}
              addDotDotDotFront
              description={
                <>
                  暗号が
                  <EmojiNumber number={1} />
                  になるまで繰り返して足す
                </>
              }
            />
            <P>
              ここでは紹介しませんが、もっと<Strong>複雑な繰り返し処理</Strong>
              を行うこともできます。
            </P>
            <P>
              <InlineHeader>結論:</InlineHeader>{' '}
              <Strong>
                弁当箱は、工夫をすることで、繰り返し処理を行うことができるのです。
              </Strong>
            </P>
            <EmojiSeparator emojis={['🔁', '🍱', '🔁']} />
          </>
        )
      },
      {
        type: 'summary',
        title: (
          <>
            魔法の
            <H args={{ name: 'yCombinator' }} />
          </>
        ),
        content: (
          <>
            <P>
              弁当箱の繰り返し処理を可能にしているのは、
              <Strong>
                下側に追加した、
                <EmojiWithText letter="a" />と<EmojiWithText letter="b" />
                からなる部分
              </Strong>
              です。
            </P>
            <R.Cnef />
            <P>
              この黄色の部分がないと、繰り返し処理を行うことができません。また、
              <Em>
                どんな繰り返し処理をするかによって
                <InlineEmojiBoxesForQuestion />
                の部分は変わっても、この黄色の部分は変わりません。
              </Em>
              毎回同じなのです。
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter="a" />,
                <Emoji>🤩</Emoji>,
                <EmojiForLetter letter="b" />
              ]}
            />
            <P>
              実は、この黄色の部分には呼び名があります。そう、題名にもある「
              <Strong>
                <H args={{ name: 'yCombinator' }} />
              </Strong>
              」です。
            </P>
            <R.News />
            <P>
              すなわち
              <Strong>
                <H args={{ name: 'yCombinator' }} />
              </Strong>
              とは、
              <Strong>
                繰り返し処理を行う際に必要となる、上のような形の弁当箱
              </Strong>
              のことを指すのです。
            </P>
            <P>
              この
              <Strong>
                <H args={{ name: 'yCombinator' }} />
              </Strong>
              を使えば、
              <H args={{ name: 'witch' }} />
              を使わなくても繰り返し処理を行うことができる。
              <Em>
                まるで魔法のようだから、「
                <Strong>
                  魔法の
                  <H args={{ name: 'yCombinator' }} />
                </Strong>
                」という題名をつけたのです。
              </Em>
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter="a" />,
                <Emoji>🧙‍♀️</Emoji>,
                <EmojiForLetter letter="b" />
              ]}
            />
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <InlineHeader>ちなみに:</InlineHeader>{' '}
                <EmojiWithText letter="a" />や<EmojiWithText letter="b" />
                を使う必要はありません。他の料理を使っても、同じパターンであれば
                <Strong>
                  <H args={{ name: 'yCombinator' }} />
                </Strong>
                になります。
              </P>
              <P>
                たとえば、
                <EmojiWithText letter="c" />や<EmojiWithText letter="d" />
                を使ってみました。こちらも
                <Strong>
                  <H args={{ name: 'yCombinator' }} />
                </Strong>
                です。もちろん、同じように機能します。
              </P>
              <R.Xrzv />
              <P>
                <InlineHeader>由来について:</InlineHeader> なぜ「
                <H args={{ name: 'yCombinator' }} />
                」という名前が付けられたのかを説明するのは非常に難しいので、ここでは説明しません。
                <H args={{ name: 'yCombinator' }} />
                がどんな機能かを理解していただければ、それだけで十分です！
              </P>
            </>
          )
        }
      },
      {
        title: <>残すはエピローグだけ！</>,
        content: (
          <>
            <P>
              <H args={{ name: 'yCombinator' }} />
              も説明し終えたので、残すはエピローグだけです！ここまでお疲れ様でした。
            </P>
            <EmojiSeparator emojis={['🎉', '🤗', '🎉']} />
            <P>
              エピローグでは、
              <Strong>
                弁当箱と
                <H args={{ name: 'computerScience' }} />
                のつながり
              </Strong>
              について語ります。あと少しだけお付き合いいただけると嬉しいです。
            </P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
