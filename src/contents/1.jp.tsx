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
import AER from 'src/components/AER'
import NextLessonButton from 'src/components/NextLessonButton'
import EpisodeCardList from 'src/components/EpisodeCardList'
import H from 'src/components/H'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <H args={{ name: 'bentoBoxPuzzle' }} />,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              当記事では、<Strong>とあるパズル</Strong>
              を使って
              <H args={{ name: 'yCombinator' }} />
              とは何かを学んでいきます。 今回は、
              <Em>このパズルの基本ルール</Em>
              を紹介します。
            </P>
            <P>
              まずはじめにこちらの写真をご覧ください。筆者の地元・横浜の崎陽軒で販売されているお弁当です(撮影は筆者)。
            </P>
            <PFullWidth>
              <Img src="/static/images/bentoboxes.jpg" alt="Bento Boxes" />
            </PFullWidth>
            <P>
              なぜお弁当の写真をお見せしたかというと、今回紹介するパズルには
              <H args={{ name: 'bentoBoxPuzzle' }} />
              という名前がついているからです。
            </P>
            <EmojiSeparator emojis={['🍱', '🤔', '🍱']} />
            <P>
              <H args={{ name: 'bentoBoxPuzzle' }} />
              がどんなものか、説明しますね！
            </P>
          </>
        )
      },
      {
        title: (
          <>
            これが
            <H args={{ name: 'bentoBoxPuzzle' }} />
          </>
        ),
        content: (
          <>
            <P>
              下の図が、
              <H args={{ name: 'bentoBoxPuzzle' }} />
              です。実際の弁当箱のように、
              <Em>
                四角の中に何個かマスがあり、それぞれのマスの中に料理が入っています
              </Em>
              。
            </P>
            <P>
              <InlineHeader>例その1:</InlineHeader> 上段には
              <EmojiWithText letter="b" />
              、下段には
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
            <H args={{ name: 'bentoBoxPuzzle' }} />
          </>
        ),
        content: (
          <>
            <P>
              さらに何個か、
              <H args={{ name: 'bentoBoxPuzzle' }} />
              の例を紹介していきます:
            </P>
            <P>
              <InlineHeader>例その2:</InlineHeader> 上段には
              <EmojiWithText letter="e" />
              、下段には
              <EmojiWithText letter="c" />と
              <EmojiWithText letter="d" />
              が入っています。
            </P>
            {AER.imyd}
            <P>マクドナルドのメニューにありそうな料理ばかりですね！</P>
            <Hr />
            <P>
              <InlineHeader>例その3:</InlineHeader> 上段には
              <EmojiWithText letter="g" />
              、下段には
              <EmojiWithText letter="f" />
              がふたつ入っています。
            </P>
            {AER.emmb}
            <P>
              こちらは、イタリアンな
              <H args={{ name: 'bentoBox' }} />
              ですね！
            </P>
            <Hr />
            <P>
              <InlineHeader>例その4:</InlineHeader> 上段には
              <EmojiWithText letter="j" />
              、下段には
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
              <H args={{ name: 'bentoBoxPuzzle' }} />
              には、
              <H args={{ name: 'playButton' }} />
              があります。
            </P>
            <P>
              <InlineHeader>例その1:</InlineHeader> こちらは、最初に紹介した
              <H args={{ name: 'bentoBoxPuzzle' }} />
              です。
              <H args={{ name: 'pressNext' }} />
            </P>
            {AER.itbm}
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <H args={{ name: 'byTheWay' }} /> <H args={{ name: 'reset' }} />{' '}
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
              <H args={{ name: 'bentoBoxPuzzle' }} />
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
              <H args={{ name: 'bentoBoxPuzzle' }} />
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
              <H args={{ name: 'bentoBoxPuzzle' }} />
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
              <H args={{ name: 'bentoBoxPuzzle' }} />を
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
        type: 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
            、その1
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'question' }} />{' '}
              こちらに、ヘルシーな野菜が入っている
              <H args={{ name: 'bentoBoxPuzzle' }} />
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
        type: 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
            、その2
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'question' }} /> こちらの
              <H args={{ name: 'bentoBoxPuzzle' }} />を
              <H args={{ name: 'play' }} />
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
                1問目の
                <H args={{ name: 'theAnswerIs', isYes: true }} />
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
                2問目の
                <H args={{ name: 'theAnswerIs', isYes: false }} />
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
              <H args={{ name: 'bentoBoxPuzzle' }} />
              の法則を紹介します。予想が当たった方も、よく分からなかった方も、ぜひ次に進んでみてください。
            </P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
