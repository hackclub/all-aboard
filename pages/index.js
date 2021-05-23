import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Card,
  Button,
  Flex,
  Link
} from 'theme-ui'
import { useEffect } from 'react'

export default function App() {
  return (
    <>
      <Box
        sx={{
          minHeight: '100vh',
          color: 'white',
          backgroundImage: `linear-gradient(262.98deg, rgba(108, 90, 44, 0.68) 19.45%, rgba(217, 167, 41, 0.29) 82.13%), url(/_next/image?url=https://cloud-16uu33t6r-hack-club-bot.vercel.app/0california_zephyr_colorado_river_western_colorado.jpg&w=1920&q=90)`,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom right'
        }}
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: ['flex-end', 'center'],
            minHeight: '100vh',
            textShadow: 'card',
            py: 3,
            pb: [5, 3]
          }}
        >
          <Box sx={{ maxWidth: '800px' }}>
            <Link
              href="https://hackclub.com"
              sx={{ textDecoration: 'none!important' }}
            >
              <Heading
                sx={{
                  paddingLeft: '12px',
                  fontSize: '3em',
                  color: 'white',
                  textDecoration: 'none'
                }}
              >
                <Box
                  sx={{
                    border: '5px solid white',
                    width: 'min-content',
                    px: 2,
                    borderRadius: 5,
                    width: '64px',
                    textAlign: 'center',
                    textDecoration: 'none!important'
                  }}
                >
                  h
                </Box>
              </Heading>
            </Link>
            <Box sx={{ pt: [3, 4] }}>
              <Heading
                sx={{
                  fontSize: ['10vw', '48px'],
                  fontWeight: '900',
                  color: 'white',
                  paddingLeft: ['4px', '12px']
                }}
              >
                All aboard the
              </Heading>
              <Heading
                sx={{
                  fontSize: ['18vw', '144px'],
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
                <Text>Hacker</Text> Zephyr
              </Heading>
              <Heading
                sx={{
                  fontSize: ['6vw', '36px'],
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
              mt: 1,
              mb: 6,
              bg: '#906B52',
              fontWeight: '500'
            }}
          >
            In 1863 the first transcontinental railroad bridged the east to west
            coast of America. This summer, Hack Clubbers will make a pilgrimage
            out west. Consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          minHeight: '40vh',
          color: 'white',
          borderTop: '8px solid #36271C',
          backgroundImage: `linear-gradient(262.98deg, rgba(108, 90, 44, 0.68) 19.45%, rgba(217, 167, 41, 0.29) 82.13%), url(/_next/image?url=https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Vermont_Academy%2C_Saxtons_River%2C_Vermont.jpg/640px-Vermont_Academy%2C_Saxtons_River%2C_Vermont.jpg&w=1920&q=90)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPositionY: '80%'
        }}
      >
        <Container
          sx={{ display: 'flex', alignItems: 'top', minHeight: '60vh' }}
        >
          <Card
            sx={{
              maxWidth: '700px',
              bg: '#85865F',
              border: '3px dashed white',
              height: 'min-content',
              p: [3, 3, 3],
              mt: 4,
              fontSize: '1.3em',
              color: 'white'
            }}
          >
            <b>Stage 1: Vermont</b>
            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Card>
        </Container>
      </Box>
      <Box
        sx={{
          minHeight: '40vh',
          color: 'white',
          borderTop: '8px solid #36271C',
          backgroundImage: `linear-gradient(262.98deg, rgba(108, 90, 44, 0.68) 19.45%, rgba(217, 167, 41, 0.29) 82.13%), url(/_next/image?url=https://upload.wikimedia.org/wikipedia/commons/2/24/Essayons_in_New_York_Harbor.jpg&w=1920&q=90)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPositionY: '0%'
        }}
      >
        <Container
          sx={{ display: 'flex', alignItems: 'top', minHeight: '60vh' }}
        >
          <Card
            sx={{
              maxWidth: '700px',
              bg: '#927B97',
              border: '3px dashed white',
              height: 'min-content',
              p: [3, 3, 3],
              mt: 4,
              fontSize: '1.3em',
              color: 'white'
            }}
          >
            <b>Stage 2: New York</b>
            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Card>
        </Container>
      </Box>
      <Box
        sx={{
          minHeight: '40vh',
          color: 'white',
          borderTop: '8px solid #36271C',
          backgroundImage: `linear-gradient(262.98deg, rgba(108, 90, 44, 0.68) 19.45%, rgba(217, 167, 41, 0.29) 82.13%), url(/_next/image?url=https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/ROLLING_HILLS_IN_THE_OUTSKIRTS_OF_ATCHISON%2C_KANSAS%2C_SHOWING_AN_AREA_OF_LANDSCAPE_PAINTED_BY_GEORGE_CATLIN_BETWEEN..._-_NARA_-_557087.tif/lossy-page1-3000px-ROLLING_HILLS_IN_THE_OUTSKIRTS_OF_ATCHISON%2C_KANSAS%2C_SHOWING_AN_AREA_OF_LANDSCAPE_PAINTED_BY_GEORGE_CATLIN_BETWEEN..._-_NARA_-_557087.tif.jpg&w=1920&q=90)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPositionY: '50%'
        }}
      >
        <Container
          sx={{ display: 'flex', alignItems: 'top', minHeight: '60vh' }}
        >
          <Card
            sx={{
              maxWidth: '700px',
              bg: '#AA7B78',
              border: '3px dashed white',
              height: 'min-content',
              p: [3, 3, 3],
              mt: 4,
              fontSize: '1.3em',
              color: 'white'
            }}
          >
            <b>Stage 3: The Empty Plains</b>
            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Card>
        </Container>
      </Box>
      <Box
        sx={{
          minHeight: '40vh',
          color: 'white',
          borderTop: '8px solid #36271C',
          backgroundImage: `linear-gradient(262.98deg, rgba(108, 90, 44, 0.68) 19.45%, rgba(217, 167, 41, 0.29) 82.13%), url(/_next/image?url=https://261.com/wp-content/gallery/super-dome/imgp0900web.jpg&w=1920&q=90)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPositionY: '20%'
        }}
      >
        <Container
          sx={{ display: 'flex', alignItems: 'top', minHeight: '60vh' }}
        >
          <Card
            sx={{
              maxWidth: '700px',
              bg: '#5F8893',
              border: '3px dashed white',
              height: 'min-content',
              p: [3, 3, 3],
              mt: 4,
              fontSize: '1.3em',
              color: 'white'
            }}
          >
            <b>Our ride: the TBD</b>
            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Card>
        </Container>
      </Box>
      <Box
        sx={{
          minHeight: '40vh',
          color: 'white',
          borderTop: '8px solid #36271C',
          backgroundImage: `linear-gradient(262.98deg, rgba(108, 90, 44, 0.68) 19.45%, rgba(217, 167, 41, 0.29) 82.13%), url(/_next/image?url=https://cloud-3q64c1iul-hack-club-bot.vercel.app/0mark_twain_zephyr_ya.png&w=1920&q=90)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPositionY: '15%'
        }}
      >
        <Container
          sx={{ display: 'flex', alignItems: 'center', minHeight: '60vh' }}
        >
          <Box sx={{ maxWidth: '700px', pr: 3 }}>
            <Heading
              as="h1"
              sx={{ fontSize: ['2em', '4em'], textShadow: 'card' }}
            >
              Hop aboard and join us for an adventure of a lifetime!
            </Heading>
            <Button sx={{ mt: 3 }}>
              Apply for a ticket (closes{' '}
              <Text sx={{ display: ['none', 'inline'] }}>June 12th</Text>
              <Text sx={{ display: ['inline', 'none'] }}>06/12</Text>)
            </Button>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          minHeight: '40vh',
          color: 'white',
          borderTop: '8px solid #36271C',
          background: `#906B52`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPositionY: '15%'
        }}
      >
        <Container sx={{ position: 'relative' }}>
          <Box>
            <Heading
              as="h1"
              sx={{ mt: 4, fontSize: ['1.5em', '2.5em'], textShadow: 'card' }}
            >
              Frequently Asked Questions
            </Heading>
            <Grid columns={[1, '1fr 1fr']} sx={{ px: '3px', pt: 3, mt: 1 }}>
              <details>
                <summary>So, how much does this all cost?</summary>
                Hi
              </details>
              <details>
                <summary>Will I die on the train?</summary>
                No
              </details>
              <details>
                <summary>So, how much does this all cost?</summary>
                Hi
              </details>
              <details>
                <summary>Will I die on the train?</summary>
                No
              </details>
            </Grid>
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
                    <Link
                      sx={{ color: 'white' }}
                      href="https://hackclub.com/slack"
                    >
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
          </Box>
        </Container>
      </Box>
      <style>
        {`
        
        `}
      </style>
    </>
  )
}
