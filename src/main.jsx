import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TermsOfUse from './pages/TermsOfUse.jsx';
import App from './App.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import './index.css'
import { iniciarTema } from './utils/tema.js'
import { iniciarRolagem } from './utils/rolagem.js'

iniciarTema()
iniciarRolagem()
import AreasOfPractice from './pages/AreasOfPractice.jsx';
import Team from './pages/Team.jsx';
import AreasOfActivity from './pages/AreasOfActivity.jsx';
import Insights from './pages/Insights.jsx';
import { EstudosUseState } from './pages/EstudosUseState.jsx';
import ContactUs from './pages/ContactUs.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>, // Sua página principal (Home)
    },
    {
      path: "/termos-de-uso",
      element: <TermsOfUse/>, 
    },
    {
      path: "/politica-de-privacidade",
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
    // home
    {
      path: "/frentes",
      element: <AreasOfActivity/>
    },
    {
      path: "/insights",
      element: <Insights/>
    },
    {
      path: '/estudos',
      element: <EstudosUseState/>
    },
    {
      path: '/contato',
      element: <ContactUs/>
    },
  ],
  {
    // O import.meta.env.BASE_URL lê o atributo 'base' do vite.config.js
    // Localmente será "/" e no GitHub Pages será "/i4brasil/"
    basename: import.meta.env.BASE_URL,
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)