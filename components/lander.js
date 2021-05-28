import { Box, Heading, Text } from "theme-ui"

const closingSX = {
  fontSize: 8,
  '::before': {
    content: 'url()'
  }
}
const summerSX = {
  fontSize: 4
}
const aboardSX = {
  fontSize: ["18vw", "144px"],
  display: 'inline-block',
  textTransform: 'uppercase',
  backgroundPosition: 'center 1em',
  backgroundRepeat: 'no-repeat no-repeat',
  backgroundSize: 'contain',
  backgroundImage: 'url(./divider_1.svg)',
}
const leavingSX = {
  fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto',
  background: '#e02828',
  borderRadius: '0.5em',
  color: 'white',
  fontWeight: 'bold'
}

const Lander = () => (
  <Box sx={{
    textAlign: 'center',
    minHeight: '100vh',
  }}>
    {/* <Heading sx={closingSX} my={[2, 5]}>
      We're Closing Zoom
    </Heading> */}

    <Heading sx={closingSX} my={[2, 5]}>
      We're <Text sx={leavingSX} p={4}>Leaving Zoom</Text>
    </Heading>
    <Heading sx={aboardSX} pb={[4,5]}>
      All-Aboard!
    </Heading>
  </Box>
)

export default Lander