import * as React from 'react'

const IndexSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 36 36" {...props}>
    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <rect
        stroke="#7986CB"
        strokeWidth={3}
        fill="#C5CAE9"
        x={1.5}
        y={1.5}
        width={33}
        height={33}
        rx={4}
      />
      <rect fill="#FFFFFF" x={6} y={6} width={24} height={10} rx={2} />
      <rect fill="#FFFFFF" x={6} y={20} width={24} height={10} rx={2} />
      <circle fill="#31373D" cx={11} cy={11} r={2} />
      <circle fill="#BE1931" cx={11} cy={25} r={2} />
      <circle fill="#31373D" cx={25} cy={11} r={2} />
      <circle fill="#BE1931" cx={25} cy={25} r={2} />
      <circle fill="#31373D" cx={18} cy={11} r={2} />
      <circle fill="#BE1931" cx={18} cy={25} r={2} />
    </g>
  </svg>
)

export default IndexSvg
