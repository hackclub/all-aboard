import { ParallaxProvider, ParallaxBanner, Parallax } from 'react-scroll-parallax'
import {
  Box,
  Container,
  Image,
  Heading
} from 'theme-ui'

const perspective = 8
const parallaxScaleFactor = zDistance => (
  (perspective - zDistance) / perspective
)
const parallaxStyle = {
  position: 'absolute',
  // top: 0,
  left: 0,
  // right: 0,
  bottom: 0,
}

export default () => (
  <>
    <Box style={{
      position: 'relative',
      width: '100%',
      height: '500px',
      overflowX: 'hidden',
      overflowY: 'auto',
      perspective: '100px',
      backgroundImage: 'url(/train-valley-parallax/0.png)',
      backgroundPosition: 'center top',
      backgroundSize: '800px',
      backgroundRepeat: 'no-repeat',
    }}>
      {/* <img 
      src="/train-valley-parallax/1.png"
      style={{
        position: 'absolute',
        width: '800px',
        transform: 'translateZ(-300px) scale(4)',
      }}></img> */}
      <Box style={{
        position: 'absolute',
        width: '100%',
        minWidth: '100%',
        height: '500px',
        backgroundImage: 'url(/train-valley-parallax/1.png)',
        backgroundPosition: 'center top',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        transform: 'translateZ(-300px) scale(4)',
      }}></Box>
      {/* <Image
        src="/train-valley-parallax/1.png"
        style={{
          transform: 'translateZ(-250px) scale(3.5)',
          ...parallaxStyle
        }}
        />
      <Image
        src="/train-valley-parallax/2.png"
        style={{
          transform: 'translateZ(-200px) scale(3)',
          ...parallaxStyle
        }}
        />
      <Image
        src="/train-valley-parallax/3.png"
        style={{
          transform: 'translateZ(-150px) scale(2.5)',
          ...parallaxStyle
        }}
        />
      <Image
        src="/train-valley-parallax/4.png"
        style={{
          transform: 'translateZ(-100px) scale(2)',
          ...parallaxStyle
        }}
        />
      <Image
        src="/train-valley-parallax/5.png"
        style={{
          transform: 'translateZ(-50px) scale(1.5)',
          ...parallaxStyle
        }}
        />
      <Image
        src="/train-valley-parallax/6.png"
        style={{
          transform: 'translateZ(0px) scale(1)',
          ...parallaxStyle
        }}
        /> */}
    </Box>
  {/* <ParallaxProvider>
    <Box style={{width: '100%', height: '500px', overflow: 'hidden'}}>
    <Image src="/train-valley-parallax/0.png" style={{position: 'relative'}}></Image>
    <Parallax offsetYMin={-100} offsetYMax={100}>
      <Image src="/train-valley-parallax/1.png"></Image>
    </Parallax>
    </Box> */}
    {/* Padding to test out scrolling */}
    <Box style={{height: '100vh'}}></Box>
    {/* <ParallaxBanner
      layers={[
        {
          image: '/train-valley-parallax/0.png',
          amount: 0
        },
        {
          image: '/train-valley-parallax/1.png',
          amount: 0.1
        },
        {
          image: '/train-valley-parallax/2.png',
          amount: 0.2
        },
        {
          image: '/train-valley-parallax/3.png',
          amount: 0.3
        },
        {
          image: '/train-valley-parallax/4.png',
          amount: 0.4
        },
        {
          image: '/train-valley-parallax/5.png',
          amount: 0.5
        },
        {
          image: '/train-valley-parallax/6.png',
          amount: 0.6
        },
        {
          image: '/train-valley-parallax/7.png',
          amount: 0.7
        },
      ]}
      style={{height:'100%'}}>

      <Heading>The Hack Club Zephyr</Heading>
    </ParallaxBanner> */}
  {/* </ParallaxProvider> */}
  </>
)