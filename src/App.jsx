import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav.jsx'
import Content from './components/Content.jsx'

function App() {
  const [count, setCount] = useState(0)
  return (
    <main>
      <Nav></Nav>
      <Content></Content>
    </main>
  )
}

export default App
