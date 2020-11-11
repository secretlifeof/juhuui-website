// @ts-nocheck
import { Box, css, Link as JLink } from 'juhuui'

export const Link = JLink.with()
export const activeLinkClass = css({
  color: 'juhu.textHighlight',
  borderBottom: '1px solid currentColor',
})

export const LinkFrame = Box.variants({
  animate: {
    true: {
      '&:hover .link-text': {
        transform: 'translateX(0.2rem)',
      },
      '& .link-text': {
        transition: 'transform 0.25s ease',
      },
      '& .link-icon g': {
        transition: 'all 0.25s ease',
      },
    },
  },
  icon: {
    hover: {
      '&:hover .link-icon g': {
        stroke: 'juhu.textHighlight',
        color: 'juhu.textHighlight',
      },
      '&:hover .link-icon path': { stroke: 'juhu.textHighlight' },
    },
  },
  text: {
    hover: {
      '&:hover .link-text': { color: 'juhu.textHighlight' },
    },
  },
}).with({ cursor: 'pointer' })
