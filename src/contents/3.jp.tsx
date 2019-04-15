import React from 'react'
import {
  InlineHeader,
  Em,
  P,
  Strong,
  Ul,
  UlLi,
  Hr
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import EpisodeCardList from 'src/components/EpisodeCardList'
import YesNoButtons from 'src/components/YesNoButtons'
import AER from 'src/components/Yc/AllExpressionRunners'
import H from 'src/components/H'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiForLetter from 'src/components/EmojiForLetter'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import InlinePrioritiesLabel from 'src/components/Yc/InlinePrioritiesLabel'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>2✕2の弁当箱</>,
        content: (
          <>
            <EmojiSeparator emojis={['2️⃣', '✖️', '2️⃣']} />
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              前回の最後には、以下のような
              <H args={{ name: 'bentoBox' }} />
              を紹介しました。
            </P>
            {AER.ljjg}
            <P>
              <Strong>
                上段にふたつの料理(
                <EmojiWithText letter="e" />と<EmojiWithText letter="f" />)
              </Strong>
              がありますが、この場合どうなるのかを解説していきます。
            </P>
          </>
        )
      },
      {
        title: (
          <>
            <BottomRightBadge inline bottomRightBadgeType="callArg" />
            がふたつ
          </>
        ),
        content: (
          <>
            <P>
              さっそく
              <H args={{ name: 'pressNext' }} />
            </P>
            {AER.egmr}
            <P>
              このように、
              <EmojiWithText letter="e" />と<EmojiWithText letter="f" />
              が両方とも
              <BottomRightBadge inline bottomRightBadgeType="callArg" />
              になります。
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter="e" />,
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <EmojiForLetter letter="f" />
              ]}
            />
            <P>
              <Strong>
                上段にある料理すべてに
                <BottomRightBadge inline bottomRightBadgeType="callArg" />
                の印がつくというわけです。
              </Strong>
            </P>
          </>
        )
      },
      {
        title: (
          <>
            <BottomRightBadge inline bottomRightBadgeType="callArg" />
            はふたつとも
            <H args={{ name: 'copy' }} />
            する
          </>
        ),
        content: (
          <>
            <P>
              先に進めると、
              <BottomRightBadge inline bottomRightBadgeType="funcArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />
              が両方とも
              <EmojiWithText letter="d" />
              なので
              <H args={{ name: 'match' }} />
              します。
            </P>
            {AER.lygz}
            <P>
              その次の
              <H args={{ name: 'copy' }} />
              のステップがどうなるか見てみましょう。
              <H args={{ name: 'pressNext' }} />
            </P>
            {AER.fivy}
            <P>
              <Strong>
                このように、
                <BottomRightBadge inline bottomRightBadgeType="callArg" />
                の料理は両方とも
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />に
                <H args={{ name: 'copy' }} />
                されます。
              </Strong>
            </P>
            <Hr />
            <P>
              そして最終的に
              <BottomRightBadge inline bottomRightBadgeType="callArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcArg" />
              が消えて終了です。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.dmwy}
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'summary' }} />: 上段に複数の料理がある場合
          </>
        ),
        type: 'summary',
        content: (
          <>
            <P>
              <Strong>
                1. 上段に複数の料理があるときは、すべてに
                <BottomRightBadge inline bottomRightBadgeType="callArg" />
                の印がつく。
              </Strong>
            </P>
            {AER.fpsd}
            <P>
              2. (<H args={{ name: 'match' }} />
              した場合のみ)
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="callArg" />
                の料理はすべて
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />に
                <H args={{ name: 'copy' }} />
                される。
              </Strong>
            </P>
            {AER.vegw}
          </>
        )
      },
      {
        title: '下段に3つの料理',
        content: (
          <>
            <P>
              続いて、こちらの
              <H args={{ name: 'bentoBox' }} />
              をご覧ください。
            </P>
            {AER.xwim}
            <P>
              <Strong>
                下段に3つの料理(
                <EmojiWithText letter="a" />、<EmojiWithText letter="b" />、
                <EmojiWithText letter="a" />)
              </Strong>
              がありますが、この場合はどうなるのでしょう？
            </P>
            <EmojiSeparator letters={['a', 'b', 'a']} />
          </>
        )
      },
      {
        title: '真ん中の料理',
        content: (
          <>
            <P>
              <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />
              の代わりに、
              <Strong>
                真ん中にある料理には
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                の印をつけます。
              </Strong>
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />,
                <Emoji>🤗</Emoji>,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              ]}
            />
            <P>
              <H args={{ name: 'pressNext' }} />
            </P>
            {AER.rmsd}
            <P>
              <EmojiWithText letter="b" />に
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              の印がつきました。
            </P>
          </>
        )
      },
      {
        title: '真ん中の料理はスルー',
        content: (
          <>
            <P>
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                の料理は、
              </Strong>
            </P>
            <Ul>
              <UlLi>
                <InlineHeader>
                  コピー(
                  <BottomRightBadge
                    inline
                    bottomRightBadgeType="callArg"
                  />{' '}
                  <Emoji>➡️</Emoji>{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                  )にも影響されず、
                </InlineHeader>
              </UlLi>
              <UlLi>
                <InlineHeader>
                  消されること(<Emoji>💥</Emoji>{' '}
                  <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcArg" />
                  )もありません。
                </InlineHeader>
              </UlLi>
            </Ul>
            <P>
              <Strong>つまり、スルーして大丈夫ということです。</Strong>
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />,
                <Emoji>🙄</Emoji>,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              ]}
            />
          </>
        )
      },
      {
        title: 'スルーした結果',
        content: (
          <>
            <P>
              というわけで最後まで見てみましょう。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.jmqh}
            <P>
              ご覧の通り
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              にある
              <EmojiWithText letter="b" />
              には、最後まで何も起きません。
            </P>
            <P>というわけで、実行結果はこうなります。</P>
            {AER.iped}
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'summary' }} />:
            下段に左でも右でもない料理がある場合
          </>
        ),
        type: 'summary',
        content: (
          <>
            <P>
              1.{' '}
              <Strong>
                下段の真ん中の料理には
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                の印をつける。
              </Strong>
            </P>
            {AER.qwke}
            <P>
              2.{' '}
              <Strong>
                残りのステップで
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                はスルーする。
              </Strong>
            </P>
          </>
        )
      },
      {
        title: (
          <>
            予告: 3段の
            <H args={{ name: 'bentoBox', short: true }} />
          </>
        ),
        content: (
          <>
            <EmojiSeparator emojis={['🍱', '3️⃣', '🍱']} />
            <P>
              次のページからは、下のような
              <Strong>
                3段の
                <H args={{ name: 'bentoBox' }} />
              </Strong>
              が登場します:
            </P>
            {AER.cvtc}
            <P>
              <InlineHeader>今までになかった特徴が2つあります:</InlineHeader>
            </P>
            <Ul>
              <UlLi>
                下の2段は先ほどと一緒ですが、
                <Em>
                  一番上に
                  <EmojiWithText letter="d" />
                  が追加されており、<Strong>3段</Strong>になっています。
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  <InlinePrioritiesLabel>1</InlinePrioritiesLabel> や{' '}
                  <InlinePrioritiesLabel>2</InlinePrioritiesLabel>
                  という数字が左端に表示されています。
                </Em>
              </UlLi>
            </Ul>
            <P>この場合はどうなるのでしょうか？</P>
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
              次のページで詳しく説明しますが、先に
              <H args={{ name: 'yesNoQuiz' }} />
              をやってみましょう。勘で答えてみてください。
            </P>
            {AER.cvtc}
            <P>
              <H args={{ name: 'whatHappensAtTheEndQuestion' }} />
            </P>
            {AER.uemm}
            <YesNoButtons answer="yes" />
          </>
        )
      },
      {
        title: (
          <>
            正解は<Emoji>⭕️</Emoji>
          </>
        ),
        content: (
          <>
            <P>
              <Strong>
                正解は<Emoji>⭕️</Emoji>でした。
              </Strong>
              <H args={{ name: 'pressPlay' }} />
            </P>
            {AER.xhbi}
            <P>どういう法則でこうなるのかは、次のページで説明します！</P>
            <YcNextLessonButton nextEpisodeNumber={4} />
          </>
        )
      }
      // {
      //   title: (
      //     <>
      //       <H args={{ name: 'bentoBox', short: true }} />
      //       、その2
      //     </>
      //   ),
      //   content: (
      //     <>
      //       <P>
      //         こちらの
      //         <H args={{ name: 'bentoBox' }} />
      //         はどうでしょう？
      //         <H args={{ name: 'pressPlay' }} />
      //       </P>
      //       {AER.tbij}
      //       <P>
      //         こちらは最終的に
      //         <EmojiWithText letter="g" />
      //         だけになりました。 こちらも、
      //         <Strong>どういう法則でこうなったか、分かりますか？</Strong>
      //       </P>
      //     </>
      //   )
      // },
      // {
      //   title: <H args={{ name: 'yesNoQuiz' }} />,
      //   type: 'yesNoQuiz',
      //   content: (
      //     <>
      //       <P>
      //         法則が分かりましたか？
      //         <H args={{ name: 'yesNoQuiz' }} />
      //         で確かめてみましょう！
      //       </P>
      //       {AER.dkiy}
      //       <P>
      //         <H args={{ name: 'whatHappensAtTheEndQuestion' }} />
      //       </P>
      //       {AER.owcy}
      //       <YesNoButtons answer="no" />
      //     </>
      //   )
      // },
      // {
      //   title: <>答え合わせ</>,
      //   content: (
      //     <>
      //       <P>
      //         正解はこちら。
      //         <H args={{ name: 'pressPlay' }} />
      //       </P>
      //       {AER.bagn}
      //       <P>
      //         <Strong>
      //           <EmojiWithText letter="m" />
      //           だけになったので、正解は<Emoji>❌</Emoji>
      //         </Strong>
      //         (<EmojiWithText letter="k" />
      //         ではない) でした。
      //       </P>
      //       <P>どういう法則でこうなったのかは、次のページで説明します！</P>
      //       <YcNextLessonButton nextEpisodeNumber={4} />
      //     </>
      //   )
      // }
    ]}
  />
)
