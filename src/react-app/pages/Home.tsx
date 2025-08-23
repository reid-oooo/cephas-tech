import { useEffect } from 'react';
import Header from '@/react-app/components/Header';
import Hero from '@/react-app/components/Hero';
import Services from '@/react-app/components/Services';
import About from '@/react-app/components/About';
import Process from '@/react-app/components/Process';
import CaseStudies from '@/react-app/components/CaseStudies';
import Contact from '@/react-app/components/Contact';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
