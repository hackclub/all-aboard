import { useRef } from 'react'
import Plx from 'react-plx'

const sceneNames = {
  'vermont': 'vermont',
  // 'nyc',
  // 'chicago',
  'rockies': 'rockies',
  // 'utah',
  // 'sf',
  'la': 'la',
}

const getParallaxData = (cssProp1, idx) => {
  const start = (idx-1)*100
  const end   = (idx-0)*100
  const mid   = start + (end-start)/2
  const parallaxData = [
    {
      // start: 'self',
      start: `${start}vh`,
      end:   `${end}vh`,
      properties: [
        {...cssProp1},
      ],
    }, {
      // start: 'self',
      start: `${start}vh`,
      end:   `${mid}vh`,
      properties: [
        {
          startValue: 0,
          endValue:   1,
          property: 'opacity',
        },
      ],
    },  {
      // start: 'self',
      start: `${mid}vh`,
      end:   `${end}vh`,
      properties: [
        {
          startValue: 1,
          endValue:   0,
          property: 'opacity',
        },
      ],
    },
  ]
  return parallaxData
}

const PlxComp = (props) => {
  // const count = 4
  // let viewHeight = 0
  // if (typeof window !== 'undefined') {
  //   viewHeight = window.innerHeight
  // }
  return (
    <Plx
      style={{
        opacity: 0,
        backgroundImage: props.imgSrc,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover', // FIXME: literally everyone says not to do this
      }}
      parallaxData={getParallaxData(props.cssProp1, props.idx)}
      animateWhenNotInViewport={false}
    >
      {props.children}
    </Plx>
  )
}

