import React from 'react'

export const Strong: React.SFC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = props => <strong {...props} />

export const Em: React.SFC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = props => <Em {...props} />
