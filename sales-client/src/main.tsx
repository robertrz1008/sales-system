import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthContextProvider } from './context/AuthContext'
import AppContextProvider from './context/AppContext.tsx'
import App from './App.tsx'
import './index.css'
import "./view/styles/main.css"
import "./view/styles/Sidebar.css"
import './App.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
    <AppContextProvider>
      <App />    
    </AppContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