const Component = (props) => {
  return (
    <div className="Plx-wrapper">
      {/* <div style={{minHeight: '100vh'}}>
        <h1>Hi Hack Club!</h1>
      </div> */}
      <PlxComp idx={1} imgSrc="url(/train-nyc-parallax/0.png)"
          cssProp1={{property: 'translateX', unit: '%', startValue: -150, endValue: 100, }}>
      </PlxComp>
      <PlxComp idx={1} imgSrc="url(/train-nyc-parallax/1.png)"
          cssProp1={{property: 'translateX', unit: '%', startValue: 100, endValue: -150, }}>
      </PlxComp>
      <PlxComp idx={1} imgSrc="url(/train-nyc-parallax/2.png)"
          cssProp1={{property: 'translateX', unit: '%', startValue: -200, endValue: 100, }}>
      </PlxComp>
      <PlxComp idx={1} imgSrc="url(/train-nyc-parallax/3.png)"
          cssProp1={{property: 'translateX', unit: '%', startValue: 200, endValue: -100, }}>
      </PlxComp>
      <PlxComp idx={1} imgSrc="url(/train-nyc-parallax/4.png)"
          cssProp1={{property: 'translateX', unit: '%', startValue: -100, endValue: 200, }}>
      </PlxComp>
      <PlxComp idx={1} imgSrc="url(/train-nyc-parallax/5.png)"
          cssProp1={{property: 'translateX', unit: '%', startValue: 100, endValue: -200, }}>
      </PlxComp>
      <PlxComp idx={1} imgSrc="url(/train-nyc-parallax/6.png)"
          cssProp1={{property: 'translateX', unit: '%', startValue: -150, endValue: 150, }}>
      </PlxComp>
      <PlxComp idx={1} imgSrc="url(/train-nyc-parallax/7.png)"
          cssProp1={{property: 'translateX', unit: '%', startValue: 150, endValue: -150, }}>
      </PlxComp>
      <PlxComp idx={1} imgSrc="url(/train-nyc-parallax/8.png)"
          cssProp1={{property: 'translateX', unit: '%', startValue: 200, endValue: -250, }}>
      </PlxComp>
      <PlxComp idx={1} imgSrc="url(/train-nyc-parallax/9.png)"
          cssProp1={{property: 'translateX', unit: '%', startValue: -250, endValue: 200, }}>
      </PlxComp>
      <PlxComp idx={1} imgSrc="none"
          cssProp1={{property: 'translateX', unit: '%', startValue: -100, endValue: 100, }}>
        <div>
          <h1>NYC</h1>
          <br /><br />
        </div>
      </PlxComp>
      <PlxComp idx={1} imgSrc="none"
          cssProp1={{property: 'translateX', unit: '%', startValue: 100, endValue: -100, }}>
        <div>
            <br /><br />
            <h1>New York</h1>
        </div>
      </PlxComp>

      <PlxComp idx={2} cssProp1={{
        property: 'translateX',
        unit: '%',
        startValue: 100,
        endValue:  -100,
      }}>
        <div style={{}}>
          <h1>New York City</h1>
          <br /><br />
        </div>
      </PlxComp>
      <PlxComp idx={2} cssProp1={{
        property: 'translateX',
        unit: '%',
        startValue:-100,
        endValue:   100,
      }}>
        <div style={{}}>
          <br /><br />
          <h1>New York</h1>
        </div>
      </PlxComp>

      <PlxComp idx={3} cssProp1={{
        property: 'translateY',
        unit: '%',
        startValue: -100,
        endValue:    100,
      }}>
        <div style={{}}>
          <h1>Chicago</h1>
          <br /><br />
        </div>
      </PlxComp>
      <PlxComp idx={3} cssProp1={{
        property: 'translateY',
        unit: '%',
        startValue:  100,
        endValue:   -100,
      }}>
        <div style={{}}>
          <br /><br />
          <h1>Illinois</h1>
        </div>
      </PlxComp>

      <PlxComp idx={4} cssProp1={{
        property: 'translateY',
        unit: '%',
        startValue:  100,
        endValue:   -100,
      }}>
        <div style={{}}>
          <h1>Denver</h1>
          <br /><br />
        </div>
      </PlxComp>
      <PlxComp idx={4} cssProp1={{
        property: 'translateX',
        unit: '%',
        startValue:  100,
        endValue:   -100,
      }}>
        <div style={{}}>
          <br /><br />
          <h1>Colorado</h1>
        </div>
      </PlxComp>

      <PlxComp idx={5} cssProp1={{
        property: 'translateX',
        unit: '%',
        startValue: -100,
        endValue:    100,
      }}>
        <div style={{}}>
          <h1>San Francisco</h1>
          <br /><br />
        </div>
      </PlxComp>
      <PlxComp idx={5} cssProp1={{
        property: 'translateY',
        unit: '%',
        startValue:  100,
        endValue:   -100,
      }}>
        <div style={{}}>
          <br /><br />
          <h1>California</h1>
        </div>
      </PlxComp>

      <PlxComp idx={6} cssProp1={{
        property: 'translateX',
        unit: '%',
        startValue: -100,
        endValue:    100,
      }}>
        <div style={{}}>
          <h1>Los Angeles</h1>
          <br /><br />
        </div>
      </PlxComp>
      <PlxComp idx={6} cssProp1={{
        property: 'translateX',
        unit: '%',
        startValue:  100,
        endValue:   -100,
      }}>
        <div style={{}}>
          <br /><br />
          <h1>California</h1>
        </div>
      </PlxComp>

      <PlxComp idx={7} cssProp1={{
        property: 'transformX',
        unit: '%',
        startValue: 100,
        endValue:   -25,
      }}>
        <div style={{}}>
          <h1>~ FIN ~</h1>
        </div>
      </PlxComp>

      {/* <div style={{minHeight: '100vh'}}></div> */}
      <style>
        {`
        .Plx-wrapper {
          min-height: 800vh;
          overflow: hidden;
          position: relative;
        }
        .Plx{
          display: flex;
          min-height: 100vh;
          width: 100vw;
          align-items: center;
          justify-content: center;
          position: fixed;
        }
        .Plx > div {
        }
        `}
      </style>
    </div>
    
  );
}

export default Component