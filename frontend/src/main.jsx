import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/global.js'

import { BrowserRouter as Router } from 'react-router-dom'
import { UserProvider } from './context/auth.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <Router>
      <UserProvider>
        <App />
      </UserProvider>
    </Router>
  </StrictMode>,
)
