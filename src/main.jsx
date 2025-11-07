import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// Removed @vercel/analytics/next import — this package is for Next.js projects and
// will throw when used in a Vite/CRA app. If you want Vercel analytics on a non-Next
// app, use the generic snippet or a different analytics provider.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
  <App />
    </BrowserRouter>
  </StrictMode>,
)
