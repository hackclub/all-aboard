import { Grid, Image, Container } from 'theme-ui'
const Gallery = () => (
  <Container>
    <Grid columns={['2fr 3fr']} sx={{ my: '1em' }}>
      <Image
        src="https://cloud-3q64c1iul-hack-club-bot.vercel.app/0mark_twain_zephyr_ya.png"
        sx={{ objectFit: 'cover', borderRadius: '4px', height: '250px' }}
      />
      <Grid columns={3}>
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
        />
      </Grid>
    </Grid>
  </Container>
)

export default Gallery