import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TermsOfUse from './pages/TermsOfUse.jsx';
import App from './App.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import './index.css'
import AreasOfPractice from './pages/AreasOfPractice.jsx';
import Team from './pages/Team.jsx';
import AreasOfActivity from './pages/AreasOfActivity.jsx';
import Insights from './pages/Insights.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>, // Sua página principal (Home)
  },
  {
    path: "/termos-de-uso",
    element: <TermsOfUse/>, // A página que você quer visualizar
  },
  {
    path: "/Politica-de-privacidade",
    element: <PrivacyPolicy/>
  },
  {
    path: "/areas-de-atuacao",
    element: <AreasOfPractice/>
  },
  {
    path: "/equipe",
    element: <Team/>
  },
  {
    path: "/frentes",
    element: <AreasOfActivity/>
  },
  {
    path: "/insights",
    element: <Insights/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
