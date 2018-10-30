// Inspired by https://github.com/ZxMYS/react-twemoji
import { css, cx } from 'emotion'
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

const EmojiSvg: React.SFC<{ name: string }> = ({ name }) => {
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
  size?: 'md' | 'lg' | 'mdlg'
  noVerticalTransform?: boolean
}

const sizeToHeight = (size: Required<EmojiProps>['size']) =>
  ({
    md: '1em',
    mdlg: '1.5em',
    lg: '2em'
  }[size])

const Emoji: React.SFC<EmojiProps> = ({
  children,
  size = 'md',
  customChildren,
  noVerticalTransform = false
}) => (
  <span
    className={cx(
      css`
        display: inline-flex;
        vertical-align: middle;
        height: ${sizeToHeight(size)};
      `,
      {
        [css`
          transform: translateY(-0.1em);
        `]: !noVerticalTransform
      }
    )}
  >
    {customChildren}
    {children && <EmojiSvg name={children} />}
  </span>
)

export default Emoji
