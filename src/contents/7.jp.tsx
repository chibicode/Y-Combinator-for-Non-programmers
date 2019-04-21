import React from 'react'
import { InlineHeader, Em, P, Strong } from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import AER from 'src/components/Yc/AllExpressionRunners'
import H from 'src/components/H'
import { InlineEmojiBoxesForQuestion } from 'src/components/Yc/InlineEmojiBoxes'
import EpisodeCardList from 'src/components/EpisodeCardList'
import YesNoButtons from 'src/components/YesNoButtons'
import EmojiForLetter from 'src/components/EmojiForLetter'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>暗号が「1」の場合</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              前回紹介したこちらの
              <H args={{ name: 'bentoBox', short: true }} />
              ですが、
            </P>
            {AER.qmof}
            <P>
              今度は暗号が<Strong>「1」</Strong>の
              <H args={{ name: 'bentoBox', short: true }} />
              と組み合わせてみましょう。
            </P>
            {AER.slyk}
            <P>
              するとどうなるでしょうか？
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.eemn}
            <P>
              最終的に暗号が<Strong>「2」</Strong>になりました:
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
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.syhh}
            <P>
              最終的に暗号が<Strong>「3」</Strong>になりました:
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
              結論から言うと、この
              <H args={{ name: 'bentoBox', short: true }} />
              には、
              <Strong>
                <InlineEmojiBoxesForQuestion />
                に入っている
                <H args={{ name: 'bentoBox', short: true }} />
                の暗号に「1」を加える効果があります。
              </Strong>
            </P>
            {AER.qmof}
            <P>
              <InlineEmojiBoxesForQuestion />
              の暗号が<Strong>「1」</Strong>だったら実行後に暗号が
              <Strong>「2」</Strong>
              になり、
              <InlineEmojiBoxesForQuestion />
              の暗号が<Strong>「2」</Strong>だったら実行後に暗号が
              <Strong>「3」</Strong>
              になるというわけです。
            </P>
            <EmojiSeparator emojis={['❓', '➕', '1️⃣']} />
            <P>
              <InlineHeader>ちなみに:</InlineHeader>{' '}
              <Strong>
                上の
                <H args={{ name: 'bentoBox', short: true }} />
                を暗記する必要はありません。
              </Strong>
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
              <H args={{ name: 'bentoBox' }} />は
              <Em>
                ただのパズルかと思いきや、「<Strong>1を足す</Strong>
                」という<Strong>簡単な計算</Strong>をすることもできる
              </Em>
              ようです。
            </P>
            <EmojiSeparator emojis={['🍱', '➕', '️1️⃣']} />
            <P>
              他にはどんな計算ができるのでしょう？たとえば、
              <Strong>
                <H args={{ name: 'bentoBox', short: true }} />{' '}
                同士の足し算はできるのでしょうか？
              </Strong>
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
              こちらに暗号が<Strong>「1」</Strong>の
              <H args={{ name: 'bentoBox', short: true }} />
              があります:
            </P>
            {AER.bpza}
            <P>
              そして、こちらには暗号が<Strong>「2」</Strong>の
              <H args={{ name: 'bentoBox', short: true }} />
              があります:
            </P>
            {AER.vrvl}
            <P>
              このふたつの
              <H args={{ name: 'bentoBox', short: true }} />
              の暗号を足して、<Strong>1 + 2 = 3</Strong>
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
              こちらに
              <InlineEmojiBoxesForQuestion />
              がふたつある
              <H args={{ name: 'bentoBox', short: true }} />
              があります:
            </P>
            {AER.goif}
            <P>
              <InlineEmojiBoxesForQuestion />
              の部分に、先ほどの暗号が<Strong>「1」</Strong>の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              と暗号が<Strong>「2」</Strong>の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              を埋め込みます。(<Em>黄色の部分</Em>)
            </P>
            {AER.hdwy}
            <P>
              さて、これで<Strong>1 + 2 = 3</Strong>
              が計算できるのでしょうか？というわけで、ここで質問です。
            </P>
            <P>
              <H args={{ name: 'whatsTheNumberQuestion', number: 3 }} />
            </P>
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
              <Strong>
                <H args={{ name: 'theAnswerIs', isYes: true }} />
                でした。
              </Strong>
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.rome}
            <P>
              なんと、最終的に暗号が<Strong>「3」</Strong>になりました！
            </P>
            {AER.dhdk}
            <P>
              <H args={{ name: 'bentoBox' }} />
              は、<Strong>1 + 2 = 3</Strong>を計算することもできるんです。
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
              たまたま成功しただけかもしれないので、他の例で試してみましょう。
              たとえば、<Strong>3 + 1 = 4</Strong>はどうでしょう。
            </P>
            <EmojiSeparator emojis={['3️⃣', '➕', '️1️⃣']} />
            <P>
              暗号が<Strong>「3」</Strong> (右下に
              <Em>
                <EmojiForLetter letter="g" />
                が3個
              </Em>
              )の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              と暗号が<Strong>「1」</Strong> (右下に
              <Em>
                <EmojiForLetter letter="f" />
                が1個
              </Em>
              )の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              を埋め込んでみます。
            </P>
            <P>
              <H args={{ name: 'pressPlay' }} />
            </P>
            {AER.unck}
            <P>
              こちらは、最終的に暗号が<Strong>「4」</Strong>になりました！
            </P>
            {AER.cpbj}
            <P>
              というわけで、「
              <Strong>3 + 1 = 4</Strong>」も計算できてしまいました。
            </P>
            <EmojiSeparator emojis={['3️⃣', '➕', '️1️⃣']} />
          </>
        )
      }
    ]}
  />
)
