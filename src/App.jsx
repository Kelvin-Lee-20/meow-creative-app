import { useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AppsSection from './components/AppsSection';
import About from './components/About';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div className="bg-[var(--bg)] text-[var(--ink)] font-['Quicksand'] text-[17px] leading-[1.6]">
      <Header onScrollTo={scrollTo} />
      <main id="top">
        <Hero onScrollTo={scrollTo} />
        <AppsSection />
        <About />
        <Values />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}