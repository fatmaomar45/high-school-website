'use client';

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.1,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const directionStyles = {
    up: { hidden: "translateY(30px)", visible: "translateY(0)" },
    down: { hidden: "translateY(-30px)", visible: "translateY(0)" },
    left: { hidden: "translateX(30px)", visible: "translateX(0)" },
    right: { hidden: "translateX(-30px)", visible: "translateX(0)" },
    none: { hidden: "scale(0.95)", visible: "scale(1)" },
  };

  const style = directionStyles[direction] || directionStyles.up;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? style.visible : style.hidden,
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
