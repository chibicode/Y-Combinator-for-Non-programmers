import React from 'react'
import {
  Em,
  P,
  Strong,
  InlineHeader,
  Ul,
  UlLi,
  Hr
} from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EpisodeCardList from 'src/components/EpisodeCardList'
import EmojiWithText from 'src/components/EmojiWithText'
import Emoji from 'src/components/Emoji'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import EmojiForLetter from 'src/components/EmojiForLetter'
import H from 'src/components/H'
import AER from 'src/components/Yc/AllExpressionRunners'
import InlineEmojiBoxes, {
  InlineEmojiBoxesForQuestion
} from 'src/components/Yc/InlineEmojiBoxes'
import YesNoButtons from 'src/components/YesNoButtons'
import letterEmojiMapping from 'src/lib/yc/letterEmojiMapping'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: (
          <>
            おやつ入りの
            <H args={{ name: 'bentoBox', skipEmoji: true }} />
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              今回は、次の
              <H args={{ name: 'bentoBox' }} />
              を見ていきます:
            </P>
            {AER.bxfv}
            <P>
              この
              <H args={{ name: 'bentoBox', short: true }} />、
              <Em>
                上のほうに
                <EmojiWithText letter="z" />と<EmojiWithText letter="y" />
                といった「おやつ」がある
              </Em>
              のに注目です。
            </P>
            <EmojiSeparator emojis={['🍬', '😍', '🍩']} />
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: (
          <>
            <EmojiForLetter letter="z" /> か <EmojiForLetter letter="y" />
            、どっち？
          </>
        ),
        content: (
          <>
            <P>
              次に、<Strong>暗号が「0」</Strong>の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              を用意します。
            </P>
            {AER.fhlw}
            <P>
              こちらを、先ほどの
              <H args={{ name: 'bentoBox', skipEmoji: true }} />の
              <InlineEmojiBoxesForQuestion />
              の部分に埋め込んでみます。
            </P>
            {AER.tkqr}
            <P>
              実は、これを最後まで
              <H args={{ name: 'play' }} />
              すると、
              <Strong>
                最終的に
                <EmojiWithText letter="z" />か<EmojiWithText letter="y" />
                のどちらかが残ります
              </Strong>
              。
            </P>
            <EmojiSeparator emojis={['🍬', '🤔', '🍩']} />
            <P>というわけで、ここで質問です！</P>
            <P>
              <Strong>質問:</Strong> 上の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />を
              <H args={{ name: 'play' }} />
              したら最後に残るのは「
              <EmojiWithText letter="z" />
              」だ。<Emoji>⭕️</Emoji>か<Emoji>❌</Emoji>か？
            </P>
            <YesNoButtons answer="no" tooHard />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'theAnswerIs', isYes: false }} /> (残るのは
            <EmojiWithText letter="y" />)
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'theAnswerIs', isYes: false }} />
              でした。残るのは
              <EmojiWithText letter="y" />
              です。
            </P>
            <P>
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.jliw}
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
              下の
              <InlineEmojiBoxesForQuestion />
              の部分に暗号が<Strong>「0」</Strong>の
              <H args={{ name: 'bentoBox', short: true }} />
              を埋め込んで
              <H args={{ name: 'play' }} />
              すると、
              <Strong>
                最終的に
                <EmojiWithText letter="y" />
                が残ります。
              </Strong>
            </P>
            {AER.fqwj}
            <P>
              では、
              <InlineEmojiBoxesForQuestion />
              に他の暗号の
              <H args={{ name: 'bentoBox', short: true }} />
              を埋め込んだらどうなるのでしょう？確かめてみましょう。
            </P>
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: (
          <>
            <EmojiForLetter letter="z" /> か <EmojiForLetter letter="y" />
            、どっち？その2
          </>
        ),
        content: (
          <>
            <P>
              今度は、<Strong>暗号が「1」</Strong>の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              を用意し、
            </P>
            {AER.yehl}
            <P>
              先ほどの
              <H args={{ name: 'bentoBox', skipEmoji: true }} />の
              <InlineEmojiBoxesForQuestion />
              の部分に埋め込んでみます。
            </P>
            {AER.mrky}
            <P>というわけで、ここで質問です！</P>
            <P>
              <Strong>質問:</Strong> 上の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />を
              <H args={{ name: 'play' }} />
              したら最後に残るのは「
              <EmojiWithText letter="z" />
              」だ。<Emoji>⭕️</Emoji>か<Emoji>❌</Emoji>か？
            </P>
            <YesNoButtons answer="yes" tooHard />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'theAnswerIs', isYes: true }} /> (残るのは
            <EmojiWithText letter="z" />)
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'theAnswerIs', isYes: true }} />
              でした。残るのは
              <EmojiWithText letter="z" />
              です。
            </P>
            <P>
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.ctyl}
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
              <InlineHeader>ここまでをまとめると:</InlineHeader> 下の
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
                暗号が<Strong>「1」</Strong>の
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                を埋め込むと、
                <Strong>
                  <EmojiWithText letter="z" />
                  が残る
                </Strong>
              </UlLi>
            </Ul>
            {AER.fqwj}
            <EmojiSeparator emojis={['🍬', '🤔', '🍩']} />
            <P>
              面白いですね。では最後に、暗号が<Strong>「2」</Strong>
              の場合を見てみましょう。
            </P>
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: (
          <>
            <EmojiForLetter letter="z" /> か <EmojiForLetter letter="y" />
            、どっち？その3
          </>
        ),
        content: (
          <>
            <P>
              最後に、<Strong>暗号が「2」</Strong>の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              を用意し、
            </P>
            {AER.kupy}
            <P>
              先ほどの
              <H args={{ name: 'bentoBox', skipEmoji: true }} />の
              <InlineEmojiBoxesForQuestion />
              の部分に埋め込んでみます。
            </P>
            {AER.qdkf}
            <P>というわけで、ここで質問です！</P>
            <P>
              <Strong>質問:</Strong> 上の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />を
              <H args={{ name: 'play' }} />
              したら最後に残るのは「
              <EmojiWithText letter="z" />
              」だ。<Emoji>⭕️</Emoji>か<Emoji>❌</Emoji>か？
            </P>
            <YesNoButtons answer="yes" tooHard />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'theAnswerIs', isYes: true }} /> (残るのは
            <EmojiWithText letter="z" />)
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'theAnswerIs', isYes: true }} />
              でした。残るのは
              <EmojiWithText letter="z" />
              です。
            </P>
            <P>
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.gtwk}
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
              <InlineHeader>ここまでをまとめると:</InlineHeader> 下の
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
                暗号が<Strong>「1」</Strong>の
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                を埋め込むと、
                <Strong>
                  <EmojiWithText letter="z" />
                  が残る
                </Strong>
              </UlLi>
              <UlLi>
                暗号が<Strong>「2」</Strong>の
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                を埋め込むと、
                <Strong>
                  <EmojiWithText letter="z" />
                  が残る
                </Strong>
              </UlLi>
            </Ul>
            {AER.fqwj}
            <P>
              そろそろパターンが分かってきましたか？それでは、種明かしをしましょう！
            </P>
          </>
        )
      },
      {
        title: (
          <>
            暗号が「0」かどうか判別できる
            <H args={{ name: 'bentoBox', short: true }} />
          </>
        ),
        content: (
          <>
            <P>
              実は先ほどの
              <H args={{ name: 'bentoBox', short: true }} />
              は、
              <Strong>
                <InlineEmojiBoxesForQuestion />
                の暗号が「0」かどうかを判別できる
              </Strong>
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              なのです。
            </P>
            <Ul>
              <UlLi>
                もし
                <InlineEmojiBoxesForQuestion />に<Strong>暗号が「0」</Strong>の
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                を埋め込んで実行した場合、最後に
                <Strong>
                  <EmojiWithText letter="y" />
                </Strong>
                が残ります 。
              </UlLi>
            </Ul>
            <EmojiSeparator emojis={['0️⃣', '➡️', '🍩']} />
            <Ul>
              <UlLi>
                もし
                <InlineEmojiBoxesForQuestion />に
                <Strong>暗号が「1以上」</Strong>の
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                を埋め込んで実行した場合、最後に
                <Strong>
                  <EmojiWithText letter="z" />
                </Strong>
                が残ります 。
              </UlLi>
            </Ul>
            <EmojiSeparator emojis={['🔢', '➡️', '🍬']} />
            {AER.nlxe}
          </>
        )
      },
      {
        title: (
          <>
            <EmojiForLetter letter="z" />や<EmojiForLetter letter="y" />
            の部分を変えても同様
          </>
        ),
        content: (
          <>
            <P>
              ちなみに、
              <Strong>
                <EmojiWithText letter="z" />や<EmojiWithText letter="y" />
                の部分を別なものに変えても同様の結果になります
              </Strong>
              。
            </P>
            <Hr />
            <P>
              たとえば次の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              だと、先ほど
              <Strong>
                <EmojiWithText letter="z" />
              </Strong>
              だった部分が
              <InlineEmojiBoxes
                emojis={[letterEmojiMapping['w'], letterEmojiMapping['x']]}
              />
              になっています。(<Em>黄色</Em>の部分)
            </P>
            {AER.dvrw}
            <P>
              この場合、
              <InlineEmojiBoxesForQuestion />が<Strong>「0」</Strong>なら最後は
              <EmojiWithText letter="y" />、<Strong>「1」</Strong>なら
              <InlineEmojiBoxes
                emojis={[letterEmojiMapping['w'], letterEmojiMapping['x']]}
              />
              になります。
            </P>
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'bentoBox', skipEmoji: true }} />
            は「条件分岐」もできる
          </>
        ),
        content: (
          <>
            <P>
              今回紹介したのは、「<Em>暗号が0か、それ以外か</Em>
              」を判別し、それぞれ違う結果を出す
              <H args={{ name: 'bentoBox', short: true }} />
              でした。
            </P>
            <EmojiSeparator emojis={['0️⃣', '❓', '🔢']} />
            <P>
              こういった処理は専門用語で「<Strong>条件分岐</Strong>
              」と言います。プログラミングをしたことがある方や、エクセルが得意な方には「
              <Strong>IF文</Strong>
              (または<Em>IF関数</Em>
              )」と言ったほうが分かりやすいかもしれません。
            </P>
            <P>
              ここでは時間の都合上紹介できませんでしたが、
              <H args={{ name: 'bentoBox', short: true }} />
              を使えば、さまざまな条件分岐を表現することができます。たとえば「
              <Em>Aの暗号はBの暗号より大きいか、小さいか、それとも等しいか</Em>
              」を判別できる
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              もあります。
            </P>
            <EmojiSeparator emojis={['🅰️', '❓', '🅱️']} />
            <P>
              何が言いたいかというと、
              <H args={{ name: 'bentoBox', short: true }} />
              は「<Strong>四則演算だけでなく、条件分岐もできる</Strong>
              」ということです。
            </P>
          </>
        )
      },
      {
        title: <>条件分岐ができれば、複雑な計算ができる</>,
        content: (
          <>
            <P>
              条件分岐ができれば、
              <Em>複雑な計算を行うことができます</Em>
              。たとえば、<Strong>カラオケの利用料金の計算</Strong>。
            </P>
            <EmojiSeparator emojis={['🎤', '😄', '🎶']} />
            <P>
              「カラオケの部屋代が1時間あたりいくらか」「何時間利用したか」だけであれば四則演算で計算できます。しかし、実際は
              <Em>
                「平日か週末か」「昼か夜か」「学生か大人か」等によって料金体系が変わってくる
              </Em>
              ので、条件分岐をしなければ正しい料金は計算できません。
            </P>
            <P>
              <H args={{ name: 'bentoBox', short: true }} />
              は四則演算も条件分岐もできるので、カラオケの料金といった複雑な計算も(工夫すれば)できてしまうのです。
            </P>
          </>
        )
      },
      {
        title: <>四則演算や条件分岐よりさらに複雑な処理はできるのか？</>,
        content: (
          <>
            <EmojiSeparator emojis={['✨', '🍱', '✨']} />
            <P>
              四則演算や条件分岐ができるだけでも十分すごいですが、
              <Strong>
                <H args={{ name: 'bentoBox', short: true }} />
                はもっと複雑な処理を行うことができます
              </Strong>
              。ぜひ、次のページから始まる上級編で紹介させてください。
            </P>
            <P>
              そしてそこでやっと、記事の題名にもある「
              <Strong>Yコンビネーター</Strong>」が登場します。乞うご期待！
            </P>
            <YcNextLessonButton nextEpisodeNumber={10} />
          </>
        )
      },
      {
        type: 'sideNote',
        title: <>ちょっと休憩？</>,
        content: (
          <>
            <H args={{ name: 'takeABreak' }} />
          </>
        )
      },
      {
        title: <>それでは上級に進みましょう！</>,
        content: (
          <>
            <YcNextLessonButton nextEpisodeNumber={10} />
          </>
        )
      }
    ]}
  />
)
