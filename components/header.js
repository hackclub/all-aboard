import { Box, Image } from 'theme-ui'
import usePrefersMotion from '../lib/use-prefers-motion'

const Static = () => (
  <Box
    as="section"
    className="backgroundVideoMania"
    sx={{
      overflow: 'hidden',
      position: 'relative',
      bg: '#011C36',
      height: ['60vh', '100vh'],
      textAlign: 'center'
    }}
  >
    <Image
      src="/header.png"
      alt="This summer, we're closing Zoom. All aboard the Hacker Zephyr. Trans America, Burlington Vermont - Los Angeles California"
      sx={{
        mt: '5vh',
        height: ['50vh !important', '90vh !important'],
        maxHeight: '90vh !important',
        bg: '#011C36'
      }}
    />
  </Box>
)

const Header = () => {
  const prefersMotion = usePrefersMotion()
  if (prefersMotion) {
    return (
      <Box
        as="section"
        className="backgroundVideoMania"
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bg: '#011C36',
          height: ['60vh', '100vh'],
        }}
      >
        <Box
          as="video"
          autoPlay
          muted
          playsInline
          duration={2000}
          sx={{
            position: 'absolute',
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
            mt: '5vh',
            height: ['50vh !important', '90vh !important'],
            width: '100% !important',
            maxHeight: '90vh !important'
          }}
        >
          <source src="/Untitled Project 300000.mp4" />
          <p>
            This summer, we're closing Zoom. All aboard the Hacker Zephyr. Trans
            America, Burlington Vermont - Los Angeles California
          </p>
        </Box>
        <style>{`
          @-moz-document url-prefix() {
          .backgroundVideoMania { background-color: #011A2E }
          }
      `}</style>
      </Box>
    )
  } else {
    return <Static />
  }
}

export default Header
