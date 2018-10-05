import { css, cx } from 'emotion'
import React from 'react'
import { spaces } from 'src/lib/theme'

const commonListCss = css`
  padding: 0;
  list-style: none;
  list-style-image: none;
`

const commonListItemCss = css`
  margin: 0 0 ${2 / 3}em 1.5em;

  &::before {
    /* Style taken from medium.com,
    removed position: absolute because it was
    not vertically aligning with emojis */
    display: inline-block;
    width: 3.5em;
    margin-left: -3.5em;
    text-align: right;
  }
`

// https://stackoverflow.com/a/52173021/114157
type DefaultUlProps = JSX.IntrinsicElements['ul']
interface UlProps extends DefaultUlProps {
  size?: 'md' | 'lg'
}

export const Ul: React.SFC<UlProps> = ({
  className,
  size = 'md',
  ...props
}) => (
  <ul
    {...props}
    className={cx(
      commonListCss,
      {
        [css`
          margin: ${spaces(1.75)} 0;
        `]: size === 'lg'
      },
      className
    )}
  />
)

type DefaultOlProps = JSX.IntrinsicElements['ol']
interface OlProps extends DefaultOlProps {
  size?: 'md' | 'lg'
}

export const Ol: React.SFC<OlProps> = ({ className, size, ...props }) => (
  <ol
    {...props}
    className={cx(
      commonListCss,
      {
        [css`
          margin: ${spaces(1.75)} 0;
        `]: size === 'lg'
      },
      css`
        counter-reset: text;
      `,
      className
    )}
  />
)

export const UlLi: React.SFC<JSX.IntrinsicElements['li']> = ({
  className,
  ...props
}) => (
  <li
    {...props}
    className={cx(
      commonListItemCss,
      css`
        &::before {
          padding-right: 1em;
          padding-top: 0.2em;
          content: '•';
          font-size: 0.8em;
        }
      `,
      className
    )}
  />
)

export const OlLi: React.SFC<JSX.IntrinsicElements['li']> = ({
  className,
  ...props
}) => (
  <li
    {...props}
    className={cx(
      commonListItemCss,
      css`
        &::before {
          padding-right: ${4 / 7}em;
          counter-increment: text;
          content: counter(text) '.';
        }
      `,
      className
    )}
  />
)
