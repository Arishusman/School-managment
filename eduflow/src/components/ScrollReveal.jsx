import { useEffect, useRef, useState } from 'react';
import './ScrollReveal.css';

/* =========================================================
   EDUFLOW — SCROLL REVEAL
   Premium subtle entrance animation
========================================================= */

const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  duration = 700,
  distance = 28,
  once = true,
  threshold = 0.12,
}) => {

  const elementRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {

    const element = elementRef.current;

    if (!element) return;


    /*
      IntersectionObserver detects when
      the element enters the viewport.
    */

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {

          setIsVisible(true);


          /*
            If once=true, stop observing after
            the first successful reveal.
          */

          if (once) {
            observer.unobserve(element);
          }

        } else if (!once) {

          setIsVisible(false);

        }

      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );


    observer.observe(element);


    return () => {
      observer.disconnect();
    };

  }, [once, threshold]);


  const revealStyle = {

    '--reveal-delay': `${delay}ms`,

    '--reveal-duration': `${duration}ms`,

    '--reveal-distance': `${distance}px`,

  };


  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${
        isVisible ? 'scroll-reveal-visible' : ''
      } ${className}`}
      style={revealStyle}
    >
      {children}
    </div>
  );
};


export default ScrollReveal;