import React from 'react'
import {
  InlineHeader,
  Em,
  P,
  Strong,
  Ul,
  UlLi,
  Ol,
  OlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import EpisodeCardList from 'src/components/EpisodeCardList'
import YesNoButtons from 'src/components/YesNoButtons'
import AER from 'src/components/Yc/AllExpressionRunners'
import H from 'src/components/H'
import EmojiWithText from 'src/components/EmojiWithText'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import InlinePrioritiesLabel from 'src/components/Yc/InlinePrioritiesLabel'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: '3つの料理',
        content: (
          <>
            <EmojiSeparator letters={['a', 'b', 'a']} />
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              前回の最後には、以下のような
              <H args={{ name: 'bentoBox' }} />
              を紹介しました。
            </P>
            {AER.xwim}
            <P>
              <Strong>
                下段に3つの料理(
                <EmojiWithText letter="a" />、<EmojiWithText letter="b" />、
                <EmojiWithText letter="a" />)
              </Strong>
              がありますが、この場合どうなるのかを解説していきます。
            </P>
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
              size="sm"
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
                  コピペ(
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
              size="sm"
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
        title: <>ここまでのまとめ</>,
        type: 'summary',
        content: (
          <>
            <P>
              まとめるとこんな感じになります(
              <Em>
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                について<Strong>変更点</Strong>を加えました
              </Em>
              ):
            </P>
            <Ol>
              <OlLi>
                <Strong>
                  <InlineHeader>印をつける:</InlineHeader>{' '}
                  <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                </Strong>
              </OlLi>
              <OlLi>
                <InlineHeader>一致チェック:</InlineHeader>{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                <Emoji>✅</Emoji> (
                <Strong>
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                  は無視
                </Strong>
                )
              </OlLi>
              <OlLi>
                (<H args={{ name: 'match' }} />
                した部分のみ)
                <InlineHeader>コピペする:</InlineHeader>{' '}
                <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                <Emoji>➡️</Emoji>{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" /> (
                <Strong>
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                  は無視
                </Strong>
                )
              </OlLi>
              <OlLi>
                <InlineHeader>消す:</InlineHeader> <Emoji>💥</Emoji>{' '}
                <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" /> (
                <Strong>
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                  は無視
                </Strong>
                )
              </OlLi>
            </Ol>
          </>
        )
      },
      {
        title: '3段の弁当箱',
        content: (
          <>
            <EmojiSeparator emojis={['🍱', '3️⃣', '🍱']} />
            <P>
              続いて、こちらの
              <H args={{ name: 'bentoBox' }} />
              をご覧ください:
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
            <P>
              どういうことか説明する前に、まずは
              <H args={{ name: 'play' }} />
              してみましょう！
            </P>
          </>
        )
      },
      {
        title: '実行するとどうなる？',
        content: (
          <>
            <P>
              というわけで、
              <H args={{ name: 'playUntilDone' }} />
            </P>
            {AER.xhbi}
            <P>
              最終的に
              <EmojiWithText letter="c" />
              だけになりました。
              <Strong>どういう法則でこうなったか、分かりますか？</Strong>
            </P>
          </>
        )
      },
      {
        title: '3段の弁当箱、その2',
        content: (
          <>
            <P>
              こちらの
              <H args={{ name: 'bentoBox' }} />
              はどうでしょう？
              <H args={{ name: 'playUntilDone' }} />
            </P>
            {AER.tbij}
            <P>
              こちらは最終的に
              <EmojiWithText letter="g" />
              だけになりました。 こちらも、
              <Strong>どういう法則でこうなったか、分かりますか？</Strong>
            </P>
          </>
        )
      },
      {
        title: <H args={{ name: 'yesNoQuiz' }} />,
        type: 'yesNoQuiz',
        content: (
          <>
            <P>
              法則が分かりましたか？
              <H args={{ name: 'yesNoQuiz' }} />
              で確かめてみましょう！
            </P>
            {AER.dkiy}
            <P>
              <H args={{ name: 'whatHappensAtTheEndQuestion' }} />
            </P>
            {AER.owcy}
            <YesNoButtons answer="no" />
          </>
        )
      },
      {
        title: <>答え合わせ</>,
        content: (
          <>
            <P>
              正解はこちら。
              <H args={{ name: 'playUntilDone' }} />
            </P>
            {AER.bagn}
            <P>
              <Strong>
                <EmojiWithText letter="m" />
                だけになったので、正解は<Emoji>❌</Emoji>
              </Strong>
              (<EmojiWithText letter="k" />
              ではない) でした。
            </P>
            <P>どういう法則でこうなったのかは、次のページで説明します！</P>
            <YcNextLessonButton nextEpisodeNumber={4} />
          </>
        )
      }
    ]}
  />
)
