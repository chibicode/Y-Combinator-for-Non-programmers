import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
// import {
//   numEpisodesExceptFirstAndLast,
//   numTotalPages
// } from 'src/lib/episodeCategories'
import {
  Highlight,
  // Img,
  // ExternalLink,
  P,
  HighlightBold,
  Bold
  // Ol,
  // OlLi,
  // Hr
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
// import BubbleQuotes from 'src/components/BubbleQuotes'
// import NextLessonButton from 'src/components/NextLessonButton'
import CardContent from 'src/components/CardContent'
import Toc from 'src/components/Toc'
import H from 'src/components/H'
// import { lessonTitle } from 'src/lib/titles'
// import YoutubeEmbed from 'src/components/YoutubeEmbed'
// import { githubRepo } from 'src/lib/meta'
// import * as R from 'src/components/Runners'

export default () => (
  <EpisodeCardList
    underConstruction
    cards={[
      {
        title: <>Welcome!</>,
        content: (
          <>
            <P>
              <Emoji>🤗</Emoji> <Bold>Welcome!</Bold> This is an interactive
              online course where{' '}
              <Highlight>
                non-programmers can learn learn about{' '}
                <HighlightBold>Y Combinator</HighlightBold>.
              </Highlight>{' '}
              It’s <HighlightBold>100% free</HighlightBold>, and you can do it
              from your smartphone, tablet, or computer.
            </P>
            <EmojiSeparator
              emojis={['📱', '🆓', '💻']}
              description={
                <>
                  It’s <HighlightBold>100% free</HighlightBold>, and you can do
                  it from
                  <br />
                  your smartphone, tablet, or computer.
                </>
              }
            />
            <P>
              <CustomEmoji type="index" /> <Bold>Overview:</Bold> This course
              consists of{' '}
              <Bold>
                <H
                  args={{
                    name: 'categoryNameColored',
                    category: 'beginner',
                    text: <>5 beginner levels</>
                  }}
                />
              </Bold>
              ,{' '}
              <Bold>
                <H
                  args={{
                    name: 'categoryNameColored',
                    category: 'intermediate',
                    text: <>5 intermediate levels</>
                  }}
                />
              </Bold>
              , and{' '}
              <Bold>
                <H
                  args={{
                    name: 'categoryNameColored',
                    category: 'advanced',
                    text: <>5 advanced levels</>
                  }}
                />
              </Bold>
              . It should take about <HighlightBold>2 to 3 hours</HighlightBold>{' '}
              to read for most people.
            </P>
            <EmojiSeparator
              emojis={['📗', '📘', '📕']}
              description={
                <>
                  <Bold>
                    <H
                      args={{
                        name: 'categoryNameColored',
                        category: 'beginner',
                        text: <>5 beginner levels</>
                      }}
                    />
                  </Bold>
                  ,{' '}
                  <Bold>
                    <H
                      args={{
                        name: 'categoryNameColored',
                        category: 'intermediate',
                        text: <>5 intermediate levels</>
                      }}
                    />
                  </Bold>
                  ,<br />
                  and{' '}
                  <Bold>
                    <H
                      args={{
                        name: 'categoryNameColored',
                        category: 'advanced',
                        text: <>5 advanced levels</>
                      }}
                    />
                  </Bold>
                </>
              }
            />
            <CardContent
              preview={{
                text: <>Press here to view the table of contents.</>
              }}
            >
              <Bold>Table of Contents:</Bold> Press each title below to jump to
              that page.
              <Toc />
            </CardContent>
          </>
        ),
        footer: {
          content: (
            <>
              <H args={{ name: 'dateAndSource', includeAboutMe: true }} />
            </>
          )
        }
      }
    ]}
  />
)
