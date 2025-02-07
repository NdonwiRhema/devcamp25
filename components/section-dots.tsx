"use client";

import { useEffect, useState } from 'react';

export function SectionDots() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index =Array.from(sections).indexOf(entry.target as HTMLElement);
            setActiveSection(index);
          }
        });
      },  
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    // Auto-scroll functionality
    const autoScroll = () => {
      const nextSection = (activeSection + 1) % sections.length;
      sections[nextSection]?.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(nextSection);
    };

    const intervalId = setInterval(autoScroll, 5000); // 5 seconds interval

    return () => {
      observer.disconnect();
      clearInterval(intervalId);
    };
  }, [activeSection]);

 
  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('section');
     sections[index]?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(index);
  };

  return (
    <div className="section-dots">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className={`section-dot ${activeSection === index ? 'active' : ''}`}
          onClick={() => scrollToSection(index)}
        />
      ))}
    </div>
  );
}