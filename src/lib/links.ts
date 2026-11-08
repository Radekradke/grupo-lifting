/** Link de conversa no WhatsApp com mensagem já preenchida. */
export function wa(telefone: string, mensagem: string) {
  return `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`
}

/** Link mailto com assunto. */
export function mail(email: string, assunto?: string) {
  return assunto ? `mailto:${email}?subject=${encodeURIComponent(assunto)}` : `mailto:${email}`
}
