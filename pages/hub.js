import { Box, Grid, Container, Heading, Card, Text } from 'theme-ui'
import { useState } from 'react'

export default function Hub() {
  const [currentPage, setCurrentPage] = useState('schedule')
  const keyAddresses = [
    {
      label: 'Guzman Y Gomez Bukit Timah',
      address: '10 Jalan Serene, Serene Centre, 258748',
      googleMaps:
        'https://maps.google.com/maps/dir//guzman+y+gomez/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x31da1be62ba9f00d:0x3ec021460a81b71?sa=X'
    },
    {
      label: 'FairPrice Bukit Timah',
      address: '10 Jalan Serene, Serene Centre, 258748',
      googleMaps:
        'https://maps.google.com/maps/dir//guzman+y+gomez/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x31da1be62ba9f00d:0x3ec021460a81b71?sa=X'
    }
  ]
  const emergencyContacts = [
    {
      name: 'Tina',
      phone: '+65 8791 3372'
    }
  ]
  const schedule = [
    {
      date: '15/07/2021',
      items: [
        {
          title: 'Welcomes Begin',
          time: '12:00pm',
          address:
            'Hilton Burlington, 60 Battery St, Burlington, VT 05401, United States',
          googleMaps:
            'https://maps.google.com/maps/dir//hilton+burlington+vt+google+maps/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4cca7af0f4a901e7:0x9387c428f4901901?sa=X'
        },
        {
          title: 'Optional Walk to City Market Burlington',
          time: '4:00pm',
          description:
            'Shop for a picnic dinner of baguettes, cheeses, sliced salami and ham, grapes, watermelon, crackers, nuts, sliced tomatoes, pickles',
          address: 'Meet at the Hilton Lobby???',
          googleMaps:
            'https://maps.google.com/maps/dir//hilton+burlington+vt+google+maps/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4cca7af0f4a901e7:0x9387c428f4901901?sa=X'
        },
        {
          title: 'Picnic Dinner',
          time: '7:00pm',
          address: 'Lake Champlain Waterfront'
        },
        {
          title: 'Exploration Time',
          time: '8:00pm',
          address: 'Church Street'
        },
        {
          title: 'Nighttime Curfew',
          time: '10:30pm',
          address:
            'Hilton Burlington, 60 Battery St, Burlington, VT 05401, United States',
          googleMaps:
            'https://maps.google.com/maps/dir//hilton+burlington+vt+google+maps/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4cca7af0f4a901e7:0x9387c428f4901901?sa=X'
        }
      ]
    },
    {
      date: '16/07/2021',
      items: [
        {
          title: 'Free Time',
          time: '9:00am',
          description: 'You must feed yourself.'
        },
        {
          title: 'Meet at Hilton for Bus Pickup',
          time: '12:00pm',
          address:
            'Hilton Burlington, 60 Battery St, Burlington, VT 05401, United States',
          googleMaps:
            'https://maps.google.com/maps/dir//hilton+burlington+vt+google+maps/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4cca7af0f4a901e7:0x9387c428f4901901?sa=X'
        },
        {
          title: 'Spend time at HQ',
          time: '12:30pm',
          address: '15 Falls Road, Shelburne, VT, 05482'
        },
        {
          title: 'Bus Leaves HQ',
          time: '2:30pm',
          address: '15 Falls Road, Shelburne, VT, 05482'
        },
        {
          title: 'Games @ Shelburne Farms',
          time: '3:00pm',
          address: '1611 Harbor Rd, Shelburne, VT, 05482, United States'
        },
        {
          title: 'Bus Departs Shelburne Farms',
          time: '5:30pm',
          address: '1611 Harbor Rd, Shelburne, VT, 05482, United States'
        },
        {
          title: 'Adventures & dinner at Mt. Philo',
          time: '6:00pm',
          address: '7 Inn Rd, Charlotte, VT 05445'
        },
        {
          title: 'Bus Departs Mt. Philo',
          time: '10:00pm',
          address: '7 Inn Rd, Charlotte, VT 05445'
        },
        {
          title: 'Nighttime Curfew',
          time: '10:30pm',
          address:
            'Hilton Burlington, 60 Battery St, Burlington, VT 05401, United States',
          googleMaps:
            'https://maps.google.com/maps/dir//hilton+burlington+vt+google+maps/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4cca7af0f4a901e7:0x9387c428f4901901?sa=X'
        }
      ]
    },
    {
      date: '17/07/2021',
      items: [
        {
          title: 'Breakfast',
          time: '7:00AM',
          address: 'Hilton Burlington Meeting Room'
        },
        {
          title: 'Bus Departs the Hilton to NYC',
          time: '8:00AM',
          address:
            'Hilton Burlington, 60 Battery St, Burlington, VT 05401, United States'
        },
        {
          title: 'NYC Exploration',
          time: '3:00PM',
          address: 'Begin in Battery Park'
        },
        {
          title: 'Dinner',
          time: '9:00PM',
          address: 'Bryant Park -> Exact Address??'
        },
        {
          title: 'Enter Hotel',
          time: '10:30PM',
          address: 'Hilton Double Tree, 350 W 40th St, New York, NY 10018'
        }
      ]
    },
    {
      date: '18/07/2021',
      items: [
        {
          title: 'Free Time Around NYC',
          time: '8:00AM',

          description: "You'll need to get your dinner!",
          address: 'Hub @ ???? Diner'
        },
        {
          title: 'Announcement @ Hotel',
          time: '1:00PM',
          address: 'Hilton Double Tree, 350 W 40th St, New York, NY 10018'
        },
        {
          title: 'Depart from Hotel to Train Station',
          time: '1:45PM',
          address: 'Hilton Double Tree, 350 W 40th St, New York, NY 10018'
        },
        {
          title: 'Train Departs to Chicago & Hacking Begins',
          time: '3:40PM',
          address: '??? Station'
        }
      ]
    },
    {
      date: '19/07/2021',
      items: [
        {
          title: 'Get Ready to Debark',
          time: '9:30AM',
          description:
            "Make sure you've packed everything, things could go hectic."
        },
        {
          title: 'Debark Train at Chicago',
          time: '9:50AM',
          address: '??? Station'
        },
        {
          title: 'River Walk around Chicago',
          time: '10:00AM',
          address: '???'
        },
        {
          title: 'Board Zephyr Train at Chicago',
          time: '1:30PM',
          address: '??? Station'
        },
        {
          title: 'First Dinner',
          time: '6:00PM'
        },
        {
          title: 'Second Dinner',
          time: '7:30PM'
        },
        {
          title: 'Fireside Chat with Tom Preston Warner',
          time: '8:30PM'
        }
      ]
    },
    {
      date: '20/07/2021',
      items: [
        {
          title: 'Midnight Party',
          time: '12:00AM',
          description: '???'
        },
        {
          title: 'First Dinner',
          time: '5:30PM'
        },
        {
          title: 'Second Dinner',
          time: '7:00PM'
        },
        {
          title: 'HackerJazz Lounge Opens',
          time: '8:00PM'
        }
      ]
    },
    {
      date: '21/07/2021',
      items: [
        {
          title: 'Passing through the Rockies',
          time: '7:00AM'
        },
        {
          title: 'Disembark the Train',
          time: '4:15PM',
          description: '???'
        },
        {
          title: 'Get Your Own Dinner',
          time: '6:00PM',
          address: 'Ferry Building ???'
        },
        {
          title: 'Music in Hotel Lobby',
          time: '8:00PM',
          address: '???'
        }
      ]
    },
    {
      date: '22/07/2021',
      items: [
        {
          title: 'Free Time & Get your own breakfast',
          time: '8:00AM'
        },
        {
          title: 'Optional Cliff Stohl Visit',
          time: '10:00AM',
          address: '???'
        },
        {
          title: 'Optional Vercel Meetup with Guillermo',
          time: '3:00PM',
          address: '650 California St, San Francisco, CA 94108'
        },
        {
          title: 'Park Dinner',
          time: '7:00PM',
          address: 'Dolores St &, 19th St, San Francisco, CA 94114'
        }
      ]
    },
    {
      date: '23/07/2021',
      items: [
        {
          title: 'Bus to Emeryville Train Station Departs',
          time: '6:45AM'
        },
        {
          title: 'Amtrak Train Departs',
          time: '8:20AM',
          address: 'Emeryville Station'
        },
        {
          title: 'Arrive in LA',
          time: '9:00PM',
          address: '???'
        },
        {
          title: 'Charter Bus Departs to Hotel Erwin /  Larry’s Loft',
          time: '9:05PM',
          address: '??? Station'
        }
      ]
    },
    {
      date: '24/07/2021',
      items: [
        {
          title: 'Continental Breakfast',
          time: '8:00AM',
          address: 'Hotel Meeting Room'
        },
        {
          title: 'Charter Bus to SpaceX Departs',
          time: '9:30AM',
          address: 'Hotel Lobby?'
        },
        {
          title: 'Sunset Dinner',
          time: '7:00PM',
          address: '???'
        }
      ]
    },
    {
      date: '25/07/2021',
      items: [
        {
          title: 'Charter Bus to LAX Departs',
          time: '8:00AM',
          address: 'Hotel Lobby???'
        }
      ]
    }
  ]
  return (
    <Box bg="rgba(1,28,54,1)">
      <Box
        sx={{
          minHeight: ['0vh', '40vh'],
          backgroundImage: `linear-gradient(262.98deg, rgba(196,77,77,0.7) 19.45%, rgba(196,77,77,0.7) 82.13%), url(https://cloud-16uu33t6r-hack-club-bot.vercel.app/0california_zephyr_colorado_river_western_colorado.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom right',
          display: 'flex',
          alignItems: 'flex-end'
        }}
      >
        <Container py={[3, 4]}>
          <Heading as="h1" sx={{ fontSize: [5, 7] }}>
            The Zephyr InfoHub
          </Heading>
        </Container>
      </Box>
      <Container pt={[3, 4]} bg="rgba(1,28,54,1)">
        <Grid sx={{ minHeight: '100vh' }} columns={[1, '2fr 1fr']}>
          <Box
            mt={'-24px'}
            pb={4}
            sx={{
              display: currentPage == 'schedule' ? 'block' : ['none', 'block'],
              position: 'relative'
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                height: '100%',
                borderLeft: '1px solid white',
                width: '30px',
                mt: '41px',
                left: '6px',
                zIndex: 1
              }}
            ></Box>
            {schedule.map(day => (
              <Box key={day.date} sx={{ zIndex: 999 }}>
                <Heading mt={4} color="rgba(196,77,77,1)" sx={{ zIndex: 999 }}>
                  <Text sx={{ zIndex: 999, display: 'inline-block' }}>●</Text>{' '}
                  <Text ml={3} color="white">
                    {day.date}
                  </Text>
                </Heading>
                {day.items.map(event => (
                  <Box key={day.date + event.time}>
                    <Heading as="h3" mt={4} sx={{ display: 'flex' }}>
                      <Text sx={{ ml: '0.5px' }}>● </Text>
                      <Text ml={'25px'}>
                        {event.time}: {event.title}
                      </Text>
                    </Heading>
                    <Box sx={{ ml: '35px' }}>
                      <p>{event.description}</p>
                      <p>
                        <i>{event.address}</i>
                      </p>
                    </Box>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: currentPage == 'emergency' ? 'block' : ['none', 'block']
            }}
          >
            <Card bg="rgba(196,77,77,1)" sx={{ borderRadius: 2, p: [3, 3, 3] }}>
              <Heading>Emergency Contact Information</Heading>
              {emergencyContacts.map(({ name, phone }, i) => (
                <Box mt={3} key={phone}>
                  <b>{name}</b>:{' '}
                  <a href={`tel:${phone}`} target="_blank">
                    {phone}
                  </a>
                </Box>
              ))}
            </Card>
            <Card
              bg="rgba(196,77,77,1)"
              sx={{ borderRadius: 2, p: [3, 3, 3] }}
              mt={3}
            >
              <Heading>Key Addresses</Heading>
              {keyAddresses.map(({ label, googleMaps, address }, i) => (
                <Box mt={3} key={googleMaps}>
                  <b>{label}</b>:{' '}
                  <a href={googleMaps} target="_blank">
                    {address}
                  </a>
                </Box>
              ))}
            </Card>
          </Box>
        </Grid>
      </Container>
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          py: 3,
          bg: 'black',
          width: '100vw',
          textAlign: 'center',
          justifyItems: 'center',
          justifyContent: 'center',
          display: ['flex', 'none'],
          textDecoration: 'underline'
        }}
      >
        <Text mr={3} onClick={() => setCurrentPage('schedule')}>
          Schedule
        </Text>
        <Text onClick={() => setCurrentPage('emergency')}>Emergency Info</Text>
      </Box>
    </Box>
  )
}
