import styled from '@emotion/styled'
import { colors, spaces } from 'src/lib/theme'

export const Table = styled.table`
  width: 100%;
  border: 2px solid ${colors('indigo300')};
  margin: 0 0 ${spaces(1)};
  border-collapse: collapse;
  table-layout: fixed;
`

export const Th = styled.th`
  padding: ${spaces(0.5)} ${spaces(0.5)};
  border: 2px solid ${colors('indigo300')};
  background: ${colors('indigo50')};
  text-align: center;
`

export const Td = styled.td`
  padding: ${spaces(0.5)} ${spaces(0.5)};
  border: 2px solid ${colors('indigo300')};
  text-align: center;
`
