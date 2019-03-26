/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import {
  Blockquote,
  Em,
  Img,
  ExternalLink,
  P,
  Strong,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EpisodeCardList from 'src/components/EpisodeCardList'
import EpisodeHero from 'src/components/EpisodeHero'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import YesNoButtons from 'src/components/YesNoButtons'
import { InternalLink } from 'src/components/ContentTags'
import H from 'src/components/H'
import t from 'src/lib/titles'
export const jsxBabelFix = jsx

export default () => {
  return (
    <EpisodeCardList
      cards={[
        {
          content: (
            <>
              <EpisodeHero />
              <P>
                こんにちは！当サイト「
                <Em>
                  <Strong>CSmoji</Strong>
                </Em>
                」 では、
                <Em>絵文字</Em>を使った<Em>コンピューターサイエンス</Em>
                (略して“CS”)の無料レッスンを公開しています。
              </P>
              <P>
                今回はレッスン第1弾・「
                <Em>
                  <Strong>{t('title')}</Strong>
                </Em>
                」です。<Em>約30〜60分</Em>
                で終えることができるので、通勤・通学・昼休みの時間にやるのにぴったりです。ぜひお楽しみください！
              </P>
            </>
          )
        },
        {
          title: '続きからはじめる場合',
          type: 'warning',
          content: (
            <P>
              すでにレッスンを途中まで終えた方は、
              <InternalLink href="/toc">
                こちらの目次ページから続きをやってみてください
              </InternalLink>
              。
            </P>
          )
        },
        {
          title: 'はじめに: コンピューターサイエンスって何？',
          content: (
            <>
              <EmojiSeparator emojis={['🤖', '🤔', '🤖']} halfMarginBottom />
              <P>
                コンピューターサイエンスとは、
                <Em>プログラミングやAI開発の根幹となる学問です。</Em>
                たとえば、グーグルの検索エンジンや、カメラアプリの顔認識機能には、コンピューターサイエンスの考え方が応用されています。
              </P>
              <P>
                プログラミングをマスターしなくても、コンピュターサイエンスの基本的な考え方を学ぶことで、アプリやAIがなぜ動くのかをなんとなく理解することができます。「
                <Em>
                  プログラミングを勉強する気はないけど、アプリやAIが動く原理を学んでみたい
                </Em>
                」という方には、コンピューターサイエンスを学ぶのがおすすめです。
              </P>
              <P>
                もちろん、短期間ですべてを学ぶことはできません。だから当サイトでは、コンピューターサイエンスという学問のごく一部を入門編として紹介しています。みなさんに
                <Em>
                  「コンピューターサイエンスって面白い！」「自分にもできるかも」「もっと学んでみたい！」
                </Em>
                と思ってもらえたら嬉しいです。
              </P>
            </>
          )
        },
        {
          title: 'パソコンでもスマホでもOK！',
          content: (
            <>
              <EmojiSeparator halfMarginBottom emojis={['💻', '🆗', '📱']} />
              <Ul>
                <UlLi>
                  当サイトでは、よくあるプログラミング学習サイトとは違い、
                  <Em>プログラムを書く必要はありません。</Em>
                  だから、スマホひとつで完結します。
                </UlLi>
                <UlLi>プログラミング未経験者でも大歓迎です。</UlLi>
                <UlLi>
                  数学などの理系知識もいりません。中学卒業レベルの学力があれば最後までできます。
                </UlLi>
              </Ul>
            </>
          )
        },
        {
          title: 'このレッスンを作ったのは誰ですか？',
          content: (
            <>
              <EmojiSeparator halfMarginBottom emojis={['🇯🇵', '👨🏻‍💻', '🇺🇸']} />
              <P
                css={css`
                  margin-top: 0;
                `}
              >
                申し遅れました。
                <Strong>上杉周作</Strong>
                と申します。アメリカの大学でコンピューターサイエンスを学んだ米国在住のプログラマーです。最近は、『
                <ExternalLink href="https://amzn.to/2QlZIqm">
                  ファクトフルネス(Factfulness)
                </ExternalLink>
                』という本を共訳しました。
              </P>
              <P>
                <Img
                  size="small"
                  src="/static/images/yc/factfulness.jpg"
                  alt="ファクトフルネス"
                />
              </P>
              <P>
                <ExternalLink href="https://jp.chibicode.com/">
                  わたしの詳しいプロフィールとブログはこちら
                </ExternalLink>
                。
              </P>
            </>
          )
        },
        {
          title: (
            <>
              <Emoji>⭕️</Emoji>
              <Emoji>❌</Emoji>クイズに挑戦
            </>
          ),
          content: (
            <>
              <P>
                当サイトでは、<Emoji>⭕️</Emoji>
                <Emoji>❌</Emoji>
                クイズがたくさん出てきます。答えがわからなくても大丈夫。テキトーに勘で答えを選んでみてください。
              </P>
              <P>さっそく1問目をやってみましょう。</P>
              <EmojiSeparator emojis={['⭕️', '🤔', '❌']} halfMarginBottom />
            </>
          )
        },
        {
          type: 'yesNoQuiz' as 'yesNoQuiz',
          title: <H args={{ name: 'yesNoQuiz' }} />,
          content: (
            <>
              <P>
                <Strong>質問:</Strong> このレッスンの題名は「
                <Strong>あなたの知らないYコンビネーター</Strong>」。この「
                <Strong>
                  <Em>Yコンビネーター</Em>
                </Strong>
                」とは、
                <Em>
                  「繰り返し処理」に関連するコンピューターサイエンス用語だ
                </Em>
                。<Emoji>⭕️</Emoji>か<Emoji>❌</Emoji>か?
              </P>
              <P>
                ↓ 正しいと思う方を選んでみてください。テキトーに選んでも大丈夫！
              </P>
              <YesNoButtons answer="yes" />
            </>
          )
        },
        {
          title: <H args={{ name: 'yesNoQuizAnswerHeading', isYes: true }} />,
          content: (
            <>
              <EmojiSeparator emojis={['⭕️', '🤗', '⭕️']} halfMarginBottom />
              <P>
                <Em>
                  「<Strong>Yコンビネーター</Strong>
                  」とは、「繰り返し処理」に関連するコンピューターサイエンス用語です。
                </Em>
                どういう意味なのか、これから学んでいきましょう！
              </P>
              <YcNextLessonButton
                nextEpisodeNumber={1}
                primaryTextType="start"
              />
              <P>
                プログラミングができる方や、別の意味で「Yコンビネーター」という言葉をご存知の方は、この下のコラムも読んでみてください。(読み飛ばしても大丈夫です。)
              </P>
            </>
          )
        },
        {
          title: 'プログラミングができる方へ',
          type: 'sideNote' as 'sideNote',
          preview: (
            <P>
              プログラミングができる方が「繰り返し処理」と聞くと、「
              <Strong>for文</Strong>」「<Strong>while文</Strong>」「
              <Strong>再帰</Strong>
              」を思い浮かべると思います。
            </P>
          ),
          content: (
            <>
              <P>
                <Em>
                  Yコンビネーターは、「
                  <Strong>for文</Strong>」「<Strong>while文</Strong>」「
                  <Strong>再帰</Strong>
                  」が存在しないプログラミング言語でも、繰り返し処理を可能にするテクニック
                </Em>
                なのです。どういうことかは読んでからのお楽しみ。
              </P>
            </>
          )
        },
        {
          title: '別の意味の「Yコンビネーター」',
          type: 'sideNote' as 'sideNote',
          preview: (
            <>
              <P>
                <Em>ITベンチャー業界</Em>にいる方なら、別の意味で
                「Yコンビネーター」という言葉をご存知かもしれません。
              </P>
            </>
          ),
          content: (
            <>
              <P>
                <Em>
                  Yコンビネーターは、シリコンバレーで最も有名なITベンチャー養成機関の名でもあります。
                </Em>
                AirBnBをはじめとする超有名ITベンチャーを多数輩出しており、
                約2000の卒業企業のうち、トップ100社の企業価値を合計すると
                <ExternalLink href="https://www.ycombinator.com/topcompanies/">
                  10兆円以上になります(2018年10月時点)
                </ExternalLink>
                。
                企業価値には偏りがありますが、単純に割り算をすると、1社あたりの企業価値は1000億円以上になります。
              </P>
              <P>
                <Strong>
                  では、なぜYコンビネーターという名称がつけられたのでしょうか？
                </Strong>
                Yコンビネーター創業者のひとり、ポール・グレアム氏は
                <ExternalLink href="https://mixergy.com/interviews/y-combinator-paul-graham/">
                  インタビューでこう語っていました
                </ExternalLink>
                。
              </P>
              <EmojiSeparator emojis={['🕶', '🆚', '👔']} Component={P} />
              <Blockquote>
                <P>
                  <Strong>
                    <Em>
                      Yコンビネーターとは、プログラミングのテクニックのひとつです。
                    </Em>
                  </Strong>{' '}
                  (中略)
                  個人的に、Yコンビネーターがあまりにも興味深いテクニックだと思ったので、われわれのITベンチャー養成機関もそう名付けてしまったのです。しかし結果的には、
                  <Em>われわれが投資する起業家を選別する</Em>
                  際に、この名前が役立ちました。
                </P>
                <P>
                  <Em>
                    わたしたちは凄腕プログラマーの起業家は招き入れたかったが、スーツ姿のビジネスパーソンは門前払いにしたかった。
                  </Em>
                  凄腕プログラマーがわたしたちのことを聞いたら、こう思うでしょう。「Yコンビネーターって名のITベンチャー養成機関だって？最高じゃん！きっと、面白い人たちが集まっているに違いない」と。いっぽう、スーツの人たちは、Yコンビネーターと聞いても何のことやらさっぱり、となりますから。
                </P>
              </Blockquote>
              <P>
                <Strong>ざっくり言うと:</Strong>{' '}
                彼らは凄腕プログラマーの起業家に投資したかった。だから、「Yコンビネーター」という
                <Em>高度なコンピューターサイエンスの専門用語</Em>
                をITベンチャー養成機関の名前につけることで、凄腕プログラマーを呼び寄せたのです。
              </P>
              <P>
                <Em>
                  しかし、今回のレッスンをやれば、プログラマーではなくてもYコンビネーターを理解できます
                </Em>
                。ITベンチャー養成機関としての「Yコンビネーター」をご存知の方も、ぜひ読み進めてみて下さい！
              </P>
            </>
          )
        },
        {
          title: 'それでは始めましょう！',
          content: (
            <>
              <YcNextLessonButton
                nextEpisodeNumber={1}
                primaryTextType="start"
              />
            </>
          )
        }
      ]}
    />
  )
}
