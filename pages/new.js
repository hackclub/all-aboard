import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Card,
  Image,
  Button,
  Flex,
  Link
} from 'theme-ui'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Meta from '../components/meta'
import Header from '../components/head'

let signatures = [
  'https://github.com/hackclub/workshops/blob/main/public/signature-light.png?raw=true',
  'https://github.com/hackclub/workshops/blob/main/public/signature-light.png?raw=true',
  'https://github.com/hackclub/workshops/blob/main/public/signature-light.png?raw=true',
  'https://github.com/hackclub/workshops/blob/main/public/signature-light.png?raw=true'
]

export default function App() {
  useEffect(() => {
    const socket = io('https://cursor-chat-multiplayer.sampoder.repl.co', {
      transport: ['websocket']
    })
    let userID
    let initialized = false
    var body = document.body,
        html = document.documentElement

      var height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      )

    socket.on('assign id', ({ id }) => {
      userID = id
    })
    socket.on('user joined', ({ numUsers }) => {
      console.log('another user joined, now at', numUsers)
    })
    socket.on('user left', ({ numUsers, id }) => {
      console.log('another user left, now at', numUsers)
      let el = document.querySelector(`#${id}`)
      if (el) {
        el.remove()
      }
    })
    socket.on('user moved', ({ id, x, y, ts }) => {
      let el = document.querySelector(`#${id}`)
      if (!el) {
        el = document.createElement('div')
        el.className = 'cursor'
        el.id = id
        document.body.appendChild(el)
      }
      if (!el.dataset.lastMove || el.dataset.lastMove < ts + 50) {
        el.dataset.lastMove = ts
        el.style.transform = `translate(${(x * window.innerWidth) / 100}px, ${
          (y * height) / 100
        }px)`
      }
    })

    const handleMouseMove = event => {
      
      if (userID) {
        let x = (event.pageX / window.innerWidth) * 100
        let y = (event.pageY / height) * 100
        let data = { x, y, ts: Date.now() }
        socket.emit('move user', data)
      }
    }

    document.onmousemove = handleMouseMove
  }, [])
  let questions = [
    {
      question: 'Who is eligible to board the train?',
      answer:
        'All members of the Hack Club Slack who are fully vaccinated by the boarding date are eligible to board the train. Limited tickets are available, though.'
    },
    {
      question: 'My parents have concerns, how can I convince them?',
      answer: (
        <>
          We have prepared a guide for parents. You can access it here. If
          needed, you're parents can also contact us at team@hackclub.com
        </>
      )
    },
    {
      question: 'Will housing, food and drink be provided?',
      answer:
        'Yes. All essentials will be covered by us. Housing will take place in both sleeper trains and reputable hotels.'
    },
    {
      question: 'What will I need to participate?',
      answer:
        'We recommend bringing clothing, toiletries and electronics. A more extensive list will be provided at a later date.'
    },
    {
      question: 'Will travel to Burlington and from LA be covered?',
      answer:
        'Yes, we will reemburse the costs of flights and / or trains required to get to Burlington and home from LA. '
    },
    {
      question: 'How can I get in touch?',
      answer: (
        <>
          If you've got more questions, feel free to contact the team at
          team@hackclub.com and we will do our best to help.
        </>
      )
    }
  ]
  return (
    <Box
      sx={{ bg: '#FD5F38', minHeight: '100vh', color: 'white', py: 4, pt: 0, overflowX: 'hidden' }}
    >
      <Head>
        <script src="https://cursor-chat-multiplayer.sampoder.repl.co/socket.io/socket.io.js"></script>
      </Head>
      <Meta />
      <Header />
      <Container>
      <Box
          sx={{
            borderRadius: '4px',
            bg: 'white',
            width: 'calc(100% + 3px)',
            ml: '-1.5px',
            py: '1.5px',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'left', mb: 3, mt: 4
          }}
        >
        <Container
          sx={{ border: '1px dashed black', borderRadius: '4px', color: 'black',width: 'calc(100% - 3px)', }}
        >
          <p>Every summer Hack Club does something special.</p>
          <p>
            In 2019 we brought 75 Hack Club leaders to San Francisco for
            Flagship. Last year, we gave a student $50k to distribute as
            hardware grants, launched scrapbook, and hosted the Summer of
            Making.
          </p>
          <p>
            This year, we're chartering a train across America, and hosting the
            world's longest hackathon (in miles).
          </p>{' '}
          <p>
            We're starting at Hack Club HQ in Burlington Vermont, heading south
            to New York City, then crossing the rockies on our way to San
            Francisco, and end in Los Angeles.
          </p>
          <p>
            On the trip you'll code, make music, build, and write poetry. On the
            train you'll meet startup founders, an acrobat, 3 political exiles,
            and a philosopher.
          </p>
          <p>
            This trip is a gift from Hack Club to you and asks nothing in
            return. We want this to be a special, eclectic, and
            thought-provoking journey that you'll remember for the rest of your
            life.
          </p>
          <p>
            If you're interested in joining us, please register your interest
            below. We are trying to fit as many Hack Clubbers as we can on The
            Hacker Zephyr.
          </p>
          <p>
            <Flex>
              {signatures.map(image => (
                <Image src={image} sx={{ height: '80px', mr: '8px' }} />
              ))}
            </Flex>
          </p>
        </Container></Box>
        <Box
          sx={{
            borderRadius: '4px',
            bg: 'white',
            width: 'calc(100% + 3px)',
            ml: '-1.5px',
            py: '1.5px',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <Button
            sx={{
              width: 'calc(100% - 3px)',
              textAlign: 'left',
              border: '1px dashed black',
              margin: 'auto',
              fontWeight: 600,
              ':hover,:focus': {
                boxShadow: 'none',
                bg: 'white'
              }
            }}
            as="a"
            href="/api/sign-in-slack"
          >
            Apply for a ticket through Hack Club Slack (Closes 12th July)
          </Button>
        </Box>

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
        <p>
          <Heading as="h1">Frequently Asked Questions</Heading>
        </p>
        <Grid columns={2}>
          {questions.map(({ question, answer }) => (
            <Box
              sx={{
                border: '1px dashed white',
                borderRadius: '4px',
                px: '16px',
                py: '1em'
              }}
            >
              <Text sx={{ fontWeight: '600' }}>{question}</Text> <br /> {answer}
            </Box>
          ))}
        </Grid>
        <Grid sx={{ pt: 5 }} columns={'2.8fr 1fr'}>
          <Flex sx={{ alignItems: 'center' }}>
            <Box>
              <Text as="p" sx={{ fontWeight: '800', pb: 1 }}>
                A Project by Hack Club
              </Text>
              <Text as="p">
                <Link sx={{ color: 'white' }} href="https://hackclub.com">
                  Home
                </Link>{' '}
                |{' '}
                <Link sx={{ color: 'white' }} href="https://hackclub.com/slack">
                  Slack
                </Link>{' '}
                |{' '}
                <Link
                  sx={{ color: 'white' }}
                  href="https://workshops.hackclub.com"
                >
                  Workshops
                </Link>{' '}
                |{' '}
                <Link
                  sx={{ color: 'white' }}
                  href="https://scrapbook.hackclub.com"
                >
                  Scrapbook
                </Link>
              </Text>
            </Box>
          </Flex>
          <Box sx={{ textAlign: 'right' }}>
            <Heading
              sx={{
                fontSize: '3em',
                float: 'right'
              }}
            >
              <Box
                sx={{
                  border: '5px solid white',
                  width: 'min-content',
                  px: 2,
                  borderRadius: 5,
                  width: '64px',
                  textAlign: 'center'
                }}
              >
                h
              </Box>
            </Heading>
          </Box>
        </Grid>
      </Container>
      <style>
        {`
        .cursor {
          position: absolute;
          top: 0;
          left: 0;
          height: 35px;
          width: 35px;
          border-radius: 50%;
          /* border: 2px solid black; */
          /* background-color: blue; */
          transition: 0.1s;
          background-image: url('cursor.svg');
          filter: grayscale(100%);
          opacity: 0.5;
        }

        html, body {
          max-width: 100vw;
          overflow-x: hidden;
          width: 100vw;
        }
        `}
      </style>
    </Box>
  )
}
