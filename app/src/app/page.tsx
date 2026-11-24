"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

const heartParticles = Array.from({ length: 45 }, (_, i) => {
  const t = (i / 45) * Math.PI * 2;
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

  const side = i % 4;
  const offset = ((i * 37) % 100);
  const startX = side === 0 ? "0vw" : side === 1 ? "100vw" : `${offset}vw`;
  const startY = side === 2 ? "0vh" : side === 3 ? "100vh" : `${offset}vh`;

  return {
    "--start-x": startX,
    "--start-y": startY,
    "--end-x": `${(50 + x * 1.35).toFixed(4)}vw`,
    "--end-y": `${(49 - y * 1.35).toFixed(4)}vh`,
    "--delay": `${((i % 15) * 0.025).toFixed(3)}s`,
    "--size": `${3 + (i % 4)}px`,
  } as CSSProperties;
});

export default function Home() {
  const musicRef = useRef<HTMLAudioElement>(null);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowIntro(false), 4800);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const audio = musicRef.current;
    if (!audio) return;

    audio.loop = false;
    audio.currentTime = 0;

    const startMusic = () => {
      audio.play().then(() => {
        document.removeEventListener("pointerdown", startMusic);
        document.removeEventListener("keydown", startMusic);
      }).catch(() => {});
    };

    document.addEventListener("pointerdown", startMusic);
    document.addEventListener("keydown", startMusic);

    return () => {
      document.removeEventListener("pointerdown", startMusic);
      document.removeEventListener("keydown", startMusic);
      audio.pause();
    };
  }, []);

  return (
    <main className="page">
      {showIntro && (
        <div className="welcome-intro" aria-label="Selamat datang">
          <div className="heart-particles">
            {heartParticles.map((style, i) => (
              <span className="heart-particle" style={style} key={i} />
            ))}
          </div>
          <div className="welcome-message">
            <span className="welcome-flower">✿</span>
            <p>Selamat datang,</p>
            <h2>sayanggkuu 💗🌷</h2>
            <span className="welcome-flower">♡</span>
          </div>
        </div>
      )}

      <audio
        ref={musicRef}
        src="/audio/sempurna.m4a"
        preload="auto"
      />
      <div className="sparkle sparkle1">✦</div>
      <div className="sparkle sparkle2">♡</div>
      <div className="sparkle sparkle3">✧</div>

      <nav className="navbar">
        <div className="logo">♡ little things</div>
        <span className="nav-note">a little corner of happiness</span>
      </nav>

      <section className="hero">
        <div className="eyebrow">✿ A LITTLE COLLECTION OF MEMORIES ✿</div>
        <h1>Little Things<br /><span>About You</span></h1>
        <p>
          Sometimes, the smallest things<br />
          hold the sweetest memories.
        </p>
        <div className="hero-decoration">୨ৎ</div>
        <a href="#memories" className="main-button">Explore memories ♡</a>
      </section>

      <section className="memories" id="memories">
        <div className="section-label">✿ THE LITTLE GALLERY ✿</div>
        <h2>Three little moments</h2>
        <p className="section-desc">A tiny collection of beautiful things.</p>

        <div className="photo-grid">
          <div className="photo-card photo-one">
            <div className="photo-placeholder"><img src="/images/IMG-20261124-WA0012.jpg" alt="Memory" style={{width:"100%",height:"100%",objectFit:"cover"}} /></div>
            <span className="photo-number">01</span>
            <h3>Little Moment One</h3>
            <p>A memory worth keeping.</p>
          </div>

          <div className="photo-card photo-two">
            <div className="photo-placeholder"><img src="/images/IMG-20261124-WA0014.jpg" alt="Memory" style={{width:"100%",height:"100%",objectFit:"cover"}} /></div>
            <span className="photo-number">02</span>
            <h3>Little Moment Two</h3>
            <p>A day to remember.</p>
          </div>

          <div className="photo-card photo-three">
            <div className="photo-placeholder"><img src="/images/IMG-20261124-WA0013.jpg" alt="Memory" style={{width:"100%",height:"100%",objectFit:"cover"}} /></div>
            <span className="photo-number">03</span>
            <h3>Little Moment Three</h3>
            <p>A little piece of happiness.</p>
          </div>
        </div>
      </section>

      <section className="note">
        <span>♡ a little reminder ♡</span>
        <h2>It's the little things<br />that make life lovely.</h2>
        <p>Made with a little bit of love and lots of care.</p>
      </section>

      <footer>made with ♡ · little things about you</footer>
    </main>
  );
}
