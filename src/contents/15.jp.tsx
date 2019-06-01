import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import EmojiNumber from 'src/components/EmojiNumber'
import { Ul, UlLi, P, Strong, Ol, OlLi, Em } from 'src/components/ContentTags'
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
              <EmojiNumber number={3} />
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
        title: <></>,
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
          </>
        )
      }
    ]}
  />
)
