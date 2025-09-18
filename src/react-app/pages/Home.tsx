import Header from '@/react-app/components/Header';
import Hero from '@/react-app/components/Hero';
import Services from '@/react-app/components/Services';
import About from '@/react-app/components/About';
import Process from '@/react-app/components/Process';
import CaseStudies from '@/react-app/components/CaseStudies';
import Contact from '@/react-app/components/Contact';
import Footer from '@/react-app/components/Footer';

export default function Home() {
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
