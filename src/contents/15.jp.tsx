import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Em } from 'src/components/ContentTags'
import H from 'src/components/H'
import EmojiSeparator from 'src/components/EmojiSeparator'
import AER from 'src/components/AER'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiForLetter from 'src/components/EmojiForLetter'
import Emoji from 'src/components/Emoji'
import EmojiNumber from 'src/components/EmojiNumber'
import { InlineEmojiBoxesForQuestion } from 'src/components/InlineEmojiBoxes'
import YesNoButtons from 'src/components/YesNoButtons'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>今回が上級最後！</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              今回が上級最後です！残るのはこのページと、次のページにあるエピローグだけです。ここまでお疲れ様でした！
            </P>
            <EmojiSeparator emojis={['🎉', '🤗', '🎉']} />
            <P>
              前回は、「
              <Strong>
                弁当箱の
                <H args={{ name: 'witch' }} />
              </Strong>
              」について解説しました。復習になりますが、
              <H args={{ name: 'witch' }} />
              は次のように変化します。
            </P>
            {AER.xsve}
            <P>
              この
              <H args={{ name: 'witch' }} />
              を使うと、
            </P>
            <EmojiSeparator size="sm" emojis={['3️⃣', '✖️', '2️⃣', '✖️', '1️⃣']} />
            <P>といった計算を行うことができます。</P>
            {AER.urhc}
            <P>
              しかし、「
              <Strong>
                弁当箱の
                <H args={{ name: 'witch' }} />
              </Strong>
              」は、実際には弁当箱に備わっていない「架空の」機能です。
              <Strong>
                <H args={{ name: 'witch' }} />
                を使わず、従来の弁当箱の機能だけで、同じ計算ができるでしょうか？
              </Strong>
            </P>
            <EmojiSeparator emojis={['❌', '🧙‍♀️', '❌']} />
            <P>今回はそれを検証していきます。</P>
          </>
        )
      },
      {
        title: <>魔女の代わりに</>,
        content: (
          <>
            <P>
              まず、
              <H args={{ name: 'witch' }} />
              の変化に注目してみます。
            </P>
            {AER.xsve}
            <P>
              変化後の弁当箱にも
              <H args={{ name: 'witch' }} />
              がまた登場しています。
            </P>
            {AER.cfms}
            <P>
              <Strong>
                この
                <H args={{ name: 'witch' }} />
                の代わりに、他の料理を使ってみることを検討してみましょう。
              </Strong>
              別に何でもいいですが、とりあえず
              <H args={{ name: 'witch' }} />
              の代わりに
              <EmojiWithText letter="s" />
              を使ってみます。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>🧙‍♀️</Emoji>,
                <Emoji>➡</Emoji>,
                <EmojiForLetter letter="s" />
              ]}
            />
            <P>すると、こうなります。</P>
            {AER.tdau}
            <P>
              そして、理由はまだ明かしませんが、左側にも
              <EmojiWithText letter="s" />
              を入れます。
            </P>
            {AER.lkwr}
            <P>
              そして、同じく理由はまだ明かしませんが、下側にも次のように
              <EmojiWithText letter="a" />と<EmojiWithText letter="b" />
              が入っている弁当箱を配置します。
            </P>
            {AER.osih}
            <P>
              では、ここで質問です:{' '}
              <Strong>
                上の弁当箱の
                <InlineEmojiBoxesForQuestion />
                に暗号の数字を入れてみると、何が起きるでしょう？
              </Strong>
            </P>
            <EmojiSeparator emojis={['❓', '🤔', '❓']} />
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: (
          <>
            <EmojiNumber number={3} />
            を入れてみる
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'yesNoQuiz' }} />
              形式で出題してみます。
              <Strong>
                先ほどの弁当箱の
                <InlineEmojiBoxesForQuestion />
                の部分に
                <EmojiNumber number={3} />
                を入れたとします
              </Strong>
              (<Em>一番上の黄色の部分</Em>)。
            </P>
            {AER.hzlj}
            <P>
              <H args={{ name: 'whatHappensInTheMiddleQuestion' }} />
              すなわち、
              <Em>
                <H args={{ name: 'witch' }} />
                を使った場合と同じになるでしょうか？
              </Em>
            </P>
            {AER.wqdb}
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
              ゆっくり進めて見てみましょう！
            </P>
          </>
        )
      }
    ]}
  />
)
