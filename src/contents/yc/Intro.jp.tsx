import { css } from 'emotion'
import {
  Blockquote,
  Em,
  ExternalLink,
  Ol,
  OlLi,
  P,
  Strong,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import SideNoteSection from 'src/components/SideNoteSection'
import { introduction } from 'src/components/Yc/AllExpressionRunners'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'

export default () => {
  let i = 0
  return (
    <>
      <P>
        <Strong>クイズです。</Strong>「
        <Strong>
          <Em>Yコンビネーター</Em>
        </Strong>
        」という単語の意味として正しいのはどれでしょう？
      </P>
      <Ol>
        <OlLi>
          スタートアップ企業に投資し育成する、シリコンバレー発の
          <Em>スタートアップ養成スクール</Em>。
        </OlLi>
        <OlLi>
          <Em>再帰関数を定義する手段</Em>
          のひとつ。
        </OlLi>
        <OlLi>
          <Em>不動点コンビネータ</Em>
          の一種。
        </OlLi>
      </Ol>
      <EmojiSeparator emojis={['1️⃣', '2️⃣', '3️⃣']} Component={P} />
      <P>
        <Strong>
          答え: Yコンビネーターの定義として正しいのは、
          <Em>1・2・3すべて</Em>
          です。
        </Strong>
      </P>
      <Ul>
        <UlLi>
          <Strong>ITベンチャー業界にいる方なら、</Strong>
          Yコンビネーターが、シリコンバレー発のスタートアップ養成スクールだということをご存知かもしれません。でも、Yコンビネーターという名称の由来は、
          <Em>コンピューターサイエンスの専門用語</Em>
          であることを知っている方は少ないのではないでしょうか？
          「え、そんなの初耳だよ！」と思った方は、ぜひこの記事を最後まで読んでみてください。
        </UlLi>
        <UlLi>
          <Strong>プログラマーの方なら、</Strong>
          Yコンビネーターという「関数」がどんなものかご存知かもしれません。実装したことがあるかもしれません。でも、Yコンビネーターという関数がどんなものか、
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
        Yコンビネーターという起業家育成プログラムは2005年にはじまりました。成功したプログラマー出身の起業家たちが、プログラミングができる若手起業家に投資し、指導しはじめたのです。
      </P>
      <P>
        <Strong>
          そして現在(
          <ExternalLink href="http://www.ycombinator.com/press/">
            執筆当時・2018年
          </ExternalLink>
          )。
        </Strong>
        Yコンビネーターが投資した企業は約2000社にのぼり、全企業の価値を合計すると
        <Em>10兆円</Em>
        以上になります。最近上場した企業だと、Dropboxが有名です。DropboxはYコンビネーターから2007年に投資を受け、2018年に上場しました。
      </P>
      <P>
        <Strong>
          では、なぜYコンビネーターという名称がつけられたのでしょうか？
        </Strong>
        Yコンビネーター創業者のひとり、ポール・グレアム氏はインタビューでこう語っていました。
      </P>
      <EmojiSeparator emojis={['😎', '🆚', '👔']} Component={P} />
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
        <Em>だから、コードが書けない人にも分かるように説明する必要はない</Em>
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
      <YcNextLessonButton nextEpisodeNumber={1} primaryTextType="start" />
      <SideNoteSection heading="Yコンビネーターが何なのか、もったいぶらないで教えてくれませんか？">
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
      </SideNoteSection>
      <SideNoteSection heading="このレッスンを作ったのは誰ですか？">
        <EmojiSeparator emojis={['👨‍🎤']} Component={P} spacing="sm" size="lg" />
        <P
          className={css`
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
          。
        </P>
      </SideNoteSection>
      <P>
        <Strong>自己紹介も終えたところで、</Strong>
        ぜひ先に進んでみてください!
      </P>
      <YcNextLessonButton nextEpisodeNumber={1} primaryTextType="start" />
    </>
  )
}
