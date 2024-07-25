import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav.jsx'
import { Layout } from './Layout.jsx'

function App() {
  return (
    <main>
      <Nav></Nav>
      <Layout></Layout>
    </main>
  )
}

export default App
