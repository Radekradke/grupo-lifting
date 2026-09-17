const TICKER_WORDS = [
  'MOVIMENTAÇÃO', 'IÇAMENTO', 'OPERAÇÃO',
  'SUPORTE', 'ESTRUTURA', 'LOGÍSTICA DEDICADA',
]

export function Ticker() {
  const sequence = [...TICKER_WORDS, ...TICKER_WORDS]

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {sequence.map((word, i) => (
          <span className="ticker__item" key={`${word}-${i}`}>
            <span className="ticker__word">{word}</span>
            <span className="ticker__sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
