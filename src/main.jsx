import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TermsOfUse from './pages/TermsOfUse.jsx';
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>, // Sua página principal (Home)
  },
  {
    path: "/TermsOfUse",
    element: <TermsOfUse/>, // A página que você quer visualizar
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
