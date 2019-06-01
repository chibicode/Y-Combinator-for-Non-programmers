import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import YesNoButtons from 'src/components/YesNoButtons'
import EmojiNumber from 'src/components/EmojiNumber'
import NextLessonButton from 'src/components/NextLessonButton'
import BottomRightBadge from 'src/components/BottomRightBadge'
import {
  Em,
  Hr,
  InlineHeader,
  P,
  Strong,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import H from 'src/components/H'
import AER from 'src/components/AER'
import EmojiWithText from 'src/components/EmojiWithText'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import {
  InlineEmojiBoxesForCondition,
  InlineEmojiBoxesForQuestion
} from 'src/components/InlineEmojiBoxes'
import TopRightBadge from 'src/components/TopRightBadge'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>条件分岐の弁当箱</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              今回は、以前紹介した「
              <Strong>条件分岐の弁当箱</Strong>
              」を省略表記していきます。まずは、復習から:
            </P>
            {AER.nlxe}
            <H args={{ name: 'isZeroReview' }} />
          </>
        )
      },
      {
        title: <>条件分岐の省略表記</>,
        content: (
          <>
            <P>では、この条件分岐の弁当箱を、</P>
            {AER.nlxe}
            <P>次のように省略表記してみましょう:</P>
            {AER.hvdn}
            <Ul>
              <UlLi>
                まず、
                <InlineEmojiBoxesForCondition type="condition" />{' '}
                (真ん中、黄色い左枠)の中にある
                <InlineEmojiBoxesForQuestion />
                の暗号が「0」かどうかチェックします。
              </UlLi>
              <UlLi>
                もし「<Strong>0</Strong>」なら、{' '}
                <InlineEmojiBoxesForCondition type="trueCase" />{' '}
                (一番下、青い左枠)に入っている料理が残ります。この場合は
                <EmojiWithText letter="y" />
                です。
              </UlLi>
              <UlLi>
                もし「<Strong>1以上</Strong>なら」、{' '}
                <InlineEmojiBoxesForCondition type="falseCase" />{' '}
                (一番上、赤い左枠)に入っている料理が残ります。この場合は
                <EmojiWithText letter="z" />
                です。
              </UlLi>
            </Ul>
            <EmojiSeparator emojis={['0️⃣', '🚦', '🔢']} />
            <P>
              <InlineHeader>赤</InlineHeader>・<InlineHeader>黄色</InlineHeader>
              ・<InlineHeader>青</InlineHeader>
              と、まるで縦型の信号機 <Emoji>🚦</Emoji>{' '}
              みたいですね。ちなみに、日本では横型の信号機 <Emoji>🚥</Emoji>{' '}
              が主流ですが、世界のほとんどの国では縦型 <Emoji>🚦</Emoji>{' '}
              が主流です。
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <InlineHeader>補足:</InlineHeader>{' '}
                <Em>
                  省略前と違う点としては、
                  <InlineEmojiBoxesForQuestion />
                  が一番下から真ん中に移動した点です。
                </Em>
                このような配置にしたほうが、見た目的に分かりやすいと判断しました。
              </P>
            </>
          )
        }
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
              では、試しに
              <H args={{ name: 'yesNoQuiz' }} />
              を行ってみましょう！
              <H args={{ name: 'lookAtThisBentoBox' }} />:
            </P>
            {AER.vxnm}
            <P>
              <H args={{ name: 'whatsTheNumberQuestion', number: 4 }} />
            </P>
            <YesNoButtons answer="no" />
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
              暗号は「<Strong>4</Strong>」ではなく、「<Strong>2</Strong>
              」になります。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.xefx}
            <P>
              手短に解説します。まず、
              <InlineEmojiBoxesForCondition type="condition" />{' '}
              の中にある暗号が「0」かどうかチェックします。
            </P>
            {AER.wcsz}
            <P>
              <InlineEmojiBoxesForCondition type="condition" /> の暗号は{' '}
              <EmojiNumber number={3} /> なので、「1以上」の方、つまり上の{' '}
              <InlineEmojiBoxesForCondition type="falseCase" /> が残ります。
            </P>
            {AER.psqo}
            <P>
              というわけで、最後は <EmojiNumber number={2} /> だけになります。
            </P>
            {AER.xsby}
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
              次に進む前に、理解を確実にするためにもう一問やってみましょう。
              <H args={{ name: 'lookAtThisBentoBox' }} />:
            </P>
            {AER.repd}
            <P>
              <H args={{ name: 'whatsTheNumberQuestion', number: 1 }} />
            </P>
            <YesNoButtons answer="no" />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
          </>
        ),
        content: (
          <>
            <P>
              <Strong>
                <H args={{ name: 'theAnswerIs', isYes: false }} />
                でした。
              </Strong>
              暗号は「<Strong>1</Strong>」ではなく、「<Strong>2</Strong>
              」になります。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.cnoq}
            <P>
              今回も手短に解説します。まず、
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />の
              <EmojiWithText letter="a" />が<EmojiNumber number={0} />
              に変わります。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.dwnj}
            <P>
              ここで、
              <InlineEmojiBoxesForCondition type="condition" />{' '}
              の中にある暗号が「0」かどうかチェックします。
            </P>
            {AER.guuf}
            <P>
              <InlineEmojiBoxesForCondition type="condition" /> の暗号は{' '}
              <EmojiNumber number={0} /> なので、下の{' '}
              <InlineEmojiBoxesForCondition type="trueCase" /> が残ります。
            </P>
            {AER.lrrr}
            <P>
              そして、最後に
              <EmojiNumber number={2} />
              が残ります。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.dpar}
          </>
        )
      },
      {
        title: <>あくまで「省略表記」です</>,
        content: (
          <>
            <P>
              忘れないでおきたいのが、
              <Em>これらはあくまで「省略表記」だということです</Em>。
              <Strong>
                省略表記は「今まであった機能」をひと目で分かりやすいようにしているだけです。
              </Strong>
            </P>
            <EmojiSeparator emojis={['0️⃣', '↔️', '🔢']} />
            <P>
              たとえば、先ほどの
              <H args={{ name: 'yesNoQuiz' }} />
              で出題したこちらの弁当箱は、
            </P>
            {AER.repd}
            <P>
              <InlineHeader>
                条件分岐の省略表記を使わないと、次のようになります
              </InlineHeader>
              <Em>(黄色の部分):</Em>
            </P>
            {AER.ylil}
            <P>
              さらに、
              <InlineHeader>
                暗号の省略表記を使わないと、次のようになります
              </InlineHeader>
              <Em>(黄色の部分):</Em>
            </P>
            {AER.vqcw}
            <P>
              結果は同じになるでしょうか？
              <H args={{ name: 'pressFastForward' }} />:
            </P>
            {AER.dcfi}
            <P>
              結果、暗号は「<Strong>2</Strong>」になりました。
            </P>
            {AER.bmnc}
            <P>
              先ほどの
              <H args={{ name: 'yesNoQuiz' }} />
              でも、結果は
              <EmojiNumber number={2} />
              になったので、
              <Strong>
                省略表記をした場合もしない場合も、同じ暗号の結果になる
              </Strong>
              ということがお分かりいただけたでしょうか。
            </P>
            {AER.ufze}
            <P>
              繰り返しますが、
              <Strong>
                省略表記は「今まであった機能」をひと目で分かりやすいようにしているだけです。
              </Strong>
            </P>
          </>
        )
      },
      {
        title: <>ところで: なぜ省略表記について語ったの？</>,
        content: (
          <>
            <P>
              前回と今回で、「<Strong>1を引く弁当箱</Strong>」と「
              <Strong>条件分岐の弁当箱</Strong>
              」の省略表記について語りました。なぜこれらの説明を行ったか、わかりますか？
            </P>
            <EmojiSeparator
              nodes={[
                <TopRightBadge inline topRightBadgeType="pred" />,
                <Emoji>🤔</Emoji>,
                <Emoji>↕️</Emoji>
              ]}
            />
            <P>答えを言う前に、少しだけ中級編の復習をしましょう！</P>
          </>
        )
      },
      {
        type: 'sideNote',
        title: <>復習: 無限ループの弁当箱</>,
        content: (
          <>
            <P>
              <Strong>中級編の最後を思い出してください。</Strong>
              下のような、「<Strong>無限ループの弁当箱</Strong>
              」を紹介したことを覚えていらっしゃいますでしょうか。この弁当箱を
              <H args={{ name: 'fastForward' }} />
              すると、一番下にある
              <InlineEmojiBoxesForQuestion />
              が無限にひとつずつ増えていきます。
            </P>
            {AER.aqbs}
            <P>
              上の例は長くなるので3回目で中断しましたが、たとえば5回繰り返された時点では、
              <InlineEmojiBoxesForQuestion />
              が一番下に5個登場します。
            </P>
            {AER.opvb}
            <P>
              しかし、無限に何かを繰り返すことができても役には立ちません。求められているのは、「無限に何かを繰り返す弁当箱」ではなく、「
              <Strong>ある条件を満たすまで、何かを繰り返す弁当箱</Strong>
              」です。そういう弁当箱があれば、役に立ちます。
            </P>
          </>
        )
      },
      {
        type: 'sideNote',
        title: <>復習: ある条件を満たすまで繰り返す</>,
        content: (
          <>
            <P>中級では、以下のように書きました:</P>
            <Hr />
            <H args={{ name: 'whyWeNeedFiniteBentoBox' }} />
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
              そろそろお気づきでしょうか？ではここで
              <H args={{ name: 'yesNoQuiz' }} />
              です！
            </P>
            <EmojiSeparator
              nodes={[
                <TopRightBadge inline topRightBadgeType="pred" />,
                <Emoji>🍱</Emoji>,
                <Emoji>↕️</Emoji>
              ]}
            />
            <P>
              <H args={{ name: 'question' }} /> 「<Strong>1を引く弁当箱</Strong>
              」と「
              <Strong>条件分岐の弁当箱</Strong>
              」を組み合わせることで、「
              <Strong>ある条件を満たすまで、何かを繰り返す弁当箱</Strong>
              」を作ることができる。
              <H args={{ name: 'yesOrNo' }} />
            </P>
            <YesNoButtons answer="yes" />
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
              <Strong>
                <H args={{ name: 'theAnswerIs', isYes: true }} />
                でした。
              </Strong>
              「<Strong>1を引く弁当箱</Strong>
              」と「
              <Strong>条件分岐の弁当箱</Strong>
              」を組み合わせることで、「
              <Strong>ある条件を満たすまで、何かを繰り返す弁当箱</Strong>
              」を作ることができるのです。
            </P>
            <EmojiSeparator
              nodes={[
                <TopRightBadge inline topRightBadgeType="pred" />,
                <Emoji>🍱</Emoji>,
                <Emoji>↕️</Emoji>
              ]}
            />
            <P>
              次が上級最後のページです(その後はエピローグです)。そこで、「
              <Strong>ある条件を満たすまで、何かを繰り返す弁当箱</Strong>
              」がどんなものか紹介します。そしてついに、記事の題名にもある「
              <Strong>
                魔法の
                <H args={{ name: 'yCombinator' }} />
              </Strong>
              」が登場します。
            </P>
            <EmojiSeparator emojis={['✨', '🧙‍♀️', '✨']} />
            <P>
              ここまで読んでくださり、ありがとうございます！上級最後のページも楽しんでくださると嬉しいです。
            </P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
