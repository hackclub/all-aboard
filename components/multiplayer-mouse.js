import { useState } from "react"
import useWebSocket, { ReadyState } from 'react-use-websocket'
import GhostCursor from "./cursor"

const ENDPOINT = 'https://cursor-chat-multiplayer.maxwofford.repl.co'

const MultiplayerMouse = () => {
  const socket = io(ENDPOINT)
  // User session
  const [userID, setUserID] = useState(null)
  socket.on('assign id', ({ id }) => {
    setUserID(id)
  })

  // Other users/cursors
  const [cursors, setCursors] = useState({})
  socket.on('user moved', ({ id, x, y, ts}) => {
    cursors[id] = {x, y, ts}
    setCursors(cursors)
  })
  socket.on('user left', ({ id }) => {
    console.log(Object.keys(cursors), id)
    delete cursors[id]
    setCursors(cursors)
    console.log(Object.keys(cursors), id)
  })

  // Track own mouse position
  let mousePos = { x: 0, y: 0 }
  const emitMousePos = () => {
    if (userID) {
      socket.emit('move user', {
        x: (mousePos.x / window.innerWidth) * 100,
        y: (mousePos.y / window.innerHeight) * 100,
        ts: Date.now()
      })
    }
  }
  // Track mouse movement
  useEffect(() => {
    const setFromEvent = e => {
      mousePos = { x: e.pageX, y: e.pageY }
      emitMousePos()
    }
    window.addEventListener("mousemove", setFromEvent)

    // cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", setFromEvent)
    }
  }, [])

  useEffect(() => {
    // document.onmousemove = event => {
    //   setXMousePos(event.pageX)
    //   setYMousePos(event.pageY)
    //   emitMousePos()
    // }
    // document.onscroll = event => {
    //   if (xLastScrolled != window.scrollX) {
    //     setXMousePos(xLastScrolled - window.scrollX)
    //     setXLastScrolled(window.scrollX)
    //   }
    //   if (yLastScrolled != window.scrollY) {
    //     setYMousePos(yLastScrolled - window.scrollY)
    //     setYLastScrolled(window.scrollY)
    //   }
    //   emitMousePos()
    // }

    // socket.on('assign id', ({ id }) => {
    //   setUserID(id)
    // })

    // cleanup useEffect when component unmounts
    return () => {

    }
  }, [])

  return (
    <>
      {Object.keys(cursors).map((key) => (
        <GhostCursor x={cursors[key].x} y={cursors[key].y} key={key} />
      ))}
    </>
  )
}

export default MultiplayerMouse