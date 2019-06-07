import React from 'react'
import { numEpisodes } from 'src/lib/episodeCategories'
import {
  Blockquote,
  Em,
  Img,
  ExternalLink,
  P,
  Strong,
  InlineHeader
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EpisodeCardList from 'src/components/EpisodeCardList'
import NextLessonButton from 'src/components/NextLessonButton'
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
              と申します。米国在住のプログラマー兼ブロガーです。2019年に日経BP社から発売された『
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
              <ExternalLink href="https://amzn.to/2QlZIqm">
                <Img
                  size="small"
                  src="/static/images/factfulness.jpg"
                  alt="ファクトフルネス"
                />
              </ExternalLink>
            </P>
            <P>
              当記事「<Strong>{lessonTitle}</Strong>
              」は、筆者のブロガー人生の中で最も執筆に時間をかけた記事です。すべて
              <Strong>無料</Strong>
              で公開しているので、最後まで楽しんでいただけると幸いです。
            </P>
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'computerScience' }} />
            って何？
          </>
        ),
        content: (
          <>
            <EmojiSeparator emojis={['🤖', '🤔', '🤖']} />
            <P>
              いきなりですが、
              <H args={{ name: 'yesNoQuiz' }} />
              を行います。分からなくてもいいので、勘で答えてみてください！
            </P>
            <P>
              <H args={{ name: 'question' }} /> 当記事のタイトルは「
              <Em>{lessonTitle}</Em>」ですが、
              <Strong>
                <H args={{ name: 'computerScience' }} />
                とは、一言で言えば「ソフトウェア開発の根幹となる学問」だ。
              </Strong>
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
            <EmojiSeparator emojis={['⭕️', '🤗', '⭕️']} />
            <P>
              <H args={{ name: 'theAnswerIs', isYes: true, sentence: true }} />
              <Em>
                <H args={{ name: 'computerScience' }} />
                とは、一言で言えば「ソフトウェア開発の根幹となる学問」です。
              </Em>
              ちなみに、ここで言う
              <Em>ソフトウェア</Em>
              とは、アプリ・ウェブサービス・ゲーム・AI・組み込みシステムやITシステムなど、「
              <Em>コンピュータプログラムによって機能するもの</Em>
              」の総称です。
            </P>
            <P>
              身近なものでいえば、
              <Emoji>🔎</Emoji> グーグルなどの検索エンジン、
              <Emoji>🗺</Emoji> 地図アプリのナビ機能、<Emoji>📷</Emoji>{' '}
              カメラアプリの顔認識機能には、コンピュータサイエンスの研究結果が応用されています。
            </P>
            <EmojiSeparator emojis={['🔎', '🗺', '📷']} />
            <P>
              もしも、「
              <Em>
                世間を騒がせているアプリやAIが、どんな仕組みでできているのか、ほんの少しでいいから理解してみたい
              </Em>
              」と思われたことがありましたら、
              <H args={{ name: 'computerScience' }} />
              を少しかじってみても良いかもしれません。
            </P>
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: <>プログラミングは必要？</>,
        content: (
          <>
            <P>
              <H args={{ name: 'computerScience' }} />
              については後に詳しく説明しますが、ここでもう一問
              <H args={{ name: 'yesNoQuiz' }} />
              にチャレンジしてみましょう！
            </P>
            <EmojiSeparator emojis={['💻', '🤔', '💻']} />
            <P>
              <InlineHeader>質問:</InlineHeader>{' '}
              <Em>
                <H args={{ name: 'computerScience' }} />
                を学ぶためには、
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
            プログラミングは必須ではない<Emoji>❌</Emoji>
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'theAnswerIs', isYes: false, sentence: true }} />
              あくまで筆者の考えですが、
              <Strong>
                <H args={{ name: 'computerScience' }} />
                を学ぶのに、プログラミングの知識は必須ではありません。
              </Strong>
              コードを書かなくとも、
              <H args={{ name: 'computerScience' }} />
              の知識を身につけることは可能です。
            </P>
            <EmojiSeparator emojis={['😉', '💻', '❌']} />
            <P>
              当記事ではこのことを証明すべく、
              <Em>
                プログラミングを一切使わずに、
                <H args={{ name: 'computerScience' }} />
                の中でも 「<Strong>ある程度難しい題材</Strong>
                」について解説します。
              </Em>
              「簡単な
              <H args={{ name: 'computerScience' }} />
              の題材だけでなく、ある程度難しい題材でも、コードを書かずに学ぶことができる」ということを体感していただけたら幸いです。
            </P>
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yCombinator' }} />
            って何？
          </>
        ),
        content: (
          <>
            <P>
              当記事で解説する、
              <H args={{ name: 'computerScience' }} />
              の中でも「ある程度難しい題材」とは何なのか。それは、題名「
              <Em>{lessonTitle}</Em>」にもある「
              <Strong>
                <H args={{ name: 'yCombinator' }} />
              </Strong>
              」です。
            </P>
            <P>
              この「
              <H args={{ name: 'yCombinator' }} />
              」とは、いったい何のことなのでしょう？またしても
              <H args={{ name: 'yesNoQuiz' }} />
              形式で出題しますので、勘で答えてみてください！
            </P>
            <EmojiSeparator emojis={['🧙‍♀️', '🤔', '🧙‍♀️']} />
            <P>
              <H args={{ name: 'question' }} /> 「
              <Strong>
                <H args={{ name: 'yCombinator' }} />
              </Strong>
              」とは、
              <Em>
                「繰り返し処理」に関連する
                <H args={{ name: 'computerScience' }} />
                用語だ
              </Em>
              。<H args={{ name: 'yesOrNo' }} />
            </P>
            <YesNoButtons answer="yes" />
          </>
        )
      },
      {
        title: <H args={{ name: 'theAnswerIs', isYes: true }} />,
        content: (
          <>
            <EmojiSeparator emojis={['⭕️', '🤗', '⭕️']} />
            <P>
              <H args={{ name: 'theAnswerIs', isYes: false, sentence: true }} />
              <Em>
                「
                <Strong>
                  <H args={{ name: 'yCombinator' }} />
                </Strong>
                」とは、「繰り返し処理」に関連する
                <H args={{ name: 'computerScience' }} />
                用語です。
              </Em>
            </P>
            <P>
              <H args={{ name: 'yCombinator' }} />
              は、筆者が学んだコンピュータサイエンスの題材の中でも特に興味深いものでした。はじめて
              <H args={{ name: 'yCombinator' }} />
              について学んだときは、「
              <Em>まるで魔法みたいだ！</Em>
              」と感動したのを覚えています。
            </P>
            <EmojiSeparator emojis={['😭', '✨', '🧙‍♀️']} />
            <P>
              ちなみに、筆者は米国の大学で
              <H args={{ name: 'computerScience' }} />
              を専攻したのですが、
              <H args={{ name: 'yCombinator' }} />は
              <Em>3〜4年生向けの授業で教わる題材でした</Em>
              。1〜2年生向けの内容ではないので、「ある程度難しい題材」であることがうかがえます。
            </P>
            <P>
              話を戻すと、今回の記事では、
              <Strong>
                「<H args={{ name: 'yCombinator' }} />
                」とは何なのか、そしてなぜ興味深いのかを、
                誰にでもわかるように説明します
              </Strong>
              。そうすることで、
              <H args={{ name: 'computerScience' }} />
              の魅力が伝わればいいなと思っています。
            </P>
          </>
        )
      },
      {
        title: <>さっそくはじめてみましょう！</>,
        content: (
          <>
            <P>
              当記事ではプログラミングを行わないので、
              <Strong>パソコンは必要ありません</Strong>
              。スマホで読み進めることができます。もちろん、パソコンでもタブレットでも読むことができます。
            </P>
            <EmojiSeparator emojis={['😉', '📱', '🆗']} />
            <P>
              また、当記事では数学の知識もほとんど必要ありません。
              <Em>単純な足し算、引き算、掛け算以外の数式は一切登場しません</Em>
              ので、ご安心ください。
            </P>
            <EmojiSeparator emojis={['➕', '➖', '✖️']} />
            <P>
              さらに、当記事は最後まで<Strong>無料</Strong>で公開しています。
            </P>
            <EmojiSeparator emojis={['🆓', '🤗', '🆓']} />
            <P>
              ぜひ、最後までお楽しみいただけると嬉しいです。下のボタンを押して、さっそくはじめてみましょう！
            </P>
            <NextLessonButton />
          </>
        ),
        footer: {
          content: (
            <P>
              「目次を先に読みたい」という方は、そのまま下にスクロールしてください。また、プログラミングができる方や、別の意味で「
              <H args={{ name: 'yCombinator' }} />
              」という言葉をご存知の方は、さらに下にある余談も読んでみてください。
            </P>
          )
        }
      },
      {
        type: 'meta',
        title: <>目次</>,
        content: (
          <>
            <P>
              当記事は、
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
              で構成されています。非常に長いですが、
              <Em>記事というより電子書籍</Em>
              だと思って、少しずつ読み進めてくだされば幸いです。
            </P>
            <EmojiSeparator emojis={['📗', '📘', '📕']} />
            <Toc />
            <NextLessonButton />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'sideNotePrefix' }} />: プログラミングができる方へ
          </>
        ),
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
                <H args={{ name: 'yCombinator' }} />
                は、「
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
        title: (
          <>
            <H args={{ name: 'sideNotePrefix' }} />: IT業界の「
            <H args={{ name: 'yCombinator' }} />」
          </>
        ),
        type: 'sideNote',
        preview: {
          content: (
            <>
              <P>
                <Em>IT業界</Em>にいる方なら、別の意味で 「
                <H args={{ name: 'yCombinator' }} />
                」という言葉をご存知かもしれません。
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
                <H args={{ name: 'yCombinator' }} />
                は、シリコンバレーで最も有名なITベンチャー養成機関の名でもあります。
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
                では、なぜ
                <H args={{ name: 'yCombinator' }} />
                という名称がつけられたのでしょうか？
              </Strong>
              <H args={{ name: 'yCombinator' }} />
              創業者のひとり、ポール・グレアム氏は
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
                    <H args={{ name: 'yCombinator' }} />
                    とは、プログラミングのテクニックのひとつです。
                  </Em>
                </Strong>{' '}
                (中略) 個人的に、
                <H args={{ name: 'yCombinator' }} />
                があまりにも興味深いテクニックだと思ったので、われわれのITベンチャー養成機関もそう名付けてしまったのです。しかし結果的には、
                <Em>われわれが投資する起業家を選別する</Em>
                際に、この名前が役立ちました。
              </P>
              <P>
                <Em>
                  わたしたちは凄腕プログラマーの起業家は招き入れたかったが、スーツ姿のビジネスパーソンは門前払いにしたかった。
                </Em>
                凄腕プログラマーがわたしたちのことを聞いたら、こう思うでしょう。「
                <H args={{ name: 'yCombinator' }} />
                って名のITベンチャー養成機関だって？最高じゃん！きっと、面白い人たちが集まっているに違いない」と。いっぽう、スーツの人たちは、
                <H args={{ name: 'yCombinator' }} />
                と聞いても何のことやらさっぱり、となりますから。
              </P>
            </Blockquote>
            <P>
              <Strong>ざっくり言うと:</Strong>{' '}
              彼らは凄腕プログラマーの起業家に投資したかった。だから、「
              <H args={{ name: 'yCombinator' }} />
              」という
              <Em>
                高度な
                <H args={{ name: 'computerScience' }} />
                の専門用語
              </Em>
              をITベンチャー養成機関の名前につけることで、凄腕プログラマーを呼び寄せたのです。
            </P>
            <P>
              <Em>
                しかし、当記事を読めば、プログラマーではなくても
                <H args={{ name: 'yCombinator' }} />
                を理解できます
              </Em>
              。ITベンチャー養成機関としての「
              <H args={{ name: 'yCombinator' }} />
              」をご存知の方も、ぜひ読み進めてみてください！
            </P>
          </>
        )
      },
      {
        title: '余談はこれくらいにして、早速始めましょう！',
        content: (
          <>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
