import React from 'react'

export const P: React.SFC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
> = props => <p {...props} />
