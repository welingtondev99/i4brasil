// Conjunto único de ícones do rodapé: mesmo traço, mesma grade 24x24 e mesmo tamanho.
const paths = {
  whatsapp: (
    <>
      <path d="M4 20l1.2-3.6A8 8 0 1 1 8.4 18.8L4 20z" />
      <path d="M9 10.5c.2 1.6 1.9 3.6 3.6 4.1l1.2-1.2 1.7.8c-.2 1-1 1.6-2 1.6-2.7 0-5.6-2.9-5.6-5.6 0-1 .6-1.8 1.6-2l.8 1.7-1.2 1.2" />
    </>
  ),
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5L12 12.5l8.5-6" />
    </>
  ),
  localizacao: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10.5V16M8 7.8v.1M12 16v-5.5M12 13a2.2 2.2 0 0 1 4.4 0V16" />
    </>
  ),
}

const FooterIcon = ({ nome }) => (
  <svg
    className="footerIcon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {paths[nome]}
  </svg>
)

export default FooterIcon
