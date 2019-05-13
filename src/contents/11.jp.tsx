import React from 'react'
import {
  Ul,
  UlLi,
  Em,
  P,
  Strong,
  InlineHeader
} from 'src/components/ContentTags'
import AER from 'src/components/Yc/AER'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiForLetter from 'src/components/EmojiForLetter'
import Emoji from 'src/components/Emoji'
import EpisodeCardList from 'src/components/EpisodeCardList'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiForLetterWithAlphaConvertBadge from 'src/components/EmojiForLetterWithAlphaConvertBadge'
import YesNoButtons from 'src/components/YesNoButtons'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
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
            <EmojiSeparator
              nodes={[
                <Emoji>⚠️</Emoji>,
                <EmojiForLetter letter="b" />,
                <Emoji>⚠️</Emoji>
              ]}
            />
            <P>どうすれば、この状況を打開できるでしょうか？</P>
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'drink' }} />
            をつける
          </>
        ),
        content: (
          <>
            <P>
              では、一番下にある
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                の部分に注目してみましょう。
              </Strong>
              暗号が<Strong>「1」</Strong>の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              です。
            </P>
            {AER.kogx}
            <P>
              ここで、
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                にある
                <EmojiWithText letter="b" />
                に、
                <H args={{ name: 'drink' }} />
                の印をつけます。
              </Strong>
            </P>
            {AER.qxhk}
            <P>
              <InlineHeader>ポイント:</InlineHeader>{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />の
              <EmojiWithText letter="b" />
              だけでなく、
              <Em>
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />の
                <EmojiWithText letter="b" />
                にも
                <H args={{ name: 'drink' }} />
                を加えることによって、これまでと同じ
                <Strong>「1」</Strong>の暗号の
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                になります
              </Em>
              。
            </P>
          </>
        )
      },
      {
        title: (
          <>
            <BottomRightBadge inline bottomRightBadgeType="callArg" />と
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
            が被らなくなる
          </>
        ),
        content: (
          <>
            <P>
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />の
                <EmojiWithText letter="b" />に<H args={{ name: 'drink' }} />
                がついたことで、
                <BottomRightBadge inline bottomRightBadgeType="callArg" />の
                <EmojiWithText letter="b" />
                と被らなくなります。
              </Strong>
            </P>
            {AER.bpyh}
            <P>
              「<H args={{ name: 'drink' }} />
              がある
              <EmojiWithText letter="b" />
              」と、「
              <H args={{ name: 'drink' }} />
              がない
              <EmojiWithText letter="b" />
              」は、<Strong>別物として扱われるので、被らなくなる</Strong>
              のです。
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter="b" />,
                <Emoji>🆚</Emoji>,
                <EmojiForLetterWithAlphaConvertBadge alphaConvertCount={1}>
                  <EmojiForLetter letter="b" />
                </EmojiForLetterWithAlphaConvertBadge>
              ]}
            />
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
            <Ul>
              <UlLi>
                <Strong>
                  <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                  に同じ料理があるときは…
                </Strong>
              </UlLi>
              <UlLi>
                <Strong>
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                  と
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                  にあるそれと同じ料理に
                  <H args={{ name: 'drink' }} />
                  をつける。
                </Strong>
              </UlLi>
              <UlLi>
                <H args={{ name: 'drink' }} />
                をつけても、<Strong>暗号は変わらない</Strong>。
              </UlLi>
              <UlLi>
                だがこうすることで、
                <Strong>
                  <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                  が被るという状況を必ず回避できる。
                </Strong>
              </UlLi>
              <EmojiSeparator
                nodes={[
                  <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                  <EmojiForLetterWithAlphaConvertBadge alphaConvertCount={1}>
                    <BottomRightBadge
                      inline
                      bottomRightBadgeType="funcUnbound"
                    />
                  </EmojiForLetterWithAlphaConvertBadge>,
                  <EmojiForLetterWithAlphaConvertBadge alphaConvertCount={1}>
                    <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                  </EmojiForLetterWithAlphaConvertBadge>
                ]}
              />
            </Ul>
          </>
        )
      },
      {
        title: <>最後まで進めると…</>,
        content: (
          <>
            <P>
              では、
              <H args={{ name: 'drink' }} />
              をつけた時点から最後まで
              <H args={{ name: 'fastForward' }} />
              してみましょう。
            </P>
            {AER.sqnu}
            <P>
              ちゃんと
              <EmojiWithText letter="z" />
              が残りました！
            </P>
            {AER.fjxw}
            <P>
              つまり、
              <BottomRightBadge inline bottomRightBadgeType="callArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              が同じになる場合でも、
              <H args={{ name: 'drink' }} />
              をつけることで、<Em>条件分岐が正しく機能する</Em>のです。
            </P>
            <EmojiSeparator emojis={['🥤', '🤗', '️🥤']} />
          </>
        )
      },
      {
        title: <>暗記する必要はありません！</>,
        content: (
          <>
            <P>
              今回紹介した
              <H args={{ name: 'drink' }} />
              のルールは、
              <Em>
                次以降のページに出てくる、
                <Strong>
                  条件分岐以外の
                  <H args={{ name: 'bentoBox', short: true }} />
                  にも適用されます
                </Strong>
                。
              </Em>
            </P>
            <EmojiSeparator emojis={['🥤', '🍱', '️🥤']} />
            <P>
              ただし、<Strong>ルールを暗記する必要はありません</Strong>。
            </P>
            <P>
              <H args={{ name: 'bentoBox', skipEmoji: true }} />を
              <H args={{ name: 'fastForward' }} />
              をする途中で
              <H args={{ name: 'drink' }} />
              が出てきたら、「<Em>ああ、あのルールね</Em>
              」と思ってくださるだけで大丈夫です。
            </P>
          </>
        )
      },
      {
        title: <>次のページへ</>,
        content: (
          <>
            <EmojiSeparator emojis={['🔥', '️😤', '🔥']} />
            <P>
              そろそろこの記事のクライマックスに入ります！ゴールまでもう少しです。あと少しお付き合いください！
            </P>
            <YcNextLessonButton />
          </>
        )
      }
    ]}
  />
)
