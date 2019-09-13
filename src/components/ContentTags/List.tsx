/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { spaces } from 'src/lib/theme'
import locale from 'src/lib/locale'

const commonListCss = css`
  padding: 0;
  list-style: none;
  list-style-image: none;
`

const commonListItemCss = css`
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
  t8d?: boolean
}

export const Ul = ({ t8d, size = 'md', ...props }: UlProps) => (
  <ul
    {...props}
    css={[
      commonListCss,
      size === 'lg' &&
        css`
          margin: ${spaces(1.75)} 0;
        `,
      !t8d &&
        locale === 'en' &&
        css`
          opacity: 0.1;
        `
    ]}
  />
)

type DefaultOlProps = JSX.IntrinsicElements['ol']
interface OlProps extends DefaultOlProps {
  size?: 'md' | 'lg'
  t8d?: boolean
}

export const Ol = ({ t8d, size, ...props }: OlProps) => (
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
      `,
      !t8d &&
        locale === 'en' &&
        css`
          opacity: 0.1;
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
        margin: 0 0 ${2 / 3}em 1em;
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
        margin: 0 0 ${2 / 3}em 1.4em;
        &::before {
          padding-right: 0.4em;
          counter-increment: text;
          content: counter(text) '.';
        }
      `
    ]}
  />
)
