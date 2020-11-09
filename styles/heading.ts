import { Heading } from 'juhuui';

// 18px
export const HeadingSm = Heading.with({
  as: 'h4',
  mb: '0',
  lineHeight: ['1.2'],
  fontSize: ['sm', 'xs'],
  fontFamily: 'inherit',
});

// 24px
export const HeadingMd = Heading.with({
  as: 'h3',
  mb: '0',
  fontSize: ['md'],
  fontFamily: 'inherit',
});

// 40px
export const HeadingLg = Heading.with({
  as: 'h2',
  mb: '0',
  lineHeight: ['1.1'],
  fontSize: ['lg', 'lg', 'xl'],
  fontFamily: 'inherit',
});

// 52px
export const HeadingXl = Heading.with({
  as: 'h2',
  mb: '0',
  lineHeight: ['1'],
  fontSize: ['xl', '2xl', '3xl'],
  fontFamily: 'inherit',
});
