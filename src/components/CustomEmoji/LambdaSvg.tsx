import * as React from 'react'

const LambdaSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 36 36" {...props}>
    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <path
        d="M12.6,34.36 L8.72,34 L18.16,11.76 L17.92,10.88 C16.68,6.84 15.2,4.72 12.72,4.72 C11.52,4.72 10.72,5.04 9.92,5.44 L9,2.4 C10.04,1.96 11.2,1.64 13.12,1.64 C17.44,1.64 19.56,4.8 21.52,11.04 L29.76,34 L25.88,34 L19.88,15.96 L19.72,15.96 L12.6,34.36 Z"
        fill="#31373D"
        fillRule="nonzero"
      />
    </g>
  </svg>
)

export default LambdaSvg
