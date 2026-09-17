type WppProps = {
  phone: string
  message?: string
}

export function WppFloat({ phone, message = 'Olá! Vim pelo site do Grupo Lifting.' }: WppProps) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a
      className="wpp-float"
      href={href}
      target="_blank"
      rel="noopener"
      aria-label="Fale conosco no WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="30" height="30" fill="#fff" aria-hidden="true">
        <path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.6.8 5 2.3 7L4.6 28l6.3-1.6c1.9 1 4 1.6 6.2 1.6 6.6 0 12-5.3 12-11.9C28 8.3 22.6 3 16 3zm0 22.1c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-3.7 1 1-3.6-.3-.4c-1.1-1.6-1.7-3.5-1.7-5.5 0-5.5 4.7-9.9 10.5-9.9 2.8 0 5.4 1 7.4 2.9 2 1.9 3.1 4.4 3.1 7 0 5.5-4.7 9.9-10.5 9.9zm5.8-7.4c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.6-1.8-1.8-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.2 1.4 3.4c.2.2 2.4 3.6 5.8 5 .8.3 1.4.5 1.9.7.8.2 1.6.2 2.2.1.7-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4z" />
      </svg>
    </a>
  )
}
