// Inspired by https://github.com/ZxMYS/react-twemoji
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
export const jsxBabelFix = jsx
import dynamic from 'next/dynamic'
import React from 'react'
import EmojiLoader from 'src/components/Twemoji/2b1c'
import twemoji from 'twemoji'

// Copied from Twemoji
const UFE0Fg = /\uFE0F/g
const U200D = String.fromCharCode(0x200d)
function grabTheRightIcon(rawText: string) {
  // if variant is present as \uFE0F
  return twemoji.convert.toCodePoint(
    rawText.indexOf(U200D) < 0 ? rawText.replace(UFE0Fg, '') : rawText
  )
}

const EmojiSvg: React.FunctionComponent<{ name: string }> = ({ name }) => {
  const Component = dynamic(
    // @ts-ignore - import isn't typed correctly
    () =>
      import(`src/components/Twemoji/${grabTheRightIcon(name)}`).catch(() => {
        console.error(`Missing '${name}',`)
        return EmojiLoader
      }),
    { loading: () => <EmojiLoader /> }
  )
  if (!Component) {
    throw new Error(`Component is ${Component}. name: ${name}`)
  }
  return <Component />
}

interface EmojiProps {
  children?: string
  customChildren?: React.ReactNode
  size: 'md' | 'lg' | 'mdlg' | 'huge' | 'star'
  noVerticalTransform: boolean
}

const sizeToHeight = (size: Required<EmojiProps>['size']) =>
  ({
    md: '1em',
    mdlg: '1.5em',
    lg: '2em',
    star: '1.25em',
    huge: '6em'
  }[size])

const Emoji: React.FunctionComponent<EmojiProps> & {
  defaultProps: Partial<EmojiProps>
} = ({ children, size, customChildren, noVerticalTransform }) => (
  <span
    css={[
      css`
        display: inline-flex;
        vertical-align: middle;
        height: ${sizeToHeight(size)};
      `,
      !noVerticalTransform &&
        css`
          transform: translateY(-0.1em);
        `
    ]}
  >
    {customChildren}
    {children && <EmojiSvg name={children} />}
  </span>
)

Emoji.defaultProps = {
  size: 'md',
  noVerticalTransform: false
}

export default Emoji
