import { Container, Box, Image, Heading } from "theme-ui"

const Telegram = () => (
  <Container variant="copy">
    <Box
      sx={{
        bg: 'white',
        border: '1px dashed black',
        borderRadius: '4px',
        color: 'black',
        mx: [0, 1, 4],
        my: 5,
        p: [2, 4],
      }}>
      <Image src="https://cloud-kjy0691u4.vercel.app/1coat-of-arms.jpg" sx={{
        display: 'block',
        height: ['3em', '4em'],
        mx: 'auto',
        my: [2, 3],
      }} />
      <Heading sx={{
        color: 'black',
        mb: [4, 5],
        mt: [2, 3],
        textAlign: 'center',
        textDecoration: 'underline',
        textDecorationThickness: '0.1875em',
        textTransform: 'uppercase',
      }}>
        Postal Telegram – Immediate
      </Heading>
      <p>
        Every summer Hack Club does something special.
        </p>
      <p>
        In 2019 we brought 75 Hack Club leaders to San Francisco for
        Flagship. Last year, we gave a student $50k to distribute as
        hardware grants, launched scrapbook, and hosted the Summer of
        Making.
        </p>
      <p>
        This year, we're chartering a train across America, and hosting the
        world's longest hackathon (in miles).
        </p>
      <p>
        We're starting at Hack Club HQ in Burlington Vermont, heading south
        to New York City, then crossing the rockies on our way to San
        Francisco, and end in Los Angeles.
        </p>
      <p>
        On the trip you'll code, make music, build, and write poetry. On the
        train you'll meet startup founders, an acrobat, 3 political exiles,
        and a philosopher.
        </p>
      <p>
        This trip is a gift from Hack Club to you and asks nothing in
        return. We want this to be a special, eclectic, and
        thought-provoking journey that you'll remember for the rest of your
        life.
        </p>
      <p>
        If you're interested in joining us, please register your interest
        below. We are trying to fit as many Hack Clubbers as we can on The
        Hacker Zephyr.
        </p>
      <hr />
      <Image src="./signatures/all.svg" sx={{ mx: 'auto', my: [2, 3], display: 'block' }} />
    </Box>
  </Container>
)

export default Telegram