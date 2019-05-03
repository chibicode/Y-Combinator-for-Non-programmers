import React from 'react'
import { Em, P, Strong, InlineHeader } from 'src/components/ContentTags'
import AER from 'src/components/Yc/AER'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiForLetter from 'src/components/EmojiForLetter'
import Emoji from 'src/components/Emoji'
import EpisodeCardList from 'src/components/EpisodeCardList'
import EmojiWithText from 'src/components/EmojiWithText'
import YesNoButtons from 'src/components/YesNoButtons'
import H from 'src/components/H'
import { InlineEmojiBoxesForQuestion } from 'src/components/Yc/InlineEmojiBoxes'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: (
          <>
            条件分岐の
            <H args={{ name: 'bentoBox', short: true }} />
            、再び
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              中級の最後で紹介した「条件分岐」の
              <H args={{ name: 'bentoBox', short: true }} />
              をもう一度ご覧ください。
            </P>
            {AER.nlxe}
            <P>
              <InlineHeader>復習:</InlineHeader> 上の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />の
              <InlineEmojiBoxesForQuestion />
              の部分に…
            </P>
            <P>
              暗号が<Strong>「0」</Strong>の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              を埋め込むと、
              <Strong>
                <EmojiWithText letter="y" />
                が残る
              </Strong>
              。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>0️⃣</Emoji>,
                <Emoji>➡️</Emoji>,
                <EmojiForLetter letter="y" />
              ]}
            />
            <P>
              暗号が<Strong>「1以上」</Strong>の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              を埋め込むと、
              <Strong>
                <EmojiWithText letter="z" />
                が残る
              </Strong>
              。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>🔢</Emoji>,
                <Emoji>➡️</Emoji>,
                <EmojiForLetter letter="z" />
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
              <H args={{ name: 'question' }} /> 上の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />を
              <H args={{ name: 'play' }} />
              したら最後に残るのは「
              <Strong>
                <EmojiWithText letter="z" />
              </Strong>
              」だ。
              <H args={{ name: 'yesOrNo' }} />
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
            <P>
              先ほど、「
              <Em>
                暗号が1以上の
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                を埋め込むと、
                <EmojiWithText letter="z" />
                が残る
              </Em>
              」と書いたのと矛盾していますよね。どうしてこうなったのでしょう？
            </P>
            <EmojiSeparator emojis={['🤯', '❓', '🍬']} />
          </>
        )
      },
      {
        title: (
          <>
            答え: <BottomRightBadge inline bottomRightBadgeType="callArg" />と
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
            に同じ料理があるか
          </>
        ),
        content: (
          <>
            <P>
              前回、
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                に同じ料理があるかどうかで、結果が変わる
                <H args={{ name: 'bentoBox', short: true }} />
                がある
              </Strong>
              と説明しました。
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <Emoji>❓</Emoji>,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              ]}
            />
            <P>
              先ほどの
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              では、
              <H args={{ name: 'play' }} />
              直後に
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                に同じ料理がある
              </Strong>
              のです。こちらをご覧ください。
            </P>
            {AER.fdpd}
            <P>
              <Strong>
                <EmojiWithText letter="b" />が
                <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                の両方にありますね。
              </Strong>
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <EmojiForLetter letter="b" />,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              ]}
            />
            <P>このことが結果を狂わせているのです。</P>
          </>
        )
      },
      {
        title: (
          <>
            もし
            <EmojiWithText letter="b" />
            じゃなかったら？
          </>
        ),
        content: (
          <>
            <P>
              では、暗号に
              <EmojiWithText letter="b" />
              を使わなければ大丈夫なのか、確かめてみましょう。
            </P>
            <P>
              こちらも<Strong>暗号が「1」</Strong>の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              ですが、
              <EmojiWithText letter="b" />
              のかわりに
              <EmojiWithText letter="c" />
              を使っています。
            </P>
            {AER.zlgw}
            <P>
              こちらを条件分岐の
              <H args={{ name: 'bentoBox', short: true }} />
              に埋め込んでみます(<Em>黄色の部分</Em>)。
            </P>
            {AER.ttgq}
            <P>
              この場合、
              <BottomRightBadge inline bottomRightBadgeType="callArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              に同じ料理はありません。では、
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.xrzv}
            <P>
              ちゃんと
              <EmojiWithText letter="z" />
              が最後に残りました！
            </P>
            {AER.pyfd}
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
                条件分岐の
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                は、
                <InlineEmojiBoxesForQuestion />
                に入る
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                によっては機能しなくなる。
              </Strong>
            </P>
            {AER.nlxe}
            <P>
              たとえば、もしも
              <InlineEmojiBoxesForQuestion />
              に入る
              <H args={{ name: 'bentoBox', skipEmoji: true }} />の
              <Strong>
                真ん中に
                <EmojiWithText letter="b" />
              </Strong>
              がある場合、
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                に同じ料理が入ることになる
              </Strong>
              。
            </P>
            {AER.fdpd}
            <P>
              <Strong>
                すると、いつもと結果が変わり、正しく条件分岐ができなくなる。
              </Strong>
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter="z" />,
                <Emoji>❌</Emoji>,
                <EmojiForLetter letter="y" />
              ]}
            />
          </>
        )
      },
      {
        title: <>正しく条件分岐ができるようにするには？</>,
        content: (
          <>
            <P>
              では、
              <Strong>
                暗号にどんな料理が含まれていても、正しく条件分岐ができるようにするには
              </Strong>
              どうすればいいのでしょう？
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter="z" />,
                <Emoji>🤔</Emoji>,
                <EmojiForLetter letter="y" />
              ]}
            />
            <P>
              答えはシンプルです。
              <Strong>
                必要に応じて、暗号に使われている料理に変更を加えればいい
              </Strong>
              のです。
            </P>
          </>
        )
      },
      {
        title: <>飲み物を追加</>,
        content: (
          <>
            <P>
              たとえば、こちらの先ほどの
              <H args={{ name: 'bentoBox', short: true }} />
              をご覧ください。
            </P>
            {AER.dygl}
            <P>
              <BottomRightBadge inline bottomRightBadgeType="callArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              に同じ料理(
              <EmojiWithText letter="b" />
              )があるので、このままだと条件分岐ができません。(
              <Em>
                このことを、左上に表示された
                <Emoji>⚠️</Emoji>アイコンが表しています。
              </Em>
              )
            </P>
            <P>
              ではここで、小さな変更を加えてみます。その変更とは、
              <Strong>
                料理に
                <H args={{ name: 'drink' }} />
                を追加すること
              </Strong>
              です。どういうことか、ゆっくり説明しますね！
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>🥤</Emoji>,
                <Emoji>➡️</Emoji>,
                <EmojiForLetter letter="b" />
              ]}
            />
          </>
        )
      }
    ]}
  />
)
