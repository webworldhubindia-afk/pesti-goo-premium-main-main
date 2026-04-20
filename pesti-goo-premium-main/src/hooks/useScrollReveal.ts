import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.animate-reveal, .animate-reveal-left, .animate-reveal-right');
    elements.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i % 4 * 80}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
};
