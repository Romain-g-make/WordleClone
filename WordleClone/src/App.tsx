import { useState } from 'react'
import './App.css'
import styles from './case.module.css'
import { Case } from './Case'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={styles.case} >
        <Case value="a" position={0} color='black' answer="c" ></Case>
      </div>
    </>
  )
}

export default App
