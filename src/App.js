import React from 'react'
import Header from './components/Header'
import Numbers from './components/Numbers'

function App() {

  let arr = []
  for (let i = 0; i <= 31; i++) {
    arr.push(i)
  }


  return (
    <>
      <Header />
      <Numbers number={arr} />
    </>
  )
}

export default App
