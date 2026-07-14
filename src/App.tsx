import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import Hero from './sections/Hero';
import TrustBar from './sections/TrustBar';
import About from './sections/About';
import ServicesOverview from './sections/ServicesOverview';
import ForgeView from './sections/ForgeView';
import Testimonials from './sections/Testimonials';
import WhyChooseUs from './sections/WhyChooseUs';
import ServicesDetail from './sections/ServicesDetail';
import StormDamage from './sections/StormDamage';
import Reviews from './sections/Reviews';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <ServicesOverview />
        <ForgeView />
        <Testimonials />
        <WhyChooseUs />
        <ServicesDetail />
        <StormDamage />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
