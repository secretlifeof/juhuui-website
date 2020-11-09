import { Box } from 'juhuui'

export const Button = Box.as('a').with({
  align: 'center',
  // bg: 'bg',
  border: '3px solid juhu.borderPang',
  c: 'juhu.text',
  '&:hover': {
    bg: 'juhu.bgInverted',
  },
  '&:active': {
    transform: 'scale(0.96)',
  },
  px: [3, undefined, 4],
  py: [3, undefined, 2],
  rounded: 'lg',
  transition: 'all 0.30s ease-in-out',
})
