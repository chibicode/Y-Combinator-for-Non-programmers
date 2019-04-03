// Inspired by https://github.com/ZxMYS/react-twemoji
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import dynamic from 'next/dynamic'
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

const EmojiSvg = ({ name }: { name: string }) => {
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
