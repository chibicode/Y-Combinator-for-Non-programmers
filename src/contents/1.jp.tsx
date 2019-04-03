import React from 'react'
import {
  Em,
  Img,
  P,
  PFullWidth,
  Hr,
  Strong,
  InlineHeader
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiSeparator from 'src/components/EmojiSeparator'
import YesNoButtons from 'src/components/YesNoButtons'
import AER from 'src/components/Yc/AllExpressionRunners'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import EpisodeCardList from 'src/components/EpisodeCardList'
import H from 'src/components/H'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <H args={{ name: 'bentoBox' }} />,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              この記事では、<Strong>とあるパズル</Strong>
              を使ってYコンビネーターとは何かを学んでいきます。 今回は、
              <Em>このパズルの基本ルール</Em>
              を紹介します。
            </P>
            <P>
              まずはじめにこちらの写真をご覧ください。筆者の地元・横浜の崎陽軒で販売されているお弁当です(撮影は筆者)。
            </P>
            <PFullWidth>
              <Img src="/static/images/yc/bentoboxes.jpg" alt="Bento Boxes" />
            </PFullWidth>
            <P>
              なぜお弁当の写真をお見せしたかというと、今回紹介するパズルには
              <H args={{ name: 'bentoBox' }} />
              という名前がついているからです。
            </P>
            <EmojiSeparator emojis={['🍱', '🤔', '🍱']} />
            <P>
              <H args={{ name: 'bentoBox' }} />
              がどんなものか、説明しますね！
            </P>
          </>
        )
      },
      {
        title: (
          <>
            これが
            <H args={{ name: 'bentoBox' }} />
          </>
        ),
        content: (
          <>
            <P>
              下の図が、
              <H args={{ name: 'bentoBox' }} />
              です。実際の弁当箱のように、
              <Em>
                四角の中に何個かマスがあり、それぞれのマスの中に料理が入っています
              </Em>
              。
            </P>
            <P>
              <InlineHeader>例その1:</InlineHeader> 上のマスには
              <EmojiWithText letter="b" />
              、下のマスには
              <EmojiWithText letter="a" />
              がふたつ入っています。
            </P>
            {AER.ilpo}
            <P>
              「寿司とサンドイッチが同時に入っている弁当箱なんてあるの？」というツッコミは無しの方向でお願いします。
            </P>
            <EmojiSeparator emojis={['🍣', '😅', '🥪']} />
          </>
        )
      },
      {
        title: (
          <>
            まだあるよ
            <H args={{ name: 'bentoBox' }} />
          </>
        ),
        content: (
          <>
            <P>
              さらに何個か、
              <H args={{ name: 'bentoBox' }} />
              の例を紹介していきます:
            </P>
            <P>
              <InlineHeader>例その2:</InlineHeader> 上のマスには
              <EmojiWithText letter="e" />
              、下のマスには
              <EmojiWithText letter="c" />と
              <EmojiWithText letter="d" />
              が入っています。
            </P>
            {AER.imyd}
            <P>マクドナルドのメニューにありそうな食べ物ばかりですね！</P>
            <Hr />
            <P>
              <InlineHeader>例その3:</InlineHeader> 上のマスには
              <EmojiWithText letter="g" />
              、下のマスには
              <EmojiWithText letter="f" />
              がふたつ入っています。
            </P>
            {AER.emmb}
            <P>
              こちらは、イタリアンな
              <H args={{ name: 'bentoBox', short: true }} />
              ですね！
            </P>
            <Hr />
            <P>
              <InlineHeader>例その4:</InlineHeader> 上のマスには
              <EmojiWithText letter="j" />
              、下のマスには
              <EmojiWithText letter="h" />と
              <EmojiWithText letter="i" />
              が入っています。
            </P>
            {AER.jozw}
            <P>こちらは普通に美味しそうですね。</P>
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'playButton' }} />
          </>
        ),
        content: (
          <>
            <P>
              それぞれの
              <H args={{ name: 'bentoBox' }} />
              には、
              <H args={{ name: 'playButton' }} />
              があります。
            </P>
            <P>
              <InlineHeader>例その1:</InlineHeader> こちらは、最初に紹介した
              <H args={{ name: 'bentoBox' }} />
              です。
              <Em>
                下の
                <H args={{ name: 'playButton' }} />
                を押してみてください
              </Em>
              :
            </P>
            {AER.itbm}
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <InlineHeader>ちなみに:</InlineHeader>{' '}
                <H args={{ name: 'reset' }} />{' '}
                を押せばもう一度最初から実行できます。
              </P>
            </>
          )
        }
      },
      {
        title: (
          <>
            <H args={{ name: 'play' }} />
            するとこうなります
          </>
        ),
        content: (
          <>
            <P>
              どうやら、さきほどの
              <H args={{ name: 'bentoBox' }} />
              は、
              <H args={{ name: 'play' }} />
              すると、最終的に
              <EmojiWithText letter="b" />
              だけになるようです。
            </P>
            <P>
              <InlineHeader>例その1:</InlineHeader>
            </P>
            {AER.uqwm}
            <P>
              実はこれ、
              <H args={{ name: 'unknownRule' }} />
              に従っているんです。
            </P>
            <P>
              その法則を説明する前に、他の
              <H args={{ name: 'bentoBox' }} />
              も実行してみましょう。
            </P>
          </>
        )
      },
      {
        title: (
          <>
            他のも
            <H args={{ name: 'play' }} />
            してみましょう
          </>
        ),
        content: (
          <>
            <P>
              先ほど紹介した3つの
              <H args={{ name: 'bentoBox' }} />
              を、それぞれ
              <H args={{ name: 'play' }} />
              してみましょう！
            </P>
            <P>
              <InlineHeader>例その2:</InlineHeader>
            </P>
            {AER.zwpj}
            <P>
              <InlineHeader>例その3:</InlineHeader>
            </P>
            {AER.dqkc}
            <P>
              <InlineHeader>例その4:</InlineHeader>
            </P>
            {AER.ldox}
          </>
        ),
        footer: {
          content: (
            <P>
              どれも
              <H args={{ name: 'unknownRule' }} />
              に従っています。どんな法則か、考えみてください！
            </P>
          )
        }
      },
      {
        title: (
          <>
            <H args={{ name: 'afterPlay' }} />
          </>
        ),
        content: (
          <>
            <P>それぞれ、このような結果になりました！</P>
            <P>
              <InlineHeader>例その2:</InlineHeader>
            </P>
            {AER.bgfl}
            <P>
              <InlineHeader>例その3:</InlineHeader>
            </P>
            {AER.tuqr}
            <P>
              <InlineHeader>例その4:</InlineHeader>
            </P>
            {AER.cpkp}
          </>
        ),
        footer: {
          content: (
            <P>
              どれも
              <H args={{ name: 'unknownRule' }} />
              に従っています。どんな法則か、考えみてください！
            </P>
          )
        }
      },
      {
        title: <>法則がわかりましたか？</>,
        content: (
          <>
            <EmojiSeparator emojis={['🍱', '🤔', '▶️']} />
            <P>
              上記あわせて4種類の
              <H args={{ name: 'bentoBox' }} />を
              <H args={{ name: 'play' }} />
              しましたが、どれも
              <H args={{ name: 'unknownRule' }} />
              に従っています。
            </P>
            <P>
              <InlineHeader>その法則がわかりましたか？</InlineHeader>
              もう一度4つの例を見て、考えてみてください！
            </P>
            <P>
              なんとなく予想がついたら、合っているかどうか次の
              <H args={{ name: 'yesNoQuiz' }} />
              でチェックしてみましょう！
            </P>
            <P>
              <Em>サッパリ分からなくてもご心配なく！</Em>
              とりあえず勘で答えてみてください。<Emoji>😉</Emoji>
            </P>
          </>
        )
      },
      {
        type: 'yesNoQuiz' as 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
            、その1
          </>
        ),
        content: (
          <>
            <P>
              <InlineHeader>質問:</InlineHeader>{' '}
              こちらに、ヘルシーな野菜が入っている
              <H args={{ name: 'bentoBox' }} />
              があります。
            </P>
            {AER.loai}
            <P>
              これを
              <H args={{ name: 'play' }} />
              すると、<Strong>最終的に下のようになるでしょうか？</Strong>
              これまでの法則から予想してみてください。
            </P>
            {AER.vvjn}
            <YesNoButtons answer="yes" />
          </>
        )
      },
      {
        type: 'yesNoQuiz' as 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
            、その2
          </>
        ),
        content: (
          <>
            <P>
              <InlineHeader>質問:</InlineHeader> こちらの
              <H args={{ name: 'bentoBox' }} />を<H args={{ name: 'play' }} />
              すると、
            </P>
            {AER.hbgo}
            <P>
              <Strong>最終的に下のようになるでしょうか？</Strong>
              これまでの法則から予想してみてください。
            </P>
            {AER.olef}
            <YesNoButtons answer="no" />
          </>
        )
      },
      {
        title: <>答え合わせ</>,
        content: (
          <>
            <P>それぞれ実行すると、次のようになります。</P>
            <P>
              <InlineHeader>例その5:</InlineHeader>
            </P>
            {AER.zzyu}
            <P>
              つまり
              <Strong>
                1問目の正解は<Emoji>⭕️</Emoji>
              </Strong>
              でした。
            </P>
            <P>
              <InlineHeader>例その6:</InlineHeader>
            </P>
            {AER.qpjt}
            <P>
              つまり
              <Strong>
                2問目の正解は<Emoji>❌</Emoji>
              </Strong>{' '}
              (<EmojiWithText letter="k" />
              ではない) でした。
            </P>
          </>
        )
      },
      {
        title: <>法則は次のページに</>,
        content: (
          <>
            <P>
              次のページで
              <H args={{ name: 'bentoBox' }} />
              の法則を紹介します。予想が当たった方も、よく分からなかった方も、ぜひ次に進んでみてください。
            </P>
            <YcNextLessonButton nextEpisodeNumber={2} />
          </>
        )
      }
    ]}
  />
)
