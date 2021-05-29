import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
} from 'theme-ui'
import Meta from '../components/meta'
import Header from '../components/header'
import CTA from '../components/cta'
import Telegram from '../components/telegram'
import Gallery from '../components/gallery'
import Footer from '../components/footer'
// import MultiplayerMouse from '../components/multiplayer-mouse'
import questions from '../lib/questions'

export default function App() {
  return (
    <>
      <Meta />
      {/* <MultiplayerMouse /> */}
      <Header />
      <Telegram />
      <CTA />
      <Gallery />
      <Container sx={{ mt: 2}}>
        <Heading as="h1" my={[1, 3]}>
          Appendix
        </Heading>
        <Grid columns={[1, 2]}>
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
      </Container>
      <Footer />
      <style>
        {`
        .cursor {
          position: absolute;
          top: 0;
          left: 0;
          height: 35px;
          width: 35px;
          border-radius: 50%;
          transition: 0.1s;
          background-image: url('cursor.svg');
          filter: grayscale(100%);
          opacity: 0.5;
        }

        html, body {
          background: black;
          background: linear-gradient(180deg, rgba(196,77,77,1) 0%, rgba(196,77,77,1) 36%, rgba(1,28,54,1) 57%, rgba(1,28,54,1) 100%);
          background: #C44D4D;
          color: white;
        }
        *::selection {
          background: #e8e0cc !important;
        }
        a{
          color: inherit
        }
        `}
      </style>
    </>
  )
}
