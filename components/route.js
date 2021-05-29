import { Box, Flex, Image } from 'theme-ui'

const Route = () => (
  <Box sx={{ display: ['block', 'flex'],flexDirection: ['row-reverse', 'row']}}>
    <Image src="./timeline.png" sx={{
      my: [0, 2],
      mb: [0, 4],
      display: 'block',
      height: '300px',
    }} />
    <Image src="./route.svg" sx={{
      my: [0, 2],
      mb: [0, 4],
      mx: 'auto',
      mr: '0px',
      display: 'block',
      height: '300px',
      width: ['100vw', 'fit-content']
    }} />
  </Box>
)

export default Route