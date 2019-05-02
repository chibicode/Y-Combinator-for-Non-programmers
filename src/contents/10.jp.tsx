import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  Hr,
  P,
  InlineHeader,
  Strong,
  Ul,
  UlLi,
  Em
} from 'src/components/ContentTags'
import AER from 'src/components/Yc/AER'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import H from 'src/components/H'
import YesNoButtons from 'src/components/YesNoButtons'
import Emoji from 'src/components/Emoji'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiForLetter from 'src/components/EmojiForLetter'
import { InlineEmojiBoxesForQuestion } from 'src/components/Yc/InlineEmojiBoxes'
import EmojiSeparator from 'src/components/EmojiSeparator'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: (
          <>
            <EmojiWithText letter="v" />
            の入った
            <H args={{ name: 'bentoBox', skipEmoji: true }} />
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              早速、
              <H args={{ name: 'lookAtThisBentoBox' }} />。
            </P>
            {AER.wbpx}
            <P>注目ポイントはふたつあります:</P>
            <Ul>
              <UlLi>
                <Em>
                  一番上に
                  <Strong>
                    <EmojiWithText letter="v" />
                  </Strong>
                  が入っています。
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  <InlineEmojiBoxesForQuestion />
                  の部分には、料理が「<Strong>ひとつだけ</Strong>」入ります。
                </Em>
              </UlLi>
            </Ul>
          </>
        )
      },
      {
        title: (
          <>
            <InlineEmojiBoxesForQuestion size="md" /> に何か入れてみる
          </>
        ),
        content: (
          <>
            <P>
              とりあえず、
              <EmojiWithText letter="c" />
              を<InlineEmojiBoxesForQuestion />
              に入れてみました。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.gszp}
            <P>
              <InlineEmojiBoxesForQuestion />
              に入っていた
              <Strong>
                <EmojiWithText letter="c" />
              </Strong>
              が最後に残りますね。
            </P>
            <Hr />
            <P>
              <EmojiWithText letter="d" />
              を<InlineEmojiBoxesForQuestion />
              に入れてみたらどうでしょう？
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.kntz}
            <P>
              今回も、
              <InlineEmojiBoxesForQuestion />
              に入っていた
              <Strong>
                <EmojiWithText letter="d" />
              </Strong>
              が最後に残りました。
            </P>
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
          </>
        ),
        content: (
          <>
            <P>では、ここで質問です！</P>
            {AER.wbpx}
            <P>
              <H args={{ name: 'question' }} />
            </P>
            <Ul>
              <UlLi>
                こちらの
                <H args={{ name: 'bentoBox', short: true }} />の
                <Strong>
                  <InlineEmojiBoxesForQuestion />
                  に料理をひとつだけ入れて
                </Strong>
                <H args={{ name: 'play' }} />
                すると、
              </UlLi>
              <UlLi>
                最終的にかならず
                <Strong>
                  <InlineEmojiBoxesForQuestion />
                  に入れた料理がひとつだけ残る
                </Strong>
                。<H args={{ name: 'yesOrNo' }} />
              </UlLi>
              <YesNoButtons answer="no" />
            </Ul>
          </>
        )
      },
      {
        title: (
          <>
            <EmojiWithText letter="b" />
            を入れてみると
          </>
        ),
        content: (
          <>
            <P>
              では、
              <Strong>
                <InlineEmojiBoxesForQuestion />に<EmojiWithText letter="b" />
                を入れてみる
              </Strong>
              とどうなるでしょう？
            </P>
            <P>
              <H args={{ name: 'pressFastForward' }} />{' '}
              (さきほどのふたつの例と比べて、ゆっくりと進みます)
            </P>
            {AER.bmms}
            <P>
              なんと、最後に
              <Strong>
                <EmojiWithText letter="v" />
              </Strong>
              が残りました。
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter="v" />,
                <Emoji>🤯</Emoji>,
                <EmojiForLetter letter="v" />
              ]}
            />
            <P>まとめると、こうなります:</P>
            <Ul>
              <UlLi>
                <Em>
                  <InlineEmojiBoxesForQuestion />に
                  <Strong>
                    <EmojiWithText letter="b" />
                  </Strong>
                  を入れた場合、
                  <Strong>
                    <EmojiWithText letter="v" />
                  </Strong>
                  が残る。
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  それ以外の場合、
                  <InlineEmojiBoxesForQuestion />
                  に入れた料理が残る。
                </Em>
              </UlLi>
            </Ul>
            <P>でも、どうしてこうなったのでしょう？</P>
          </>
        )
      },
      {
        title: (
          <>
            <BottomRightBadge inline bottomRightBadgeType="callArg" />と
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
            が両方とも
            <EmojiWithText letter="b" />
            になるから
          </>
        ),
        content: (
          <>
            <P>
              理由は、さきほど
              <InlineEmojiBoxesForQuestion />に
              <Strong>
                <EmojiWithText letter="b" />
              </Strong>
              を入れた場合、
              <BottomRightBadge inline bottomRightBadgeType="callArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />が
              <Strong>
                両方とも
                <Strong>
                  <EmojiWithText letter="b" />
                </Strong>
                になるから
              </Strong>
              です。
            </P>
            {AER.gmcn}
            <P>
              すると途中で
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                が両方とも
                <EmojiWithText letter="b" />
                になり…
              </Strong>
            </P>
            {AER.dqlf}
            <P>
              最後に
              <EmojiWithText letter="b" />
              が残るのです。
            </P>
            {AER.mpcx}
          </>
        )
      },
      {
        title: (
          <>
            <BottomRightBadge inline bottomRightBadgeType="callArg" />と
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
            が違うとどうなるか
          </>
        ),
        content: (
          <>
            <P>
              それ以外の料理(たとえば
              <EmojiWithText letter="c" />
              )を
              <InlineEmojiBoxesForQuestion />
              に入れた場合、
              <BottomRightBadge inline bottomRightBadgeType="callArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              が異なります。
            </P>
            {AER.dpst}
            <P>
              すると先ほどと違い、途中で
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                が同じにならず…
              </Strong>
            </P>
            {AER.xhwx}
            <P>
              最初に
              <InlineEmojiBoxesForQuestion />
              に入れた
              <EmojiWithText letter="c" />
              が残るのです。
            </P>
            {AER.ttvy}
          </>
        )
      },
      {
        type: 'summary',
        title: (
          <>
            <H args={{ name: 'summary' }} />
          </>
        ),
        content: (
          <>
            <P>
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                が同じか違うかで、結果が変わる場合がある。
              </Strong>
            </P>
            <Hr />
            <P>
              <BottomRightBadge inline bottomRightBadgeType="callArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />が
              <InlineHeader>同じ場合:</InlineHeader>
            </P>
            {AER.ywja}
            <P>
              <BottomRightBadge inline bottomRightBadgeType="callArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />が
              <InlineHeader>違う場合:</InlineHeader>
            </P>
            {AER.tuzs}
          </>
        )
      }
    ]}
  />
)
