import React from 'react'
import { numEpisodes } from 'src/lib/episodeCategories'
import {
  Blockquote,
  Ol,
  OlLi,
  Em,
  Img,
  ExternalLink,
  P,
  Strong,
  InlineHeader,
  Ul,
  UlLi
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
import { githubRepo } from 'src/lib/meta'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: '自己紹介',
        footer: {
          content: (
            <P>
              <InlineHeader>公開日:</InlineHeader>{' '}
              <time dateTime={dateSchemaString}>{dateString}</time>
              <br />
              <InlineHeader>ソースコード:</InlineHeader>{' '}
              <ExternalLink href={githubRepo}>GitHubで公開中</ExternalLink>
            </P>
          )
        },
        content: (
          <>
            <EmojiSeparator emojis={['🇺🇸', '👨🏻‍💻', '📙']} />
            <P>
              こんにちは、<Strong>上杉周作</Strong>
              と申します。米国在住のプログラマー兼ブロガーです。2019年のベストセラー本『
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
              」は、筆者のブロガー人生の中で最も執筆に時間をかけた記事です。すべて
              <Strong>無料</Strong>
              で公開しているので、最後まで楽しんでいただけると嬉しいです。
            </P>
          </>
        )
      },
      {
        type: 'meta',
        title: <>目次</>,
        content: (
          <>
            <Toc />
          </>
        )
      },
      {
        title: '読了時間',
        type: 'meta',
        content: (
          <>
            <P>
              本記事は、
              <InlineHeader>
                <H
                  args={{ name: 'categoryNameColored', category: 'beginner' }}
                />
                ・
                <H
                  args={{
                    name: 'categoryNameColored',
                    category: 'intermediate'
                  }}
                />
                ・
                <H
                  args={{
                    name: 'categoryNameColored',
                    category: 'advanced'
                  }}
                />
              </InlineHeader>
              それぞれ<Strong>5ページずつ、</Strong>
              それに「
              <InlineHeader>
                <H
                  args={{ name: 'titlePrefixColored' }}
                  episodeNumberOverrides={0}
                />
              </InlineHeader>
              」と「
              <InlineHeader>
                <H
                  args={{ name: 'titlePrefixColored' }}
                  episodeNumberOverrides={numEpisodes + 1}
                />
              </InlineHeader>
              」を加えた
              <Strong>全17ページ</Strong>
              で構成されています。
            </P>
            <EmojiSeparator emojis={['📗', '📘', '📕']} />
            <P>筆者の予想だと、平均読了時間は以下の通りです。</P>
            <Ul>
              <UlLi>
                <InlineHeader>
                  <H
                    args={{ name: 'categoryNameColored', category: 'beginner' }}
                  />
                </InlineHeader>
                は1ページ<Strong>4分</Strong>、合計4✕5 = <Strong>20分</Strong>
              </UlLi>
              <UlLi>
                <InlineHeader>
                  <H
                    args={{
                      name: 'categoryNameColored',
                      category: 'intermediate'
                    }}
                  />
                </InlineHeader>
                は1ページ<Strong>5分</Strong>、合計5✕5 = <Strong>25分</Strong>
              </UlLi>
              <UlLi>
                <InlineHeader>
                  <H
                    args={{ name: 'categoryNameColored', category: 'advanced' }}
                  />
                </InlineHeader>
                は1ページ<Strong>6分</Strong>、合計6✕5 = <Strong>30分</Strong>
              </UlLi>
              <UlLi>
                <InlineHeader>
                  <H
                    args={{ name: 'titlePrefixColored' }}
                    episodeNumberOverrides={0}
                  />
                </InlineHeader>
                と
                <InlineHeader>
                  <H
                    args={{ name: 'titlePrefixColored' }}
                    episodeNumberOverrides={numEpisodes + 1}
                  />
                </InlineHeader>
                合わせて<Strong>10分</Strong>
              </UlLi>
              <UlLi>
                全部合わせて<Strong>85分</Strong>ほど
              </UlLi>
            </Ul>
            <P>
              読むのが早い方は、この半分以下の時間で読み切ることができるかもしれません。
            </P>
            <P>
              長いですが、記事というより電子書籍だと思って、少しずつ読み進めてくだされば幸いです。
            </P>
          </>
        )
      },
      {
        title: <>コンピューターサイエンスって何？</>,
        content: (
          <>
            <EmojiSeparator emojis={['🤖', '🤔', '🤖']} />
            <P>
              当記事のタイトルは「<Strong>{lessonTitle}</Strong>」ですが、
              <Em>
                コンピュターサイエンスとは何か、ご存じない方がほとんどだと思います
              </Em>
              。
            </P>
            <H args={{ name: 'whatIsComputerScience' }} />
            <EmojiSeparator emojis={['🔎', '🗺', '📷']} />
            <P>
              もしも、「
              <Em>
                世間を騒がせているアプリやAIが、どんな仕組みでできているのか、ほんの少しでいいから理解してみたい
              </Em>
              」と思われたことがありましたら、コンピューターサイエンスをかじってみるのをお薦めします。
            </P>
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: <>プログラミングは必要？</>,
        content: (
          <>
            <P>では、いきなりですが質問です。</P>
            <EmojiSeparator emojis={['💻', '🤔', '🔢']} />
            <P>
              <InlineHeader>質問:</InlineHeader>{' '}
              <Em>
                コンピューターサイエンスを学ぶためには、
                <Strong>プログラミングの知識が必要だ</Strong>。
              </Em>
              <H args={{ name: 'yesOrNo' }} />
            </P>
            <YesNoButtons answer="no" />
          </>
        )
      },
      {
        title: (
          <>
            プログラミングは必要ない<Emoji>❌</Emoji>
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'theAnswerIs', isYes: false }} />
              でした。
              <Strong>
                コンピューターサイエンスを学ぶのに、プログラミングの知識は必要ありません。
              </Strong>
              コードを書いたり、複雑な数式を読み解かなくても、コンピューターサイエンスを学ぶことは可能です。
            </P>
            <EmojiSeparator emojis={['💻', '❌', '🔢']} />
            <P>
              当記事ではこのことを証明すべく、
              <Em>
                プログラミングを一切使わずに、コンピューターサイエンスの中でも
                <Strong>上級者向けの題材</Strong>について解説します。
              </Em>
              こうすることで、
            </P>
            <Ul>
              <UlLi>
                「上級者向けの題材でも、プログラミング抜きに学べるんだ」ということを体感していただき、
              </UlLi>
              <UlLi>
                「
                <Em>
                  プログラミングを勉強する気はないけれど、ソフトウェアについて詳しくなりたいから、コンピューターサイエンスを学んでみようかな
                </Em>
                」という方が増えることを願っています。
              </UlLi>
            </Ul>
          </>
        )
      },
      {
        title: <>スマホで完結</>,
        content: (
          <>
            <P>
              当記事ではプログラミングを行わないので、
              <Em>パソコンは必要ありません</Em>
              。スマホで読み進めることができます。
            </P>
            <EmojiSeparator emojis={['😉', '📱', '🆗']} />
            <P>
              数学の知識もほとんど必要ありません。
              <Em>単純な足し算、引き算、掛け算</Em>
              以外の数式は一切登場しませんので、ご安心ください。
            </P>
            <P>前置きはこれくらいにして、本題に入りましょう！</P>
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: <>Yコンビネーターって何？</>,
        content: (
          <>
            <P>
              当記事では、コンピューターサイエンスの中でも特に面白い、上級者向けの題材について解説します。それが題名「
              <Em>{lessonTitle}</Em>」にもある「
              <Strong>Yコンビネーター</Strong>
              」です。
            </P>
            <P>
              この
              <Strong>
                Yコンビネーターとは、いったい何のことなのでしょう？
              </Strong>
              <H args={{ name: 'yesNoQuiz' }} />
              形式で出題しますので、勘で答えてみてください！
            </P>
            <EmojiSeparator emojis={['🧙‍♂️', '🤔', '🧙‍♂️']} />
            <P>
              <H args={{ name: 'question' }} /> <Strong>Yコンビネーター</Strong>
              」とは、
              <Em>「繰り返し処理」に関連するコンピューターサイエンス用語だ</Em>
              。<H args={{ name: 'yesOrNo' }} />
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
              筆者は米国の大学でコンピューターサイエンスを専攻したのですが、Yコンビネーターは大学3〜4年生が学ぶ
              <Em>上級者向け</Em>
              の題材でした。
            </P>
            <P>
              Yコンビネーターはとても複雑ながら、非常に興味深く、はじめて学んだときは「
              <Em>まるで魔法みたいだ！</Em>
              」と感動してしまったのを覚えています。
            </P>
            <EmojiSeparator emojis={['😭', '✨', '🧙‍♂️']} />
            <P>
              今回の記事では、
              <Strong>
                「Yコンビネーター」とは何なのか、そしてなぜ興味深いのかを、
                誰にでもわかるように説明します
              </Strong>
              。そうすることで、コンピューターサイエンスの魅力が伝わればいいなと思っています。
            </P>
            <P>
              先述した通り、
              <Em>プログラミングの知識は一切必要ありません。</Em>
              というわけで、さっそく次に進みましょう！
            </P>
            <YcNextLessonButton />
          </>
        )
      },
      {
        title: 'プログラミングができる方へ',
        type: 'sideNote',
        preview: {
          content: (
            <P>
              プログラミングができる方が「繰り返し処理」と聞くと、「
              <Strong>for文</Strong>」「<Strong>while文</Strong>」「
              <Strong>再帰</Strong>
              」を思い浮かべると思います。
            </P>
          ),
          text: (
            <>
              <H args={{ name: 'continueReading' }} /> (プログラマー向け)
            </>
          )
        },
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
              <H args={{ name: 'byTheWay' }} />{' '}
              当記事はプログラミング知識ゼロの方でも分かるように書いていますので、「
              <Em>プログラマーに特化した説明のほうがいい</Em>
              」と思う方もいらっしゃるかもしれません。
            </P>
            <P>
              そんな方には、Rakeの作者でもある故・Jim Weirich氏がRubyConf
              2012にて行った講演「
              <ExternalLink href="https://www.youtube.com/watch?v=FITJMJjASUs">
                <InlineHeader>
                  Y Not - Adventures in Functional Programming
                </InlineHeader>
              </ExternalLink>
              」をおすすめします。英語ですが字幕付きで見ることができます。
            </P>
            <YoutubeEmbed
              width={560}
              height={315}
              src="https://www.youtube.com/embed/FITJMJjASUs"
              caption={'ちなみにこの時、筆者は観客として参加していました。'}
            />
            <P>
              <InlineHeader>余談:</InlineHeader>{' '}
              当記事はTypeScriptとNext.jsで書いています。ソースコードは
              <ExternalLink href={githubRepo}>GitHubで公開中</ExternalLink>
              です。
            </P>
          </>
        )
      },
      {
        title: 'IT業界の「Yコンビネーター」',
        type: 'sideNote',
        preview: {
          content: (
            <>
              <P>
                <Em>IT業界</Em>にいる方なら、別の意味で
                「Yコンビネーター」という言葉をご存知かもしれません。
              </P>
            </>
          ),
          text: (
            <>
              <H args={{ name: 'continueReading' }} /> (IT業界の方向け)
            </>
          )
        },
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
            <EmojiSeparator emojis={['😎', '🆚', '👔']} Component={P} />
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
                しかし、当記事を読めば、プログラマーではなくてもYコンビネーターを理解できます
              </Em>
              。ITベンチャー養成機関としての「Yコンビネーター」をご存知の方も、ぜひ読み進めてみてください！
            </P>
          </>
        )
      },
      {
        title: '余談はこれくらいにして、早速始めましょう！',
        content: (
          <>
            <YcNextLessonButton />
          </>
        )
      }
    ]}
  />
)
