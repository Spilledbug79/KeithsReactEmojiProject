import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import EmojiApp from './EmojiApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmojiApp />
  </StrictMode>,
)
