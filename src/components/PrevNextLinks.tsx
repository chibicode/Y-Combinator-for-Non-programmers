import { css } from '@emotion/react'
import { useContext } from 'react'
import { InternalLink, Bold, LinkButton } from 'src/components/ContentTags'
import EpisodeContext from 'src/components/EpisodeContext'
import CustomEmoji from 'src/components/CustomEmoji'
import Emoji from 'src/components/Emoji'
import { numEpisodesExceptFirstAndLast } from 'src/lib/episodeCategories'
import { colors, spaces } from 'src/lib/theme'
import H from 'src/components/H'
import Flex from 'src/components/Flex'

const PrevNextLinks = () => {
  const episodeContext = useContext(EpisodeContext)
  const episodeNumber = episodeContext.episodeNumber
  return (
    <Flex>
      <div
        css={css`
          flex: 1;
          text-align: right;
        `}
      >
        <InternalLink
          href={`/${episodeNumber - 1}`}
          css={css`
            background: ${colors('yellow100')};
            display: inline-block;
            text-decoration: none;
            &:hover {
              text-decoration: none;
            }
          `}
        >
          <Emoji>⬅️</Emoji>{' '}
          <Bold>
            <H
              args={{ name: 'titlePrefixColored' }}
              episodeNumberOverrides={episodeNumber - 1}
            />
          </Bold>
        </InternalLink>
        <span
          css={css`
            padding-left: ${spaces(0.25)};
            color: ${colors('grey600')};
          `}
        >
          &middot;
        </span>
      </div>
      <div
        css={css`
          padding: 0 ${spaces(0.25)};
        `}
      >
        <LinkButton
          css={css`
            text-decoration: none;
            background: ${colors('yellow100')};
            &:hover {
              text-decoration: none;
            }
          `}
          onClick={episodeContext.showModal}
        >
          <CustomEmoji type="index" />{' '}
          <Bold>
            <H args={{ name: 'indexPageLink' }} />
          </Bold>
        </LinkButton>
      </div>
      <div
        css={css`
          flex: 1;
        `}
      >
        {episodeNumber <= numEpisodesExceptFirstAndLast && (
          <>
            <span
              css={css`
                padding-right: ${spaces(0.25)};
                color: ${colors('grey600')};
              `}
            >
              &middot;
            </span>
            <InternalLink
              href={`/${episodeNumber + 1}`}
              css={css`
                text-decoration: none;
                display: inline-block;
                background: ${colors('yellow100')};
                &:hover {
                  text-decoration: none;
                }
              `}
            >
              <Bold>
                <H
                  args={{ name: 'titlePrefixColored' }}
                  episodeNumberOverrides={episodeNumber + 1}
                />
              </Bold>{' '}
              <Emoji>➡️</Emoji>
            </InternalLink>
          </>
        )}
      </div>
    </Flex>
  )
}

export default PrevNextLinks
