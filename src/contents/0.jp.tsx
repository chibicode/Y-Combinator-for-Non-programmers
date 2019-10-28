import React from 'react'
import {
  numEpisodesExceptFirstAndLast,
  numTotalPages
} from 'src/lib/episodeCategories'
import {
  Highlight,
  Img,
  ExternalLink,
  P,
  HighlightBold,
  Bold,
  Ol,
  OlLi,
  Hr
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import CustomEmoji from 'src/components/CustomEmoji'
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
        title: <>自己紹介と本稿について</>,
        content: (
          <>
            <P>
              こんにちは、<HighlightBold>上杉周作</HighlightBold>
              と申します。米国在住のプログラマ兼ブロガーです。2019年に日経BP社から発売された『
              <ExternalLink href="https://www.amazon.co.jp/dp/4822289605/ref=cm_sw_em_r_mt_dp_U_h20QDbG5PNQK4">
                <HighlightBold>ファクトフルネス</HighlightBold>
              </ExternalLink>
              』の共訳者でもあります。
              <ExternalLink href="https://jp.chibicode.com/">
                詳しいプロフィールとブログはこちら
              </ExternalLink>
              。
            </P>
            <P>
              <ExternalLink href="https://www.amazon.co.jp/dp/4822289605/ref=cm_sw_em_r_mt_dp_U_h20QDbG5PNQK4">
                <Img
                  size="small"
                  src="/static/images/factfulness.jpg"
                  alt="ファクトフルネス"
                  caption={<>『ファクトフルネス』</>}
                />
              </ExternalLink>
            </P>
            <P>
              本稿「<HighlightBold>{lessonTitle}</HighlightBold>
              」は、
              <HighlightBold>
                プログラミング未経験者向けの、邪道なコンピュータサイエンスの入門書
              </HighlightBold>
              です。どういう意味かは、すぐに説明しますね！
            </P>
            <EmojiSeparator
              emojis={['😈', '📓', '😈']}
              description={
                <>
                  プログラミング未経験者向けの、
                  <br />
                  <HighlightBold>邪道</HighlightBold>
                  なコンピュータサイエンスの入門書
                </>
              }
            />
            <P>
              ちなみに、本稿は最後まで<HighlightBold>無料</HighlightBold>
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
              <Bold>
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
              </Bold>
              それぞれ<HighlightBold>5ページずつ、</HighlightBold>
              それにこのページと「
              <Bold>
                <H
                  args={{ name: 'titlePrefixColored' }}
                  episodeNumberOverrides={numEpisodesExceptFirstAndLast + 1}
                />
              </Bold>
              」を加えた
              <HighlightBold>全{numTotalPages}ページ</HighlightBold>
              で構成されています。
              <Highlight>記事というよりは、電子書籍に近い</Highlight>
              かもしれません。
            </P>
            <P>
              大半の方は、
              <Highlight>
                読了までに<HighlightBold>約2〜3時間ほど</HighlightBold>かかる
              </Highlight>
              と思います。長いので、少しずつ読み進めてくださると嬉しいです。
            </P>
            <EmojiSeparator emojis={['📗', '📘', '📕']} />
            <P>↓ クリックすると各ページに飛べます。</P>
            <Toc />
          </>
        ),
        footer: {
          content: <H args={{ name: 'dateAndSource', includeTwitter: true }} />
        }
      },
      {
        title: <>前置きはいいから早く読みたい！という方へ</>,
        content: (
          <>
            <P>
              「<HighlightBold>前置きはいいから早く読みたい！</HighlightBold>
              」という方は、下のボタンを押して先に進んでください！
            </P>
            <NextLessonButton />
            <P>
              反対に「
              <HighlightBold>
                本稿についての説明を聞いてから読むかどうか決めたい！
              </HighlightBold>
              」という方は、そのまま下に読み進めてみてください。
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="singleArrowDown" />,
                <CustomEmoji type="singleArrowDown" />,
                <CustomEmoji type="singleArrowDown" />
              ]}
              topDescription={
                <>
                  説明を読んでから始めるには
                  <br />
                  下にスクロールしてください！
                </>
              }
            />
          </>
        )
      },
      {
        title: <>コンピュータサイエンスって何？</>,
        content: (
          <>
            <P>
              本稿のタイトルは「
              <Highlight>{lessonTitle}</Highlight>
              」ですが、「
              <HighlightBold>
                そもそもコンピュータサイエンスって何？
              </HighlightBold>
              」 と思われる方は多いでしょう。そんな方向けに、
              <Highlight>
                非常に単純化したコンピュータサイエンスの定義
              </Highlight>
              を書いてみたいと思います。
            </P>
            <EmojiSeparator
              emojis={['❓', '🤔', '❓']}
              description={<>そもそもコンピュータサイエンスって何？</>}
            />
            <P>
              わたしたちの身の回りには、パソコンやスマホといった「コンピュータ」と、そのコンピュータ上で動く「
              <Bold>ソフトウェア</Bold>
              」がたくさんあります。身近なものでいえば、
              <Highlight>
                <Emoji>🔎</Emoji> グーグルなどの検索エンジン、
                <Emoji>🗺</Emoji> 地図アプリのナビ機能、<Emoji>📷</Emoji>{' '}
                カメラアプリの顔認識機能は、どれも「
                <Bold>ソフトウェア</Bold>」です
              </Highlight>
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
                  <Bold>ソフトウェア</Bold>」
                </>
              }
            />
            <P>
              アプリ・ウェブサービス・ゲーム・AI・組み込みシステムやITシステム・仮想通貨など、「
              <Highlight>コンピュータプログラムによって機能するもの</Highlight>
              」はすべて、「<Bold>ソフトウェア</Bold>
              」と呼ばれます。
            </P>
            <P>
              そして「
              <HighlightBold>コンピュータサイエンス</HighlightBold>」とは、
              <Highlight>
                こういったソフトウェアを開発したり、またはソフトウェアを用いて情報を処理する際に、
                <HighlightBold>根幹となる学問</HighlightBold>のことを指す
              </Highlight>
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
                  <HighlightBold>根幹となる学問</HighlightBold>
                  がコンピュータサイエンス
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
              <HighlightBold>プログラミングと何が違うの？</HighlightBold>
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
              <Highlight>
                コンピュータサイエンスは、プログラミングを支える
                <HighlightBold>『学問』</HighlightBold>
              </Highlight>
              」です。この『学問』の部分が重要なのですが、そう言ってもピンと来ないかもしれないので、例えを用いて説明します。かなり乱暴な例えなのですが、わかりやすさを優先しているのでご了承ください。
            </P>
          </>
        )
      },
      {
        title: <>医学に例えると</>,
        content: (
          <>
            <P>
              まず、
              <HighlightBold>
                コンピュータサイエンスは「医学」に、プログラミングは「治療」に例えることができます。
              </HighlightBold>
              お医者さんは、患者を治療することができますが、その治療法は医学に基づいていますよね。「こうすれば治る可能性が高い」と医学的に根拠があるからこそ、それに基づいた治療法を選ぶわけです。
            </P>
            <EmojiSeparator
              emojis={['💉', '👩🏽‍⚕️', '💊']}
              description={<>お医者さんの治療は「医学」に基づいている</>}
            />
            <P>
              それと同じで、プログラマも、プログラミングをすることでソフトウェアを作ることができます。そして
              <Highlight>
                医者にとっての医学のように、ソフトウェアを設計する際に指針のひとつとなる
              </Highlight>
              のがコンピュータサイエンスという学問なのです。
            </P>
            <EmojiSeparator
              emojis={['👩🏽‍💻', '🎓', '👨🏽‍💻']}
              description={
                <>
                  ソフトウェアを設計する際に、
                  <br />
                  指針のひとつとなる学問が
                  <br />
                  コンピュータサイエンス
                </>
              }
            />
            <P>
              医学の知識が浅い人が医者になってしまうと、間違った治療を施しかねません。それと同じで、
              <Highlight>
                コンピュータサイエンスの知識が浅い人が高度なプログラミングを行った場合、非効率なプログラムを書いてしまいサーバー代がかさんだり、セキュリティーが脆弱なものになってしまう
              </Highlight>
              かもしれません。
            </P>
            <P>
              また、
              <Highlight>
                医学もコンピュータサイエンスも、日々研究が行われ、進歩しています。
              </Highlight>
              医学の進歩によって、昔はどれほど優れた医者でも治療できなかった病気が、根絶できるようになったりしますよね。
            </P>
            <P>
              同じように、
              <Highlight>
                コンピュータサイエンスの進歩によって、以前はどれほど優れたプログラマでも作れなかったソフトウェアが、最近なら誰でも作れるようになったりします。
              </Highlight>
              最近だと、人工知能分野の進歩が著しく、以前は作るのが不可能とされていたようなAIアプリを、多くのプログラマが作れるようになりました。
            </P>
            <EmojiSeparator
              emojis={['💊', '✨', '🤖']}
              description={
                <>
                  医学もコンピュータサイエンスも
                  <br />
                  進歩している。
                  <br />
                  以前はどれほど優れた医者でも、
                  <br />
                  またはどれほど優れたプログラマでも
                  <br />
                  できなかったことが可能になっている
                </>
              }
            />
            <P>
              <Highlight>
                医学もコンピュータサイエンスも「学問」であり、日々の研究による学問の進歩が、治療やプログラミングといった現場の改善につながる
              </Highlight>
              わけですね。
            </P>
          </>
        )
      },
      {
        title: <>コンピュータサイエンスを学ぶメリットはあるの？</>,
        content: (
          <>
            <P>
              先ほどの例えを使えば、「
              <HighlightBold>
                コンピュータサイエンスを学ぶメリットはあるの？
              </HighlightBold>
              」という質問にも答えることができます。
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
              医学の場合、まず大前提として、
              <Highlight>
                ほとんどの人が医者になることはありえません。
              </Highlight>
              その一方で、
              <Highlight>
                簡単な医学の知識は誰にでも身につけることができるし、身につけておくべきです。
              </Highlight>
              たとえば、「タバコは体に悪い」というのは、誰もが知っておくべき初歩的な医学的知識ですよね。
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
              <Highlight>
                ほとんどの人がプログラマになることはありえません
              </Highlight>
              。その一方で、世の中はソフトウェア無しには回らなくなっており、この傾向は人工知能の発展とともに加速するでしょう。
            </P>
            <P>
              だからこそ、
              <Highlight>
                多くの人が簡単なコンピュータサイエンスの知識を身につけるべき
              </Highlight>
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
                  身につければ、人工知能や仮想通貨などの
                  <br />
                  ソフトウェアについての理解が深まる
                </>
              }
            />
            <P>
              まとめると、
              <HighlightBold>
                コンピュータサイエンスを学ぶメリットは、簡単な医学の知識を学ぶメリットと似ている
              </HighlightBold>
              と言えるかもしれません。
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
                      最近はツールが発達してきているので、簡単なスマホアプリを作るだけならコンピュータサイエンスの知識は必要ありません。一方、Googleのような企業で、検索エンジンの精度向上のように難しい課題を解決するには、コンピュータサイエンスの知識は必須です。
                    </P>
                    <P>
                      他に医学と似ていない点としては、
                      <Highlight>
                        プログラミングの場合、学問の進歩よりも、現場の試行錯誤から生まれた最新技術のほうが、日々の業務に与える影響は圧倒的に大きい
                      </Highlight>
                      です。また、そういった最新技術がコンピュータサイエンスの学術論文に載ることは少ないです。
                    </P>
                  </>
                }
                preview={{
                  text: <>続きを読む</>,
                  content: (
                    <>
                      <P>
                        <Bold>余談 (読み飛ばしてもOK):</Bold>{' '}
                        コンピュータサイエンスと医学は似ている部分もありますが、
                        <Highlight>似ていない部分もたくさんあります</Highlight>
                        。たとえば、
                        <Highlight>
                          医者にはそう簡単になれませんが、コンピュータサイエンスの知識が無くてもプログラマになることはできます。
                        </Highlight>
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
        title: <>邪道なコンピュータサイエンスの入門書</>,
        content: (
          <>
            <P>
              誰もがコンピュータサイエンスを学ぶべきというわけで、このたび
              <Highlight>コンピュータサイエンスの入門書</Highlight>
              を書きました。それが、本稿「
              <HighlightBold>{lessonTitle}</HighlightBold>」です。
            </P>
            <P>
              ただ、本稿はよくある入門書とは違い、
              <HighlightBold>
                邪道なコンピュータサイエンスの入門書
              </HighlightBold>
              です。
            </P>
            <EmojiSeparator
              emojis={['😈', '📓', '😈']}
              description={<>邪道なコンピュータサイエンスの入門書</>}
            />
            <P>
              わたしはアメリカの大学でコンピュータサイエンスを学んだのですが、当時から教育者気質・作家気質だった筆者は、「
              <Highlight>
                いつかコンピュータサイエンスの入門書を書いてみたい
              </Highlight>
              」と考えていました。
            </P>
            <EmojiSeparator
              emojis={['👨🏻‍🎓', '💭', '📓']}
              description={
                <>
                  いつかコンピュータサイエンスの
                  <br />
                  入門書を書いてみたい！
                </>
              }
            />
            <P>
              ただ、もちろんコンピュータサイエンスの入門書なんて掃いて捨てるほどあるので、何らかの差別化をしないと書く意味がありません。そこで思いついたのが、「
              <HighlightBold>
                正統派の入門書ではなく、『邪道』な入門書を書く
              </HighlightBold>
              」ということです。
            </P>
            <P>本稿が「邪道」である理由は以下の2点です。</P>
            <Ol>
              <OlLi>
                <HighlightBold>プログラミングの必要なし</HighlightBold>
              </OlLi>
              <OlLi>
                <HighlightBold>高度な内容</HighlightBold>
              </OlLi>
            </Ol>
            <P>それぞれどういうことか説明しますね！</P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <Bold>先に進みたい方へ:</Bold>「
                <Highlight>前置きはもういいから早く読みたい！</Highlight>
                」という方は、下のボタンを押して先に進んでください！
              </P>
              <NextLessonButton />
            </>
          )
        }
      },
      {
        title: <>邪道な理由1: プログラミングの必要なし</>,
        content: (
          <>
            <P>
              本稿がコンピュータサイエンスの「邪道」な入門書である理由のひとつめは、
              <HighlightBold>プログラミングを行わない</HighlightBold>からです。
            </P>
            <EmojiSeparator
              emojis={['😉', '💻', '❌']}
              description={<>プログラミングは行いません</>}
            />
            <P>
              正統派のコンピュータサイエンスの入門書は、「
              <HighlightBold>
                プログラミングを行いながら、コンピュータサイエンスを学ぶ
              </HighlightBold>
              」という教え方をします。
            </P>
            <P>
              たしかにそのほうが効率が良いのですが、
              <Highlight>
                ほとんどの人はプログラミング未経験者ですし、将来プログラマになることもありません。
              </Highlight>
              またプログラミングは、スマホからだと非常にやりにくいです。
            </P>
            <EmojiSeparator
              emojis={['❌', '📱', '❌']}
              description={
                <>
                  プログラミングは、スマホからだと
                  <br />
                  非常にやりにくい
                </>
              }
            />
            <P>
              だから、プログラミングをコンピュータサイエンスを学ぶための必須事項にしてしまうと、それだけで学ぶハードルがひとつ増えてしまいます。
            </P>
            <P>
              個人的には、
              <Highlight>
                プログラマになる気がない、またはコンピュータサイエンスを専門として目指さないのであれば、
                <HighlightBold>
                  プログラミング抜きにコンピュータサイエンスだけを学ぶほうがいい
                </HighlightBold>
              </Highlight>
              と考えています。
            </P>
          </>
        )
      },
      {
        title: <>パズルで学ぶ</>,
        content: (
          <>
            <P>
              そのためにはどうすればいいかというと、
              <HighlightBold>
                プログラミングの代わりに、プログラミングに似たパズルを使って学べばいい
              </HighlightBold>
              のです。
            </P>
            <EmojiSeparator
              emojis={['✨', '🧩', '✨']}
              description={
                <>
                  プログラミングの代わりに、
                  <br />
                  <HighlightBold>プログラミングに似たパズル</HighlightBold>
                  で学ぶ
                </>
              }
            />
            <P>
              本稿では、以下のようなパズルを解きながらコンピュータサイエンスの題材を学んでいきます。以下のパズルがどういう仕組みかは次のページで説明しますが、とりあえず
              <Highlight>
                <H args={{ name: 'run' }} />{' '}
                ボタンを押してみると、パズルが動くことを確認できます。
              </Highlight>
            </P>
            <R.Mcug>
              以下のようなパズルを解きながら学びます。
              <br />
              <H args={{ name: 'run' }} /> を押してみて下さい！
            </R.Mcug>
            <P>
              上記のように、
              <HighlightBold>
                本稿で紹介するパズルはすべて、スマホからでもパソコンからでも行えます。
              </HighlightBold>
            </P>
            <EmojiSeparator
              emojis={['📱', '😉', '💻']}
              description={<>スマホでもパソコンでもOK</>}
            />
            <P>
              将来的には、「スマホから、プログラミング無しにコンピュータサイエンスを学ぶ」ことが当たり前になればいいなと考えています。
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
                      対象が子供の場合は話が違います。
                      <Highlight>
                        子供向けの学校教育の場合、大人よりは学びに使える時間がたくさんあるので、プログラミングとコンピュータサイエンスの両方を教えるべきだと思います。
                      </Highlight>
                    </P>
                    <EmojiSeparator
                      emojis={['👧🏻', '❤️', '💻']}
                      description={
                        <>
                          子供向けの学校教育の場合は、
                          <br />
                          プログラミングも教えるべき
                        </>
                      }
                    />
                    <P>
                      子供向けのプログラミング教育に関しては、2016年に以下のような記事を書きました。5分で読める内容ですので、もしよければどうぞ。
                    </P>
                    <P>
                      <Bold>記事リンク:</Bold>{' '}
                      <ExternalLink href="https://jp.chibicode.com/2-cs-vs-programming">
                        「プログラミング」と「プログラミング的思考」の違いを、分かったつもりになれるヒント
                      </ExternalLink>
                    </P>
                  </>
                }
                preview={{
                  text: <>続きを読む</>,
                  content: (
                    <>
                      <P>
                        <Bold>余談 (読み飛ばしてもOK):</Bold>{' '}
                        「プログラミング無しにコンピュータサイエンスを学ぶべき」というのは、
                        <Highlight>
                          あくまで対象が忙しい大人である場合
                        </Highlight>
                        に当てはまります。
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
        title: <>邪道な理由2: 高度な内容</>,
        content: (
          <>
            <P>
              本稿がコンピュータサイエンスの「邪道」な入門書である理由のふたつめは、
              <HighlightBold>高度な内容を取り扱っている</HighlightBold>
              からです。
            </P>
            <EmojiSeparator
              emojis={['🧠', '🧐', '🧠']}
              description={<>高度な内容を取り扱っている</>}
            />
            <P>
              正統派のコンピュータサイエンスの入門書は、
              <HighlightBold>初歩的な内容</HighlightBold>
              を教えます。それはそれで良いと思うのですが、本稿では逆に、みなさんに
              <Highlight>高度な内容</Highlight>
              を学んでもらいます。
            </P>
            <P>
              本稿は<HighlightBold>2〜3時間程度</HighlightBold>
              で読み切れる長さを目標にしているのですが、そのくらいの文量だと、コンピュータサイエンスのすべてを語ることは到底できません。
              だから、
              <Highlight>
                わたしはその限られた文量の中で、「
                <HighlightBold>
                  自分にもコンピュータサイエンスを学べるかも
                </HighlightBold>
                」と思うきっかけを読者に提供したい
              </Highlight>
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
              <HighlightBold>
                初歩的な内容ではなく、高度な内容を教えるほうが良い
              </HighlightBold>
              と思っています。
            </P>
            <P>
              なぜなら、
              <HighlightBold>
                もし高度な内容を理解することができれば、それより易しい他の分野も理解できる
              </HighlightBold>
              ということを自覚してもらえるからです。「
              <Highlight>
                わたしでも高度な内容を理解できた。だったら、他の内容も学べるはずだ！
              </Highlight>
              」と思ってもらいたいのです。それが、「
              <Highlight>自分にもコンピュータサイエンスを学べるかも</Highlight>
              」という自信につながると考えています。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>🤔</Emoji>,
                <CustomEmoji type="singleArrow" />,
                <Emoji>😁</Emoji>
              ]}
              description={
                <>
                  高度な内容を理解できれば
                  <br />
                  自信がつくから、
                  <br />
                  あえて高度な内容を教えます
                </>
              }
            />
            <P>
              また、このページを開き、ここまで読んでくださったあなたは、おそらく
              <HighlightBold>知的好奇心がとても旺盛</HighlightBold>
              な方なのでしょう。そういう方々は、
              <Highlight>
                あまりにも内容が簡単すぎると、退屈で物足りないと感じてしまう
              </Highlight>
              かもしれません。だから、知的好奇心が旺盛な方にでも「面白い」と思っていただけるように、内容は高度にしています。
            </P>
            <Hr />
            <P>
              とはいえ、内容が高度すぎて、誰にも理解されなかったら本末転倒です。だから、
              <Highlight>
                内容は万人向けとは言えないものの、なるべく多くの方に最後まで読んでいただけるように、できる限り分かりやすく説明させていただきます
              </Highlight>
              。
            </P>
            <P>
              また、高度な内容とはいえ、
              <HighlightBold>
                数学やプログラミングなどの事前知識は一切必要ありません
              </HighlightBold>
              ので、ご安心ください。
            </P>
            <EmojiSeparator
              emojis={['✨', '🤗', '✨']}
              description={
                <>
                  数学やプログラミングなどの
                  <br />
                  事前知識は一切必要ありません
                </>
              }
            />
          </>
        )
      },
      {
        title: <>Yコンビネータ</>,
        content: (
          <>
            <P>
              では、本稿で取り扱う高度な内容とは何かというと、タイトルにもある「
              <HighlightBold>Yコンビネータ</HighlightBold>」です。
              <Bold>Yコンビネータ</Bold>
              とは、タイトルにもある通り
              <Highlight>
                魔法のような力を持つ、とあるコンピュータサイエンスの概念
              </Highlight>
              です。
            </P>
            <EmojiSeparator
              emojis={['✨', '🧙‍♀️', '✨']}
              description={
                <>
                  魔法のような力を持つ
                  <br />
                  とあるコンピュータサイエンスの概念、
                  <br />「<HighlightBold>Yコンビネータ</HighlightBold>
                  」について学ぶ
                </>
              }
            />
            <P>
              <HighlightBold>
                Yコンビネータは、初歩的な題材では全くありません。
              </HighlightBold>
              わたしの大学だと、Yコンビネータは
              <Highlight>コンピュータサイエンス専攻の2〜3年生</Highlight>
              が学ぶ高度な題材でした。しかも、マニアックな題材で実用的ではなく、知っていても業務に役立つことはありません。
            </P>
            <P>
              なぜそんなマニアックな題材を選んだかというと、
              <HighlightBold>
                Yコンビネータには、コンピュータサイエンスの面白さや魅力が凝縮されている
              </HighlightBold>
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
                    <Hr />
                    <P>
                      <Highlight>
                        Yコンビネータは、シリコンバレーで最も有名なITベンチャー養成機関の名でもあります。
                      </Highlight>
                      AirBnBをはじめとする超有名ITベンチャーを多数輩出しており、
                      約2000社の卒業企業のうち、トップ100社の企業価値を合計すると
                      <ExternalLink href="https://www.ycombinator.com/topcompanies/">
                        17兆円以上になります(2019年10月時点)
                      </ExternalLink>
                      。
                    </P>
                    <P>
                      <HighlightBold>
                        では、なぜYコンビネータという名称がつけられたのでしょうか？
                      </HighlightBold>
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
                                <HighlightBold>
                                  <Highlight>
                                    Yコンビネータとは、プログラミングのテクニックのひとつです。
                                  </Highlight>
                                </HighlightBold>{' '}
                                (中略) 個人的に、
                                Yコンビネータがあまりにも興味深いテクニックだと思ったので、われわれのITベンチャー養成機関もそう名付けてしまったのです。しかし結果的には、
                                <Highlight>
                                  われわれが投資する起業家を選別する
                                </Highlight>
                                際に、この名前が役立ちました。
                              </P>
                              <P>
                                <Highlight>
                                  わたしたちは凄腕プログラマの起業家は招き入れたかったが、スーツ姿のビジネスパーソンは門前払いにしたかった。
                                </Highlight>
                                凄腕プログラマがわたしたちのことを聞いたら、こう思うでしょう。「Yコンビネータって名のITベンチャー養成機関だって？最高じゃん！きっと、面白い人たちが集まっているに違いない」と。
                              </P>
                              <P>
                                いっぽう、スーツの人たちは、Yコンビネータと聞いても何のことやらさっぱり、となりますから。
                              </P>
                            </>
                          )
                        }
                      ]}
                    />
                    <P>
                      つまり、彼らは凄腕プログラマの起業家に投資したかった。だから、「Yコンビネータ」という
                      <Highlight>
                        高度なコンピュータサイエンスの専門用語
                      </Highlight>
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
                      <Highlight>
                        しかし、本稿を読めば、プログラマではなくてもYコンビネータを理解できます
                      </Highlight>
                      。ITベンチャー養成機関としての「Yコンビネータ」をご存知の方も、ぜひ読み進めてみてください！
                    </P>
                  </>
                }
                preview={{
                  text: <>続きを読む</>,
                  content: (
                    <>
                      <P>
                        <Bold>ちなみに:</Bold>{' '}
                        <Highlight>IT業界にいる方</Highlight>
                        の中には、「
                        <HighlightBold>
                          Yコンビネータって、シリコンバレーにあるITベンチャー養成機関のこと？
                        </HighlightBold>
                        」と思われた方もいるかと思います。そんな方は、↓の「続きを読む」を押してみてください。「聞いたことない」という方はそのまま先に進んでください。
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
              もし本稿が正統派のコンピュータサイエンスの入門書だったら、みなさんからお代を頂戴していたかもしれません。
              <Highlight>
                しかし、本稿は邪道な入門書なので、最初から最後まで無料で提供しています。
              </Highlight>
            </P>
            <EmojiSeparator
              emojis={['🆓', '🤗', '🆓']}
              description={<>すべて無料で読めます！</>}
            />
            <P>
              だからというのも何ですが、
              <HighlightBold>内容には期待しすぎないでください</HighlightBold>
              。無料なので、有料の入門書に比べてクオリティは高くはありません。
            </P>
            <EmojiSeparator
              emojis={['😅', '😅', '😅']}
              description={<>無料なので期待しすぎないで！</>}
            />
            <P>
              さらに言うと、
              <Highlight>本稿は実用的な内容ではありません</Highlight>
              。最後まで読み終えても、日々の暮らしや、キャリアに役立つ気づきは得られないないでしょう。
            </P>
            <P>
              ただその代わりに、
              <Highlight>
                もしかしたら読後に「コンピュータサイエンスを学んでみたい」という気持ちが芽生えるかもしれません。
              </Highlight>
            </P>
            <EmojiSeparator
              emojis={['✨', '🙂', '✨']}
              description={
                <>
                  コンピュータサイエンスを学んでみたい、と
                  <br />
                  読後に思ってもらえたら嬉しいです
                </>
              }
            />
            <P>
              あるいは、「<Highlight>難しすぎる。自分には向かない</Highlight>
              」と思われる方もいるかもしれません。そう思われたとしたらわたしの力不足ですので、申し訳ないです。
            </P>
          </>
        )
      },
      {
        type: 'sideNote',
        title: <>注意: プログラミング未経験者向けです</>,
        preview: {
          content: (
            <>
              <P>
                本稿は
                <HighlightBold>プログラミング未経験者向け</HighlightBold>
                です。プログラマの方にとって有益かどうかは、正直微妙かもしれません。
              </P>
              <P>
                <Highlight>
                  本稿で説明する内容は、プログラミングを使うと一瞬で説明できます。
                </Highlight>
                しかし、前述の理由から、あえてプログラミングを使わないで説明するので、
                <Highlight>
                  プログラマの方にとっては非常に回りくどい説明に感じられる
                </Highlight>
                と思います。数式を使わずに数学をやるようなものです。
              </P>
              <EmojiSeparator
                emojis={['😡', '💻', '😡']}
                description={
                  <>
                    プログラマの方にとっては
                    <br />
                    回りくどい説明に見えます
                  </>
                }
              />
              <P>
                したがって、プログラマの方向けのYコンビネータの教材としては、本稿はおすすめできません。しかし、その代わりにおすすめできる教材があります。
                <Highlight>
                  プログラマの方で、「Yコンビネータって何？」と思われた方は、↓の「続きを読む」を押してみてください。
                </Highlight>
              </P>
            </>
          ),
          text: <>続きを読む</>
        },
        content: (
          <>
            <Hr />
            <P>
              プログラマ向けのYコンビネータについての説明で最もおすすめなのは、
              「
              <ExternalLink href="https://www.youtube.com/watch?v=FITJMJjASUs">
                <Bold>Y Not - Adventures in Functional Programming</Bold>
              </ExternalLink>
              」という動画です。
            </P>
            <P>
              これはRubyのプログラマで、Rakeの作者でもある故・Jim
              Weirich氏がRubyConf
              2012にて行った講演の動画です。英語ですが字幕付きで見ることができます。
            </P>
            <YoutubeEmbed
              width={560}
              height={315}
              src="https://www.youtube.com/embed/FITJMJjASUs"
              caption={'ちなみにこの時、筆者は観客として参加していました。'}
            />
            <P>
              <Bold>余談:</Bold>{' '}
              本稿はTypeScriptとNext.jsで書いています。ソースコードは
              <ExternalLink href={githubRepo}>GitHubで公開中</ExternalLink>
              です。
            </P>
          </>
        )
      },
      {
        title: <>さっそくはじめてみましょう！</>,
        content: (
          <>
            <EmojiSeparator
              emojis={['✨', '🙂', '✨']}
              description={<>はじめましょう！</>}
            />
            <P>
              もしも「
              <Highlight>
                とりあえず読んでみたい <Emoji>🙂</Emoji>
              </Highlight>
              」と思ってくださったのであれば、下のボタンを押して先に進んでみてください！
            </P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
