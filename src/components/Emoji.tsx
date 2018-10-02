// Inspired by https://github.com/ZxMYS/react-twemoji
import { css, cx } from 'emotion'
import isEqual from 'lodash/isEqual'
import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'react-emotion'
import Twemoji from 'twemoji'

const Span = styled('span')`
  > .emoji {
  }
`

interface EmojiProps {
  children: React.ReactNode
  size?: 'md' | 'lg'
  noVerticalTransform?: boolean
}

interface TwemojiContainerProps {
  options: {}
  size: Required<EmojiProps>['size']
  noVerticalTransform: Required<EmojiProps>['noVerticalTransform']
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
    const { size, children, noVerticalTransform } = this.props
    return (
      <Span
        className={cx(
          css`
            display: inline-flex;
            vertical-align: middle;
            & > .emoji {
              height: ${size === 'lg' ? '2em' : '1em'};
            }
          `,
          {
            [css`
              transform: translateY(-0.1em);
            `]: !noVerticalTransform
          }
        )}
      >
        {children}
      </Span>
    )
  }
}

const Emoji: React.SFC<EmojiProps> = ({
  children,
  size = 'md',
  noVerticalTransform = false
}) => (
  <TwemojiContainer
    size={size}
    noVerticalTransform={noVerticalTransform}
    options={{
      folder: 'svg',
      ext: '.svg'
    }}
  >
    {children}
  </TwemojiContainer>
)

export default Emoji
