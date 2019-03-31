/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Modal from 'src/components/Modal'
import Card from 'src/components/Card'
import H from 'src/components/H'
import { numEpisodes } from 'src/lib/episodeCategories'
import episodeTitlePrefixAndColor from 'src/lib/episodeTitlePrefixAndColor'
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
  margin-left: ${spaces('-0.5')};
  margin-right: ${spaces('-0.5')};
  padding: ${spaces(0.5)};
  border-radius: ${radii(0.5)};

  &:hover,
  &:active {
    background: ${colors('indigo50')};
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
        color="white"
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
              color: ${colors('indigo500')};
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
              background: ${colors('indigo50')};

              &:hover {
                background: ${colors('indigo100')};
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
                color: ${colors('grey600')};
                display: block;
              `,
              prefixCss
            ]}
          >
            <H args={{ name: 'introductionPrefix' }} />
          </span>
          <span css={titleCss}>{lessonTitle}</span>
          <EmojiSeparator
            emojis={episodeEmojis[0]}
            size="sm"
            alignCenter={false}
          />
        </InternalLink>
        {[...Array(numEpisodes).keys()].map(i => {
          const episodeNumber = i + 1
          const { prefix, color } = episodeTitlePrefixAndColor(episodeNumber)
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
                    color: ${color};
                    display: block;
                  `,
                  prefixCss
                ]}
              >
                {prefix}:
              </span>
              <span css={titleCss}>
                {episodeTitles[episodeNumber as keyof typeof episodeTitles]}
              </span>
              <EmojiSeparator
                emojis={episodeEmojis[episodeNumber]}
                alignCenter={false}
                size="sm"
              />
            </InternalLink>
          )
        })}
      </Card>
    </Modal>
  )
}

export default TocModal
