import { Box } from 'juhuui'

// 18px
export const TextSm = Box.with({
  lineHeight: ['1.2'],
  fontSize: ['sm', 'xs'],
})

// 24px
export const TextMd = Box.with({
  fontSize: ['md'],
})

// 32 px
export const TextLg = Box.with({
  lineHeight: ['1.1'],
  fontSize: ['lg', 'lg', 'xl'],
  hyphens: 'auto',
})

// 52px
export const TextXl = Box.with({
  lineHeight: ['1'],
  fontSize: ['xl', '2xl', '3xl'],
})
