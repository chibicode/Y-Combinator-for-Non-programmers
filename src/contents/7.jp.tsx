import React from 'react'
import {
  Hr,
  Ul,
  UlLi,
  InlineHeader,
  Em,
  P,
  Strong
} from 'src/components/ContentTags'
import EmojiNumber from 'src/components/EmojiNumber'
import EmojiSeparator from 'src/components/EmojiSeparator'
import AER from 'src/components/AER'
import H from 'src/components/H'
import { InlineEmojiBoxesForQuestion } from 'src/components/InlineEmojiBoxes'
import EpisodeCardList from 'src/components/EpisodeCardList'
import YesNoButtons from 'src/components/YesNoButtons'
import EmojiForLetter from 'src/components/EmojiForLetter'
import Emoji from 'src/components/Emoji'
import NextLessonButton from 'src/components/NextLessonButton'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>暗号が「1」の場合</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              前回紹介したこちらの弁当箱ですが、
            </P>
            {AER.qmof}
            <P>
              今度は暗号が<Strong>「1」</Strong>
              の弁当箱を
              <InlineEmojiBoxesForQuestion />
              に入れてみましょう。
            </P>
            {AER.slyk}
            <P>
              するとどうなるでしょうか？
              <H args={{ name: 'pressFastForward', isFaster: true }} />
            </P>
            {AER.eemn}
            <P>
              最終的に暗号が<Strong>「2」</Strong>の弁当箱が残りました:
            </P>
            {AER.rceu}
            <P>
              つまり、暗号が<Strong>「1」</Strong>から<Strong>「2」</Strong>
              に変化したというわけです。
            </P>
            <EmojiSeparator emojis={['1️⃣', '➡️', '2️⃣']} />
          </>
        )
      },
      {
        title: <>暗号が「2」の場合</>,
        content: (
          <>
            <P>暗号が「2」だったらどうでしょう？</P>
            {AER.sisn}
            <P>
              <H args={{ name: 'pressFastForward', isFaster: true }} />
            </P>
            {AER.syhh}
            <P>
              最終的に暗号が<Strong>「3」</Strong>の弁当箱が残りました:
            </P>
            {AER.ablz}
            <P>
              つまり、暗号が<Strong>「2」</Strong>から<Strong>「3」</Strong>
              に変化したというわけです。
            </P>
            <EmojiSeparator emojis={['2️⃣', '➡️', '3️⃣']} />
          </>
        )
      },
      {
        type: 'summary',
        title: <>1を足す弁当箱</>,
        content: (
          <>
            <P>
              <InlineHeader>すなわち:</InlineHeader> 下の弁当箱の
              <InlineEmojiBoxesForQuestion />
              に、暗号が隠された弁当箱を入れて
              <H args={{ name: 'play' }} />
              すると、
              <Strong>その暗号に「1」を加えた弁当箱</Strong>
              が最後に残ります。
            </P>
            {AER.xgei}
            <P>
              <InlineEmojiBoxesForQuestion />
              の暗号が<Strong>「1」</Strong>だったら暗号が
              <Strong>「2」</Strong>の弁当箱が残り、
              <InlineEmojiBoxesForQuestion />
              の暗号が<Strong>「2」</Strong>だったら暗号が
              <Strong>「3」</Strong>の弁当箱が残るというわけです。
            </P>
            <EmojiSeparator
              nodes={[
                <InlineEmojiBoxesForQuestion size="md" />,
                <Emoji>➕</Emoji>,
                <EmojiNumber number={1} />
              ]}
            />
            <P>
              <H args={{ name: 'byTheWay' }} />{' '}
              <Strong>上の弁当箱を暗記する必要はありません。</Strong>
              そのまま読み進めて下さい！
            </P>
          </>
        )
      },
      {
        title: <>つまり…</>,
        content: (
          <>
            <P>
              <H args={{ name: 'bentoBoxPuzzle' }} />は
              <Em>
                ただのパズルかと思いきや、「<Strong>1を足す</Strong>
                」という<Strong>簡単な計算</Strong>をすることもできる
              </Em>
              ようです。
            </P>
            <EmojiSeparator emojis={['🍱', '➕', '️1️⃣']} />
            <P>
              他にはどんな計算ができるのでしょう？たとえば、
              <Strong>弁当箱同士の足し算はできるのでしょうか？</Strong>
            </P>
            <EmojiSeparator emojis={['🍱', '➕', '️🍱']} />
            <P>さっそく検証してみましょう！</P>
          </>
        )
      },
      {
        title: <>1 + 2 = 3?</>,
        content: (
          <>
            <P>
              こちらに暗号が<Strong>「1」</Strong>の弁当箱があります:
            </P>
            {AER.bpza}
            <P>
              そして、こちらには暗号が<Strong>「2」</Strong>の弁当箱があります:
            </P>
            {AER.vrvl}
            <P>
              このふたつの弁当箱の暗号を足して、<Strong>1 + 2 = 3</Strong>
              を計算することはできるのでしょうか？
            </P>
            <EmojiSeparator emojis={['1️⃣', '➕', '️2️⃣']} />
            <P>
              <H args={{ name: 'yesNoQuiz' }} />
              で試してみましょう！
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
              <H args={{ name: 'lookAtThisBentoBox' }} />。
            </P>
            {AER.goif}
            <P>先ほど紹介した「1を足す」弁当箱と微妙に異なる点があります。</P>
            <Ul>
              <UlLi>
                <Em>
                  上に
                  <InlineEmojiBoxesForQuestion />
                  がひとつではなく、ふたつあります。
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  右下に5つの料理があります。「1を足す」弁当箱には4つしかありませんでした。
                </Em>
              </UlLi>
            </Ul>
            <Hr />
            <P>
              ここで、一番上の
              <InlineEmojiBoxesForQuestion />
              の部分に、先ほどの暗号が<Strong>「1」</Strong>
              の弁当箱を入れてみます。
            </P>
            {AER.brrh}
            <P>
              そして、二番目の
              <InlineEmojiBoxesForQuestion />
              の部分に、先ほどの暗号が<Strong>「2」</Strong>
              の弁当箱を入れてみます。
            </P>
            {AER.hdwy}
            <P>では、ここで質問です。</P>
            {AER.entr}
            <P>
              <H args={{ name: 'whatsTheNumberQuestion', number: 3 }} />
            </P>
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
            {AER.rome}
            <P>
              なんと、最終的に暗号が<Strong>「3」</Strong>の弁当箱が残りました！
            </P>
            {AER.dhdk}
            <P>
              最初に暗号が<Strong>「1」</Strong>と<Strong>「2」</Strong>
              の弁当箱を
              <InlineEmojiBoxesForQuestion />
              に入れると、暗号が<Strong>「3」</Strong>
              になりました。ということは、<Strong>1 + 2 = 3</Strong>
              が計算できた、ということでしょうか？
            </P>
            <EmojiSeparator emojis={['1️⃣', '➕', '️2️⃣']} />
          </>
        )
      },
      {
        title: <>3 + 1 = 4は計算できる？</>,
        content: (
          <>
            <P>
              他の例で試してみましょう。たとえば、<Strong>3 + 1 = 4</Strong>
              はどうでしょう。
            </P>
            <EmojiSeparator emojis={['3️⃣', '➕', '️1️⃣']} />
            <P>
              暗号が<Strong>「3」</Strong> (右下に
              <Em>
                <EmojiForLetter letter="g" />
                が3個
              </Em>
              )の弁当箱と暗号が<Strong>「1」</Strong> (右下に
              <Em>
                <EmojiForLetter letter="f" />
                が1個
              </Em>
              )の弁当箱を入れてみます。
            </P>
            <P>
              <H args={{ name: 'pressPlay' }} />
            </P>
            {AER.unck}
            <P>
              こちらは、最終的に暗号が<Strong>「4」</Strong>
              の弁当箱が残りました！
            </P>
            {AER.cpbj}
            <P>
              というわけで、「
              <Strong>3 + 1 = 4</Strong>」も計算できてしまいました。
            </P>
            <EmojiSeparator emojis={['3️⃣', '➕', '️1️⃣']} />
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
              まとめると、この弁当箱は、
              <Strong>
                ふたつの
                <InlineEmojiBoxesForQuestion />
                に入っている弁当箱の暗号を足し算してくれます。
              </Strong>
            </P>
            {AER.bxdf}
            <P>
              <H args={{ name: 'byTheWay' }} /> 今回も、
              <Strong>上の弁当箱を暗記する必要はありません。</Strong>
              そのまま読み進めて下さい！
            </P>
          </>
        )
      },
      {
        title: <>足し算以外の計算はできるのか？</>,
        content: (
          <>
            <P>
              <H args={{ name: 'bentoBoxPuzzle' }} />は
              <Em>
                ただのパズルかと思いきや、「<Strong>足し算</Strong>」
              </Em>
              ができてしまうんです。
            </P>
            <EmojiSeparator emojis={['🍱', '➕', '️🍱']} />
            <P>実は、弁当箱ができるのは足し算だけではありません。</P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
