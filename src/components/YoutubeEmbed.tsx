import React from 'react'
import EmbedResponsive from 'src/components/EmbedResponsive'

const YoutubeEmbed = ({
  src,
  width,
  height
}: {
  src: string
  width: number
  height: number
}) => (
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
)

export default YoutubeEmbed
