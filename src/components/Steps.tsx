import { useState } from "react";
import { T } from "../content";

type Go = { onNext: () => void };

export function Start({ onNext }: Go) {
  return (
    <section className="step center">
      <h1 className="big a1">{T.start.title}</h1>
      <p className="lead a2">{T.start.sub}</p>
      <button className="btn a3" onClick={onNext}>{T.start.btn}</button>
    </section>
  );
}

export function Claims({ onNext }: Go) {
  const [hit, setHit] = useState<Set<number>>(new Set());
  const toggle = (i: number) =>
    setHit((s) => { const n = new Set(s); n.has(i) ? n.delete(i) : n.add(i); return n; });
  return (
    <section className="step center">
      <h2 className="title a1">{T.claims.title}</h2>
      <div className="cards">
        {T.claims.items.map((t, i) => (
          <button key={i} className={"card a2" + (hit.has(i) ? " hit" : "")}
            style={{ animationDelay: `${0.1 + i * 0.1}s` }} onClick={() => toggle(i)}>
            <span className="num">{i + 1}</span><span>{t}</span>
          </button>
        ))}
      </div>
      <button className="btn a3" onClick={onNext}>{T.claims.btn}</button>
    </section>
  );
}

export function Serious({ onNext }: Go) {
  return (
    <section className="step center">
      <h2 className="title a1">{T.serious.title}</h2>
      <blockquote className="quote a2">{T.serious.text}</blockquote>
      <button className="btn a3" onClick={onNext}>{T.serious.btn}</button>
    </section>
  );
}

export function Decision({ onNext }: Go) {
  const [ans, setAns] = useState<"yes" | "no" | null>(null);
  return (
    <section className="step center">
      <h2 className="big a1">{T.decision.title}</h2>
      <p className="lead a2">{T.decision.sub}</p>
      <div className="row a3">
        <button className="btn" onClick={() => setAns("yes")}>{T.decision.yes}</button>
        <button className="btn ghost" onClick={() => setAns("no")}>{T.decision.no}</button>
      </div>
      {ans && (
        <div key={ans + Math.random()} className={"reply pop " + ans}>
          <p>{ans === "yes" ? T.decision.yesReply : T.decision.noReply}</p>
          {ans === "yes" && <button className="btn" onClick={onNext}>{T.decision.next}</button>}
        </div>
      )}
    </section>
  );
}

export function Finale({ onRestart }: { onRestart: () => void }) {
  return (
    <section className="step center">
      <h1 className="big a1">{T.finale.title}</h1>
      <p className="lead a2">{T.finale.text}</p>
      <p className="small a3">{T.finale.small}</p>
      <p className="sign a4">{T.finale.sign}</p>
      <button className="btn ghost a4" onClick={onRestart}>{T.finale.again}</button>
    </section>
  );
}
