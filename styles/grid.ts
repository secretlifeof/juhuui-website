import { Box, css, Grid as JGrid } from 'juhuui'
import { animated } from 'react-spring'

export const grid6 = css({
  display: 'grid',
  templateColumns: 'repeat(6, minmax(0, 1fr))',
  gap: '0 var(--gutter-width)',
})

export const grid6NoGap = css({
  display: [undefined, 'grid'],
  templateColumns: [undefined, 'repeat(6, minmax(0, 1fr))'],
  gap: '0',
})

export const gridM12D6 = css({
  display: 'grid',
  templateColumns: [
    'repeat(12, minmax(0, 1fr))',
    null,
    'repeat(6, minmax(0, 1fr))',
  ],
  gap: '0 var(--gutter-width)',
})

export const grid12 = css({
  display: 'grid',
  templateColumns: 'repeat(12, minmax(0, 1fr))',
  gap: '0 var(--gutter-width)',
})

export const grid12padding = css({
  display: 'grid',
  templateColumns: 'repeat(12, minmax(0, 1fr))',
  '& div:not(:first-child)': {
    pl: 'var(--gutter-width)',
  },
})

export const GridHalfFull = Box.with(
  ({ fw = { first: false } }: { fw: { first?: boolean } }) => ({
    column: ['1/span 12', null, fw.first ? '1/span 6' : '7/span 6'],
    pt: ['6', null, '0px'],
  })
)

export const GridMc12Dc3c9 = Box.with(
  ({ first = false, second = false }: { first: boolean; second: boolean }) => ({
    column: [
      '1/span 12',
      null,
      first ? '1/span 3' : second ? '4/span 1' : '4/span 9',
    ],
    // pt: [6, null, 0],
  }),
  ['first']
)

export const Grid = JGrid.with(({ fw: { columns = 12 } }) => ({
  templateColumns: !Array.isArray(columns)
    ? `repeat(${columns}, minmax(0, 1fr))`
    : columns.map((column) =>
        column ? `repeat(${column}, minmax(0, 1fr))` : null
      ),
  gap: '0 var(--gutter-width)',
}))

export const AnimatedGrid = Grid.as(animated.div).with()

export const GridSpan = Box.with(({ start, end }) => ({
  column: `${start}/span ${end}`,
}))
