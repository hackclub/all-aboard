import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Flex,
  Link
} from 'theme-ui'

export default function Footer() {
  return (
    <Container>
      <Grid sx={{ pt: 5, pb: 3 }} columns={'2.8fr 1fr'}>
        <Flex sx={{ alignItems: 'center' }}>
          <Box>
            <Text as="p" sx={{ fontWeight: '800', pb: 1 }}>
              A Project by Hack Club
            </Text>
            <Text as="p">
              <Link sx={{ color: 'white' }} href="https://hackclub.com">
                Home
              </Link>{' '}
              |{' '}
              <Link sx={{ color: 'white' }} href="https://hackclub.com/slack">
                Slack
              </Link>{' '}
              |{' '}
              <Link
                sx={{ color: 'white' }}
                href="https://workshops.hackclub.com"
              >
                Workshops
              </Link>{' '}
              |{' '}
              <Link
                sx={{ color: 'white' }}
                href="https://scrapbook.hackclub.com"
              >
                Scrapbook
              </Link>
            </Text>
          </Box>
        </Flex>
        <Box sx={{ textAlign: 'right' }}>
          <Heading
            sx={{
              fontSize: '3em',
              float: 'right'
            }}
          >
            <Box
              sx={{
                border: '5px solid white',
                width: 'min-content',
                px: 2,
                borderRadius: 5,
                width: '64px',
                textAlign: 'center'
              }}
            >
              h
            </Box>
          </Heading>
        </Box>
      </Grid>
    </Container>
  )
}
