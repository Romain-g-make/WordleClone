import { useState } from 'react'
import './App.css'
import styles from './grid.module.css'
import { Case } from './Case'
import { Row } from './Row'

function App() {

  return (
    <>
      <div className={styles.board} >
        <Row values={['z','a','o','p','a']} check={true} answer={"troue"}/>
        <Row values={['t','r','u','o','a']} check={true} answer={"troue"}/>
        <Row values={['c','r','o','u','e']} check={true} answer={"troue"}/>
        <Row values={['t','r','o','u','e']} check={true} answer={"troue"}/>
        <Row values={['','','','','']} check={true} answer={"troue"}/>
        
      </div>
    </>
  )
}

export default App
