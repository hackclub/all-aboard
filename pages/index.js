import Banner from '../components/flag'
import Meta from '../components/meta'
import Header from '../components/header'
import CTA from '../components/cta'
import Telegram from '../components/telegram'
import Gallery from '../components/gallery'
import FAQ from '../components/faq'
import Footer from '../components/footer'
// import MultiplayerMouse from '../components/multiplayer-mouse'

export default function App() {
  return (
    <>
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
