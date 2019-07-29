import * as React from 'react'

const VerticalDotDotDotSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 36 36" {...props}>
    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <circle id="Oval" fill="#31373D" cx={18} cy={4} r={4} />
      <circle id="Oval" fill="#31373D" cx={18} cy={18} r={4} />
      <circle id="Oval" fill="#31373D" cx={18} cy={32} r={4} />
    </g>
  </svg>
)

export default VerticalDotDotDotSvg
