/** @jsx jsx */
import { css, jsx } from '@emotion/core'
export const jsxBabelFix = jsx
import React from 'react'
import { colors, spaces } from 'src/lib/theme'

export const Table: React.FunctionComponent<JSX.IntrinsicElements['table']> = ({
  ...props
}) => (
  <table
    {...props}
    css={css`
      width: 100%;
      border: 2px solid ${colors('indigo300')};
      margin: 0 0 ${spaces(1)};
      border-collapse: collapse;
      table-layout: fixed;
    `}
  />
)

export const Th: React.FunctionComponent<JSX.IntrinsicElements['th']> = ({
  ...props
}) => (
  <th
    css={css`
      padding: ${spaces(0.5)} ${spaces(0.5)};
      border: 2px solid ${colors('indigo300')};
      background: ${colors('indigo50')};
      text-align: center;
    `}
    {...props}
  />
)

export const Td: React.FunctionComponent<JSX.IntrinsicElements['td']> = ({
  ...props
}) => (
  <td
    css={css`
      padding: ${spaces(0.5)} ${spaces(0.5)};
      border: 2px solid ${colors('indigo300')};
      text-align: center;
    `}
    {...props}
  />
)
