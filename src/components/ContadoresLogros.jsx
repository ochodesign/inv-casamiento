import React, { useRef, useEffect, useState } from "react";

function useInView(threshold = 0.3) {
  const ref = useRef();
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function AnimatedCounter({ to, duration = 1500, label }) {
  const [ref, inView] = useInView();
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const startTime = performance.now();
    function animate(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.floor(progress * to));
      if (progress < 1) requestAnimationFrame(animate);
      else setValue(to);
    }
    requestAnimationFrame(animate);
    // Solo animar una vez
    // eslint-disable-next-line
  }, [inView, to, duration]);
  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className="text-5xl md:text-6xl font-extrabold text-blue-700 drop-shadow animate-pulse">{value}</span>
      <span className="text-lg md:text-xl text-gray-700 mt-2 font-medium text-center">{label}</span>
    </div>
  );
}

function ContadoresLogros() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800 tracking-tight">Logros y Experiencia</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl mx-auto">
          <AnimatedCounter to={120} label="Clientes felices" />
          <AnimatedCounter to={250} label="Proyectos entregados" />
          <AnimatedCounter to={8} label="Años de experiencia" />
          <AnimatedCounter to={100} label="% Satisfacción" />
        </div>
      </div>
    </section>
  );
}

export default ContadoresLogros;
