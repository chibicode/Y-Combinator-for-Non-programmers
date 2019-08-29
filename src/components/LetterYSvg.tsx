import * as React from 'react'

const LetterYSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 36 36" {...props}>
    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <g fill="#009688" fillRule="nonzero">
        <path d="M36,32 C36,34.209 34.209,36 32,36 L4,36 C1.791,36 0,34.209 0,32 L0,4 C0,1.791 1.791,0 4,0 L32,0 C34.209,0 36,1.791 36,4 L36,32 Z" />
      </g>
      <path
        d="M26.238,9.263 C26.238,8.023 25.308,7 24.006,7 C23.199,7 22.486,7.341 22.084,7.93 L17.619,14.41 L13.154,7.93 C12.751,7.341 12.038,7 11.232,7 C9.93,7 9,8.023 9,9.263 C9,9.759 9.155,10.255 9.434,10.659 L14.617,17.954 L14.617,26.371 C14.617,27.968 15.911,29.262 17.508,29.262 L17.727,29.262 C19.323,29.262 20.617,27.968 20.617,26.371 L20.617,17.957 L25.805,10.658 C26.084,10.255 26.238,9.759 26.238,9.263 Z"
        fill="#FFFFFF"
        fillRule="nonzero"
      />
    </g>
  </svg>
)

export default LetterYSvg
