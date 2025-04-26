import { Helmet } from 'react-helmet';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import TestimonialSection from '../components/home/TestimonialSection';
import CTASection from '../components/home/CTASection';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>ArtiBook - Plataforma de Booking Artístico com IA</title>
        <meta name="description" content="Conectamos artistas e contratantes com um agente de IA especializado em promoção artística via WhatsApp e Instagram." />
      </Helmet>
      
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialSection />
      <CTASection />
    </>
  );
};

export default HomePage;