export default function App() {
  return (
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">robo-hpa-lab</p>
        <h1>Perception lab bootstrap</h1>
        <p className="lede">
          A lightweight browser-native sandbox for replay-first perception, debug tooling,
          analytics, and scene-context experimentation before migration into robo-hpa.
        </p>
      </section>

      <section className="grid">
        <article className="card">
          <h2>Core</h2>
          <ul>
            <li>Event bus</li>
            <li>Pipeline contracts</li>
            <li>State manager</li>
          </ul>
        </article>

        <article className="card">
          <h2>Perception</h2>
          <ul>
            <li>Strict schema</li>
            <li>Visual stream contract</li>
            <li>Audio stream contract</li>
            <li>Scene context hooks</li>
          </ul>
        </article>

        <article className="card">
          <h2>Modules</h2>
          <ul>
            <li>Debug studio</li>
            <li>Replay</li>
            <li>Analytics</li>
            <li>Operator reasoning</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
