// Inspired by https://github.com/ZxMYS/react-twemoji
import { css } from 'emotion'
import isEqual from 'lodash/isEqual'
import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'react-emotion'
import locale from 'src/lib/locale'
import Twemoji from 'twemoji'

const Span = styled('span')`
  > .emoji {
  }
`

interface TwemojiContainerProps {
  options: {}
  size: 'md' | 'lg'
}

interface EmojiProps {
  children: React.ReactNode
  size?: 'md' | 'lg'
}

// NOTE: This also depends on line-height
const emojiTransformY = ({ size }: { size: TwemojiContainerProps['size'] }) => {
  if (size === 'lg') {
    if (locale === 'en') {
      return -0.25
    } else {
      return -0.05
    }
  } else {
    if (locale === 'en') {
      return 0.25
    } else {
      return 0.4
    }
  }
}

class TwemojiContainer extends React.Component<TwemojiContainerProps, {}> {
  public parse() {
    Twemoji.parse(ReactDOM.findDOMNode(this), this.props.options)
  }

  public componentDidUpdate(prevProps: TwemojiContainerProps) {
    if (!isEqual(this.props, prevProps)) {
      this.parse()
    }
  }

  public componentDidMount() {
    this.parse()
  }

  public render() {
    const { size, children } = this.props
    return (
      <Span
        className={css`
          & > .emoji {
            height: ${size === 'lg' ? '2em' : '1em'};
            vertical-align: top;
            transform: translateY(${emojiTransformY({ size })}em);
          }
        `}
      >
        {children}
      </Span>
    )
  }
}

const Emoji: React.SFC<EmojiProps> = ({ children, size = 'md' }) => (
  <TwemojiContainer
    size={size}
    options={{
      folder: 'svg',
      ext: '.svg'
    }}
  >
    {children}
  </TwemojiContainer>
)

export default Emoji
