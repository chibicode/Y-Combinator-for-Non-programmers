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
            <P>筆者の予想だと、平均的な読了時間は、</P>
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
                は1ページ<Strong>5分</Strong>、合計5✕5 = <Strong>25分</Strong>
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
                全部合わせて<Strong>80分</Strong>ほど
              </UlLi>
            </Ul>
            <P>
              読むのが早い方は、この半分以下の時間で読み切ることができるかもしれません。長いですが、記事というより電子書籍だと思って、少しずつ読み進めてくだされば幸いです。
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
              だからもしも、「
              <Em>
                世間を騒がせているアプリやAIが、どんな仕組みでできているのか、ほんの少しでいいから理解してみたい
              </Em>
              」と思うことがありましたら、コンピューターサイエンスをかじってみるのをお薦めします。
            </P>
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: <>プログラミングや数学は必要？</>,
        content: (
          <>
            <P>では、いきなりですが質問です。</P>
            <EmojiSeparator emojis={['💻', '🤔', '🔢']} />
            <P>
              <InlineHeader>質問:</InlineHeader>{' '}
              <Em>
                コンピューターサイエンスを学ぶためには、
                <Strong>プログラミング、または高度な数学の知識が必要だ</Strong>
                。
              </Em>
              <H args={{ name: 'yesOrNo' }} />
            </P>
            <YesNoButtons answer="no" />
          </>
        )
      },
      {
        title: <>プログラマー以外にも学んでほしい</>,
        content: (
          <>
            <P>
              コンピューターサイエンスを学ぶ人の多くは、ソフトウェアを開発するプログラマーです。
            </P>
            <EmojiSeparator emojis={['💻', '😎', '💻']} />
            <P>
              しかし筆者は、
              <Strong>
                プログラミングをしない人にこそ、コンピューターサイエンスを学んでほしい
              </Strong>
              と考えています。
            </P>
            <P>
              ほとんどの人にとって、プログラミングは一生必要のないスキルです。一方、ソフトウェアはITサービスやAIといった形で世の中に浸透し、ほとんどの人に影響を及ぼしています。
            </P>
            <EmojiSeparator emojis={['🤖', '😬', '🤖']} />
            <P>
              <Em>
                だからこそ、ほとんどの人が、そういったソフトウェアがどんな仕組みで動いているのかを少しでも理解すべきです。
              </Em>
            </P>
            <P>
              そしてそのために、ソフトウェア開発の根幹となる学問であるコンピューターサイエンス
            </P>
          </>
        )
      },
      {
        title: <>プログラミング無しでも学べる</>,
        content: (
          <>
            <P />
            <P>
              そして、
              <Strong>
                コンピューターサイエンスの基礎を学ぶのに、プログラミングは必要ありません
              </Strong>
              。コードを書かなくても、コンピューターサイエンスの知識をつけることは可能です。
            </P>
            <EmojiSeparator emojis={['😉', '💻', '❌']} />
            <P>
              だから、「
              <Em>
                ソフトウェアについての理解を深めたいが、
                <Strong>プログラミングを勉強する気は毛頭ない</Strong>
              </Em>
              」という方には、コンピューターサイエンスをかじってみるのをおすすめします。当記事は、そんな方のために書きました。
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <InlineHeader>ちなみに:</InlineHeader>{' '}
                筆者は、米国の大学でコンピューターサイエンスを専攻しました。
              </P>
            </>
          )
        }
      },
      {
        title: '学ぶきっかけに',
        content: (
          <>
            <P>当記事では、次の3点に留意しました。</P>
            <EmojiSeparator emojis={['📝', '🤔', '💭']} />
            <Ol>
              <OlLi>
                短時間でコンピューターサイエンスのすべてを説明することはできません。だから、当記事では「
                <Em>筆者が最も面白いと思ったコンピューターサイエンスの題材</Em>
                」を<Strong>ひとつだけ</Strong>
                紹介します。広く浅くではなく、狭く深くを心がけました。
              </OlLi>
              <OlLi>
                当記事の目標は、
                <Em>
                  コンピューターサイエンスを学ぶ「<Strong>きっかけ</Strong>」
                </Em>
                を提供することです。読後に、「コンピューターサイエンスって面白い！」「もっと知りたい！」と思ってくだされば嬉しいです。
                ただ、あくまで「きっかけ」を提供する記事なので、
                <Em>ハイレベルで実践的な内容は提供できません</Em>
                が、あしからず。
              </OlLi>
              <OlLi>
                当記事は、「プログラミングを勉強する気は毛頭ない」という方向けに書きました。だから、
                <Em>
                  プログラミングを勉強中の方や、プログラマーの方にとっては、この記事は役に立たないかもしれません
                </Em>
                。ただ、
                <Em>
                  役には立たなくても、「<Strong>読み物として面白い</Strong>
                  」と思っていただけるかもしれません
                </Em>
                。もしもお時間があれば、読み進めてくださると嬉しいです。
              </OlLi>
            </Ol>
          </>
        )
      },
      {
        title: <>スマホで完結。数学の知識も必要なし</>,
        content: (
          <>
            <P>
              当記事ではプログラミングを行わないので、
              <Em>パソコンは必要ありません</Em>
              。スマホで読み進めることができます。
            </P>
            <EmojiSeparator emojis={['😉', '📱', '🆗']} />
            <P>
              また、コンピューターサイエンスは数学と深く結びついていますが、
              <Em>
                当記事に必要な数学知識は「<Strong>足し算</Strong>{' '}
                <Emoji>➕</Emoji>」と「<Strong>掛け算</Strong> <Emoji>✖️</Emoji>
                」だけ
              </Em>
              です。それより難しい数式は一切登場しません。
            </P>
            <P>前置きはこれくらいにして、本題に入りましょう！</P>
          </>
        )
      },
      {
        title: <>Yコンビネーターって何？</>,
        content: (
          <>
            <EmojiSeparator emojis={['🧙‍♂️', '🤔', '🧙‍♂️']} />
            <P>
              当記事では、コンピューターサイエンスの中でも特に面白い題材を解説します。それが題名「
              <Em>{lessonTitle}</Em>」にもある「
              <Strong>Yコンビネーター</Strong>
              」です。
            </P>
            <P>
              この
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
              筆者はYコンビネーターについて約10年前に学んだのですが、
              <Em>
                あまりに興味深くて<Strong>感動</Strong>してしまった
              </Em>
              のを覚えています。
            </P>
            <EmojiSeparator emojis={['✨', '😭', '✨']} />
            <P>
              今回の記事では、
              <Strong>
                「Yコンビネーター」とは何なのか、そしてなぜ興味深いのかを、
                誰にでもわかるように説明します
              </Strong>
              。そうすることで、コンピューターサイエンスの魅力が伝わればいいなと思っています。
            </P>
            <P>さっそく次に進みましょう！</P>
            <YcNextLessonButton />
          </>
        )
      },
      {
        title: 'プログラミングができる方へ',
        type: 'sideNote' as 'sideNote',
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
              Weirich氏の講演は素晴らしかったですが、当記事とは内容が180度異なりますので、両方見てくださると嬉しいです。
            </P>
            <YcNextLessonButton />
            <P>
              <InlineHeader>GitHub:</InlineHeader> また、当記事のソースコードは
              <ExternalLink href={githubRepo}>GitHubで公開中</ExternalLink>
              です。
            </P>
          </>
        )
      },
      {
        title: 'IT業界の「Yコンビネーター」',
        type: 'sideNote' as 'sideNote',
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
            <YcNextLessonButton />
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
