import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import YesNoButtons from 'src/components/YesNoButtons'
import EmojiNumber from 'src/components/EmojiNumber'
import NextLessonButton from 'src/components/NextLessonButton'
import BottomRightBadge from 'src/components/BottomRightBadge'
import {
  Em,
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
import { magicalVariableName } from 'src/lib/specialVariableNames'
import TopRightBadge from 'src/components/TopRightBadge'
import EmojiForLetter from 'src/components/EmojiForLetter'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>掛け算の弁当箱</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              今回はまず、中級で紹介した「<Strong>掛け算の弁当箱</Strong>
              」を省略表記していきます。
            </P>
            <EmojiSeparator emojis={['✖️', '🍱', '✖️']} />
            <P>
              下にあるのが「<Strong>掛け算の弁当箱</Strong>
              」です。
              <InlineEmojiBoxesForQuestion />
              にそれぞれ暗号を入れて
              <H args={{ name: 'play' }} />
              すると、そのふたつの暗号を掛け算してくれます。
            </P>
            {AER.drvu}
            <P>では、さっそく省略表記してみましょう！</P>
          </>
        )
      },
      {
        title: <>掛け算の省略表記</>,
        content: (
          <>
            <P>
              先ほどの掛け算の弁当箱の下の部分を、<Emoji>✖️</Emoji>
              の記号に入れ替えてみると、以下のようになります:
            </P>
            {AER.lyod}
            <P>
              このままでもいいですが、
              <Em>
                せっかく省略表記をするのであれば、もう少しひと目見て分かりやすくしたいところです。
              </Em>
            </P>
            <EmojiSeparator emojis={['✖️', '🤔', '✖️']} />
            <P>
              では、
              <Strong>
                次のように<Emoji>✖️</Emoji>
                の記号を真ん中に配置してみたらどうでしょう？
              </Strong>
              こちらのほうが、ひと目見て「掛け算だ」と分かりやすいですよね。
            </P>
            {AER.imba}
            <P>
              <Strong>
                あくまで省略表記なので、<Emoji>✖️</Emoji>
                の印をどこに配置しようが意味は変わりません。
              </Strong>
              それなら、ひと目見たときに分かりやすい方を優先したほうが良いのです。というわけで、こちらの案(
              <Emoji>✖️</Emoji>が真ん中)を採用したいと思います。
            </P>
          </>
        )
      },
      {
        title: <>掛け算の省略表記の実践</>,
        content: (
          <>
            <P>
              さっそく省略表記を使ってみましょう。こちらの弁当箱をご覧ください:
            </P>
            {AER.pzwe}
            <P>解説すると、</P>
            <Ul>
              <UlLi>
                一番上の部分は、
                <Em>
                  暗号が「<Strong>2</Strong>」の弁当箱
                </Em>{' '}
                (右下に
                <EmojiWithText letter="e" />
                がふたつ)
              </UlLi>
              <UlLi>
                真ん中の部分は、
                <Em>
                  暗号が「<Strong>3</Strong>」の弁当箱
                </Em>{' '}
                (右下に
                <EmojiWithText letter="g" />
                が3つ)
              </UlLi>
              <UlLi>
                一番下の部分は、<Em>掛け算の弁当箱</Em>
              </UlLi>
            </Ul>
            <P>というわけで、「2 ✕ 3」を計算する弁当箱ですね。</P>
            <EmojiSeparator emojis={['2️⃣', '✖️', '3️⃣']} />
            <P>
              省略表記すると下のようになります。 早速、
              <H args={{ name: 'pressPlay' }} />
            </P>
            {AER.zifr}
            <P>
              というわけで、最終的に暗号は「<Strong>6</Strong>
              」になります。掛け算の省略表記については以上です！
            </P>
          </>
        )
      },
      {
        title: <>条件分岐の弁当箱</>,
        content: (
          <>
            <P>
              続いて、以前紹介した「
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
              と、まるで縦型の信号機 <Emoji>🚦</Emoji> みたいですね。
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
              </P>
              <P>
                掛け算の省略表記のときにも話しましたが、
                <Em>
                  あくまで省略表記である限り、
                  <InlineEmojiBoxesForQuestion />
                  をどこに配置しようが意味は変わりません。{' '}
                </Em>
                ここでは、
                <InlineEmojiBoxesForQuestion />
                を真ん中に配置にしたほうが、ひと目見て分かりやすいと判断しました。
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
              <H args={{ name: 'theAnswerIs', isYes: false, sentence: true }} />
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
              <H args={{ name: 'theAnswerIs', isYes: false, sentence: true }} />
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
        type: 'summary',
        title: (
          <>
            <H args={{ name: 'summary' }} />
          </>
        ),
        content: (
          <>
            <P>
              <InlineHeader>掛け算の弁当箱の省略表記:</InlineHeader> こちらは、
              <EmojiNumber number={2} /> <Emoji>✖️</Emoji>{' '}
              <EmojiNumber number={3} />
              を計算する弁当箱の省略表記です。
            </P>
            {AER.omlc}
            <P>
              <InlineHeader>条件分岐の弁当箱の省略表記:</InlineHeader>{' '}
              こちらは、
              <InlineEmojiBoxesForQuestion />が<EmojiNumber number={0} />
              なら
              <EmojiWithText letter="y" />、<EmojiNumber number={1} />
              以上なら
              <EmojiWithText letter="z" />
              になる弁当箱の省略表記です。
            </P>
            {AER.hvdn}
          </>
        )
      },
      {
        title: <>ところで: なぜ省略表記について語ったの？</>,
        content: (
          <>
            <P>
              前回と今回で、「<Strong>1を引く弁当箱</Strong>」「
              <Strong>掛け算の弁当箱</Strong>」「
              <Strong>条件分岐の弁当箱</Strong>
              」の省略表記について語りました。
            </P>
            <EmojiSeparator
              nodes={[
                <TopRightBadge inline topRightBadgeType="pred" />,
                <Emoji>✖️</Emoji>,
                <Emoji>↕️</Emoji>
              ]}
            />
            <P>省略表記について説明した理由は、以下の通りです:</P>
            <Ul>
              <UlLi>
                次のページから、「<Em>1を引く弁当箱</Em>」「
                <Em>掛け算の弁当箱</Em>」「
                <Em>条件分岐の弁当箱</Em>
                」を全部使って、
                <Strong>今までで最も複雑な計算</Strong>を行います。
              </UlLi>
              <UlLi>
                とても複雑なので、それぞれの弁当箱を省略表記することで、
                <Strong>何が起きているかを少しでも分かりやすくしたい</Strong>
                、というわけです。
              </UlLi>
            </Ul>
          </>
        )
      },
      {
        title: <>上級も残り2ページ！</>,
        content: (
          <>
            <P>
              お疲れ様でした！上級も残り2ページです。次のページでは、「
              <Strong>弁当箱の魔女</Strong>」が登場します。お楽しみに！
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter={magicalVariableName} />,
                <Emoji>🧙‍♀️</Emoji>,
                <EmojiForLetter letter={magicalVariableName} />
              ]}
            />
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
