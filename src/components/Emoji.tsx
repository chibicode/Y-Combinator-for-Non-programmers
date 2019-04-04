// Inspired by https://github.com/ZxMYS/react-twemoji
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import twemoji from 'twemoji'
import emojisBundle from 'src/lib/emojisBundle'

// Copied from Twemoji
const UFE0Fg = /\uFE0F/g
const U200D = String.fromCharCode(0x200d)
function grabTheRightIcon(rawText: string): string {
  // if variant is present as \uFE0F
  return twemoji.convert.toCodePoint(
    rawText.indexOf(U200D) < 0 ? rawText.replace(UFE0Fg, '') : rawText
  )
}

const emojiComponentName = (name: string) =>
  `${name.replace('Emoji', '').replace(/ZZ/g, '-')}`

const EmojiSvg = ({ name }: { name: string }) => {
  const Component =
    emojisBundle[
      emojiComponentName(grabTheRightIcon(name)) as keyof typeof emojisBundle
    ]
  if (!Component) {
    throw new Error(`Component is ${Component}. name: ${name}`)
  }
  return <Component />
}

export interface EmojiProps {
  children?: string
  size: 'md' | 'lg' | 'mdlg' | 'sm'
  noVerticalTransform: boolean
}

const sizeToHeight = (size: Required<EmojiProps>['size']) =>
  ({
    sm: '1em',
    md: '1.2em',
    mdlg: '1.4em',
    lg: '2em'
  }[size])

const Emoji = ({ children, size, noVerticalTransform }: EmojiProps) => (
  <span
    css={[
      css`
        display: inline-flex;
        vertical-align: middle;
        height: ${sizeToHeight(size)};
      `,
      !noVerticalTransform &&
        css`
          transform: translateY(-0.125em);
        `
    ]}
  >
    {children && <EmojiSvg name={children} />}
  </span>
)

Emoji.defaultProps = {
  size: 'md',
  noVerticalTransform: false
}

export default Emoji
