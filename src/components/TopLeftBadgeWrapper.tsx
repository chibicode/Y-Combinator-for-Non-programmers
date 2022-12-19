import { css } from '@emotion/react'
import { zIndices } from 'src/lib/theme'
import TopLeftBadge, { TopLeftBadgeProps } from 'src/components/TopLeftBadge'

interface TopLeftBadgeWrapperProps {
  topLeftBadgeType: TopLeftBadgeProps['topLeftBadgeType']
  children: React.ReactNode
}

const TopLeftBadgeWrapper = ({
  topLeftBadgeType,
  children
}: TopLeftBadgeWrapperProps) => {
  return (
    <span
      css={css`
        position: relative;
        margin-left: 0.15em;
      `}
    >
      <span
        css={[
          css`
            top: -0.2em;
            left: -0.18em;
            position: absolute;
            font-size: 1.3em;
            z-index: ${zIndices('badge')};
          `
        ]}
      >
        <TopLeftBadge topLeftBadgeType={topLeftBadgeType} />
      </span>
      {children}
    </span>
  )
}

export default TopLeftBadgeWrapper
