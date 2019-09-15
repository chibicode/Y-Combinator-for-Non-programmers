import * as React from 'react'

const HorizontalDotDotDotSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 36 36" {...props}>
    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <circle fill="#31373D" cx={32} cy={18} r={4} />
      <circle fill="#31373D" cx={18} cy={18} r={4} />
      <circle fill="#31373D" cx={4} cy={18} r={4} />
    </g>
  </svg>
)

export default HorizontalDotDotDotSvg
