import React, { useRef, useState, useEffect } from "react";

function SlideUpSection({ children, className = "", ...props }) {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    }, { threshold: 0.15 });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}

export default SlideUpSection;
