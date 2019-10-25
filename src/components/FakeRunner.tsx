import React from 'react'
import EmojiSeparator from 'src/components/EmojiSeparator'

const FakeRunner = ({ children }: { children?: React.ReactNode }) => (
  <EmojiSeparator emojis={['❓']} description={children} />
)

export default FakeRunner
