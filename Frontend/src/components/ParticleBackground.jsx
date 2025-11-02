// src/components/ParticleBackground.jsx
import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    container.innerHTML = "";
    const count = 50;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.left = Math.random() * 100 + "%";
      p.style.top = Math.random() * 100 + "%";
      p.style.animationDelay = Math.random() * 6 + "s";
      p.style.animationDuration = Math.random() * 3 + 3 + "s";
      container.appendChild(p);
    }
  }, []);

  return <div className="hero-particles" ref={ref} />;
}
