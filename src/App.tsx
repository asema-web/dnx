import { useState } from "react";
import { Start, Claims, Serious, Decision, Finale } from "./components/Steps";
import { T } from "./content";

const LAST = 4;

export default function App() {
  const [step, setStep] = useState(0);
  const go = (n: number) => setStep(Math.max(0, Math.min(LAST, n)));
  const next = () => go(step + 1);
  return (
    <main className="app">
      <div className="stage" key={step}>
        {step === 0 && <Start onNext={next} />}
        {step === 1 && <Claims onNext={next} />}
        {step === 2 && <Serious onNext={next} />}
        {step === 3 && <Decision onNext={next} />}
        {step === 4 && <Finale onRestart={() => go(0)} />}
      </div>
      <nav className="nav">
        <button className="link" disabled={step === 0} onClick={() => go(step - 1)}>← {T.nav.prev}</button>
        <div className="dots">
          {Array.from({ length: LAST + 1 }, (_, i) => (
            <button key={i} aria-label={`${i + 1}`} className={"dot" + (i === step ? " on" : "")} onClick={() => go(i)} />
          ))}
        </div>
        <button className="link" disabled={step === LAST} onClick={next}>{T.nav.next} →</button>
      </nav>
    </main>
  );
}
