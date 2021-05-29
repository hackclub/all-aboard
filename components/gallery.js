import { Grid, Image, Container, Heading, Box, Text } from 'theme-ui'

const Photo = ({ alt, src }) => {
  return (
    <Box sx={{ bg: 'white', p: [1, 2] }}>
      <Image src={src} alt={alt} />
      <Box sx={{ w: 1 }}>
        <Text>{alt}</Text>
      </Box>
    </Box>
  )
}

const Gallery = () => (
  <Container sx={{ bg: '#011C36', my: [3, 5], p: 4 }}>
    <Heading variant="title" my={[3,5]}>Oh, the Places You'll Go</Heading>
    <Grid gap={2} columns={2, null, 4}>
      <Photo src="https://cloud-ggkutuzcq-hack-club-bot.vercel.app/0image_from_ios.jpg"
        alt="Hack Club HQ, Vermont" />
      <Photo src="https://cloud-g4sxjumak-hack-club-bot.vercel.app/0image_from_ios__5_.jpg"
        alt="View from Vermont HQ" />
      <Photo src="https://cloud-a5q1goov4-hack-club-bot.vercel.app/0image.png"
        alt="Our office in Vermont" />
      <Photo src="https://cloud-7gbjuxaig-hack-club-bot.vercel.app/6imgp0904-web.jpg"
        alt="Super-Dome, our dining/observation car" />
      <Photo src="https://cloud-7gbjuxaig-hack-club-bot.vercel.app/296588846_3020587271366702_1557924645603115008_o.jpg"
        alt="Rooms on the sleeper car have fold-out beds" />
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
  </Container>
)

export default Gallery