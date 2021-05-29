import { Container, Box, Image, Heading } from 'theme-ui'

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
        p: [2, 4]
      }}
    >
      <Image
        src="https://cloud-kjy0691u4.vercel.app/1coat-of-arms.jpg"
        sx={{
          display: 'block',
          height: ['3em', '4em'],
          mx: 'auto',
          my: [2, 3]
        }}
      />
      <Heading
        sx={{
          color: 'black',
          mb: [4, 5],
          mt: [2, 3],
          textAlign: 'center',
          textDecoration: 'underline',
          textDecorationThickness: '0.1875em',
          textTransform: 'uppercase'
        }}
      >
        Postal Telegram – Immediate
      </Heading>
      <p>Every summer Hack Club does something special.</p>
      <p>
        In 2019 we brought 75 Hack Club leaders to San Francisco for Flagship.
        Last year, we gave a student $50k to distribute as hardware grants,
        launched <a href="https://scrapbook.hackclub.com">Scrapbook</a>, and
        hosted the <a href="https://scrapbook.hackclub.com">Summer of Making</a>
        .
      </p>
      <p>
        This year, we're chartering a train across America, and hosting the
        world's longest hackathon (in miles).
      </p>
      <p>
        We're starting at{' '}
        <a href="https://www.google.com/maps/@44.3805392,-73.2272344,3a,75y,76.05h,92.38t/data=!3m7!1e1!3m5!1sOyTfQpxquSr-DfGqPz9SOw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DOyTfQpxquSr-DfGqPz9SOw%26cb_client%3Dsearch.revgeo_and_fetch.gps%26w%3D96%26h%3D64%26yaw%3D84.47771%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656">
          Hack Club HQ in Burlington Vermont
        </a>
        , heading south to New York City, then crossing the rockies on our way
        to San Francisco, and end in Los Angeles.
      </p>
      <p>
        On the trip you'll code, make music, build, and write poetry. On the
        train you'll meet startup founders, an acrobat, 3 political exiles, and
        a philosopher.
      </p>
      <p>
        This trip is a gift from Hack Club to you and asks nothing in return. We
        want this to be a special, eclectic, and thought-provoking journey that
        you'll remember for the rest of your life.
      </p>
      <p>
        If you're interested in joining us, please register your interest below.
        We are trying to fit as many Hack Clubbers as we can on The Hacker
        Zephyr.
      </p>
      <hr />
      <Image
        src="./signatures/all.svg"
        sx={{ mx: 'auto', my: [2, 3], display: 'block' }}
      />
    </Box>
  </Container>
)

export default Telegram
