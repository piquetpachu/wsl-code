import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sumas from './suma.jsx'
import App from './App.jsx'
import Contador from './contador.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Sumas />
    <Contador />

  </StrictMode>,
)
