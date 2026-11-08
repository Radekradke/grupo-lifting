import { WhatsappIcon } from './Icon'
import { wa } from '@/lib/links'

export function Wpp({ telefone, mensagem }: { telefone: string; mensagem: string }) {
  return (
    <a className="wpp" href={wa(telefone, mensagem)} target="_blank" rel="noopener" aria-label="Fale conosco no WhatsApp">
      <WhatsappIcon />
      <span>Fale no WhatsApp</span>
    </a>
  )
}
