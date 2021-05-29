import { Grid, Image, Container, Heading, Box, Text } from 'theme-ui'

const Photo = ({ alt, src, height, display,width }) => {
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
          height: ['150px', height],
          display: 'flex',
          alignItems: 'flex-end',
          width
        }}
      >
        <Box sx={{ color: 'black',bg: 'white', width: '100%', pt: ['8px', '8px'], pb: ['8px', '0px'], textAlign: 'center', display: ['none', 'block'] }}>
          <Text>{alt}</Text>
        </Box>
      </Box>
    </Box>
  )
}

const Gallery = () => (<Container>
  <Container sx={{ bg: '#011C36', my: [3, 5], mt: [1, 1], p: ['16px', 4], borderRadius: '4px', border: '1px dashed #e8e0cc', boxShadow: 'card' }}>
    <Heading variant="title" sx={{ marginBlockStart: '0em', marginBlockEnd: '1em',mt: [1, 1], mb: 3}}>
      Oh, the Places You'll Go
    </Heading>
    <Heading variant="subtitle" mb={[3]}>You'll be spending time both on and off the train. Here's the view.</Heading>
    <Grid columns={[1, '3fr 1fr']} gap={2}>
      <Grid gap={2} columns={[2, null, 3]}>
        <Photo
          src="https://cloud-ggkutuzcq-hack-club-bot.vercel.app/0image_from_ios.jpg"
          alt="Hack Club HQ, Vermont"
          height="190px"
        />
        <Photo
          src="https://cloud-g4sxjumak-hack-club-bot.vercel.app/0image_from_ios__5_.jpg"
          alt="View from Vermont HQ"
          height="190px"
        />
        <Photo
          src="https://cloud-a5q1goov4-hack-club-bot.vercel.app/0image.png"
          alt="Our office in Vermont"
          height="190px"
        />
        <Photo
          src="https://cloud-7gbjuxaig-hack-club-bot.vercel.app/6imgp0904-web.jpg"
          alt="Our dining/observation car"
          height="190px"
        />
        <Photo
          src="https://cloud-a5q1goov4-hack-club-bot.vercel.app/0image.png"
          alt="Our office in Vermont"
          height="190px"
        />
        <Photo
          src="https://cloud-7gbjuxaig-hack-club-bot.vercel.app/6imgp0904-web.jpg"
          alt="Our dining/observation car"
          height="190px"
        />

        {/* <Image
        src="https://cloud-3q64c1iul-hack-club-bot.vercel.app/0mark_twain_zephyr_ya.png"
        sx={{ objectFit: 'cover', borderRadius: '4px', height: '250px' }}
      />
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/2/24/Essayons_in_New_York_Harbor.jpg"
        sx={{
          objectFit: 'cover',
          borderRadius: '4px',
          height: 'calc(234px / 2)',
          width: '100%'
        }}
      />
      <Image
        src="https://261.com/wp-content/gallery/super-dome/imgp0900web.jpg"
        sx={{
          objectFit: 'cover',
          borderRadius: '4px',
          height: 'calc(234px / 2)',
          width: '100%'
        }}
      />
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Vermont_Academy%2C_Saxtons_River%2C_Vermont.jpg/640px-Vermont_Academy%2C_Saxtons_River%2C_Vermont.jpg"
        sx={{
          objectFit: 'cover',
          borderRadius: '4px',
          height: 'calc(234px / 2)',
          width: '100%'
        }}
      />
      <Image
        src="https://i.pinimg.com/originals/eb/d8/ed/ebd8edaa5fcaf01254ef442c8f3627b1.jpg"
        sx={{
          objectFit: 'cover',
          borderRadius: '4px',
          height: 'calc(234px / 2)',
          width: '100%'
        }}
      />
      <Image
        src="https://api.time.com/wp-content/uploads/2015/01/483781925.jpg"
        sx={{
          objectFit: 'cover',
          borderRadius: '4px',
          height: 'calc(234px / 2)',
          width: '100%'
        }}
      />
      <Image
        src="http://i.imgur.com/gxP87hS.jpg"
        sx={{
          objectFit: 'cover',
          borderRadius: '4px',
          height: 'calc(234px / 2)',
          width: '100%'
        }}
      /> */}
      </Grid>
      <Photo
        src="https://cloud-7gbjuxaig-hack-club-bot.vercel.app/296588846_3020587271366702_1557924645603115008_o.jpg"
        alt="Rooms on the sleeper car"
        display={["none", "flex"]}
        height="100%"
        width="100%"
      />
    </Grid>
    </Container></Container>
)

export default Gallery
