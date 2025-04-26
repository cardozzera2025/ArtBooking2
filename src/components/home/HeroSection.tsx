import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isArtistHovered, setIsArtistHovered] = useState(false);
  const [isContractorHovered, setIsContractorHovered] = useState(false);

  return (
    <section className="relative h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/3 -left-24 w-64 h-64 bg-secondary-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent-500 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center relative z-10">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Impulsione sua carreira artística com nosso agente de IA
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Conectamos artistas e contratantes com um agente inteligente que promove seu talento através do WhatsApp e Instagram.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link 
              to="/artist/register"
              className={`
                px-6 py-3 rounded-lg bg-white text-primary-700 font-semibold
                flex items-center justify-center transition duration-300
                transform ${isArtistHovered ? 'scale-105' : 'scale-100'}
                hover:shadow-lg
              `}
              onMouseEnter={() => setIsArtistHovered(true)}
              onMouseLeave={() => setIsArtistHovered(false)}
            >
              Sou artista
              <ArrowRight className={`ml-2 transition-transform duration-300 ${isArtistHovered ? 'translate-x-1' : ''}`} size={20} />
            </Link>
            
            <Link 
              to="/contractor/register"
              className={`
                px-6 py-3 rounded-lg bg-transparent border-2 border-white
                text-white font-semibold flex items-center justify-center
                transition duration-300 
                transform ${isContractorHovered ? 'scale-105' : 'scale-100'}
                hover:bg-white/10
              `}
              onMouseEnter={() => setIsContractorHovered(true)}
              onMouseLeave={() => setIsContractorHovered(false)}
            >
              Sou contratante
              <ArrowRight className={`ml-2 transition-transform duration-300 ${isContractorHovered ? 'translate-x-1' : ''}`} size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Wave shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 200" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,128L60,133.3C120,139,240,149,360,144C480,139,600,117,720,101.3C840,85,960,75,1080,80C1200,85,1320,107,1380,117.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;