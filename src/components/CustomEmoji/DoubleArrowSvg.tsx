import * as React from 'react'

const DoubleArrowSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 36 36" {...props}>
    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <g
        transform="translate(3.000000, 9.000000)"
        fill="#9FA8DA"
        fillRule="nonzero"
      >
        <path d="M10,0 L0,9 L10,18 L10,0 Z M30,9 L20,0 L20,18 L30,9 Z" />
        <polygon points="9 5 21 5 21 13 9 13" />
      </g>
    </g>
  </svg>
)

export default DoubleArrowSvg
