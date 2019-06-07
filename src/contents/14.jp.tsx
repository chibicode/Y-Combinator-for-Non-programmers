import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import EmojiNumber from 'src/components/EmojiNumber'
import {
  Ul,
  UlLi,
  P,
  Strong,
  InlineHeader,
  Ol,
  OlLi,
  Em,
  Hr
} from 'src/components/ContentTags'
import H from 'src/components/H'
import AER from 'src/components/AER'
import {
  InlineEmojiBoxesForQuestion,
  InlineEmojiBoxesForCondition
} from 'src/components/InlineEmojiBoxes'
import EmojiSeparator from 'src/components/EmojiSeparator'
import TopRightBadge from 'src/components/TopRightBadge'
import Emoji from 'src/components/Emoji'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiForLetter from 'src/components/EmojiForLetter'
import EmojiForLetterWithTopRightBadgeWrapper from 'src/components/EmojiForLetterWithTopRightBadgeWrapper'
import {
  magicalVariableName,
  cakeVariableName
} from 'src/lib/specialVariableNames'
import YesNoButtons from 'src/components/YesNoButtons'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>複雑な計算</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              今回は、弁当箱を使った<Strong>複雑な計算</Strong>
              にチャレンジしていきます。まずは下の式をご覧下さい。
            </P>
            <EmojiSeparator size="sm" emojis={['3️⃣', '✖️', '2️⃣', '✖️', '1️⃣']} />
            <P>上の式は、</P>
            <Ul>
              <UlLi>
                <Strong>「3」からはじめて、</Strong>
              </UlLi>
              <UlLi>
                <Strong>どんどん「1」を引いた数を掛け算していき、</Strong>
              </UlLi>
              <UlLi>
                <Strong>最後に「1」を掛けるまで繰り返す</Strong>
              </UlLi>
            </Ul>
            <P>
              という計算です。(ちなみに、<Em>3 ✕ 2 ✕ 1 = 6</Em>です。)
            </P>
            <P>
              これを、たとえば「<Strong>4</Strong>
              」からはじめた場合は以下の通りになり、
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
            <P>
              「<Strong>5</Strong>
              」からはじめた場合は以下の通りになります。
            </P>
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
              このように、
              <Strong>
                ある数からはじめて、1を引いた数を掛けていき、最後に「1」を掛けるまで、掛け算を繰り返す
              </Strong>
              という計算を、数学用語で「<Strong>階乗</Strong>
              」と呼びます。(豆知識なので、覚えなくても大丈夫です。)
            </P>
          </>
        )
      },
      {
        title: <>弁当箱で計算できる？</>,
        content: (
          <>
            <P>
              <H args={{ name: 'question' }} />
              では、
              <Strong>
                こういった計算を、弁当箱を使って行うことができるでしょうか？
              </Strong>
            </P>
            <P>
              たとえば、
              <Em>
                下の弁当箱の
                <InlineEmojiBoxesForQuestion />
                に何を入れたら、「<Strong>3 ✕ 2 ✕ 1</Strong>
                」を計算できるでしょう？
              </Em>
            </P>
            {AER.rreb}
            <P>
              また、「<Strong>4 ✕ 3 ✕ 2 ✕ 1</Strong>」「
              <Strong>5 ✕ 4 ✕ 3 ✕ 2 ✕ 1</Strong>」も計算できるでしょうか？
            </P>
            {AER.kqzn}
            {AER.aimh}
            <P>今回は、こういった計算ができるかどうか検証していきます！</P>
          </>
        )
      },
      {
        title: (
          <>
            弁当箱の
            <H args={{ name: 'witch' }} />
          </>
        ),
        content: (
          <>
            <P>
              はじめに、「
              <Strong>
                弁当箱の
                <H args={{ name: 'witch' }} />
              </Strong>
              」という「<Em>架空の</Em>」機能を紹介します。
            </P>
            <EmojiSeparator emojis={['✨', '🧙‍♀️', '✨']} />
            <P>
              なぜ「<Em>架空の</Em>」機能かというと、これは
              <Strong>実際には弁当箱に備わっていない機能だから</Strong>です。
            </P>
            <P>
              しかし、
              <Strong>もし仮にこの機能を使うことができるとしたら</Strong>
              、先ほどの
            </P>
            <EmojiSeparator size="sm" emojis={['3️⃣', '✖️', '2️⃣', '✖️', '1️⃣']} />
            <P>といった計算をカンタンに行うことができます。だから、</P>
            <Ol>
              <OlLi>
                <Em>まずは、この架空の機能を使って上の計算を行い</Em>
                (カンタン)、
              </OlLi>
              <OlLi>
                <Em>その後、この架空の機能を使わずに上の計算を行う</Em>(複雑)
              </OlLi>
            </Ol>
            <P>
              といった順番で説明していきます。この順番で説明したほうが、分かりやすいかなと判断した次第です。
            </P>
          </>
        )
      },
      {
        title: (
          <>
            弁当箱の
            <H args={{ name: 'witch' }} />
          </>
        ),
        content: (
          <>
            <P>
              前置きはこれくらいにして、「
              <Strong>
                弁当箱の
                <H args={{ name: 'witch' }} />
              </Strong>
              」がどういう機能か説明しましょう。
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter={magicalVariableName} />,
                <Emoji>🧙‍♀️</Emoji>,
                <EmojiForLetter letter={magicalVariableName} />
              ]}
            />
            <P>
              次の弁当箱は、下に
              <H args={{ name: 'witch' }} />
              が、上に
              <EmojiNumber number={3} />
              が入っています。
            </P>
            {AER.zxux}
            <P>
              これを進めると、下の
              <H args={{ name: 'witch' }} />
              の部分が次のように変化します。
              <H args={{ name: 'pressNext' }} />
            </P>
            {AER.itzl}
            <P>ポイントは次の3点です:</P>
            <Ul>
              <UlLi>
                先ほどのように、弁当箱の下側に
                <H args={{ name: 'witch' }} />
                がある場合、必ずこのように変化します。
              </UlLi>
              <UlLi>
                上の
                <EmojiNumber number={3} />
                には何も起きません。
              </UlLi>
              <UlLi>
                変化後の弁当箱には
                <EmojiWithText letter={magicalVariableName} />や
                <EmojiNumber number={1} />や<InlineEmojiBoxesForQuestion />
                があるのに加え、
                <Strong>
                  <H args={{ name: 'witch' }} />
                  がまた出現しているのに注目です
                </Strong>
                。
              </UlLi>
            </Ul>
            {AER.gtnr}
            <P>
              <Strong>重要: このルールを覚える必要はありません！</Strong>
              とりあえず読み進めてみてください。
            </P>
          </>
        )
      },
      {
        title: <>先に進めてみる</>,
        content: (
          <>
            <P>
              先に進めてみましょう。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.syfp}
            <P>
              ご覧の通り、
              <EmojiWithText letter={magicalVariableName} />
              が、上にあった
              <EmojiNumber number={3} />
              に変わりました。
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter={magicalVariableName} />,
                <Emoji>➡️</Emoji>,
                <EmojiNumber number={3} />
              ]}
            />
            <P>
              続きを見てみましょう。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.wdol}
            <P>
              ご覧の通り、
              <EmojiNumber number={3} />に
              <TopRightBadge inline topRightBadgeType="pred" />
              がついていたので、
              <EmojiNumber number={3} />が<EmojiNumber number={2} />
              になりました。
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetterWithTopRightBadgeWrapper topRightBadgeType="pred">
                  <EmojiNumber number={3} />
                </EmojiForLetterWithTopRightBadgeWrapper>,
                <Emoji>➡️</Emoji>,
                <EmojiNumber number={2} />
              ]}
            />
            <P>
              続きを見てみましょう。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.luir}
            <P>
              ご覧の通り、条件分岐の弁当箱で、
              <InlineEmojiBoxesForCondition type="condition" /> の中にある暗号が
              <EmojiNumber number={2} />
              だったため、上にある{' '}
              <InlineEmojiBoxesForCondition type="falseCase" /> が残りました。
            </P>
          </>
        )
      },
      {
        title: <>ここまでの振り返り</>,
        type: 'summary',
        content: (
          <>
            <P>まだ途中ですが、ここまでを振り返ると、</P>
            <Ul>
              <UlLi>
                最初は
                <EmojiNumber number={3} />と
                <H args={{ name: 'witch' }} />
                だった弁当箱が、
              </UlLi>
              <UlLi>
                <EmojiNumber number={2} />と
                <H args={{ name: 'witch' }} />と<InlineEmojiBoxesForQuestion />
                の弁当箱に変わった。
              </UlLi>
            </Ul>
            <P>
              つまり、
              <Strong>
                数字が1減り、
                <H args={{ name: 'witch' }} />
                はそのままで、下に
                <InlineEmojiBoxesForQuestion />
                がひとつ増えました。
              </Strong>
            </P>
            {AER.ifxr}
          </>
        )
      },
      {
        title: (
          <>
            最後は
            <H args={{ name: 'witch' }} />
            が消える
          </>
        ),
        content: (
          <>
            <P>
              さらに続きを見てみましょう。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.mihy}
            <P>
              先ほどとほとんど同じことが起こりました！
              <Strong>
                数字が1減り、
                <H args={{ name: 'witch' }} />
                はそのままで、下に
                <InlineEmojiBoxesForQuestion />
                がまたひとつ増えました。
              </Strong>
            </P>
            {AER.davn}
            <P>
              さらに続きを見てみましょう。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.zvet}
            <P>
              ここで、
              <Strong>
                今までではじめて、
                <InlineEmojiBoxesForCondition type="condition" />{' '}
                の中にある暗号が
                <EmojiNumber number={0} />
                になりました。ということは、次は下側にある
                <InlineEmojiBoxesForCondition type="trueCase" />
                が残るということです。
              </Strong>
            </P>
            {AER.umce}
            <P>
              <Strong>
                つまり、上側にあった
                <H args={{ name: 'witch' }} />
                が消え、これにて実行が完了します。
              </Strong>
            </P>
            {AER.dyef}
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
              <Strong>
                つまり、
                <EmojiNumber number={3} />と<H args={{ name: 'witch' }} />
                が入っている弁当箱を
                <H args={{ name: 'play' }} />
                すると、
              </Strong>
            </P>
            {AER.zxux}
            <P>
              <Strong>
                <EmojiNumber number={1} />
                と、その下に
                <InlineEmojiBoxesForQuestion />
                がふたつ残ります。
              </Strong>
            </P>
            {AER.xtjt}
            <Hr />
            <P>
              下の
              <H args={{ name: 'fastForward' }} />
              を押すと、最初から最後まで超特急で見ることができます。
            </P>
            {AER.mnfh}
            <P>
              それでは、ここで
              <H args={{ name: 'yesNoQuiz' }} />
              をしてみましょう！
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
              今度は、上に
              <EmojiNumber number={4} />
              があります。
            </P>
            {AER.yklt}
            <P>
              <H args={{ name: 'whatHappensAtTheEndQuestion' }} />
            </P>
            {AER.fsmk}
            <YesNoButtons answer="yes" tooHard />
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
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.peoq}
            <P>
              <Strong>
                つまり、
                <EmojiNumber number={4} />と<H args={{ name: 'witch' }} />
                が入っている弁当箱を
                <H args={{ name: 'play' }} />
                すると、
                <EmojiNumber number={1} />
                と、その下に
                <InlineEmojiBoxesForQuestion />
                が3つ残ります。1
              </Strong>
            </P>
            {AER.xsux}
            <P>そろそろパターンが見えてきましたか？</P>
            <EmojiSeparator emojis={['🧙‍♀️', '🤔', '🧙‍♀️']} />
          </>
        )
      },
      {
        title: (
          <>
            <EmojiNumber number={5} />
            からはじめた場合
          </>
        ),
        content: (
          <>
            <P>
              上に
              <EmojiNumber number={5} />
              がある場合はどうでしょう？
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.osqg}
            <P>
              今回は、下に
              <InlineEmojiBoxesForQuestion />
              が4つ残りました！
            </P>
            {AER.jcvr}
            <P>それでは、ここでパターンを解説しましょう！</P>
          </>
        )
      },
      {
        type: 'summary',
        title: (
          <>
            <H args={{ name: 'witch' }} />
            のパターン
          </>
        ),
        content: (
          <>
            <P>
              <InlineHeader>パターン:</InlineHeader>{' '}
              次のような弁当箱を実行した場合、
            </P>
            {AER.miez}
            <P>
              最終的に
              <EmojiNumber number={1} />
              と、その下に
              <InlineEmojiBoxesForQuestion />
              が「<Strong>暗号から1を引いた数</Strong>」ぶん縦に並びます。
            </P>
            {AER.fapu}
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'witch' }} />
            の機能を変更する
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'witch' }} />は
              <Strong>
                あくまで架空の機能なので、好きなように機能を変更してもかまいません。
              </Strong>
            </P>
            <P>
              たとえば、先ほど
              <H args={{ name: 'witch' }} />
              は次のように変化する、と説明しました。
            </P>
            {AER.hknv}
            <P>
              では、
              <Strong>
                <H args={{ name: 'witch' }} />
                の機能を変更し、
                <InlineEmojiBoxesForQuestion />
                の代わりに、
                <EmojiWithText letter={cakeVariableName} />
                が登場するようにしたらどうなるでしょう？
              </Strong>
            </P>
            {AER.njwf}
            <P>
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.njmb}
            <P>
              最後に
              <InlineEmojiBoxesForQuestion />
              がふたつ残るかわりに、
              <EmojiWithText letter={cakeVariableName} />
              がふたつ残りました。
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter={cakeVariableName} />,
                <Emoji>🧙‍♀️</Emoji>,
                <EmojiForLetter letter={cakeVariableName} />
              ]}
            />
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
              では、
              <Strong>
                <H args={{ name: 'witch' }} />
                の機能を変更し、
                <InlineEmojiBoxesForQuestion />
                の代わりに、
                <EmojiWithText letter={magicalVariableName} />
                が登場するようにしてみます。
              </Strong>
            </P>
            {AER.hpiv}
            <P>
              <H args={{ name: 'whatHappensAtTheEndQuestion' }} />
            </P>
            {AER.sydo}
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
              <H args={{ name: 'theAnswerIs', isYes: false, sentence: true }} />
              まず、途中まで見てみましょう。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.wean}
          </>
        )
      }
    ]}
  />
)
