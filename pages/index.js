import { Box, Container, Heading, Text } from 'theme-ui'

export default function App() {
  return (
    <>
      <Box
        sx={{
          minHeight: '100vh',
          color: 'white',
          backgroundImage: `linear-gradient(262.98deg, rgba(108, 90, 44, 0.68) 19.45%, rgba(217, 167, 41, 0.29) 82.13%), url(https://cloud-16uu33t6r-hack-club-bot.vercel.app/0california_zephyr_colorado_river_western_colorado.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom right'
        }}
      >
        <Container
          sx={{ display: 'flex', alignItems: 'center', minHeight: '100vh' }}
        >
          <Box sx={{ maxWidth: '800px' }}>
            <Heading sx={{ paddingLeft: '12px', fontSize: '3em' }}>
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
            <Box sx={{ pt: 4 }}>
              <Heading
                sx={{
                  fontSize: '48px',
                  fontWeight: '900',
                  color: 'white',
                  paddingLeft: '12px'
                }}
              >
                All aboard the
              </Heading>
              <Heading
                sx={{
                  fontSize: '144px',
                  fontWeight: '900',
                  color: 'white',
                  lineHeight: '0.925',
                  textTransform: 'uppercase',
                  py: 1,
                  borderBottom: '6px solid white',
                  width: 'min-content',
                  mb: '12px'
                }}
              >
                <Text sx={{ fontSize: '144px' }}>Hacker</Text> Zephyr
              </Heading>
              <Heading
                sx={{
                  fontSize: '36px',
                  fontWeight: '600',
                  color: 'white',
                  paddingLeft: '0px'
                }}
              >
                America, June 18th to 24th
              </Heading>
            </Box>
          </Box>
        </Container>
        <Container
          sx={{ display: 'flex', alignItems: 'top', minHeight: '40vh' }}
        >
          <Box
            sx={{
              maxWidth: '700px',
              border: '3px dashed white',
              height: 'min-content',
              p: 3,
              borderRadius: 9,
              fontSize: '1.3em',
              mb: 6,
              bg: '#906B52',
              fontWeight: '500'
            }}
          >
            Join us for an all expenses paid train trip across the country.
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          minHeight: '40vh',
          color: 'white',

          backgroundImage: `linear-gradient(262.98deg, rgba(108, 90, 44, 0.68) 19.45%, rgba(217, 167, 41, 0.29) 82.13%), url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Vermont_Academy%2C_Saxtons_River%2C_Vermont.jpg/640px-Vermont_Academy%2C_Saxtons_River%2C_Vermont.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPositionY: '80%'
        }}
      ></Box>
    </>
  )
}
