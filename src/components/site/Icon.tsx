// Ícones em traço (24x24), desenhados para o site. Sem dependência externa.
const PATHS = {
  'arrow-right': <path d="M5 12h14M13 6l6 6-6 6" />,
  'arrow-up-right': <path d="M7 17 17 7M8 7h9v9" />,
  'chevron-down': <path d="m6 9 6 6 6-6" />,
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  phone: (
    <path d="M21 16.4v3a2 2 0 0 1-2.2 2 19.6 19.6 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.6 19.6 0 0 1 3.2 3.7 2 2 0 0 1 5.2 1.5h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L9.2 9.3a16 16 0 0 0 5.5 5.5l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.5s-7-6.1-7-11.6a7 7 0 0 1 14 0c0 5.5-7 11.6-7 11.6z" />
      <circle cx="12" cy="9.8" r="2.6" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <path d="M17.4 6.6h.01" />
    </>
  ),
  // serviços / estrutura
  wrench: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z" />
  ),
  pulse: <path d="M3 12h4l3-8 4 16 3-8h4" />,
  plug: <path d="M9 2v5M15 2v5M6 7h12v3a6 6 0 0 1-12 0zM12 16v6" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.2-4.2" />
    </>
  ),
  shield: <path d="M12 21.5s8-3.8 8-10V5l-8-3-8 3v6.5c0 6.2 8 10 8 10zM8.5 12l2.5 2.5 4.5-5" />,
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7z" />,
  award: (
    <>
      <circle cx="12" cy="8.5" r="5.5" />
      <path d="M8.4 12.6 7 21.5l5-2.8 5 2.8-1.4-8.9" />
    </>
  ),
  flask: <path d="M9 3h6M10 3v6.3L4.6 18.6A1.6 1.6 0 0 0 6 21h12a1.6 1.6 0 0 0 1.4-2.4L14 9.3V3M7.3 15h9.4" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.2a6.5 6.5 0 0 1 3.5 5.8" />
    </>
  ),
  wallet: (
    <>
      <path d="M19 7V5.5A1.5 1.5 0 0 0 17.5 4H5a2 2 0 0 0 0 4h14.5A1.5 1.5 0 0 1 21 9.5v9a1.5 1.5 0 0 1-1.5 1.5H5a2 2 0 0 1-2-2V6" />
      <path d="M16.5 14h.01" />
    </>
  ),
  warehouse: <path d="M3 21V9l9-6 9 6v12M7 21v-8h10v8M7 17h10" />,
  truck: (
    <>
      <path d="M2.5 6h11v10h-11zM13.5 10h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </>
  ),
  building: <path d="M5 21V4h10v17M15 9h4v12M3 21h18M8.5 8h1M11.5 8h1M8.5 12h1M11.5 12h1M8.5 16h1M11.5 16h1" />,
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3 13h18" />
    </>
  ),
  drop: <path d="M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11z" />,
  coffee: <path d="M4 9h13v4.5A5.5 5.5 0 0 1 11.5 19h-2A5.5 5.5 0 0 1 4 13.5zM17 11h1.5a2.5 2.5 0 0 1 0 5H17M8 3.5v2.5M12 3.5v2.5" />,
} as const

export type IconName = keyof typeof PATHS

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  )
}

export function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.6.8 5 2.3 7L4.6 28l6.3-1.6c1.9 1 4 1.6 6.2 1.6 6.6 0 12-5.3 12-11.9C28 8.3 22.6 3 16 3zm0 22.1c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-3.7 1 1-3.6-.3-.4c-1.1-1.6-1.7-3.5-1.7-5.5 0-5.5 4.7-9.9 10.5-9.9 2.8 0 5.4 1 7.4 2.9 2 1.9 3.1 4.4 3.1 7 0 5.5-4.7 9.9-10.5 9.9zm5.8-7.4c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.6-1.8-1.8-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.2 1.4 3.4c.2.2 2.4 3.6 5.8 5 .8.3 1.4.5 1.9.7.8.2 1.6.2 2.2.1.7-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4z" />
    </svg>
  )
}
