import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  Hr,
  P,
  InlineHeader,
  Strong,
  Ul,
  UlLi,
  Em
} from 'src/components/ContentTags'
import AER from 'src/components/Yc/AER'
import H from 'src/components/H'
import Emoji from 'src/components/Emoji'
import EmojiWithText from 'src/components/EmojiWithText'
import { InlineEmojiBoxesForQuestion } from 'src/components/Yc/InlineEmojiBoxes'
import YesNoButtons from 'src/components/YesNoButtons'
import EmojiSeparator from 'src/components/EmojiSeparator'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>前回の続き</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />{' '}
              前回紹介した「条件分岐」の
              <H args={{ name: 'bentoBox', short: true }} />
              をもう一度ご覧ください。
            </P>
            {AER.nlxe}
            <P>
              <InlineHeader>復習:</InlineHeader> 上の
              <H args={{ name: 'bentoBox', short: true }} />の
              <InlineEmojiBoxesForQuestion />
              の部分に…
            </P>
            <Ul>
              <UlLi>
                暗号が<Strong>「0」</Strong>の
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                を埋め込むと、
                <Strong>
                  <EmojiWithText letter="y" />
                  が残る
                </Strong>
              </UlLi>
              <UlLi>
                暗号が<Strong>「1以上」</Strong>の
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                を埋め込むと、
                <Strong>
                  <EmojiWithText letter="z" />
                  が残る
                </Strong>
              </UlLi>
            </Ul>
            <Hr />
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
              こちらに、<Strong>暗号が「1」</Strong>の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              を用意します。
            </P>
            {AER.azge}
            <P>
              こちらを、先ほどの
              <H args={{ name: 'bentoBox', skipEmoji: true }} />の
              <InlineEmojiBoxesForQuestion />
              の部分に埋め込んでみます。
            </P>
            {AER.eigf}
            <P>
              暗号が
              <Strong>「1以上」</Strong>の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              を埋め込むと、
              <Strong>
                <EmojiWithText letter="z" />
                が残る
              </Strong>
              、と先ほど書きました。というわけで質問です。
            </P>
            <Hr />
            <P>
              <Strong>質問:</Strong> 上の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />を
              <H args={{ name: 'play' }} />
              したら最後に残るのは「
              <Strong>
                <EmojiWithText letter="z" />
              </Strong>
              」だ。<Emoji>⭕️</Emoji>か<Emoji>❌</Emoji>か？
            </P>
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
              <Strong>
                <H args={{ name: 'theAnswerIs', isYes: false }} />
                でした。
              </Strong>
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.eqbo}
            <P>
              なんと、もともとの暗号は
              <Strong>「1」</Strong>だったのに、
              <EmojiWithText letter="z" />
              ではなく、
              <Strong>
                下のような全然関係ない
                <H args={{ name: 'bentoBox', short: true }} />
              </Strong>
              が残ってしまいました！
            </P>
            {AER.xlwo}
            <P>前回では上手くいったのに、どうしてこうなったのでしょう？</P>
            <EmojiSeparator emojis={['🤯', '❓', '🍬']} />
          </>
        )
      },
      {
        title: <>シンプルな例で考えてみる</>,
        content: (
          <>
            <P>
              原因を解明するためには、
              <Em>
                先ほどの
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                よりもシンプルな
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                で考えてみたほうが分かりやすい
              </Em>
              と思います。というわけで、
              <H args={{ name: 'lookAtThisBentoBox' }} />。
            </P>
            {AER.wbpx}
            <P>注目ポイントはふたつあります:</P>
            <Ul>
              <UlLi>
                <Em>
                  一番上に
                  <Strong>
                    <EmojiWithText letter="v" />
                  </Strong>
                  が入っています。
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  <InlineEmojiBoxesForQuestion />
                  の部分には、料理が<Strong>ひとつだけ</Strong>入ります。
                </Em>
              </UlLi>
            </Ul>
          </>
        )
      },
      {
        title: (
          <>
            <InlineEmojiBoxesForQuestion size="md" /> に何か入れてみる
          </>
        ),
        content: (
          <>
            <P>
              とりあえず、
              <EmojiWithText letter="c" />
              を<InlineEmojiBoxesForQuestion />
              に入れてみました。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.gszp}
            <P>
              <Strong>
                最終的に
                <EmojiWithText letter="c" />
                になりますね。
              </Strong>
            </P>
            <Hr />
            <P>
              <EmojiWithText letter="d" />
              を<InlineEmojiBoxesForQuestion />
              に入れてみたらどうでしょう？
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.kntz}
            <P>
              <Strong>
                こちらは、最終的に
                <EmojiWithText letter="d" />
                になりました。
              </Strong>
            </P>
            <Hr />
            {AER.wbpx}
            <P>
              ということは、こちらの
              <H args={{ name: 'bentoBox', short: true }} />を
              <H args={{ name: 'play' }} />
              すると、かならず
              <Strong>
                最終的に
                <InlineEmojiBoxesForQuestion />
                の料理だけになる
              </Strong>
              のでしょうか？
            </P>
            <EmojiSeparator emojis={['❓', '🤔', '❓']} />
          </>
        )
      }
    ]}
  />
)
