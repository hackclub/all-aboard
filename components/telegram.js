import { Container, Box, Image, Heading } from 'theme-ui'

const Telegram = () => (
  <Container p={['0px !important',1]}>
    <Box
      sx={{
        bg: '#e8e0cc',
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/beige-paper.png")',
        // border: ['none', null, null, '1px dashed black'],
        borderRadius: ['0px',null, null, 6],
        color: '#222',
        mx: 0,
        my: [0, null, 5],
        boxShadow: 'card',
        p: [4, 5],
        fontSize: '1.2em',
      }}
    >
      <Image
        src="./coat-of-arms.png"
        sx={{
          display: 'block',
          height: ['6em', '6em'],
          mx: 'auto',
          my: [2, 3]
        }}
      />
      <Heading
        sx={{
          color: 'black',
          mb: [4, 4],
          mt: [2, 3],
          textAlign: 'center',
          textDecoration: 'underline',
          textDecorationThickness: '0.1875em',
          textTransform: 'uppercase'
        }}
      >
        Postal Telegram – Immediate
      </Heading>
      <p>Every summer Hack Clubbers do something special.</p>
      <p>
        In 2019, 75 Hack Club leaders gathered in San Francisco for <a target="_blank" href="https://photos.google.com/share/AF1QipO3hb2mN-Q16icE-M16d-06uHyXLmvd3Rw6b_f_oosfAX9SnOvnouPOyO79P7pR7Q?key=anphZTNFUERPWXV3YnJQV2VzVVVFMFFVcGRDc3hB">Flagship</a>.
      </p>
      <p>
        In 2020, 300 Hack Clubbers received $50,000 for hardware projects.
        We launched <a target="_blank" href="https://scrapbook.hackclub.com">Scrapbook</a>, and
        hosted the <a target="_blank" href="https://summer.hackclub.com">Summer of Making</a>
        .
      </p>
      <p>
        <strong>This year, we're chartering a train across America.</strong>
      </p>
      <p>
        We're starting at{' '}
        <a target="_blank" href="https://goo.gl/maps/jNQB5kwYoLH11JqM6">
          Hack Club HQ
        </a> in Burlington, Vermont, heading south to New York City, west through Chicago, and crossing the Rockies on our way
        to San Francisco. From there, we'll follow the Pacific Ocean and end in Los Angeles, where we'll finish at SpaceX.
      </p>
      <p>
        Onboard, we're hosting the world's longest hackathon: 3,502 miles long.
      </p>
      <p>
        This won't be a regular hackathon. Imagine a travelling hacker festival, where the goal is to make beautiful and interesting things with code.
      </p>
      <p>
        The hackathon begins when we see the Atlantic Ocean and ends at the Pacific Ocean in Los Angeles. On The Hacker Zephyr, you'll meet eclectic guests, including clowns, political exiles, startup founders, and an acrobat.
      </p>
      <p>
        This trip is a gift from Hack Club to you and asks nothing in return. We
        want this to be a special, technical, and soul-expanding adventure that you'll remember for the rest of your life.
      </p>
      <p>
        Please register your interest below. We are trying to fit as many Hack Clubbers as we can on&nbsp;The&nbsp;Hacker&nbsp;Zephyr.
      </p>
      <hr />
      <Image
        src="./signatures/all.svg"
        sx={{ mx: 'auto', my: [2, 3], display: 'block', minWidth: '75%' }}
      />
    </Box>
  </Container>
)

export default Telegram
