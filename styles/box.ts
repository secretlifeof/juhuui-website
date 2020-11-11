import { Box } from 'juhuui'
import { a } from 'react-spring'

const Boxy = Box.with()
export { Boxy as Box }

export const BoxRef = Box.with()

export const ContainerOuter = Box.with({
  pt: ['8', null, '16'],
  pb: ['16', null, '32'],
})

export const Animated = Box.as(a.div).with()
export const AnimatedContainerOuter = ContainerOuter.with({ as: a.div })

export const Bright = Box.with({ bg: 'juhu.bgBright' })
export const MediumBright = Box.with({ bg: 'juhu.bg' })
export const Dark = Box.with({ bg: 'juhu.bgInverted' })

export const MainContent = Box.with({
  position: 'relative',
  bg: 'juhu.bgBright',
  zIndex: 2,
  borderTop: '1px solid juhu.lineBg',
})
