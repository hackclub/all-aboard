import { Box, Image, Text } from "@theme-ui/components";
import { RellaxWrapper } from "react-rellax-wrapper";

const HorizontalRellax = ({children, ...params}) => (
  <Box sx={{transform: 'rotate(90deg)', position: 'absolute', top: 0, left: 0}}>
    <RellaxWrapper {...params}>
      <Box sx={{ transform: 'rotate(-90deg)' }}>
        {children}
      </Box>
    </RellaxWrapper>
  </Box>
)

export default () => (
  <>
    <Box sx={{height: '50vh'}}>
      {/* This is just a spacer */}
    </Box>
    <Text>Hello world</Text>
    <Box sx={{height: '50vh'}}>
      {/* This is just a spacer */}
    </Box>
    <Text>Chapter 2</Text>
    <Box sx={{height: '50vh'}}>
      {/* This is just a spacer */}
    </Box>

    <Box sx={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1}}>
      <Box sx={{position: 'relative', top: 0}}>
        <HorizontalRellax speed={0.5}>
          <Image src="/train-valley-parallax/0.png" sx={{width: '100vw'}}></Image>
        </HorizontalRellax>
        <HorizontalRellax speed={1}>
          <Image src="/train-valley-parallax/1.png" sx={{width: '100vw'}}></Image>
        </HorizontalRellax>
        <HorizontalRellax speed={2}>
          <Image src="/train-valley-parallax/2.png" sx={{width: '100vw'}}></Image>
        </HorizontalRellax>
        <HorizontalRellax speed={3}>
          <Image src="/train-valley-parallax/3.png" sx={{width: '100vw'}}></Image>
        </HorizontalRellax>
        <HorizontalRellax speed={4}>
          <Image src="/train-valley-parallax/4.png" sx={{width: '100vw'}}></Image>
        </HorizontalRellax>
        <HorizontalRellax speed={5}>
          <Image src="/train-valley-parallax/5.png" sx={{width: '100vw'}}></Image>
        </HorizontalRellax>
        <HorizontalRellax speed={1}>
          <Image src="/train-valley-parallax/6.png" sx={{width: '100vw'}}></Image>
        </HorizontalRellax>
        <HorizontalRellax speed={5}>
          <Image src="/train-valley-parallax/7.png" sx={{width: '100vw'}}></Image>
        </HorizontalRellax>
      </Box>
    </Box>

    <Box sx={{height: '50vh'}}>
      {/* This is just a spacer */}
    </Box>
    <Text>Section 2</Text>
    <Box sx={{height: '50vh'}}>
      {/* This is just a spacer */}
    </Box>
    <Text>Chapter 2</Text>
    <Box sx={{height: '50vh'}}>
      {/* This is just a spacer */}
    </Box>
  </>
)