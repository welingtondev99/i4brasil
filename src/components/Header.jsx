import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LinkRota from './LinkRota'
import TemaToggle from './TemaToggle'
import './header.css'
import './button.css'
import '../App.css'
import Logo from '../images/logo-i4-branca.webp'
import MenuIcon from './MenuIcon'
import { publico } from '../utils/publico'

// Guias do site atual da i4 (i4brasil.org). A logo já leva para o início.
// Com `href`, o link rola até a seção da home (ou leva à home já na seção, vindo de outra página).
// Sem `href`, é um botão provisório: aparece, mas ainda não leva a lugar nenhum.
const LINKS = [
  { id: 'quem-somos', href: publico('#quem-somos'), texto: 'QUEM SOMOS' },
  { id: 'corpo-tecnico', texto: 'CORPO TÉCNICO' },
  { id: 'diretoria-executiva', texto: 'DIRETORIA EXECUTIVA' },
  { id: 'presenca', href: publico('#presenca'), texto: 'ALCANCE NACIONAL' },
  { id: 'solucoes', texto: 'SOLUÇÕES' },
]

const Header = () => {
  const { pathname } = useLocation()
  const naHome = pathname === '/'
  const [aberto, setAberto] = useState(false)
  const [ativo, setAtivo] = useState('')
  const [rolou, setRolou] = useState(false)

  // Barra transparente sobre a abertura da home; sólida depois de rolar e nas outras páginas
  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 40)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  // Destaca no menu a seção que está na tela (só na home)
  useEffect(() => {
    if (!naHome) return
    const alvos = LINKS.filter((l) => l.href).map((l) => document.getElementById(l.id)).filter(Boolean)
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => { if (e.isIntersecting) setAtivo(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    alvos.forEach((a) => observador.observe(a))
    return () => observador.disconnect()
  }, [naHome])

  // Fecha o menu do celular com Esc
  useEffect(() => {
    if (!aberto) return
    const aoTeclar = (e) => { if (e.key === 'Escape') setAberto(false) }
    window.addEventListener('keydown', aoTeclar)
    return () => window.removeEventListener('keydown', aoTeclar)
  }, [aberto])

  const itens = LINKS.map((l) =>
    l.href ? (
      <a
        key={l.id}
        href={l.href}
        aria-current={naHome && ativo === l.id ? 'true' : undefined}
        onClick={() => setAberto(false)}
      >
        {l.texto}
      </a>
    ) : (
      // provisório: sem destino ainda
      <a
        key={l.id}
        href='#'
        aria-disabled='true'
        onClick={(e) => { e.preventDefault(); setAberto(false) }}
      >
        {l.texto}
      </a>
    )
  )

  const transparente = naHome && !rolou && !aberto

  return (
    <>
    <TemaToggle />
    <header className={`navegation ${transparente ? 'navegation--topo' : ''}`}>
      <div className='container navInterna'>
        <Link className='logoLink' to='/' aria-label='i4 Brasil, página inicial'>
          <img src={Logo} alt='' />
        </Link>

        <nav className='navegation-center' aria-label='Principal'>
          {itens}
        </nav>

        <LinkRota className='btn btn--inverso btn--sm contatoTopo' to='/contato'>CONTATO</LinkRota>

        <button
          type='button'
          className='toogleButton'
          aria-expanded={aberto}
          aria-controls='menu-movel'
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setAberto((v) => !v)}
        >
          {aberto ? (
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' fill='none' aria-hidden='true'>
              <path d='M6 6l12 12' />
              <path d='M18 6L6 18' />
            </svg>
          ) : (
            <MenuIcon />
          )}
        </button>
      </div>

      {aberto && (
        <nav id='menu-movel' className='menuMovel' aria-label='Menu'>
          <div className='container menuMovelLista'>
            {itens}
            <LinkRota className='btn btn--inverso btn--md menuContato' to='/contato' onClick={() => setAberto(false)}>
              CONTATO
            </LinkRota>
          </div>
        </nav>
      )}
    </header>
    </>
  )
}

export default Header
