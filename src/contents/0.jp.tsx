/** @jsx jsx */
import { jsx } from '@emotion/core'
import {
  Blockquote,
  Em,
  Img,
  ExternalLink,
  P,
  Strong,
  Code,
  InlineHeader,
  Pre
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EpisodeCardList from 'src/components/EpisodeCardList'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import YesNoButtons from 'src/components/YesNoButtons'
import Toc from 'src/components/Toc'
import H from 'src/components/H'
import { lessonTitle } from 'src/lib/titles'
import { dateString, dateSchemaString } from 'src/lib/date'
import YoutubeEmbed from 'src/components/YoutubeEmbed'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: '自己紹介/この記事について',
        footer: {
          content: (
            <P>
              <InlineHeader>公開日:</InlineHeader>{' '}
              <time dateTime={dateSchemaString}>{dateString}</time>
              <br />
              <InlineHeader>ソースコード:</InlineHeader>{' '}
              <ExternalLink href="https://github.com/chibicode/yc">
                GitHubで公開中
              </ExternalLink>
            </P>
          )
        },
        content: (
          <>
            <EmojiSeparator emojis={['🇺🇸', '👨🏻‍💻', '📙']} />
            <P>
              こんにちは、<Strong>上杉周作</Strong>
              と申します。88年生まれ、米国在住のプログラマー兼ブロガーです。2019年のベストセラー本『
              <ExternalLink href="https://amzn.to/2QlZIqm">
                <Strong>ファクトフルネス</Strong>
              </ExternalLink>
              』の共訳者でもあります。
              <ExternalLink href="https://jp.chibicode.com/">
                詳しいプロフィールとブログはこちら
              </ExternalLink>
              。
            </P>
            <P>
              <Img
                size="small"
                src="/static/images/yc/factfulness.jpg"
                alt="ファクトフルネス"
              />
            </P>
            <P>
              本記事「<Strong>{lessonTitle}</Strong>
              」は、筆者のブロガー人生の中で最も時間をかけた、とっておきの記事です。試行錯誤を繰り返しすぎて、執筆に10ヶ月近くかかってしまいました。ネタそのものは、10年近く温めていたものです。時間をかけた分、自信を持っておすすめできる記事になったかなと思います。
            </P>
            <P>
              少々長いですが、章ごとにページを分けているので、途中で一時休憩することもできます。すべて
              <Strong>無料</Strong>
              で公開しているので、最後まで楽しんでいただけると嬉しいです。
            </P>
          </>
        )
      },
      {
        title: '目次',
        type: 'meta',
        content: (
          <>
            <EmojiSeparator emojis={['📗', '📘', '📕']} />
            <Toc />
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <Emoji size="mdlg">🆓</Emoji> これらすべて、
                <Strong>無料</Strong>で公開しています！
              </P>
            </>
          )
        }
      },
      {
        title: 'はじめに: コンピューターサイエンスって何？',
        footer: {
          content: (
            <>
              <P>
                <InlineHeader>余談:</InlineHeader>{' '}
                筆者は米国カーネギーメロン大学のコンピューターサイエンス学部卒です。最優秀TA(教育助手)賞も
                <ExternalLink href="https://www.cs.cmu.edu/~scsfacts/uesugi.html">
                  受賞しています
                </ExternalLink>
                。
              </P>
              <EmojiSeparator emojis={['🇺🇸', '👨🏻‍🎓', '🏫']} />
            </>
          )
        },
        content: (
          <>
            <EmojiSeparator emojis={['🤖', '🤔', '🤖']} />
            <P>
              この記事のタイトルは「<Strong>{lessonTitle}</Strong>」ですが、
              <Em>
                コンピュターサイエンスとは何か
                、ご存じない方がほとんどだと思います
              </Em>
              。
            </P>
            <P>
              <Strong>
                コンピューターサイエンスとは、
                プログラミングやAI開発の根幹となる学問です。
              </Strong>
              たとえば、グーグルなどの検索エンジンや、地図アプリのナビ機能、カメラアプリの顔認識機能には、コンピューターサイエンスの考え方が応用されています。
            </P>
            <P>
              プログラミングをマスターしなくても、コンピュターサイエンスの勘所を押さえれば、たとえばAIがどう作られているのかをなんとなく理解することができます。「
              <Em>
                プログラミングを勉強する気はないけど、プログラミング的な考え方は知っておきたい
              </Em>
              」という方は、コンピューターサイエンスをかじってみるのもいいかもしれません。
            </P>
          </>
        )
      },
      {
        title: 'コンピューターサイエンスを学ぶきっかけに',
        content: (
          <>
            <EmojiSeparator emojis={['📝', '🤔', '💭']} />
            <P>
              もちろん、短期間でコンピューターサイエンスのすべてを学ぶことはできません。だからこの記事の目標は、
              <Strong>
                「コンピューターサイエンスを学んでみたい」と思うきっかけをみなさんに提供すること
              </Strong>
              です。
            </P>
            <P>
              「コンピューターサイエンスって面白い！」「自分でもわかるかも！」「もっと知りたい！」と思ってくださる方が増えたらいいなと思っています。
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <InlineHeader>ちなみに:</InlineHeader>{' '}
                <Em>
                  この記事を筆者が最も読んでもらいたいのは、
                  <Strong>小学校教諭</Strong>
                  の方々です
                </Em>
                。日本でも小学生向けのプログラミング教育がはじまりますが、教員の方々にコンピューターサイセンスの基礎知識があれば、指導の質が上がると思うからです。
              </P>
            </>
          )
        }
      },
      {
        title: <>スマホで完結。数学の知識も必要なし。</>,
        content: (
          <>
            {' '}
            <EmojiSeparator emojis={['😉', '📱', '🆗']} />
            <P>
              当サイトでは、よくあるプログラミング学習サイトとは違い、
              <Em>プログラムを書く必要はありません。</Em>
              だから、スマホひとつで完結します。プログラミング経験者にも、未経験者にも楽しんでもらえるように書いています。
            </P>
            <P>
              また、コンピューターサイエンスは数学と深く結びついていますが、
              <Em>
                この記事に必要な数学知識は「<Strong>足し算</Strong>{' '}
                <Emoji>➕</Emoji>」と「<Strong>掛け算</Strong> <Emoji>✖️</Emoji>
                」だけ
              </Em>
              です。九九より難しい数式は一切登場しません。
            </P>
            <P>それでは、本題に入りましょう！</P>
          </>
        )
      },
      {
        title: <>Yコンビネーターって何？</>,
        content: (
          <>
            <EmojiSeparator emojis={['🧙‍♂️', '🤔', '🧙‍♂️']} />
            <P>
              この記事では、コンピューターサイエンスの中でも特に面白い題材を解説します。それがこの記事の題名「
              <Em>{lessonTitle}</Em>」にもある「
              <Strong>Yコンビネーター</Strong>
              」です。
            </P>
            <P>
              <Strong>
                Yコンビネーターとは、いったい何のことなのでしょう？
              </Strong>
            </P>
            <P>
              すぐに正解を言っても面白くないので、
              <H args={{ name: 'yesNoQuiz' }} />
              形式で出題します。分からなくて当然なので、勘で答えてみてください！
            </P>
            <EmojiSeparator emojis={['⭕️', '😉', '❌']} />
          </>
        )
      },
      {
        type: 'yesNoQuiz' as 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
          </>
        ),
        content: (
          <>
            <P>
              <InlineHeader>質問:</InlineHeader>{' '}
              <Strong>Yコンビネーター</Strong>
              」とは、
              <Em>「繰り返し処理」に関連するコンピューターサイエンス用語だ</Em>
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
        footer: {
          content: (
            <P>
              プログラミングができる方や、別の意味で「Yコンビネーター」という言葉をご存知の方は、この下の余談も読んでみてください。(
              読み飛ばしても大丈夫です。)
            </P>
          )
        },
        content: (
          <>
            <EmojiSeparator emojis={['⭕️', '🤗', '⭕️']} />
            <P>
              <Em>
                「<Strong>Yコンビネーター</Strong>
                」とは、「繰り返し処理」に関連するコンピューターサイエンス用語です。
              </Em>
            </P>
            <P>
              これは約10年前、筆者が大学でコンピューターサイエンスを専攻していたときに学んだ用語なのですが、
              <Em>
                あまりに興味深くて<Strong>感動</Strong>してしまった
              </Em>
              のを覚えています。
            </P>
            <EmojiSeparator emojis={['😲', '😍', '😭']} />
            <P>
              今回の記事では、「<Strong>Yコンビネーター</Strong>
              」が何か、なぜ興味深いのかを伝えていきます。そうすることで、コンピューターサイエンスの面白さが伝わればいいなと思っています。
            </P>
            <P>さっそく次に進みましょう！</P>
            <YcNextLessonButton nextEpisodeNumber={1} />
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
              なのです。どういうことかは記事の中で説明します。
            </P>
            <P>
              <InlineHeader>プログラマーに特化した説明:</InlineHeader>{' '}
              この記事はプログラミング知識ゼロの方でも分かるように書いていますので、「
              <Em>プログラマーに特化した説明のほうがいい</Em>
              」と思う方もいらっしゃるかもしれません。そんな方には、Rakeの作者でもある故・Jim
              Weirich氏がRubyConf 2012にて行った講演「
              <ExternalLink href="https://www.youtube.com/watch?v=FITJMJjASUs">
                Y Not- Adventures in Functional Programming
              </ExternalLink>
              」をおすすめします。
            </P>
            <P>
              このとき筆者は実際に観客として拝聴したのですが、素晴らしい講演でした。英語ですが字幕が完備されており、ライブコーディングなので理解しやすいと思います。動画はこちらです。
            </P>
            <YoutubeEmbed
              width={560}
              height={315}
              src="https://www.youtube.com/embed/FITJMJjASUs"
            />
            <P>
              講演のクライマックスで出てくるYコンビネーターのコードはこちら(Ruby言語)。「難しそう」と思った方は、まずはこの記事を読んでみてもいいかもしれません。
            </P>
            <Pre>
              <Code>{`y = ->(f){
  ->(x){f.(->(v){ x.(x).(v)})}.(
  ->(x){f.(->(v){ x.(x).(v)})} )
}`}</Code>
            </Pre>
          </>
        )
      },
      {
        title: 'IT業界の「Yコンビネーター」',
        type: 'sideNote' as 'sideNote',
        preview: (
          <>
            <P>
              <Em>IT業界</Em>にいる方なら、別の意味で
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
        title: '余談はこれくらいにして、早速始めましょう！',
        content: (
          <>
            <YcNextLessonButton nextEpisodeNumber={1} />
          </>
        )
      }
    ]}
  />
)
