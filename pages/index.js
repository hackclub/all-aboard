import Banner from '../components/flag'
import Meta from '../components/meta'
import Header from '../components/header'
import CTA from '../components/cta'
import Telegram from '../components/telegram'
import Gallery from '../components/gallery'
import FAQ from '../components/faq'
import Footer from '../components/footer'
// import MultiplayerMouse from '../components/multiplayer-mouse'
import {
  Modal,
  ModalTitle,
  ModalContent,
  ModalFooter
} from '@mattjennings/react-modal'
import { Button, Text } from 'theme-ui'
import {useState} from 'react'

function MyModal(props) {
  return (
    <Modal {...props} sx={{ bg: '#C44D4D', borderRadius: 4, width: '400px', py: 3, minHeight: '1rem'}}>
      <>
        <ModalTitle>
          <Text
            sx={{
              fontSize: 4,
              fontWeight: 'bold'
            }}
          >
            Join us in NYC, SF & LA!
          </Text>
        </ModalTitle>
        <ModalContent>
          We're opening up spaces in our schedule for Hack Clubbers to join us in these cities! Depending on the location, there may be activities to participate in.
        </ModalContent>
        <ModalFooter sx={{justifyContent: 'flex-start', mt: 2 }}>
          <Button color="black" onClick={()=> props.setOpen(false)}>OK</Button> <Button color="black" as="a" href="/meetups" ml={2}>Learn More</Button>
        </ModalFooter>
      </>
    </Modal>
  )
}

export default function App() {
  const [open, setOpen] = useState(true)
  return (
    <>
      <MyModal open={open} setOpen={setOpen} />
      <Meta />
      <Banner />
      {/* <MultiplayerMouse /> */}
      <Header />
      <Telegram />
      <Gallery />
      <CTA />
      <FAQ />
      <Footer />
    </>
  )
}
