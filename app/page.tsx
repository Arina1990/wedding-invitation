'use client';

import { useEffect, useState } from 'react';

const lines = ['Мы встретимся с тобой у первого подъезда,', 'Паролем будет просто: «Как дела?»', 'Ты мне сказала: «Буду одета как невеста»,', 'А я надену галстук для тебя.'];
const displayLines = [
  lines[0].replace('с тобой', 'с тобою').replace(/,$/, ''),
  lines[1].replace('просто: «', 'просто "').replace('»', '"'),
  lines[2].replace(': «Буду', ' будешь').replace('одета как', 'одета, как').replace('невеста»,', 'невеста'),
  lines[3].replace(/\.$/, ''),
];

export default function Home() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 5700);
    return () => window.clearTimeout(timer);
  }, []);

  const reveal = () => document.querySelector('#invitation')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <main>
      <section className="opening" aria-label="Строки из песни">
        <div className="opening__copy">
          <div className="lyrics">
            {displayLines.map((line, index) => (
              <p key={line} style={{ animationDelay: `${0.5 + index * 1.15}s` }}>{line}</p>
            ))}
          </div>
          <button className={`more ${ready ? 'more--visible' : ''}`} type="button" onClick={reveal}>
            Листать дальше <span aria-hidden="true">↓</span>
          </button>
        </div>
      </section>

      <section className="invitation" id="invitation" aria-label="Приглашение">
        <div className="sticker-row" aria-label="Save the date">
          <span className="sticker sticker--pink">save</span>
          <span className="sticker sticker--blue">the</span>
          <span className="sticker sticker--yellow">date!</span>
        </div>
        <p className="date-line"><span>13</span> / 08 / 2027</p>
        <h1>Арина <b>и</b> Дима</h1>
        <div className="message">
          <p>Мы очень хотим, чтобы в этот день вы были рядом с нами.</p>
          <p>13 августа 2027 года мы отметим важное событие. Уже сейчас приглашаем вас разделить его вместе с нами.</p>
          <p>Сохраните, пожалуйста, дату, и все подробности совсем скоро вам подскажем.</p>
        </div>
        <p className="signature">До встречи в августе!</p>
      </section>
    </main>
  );
}
