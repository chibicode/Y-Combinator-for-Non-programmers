import * as React from 'react'

const CrossSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 36 36" preserveAspectRatio="none" {...props}>
    <g
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd"
      fillOpacity={0.2}
    >
      <path
        d="M18,14.4 L30,0 L36,0 L21,18 L36,36 L30,36 L18,21.6 L6,36 L0,36 L15,18 L0,0 L6,0 L18,14.4 Z"
        id="Combined-Shape"
        fill="#BE1931"
      />
    </g>
  </svg>
)

export default CrossSvg
