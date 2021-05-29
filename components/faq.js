import questions from '../lib/questions'
import {
  Container,
  Grid,
  Heading,
  Box,
  Text
} from 'theme-ui'

const FAQ = () => (
  <Container sx={{
    mt: 2,
    // bg: '#011C36',
  }}>
    <Heading as="h1" variant="title" my={[4, 4]} mb={4} sx={{ textShadow: 'text', textAlign: 'center' }}>
      Glossary
    </Heading>
    <Grid columns={[1, 2]} gap={'2em'}>
      {questions.map(({ question, answer }, index) => (
        <Box
          key={index}
          sx={{
            border: '1px dashed white',
            borderRadius: '4px',
            px: '2.5em',
            pt: '2.0em',
            pb: '1.7em',
            textShadow: 'text',
            bg: 'rgba(100, 30, 50, 0.20)',
          }}
        >
          <Text sx={{
            fontWeight: '700',
            mb: '1.3em',
            display: 'inline-block'
          }}>{question}</Text>
          <br />
          <Text sx={{
            display: 'block',
            // mx: [3],
          }}>{answer}</Text>
        </Box>
      ))}
    </Grid>
  </Container>
)

export default FAQ