import { explorationStatus as status } from '../../content/exploration'

export function ExplorationStatus() {
  return (
    <section id="status" className="exploration-chapter exploration-status" aria-labelledby="exploration-status-title">
      <div className="exploration-chapter__inner">
        <p className="exploration-eyebrow">{status.eyebrow}</p>
        <header className="exploration-closing-heading">
          <h2 id="exploration-status-title">{status.title}</h2>
          <p className="exploration-chapter__description">{status.description}</p>
        </header>
        <dl className="exploration-status__record">
          {status.records.map(record => (
            <div key={record.label}>
              <dt>{record.label}</dt>
              <dd>{record.value}{'detail' in record && <span>{record.detail}</span>}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
