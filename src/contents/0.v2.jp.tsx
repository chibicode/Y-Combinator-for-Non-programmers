import React from 'react'
import {
  numEpisodesExceptFirstAndLast,
  numTotalPages
} from 'src/lib/episodeCategories'
import {
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
import BubbleQuotes from 'src/components/BubbleQuotes'
import NextLessonButton from 'src/components/NextLessonButton'
import YesNoButtons from 'src/components/YesNoButtons'
import Toc from 'src/components/Toc'
import H from 'src/components/H'
import { lessonTitle } from 'src/lib/titles'
import YoutubeEmbed from 'src/components/YoutubeEmbed'
import { githubRepo } from 'src/lib/meta'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: '自己紹介と本稿について',
        content: (
          <>
            <EmojiSeparator emojis={['🇺🇸', '👨🏻‍💻', '📙']} />
            <P>
              こんにちは、<Strong>上杉周作</Strong>
              と申します。米国在住のプログラマ兼ブロガーです。2019年に日経BP社から発売された『
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
                  caption={<>『ファクトフルネス』</>}
                />
              </ExternalLink>
            </P>
            <P>
              本稿「<Strong>{lessonTitle}</Strong>
              」は、
              <Strong>
                プログラミング未経験者向けの、邪道なコンピュータサイエンスの入門書
              </Strong>
              です。どういう意味かは、すぐに説明しますね！
            </P>
            <P>
              ちなみに、本稿は最後まで<Strong>無料</Strong>
              で公開しており、スマホからもパソコンからも閲覧できます。
            </P>
            <EmojiSeparator
              emojis={['📱', '🆓', '💻']}
              description={
                <>
                  最後まで無料。スマホからも
                  <br />
                  パソコンからも閲覧できる
                </>
              }
            />
          </>
        )
      },
      {
        type: 'meta',
        title: <>目次</>,
        content: (
          <>
            <P>
              本稿は、
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
              それにこのページと「
              <InlineHeader>
                <H
                  args={{ name: 'titlePrefixColored' }}
                  episodeNumberOverrides={numEpisodesExceptFirstAndLast + 1}
                />
              </InlineHeader>
              」を加えた
              <Strong>全{numTotalPages}ページ</Strong>
              で構成されています。<Em>記事というよりは、電子書籍に近い</Em>
              かもしれません。
            </P>
            <P>
              大半の方は、
              <Em>
                読了までに<Strong>1〜2時間</Strong>はかかる
              </Em>
              と思います。長いので、少しずつ読み進めてくださると嬉しいです。
            </P>
            <EmojiSeparator emojis={['📗', '📘', '📕']} />
            <P>↓ クリックするとその章に飛べます。</P>
            <Toc />
          </>
        ),
        footer: {
          content: <H args={{ name: 'dateAndSource' }} />
        }
      },
      {
        title: <>コンピュータサイエンスって何？</>,
        content: (
          <>
            <P>
              本稿のタイトルは「
              <Em>{lessonTitle}</Em>
              」ですが、<Strong>そもそもコンピュータサイエンスって何？</Strong>
              と思われる方は多いでしょう。そう思われる方向けに、コンピュータサイエンスの
              <Em>非常に単純化した定義を</Em>書いてみたいと思います。
            </P>
            <EmojiSeparator
              emojis={['❓', '🤔', '❓']}
              description={<>そもそもコンピュータサイエンスって何？</>}
            />
            <P>
              わたしたちの身の回りは、パソコンやスマホといった「コンピュータ」と、そのコンピュータ上で動く「
              <InlineHeader>ソフトウェア</InlineHeader>
              」で溢れています。身近なものでいえば、
              <Em>
                <Emoji>🔎</Emoji> グーグルなどの検索エンジン、
                <Emoji>🗺</Emoji> 地図アプリのナビ機能、<Emoji>📷</Emoji>{' '}
                カメラアプリの顔認識機能は、どれも「
                <InlineHeader>ソフトウェア</InlineHeader>」です
              </Em>
              。
            </P>
            <EmojiSeparator
              emojis={['🔎', '🗺', '📷']}
              description={
                <>
                  グーグルなどの検索エンジン、
                  <br />
                  地図アプリのナビ機能、
                  <br />
                  カメラアプリの顔認識機能は、
                  <br />
                  どれも「
                  <InlineHeader>ソフトウェア</InlineHeader>」
                </>
              }
            />
            <P>
              アプリ・ウェブサービス・ゲーム・AI・組み込みシステムやITシステム・仮想通貨など、「
              <Em>コンピュータプログラムによって機能するもの</Em>
              」はすべて、「<InlineHeader>ソフトウェア</InlineHeader>
              」と呼ばれます。
            </P>
            <P>
              そして「
              <Strong>コンピュータサイエンス</Strong>」とは、
              <Em>
                こういったソフトウェアを開発したり、またはソフトウェアを用いて情報を処理する際に
                <Strong>根幹となる学問</Strong>のことを指す
              </Em>
              のです。
            </P>
            <EmojiSeparator
              emojis={['💻', '🎓', '💻']}
              description={
                <>
                  ソフトウェア開発や、
                  <br />
                  ソフトウェアを用いた情報処理の
                  <br />
                  <Strong>根幹となる学問</Strong>がコンピュータサイエンス
                </>
              }
            />
          </>
        )
      },
      {
        title: <>プログラミングと何が違うの？</>,
        content: (
          <>
            <P>
              コンピュータサイエンスという言葉をはじめて聞く方に、コンピュータサイエンスについて説明しようとすると、「
              <Strong>それはプログラミングと何が違うの？</Strong>
              」というご質問をよくいただきます。
            </P>
            <EmojiSeparator
              emojis={['❓', '🤔', '❓']}
              description={
                <>
                  コンピュータサイエンスって
                  <br />
                  プログラミングと何が違うの？
                </>
              }
            />
            <P>
              非常に単純化して言うと、「
              <Em>
                コンピュータサイエンスは、プログラミングを支える
                <Strong>『学問』</Strong>
              </Em>
              」です。この『学問』の部分が重要なのですが、そう言ってもピンと来ないかもしれないので、例えを用いて説明します。非常に乱暴な例えなのですが、わかりやすさを優先しているのでご了承ください。
            </P>
            <P>
              <Strong>
                コンピュータサイエンスは「医学」に、プログラミングは「治療」に例えることができます。
              </Strong>
              お医者さんは、患者を治療することができますが、その治療方法は「医学」に基づいていますよね。「こうすれば治る可能性が高い」と医学的に根拠があるからこそ、それに基づいた治療法を選ぶわけです。
            </P>
            <EmojiSeparator
              emojis={['💉', '👩🏽‍⚕️', '💊']}
              description={<>お医者さんの治療は「医学」に基づいている</>}
            />
            <P>
              それと同じで、プログラマーも、プログラミングをすることでソフトウェアを作ることができます。そして
              <Em>
                プログラムを設計する際、医者にとっての医学のように、指針のひとつとなる
              </Em>
              のがコンピュータサイエンスという学問なのです。
            </P>
            <EmojiSeparator
              emojis={['👩🏽‍💻', '🎓', '👨🏽‍💻']}
              description={
                <>
                  プログラムを設計する際に、
                  <br />
                  指針のひとつとなる学問が
                  <br />
                  コンピュータサイエンス
                </>
              }
            />
            <P>
              医学の知識が浅い人が医者になってしまうと、間違った治療を施してしまいますよね。それと同じで、
              <Em>
                コンピュータサイエンスの知識が浅い人が高度なプログラミングを行った場合、非効率なプログラムを書いてしまいサーバー代がかさんだり、セキュリティーが脆弱なものになってしまう
              </Em>
              かもしれません。
            </P>
            <P>
              そして、
              <Em>
                医学もコンピュータサイエンスも、日々研究が行われ、進歩しています。
              </Em>
              医学の進歩によって、どれほど優れた医者でも治療できなかった病気でも、治療が可能になったりしますよね。
            </P>
            <P>
              同じように、
              <Em>
                コンピュータサイエンスの進歩によって、どれほど優れたプログラマーでも作ることができなかったソフトウェアが作れるようになったりします。
              </Em>
              最近だと、人工知能分野の進歩が著しく、以前はどれほど優れたプログラマーでも作ることができなかったようなAIアプリを、多くのプログラマーが作れるようになりました。
            </P>
            <EmojiSeparator
              emojis={['💊', '✨', '🤖']}
              description={
                <>
                  医学もコンピュータサイエンスは進歩している。
                  <br />
                  以前はどれほど優れた医者でも、
                  <br />
                  またはどれほど優れたプログラマーでも
                  <br />
                  できなかったことが可能になっている
                </>
              }
            />
          </>
        )
      },
      {
        title: <>コンピュータサイエンスを学ぶメリットはあるの？</>,
        content: (
          <>
            <P>
              また、「
              <Strong>コンピュータサイエンスを学ぶメリットはあるの？</Strong>
              」という質問も、医学に例えることで答えることができます。
            </P>
            <EmojiSeparator
              emojis={['❓', '🤔', '❓']}
              description={
                <>
                  コンピュータサイエンスを
                  <br />
                  学ぶメリットはあるの？
                </>
              }
            />
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
              <H args={{ name: 'question' }} /> 本稿のタイトルは「
              <Em>{lessonTitle}</Em>」ですが、
              <Strong>
                <H args={{ name: 'computerScience' }} />
                とは、非常に単純化して言うと「ソフトウェア開発や、コンピュータによる情報処理の根幹となる学問」だ。
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
              <H args={{ name: 'csDescriptionPreface' }} />
            </P>
            <H
              args={{
                name: 'csDescription'
              }}
            />
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
              <H args={{ name: 'question' }} />{' '}
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
              プログラミングができるのに越したことはありませんが、プログラミングができなくても
              <H args={{ name: 'computerScience' }} />
              の知識をある程度身につけることは可能です。
            </P>
            <EmojiSeparator emojis={['😉', '💻', '❌']} />
            <P>
              本稿ではこのことを証明すべく、
              <Em>
                プログラミングを一切使わずに、
                <H args={{ name: 'computerScience' }} />
                の中でも 「<Strong>ある程度難しい題材</Strong>
                」について解説します。
              </Em>
              「
              <Em>
                簡単な
                <H args={{ name: 'computerScience' }} />
                の題材だけでなく、ある程度難しい題材でも、プログラミング抜きに学ぶことができる
              </Em>
              」ということを体感していただけたら幸いです。
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
              本稿で解説する、
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
              」とは、非常に単純化して言うと
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
              <H args={{ name: 'theAnswerIs', isYes: true, sentence: true }} />
              <Em>
                「
                <Strong>
                  <H args={{ name: 'yCombinator' }} />
                </Strong>
                」とは、非常に単純化して言うと「繰り返し処理」に関連する
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
              <Em>3年生向けの授業で教わる題材でした</Em>
              。1〜2年生向けの内容ではないので、「ある程度難しい題材」であることがうかがえます。
            </P>
            <P>
              話を戻しましょう。本稿では、
              <Strong>
                <H args={{ name: 'yCombinator' }} />
                とは何なのか、そしてなぜ興味深いのかを、プログラミングを使わずに可能な限り分かりやすく説明します
              </Strong>
              。そうすることで、
              <H args={{ name: 'computerScience' }} />
              の魅力が伝わればいいなと思っています。
            </P>
          </>
        )
      },
      {
        title: <>スマホでOK、難しい数式もない</>,
        content: (
          <>
            <P>
              本稿ではプログラミングを行わないので、
              <Strong>パソコンは必要ありません</Strong>
              。スマホで読み進めることができます。もちろん、パソコンでもタブレットでも読むことができます。
            </P>
            <EmojiSeparator emojis={['😉', '📱', '🆗']} />
            <P>
              また、本稿では数学的な内容が少しだけ登場しますが、
              <Em>難しい数式は一切登場しません</Em>
              ので、ご安心ください。
            </P>
            <EmojiSeparator emojis={['➕', '➖', '✖️']} />
          </>
        )
      },
      {
        title: <>無料なので、あしからず</>,
        content: (
          <>
            <P>
              さらに、本稿は最後まで<Strong>無料</Strong>で公開しています。
            </P>
            <EmojiSeparator emojis={['🆓', '🤗', '🆓']} />
            <P>
              だからというのも変ですが、
              <Strong>内容に期待しすぎないでほしい</Strong>
              です。
            </P>
            <P>
              というのも、<Strong>本稿は実用的な内容ではない</Strong>
              からです。
              <Em>
                最後まで読み終えてもプログラミングのスキルは上達しませんし、本稿の内容が仕事やキャリアに役立つことはないでしょう。
              </Em>
              どちらかというと、<Em>別に知らなくても構わない</Em>
              内容です。
            </P>
            <P>
              だから、
              <Strong>
                「わたしは実用的なものだけ読みたいんだ <Emoji>😡</Emoji>
                」という方は、今すぐこのページを閉じてください。
              </Strong>
            </P>
            <EmojiSeparator emojis={['❌', '😡', '❌']} />
            <P>
              一方で、本稿を読めば、「
              <Em>コンピュータサイエンスって面白そう</Em>」「
              <Em>自分にもできるかも</Em>」「
              <Em>もっと学んでみたい</Em>
              」といった、<Strong>何らかのきっかけ</Strong>
              が得られるかもしれません。そうなればいいなと思っていますが、「
              <Em>つまらん</Em>」「<Em>難しすぎる</Em>」「
              <Em>逆に興味が失せた</Em>」と思われる方もいるでしょう。
            </P>
            <P>あまり期待しすぎず、最後までお楽しみいただけると嬉しいです。</P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <InlineHeader>ちなみに:</InlineHeader> 先述した通り、本稿は
                <Strong>全{numTotalPages}ページ</Strong>
                で構成されています。
                <Strong>
                  おそらく読者の方々の半数以上は、読了までに最低1時間はかかるでしょう。
                </Strong>
                「
                <Em>
                  そんな長い文章は読みたくない <Emoji>😡</Emoji>
                </Em>
                」という方も、今すぐこのページを閉じてください。
              </P>
            </>
          )
        }
      },
      {
        title: <>さっそくはじめてみましょう！</>,
        content: (
          <>
            <EmojiSeparator emojis={['✨', '🙂', '✨']} />
            <P>
              もしも「
              <Em>
                とりあえず読んでみたい <Emoji>🙂</Emoji>
              </Em>
              」と思ってくださったのであれば、下のボタンを押して先に進んでみてください！
            </P>
            <NextLessonButton />
          </>
        ),
        footer: {
          content: (
            <P>
              <Em>
                プログラミングができる方や、別の意味で「
                <H args={{ name: 'yCombinator' }} />
                」という言葉をご存知の方
              </Em>
              は、さらに下にある余談も読んでみてください。
            </P>
          )
        }
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
              <H args={{ name: 'continueReading' }} /> (プログラマ向け)
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
              なのです。詳しくは後に説明します。
            </P>
            <P>
              <H args={{ name: 'byTheWay' }} />{' '}
              本稿はプログラミング知識ゼロの方でも分かるように書いていますので、「
              <Em>プログラマに特化した説明のほうがいい</Em>
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
              本稿はTypeScriptとNext.jsで書いています。ソースコードは
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
            <BubbleQuotes
              quotes={[
                {
                  type: 'manLightSkinWhiteHair',
                  children: (
                    <>
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
                          わたしたちは凄腕プログラマの起業家は招き入れたかったが、スーツ姿のビジネスパーソンは門前払いにしたかった。
                        </Em>
                        凄腕プログラマがわたしたちのことを聞いたら、こう思うでしょう。「
                        <H args={{ name: 'yCombinator' }} />
                        って名のITベンチャー養成機関だって？最高じゃん！きっと、面白い人たちが集まっているに違いない」と。いっぽう、スーツの人たちは、
                        <H args={{ name: 'yCombinator' }} />
                        と聞いても何のことやらさっぱり、となりますから。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <Strong>ざっくり言うと:</Strong>{' '}
              彼らは凄腕プログラマの起業家に投資したかった。だから、「
              <H args={{ name: 'yCombinator' }} />
              」という
              <Em>
                高度な
                <H args={{ name: 'computerScience' }} />
                の専門用語
              </Em>
              をITベンチャー養成機関の名前につけることで、凄腕プログラマを呼び寄せたのです。
            </P>
            <P>
              <Em>
                しかし、本稿を読めば、プログラマではなくても
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
