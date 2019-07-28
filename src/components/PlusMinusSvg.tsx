import * as React from 'react'

const PlusMinusSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 36 36" {...props}>
    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <path
          d="M36,32 C36,34.209 34.209,36 32,36 L4,36 C1.791,36 0,34.209 0,32 L0,4 C0,1.791 1.791,0 4,0 L32,0 C34.209,0 36,1.791 36,4 L36,32 Z"
          fill="#31373D"
        />
        <g transform="translate(10.000000, 2.500000)" fill="#FFFFFF">
          <path d="M14.5,6.5 L9.5,6.5 L9.5,1.5 C9.5,0.6715 8.8285,0 8,0 C7.1715,0 6.5,0.6715 6.5,1.5 L6.5,6.5 L1.5,6.5 C0.6715,6.5 0,7.1715 0,8 C0,8.8285 0.6715,9.5 1.5,9.5 L6.5,9.5 L6.5,14.5 C6.5,15.3285 7.1715,16 8,16 C8.8285,16 9.5,15.3285 9.5,14.5 L9.5,9.5 L14.5,9.5 C15.3285,9.5 16,8.8285 16,8 C16,7.1715 15.3285,6.5 14.5,6.5 Z" />
        </g>
      </g>
      <g
        transform="translate(0.000000, 21.000000)"
        fill="#BE1931"
        fillRule="nonzero"
      >
        <path d="M36,11 C36,13.209 34.209,15 32,15 L4,15 C1.791,15 0,13.209 0,11 C0,5.15451794 0,1.48785127 0,0 L36,0 C36,1.47479582 36,5.14146249 36,11 Z" />
      </g>
      <g
        transform="translate(10.000000, 26.500000)"
        fill="#FFFFFF"
        fillRule="nonzero"
      >
        <path d="M16,1.75 C16,2.71658333 15.3285,3.5 14.5,3.5 L1.5,3.5 C0.6715,3.5 0,2.71658333 0,1.75 C0,0.783416667 0.6715,0 1.5,0 L14.5,0 C15.3285,0 16,0.783416667 16,1.75 Z" />
      </g>
    </g>
  </svg>
)

export default PlusMinusSvg
