/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { spaces } from 'src/lib/theme'

const commonListCss = css`
  padding: 0;
  list-style: none;
  list-style-image: none;
`

const commonListItemCss = css`
  margin: 0 0 ${2 / 3}em 1em;

  &::before {
    /* Style taken from medium.com,
    removed position: absolute because it was
    not vertically aligning with emojis */
    display: inline-block;
    width: 3.5em;
    margin-left: -3.5em;
    text-align: right;
    box-sizing: border-box;
    vertical-align: top;
  }
`

// https://stackoverflow.com/a/52173021/114157
type DefaultUlProps = JSX.IntrinsicElements['ul']
interface UlProps extends DefaultUlProps {
  size?: 'md' | 'lg'
}

export const Ul = ({ size = 'md', ...props }: UlProps) => (
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

export const Ol = ({ size, ...props }: OlProps) => (
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

export const UlLi = ({ ...props }: JSX.IntrinsicElements['li']) => (
  <li
    {...props}
    css={[
      commonListItemCss,
      css`
        &::before {
          padding-right: 0.6em;
          padding-top: 0.2em;
          content: '•';
          font-size: 0.8em;
        }
      `
    ]}
  />
)

export const OlLi = (props: JSX.IntrinsicElements['li']) => (
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
