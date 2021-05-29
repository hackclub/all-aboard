import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Image,
  Flex,
  Link
} from 'theme-ui'
import Meta from '../components/meta'
import Header from '../components/head'
import CTA from '../components/cta'
import Telegram from '../components/telegram'
import Gallery from '../components/gallery'
// import MultiplayerMouse from '../components/multiplayer-mouse'

export default function App() {
  let questions = [
    {
      question: 'Who is eligible to board the train?',
      answer:
        'All members of the Hack Club Slack who are fully vaccinated by the boarding date are eligible to board the train. Limited tickets are available, though.'
    },
    {
      question: 'My parents have concerns, how can I convince them?',
      answer: (
        <>
          We have prepared a guide for parents. You can access it here. If
          needed, you're parents can also contact us at team@hackclub.com
        </>
      )
    },
    {
      question: 'Will housing, food and drink be provided?',
      answer:
        'Yes. All essentials will be covered by us. Housing will take place in both sleeper trains and reputable hotels.'
    },
    {
      question: 'What will I need to participate?',
      answer:
        'We recommend bringing clothing, toiletries and electronics. A more extensive list will be provided at a later date.'
    },
    {
      question: 'Will travel to Burlington and from LA be covered?',
      answer:
        'Yes, we will reemburse the costs of flights and / or trains required to get to Burlington and home from LA. '
    },
    {
      question: 'How can I get in touch?',
      answer: (
        <>
          If you've got more questions, feel free to contact the team at
          team@hackclub.com and we will do our best to help.
        </>
      )
    }
  ]
  return (
    <Box
      sx={{ bg: '#C44D4D', minHeight: '100vh', color: 'white', py: 4, pt: 0, overflowX: 'hidden' }}
    >
      <Meta />
      {/* <MultiplayerMouse /> */}
      <Header />
      <Telegram />
      <CTA />
      <Gallery />
      <Container>
        <Heading as="h1" my={[1, 3]}>Appendix</Heading>
        <Grid columns={2}>
          {questions.map(({ question, answer }, index) => (
            <Box
              key={index}
              sx={{
                border: '1px dashed white',
                borderRadius: '4px',
                px: '16px',
                py: '1em'
              }}
            >
              <Text sx={{ fontWeight: '600' }}>{question}</Text> <br /> {answer}
            </Box>
          ))}
        </Grid>
        <Grid sx={{ pt: 5 }} columns={'2.8fr 1fr'}>
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
      <style>
        {`
        .cursor {
          position: absolute;
          top: 0;
          left: 0;
          height: 35px;
          width: 35px;
          border-radius: 50%;
          /* border: 2px solid black; */
          /* background-color: blue; */
          transition: 0.1s;
          background-image: url('cursor.svg');
          filter: grayscale(100%);
          opacity: 0.5;
        }

        html, body {
          max-width: 100vw;
          overflow-x: hidden;
          width: 100vw;
        }
        `}
      </style>
    </Box>
  )
}
