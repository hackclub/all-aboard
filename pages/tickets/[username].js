import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Card,
  Button,
  Flex,
  Image,
  Link
} from 'theme-ui'
import Head from 'next/head'
import Tilt from 'react-tilt'
import Meta from '../../components/meta'

export default function App({ username, name }) {
  return (
    <Box
      sx={{
        backgroundColor: '#906b52',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%23694e3c' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <Meta
        title={`${name} is going from coast to coast on the Hacker Zephyr this summer.`}
        description="Starting in Burlington on the 16th of July and ending in LA on the 23rd."
        image={`/api/ticket?username=${username}`}
      />
      <Container variant="copy">
        <Flex
          sx={{
            minHeight: '100vh',
            justifyContent: 'center',
            justifyItems: 'center',
            alignItems: 'center',
            alignContent: 'center',
            color: 'white'
          }}
        >
          <Box sx={{}}>
            <Heading
              sx={{
                textAlign: 'center',
                width: '100%',
                fontSize: '4em',
                mb: 3,
                textShadow: 'card'
              }}
            >
              Welcome aboard!
            </Heading>
            <Tilt
              className="Tilt"
              options={{ max: 7, perspective: 200 }}
              style={{ width: '100%' }}
            >
              <Image
                src={`/api/ticket?username=${username}`}
                sx={{
                  width: '100%',
                  boxShadow: 'elevated',
                  borderRadius: 'extra'
                }}
              />
            </Tilt>
            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Button variant="lg" sx={{ mr: 3 }}>
                Share on Twitter
              </Button>
              <Button variant="lg" sx={{ mr: 3 }}>
                Share on LinkedIn
              </Button>
              <Button variant="lg" as="a" download href={`/api/ticket?username=${username}`}>Download Image</Button>
            </Box>
          </Box>
        </Flex>
      </Container>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/tilt.js/1.0.3/tilt.jquery.min.js"></script>
    </Box>
  )
}

export async function getStaticPaths() {
  const AirtablePlus = require('airtable-plus')

  const airtable = new AirtablePlus({
    baseID: 'appoBQQwL8ABXjasg',
    apiKey: process.env.AIRTABLE_TICKETS_TOKEN,
    tableName: 'GitHub Usernames'
  })

  let paths = await airtable.read()

  paths = paths.map(x => ({
    params: { username: x['fields']['GitHub Usernames'] }
  }))
  console.log(paths)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { Octokit } = require('@octokit/core')
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
  let details = await octokit.request('GET /users/{username}', {
    username: params.username
  })
  console.log(details.data)
  return {
    props: { username: params.username, name: details.data.name }
  }
}
