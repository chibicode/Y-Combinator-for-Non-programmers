/** @jsx jsx */
import { css, jsx } from '@emotion/core'
export const jsxBabelFix = jsx
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

export const Ul: React.FC<UlProps> = ({
  size = 'md',
  ...props
}) => (
  <ul
    {...props}
    css={[
      commonListCss,
      size === 'lg' &&
        css`
          margin: ${spaces(1.75)} 0;
        `
    ]}
  />
)

type DefaultOlProps = JSX.IntrinsicElements['ol']
interface OlProps extends DefaultOlProps {
  size?: 'md' | 'lg'
}

export const Ol: React.FC<OlProps> = ({ size, ...props }) => (
  <ol
    {...props}
    css={[
      commonListCss,
      size === 'lg' &&
        css`
          margin: ${spaces(1.75)} 0;
        `,
      css`
        counter-reset: text;
      `
    ]}
  />
)

export const UlLi: React.FC<JSX.IntrinsicElements['li']> = ({
  ...props
}) => (
  <li
    {...props}
    css={[
      commonListItemCss,
      css`
        &::before {
          padding-right: 1em;
          padding-top: 0.2em;
          content: '•';
          font-size: 0.8em;
        }
      `
    ]}
  />
)

export const OlLi: React.FC<JSX.IntrinsicElements['li']> = ({
  ...props
}) => (
  <li
    {...props}
    css={[
      commonListItemCss,
      css`
        &::before {
          padding-right: ${4 / 7}em;
          counter-increment: text;
          content: counter(text) '.';
        }
      `
    ]}
  />
)
