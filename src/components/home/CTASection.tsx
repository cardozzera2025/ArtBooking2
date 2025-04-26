import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTASection = () => {
  const [isArtistHovered, setIsArtistHovered] = useState(false);
  const [isContractorHovered, setIsContractorHovered] = useState(false);
  
  return (
    <section className="py-20 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Pronto para revolucionar sua carreira artística?
          </motion.h2>
          
          <motion.p 
            className="text-xl mb-8 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Junte-se a milhares de artistas e contratantes que já estão utilizando nossa plataforma para simplificar o processo de booking e impulsionar carreiras.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              to="/artist/register"
              className={`
                px-8 py-3 rounded-lg bg-white text-primary-700 font-semibold
                flex items-center justify-center transition duration-300
                transform ${isArtistHovered ? 'scale-105' : 'scale-100'}
              `}
              onMouseEnter={() => setIsArtistHovered(true)}
              onMouseLeave={() => setIsArtistHovered(false)}
            >
              Cadastrar como Artista
              <ArrowRight className={`ml-2 transition-transform duration-300 ${isArtistHovered ? 'translate-x-1' : ''}`} size={20} />
            </Link>
            
            <Link 
              to="/contractor/register"
              className={`
                px-8 py-3 rounded-lg bg-primary-800 text-white font-semibold
                flex items-center justify-center transition duration-300
                transform ${isContractorHovered ? 'scale-105' : 'scale-100'}
              `}
              onMouseEnter={() => setIsContractorHovered(true)}
              onMouseLeave={() => setIsContractorHovered(false)}
            >
              Cadastrar como Contratante
              <ArrowRight className={`ml-2 transition-transform duration-300 ${isContractorHovered ? 'translate-x-1' : ''}`} size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;