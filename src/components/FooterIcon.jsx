// Conjunto único de ícones do rodapé: mesmo traço, mesma grade 24x24 e mesmo tamanho.
const paths = {
  // balão de conversa com o fone dentro (o fone é reduzido à metade, então o traço dobra para ficar igual)
  whatsapp: (
    <>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        transform="translate(6.6 6.3) scale(.48)"
        strokeWidth="3.75"
      />
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
