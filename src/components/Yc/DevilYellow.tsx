import React from 'react'
import { colors } from 'src/lib/theme'

const DevilYellow = (props: any) => (
  <svg viewBox="0 0 36 36" {...props}>
    <circle fill={colors('yellow600')} cx={18} cy={18} r={18} />
    <path
      fill={colors('yellow600')}
      d="M10 4C7.42 4 4.369 1.534 3.414.586A1.998 1.998 0 0 0 1.235.153 1.998 1.998 0 0 0 0 2c0 3.459 1.672 10 8 10a2 2 0 0 0 1.789-1.106l2-4A1.999 1.999 0 0 0 10 4zM34.766.153a1.996 1.996 0 0 0-2.18.434C31.7 1.472 28.589 4 26 4a1.999 1.999 0 0 0-1.789 2.895l2 4A2 2 0 0 0 28 12c6.328 0 8-6.541 8-10 0-.809-.487-1.538-1.234-1.847z"
    />
    <path
      fill={colors('yellow900')}
      d="M27.335 25.629a.501.501 0 0 0-.635-.029c-.039.029-3.922 2.9-8.7 2.9-4.766 0-8.662-2.871-8.7-2.9a.5.5 0 1 0-.729.657C8.7 26.472 11.788 31.5 18 31.5s9.301-5.028 9.429-5.243a.499.499 0 0 0-.094-.628zm-11.628-7.336C12.452 15.038 7.221 15 7 15a1 1 0 0 0-.001 2c.029 0 1.925.022 3.983.737-.593.64-.982 1.634-.982 2.763 0 1.934 1.119 3.5 2.5 3.5s2.5-1.566 2.5-3.5c0-.174-.019-.34-.037-.507.013 0 .025.007.037.007a.999.999 0 0 0 .707-1.707zM29 15c-.221 0-5.451.038-8.707 3.293A.999.999 0 0 0 21 20c.013 0 .024-.007.036-.007-.016.167-.036.333-.036.507 0 1.934 1.119 3.5 2.5 3.5s2.5-1.566 2.5-3.5c0-1.129-.389-2.123-.982-2.763A13.928 13.928 0 0 1 29.002 17 1 1 0 0 0 29 15z"
    />
  </svg>
)

export default DevilYellow
