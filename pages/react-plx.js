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

const getParallaxData = (ref, idx) => {
  const start = (idx-1)*100
  const end   = (idx-0)*100
  const mid   = start + (end-start)/2
  const parallaxData = [
    {
      // start: 'self',
      start: `${start}vh`,
      end:   `${end}vh`,
      properties: [
        {
          startValue: -20,
          endValue:    120,
          property: 'translateX',
          unit: '%',
        },
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
  const ref = useRef()
  return (
    <Plx
      style={{opacity: 0, }}
      parallaxData={getParallaxData(ref, props.idx)}
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
      <PlxComp idx={1}>
        <div style={{}}>
          <h1>Burlington,Vermont</h1>
        </div>
      </PlxComp>
      <PlxComp idx={2}>
        <div style={{}}>
          <h1>New York City, New York</h1>
        </div>
      </PlxComp>
      <PlxComp idx={3}>
        <div style={{}}>
          <h1>Chicago, Illinois</h1>
        </div>
      </PlxComp>
      <PlxComp idx={4}>
        <div style={{}}>
          <h1>Denver, Colorado</h1>
        </div>
      </PlxComp>
      <PlxComp idx={5}>
        <div style={{}}>
          <h1>San Francisco, California</h1>
        </div>
      </PlxComp>
      <PlxComp idx={6}>
        <div style={{}}>
          <h1>Los Angeles, California</h1>
        </div>
      </PlxComp>
      <PlxComp idx={7}>
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
          flex: 1;
        }
        `}
      </style>
    </div>
    
  );
}

export default Component