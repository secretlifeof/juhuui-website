import Link from 'next/link'
import Layout from '../components/Layout'
import { Flex, Box, Icon } from 'juhuui'
import { ContainerOuter, Button } from '../styles'

const IndexPage = () => (
  <Layout title="JuhuUi">
    <Flex
      css={{
        fontSize: '10rem',
        align: 'center',
        justify: 'center',
        minH: '90vh',
        direction: 'column',
        c: 'juhu.text',
      }}
    >
      <Icon
        name="logo"
        css={{
          w: ['20rem', undefined, '25rem'],
          h: '10rem',
          pb: [5, undefined, 0],
        }}
      />
      <Box css={{ fontSize: '2xl', pb: [14, undefined, 20] }}>
        it might turn you (like me)
        <Box as="br" css={{ d: ['initial', undefined, 'none'] }} /> into a
        euphoric rabbit
      </Box>
      <Box css={{ fontSize: ['md', undefined, 'xl'] }}>
        <Button href="https://github.com/secretlifeof/juhuui">
          more on Github
        </Button>
      </Box>
    </Flex>
  </Layout>
)

export default IndexPage
