import { css, cx } from 'emotion'
import React from 'react'

const commonListCss = css`
  padding: 0;
  list-style: none;
  list-style-image: none;
`

const commonListItemCss = css`
  margin-left: 1.5em;
  margin-bottom: ${2 / 3}em;

  &::before {
    /* Style taken from medium.com */
    position: absolute;
    display: inline-block;
    width: 3.5em;
    margin-left: -3.5em;
    text-align: right;
  }
`

export const Ul: React.SFC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  >
> = ({ className, ...props }) => (
  <ul {...props} className={cx(className, commonListCss)} />
)

export const Ol: React.SFC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLOListElement>,
    HTMLOListElement
  >
> = ({ className, ...props }) => (
  <ol
    {...props}
    className={cx(
      className,
      commonListCss,
      css`
        counter-reset: text;
      `
    )}
  />
)

export const UlLi: React.SFC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLLIElement>, HTMLLIElement>
> = ({ className, ...props }) => (
  <li
    {...props}
    className={cx(
      className,
      commonListItemCss,
      css`
        &::before {
          padding-right: 1em;
          padding-top: 0.2em;
          content: '•';
          font-size: 0.8em;
        }
      `
    )}
  />
)

export const OlLi: React.SFC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLLIElement>, HTMLLIElement>
> = ({ className, ...props }) => (
  <li
    {...props}
    className={cx(
      className,
      commonListItemCss,
      css`
        &::before {
          padding-right: ${4 / 7}em;
          counter-increment: text;
          content: counter(text) '.';
        }
      `
    )}
  />
)
