import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { ThemeProvider } from './components/provider/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(

  <ThemeProvider defaultTheme='dark' storageKey="vite-ui-theme">
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>

)
