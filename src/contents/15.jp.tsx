import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import EmojiNumber from 'src/components/EmojiNumber'
import {
  Ul,
  UlLi,
  P,
  Strong,
  InlineHeader,
  Ol,
  OlLi,
  Em,
  Hr
} from 'src/components/ContentTags'
import H from 'src/components/H'
import AER from 'src/components/AER'
import {
  InlineEmojiBoxesForQuestion,
  InlineEmojiBoxesForCondition
} from 'src/components/InlineEmojiBoxes'
import EmojiSeparator from 'src/components/EmojiSeparator'
import TopRightBadge from 'src/components/TopRightBadge'
import Emoji from 'src/components/Emoji'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiForLetter from 'src/components/EmojiForLetter'
import EmojiForLetterWithTopRightBadgeWrapper from 'src/components/EmojiForLetterWithTopRightBadgeWrapper'
import magicalVariableName from 'src/lib/magicalVariableName'
import YesNoButtons from 'src/components/YesNoButtons'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>これが上級最後！</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              これが上級最後のページです(次のページはエピローグです)。
            </P>
            <EmojiSeparator emojis={['🎉', '🤗', '🎉']} />
            <P>
              前回話した通り、この上級最終回では 「
              <Strong>ある条件を満たすまで、何かを繰り返す弁当箱</Strong>」
              の解説をします。
            </P>
            <EmojiSeparator emojis={['🤔', '🍱', '❓']} />
            <P>
              できるだけ分かりやすく解説するために、以下の順番で解説していきます。
            </P>
            <Ol>
              <OlLi>
                まず、
                <Strong>実際には存在しない架空の弁当箱の機能を使い</Strong>
                、「<Em>ある条件を満たすまで、何かを繰り返す弁当箱</Em>
                」を作ってみます。
              </OlLi>
              <OlLi>
                その後に、<Strong>従来の弁当箱の機能だけを使い</Strong>
                、「<Em>ある条件を満たすまで、何かを繰り返す弁当箱</Em>
                」を作ってみます。
              </OlLi>
            </Ol>
            <P>
              「架空の機能って何？」とお考えかもしれません。さっそく説明していきます！
            </P>
            <EmojiSeparator emojis={['🤔', '💭', '❓']} />
          </>
        )
      },
      {
        title: (
          <>
            弁当箱の
            <H args={{ name: 'witch' }} />
          </>
        ),
        content: (
          <>
            <P>
              まず、「
              <Strong>
                弁当箱の
                <H args={{ name: 'witch' }} />
              </Strong>
              」という「架空の」機能を紹介します。
            </P>
            <EmojiSeparator emojis={['✨', '🧙‍♀️', '✨']} />
            <P>
              この機能は実際には存在しない機能なのですが、
              <Em>
                もし仮にこの機能を使うことができれば、「
                <Strong>ある条件を満たすまで、何かを繰り返す弁当箱</Strong>
                」をラクに作ることができます。
              </Em>
              まずはどういう機能か説明しましょう。
            </P>
            <P>
              次の弁当箱は、下に
              <H args={{ name: 'witch' }} />
              が、上に
              <EmojiNumber number={3} />
              が入っています。
            </P>
            {AER.zxux}
            <P>
              これを進めると、下の
              <H args={{ name: 'witch' }} />
              の部分が次のように変化します。
              <H args={{ name: 'pressNext' }} />
            </P>
            {AER.itzl}
            <P>ポイントは次の3点です:</P>
            <Ul>
              <UlLi>
                先ほどのように、弁当箱の下側に
                <H args={{ name: 'witch' }} />
                がある場合、必ずこのように変化します。
              </UlLi>
              <UlLi>
                上の
                <EmojiNumber number={3} />
                には何も起きません。
              </UlLi>
              <UlLi>
                変化後の弁当箱には
                <EmojiWithText letter={magicalVariableName} />や
                <EmojiNumber number={1} />や<InlineEmojiBoxesForQuestion />
                があるのに加え、
                <Strong>
                  <H args={{ name: 'witch' }} />
                  がまた出現しているのに注目です
                </Strong>
                。
              </UlLi>
            </Ul>
            {AER.gtnr}
            <P>
              <Strong>重要: このルールを覚える必要はありません！</Strong>
              とりあえず読み進めてみてください。
            </P>
          </>
        )
      },
      {
        title: <>先に進めてみる</>,
        content: (
          <>
            <P>
              先に進めてみましょう。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.syfp}
            <P>
              ご覧の通り、
              <EmojiWithText letter={magicalVariableName} />
              が、上にあった
              <EmojiNumber number={3} />
              に変わりました。
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter={magicalVariableName} />,
                <Emoji>➡️</Emoji>,
                <EmojiNumber number={3} />
              ]}
            />
            <P>
              続きを見てみましょう。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.wdol}
            <P>
              ご覧の通り、
              <EmojiNumber number={3} />に
              <TopRightBadge inline topRightBadgeType="pred" />
              がついていたので、
              <EmojiNumber number={3} />が<EmojiNumber number={2} />
              になりました。
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetterWithTopRightBadgeWrapper topRightBadgeType="pred">
                  <EmojiNumber number={3} />
                </EmojiForLetterWithTopRightBadgeWrapper>,
                <Emoji>➡️</Emoji>,
                <EmojiNumber number={2} />
              ]}
            />
            <P>
              続きを見てみましょう。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.luir}
            <P>
              ご覧の通り、条件分岐の弁当箱で、
              <InlineEmojiBoxesForCondition type="condition" /> の中にある暗号が
              <EmojiNumber number={2} />
              だったため、上にある{' '}
              <InlineEmojiBoxesForCondition type="falseCase" /> が残りました。
            </P>
          </>
        )
      },
      {
        title: <>ここまでの振り返り</>,
        type: 'summary',
        content: (
          <>
            <P>まだ途中ですが、ここまでを振り返ると、</P>
            <Ul>
              <UlLi>
                最初は
                <EmojiNumber number={3} />と
                <H args={{ name: 'witch' }} />
                だった弁当箱が、
              </UlLi>
              <UlLi>
                <EmojiNumber number={2} />と
                <H args={{ name: 'witch' }} />と<InlineEmojiBoxesForQuestion />
                の弁当箱に変わった。
              </UlLi>
            </Ul>
            <P>
              つまり、
              <Strong>
                数字が1減り、
                <H args={{ name: 'witch' }} />
                はそのままで、下に
                <InlineEmojiBoxesForQuestion />
                がひとつ増えました。
              </Strong>
            </P>
            {AER.ifxr}
          </>
        )
      },
      {
        title: (
          <>
            最後は
            <H args={{ name: 'witch' }} />
            が消える
          </>
        ),
        content: (
          <>
            <P>
              さらに続きを見てみましょう。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.mihy}
            <P>
              先ほどとほとんど同じことが起こりました！
              <Strong>
                数字が1減り、
                <H args={{ name: 'witch' }} />
                はそのままで、下に
                <InlineEmojiBoxesForQuestion />
                がまたひとつ増えました。
              </Strong>
            </P>
            {AER.davn}
            <P>
              さらに続きを見てみましょう。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.zvet}
            <P>
              ここで、
              <Strong>
                今までではじめて、
                <InlineEmojiBoxesForCondition type="condition" />{' '}
                の中にある暗号が
                <EmojiNumber number={0} />
                になりました。ということは、次は下側にある
                <InlineEmojiBoxesForCondition type="trueCase" />
                が残るということです。
              </Strong>
            </P>
            {AER.umce}
            <P>
              <Strong>
                つまり、上側にあった
                <H args={{ name: 'witch' }} />
                が消え、これにて実行が完了します。
              </Strong>
            </P>
            {AER.dyef}
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
                つまり、
                <EmojiNumber number={3} />と<H args={{ name: 'witch' }} />
                が入っている弁当箱を
                <H args={{ name: 'play' }} />
                すると、
              </Strong>
            </P>
            {AER.zxux}
            <P>
              <Strong>
                <EmojiNumber number={1} />
                と、その下に
                <InlineEmojiBoxesForQuestion />
                がふたつ残ります。
              </Strong>
            </P>
            {AER.xtjt}
            <Hr />
            <P>
              下の
              <H args={{ name: 'fastForward' }} />
              を押すと、最初から最後まで超特急で見ることができます。
            </P>
            {AER.mnfh}
            <P>
              それでは、ここで
              <H args={{ name: 'yesNoQuiz' }} />
              をしてみましょう！
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
              今度は、上に
              <EmojiNumber number={4} />
              があります。
            </P>
            {AER.yklt}
            <P>
              <H args={{ name: 'whatHappensAtTheEndQuestion' }} />
            </P>
            {AER.fsmk}
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
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.peoq}
            <P>
              <Strong>
                つまり、
                <EmojiNumber number={4} />と<H args={{ name: 'witch' }} />
                が入っている弁当箱を
                <H args={{ name: 'play' }} />
                すると、
                <EmojiNumber number={1} />
                と、その下に
                <InlineEmojiBoxesForQuestion />
                が3つ残ります。1
              </Strong>
            </P>
            {AER.xsux}
            <P>そろそろパターンが見えてきましたか？</P>
            <EmojiSeparator emojis={['🧙‍♀️', '🤔', '🧙‍♀️']} />
          </>
        )
      },
      {
        title: (
          <>
            <EmojiNumber number={5} />
            からはじめた場合
          </>
        ),
        content: (
          <>
            <P>
              上に
              <EmojiNumber number={5} />
              がある場合はどうでしょう？
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.osqg}
            <P>
              今回は、下に
              <InlineEmojiBoxesForQuestion />
              が4つ残りました！
            </P>
            {AER.jcvr}
            <P>それでは、ここでパターンを解説しましょう！</P>
          </>
        )
      },
      {
        type: 'summary',
        title: (
          <>
            <H args={{ name: 'witch' }} />
            のパターン
          </>
        ),
        content: (
          <>
            <P>
              <InlineHeader>パターン:</InlineHeader>{' '}
              次のような弁当箱を実行した場合、
            </P>
          </>
        )
      }
    ]}
  />
)
