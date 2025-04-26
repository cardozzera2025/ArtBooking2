import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "O agente de IA da ArtiBook revolucionou minha carreira. Agora tenho mais apresentações e meu cachê aumentou significativamente.",
    author: "Ricardo Santos",
    role: "Cantor e Compositor",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150"
  },
  {
    quote: "Como DJ, minha agenda está sempre cheia graças ao sistema de booking. A IA responde prontamente às consultas enquanto estou focado nas apresentações.",
    author: "Juliana Mendes",
    role: "DJ e Produtora",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150"
  },
  {
    quote: "Encontrar artistas de qualidade para nossos eventos corporativos nunca foi tão fácil. A ArtiBook simplificou todo o processo de contratação.",
    author: "Carlos Oliveira",
    role: "Diretor de Eventos",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150"
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-20 bg-primary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            O que nossos usuários dizem
          </motion.h2>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-10 left-0 text-primary-700 opacity-30">
            <Quote size={80} />
          </div>
          
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-primary-800 rounded-lg p-8 relative z-10"
          >
            <p className="text-xl md:text-2xl mb-6 italic text-white/90">
              "{testimonials[activeIndex].quote}"
            </p>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">{testimonials[activeIndex].author}</h4>
                <p className="text-primary-300">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </motion.div>
          
          <div className="flex justify-center mt-8 space-x-3">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-primary-800 hover:bg-primary-700 transition"
              aria-label="Testimonial anterior"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeIndex ? 'bg-white scale-125' : 'bg-primary-600'
                  }`}
                  aria-label={`Ver testemunho ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-primary-800 hover:bg-primary-700 transition"
              aria-label="Próximo testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;