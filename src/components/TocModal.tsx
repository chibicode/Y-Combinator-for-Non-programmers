/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Modal from 'src/components/Modal'
import Card from 'src/components/Card'
import H from 'src/components/H'
import { numEpisodesExceptFirstAndLast } from 'src/lib/episodeCategories'
import { lessonTitle, episodeTitles } from 'src/lib/titles'
import {
  fontWeights,
  fontSizes,
  spaces,
  colors,
  lineHeights,
  letterSpacings,
  radii
} from 'src/lib/theme'
import { InternalLink } from 'src/components/ContentTags/Links'
import EmojiSeparator from 'src/components/EmojiSeparator'
import episodeEmojis from 'src/lib/episodeEmojis'

const linkCss = css`
  margin-bottom: ${spaces(1)};
  text-decoration: none;
  display: block;
  text-align: center;
  margin-left: ${spaces('-0.25')};
  margin-right: ${spaces('-0.25')};
  padding: ${spaces(0.5)};
  border-radius: ${radii(0.5)};
  -webkit-tap-highlight-color: transparent;
  background: ${colors('white')};

  &:hover,
  &:active {
    background: ${colors('yellow100')};
  }
`

const prefixCss = css`
  font-size: ${fontSizes(0.85)};
  font-weight: ${fontWeights(800)};
`

const titleCss = css`
  font-size: ${fontSizes(1.2)};
  display: block;
  font-weight: ${fontWeights(800)};
  line-height: ${lineHeights(1.1)};
  letter-spacing: ${letterSpacings('title')};
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`

const TocModal = ({ hideModal }: { hideModal: () => void }) => {
  return (
    <Modal onClickBackground={hideModal}>
      <Card
        color="indigo"
        title={<H args={{ name: 'toc' }} />}
        header={
          <button
            type="button"
            onClick={hideModal}
            css={css`
              position: absolute;
              right: ${spaces(0.5)};
              top: ${spaces(0.5)};
              padding: ${spaces(0.5)} ${spaces(0.5)};
              color: ${colors('white')};
              font-size: ${fontSizes(0.85)};
              font-weight: bold;
              line-height: 1;
              display: flex;
              align-items: center;
              justify-content: center;
              text-decoration: none;
              border-radius: 0.25rem;
              border: none;
              background: none;
              cursor: pointer;
              background: ${colors('indigo300')};

              &:hover {
                background: ${colors('indigo400')};
              }
            `}
          >
            <H args={{ name: 'tocClose' }} />
          </button>
        }
      >
        <InternalLink href="/" css={linkCss} onClick={hideModal}>
          <span
            css={[
              css`
                display: block;
              `,
              prefixCss
            ]}
          >
            <H
              args={{ name: 'titlePrefixColored' }}
              episodeNumberOverrides={0}
            />
          </span>
          <span css={titleCss}>{lessonTitle}</span>
          <EmojiSeparator
            emojis={episodeEmojis[0]}
            size="sm"
            cssOverrides={css`
              margin: 0;
              text-align: center;
            `}
            alignCenter={false}
          />
        </InternalLink>
        {[...Array(numEpisodesExceptFirstAndLast).keys()].map(i => {
          const episodeNumber = i + 1
          return (
            <InternalLink
              href={`/${episodeNumber}`}
              key={i}
              css={linkCss}
              onClick={hideModal}
            >
              <span
                css={[
                  css`
                    display: block;
                  `,
                  prefixCss
                ]}
              >
                <H
                  args={{ name: 'titlePrefixColored' }}
                  episodeNumberOverrides={episodeNumber}
                />
              </span>
              <span css={titleCss}>
                {episodeTitles[episodeNumber as keyof typeof episodeTitles]}
              </span>
              <EmojiSeparator
                emojis={
                  episodeEmojis[episodeNumber as keyof typeof episodeEmojis]
                }
                alignCenter={false}
                size="sm"
                cssOverrides={css`
                  margin: 0;
                  text-align: center;
                `}
              />
            </InternalLink>
          )
        })}
        <InternalLink
          href={`/${numEpisodesExceptFirstAndLast + 1}`}
          css={linkCss}
          onClick={hideModal}
        >
          <span
            css={[
              css`
                display: block;
              `,
              prefixCss
            ]}
          >
            <H
              args={{ name: 'titlePrefixColored' }}
              episodeNumberOverrides={numEpisodesExceptFirstAndLast + 1}
            />
          </span>
          <span css={titleCss}>
            {
              episodeTitles[
                (numEpisodesExceptFirstAndLast +
                  1) as keyof typeof episodeTitles
              ]
            }
          </span>
          <EmojiSeparator
            emojis={
              episodeEmojis[
                (numEpisodesExceptFirstAndLast +
                  1) as keyof typeof episodeEmojis
              ]
            }
            size="sm"
            cssOverrides={css`
              margin: 0;
              text-align: center;
            `}
            alignCenter={false}
          />
        </InternalLink>
      </Card>
    </Modal>
  )
}

export default TocModal
