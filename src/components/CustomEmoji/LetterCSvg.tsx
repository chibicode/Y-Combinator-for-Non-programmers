import * as React from 'react'

const LetterCSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 36 36" {...props}>
    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <path
          d="M36,32 C36,34.209 34.209,36 32,36 L4,36 C1.791,36 0,34.209 0,32 L0,4 C0,1.791 1.791,0 4,0 L32,0 C34.209,0 36,1.791 36,4 L36,32 Z"
          fill="#DD2E44"
        />
        <path
          d="M19.723,6.552 C21.987,6.552 26.389,7.296 26.389,10.025 C26.389,11.141 25.614,12.102 24.467,12.102 C23.195,12.102 22.328,11.017 19.723,11.017 C15.879,11.017 13.894,14.273 13.894,18.055 C13.894,21.744 15.909,24.907 19.723,24.907 C22.328,24.907 23.381,23.605 24.653,23.605 C26.049,23.605 26.7,25 26.7,25.712 C26.7,28.689 22.018,29.371 19.724,29.371 C13.43,29.371 9.05799983,24.379 9.05799983,17.961 C9.057,11.513 13.398,6.552 19.723,6.552 Z"
          fill="#FFFFFF"
        />
      </g>
    </g>
  </svg>
)

export default LetterCSvg
