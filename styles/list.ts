import { Box, List as JList, ListItem as JListItem } from 'juhuui'

export const ListBright = JList.as('ul').with({
  listStylePosition: 'outside',
  listStyleType: 'circle',
  fontSize: ['md'],
})
export const ListItem = JListItem.with()

// <dl> Description type list
export const DescriptionList = Box.as('dl').with({
  d: 'grid',
  templateColumns: '25% auto',
})
export const DescriptionListTitle = Box.as('dt').with({
  fontWeight: 'normal',
  color: 'juhu.textSecondary',
  gridColumnStart: 1,
})
export const DescriptionListDescription = Box.as('dd').with({
  gridColumnStart: 2,
})
