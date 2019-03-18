/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { commonLinkClass } from 'src/components/ContentTags/Links'
export const jsxBabelFix = jsx

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
