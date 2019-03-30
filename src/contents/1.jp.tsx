import React from 'react'
import {
  Em,
  H3,
  Img,
  Ol,
  OlLi,
  P,
  PFullWidth,
  Strong,
  InlineHeader
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiSeparator from 'src/components/EmojiSeparator'
import SideNoteSection from 'src/components/SideNoteSection'
import AER, {
  episode1,
  episode1Quiz
} from 'src/components/Yc/AllExpressionRunners'
import BasicTrueFalseQuiz from 'src/components/Yc/BasicTrueFalseQuiz'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import TopRightBadge from 'src/components/Yc/TopRightBadge'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import EpisodeCardList from 'src/components/EpisodeCardList'
import h from 'src/lib/h'
import H from 'src/components/H'

const Step1 = () => (
  <>
    それぞれの料理に <BottomRightBadge inline bottomRightBadgeType="callArg" />
    、
    <BottomRightBadge inline bottomRightBadgeType="funcArg" />、
    <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
    のバッジをつける
  </>
)

const Step2 = () => (
  <>
    <BottomRightBadge inline bottomRightBadgeType="funcArg" /> と{' '}
    <BottomRightBadge inline bottomRightBadgeType="funcBound" /> にマッチ{' '}
    <TopRightBadge inline topRightBadgeType="match" /> する料理があるかチェック
  </>
)

const Step3 = () => (
  <>
    マッチ <TopRightBadge inline topRightBadgeType="match" /> した{' '}
    <BottomRightBadge inline bottomRightBadgeType="funcBound" /> が{' '}
    <BottomRightBadge inline bottomRightBadgeType="callArg" /> と同じ料理になる
  </>
)

const Step4 = () => (
  <>
    <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
    <BottomRightBadge inline bottomRightBadgeType="funcArg" /> が消える
  </>
)

const FourSteps = () => (
  <>
    <P>
      {h('ycBentoBox')}には
      <Strong>4つのステップ</Strong>
      があります:
    </P>
    <Ol>
      <OlLi>
        <Em>
          <Step1 />
        </Em>
      </OlLi>
      <OlLi>
        <Em>
          <Step2 />
        </Em>
      </OlLi>
      <OlLi>
        <Em>
          <Step3 />
        </Em>
      </OlLi>
      <OlLi>
        <Em>
          <Step4 />
        </Em>
      </OlLi>
    </Ol>
  </>
)

export default () => {
  let i = 0
  return (
    <EpisodeCardList
      cards={[
        {
          title: <H args={{ name: 'bentoBox' }} highlightType="none" />,
          content: (
            <>
              <P>
                <H args={{ name: 'episodeWelcomeText' }} />
                この記事では、とあるパズルを使ってYコンビネーターとは何かを学んでいきます。
                今回は、
                <Em>このパズルの基本ルール</Em>
                を紹介します。
              </P>
              <P>
                まずはじめにこちらの写真をご覧ください。わたしの地元・横浜の崎陽軒で販売されているお弁当です(撮影は筆者)。
              </P>
              <PFullWidth>
                <Img src="/static/images/yc/bentoboxes.jpg" alt="Bento Boxes" />
              </PFullWidth>
              <P>
                なぜお弁当の写真をお見せしたかというと、今回紹介するパズルには
                <H args={{ name: 'bentoBox' }} highlightType="none" />
                という名前がついているからです。
              </P>
              <EmojiSeparator emojis={['🍱', '🤔', '🍱']} />
              <P>
                <H args={{ name: 'bentoBox' }} highlightType="none" />
                がどんなものか、説明しますね！
              </P>
            </>
          )
        },
        {
          title: (
            <>
              これが
              <H args={{ name: 'bentoBox' }} highlightType="none" />
            </>
          ),
          content: (
            <>
              <P>
                下の図が、
                <H args={{ name: 'bentoBox' }} highlightType="none" />
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
              まだまだあるよ
              <H args={{ name: 'bentoBox' }} highlightType="none" />
            </>
          ),
          content: (
            <>
              <P>
                さらに何個か、
                <H args={{ name: 'bentoBox' }} highlightType="none" />
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
              <P>
                <InlineHeader>例その3:</InlineHeader> こちらは、上のマスには
                <EmojiWithText letter="g" />
                、下のマスには
                <EmojiWithText letter="f" />
                がふたつ入っています。
              </P>
              {AER.emmb}
              <P>
                <InlineHeader>例その4:</InlineHeader> こちらは、上のマスには
                <EmojiWithText letter="j" />
                、下のマスには
                <EmojiWithText letter="h" />と
                <EmojiWithText letter="i" />
                が入っています。
              </P>
              {AER.jozw}
            </>
          )
        },
        {
          title: (
            <>
              <H args={{ name: 'playButton' }} highlightType="none" />
            </>
          ),
          content: (
            <>
              <P>
                それぞれの
                <H args={{ name: 'bentoBox' }} highlightType="none" />
                には、
                <H args={{ name: 'playButton' }} highlightType="none" />
                があります。
              </P>
              <P>
                <InlineHeader>例その1:</InlineHeader> こちらは、最初に紹介した
                <H args={{ name: 'bentoBox' }} highlightType="none" />
                です。
                <Em>
                  下の
                  <H args={{ name: 'playButton' }} highlightType="none" />
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
                  <H args={{ name: 'reset' }} highlightType="none" />{' '}
                  を押せばもう一度最初から実行できます。
                </P>
              </>
            )
          }
        },
        {
          title: (
            <>
              <H args={{ name: 'play' }} highlightType="none" />
              するとこうなります
            </>
          ),
          content: (
            <>
              <P>
                どうやら、さきほどの
                <H args={{ name: 'bentoBox' }} highlightType="none" />
                は、
                <H args={{ name: 'play' }} highlightType="none" />
                すると、最終的に
                <EmojiWithText letter="b" />
                だけになるようです。
              </P>
              <P>
                <InlineHeader>例その1:</InlineHeader>
              </P>
              {AER.uqwm}
              <P>
                実はこれ、<Strong>ある法則</Strong>
                に従っています。その法則を説明する前に、他の
                <H args={{ name: 'bentoBox' }} highlightType="none" />
                も実行してみましょう。
              </P>
            </>
          )
        },
        {
          title: (
            <>
              他のも
              <H args={{ name: 'play' }} highlightType="none" />
              してみましょう
            </>
          ),
          content: (
            <>
              <P>
                先ほど紹介した3つの
                <H args={{ name: 'bentoBox' }} highlightType="none" />
                を、それぞれ
                <H args={{ name: 'play' }} highlightType="none" />
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
                どれもある法則に従っています。どんな法則か、考えみてください！
              </P>
            )
          }
        },
        {
          title: (
            <>
              <H args={{ name: 'afterPlay' }} highlightType="none" />
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
                どれもある法則に従っています。どんな法則か、考えみてください！
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
                <H args={{ name: 'bentoBox' }} highlightType="none" />を
                <H args={{ name: 'play' }} highlightType="none" />
                しましたが、どれも<Strong>ある法則</Strong>に従っています。
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
                <Em>「サッパリ分からん」という方でも全然心配ありません！</Em>
                とりあえず勘で答えてみてOKです。<Emoji>😉</Emoji>
              </P>
            </>
          )
        },
        {
          content: (
            <>
              <FourSteps />
              <P>
                複雑に聞こえるかもしれませんが、慣れたら簡単です。早速やってみましょう！
              </P>
              <EmojiSeparator emojis={['🔢', '🍱', '🔢']} />
              <H3>
                ステップ1: <Step1 />
              </H3>
              <P>
                まず、
                {h('ycBentoBox')}
                の中にある料理にバッジをつけるところからはじめましょう。
              </P>
              <P>
                <Em>
                  <Strong>上段</Strong>
                  にあるサンドイッチ <Emoji size="mdlg">🥪</Emoji> には、
                  <BottomRightBadge inline bottomRightBadgeType="callArg" />
                  のバッジをつけます。
                </Em>
              </P>
              {episode1[i++]()}
              <P>
                <Em>
                  <Strong>下段の左</Strong>
                  にある寿司 <Emoji size="mdlg">🍣</Emoji> には、
                  <BottomRightBadge inline bottomRightBadgeType="funcArg" />
                  のバッジをつけます。
                </Em>
              </P>
              {episode1[i++]()}
              <P>
                最後に、
                <Em>
                  <Strong>下段の右</Strong>
                  にある寿司 <Emoji size="mdlg">🍣</Emoji> には、
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                  のバッジをつけます。
                </Em>
              </P>
              {episode1[i++]()}
              <SideNoteSection
                heading={'復習問題: ステップ1'}
                color="pink"
                noPaddingBottom
              >
                <P>
                  <Strong>質問:</Strong>{' '}
                  <Em>
                    次の
                    {h('ycBentoBox')}
                    にある料理にはそれぞれどんなバッジがつくでしょう？
                  </Em>
                </P>
                {episode1[i++]()}
                <P>
                  <Strong>答え:</Strong>{' '}
                  <Em>
                    チキン <Emoji size="mdlg">🍗</Emoji> には{' '}
                    <BottomRightBadge inline bottomRightBadgeType="callArg" />
                    、ハンバーガー <Emoji size="mdlg">🍔</Emoji> には{' '}
                    <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                    と
                    <BottomRightBadge
                      inline
                      bottomRightBadgeType="funcBound"
                    />{' '}
                    のバッジがつきます。
                  </Em>
                </P>
                {episode1[i++]()}
              </SideNoteSection>
              <H3>
                ステップ2: <Step2 />
              </H3>
              <P>
                次に、
                <Em>
                  <BottomRightBadge inline bottomRightBadgeType="funcArg" /> と{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                  両方にある料理を探します。
                </Em>
              </P>
              {episode1[i++]()}
              <P>
                <Em>
                  もし、ある料理が{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcArg" /> と{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                  の両方にある場合、それを「
                  <Strong>マッチ</Strong>{' '}
                  <TopRightBadge inline topRightBadgeType="match" />
                  」と呼びます。
                </Em>
              </P>
              {episode1[i++]()}
              <P>
                上の
                {h('ycBentoBox')}
                の場合、寿司 <Emoji size="mdlg">🍣</Emoji> が
                <BottomRightBadge inline bottomRightBadgeType="funcArg" /> と
                <BottomRightBadge
                  inline
                  bottomRightBadgeType="funcBound"
                />{' '}
                それぞれにあるので、 「
                <Strong>
                  マッチ <TopRightBadge inline topRightBadgeType="match" />
                </Strong>
                」ということになります。
              </P>
              <SideNoteSection
                heading={'復習問題: ステップ2'}
                color="pink"
                noPaddingBottom
              >
                <P>
                  <Strong>質問:</Strong>{' '}
                  <Em>
                    下の{h('ycBentoBox')}にはマッチした料理があるでしょうか？
                  </Em>
                </P>
                {episode1[i++]()}
                <P>
                  <Strong>答え:</Strong>{' '}
                  <Em>
                    あります。ハンバーガー <Emoji size="mdlg">🍔</Emoji> が
                    <BottomRightBadge
                      inline
                      bottomRightBadgeType="funcArg"
                    />{' '}
                    と
                    <BottomRightBadge
                      inline
                      bottomRightBadgeType="funcBound"
                    />{' '}
                    それぞれにあるからです。
                  </Em>
                </P>
                {episode1[i++]()}
              </SideNoteSection>
              <H3>
                ステップ3: <Step3 />
              </H3>
              <P>
                次に、
                <Em>
                  <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                  の料理と、さきほどマッチ{' '}
                  <TopRightBadge inline topRightBadgeType="match" /> した{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                  の料理に注目します。
                </Em>
              </P>
              {episode1[i++]()}
              <P>
                <Strong>このステップでは、</Strong>{' '}
                <Em>
                  マッチ <TopRightBadge inline topRightBadgeType="match" /> した{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                  の料理が、
                  <BottomRightBadge inline bottomRightBadgeType="callArg" /> と
                  <Strong>同じ料理</Strong>になります。
                </Em>
              </P>
              {episode1[i++]()}
              <P>
                このとき、{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                の料理に{' '}
                <TopRightBadge inline topRightBadgeType="betaReduced" />{' '}
                というバッジが表示されます。
              </P>
              <SideNoteSection
                heading={'復習問題: ステップ3'}
                color="pink"
                noPaddingBottom
              >
                <P>
                  <Strong>質問:</Strong>{' '}
                  <Em>
                    下の{h('ycBentoBox')}は、次のステップでどうなるでしょう？
                  </Em>
                </P>
                {episode1[i++]()}
                <P>
                  <Strong>答え:</Strong>{' '}
                  <Em>
                    マッチ <TopRightBadge inline topRightBadgeType="match" />{' '}
                    した{' '}
                    <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                    のハンバーガー <Emoji size="mdlg">🍔</Emoji> が、チキン{' '}
                    <Emoji size="mdlg">🍗</Emoji> になります{' '}
                    <TopRightBadge inline topRightBadgeType="betaReduced" />。
                  </Em>
                </P>
                {episode1[i++]()}
              </SideNoteSection>
              <H3>
                ステップ4 (これが最後): <Step4 />
              </H3>
              <P>
                これが最後のステップです！ステップ3のあと、{h('ycBentoBox')}
                はこうなっています:
              </P>
              {episode1[i++]()}
              <P>
                このステップでは、
                <Em>
                  <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                  が消えます。
                </Em>
              </P>
              {episode1[i++]()}
              <P>
                つまり、残るのはサンドイッチ <Emoji size="mdlg">🥪</Emoji>{' '}
                だけになります。
              </P>
              {episode1[i++]()}
              <P>
                <Strong>ちなみに:</Strong> このステップで、{' '}
                <Em>
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                  のバッジ
                </Em>
                も外れます。
              </P>
              <P>
                <Strong>
                  これで終了 <Emoji>🏁</Emoji> です！
                </Strong>
                以上が、{h('ycBentoBox')}の4つのステップでした。
              </P>
              <SideNoteSection
                heading={'復習問題: ステップ4'}
                color="pink"
                noPaddingBottom
              >
                <P>
                  <Strong>質問:</Strong>{' '}
                  <Em>
                    下の{h('ycBentoBox')}は、次のステップでどうなるでしょう？
                  </Em>
                </P>
                {episode1[i++]()}
                <P>
                  <Strong>答え:</Strong>{' '}
                  <Em>
                    <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                    と{' '}
                    <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                    が消えるので…
                  </Em>
                </P>
                {episode1[i++]()}
                <P>
                  最終的にはチキン <Emoji size="mdlg">🍗</Emoji>{' '}
                  だけになります。
                </P>
                {episode1[i++]()}
              </SideNoteSection>
              <P>
                全部のステップを説明し終えたところで、きちんと覚えるために
                <Em>もう一度最初からやってみましょう。</Em>
              </P>
              <H3>もう一度おさらい</H3>
              <P>
                実際に手を動かして見れるように、{' '}
                <Em>
                  {h('ycBentoBox')}に「{h('ycPrevious')}」と「{h('ycNext')}」
                  ボタンを追加しました。
                </Em>
              </P>
              <EmojiSeparator emojis={['⬅️', '🍱', '➡️']} />
              <P>
                次の{h('ycBentoBox')}の下にある、「{h('ycNext')}」ボタンを「
                {h('ycDone')}」 になるまで何度も押してみてください。
              </P>
              {episode1[i++]()}
              <P>
                もう一つの{h('ycBentoBox')}でもやってみましょう。こちらでも、
                {h('ycTryUntilDone')}.
              </P>
              {episode1[i++]()}
              <P>ここまでは理解できたでしょうか？</P>
              <SideNoteSection
                heading={h('ycWhatWeHaveLearned')}
                color="yellow"
              >
                <FourSteps />
              </SideNoteSection>
              <H3>二択クイズに挑戦</H3>
              <P>
                ページの最後には、
                <Strong>ちょっと難しい二択クイズ</Strong>を用意しています。
                <Em>わからなくてもいいので、チャレンジしてみてください。</Em>
              </P>
              <BasicTrueFalseQuiz
                prefix={<Strong>クイズはこちら。</Strong>}
                quizzes={episode1Quiz}
              />
              {h('ycTryGuessing')}
              <YcNextLessonButton nextEpisodeNumber={2} />
            </>
          )
        }
      ]}
    />
  )
}
