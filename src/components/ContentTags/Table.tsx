import { css, cx } from 'emotion'
import React from 'react'
import { colors, spaces } from 'src/lib/theme'

export const Table: React.FunctionComponent<JSX.IntrinsicElements['table']> = ({
  className,
  ...props
}) => (
  <table
    {...props}
    className={cx(
      css`
        width: 100%;
        border: 2px solid ${colors('indigo300')};
        margin: 0 0 ${spaces(1)};
        border-collapse: collapse;
        table-layout: fixed;
      `,
      className
    )}
  />
)

export const Th: React.FunctionComponent<JSX.IntrinsicElements['th']> = ({
  className,
  ...props
}) => (
  <th
    className={cx(
      css`
        padding: ${spaces(0.5)} ${spaces(0.5)};
        border: 2px solid ${colors('indigo300')};
        background: ${colors('indigo50')};
        text-align: center;
      `,
      className
    )}
    {...props}
  />
)

export const Td: React.FunctionComponent<JSX.IntrinsicElements['td']> = ({
  className,
  ...props
}) => (
  <td
    className={cx(
      css`
        padding: ${spaces(0.5)} ${spaces(0.5)};
        border: 2px solid ${colors('indigo300')};
        text-align: center;
      `,
      className
    )}
    {...props}
  />
)
