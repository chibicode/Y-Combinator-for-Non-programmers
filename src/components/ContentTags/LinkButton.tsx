import { css } from '@emotion/react'
import { commonLinkClass } from 'src/components/ContentTags/Links'

export const LinkButton = (props: JSX.IntrinsicElements['button']) => (
  <button
    {...props}
    css={[
      commonLinkClass,
      css`
        padding: 0;
        text-decoration: underline;
        cursor: pointer;
        border: none;
        background: none;
      `
    ]}
  />
)
