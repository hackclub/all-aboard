import { Grid, Container, Heading, Box, Text } from 'theme-ui'
import Route from './route'

const Photo = ({ alt, src, height, display, width, backgroundPosition }) => {
  return (
    <Box sx={{ display, boxShadow: 'card' }}>
      <Box
        sx={{
          bg: 'white',
          backgroundImage: `url(${src})`,
          borderWidth: ['4px', '8px'],
          borderColor: ['white', 'white'],
          border: 'solid',
          position: 'relative',
          backgroundSize: 'cover',
          borderRadius: 'small',
          height: ['150px', height],
          display: 'flex',
          alignItems: 'flex-end',
          width,
          backgroundPosition
        }}
      >
        <Box sx={{ color: 'black', bg: 'white', width: '100%', pt: ['8px', '8px'], pb: ['8px', '0px'], textAlign: 'center', display: ['none', 'block'] }}>
          <Text>{alt}</Text>
        </Box>
      </Box>
    </Box>
  )
}

const Gallery = () => (
  <Container variant="container" p={[0]}>
    <Box sx={{ bg: '#011C36', my: [0, null, null, 5], mt: [0, null, null, 1], p: [3, 4], borderRadius: ['none', null, null, '4px'], border: ['none', null, null, '1px dashed #e8e0cc'], boxShadow: 'card' }}>
      <Heading variant="title" sx={{ marginBlockStart: '0em', marginBlockEnd: '1em', mt: [1, 1], mb: 3 }}>
        Oh, the Places You'll Go
      </Heading>
      <Heading variant="subtitle" mb={[3]}>
        You'll be spending time both on and off the train. Here's the view.
      </Heading>
      <Route />
      <Grid columns={[1, '3fr 1fr']} gap={2}>
        <Grid gap={2} columns={[2, null, 3]}>
          <Photo
            src="https://cloud-ggkutuzcq-hack-club-bot.vercel.app/0image_from_ios.jpg"
            alt="Hack Club HQ, Vermont"
            height="190px"
          />
          <Photo
            src="https://cloud-mf6zzzirr-hack-club-bot.vercel.app/0img_0964.jpg"
            alt="Grand Central station, NYC"
            height="190px"
          />
          <Photo
            src="https://cloud-7gbjuxaig-hack-club-bot.vercel.app/6imgp0904-web.jpg"
            alt="Our dining/observation car"
            height="190px"
          />
          <Photo
            src="https://images.unsplash.com/photo-1500445032980-ef63c4f210ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
            alt="The Rockies (Colorado)"
            height="190px"
          />
          <Photo
            src="https://cloud-r47tfktl4-hack-club-bot.vercel.app/2img_1526.jpg"
            alt="Neighborhood, two blocks from SF hotel"
            height="190px"
            backgroundPosition="bottom"
          />
          <Photo
            src="https://cloud-qh9vdrmup-hack-club-bot.vercel.app/0img_4175.jpg"
            alt="El Segundo Beach, just west of SpaceX"
            height="190px"
            backgroundPosition="center"
          />
        </Grid>
        <Photo
          src="https://cloud-7gbjuxaig-hack-club-bot.vercel.app/296588846_3020587271366702_1557924645603115008_o.jpg"
          alt="Rooms on the sleeper car"
          display={["none", "flex"]}
          height="100%"
          width="100%"
        />
      </Grid>
    </Box>
  </Container>
)

export default Gallery
