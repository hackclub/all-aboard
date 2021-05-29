import { Image } from 'theme-ui'
const GhostCursor = ({
  x,
  y
}) => (
  <Image src="cursor.png" sx={{
    transform: `translate(${x}px, ${y}px)`,
    position: 'fixed',
  }} />
)
export default GhostCursor