import { Box, Heading, Text, Button, Grid, Container, Flex } from 'theme-ui'

const buttonSX = {
  background: '#759d3e',
  color: 'white',
  minWidth: [5, 8],
  maxWidth: '75wh',
  border: 'none',
  m: 0,
  mt: 0,
  p: 4,
  width: '100%',
  boxShadow: 'card',
  border: '4px dashed #eaeedc',
  ':hover,:focus': {
    boxShadow: 'elevated',
    color: 'black',
  }
}

const CTA = () => (
  <Flex sx={{
    minHeight: '65vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.8em',
    backgroundColor: '#011C36',
  }}>
    <Grid columns={[1, 2]} sx={{ mx: [3, 2, 4] }}>
      <Box
        sx={{
          textAlign: ['center','left'],
          m: 0,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: ['center', 'left']
        }}
      >
        <Box>
          <Heading sx={{ fontSize: 6 }}>The interest form has closed.</Heading>
          <Text as="p" sx={{ fontStyle: 'italic', mt: 2 }}>
            Thank you to all who registered.
          </Text>
        </Box>
      </Box>
      <Box>
        <Button sx={buttonSX} target="_blank">
          <Heading sx={{ mb: [1, 2], textAlign: 'center' }}>
            Hacker Zephyr
          </Heading>
          <Box sx={{ margin: 'auto', textAlign: 'center' }}>
            <Text sx={{ textTransform: 'uppercase' }}>
              <Text sx={{ fontWeight: 'bold' }}>0¢</Text> Fare
            </Text>
            <Text sx={{ mx: '4px' }}>|</Text>
            <Text>Round-Trip</Text>
          </Box>
        </Button>
      </Box>
    </Grid>
  </Flex>
)

export default CTA
