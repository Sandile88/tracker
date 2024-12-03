import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CoinContextProvider } from './context/CoinContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CoinContextProvider>
      {/* now all the components inside the app component can access the context data */}
      <App />
    </CoinContextProvider>
  </StrictMode>,
)
