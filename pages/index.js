import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Text,
} from "theme-ui";
import Meta from "../components/meta";
import PlaceSlide from "../components/place-slide";
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

export default function App() {
  return (
    <Box sx={{ display: 'block', overflowY: "hidden" }}>
      <Meta />
      <Box
        sx={{
          maxHeight: "100vh",
          minWidth: "100vw",
          color: "white",
          backgroundImage:
            `linear-gradient(262.98deg, rgba(108, 90, 44, 0.68) 19.45%, rgba(217, 167, 41, 0.29) 82.13%), url(https://cloud-16uu33t6r-hack-club-bot.vercel.app/0california_zephyr_colorado_river_western_colorado.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "bottom right",
        }}
      >
        <Container
          sx={{
            minHeight: "100vh",
            width: "100vw",
            textShadow: "card",
            display: "flex",
            alignItems: "center",
            py: 3,
            pb: [5, 3],
          }}
        >
          <Box sx={{ maxWidth: "800px" }}>
            <Link
              href="https://hackclub.com"
              sx={{ textDecoration: "none!important" }}
            >
              <Heading
                sx={{
                  paddingLeft: "12px",
                  fontSize: "3em",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <Box
                  sx={{
                    border: "5px solid white",
                    width: "min-content",
                    px: 2,
                    borderRadius: 5,
                    width: "64px",
                    textAlign: "center",
                    textDecoration: "none!important",
                  }}
                >
                  h
                </Box>
              </Heading>
            </Link>
            <Box sx={{ pt: [3, 4] }}>
              <RellaxWrapper speed={7} horizontal={true}>
                <Heading
                  sx={{
                    fontSize: ["10vw", "48px"],
                    fontWeight: "900",
                    color: "white",
                    paddingLeft: ["4px", "12px"],
                  }}
                >
                  All aboard the
                </Heading>
              </RellaxWrapper>
              <Heading
                sx={{
                  fontSize: ["18vw", "144px"],
                  fontWeight: "900",
                  color: "white",
                  lineHeight: "0.925",
                  textTransform: "uppercase",
                  py: 1,
                  borderBottom: "6px solid white",
                  width: "min-content",
                  mb: "12px",
                }}
              >
                <Text>Hacker</Text> Zephyr
              </Heading>
              <Heading
                sx={{
                  fontSize: ["6vw", "36px"],
                  fontWeight: "600",
                  color: "white",
                  paddingLeft: "0px",
                }}
              >
                Trans-America, June 18th to 24th
              </Heading>
            </Box>
          </Box>
        </Container>
        <Container
          sx={{
            display: "flex",
            alignItems: "top",
            minHeight: "100vh",
            display: "none",
          }}
        >
          <Box
            sx={{
              maxWidth: "700px",
              border: "3px dashed white",
              height: "min-content",
              p: 3,
              borderRadius: 9,
              fontSize: "1.3em",
              mt: 1,
              mb: 6,
              bg: "#906B52",
              fontWeight: "500",
            }}
          >
            <Heading>Travel the transcontinental railroad</Heading>
            <br />
            In 1863 the first railroad bridged the east to west coast of
            America.
            <br />
            <br />
            In the summer of 2021, Hack Clubbers will make a pilgrimage out
            west. On the train will be other hackers, professional clowns,
            painters, and makers.
          </Box>
        </Container>
      </Box>
     
      <PlaceSlide
        text={`Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.`}
        title={"Stage 1: Vermont"}
        colour="#85865F"
        backgroundImage="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Vermont_Academy%2C_Saxtons_River%2C_Vermont.jpg/640px-Vermont_Academy%2C_Saxtons_River%2C_Vermont.jpg"
      />
      <PlaceSlide
        text={`Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.`}
        title={"Stage 2: New York"}
        colour="#927B97"
        backgroundImage="https://upload.wikimedia.org/wikipedia/commons/2/24/Essayons_in_New_York_Harbor.jpg"
      />
      <PlaceSlide
        text={`Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.`}
        title={"Stage 3: The Empty Plains"}
        colour="#AA7B78"
        backgroundImage="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/ROLLING_HILLS_IN_THE_OUTSKIRTS_OF_ATCHISON%2C_KANSAS%2C_SHOWING_AN_AREA_OF_LANDSCAPE_PAINTED_BY_GEORGE_CATLIN_BETWEEN..._-_NARA_-_557087.tif/lossy-page1-3000px-ROLLING_HILLS_IN_THE_OUTSKIRTS_OF_ATCHISON%2C_KANSAS%2C_SHOWING_AN_AREA_OF_LANDSCAPE_PAINTED_BY_GEORGE_CATLIN_BETWEEN..._-_NARA_-_557087.tif.jpg"
      />
      <PlaceSlide
        text={`Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.`}
        title={"Our ride: the TBD"}
        colour="#5F8893"
        backgroundImage="https://261.com/wp-content/gallery/super-dome/imgp0900web.jpg"
      />
      <Box
        sx={{
          maxHeight: "100vh",
          minWidth: "100vw",
          color: "white",
          borderTop: "8px solid #36271C",
          backgroundImage:
            `linear-gradient(262.98deg, rgba(108, 90, 44, 0.68) 19.45%, rgba(217, 167, 41, 0.29) 82.13%), url(/_next/image?url=https://cloud-3q64c1iul-hack-club-bot.vercel.app/0mark_twain_zephyr_ya.png&w=1920&q=90)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPositionY: "15%",
        }}
      >
        <Container
          sx={{ display: "flex", alignItems: "center", minHeight: "100vh" }}
        >
          <Box sx={{ maxWidth: "700px", pr: 3 }}>
            <Heading
              as="h1"
              sx={{ fontSize: ["2em", "4em"], textShadow: "card" }}
            >
              Hop aboard and join us for an adventure of a lifetime!
            </Heading>
            <Button sx={{ mt: 3 }}>
              Apply for a ticket (closes{" "}
              <Text sx={{ display: ["none", "inline"] }}>June 12th</Text>
              <Text sx={{ display: ["inline", "none"] }}>06/12</Text>)
            </Button>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          maxHeight: "100vh",
          minWidth: "100vw",
          color: "white",
          borderTop: "8px solid #36271C",
          background: `#906B52`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPositionY: "15%",
        }}
      >
        <Container sx={{ position: "relative" }}>
          <Box>
            <Heading
              as="h1"
              sx={{ mt: 4, fontSize: ["1.5em", "2.5em"], textShadow: "card" }}
            >
              Appendix
            </Heading>
            <Grid columns={[1, "1fr 1fr"]} sx={{ px: "3px", pt: 3, mt: 1 }}>
              <details>
                <summary>So, how much does this all cost?</summary>
                Hi
              </details>
              <details>
                <summary>Will I die on the train?</summary>
                No
              </details>
              <details>
                <summary>So, how much does this all cost?</summary>
                Hi
              </details>
              <details>
                <summary>Will I die on the train?</summary>
                No
              </details>
            </Grid>
            <Grid sx={{ pt: 5, pb: 3 }} columns={"2.8fr 1fr"}>
              <Flex sx={{ alignItems: "center" }}>
                <Box>
                  <Text as="p" sx={{ fontWeight: "800", pb: 1 }}>
                    A Project by Hack Club
                  </Text>
                  <Text as="p">
                    <Link sx={{ color: "white" }} href="https://hackclub.com">
                      Home
                    </Link>{" "}
                    |{" "}
                    <Link
                      sx={{ color: "white" }}
                      href="https://hackclub.com/slack"
                    >
                      Slack
                    </Link>{" "}
                    |{" "}
                    <Link
                      sx={{ color: "white" }}
                      href="https://workshops.hackclub.com"
                    >
                      Workshops
                    </Link>{" "}
                    |{" "}
                    <Link
                      sx={{ color: "white" }}
                      href="https://scrapbook.hackclub.com"
                    >
                      Scrapbook
                    </Link>
                  </Text>
                </Box>
              </Flex>
              <Box sx={{ textAlign: "right" }}>
                <Heading
                  sx={{
                    fontSize: "3em",
                    float: "right",
                  }}
                >
                  <Box
                    sx={{
                      border: "5px solid white",
                      width: "min-content",
                      px: 2,
                      borderRadius: 5,
                      width: "64px",
                      textAlign: "center",
                    }}
                  >
                    h
                  </Box>
                </Heading>
              </Box>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
