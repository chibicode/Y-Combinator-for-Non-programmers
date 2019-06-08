import React from 'react'
import { InlineHeader, Em, P, Strong, Hr } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import NextLessonButton from 'src/components/NextLessonButton'
import H from 'src/components/H'
import EpisodeCardList from 'src/components/EpisodeCardList'
import AER from 'src/components/AER'
import YesNoButtons from 'src/components/YesNoButtons'
import { InlineEmojiBoxesForQuestion } from 'src/components/InlineEmojiBoxes'
import EmojiWithText from 'src/components/EmojiWithText'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>弁当箱の暗号</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              中級では、「<Strong>弁当箱の暗号</Strong>」を見ていきます。
            </P>
            <EmojiSeparator emojis={['❓', '🧐', '️❓']} />
            <P>
              このページにあるそれぞれの
              <H args={{ name: 'bentoBoxPuzzle' }} />
              には、
              <Strong>あるパターンに基づいた暗号</Strong>
              が隠されています。
              <Em>暗号がどんな法則に基づいているか考えてみてください！</Em>
            </P>
          </>
        )
      },
      {
        title: (
          <>
            こちらに隠されている暗号は<Em>「0」</Em>です
          </>
        ),
        content: (
          <>
            {AER.tiok}
            <P>
              これだけでは暗号の法則がわからないと思うので、
              <InlineHeader>もう2個</InlineHeader>
              見ていきましょう！
            </P>
          </>
        )
      },
      {
        title: (
          <>
            こちらに隠されている暗号は<Em>「1」</Em>です
          </>
        ),
        content: (
          <>
            {AER.tfho}
            <P>
              そろそろ分かりましたか？<InlineHeader>あと1個</InlineHeader>
              見ていきましょう！
            </P>
          </>
        )
      },
      {
        title: (
          <>
            こちらに隠されている暗号は<Em>「2」</Em>です
          </>
        ),
        content: (
          <>
            {AER.idcf}
            <P>
              もうお分かりでしょうか？
              <H args={{ name: 'yesNoQuiz' }} />
              で確かめてみましょう！
            </P>
            <EmojiSeparator emojis={['⭕️', '🧐', '️❌']} />
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
              <H args={{ name: 'lookAtThisBentoBox' }} />:
            </P>
            {AER.xemt}
            <P>
              <H args={{ name: 'question' }} />{' '}
              <Em>
                こちらに隠されている暗号は<Strong>「4」</Strong>でしょうか？
              </Em>
            </P>
            <YesNoButtons answer="no" />
          </>
        )
      },
      {
        title: <>正解は「3」</>,
        content: (
          <>
            {AER.bpwl}
            <P>なぜ暗号が「3」なのか説明しますね！</P>
          </>
        )
      },
      {
        type: 'summary',
        title: <>暗号の法則</>,
        content: (
          <>
            <H args={{ name: 'secretCodeReview', example: AER.eozk }} />
            <Hr />
            <P>
              たとえば、こちらは右下に<Emoji size="mdlg">🅰️</Emoji>
              が縦に2個並んでいるので、暗号は<Strong>「2」</Strong>になります:
            </P>
            {AER.cqpa}
          </>
        )
      },
      {
        title: <>先ほどの例で説明します</>,
        content: (
          <>
            <P>
              先ほどのクイズの例だと、
              <Emoji>🅰️</Emoji>は<EmojiWithText letter="g" />、<Emoji>🅱️</Emoji>
              は<EmojiWithText letter="h" />
              になります。
            </P>
            {AER.qsfp}
            <P>
              そして右下に
              <Emoji>🅰️</Emoji>である
              <EmojiWithText letter="g" />
              が縦に3個並んでいるので、暗号は<Strong>「3」</Strong>
              というわけです。
            </P>
            <Hr />
            <P>
              こちらの例だと、<Emoji>🅰️</Emoji>は<EmojiWithText letter="a" />、
              <Emoji>🅱️</Emoji>
              は<EmojiWithText letter="b" />
              になります。
            </P>
            {AER.xpvh}
            <P>
              しかし、右下に
              <Emoji>🅰️</Emoji>である
              <EmojiWithText letter="a" />
              がひとつもないので、暗号は<Strong>「0」</Strong>
              というわけです。
            </P>
          </>
        )
      },
      {
        title: <>ここでちょっと難しい質問です</>,
        content: (
          <>
            <P>
              「<InlineHeader>暗号と言うわりには、簡単すぎる</InlineHeader>
              」とお思いですか？それでは、ちょっと難しい質問をしてみましょう。
            </P>
            <EmojiSeparator emojis={['⁉', '🧐', '⁉']} />
            <P>
              <H args={{ name: 'lookAtThisBentoBox' }} />:
            </P>
            {AER.qmof}
            <P>
              ここで、上の弁当箱の
              <InlineEmojiBoxesForQuestion />
              の部分に、
              <Em>
                暗号が<Strong>「0」</Strong>の弁当箱を埋め込みます
              </Em>
              。たとえば、こちらを埋め込むわけです。
            </P>
            {AER.nicg}
            <P>
              さっそく <InlineEmojiBoxesForQuestion />
              に埋め込んでみましょう:
            </P>
            {AER.mauj}
            <P>
              ここで質問です。
              <Strong>
                上の弁当箱を
                <H args={{ name: 'play' }} />
                すると、最終的にどうなるのでしょう？
              </Strong>
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
              難しいと思うので、二択の
              <H args={{ name: 'yesNoQuiz' }} />
              で聞いてみます。
            </P>
            {AER.eavp}
            <P>
              <H args={{ name: 'whatsTheNumberQuestion', number: 1 }} />
            </P>
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
              <Strong>最終的に暗号が「1」になります。</Strong>
            </P>
            <P>
              <H args={{ name: 'pressFastForward' }} /> (いつもの
              <InlineHeader>倍速</InlineHeader>
              で進みますので、目に優しく半透明にしています)
            </P>
            {AER.wafy}
            <Hr />
            <P>
              つまり、最終的に暗号が<Strong>「1」</Strong>になりました。
            </P>
            {AER.badn}
          </>
        )
      },
      {
        type: 'summary',
        title: <>まとめると</>,
        content: (
          <>
            <P>
              1. こちらの弁当箱の、
              <InlineEmojiBoxesForQuestion />
              の部分に…
            </P>
            {AER.qmof}
            <P>
              2. 暗号が<Strong>「0」</Strong>の弁当箱を…
            </P>
            {AER.nicg}
            <P>
              3. 埋め込んで、最後まで
              <H args={{ name: 'play' }} />
              すると…
            </P>
            {AER.mauj}
            <P>
              4. 暗号が<Strong>「1」</Strong>になります:
            </P>
            {AER.badn}
            <P>
              5. つまり、もともと<Strong>「0」</Strong>だった暗号が
              <Strong>「1」</Strong>になりました:
            </P>
            <EmojiSeparator emojis={['0️⃣', '➡️', '1️⃣']} />
          </>
        )
      },
      {
        title: <>ということは…</>,
        content: (
          <>
            {AER.qmof}
            <P>この弁当箱にはどんな効果があるか、もうお分かりでしょうか？</P>
            <EmojiSeparator emojis={['🍱', '🧐', '️🍱']} />
            <P>答えは次のページに！</P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
