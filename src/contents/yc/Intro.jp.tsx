/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import {
  Blockquote,
  Em,
  ExternalLink,
  H3,
  P,
  Strong,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EpisodeCardList from 'src/components/EpisodeCardList'
import EpisodeHero from 'src/components/EpisodeHero'
import { introduction } from 'src/components/Yc/AllExpressionRunners'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import YesNoButtons from 'src/components/YesNoButtons'
import h from 'src/lib/h'
import t from 'src/lib/titles'
export const jsxBabelFix = jsx

export default () => {
  let i = 0
  return (
    <EpisodeCardList
      cards={[
        {
          content: (
            <EpisodeHero>
              <P>
                こんにちは。
                <Em>
                  <Strong>CSmoji</Strong>
                </Em>
                では、
                <Em>絵文字</Em>を使った<Em>コンピューターサイエンス(CS)</Em>
                の無料オンラインレッスンを公開しています。
              </P>
              <P>
                <Em>コードは一切出てきません。</Em>
                「プログラミングを勉強する気はないけど、プログラミング的な考え方は知っておきたい」という方におすすめです。
              </P>
              <P>
                今回はレッスン第1弾・「
                <Em>
                  <Strong>{t('ycTitle')}</Strong>
                </Em>
                」です。ぜひお楽しみください！
              </P>
            </EpisodeHero>
          )
        },
        {
          color: 'white',
          content: (
            <>
              <H3>
                <Emoji>⭕️</Emoji>
                <Emoji>❌</Emoji>クイズに挑戦
              </H3>
              <P>
                この教科書では、<Emoji>⭕️</Emoji>
                <Emoji>❌</Emoji>
                クイズがたくさん出てきます。答えがわからなくても大丈夫。テキトーに勘で答えを選んでみてください。
              </P>
              <P>さっそく1問目をやってみましょう。</P>
              <EmojiSeparator emojis={['⭕️', '🤔', '❌']} halfMarginBottom />
            </>
          )
        },
        {
          color: 'blue',
          content: (
            <>
              <H3>{h('yesNoQuiz')}</H3>
              <P>
                <Strong>質問:</Strong> 「
                <Strong>
                  <Em>Yコンビネーター</Em>
                </Strong>
                」とは、スタートアップ企業に投資し育成する、シリコンバレー発の
                <Em>スタートアップ養成スクール</Em>のことだ。<Emoji>⭕️</Emoji>
                か<Emoji>❌</Emoji>か?
              </P>
              <P>↓ 正しいと思う方を選んでみてください。</P>
              <YesNoButtons answer="yes" />
            </>
          )
        },
        {
          content: (
            <>
              <P>
                <Strong>
                  答え: Yコンビネーターの定義として正しいのは、
                  <Em>1と2両方</Em>
                  です。
                </Strong>
              </P>
              <Ul>
                <UlLi>
                  <Strong>ITベンチャー業界にいる方なら、</Strong>
                  Yコンビネーターが、シリコンバレー発のスタートアップ養成スクールだということをご存知かもしれません。でも、Yコンビネーターという名称の由来は、
                  <Em>プログラミングの専門用語</Em>
                  であることを知っている方は少ないのではないでしょうか？
                  「え、そんなの初耳だよ！」と思った方は、ぜひこの記事を最後まで読んでみてください。
                </UlLi>
                <UlLi>
                  <Strong>プログラマーの方なら、</Strong>
                  Yコンビネーターという「関数」がどんなものかご存知かもしれません。でも、Yコンビネーターという関数がどんなものか、
                  <Em>コードを書いたことがない人に説明できますか？</Em>
                  「え、そんなの無理だよ！」と思った方は、ぜひこの記事を最後まで読んでみてください。もちろん、「Yコンビネーターという関数なんて、聞いたことがない」というプログラマーの方も大歓迎です。
                </UlLi>
                <UlLi>
                  そして、
                  <Strong>
                    「Yコンビネーターという言葉自体、初耳だよ」という方へ。
                  </Strong>
                  すばらしい！
                  <Em>この記事は、そんなあなたのために書きました。</Em>
                  最後まで読み進めてもらえれば、Yコンビネーターという題材を通して、プログラミング的な思考法をちょっとだけ身につけることができると思います。
                  <Em>コードは一切登場しないので、安心してください</Em>。
                </UlLi>
              </Ul>
              <EmojiSeparator emojis={['😉', '👍', '❤️']} />
              <P>
                <Strong>はじめる前に、短い解説をさせてください。</Strong>
                アメリカでは2005年に、プログラマー出身の大物起業家たちが、プログラミングができる若手起業家に投資し、起業のノウハウを指導する短期講習プログラムをはじめました。この短期講習プログラムはYコンビネーターと名付けられました。
              </P>
              <P>
                <Strong>
                  そして現在(
                  <ExternalLink href="http://www.ycombinator.com/press/">
                    執筆当時・2018年
                  </ExternalLink>
                  )。
                </Strong>
                Yコンビネーターが支援した企業はAirBnBやDropboxなど約2000社にのぼります。
                <ExternalLink href="http://www.ycombinator.com/topcompanies/">
                  上位100位
                </ExternalLink>
                の価値を合計すると
                <Em>10兆円</Em>
                以上になります。
              </P>
              <P>
                <Strong>
                  では、なぜYコンビネーターという名称がつけられたのでしょうか？
                </Strong>
                Yコンビネーター創業者のひとり、ポール・グレアム氏はインタビューでこう語っていました。
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
                  個人的に、Yコンビネーターがあまりにも興味深いテクニックだと思ったので、起業家育成プログラムもそう名付けてしまったのです。しかし結果的には、
                  <Em>われわれが投資する起業家を選別する</Em>
                  際に、この名前が役立ちました。
                </P>
                <P>
                  <Em>
                    わたしたちはプログラマー出身の起業家は招き入れたかったが、スーツ姿のビジネスパーソンは門前払いにしたかった。
                  </Em>
                  プログラマーがわたしたちのことを聞いたら、こう思うでしょう。「Yコンビネーターって名の起業家育成プログラムだって？最高じゃん！きっと、面白い人たちが集まっているに違いない」と。いっぽう、スーツの人たちは、Yコンビネーターと聞いても何のことやらさっぱり、となりますから。
                </P>
              </Blockquote>
              <P>
                <Strong>ざっくり言うと:</Strong>{' '}
                彼らはプログラミングができる起業家に投資したかった。だから、「Yコンビネーター」という
                <Em>プログラマーしかわからないような</Em>
                名称を起業家育成プログラムにつけた、ということです。
              </P>
              <P>
                <Strong>
                  しかしこういう考え方は、わたしはあまり好きではありません。
                </Strong>
                たしかに、プログラマー受けする名称なのは間違いないですし、Yコンビネーターの創業者たちに悪気はなかったでしょう。ただわたしは一般論として、「
                <Em>コードが書けない人には、このことは理解できっこない</Em>
                」「
                <Em>
                  だから、コードが書けない人にも分かるように説明する必要はない
                </Em>
                」という考え方は、いかがなものかと思います。ソフトウェア(特にAI)が社会を大きく変えていく時代に、逆行しているように思えるのです。
              </P>
              <EmojiSeparator emojis={['🤖', '🌏', '🤖']} Component={P} />
              <P>
                <Strong>
                  では、コードが書けなくてもYコンビネーター(プログラミング用語)を理解できるのでしょうか？
                </Strong>
                <Em>もちろんです</Em>
                。今回、手を動かしてYコンビネーターについて
                <Em>パズル感覚</Em>
                で学べるレッスンを作りました。コードを書く必要は一切ありません。
              </P>
              <P>
                <Strong>というわけで:</Strong>{' '}
                「面白そう、Yコンビネーターについて学んでみたい！」と思った方は、下のボタンを押して先に進んでみてください。最初から最後まで、
                <Em>無料で閲覧できます</Em>。
              </P>
              <YcNextLessonButton
                nextEpisodeNumber={1}
                primaryTextType="start"
              />
            </>
          )
        },
        {
          color: 'indigo',
          content: (
            <>
              <H3>
                Yコンビネーターが何なのか、もったいぶらないで教えてくれませんか？
              </H3>
              <P>
                いいですよ。
                <Em>これがYコンビネーターです。</Em>
              </P>
              {introduction[i++]()}
              <P>
                <Strong>何これ？</Strong>
                と思われるかもしれませんが、紛れもなくこれはYコンビネーターです。
                <Em>
                  レッスンを進めていけば、それぞれの絵文字が何を意味するのか分かるようになります。
                </Em>
              </P>
            </>
          )
        },
        {
          color: 'indigo',
          content: (
            <>
              <H3>このレッスンを作ったのは誰ですか？</H3>
              <EmojiSeparator
                emojis={['👨‍🎤']}
                Component={P}
                spacing="sm"
                size="lg"
              />
              <P
                css={css`
                  margin-top: 0;
                `}
              >
                申し遅れました。
                <Strong>上杉周作</Strong>
                と申します。
                <ExternalLink href="https://jp.chibicode.com/">
                  たまにブログを書いている
                </ExternalLink>
                米国在住のエンジニアです。旅行好きで、
                <ExternalLink href="https://jp.chibicode.com/world-trip/">
                  2017年はゆるく世界一周していました
                </ExternalLink>
                。最近は、Factfulness
                (ファクトフルネス)という本を翻訳しました。(
                <ExternalLink href="https://amzn.to/2QlZIqm">
                  Amazonリンク
                </ExternalLink>
                )
              </P>
            </>
          )
        },
        {
          content: (
            <>
              <P>
                <Strong>自己紹介も終えたところで、</Strong>
                ぜひ先に進んでみてください!
              </P>
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
