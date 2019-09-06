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
  InlineHeader,
  Ol,
  OlLi,
  Hr
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EpisodeCardList from 'src/components/EpisodeCardList'
import BubbleQuotes from 'src/components/BubbleQuotes'
import NextLessonButton from 'src/components/NextLessonButton'
import CardContent from 'src/components/CardContent'
import Toc from 'src/components/Toc'
import H from 'src/components/H'
import { lessonTitle } from 'src/lib/titles'
import YoutubeEmbed from 'src/components/YoutubeEmbed'
import { githubRepo } from 'src/lib/meta'
import * as R from 'src/components/Runners'

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
                読了までに<Strong>約2時間ほど</Strong>かかる
              </Em>
              と思います。長いので、少しずつ読み進めてくださると嬉しいです。
            </P>
            <EmojiSeparator emojis={['📗', '📘', '📕']} />
            <P>↓ クリックすると各章に飛べます。</P>
            <Toc />
          </>
        ),
        footer: {
          content: <H args={{ name: 'dateAndSource' }} />
        }
      },
      {
        title: <>前置きはいいから早く読みたい！という方へ</>,
        content: (
          <>
            <P>
              「<Strong>前置きはいいから早く読みたい！</Strong>
              」という方は、下のボタンを押して先に進んでください！
            </P>
            <NextLessonButton />
            <P>
              反対に「
              <Strong>
                本稿についての説明を見てから読むかどうか決めたい！
              </Strong>
              」という方は、そのまま下に読み進めてみてください。
            </P>
          </>
        )
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
            <Hr />
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
              それと同じで、プログラマも、プログラミングをすることでソフトウェアを作ることができます。そして
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
                コンピュータサイエンスの進歩によって、どれほど優れたプログラマでも作ることができなかったソフトウェアが作れるようになったりします。
              </Em>
              最近だと、人工知能分野の進歩が著しく、以前はどれほど優れたプログラマでも作ることができなかったようなAIアプリを、多くのプログラマが作れるようになりました。
            </P>
            <EmojiSeparator
              emojis={['💊', '✨', '🤖']}
              description={
                <>
                  医学もコンピュータサイエンスは進歩している。
                  <br />
                  以前はどれほど優れた医者でも、
                  <br />
                  またはどれほど優れたプログラマでも
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
            <P>
              医学の話をすると、まず大前提として、
              <Em>ほとんどの人が医者になることはありえません。</Em>
              その一方で、
              <Em>
                簡単な医学の知識は誰にでも身につけることができるし、身につけておくべきです。
              </Em>
              たとえば、「タバコは体に悪い」というのは、すべての人が知っておくべき超初歩的な医学的知識ですよね。
            </P>
            <EmojiSeparator
              emojis={['🚭', '🚬', '🚭']}
              description={
                <>
                  「タバコは体に悪い」というのは
                  <br />
                  誰もが知っておくべき医学的知識
                </>
              }
            />
            <P>
              これと同じ話で、
              <Em>ほとんどの人がプログラマになることはありえません</Em>
              。その一方で、世の中はソフトウェア無しには回らなくなっており、この傾向は人工知能の発展とともに加速するでしょう。
            </P>
            <P>
              だからこそ、
              <Em>
                多くの人が簡単なコンピュータサイエンスの知識を身につけるべき
              </Em>
              だと思うのです。たとえば最近だと、人工知能や仮想通貨がどういう仕組で動いているかなどは、基礎的なコンピュータサイエンスの知識があればすぐに理解できます。
            </P>
            <EmojiSeparator
              emojis={['🤖', '🤔', '💰']}
              description={
                <>
                  大半の人はプログラマにはならないが、
                  <br />
                  簡単なコンピュータサイエンスの知識を
                  <br />
                  身につければ、世間を騒がせている
                  <br />
                  ソフトウェアについての理解が深まる
                </>
              }
            />
            <P>
              まとめると、
              <Strong>
                コンピュータサイエンスを学ぶメリットは、簡単な医学の知識を学ぶメリットと似ている
              </Strong>
              と言えるかもしれません。
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <InlineHeader>ちなみに:</InlineHeader>{' '}
                もちろん、コンピュータサイエンスと医学は似ている部分もありますが、似ていない部分もたくさんあります。たとえば、
                <Em>
                  医者にはそう簡単になれませんが、コンピュータサイエンスの知識がゼロでもプログラマになることはできます。
                </Em>
              </P>
              <P>
                最近はツールが発達してきているので、たとえば簡単なスマホアプリを作るだけならコンピュータサイエンスの知識は必要ありません。一方、たとえばGoogleのような企業で、検索エンジンの精度向上のように難しい課題を解決するには、コンピュータサイエンスの知識は必須です。
              </P>
            </>
          )
        }
      },
      {
        title: <>邪道なコンピュータサイエンスの入門書</>,
        content: (
          <>
            <P>
              誰もがコンピュータサイエンスを学ぶべきというわけで、今回は
              <Em>コンピュータサイエンスの入門書</Em>
              を書きました。ただ、本稿はよくある入門書とは違い、
              <Strong>邪道なコンピュータサイエンスの入門書</Strong>
              です。
            </P>
            <EmojiSeparator
              emojis={['😈', '📕', '😈']}
              description={<>邪道なコンピュータサイエンスの入門書</>}
            />
            <P>
              わたしはアメリカの大学でコンピュータサイエンスを学んだのですが、当時から教育者気質・作家気質だった筆者は、「
              <Em>いつかコンピュータサイエンスの入門書を書いてみたい</Em>
              」と考えていました。
            </P>
            <EmojiSeparator
              emojis={['👨🏻‍🎓', '💭', '📕']}
              description={
                <>
                  いつかコンピュータサイエンスの
                  <br />
                  入門書を書いてみたい！
                </>
              }
            />
            <P>
              ただ、もちろんコンピュータサイエンスの入門書なんて掃いて捨てるほどあるので、何らかの差別化をしないと書く意味がないと思っていました。そこで思いついたのが、「
              <Strong>正統派の入門書ではなく、邪道な入門書を書く</Strong>
              」ということです。
            </P>
            <P>邪道とはどういうことかは、以下の2点にまとめることができます。</P>
            <Ol>
              <OlLi>
                <Strong>プログラミングの必要なし</Strong>
              </OlLi>
              <OlLi>
                <Strong>難しいマニアックな内容</Strong>
              </OlLi>
            </Ol>
            <P>それぞれどういうことか説明しますね！</P>
          </>
        )
      },
      {
        title: <>邪道な理由1: プログラミングの必要なし</>,
        content: (
          <>
            <P>
              本稿がコンピュータサイエンスの邪道な入門書である理由のひとつめは、
              <Strong>プログラミングを必要としない</Strong>からです。
            </P>
            <EmojiSeparator
              emojis={['😉', '💻', '❌']}
              description={<>プログラミングの必要なし</>}
            />
            <P>
              ほとんどの正統派のコンピュータサイエンスの入門書は、「
              <Strong>
                プログラミングをしながら、コンピュータサイエンスを学ぶ
              </Strong>
              」という教え方をします。
            </P>
            <P>
              たしかにそのほうが効率が良いのですが、
              <Em>
                ほとんどの人はプログラミング未経験者ですし、将来プログラマになることもありません。
              </Em>
              プログラミングをコンピュータサイエンスを学ぶ必須事項にしてしまうと、それだけで学ぶハードルを上げてしまいます。
            </P>
            <P>
              個人的には、
              <Em>
                プログラマになる気がない、またはコンピュータサイエンスを専門として目指さないのであれば、
                <Strong>
                  プログラミング抜きにコンピュータサイエンスだけを学ぶほうがいい
                </Strong>
              </Em>
              と考えています。
            </P>
            <Hr />
            <P>
              そのためにはどうすればいいかというと、
              <Strong>
                プログラミングの代わりに、プログラミングに似たパズルを使って学べばいい
              </Strong>
              のです。
            </P>
            <EmojiSeparator
              emojis={['✨', '🧩', '✨']}
              description={
                <>
                  プログラミングの代わりに、
                  <br />
                  プログラミングに似たパズルで学ぶ
                </>
              }
            />
            <P>
              本稿では、以下のようなパズルを解きながらコンピュータサイエンスの題材を学んでいきます。以下のパズルがどういう仕組みかは次のページで説明しますが、とりあえず
              <Em>
                <H args={{ name: 'play' }} />{' '}
                ボタンを押してみると、パズルが動くことを確認できます。
              </Em>
            </P>
            <R.Mcug>
              以下のようなパズルを解きながら学びます。
              <br />
              <H args={{ name: 'play' }} /> を押してみて下さい！
            </R.Mcug>
            <P>
              上記のように、
              <Strong>
                本稿で紹介するパズルはすべて、スマホからでもパソコンからでも行える
              </Strong>
              ようになっています。将来的には、「スマホから、プログラミング無しにコンピュータサイエンスを学ぶ」ことが当たり前になればいいなと考えています。
            </P>
            <EmojiSeparator
              emojis={['📱', '😉', '💻']}
              description={<>スマホでもパソコンでもOK</>}
            />
          </>
        )
      },
      {
        title: <>邪道な理由2: 高度な内容</>,
        content: (
          <>
            <P>
              本稿がコンピュータサイエンスの邪道な入門書である理由のふたつめは、
              <Strong>内容が高度</Strong>だからです。
            </P>
            <EmojiSeparator
              emojis={['🧠', '🧐', '🧠']}
              description={<>内容が高度</>}
            />
            <P>
              ほとんどの正統派のコンピュータサイエンスの入門書は、
              <Strong>初歩的な内容</Strong>
              から教えはじめます。それはそれで良いと思うのですが、本稿では逆に、みなさんに
              <Em>高度な内容</Em>
              を学んでもらいます。
            </P>
            <P>
              本稿は<Em>2時間程度</Em>
              で読み切れる長さを目標にしているのですが、そのくらいの文量だと、コンピュータサイエンスのすべてを語ることは到底できません。
              だから、
              <Em>
                わたしはその限られた文量の中で、「
                <Strong>自分にもコンピュータサイエンスを学べるかも</Strong>
                」と思うきっかけを読者に提供したい
              </Em>
              と考えています。
            </P>
            <EmojiSeparator
              emojis={['✨', '🙂', '✨']}
              description={
                <>
                  「自分にもコンピュータサイエンスを
                  <br />
                  学べるかも」と思うきっかけを提供したい
                </>
              }
            />
            <P>
              そのためには
              <Strong>
                初歩的な内容ではなく、ある程度高度な内容を教えるほうが良い
              </Strong>
              と思っています。なぜなら、
              <Em>
                もし高度な内容を理解することができれば、それより易しい他の分野も勉強すれば理解できるということ
              </Em>
              になり、「コンピュータサイエンスを学べるかも」という自信につながるからです。
            </P>
            <P>
              もちろん、高度な内容を理解できなかったら本末転倒です。だから、できる限り分かりやすく説明するつもりです。また、高度な内容とはいえ、
              <Strong>
                数学やプログラミングなどの事前知識は一切必要ありません
              </Strong>
              ので、ご安心ください。
            </P>
          </>
        )
      },
      {
        title: <>Yコンビネータ</>,
        content: (
          <>
            <P>
              では、今回学ぶ高度な内容とは何かというと、タイトルにもある「
              <Strong>Yコンビネータ</Strong>」です。
              <InlineHeader>Yコンビネータ</InlineHeader>
              とは、タイトルにもある通り
              <Em>魔法のような力を持つ、とあるコンピュータサイエンスの概念</Em>
              です。
            </P>
            <EmojiSeparator
              emojis={['✨', '🧙‍♀️', '✨']}
              description={<>Yコンビネータについて学ぶ</>}
            />
            <P>
              わたしの大学だと、Yコンビネータは
              <Em>コンピュータサイエンス専攻の3年生</Em>
              が学ぶ、なかなか高度で、しかもマニアックな内容でした。実用的ではないので、知っていても業務に役立つことはありません。
            </P>
            <P>
              なのに、なぜそんなマニアックな題材を選んだかというと、
              <Strong>
                Yコンビネータには、コンピュータサイエンスの面白さのエッセンスが詰まっている
              </Strong>
              からです。これについては、最後まで読んでいただくと分かると思うので、ぜひ楽しみにしていてください。
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <CardContent
                children={
                  <>
                    <P>
                      <Em>
                        Yコンビネータは、シリコンバレーで最も有名なITベンチャー養成機関の名でもあります。
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
                        では、なぜYコンビネータという名称がつけられたのでしょうか？
                      </Strong>
                      Yコンビネータ創業者のひとり、ポール・グレアム氏は
                      <ExternalLink href="https://mixergy.com/interviews/y-combinator-paul-graham/">
                        インタビューでこう語っていました
                      </ExternalLink>
                      。
                    </P>
                    <BubbleQuotes
                      quotes={[
                        {
                          type: 'manLightSkinWhiteHair',
                          children: (
                            <>
                              <P>
                                <Strong>
                                  <Em>
                                    Yコンビネータとは、プログラミングのテクニックのひとつです。
                                  </Em>
                                </Strong>{' '}
                                (中略) 個人的に、
                                Yコンビネータがあまりにも興味深いテクニックだと思ったので、われわれのITベンチャー養成機関もそう名付けてしまったのです。しかし結果的には、
                                <Em>われわれが投資する起業家を選別する</Em>
                                際に、この名前が役立ちました。
                              </P>
                              <P>
                                <Em>
                                  わたしたちは凄腕プログラマの起業家は招き入れたかったが、スーツ姿のビジネスパーソンは門前払いにしたかった。
                                </Em>
                                凄腕プログラマがわたしたちのことを聞いたら、こう思うでしょう。「Yコンビネータって名のITベンチャー養成機関だって？最高じゃん！きっと、面白い人たちが集まっているに違いない」と。いっぽう、スーツの人たちは、Yコンビネータと聞いても何のことやらさっぱり、となりますから。
                              </P>
                            </>
                          )
                        }
                      ]}
                    />
                    <P>
                      つまり、彼らは凄腕プログラマの起業家に投資したかった。だから、「Yコンビネータ」という
                      <Em>高度なコンピュータサイエンスの専門用語</Em>
                      をITベンチャー養成機関の名前につけることで、凄腕プログラマを呼び寄せたのです。
                    </P>

                    <EmojiSeparator
                      emojis={['😎', '🆚', '👔']}
                      description={
                        <>
                          凄腕プログラマを集めるために
                          <br />
                          あえて「Yコンビネータ−」という名前を
                          <br />
                          ITベンチャー養成機関につけた
                        </>
                      }
                    />
                    <P>
                      <Em>
                        しかし、本稿を読めば、プログラマではなくてもYコンビネータを理解できます
                      </Em>
                      。ITベンチャー養成機関としての「Yコンビネータ」をご存知の方も、ぜひ読み進めてみてください！
                    </P>
                  </>
                }
                preview={{
                  text: <>続きを読む</>,
                  content: (
                    <>
                      <P>
                        <InlineHeader>ちなみに:</InlineHeader>{' '}
                        IT業界にいる方は、「
                        <Em>
                          Yコンビネータって、シリコンバレーにあるITベンチャー養成機関のこと？
                        </Em>
                        」と思われた方もいるかと思います。そんな方は、↓の「続きを読む」を押してみてください。
                      </P>
                    </>
                  )
                }}
              />
            </>
          )
        }
      },
      {
        title: <>邪道なので無料</>,
        content: (
          <>
            <P>
              正統派のコンピュータサイエンスの入門書だったらお代を頂戴していたかもしれませんが、
              <Em>
                本稿は邪道な入門書なので、最初から最後まで無料で提供しています。
              </Em>
            </P>
            <EmojiSeparator
              emojis={['🆓', '🤗', '🆓']}
              description={<>すべて無料で読めます！</>}
            />
            <P>
              だからというのも何ですが、
              <Strong>内容に期待しすぎないでください</Strong>
              。そして繰り返しますが、本稿は
              <Strong>プログラミング未経験者向け</Strong>
              です。プログラマの方にとって有益な内容かどうかは、正直微妙かもしれません。
            </P>
            <P>
              また、<Strong>本稿は実用的な内容ではありません</Strong>
              。最後まで読み終えても、日々の暮らしや、キャリアに役立つ気づきは得られないないでしょう。ただその代わりに、
              <Em>
                もしかしたら読後に「コンピュータサイエンスを学んでみたい」という気持ちが芽生えるかもしれません。
              </Em>
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <CardContent
                children={
                  <>
                    <P>
                      プログラマ向けのYコンビネータについての説明で最もおすすめなのは、
                      「
                      <ExternalLink href="https://www.youtube.com/watch?v=FITJMJjASUs">
                        <InlineHeader>
                          Y Not - Adventures in Functional Programming
                        </InlineHeader>
                      </ExternalLink>
                      」という動画です。これは、Rubyのプログラマで、Rakeの作者でもある故・Jim
                      Weirich氏がRubyConf
                      2012にて行った講演です。英語ですが字幕付きで見ることができます。
                    </P>
                    <YoutubeEmbed
                      width={560}
                      height={315}
                      src="https://www.youtube.com/embed/FITJMJjASUs"
                      caption={
                        'ちなみにこの時、筆者は観客として参加していました。'
                      }
                    />
                    <P>
                      <InlineHeader>余談:</InlineHeader>{' '}
                      本稿はTypeScriptとNext.jsで書いています。ソースコードは
                      <ExternalLink href={githubRepo}>
                        GitHubで公開中
                      </ExternalLink>
                      です。
                    </P>
                  </>
                }
                preview={{
                  text: <>続きを読む</>,
                  content: (
                    <>
                      <P>
                        <InlineHeader>ちなみに:</InlineHeader>{' '}
                        プログラマの方で、「Yコンビネータって何？」と思われた方は、↓の「続きを読む」を押してみてください。
                      </P>
                    </>
                  )
                }}
              />
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
        )
      }
    ]}
  />
)
