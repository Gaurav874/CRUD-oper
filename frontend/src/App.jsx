import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './component/Register'
import Update from './component/Update'
import Delete from './component/Delete'
import View from './component/View'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{color:'red'}}>THIS IS CRUD FUNCTION</h1>
      <Register/>
      <View/>
      <Update/>
      <Delete/>
    </>
  )
}

export default App
