import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {SWProvider} from './SWContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SWProvider>
      <App />
    </SWProvider>
  </React.StrictMode>,
)
