// import React from 'react'

import One from "./components/One"
import Two from "./components/Two"

function App() {
  const info = {
    id:101,
    name: "yaho"
  }
  const arr = [10,20,70];
  return (
    <>
    <Two rr={arr}/>
    <One obj = {info}/>
    </>
  )
}

export default App