import { useState } from 'react'

import './App.css'
import { Case } from './Case'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Case value="a" position={1} color='black'></Case>
    </>
  )
}

export default App
