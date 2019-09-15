import * as React from 'react'

const LetterDSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 36 36" {...props}>
    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <path
          d="M36,32 C36,34.209 34.209,36 32,36 L4,36 C1.791,36 0,34.209 0,32 L0,4 C0,1.791 1.791,0 4,0 L32,0 C34.209,0 36,1.791 36,4 L36,32 Z"
          fill="#DD2E44"
        />
        <path
          d="M9.057,9.312 C9.057,7.885 10.049,6.924 11.444,6.924 L16.591,6.924 C23.537,6.924 27.506,11.389 27.506,18.272 C27.506,24.783 23.289,29 16.901,29 L11.506,29 C10.483,29 9.057,28.441 9.057,26.675 L9.057,9.312 Z M13.708,24.721 L16.84,24.721 C20.84,24.721 22.669,21.776 22.669,18.055 C22.669,14.086 20.81,11.203 16.53,11.203 L13.708,11.203 L13.708,24.721 Z"
          fill="#FFFFFF"
        />
      </g>
    </g>
  </svg>
)

export default LetterDSvg
