import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import EmojiNumber from 'src/components/EmojiNumber'
import {
  Ul,
  UlLi,
  P,
  Strong,
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
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'

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
              <Strong>とりあえず、読み進めてみてください！</Strong>
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
              」がどんな機能か説明しましょう。
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
                <EmojiNumber number={1} />
                があるのに加え、
                <Strong>
                  <H args={{ name: 'witch' }} />
                  がまた登場しているのに注目です
                </Strong>
                (黄色の部分)。
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
              <TopRightBadge inline topRightBadgeType="pred" />
              がついている
              <EmojiNumber number={3} />
              は、
              <EmojiNumber number={2} />
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
                  <H args={{ name: 'witch' }} />
                  の下に<Emoji>✖️</Emoji>
                  <EmojiNumber number={3} />
                  が追加されました。(青色の部分)
                </Em>
              </UlLi>
            </Ul>
            {AER.ifxr}
            <P>
              ちなみに前回説明した通り、
              <Strong>
                <Emoji>✖️</Emoji>は掛け算の省略表記
              </Strong>
              です。
            </P>
          </>
        )
      },
      {
        title: (
          <>
            <EmojiNumber number={2} />
            から
            <EmojiNumber number={1} />へ
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
              <Em>
                一番上の数字が
                <EmojiNumber number={2} />
                から
                <EmojiNumber number={1} />
                になり、
              </Em>
              <Em highlightType="blue">
                <H args={{ name: 'witch' }} />
                の下に<Emoji>✖️</Emoji>
                <EmojiNumber number={2} />
                が追加されました。
              </Em>
            </P>
            {AER.davn}
          </>
        )
      },
      {
        title: (
          <>
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
            {AER.zvet}
            <P>
              ここで、条件分岐の
              <Strong>
                <InlineEmojiBoxesForCondition type="condition" />{' '}
                の中にある暗号が
                <EmojiNumber number={0} />
                になりました。
              </Strong>
            </P>
            {AER.yvty}
            <P>
              ということは、条件分岐が行われた後に、
              <Strong>
                下側の
                <InlineEmojiBoxesForCondition type="trueCase" />
                に入っている
                <EmojiNumber number={1} />
                が残ります。
              </Strong>
            </P>
            {AER.umce}
            <P>
              すると、
              <Strong>
                <H args={{ name: 'witch' }} />
                が消え
              </Strong>
              、<Strong>残ったのは掛け算の省略表記</Strong>だけになりました。
              <H args={{ name: 'pressPlay' }} />
            </P>
            {AER.orhx}
            <P>
              つまり、これで <EmojiNumber number={3} /> <Emoji>✖️</Emoji>{' '}
              <EmojiNumber number={2} /> <Emoji>✖️</Emoji>{' '}
              <EmojiNumber number={1} /> の計算ができたわけです！
            </P>
            <EmojiSeparator emojis={['🎉', '🤗', '🎉']} />
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
                <H args={{ name: 'fastForward' }} />
                すると、
              </Strong>
            </P>
            {AER.zxux}
            <P>
              途中で、下から上に <EmojiNumber number={3} /> <Emoji>✖️</Emoji>{' '}
              <EmojiNumber number={2} /> <Emoji>✖️</Emoji>{' '}
              <EmojiNumber number={1} /> という順番になり、
            </P>
            {AER.wqdb}
            <P>
              最終的に、
              <Strong>
                3 ✕ 2 ✕ 1 = <EmojiNumber number={6} />
              </Strong>
              になります。
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
              <H args={{ name: 'whatHappensInTheMiddleQuestion' }} />
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
              というわけで、途中で下から上に
              <EmojiNumber number={4} /> <Emoji>✖️</Emoji>{' '}
              <EmojiNumber number={3} /> <Emoji>✖️</Emoji>{' '}
              <EmojiNumber number={2} /> <Emoji>✖️</Emoji>{' '}
              <EmojiNumber number={1} />
              という順番になります。
            </P>
            <P>
              では、最後まで見てみましょう。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.nfkp}
            <P>
              というわけで、最終的に
              <Strong>
                4 ✕ 3 ✕ 2 ✕ 1 = <EmojiNumber number={24} />
              </Strong>
              になります。
            </P>
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
              時間の都合上省略しますが、
              <EmojiNumber number={5} />
              からはじめる場合も、途中で下から
              <EmojiNumber number={5} /> <Emoji>✖️</Emoji>{' '}
              <EmojiNumber number={4} /> <Emoji>✖️</Emoji>{' '}
              <EmojiNumber number={3} /> <Emoji>✖️</Emoji>{' '}
              <EmojiNumber number={2} /> <Emoji>✖️</Emoji>{' '}
              <EmojiNumber number={1} />
              という順番になります。
            </P>
            {AER.osqg}
            <P>
              そして、最終的に
              <Strong>
                5 ✕ 4 ✕ 3 ✕ 2 ✕ 1 = <EmojiNumber number={120} />
              </Strong>
              になります。
            </P>
            <P>それでは、まとめに入りましょう！</P>
          </>
        )
      },
      {
        type: 'summary',
        title: (
          <>
            <H args={{ name: 'witch' }} />
            のまとめ
          </>
        ),
        content: (
          <>
            <P>
              「
              <Strong>
                弁当箱の
                <H args={{ name: 'witch' }} />
              </Strong>
              」を使うと、「
              <Strong>
                ある数からはじめて、1を引いた数を掛けていき、最後に「1」を掛けるまで、掛け算を繰り返す
              </Strong>
              」という計算を行うことができます。
            </P>
            {AER.vrwt}
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              size="sm"
              emojis={['3️⃣', '✖️', '2️⃣', '✖️', '1️⃣']}
              description={
                <>
                  ちなみに、答えは「<Strong>6</Strong>」になります
                </>
              }
            />
            {AER.lodr}
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              size="sm"
              emojis={['4️⃣', '✖️', '3️⃣', '✖️', '2️⃣', '✖️', '1️⃣']}
              description={
                <>
                  ちなみに、答えは「<Strong>24</Strong>」になります
                </>
              }
            />
            {AER.fjyk}
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              size="sm"
              emojis={['5️⃣', '✖️', '4️⃣', '✖️', '3️⃣', '✖️', '2️⃣', '✖️', '1️⃣']}
              description={
                <>
                  ちなみに、答えは「<Strong>120</Strong>」になります
                </>
              }
            />
            <P>上側にどんな暗号を入れても、</P>
            {AER.miez}
            <P>途中で以下のような形になるので、</P>
            {AER.fapu}
            <P>
              「
              <Strong>
                ある数からはじめて、1を引いた数を掛けていき、最後に「1」を掛けるまで、掛け算を繰り返す
              </Strong>
              」という計算を行うことができます。
            </P>
          </>
        )
      }
    ]}
  />
)
