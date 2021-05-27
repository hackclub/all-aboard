import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Card,
  Button,
  Flex,
  Link
} from 'theme-ui'
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

export default function placeSlide({ title, text, colour, backgroundImage }) {
  return (

    <Box
      sx={{
        maxHeight: "100vh",
        minWidth: '100vw',
        color: 'white',
        borderTop: '8px solid #36271C',
        backgroundAttachment: "fixed",
        backgroundImage: `linear-gradient(262.98deg, rgba(108, 90, 44, 0.68) 19.45%, rgba(217, 167, 41, 0.29) 82.13%), url(/_next/image?url=${backgroundImage}&w=1920&q=90)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPositionY: '80%'
      }}
    >
      <Container
        sx={{ display: 'flex', alignItems: 'top', minHeight: '60vh' }}
      >
        <Card
          sx={{
            maxWidth: '700px',
            bg: colour,
            border: '3px dashed white',
            height: 'min-content',
            p: [3, 3, 3],
            mt: 4,
            fontSize: '1.3em',
            color: 'white'
          }}
        >
          <b>{title}</b>
          <br />
            {text}
          </Card>
      </Container>
    </Box>

  )
}