import { Divider } from 'juhuui'
import { a } from 'react-spring'

export const AnimatedLine = Divider.as(a.div).with({
  borderColor: 'juhu.line',
  opacity: '1',
  borderTop: '1px solid',
  marginTop: '0.4rem',
  marginBottom: '0.6rem',
})
