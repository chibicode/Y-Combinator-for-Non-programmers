import * as React from 'react'

const NodesSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 36 36" {...props}>
    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <circle
        stroke="#5C6BC0"
        strokeWidth={2}
        fill="#E8EAF6"
        cx={7.5}
        cy={7.5}
        r={6.5}
      />
      <circle
        stroke="#5C6BC0"
        strokeWidth={2}
        fill="#E8EAF6"
        cx={28.5}
        cy={7.5}
        r={6.5}
      />
      <circle
        stroke="#5C6BC0"
        strokeWidth={2}
        fill="#E8EAF6"
        cx={28.5}
        cy={28.5}
        r={6.5}
      />
      <circle
        stroke="#5C6BC0"
        strokeWidth={2}
        fill="#E8EAF6"
        cx={7.5}
        cy={28.5}
        r={6.5}
      />
      <path
        d="M15,7 L21,7"
        stroke="#5C6BC0"
        strokeWidth={2}
        strokeLinecap="square"
      />
      <path
        d="M15,29 L21,29"
        stroke="#5C6BC0"
        strokeWidth={2}
        strokeLinecap="square"
      />
      <path
        d="M12.5882568,12.5882568 L23.4786377,23.4786377"
        stroke="#5C6BC0"
        strokeWidth={2}
        strokeLinecap="square"
      />
      <path
        d="M12.5882568,12.5882568 L23.1572266,23.1572266"
        stroke="#5C6BC0"
        strokeWidth={2}
        strokeLinecap="square"
        transform="translate(17.872742, 17.872742) scale(1, -1) translate(-17.872742, -17.872742) "
      />
    </g>
  </svg>
)

export default NodesSvg
