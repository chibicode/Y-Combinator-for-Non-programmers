/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { colors, fontSizes, spaces } from 'src/lib/theme'
import EmbedResponsive from 'src/components/EmbedResponsive'

const YoutubeEmbed = ({
  src,
  width,
  height,
  caption
}: {
  src: string
  width: number
  height: number
  caption: React.ReactNode
}) => (
  <div
    css={css`
      margin: ${spaces(1.5)} 0 ${spaces(1.5)};
    `}
  >
    <EmbedResponsive width={width} height={height}>
      <iframe
        title=""
        allowFullScreen
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        height="315"
        src={src}
        width="560"
      />
    </EmbedResponsive>
    {caption && (
      <div
        css={css`
          margin-top: ${spaces(0.5)};
          font-size: ${fontSizes(0.85)};
          color: ${colors('grey700')};
          text-align: center;
        `}
      >
        {caption}
      </div>
    )}
  </div>
)

export default YoutubeEmbed
