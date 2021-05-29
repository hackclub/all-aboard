import { Box, Heading, Text, Button, Grid, Container } from 'theme-ui'

const buttonSX = {
  background: '#e28a89',
  color: 'black',
  minWidth: [5, 8],
  border: 'none',
  m: 0,
  mt: 0,
  p: 4,
  width: '100%',
  boxShadow: 'card',
  border: '1px dashed #e8e0cc',
  ':hover,:focus': {
    boxShadow: 'elevated'
  }
}

const CTA = () => (
  <Container variant="copy">
    <Grid columns={[1, 2]} sx={{ mx: [0, 1, 4], my: 5 }}>
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
          <Heading sx={{ fontSize: 6 }}>Apply Now</Heading>
          <Text as="p" sx={{ fontStyle: 'italic', mt: 2 }}>
            Open until July 12th, 2021
          </Text>
        </Box>
      </Box>
      <Box>
        <Button sx={buttonSX} as="a" href="/api/sign-in-slack" target="_blank">
          <Heading sx={{ mb: [1, 2], textAlign: 'center' }}>
            Hacker Zephyr
          </Heading>
          <Box sx={{ margin: 'auto', textAlign: 'center' }}>
            <Text sx={{ textTransform: 'uppercase' }}>
              <Text sx={{ fontWeight: 'bold' }}>0¢</Text> Fare
            </Text>
            <Text sx={{ mx: '4px' }}>|</Text>
            <Text>One-Way Hacker</Text>
          </Box>
        </Button>
      </Box>
    </Grid>
  </Container>
)

export default CTA
