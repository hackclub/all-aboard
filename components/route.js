import { Flex, Image } from 'theme-ui'

const Route = () => (
  <Flex columns={2}>
    <Image src="./timeline.png" sx={{
      my: 2,
      mb: 4,
      display: 'block',
      height: '300px'
    }} />
    <Image src="./route.svg" sx={{
      my: 2,
      mb: 4,
      mx: 'auto',
      mr: '0px',
      display: 'block',
      height: '300px'
    }} />
  </Flex>
)

export default Route