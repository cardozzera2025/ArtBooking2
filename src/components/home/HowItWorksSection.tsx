import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Criar perfil',
    description: 'Cadastre-se e preencha seu perfil com informações, fotos e vídeos do seu trabalho artístico.',
    color: 'bg-primary-500'
  },
  {
    number: '02',
    title: 'Conectar WhatsApp',
    description: 'Integre seu WhatsApp à plataforma para permitir que o agente de IA comunique-se com potenciais contratantes.',
    color: 'bg-secondary-500'
  },
  {
    number: '03',
    title: 'Personalizar IA',
    description: 'Configure as preferências do seu agente de IA para representar adequadamente seu trabalho e estilo de comunicação.',
    color: 'bg-accent-500'
  },
  {
    number: '04',
    title: 'Receber propostas',
    description: 'Contratantes interessados enviarão propostas que serão gerenciadas pelo seu agente de IA, facilitando negociações.',
    color: 'bg-success-500'
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Como funciona
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Um processo simples e eficiente para impulsionar sua carreira artística
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {/* Step number */}
              <div className={`w-12 h-12 rounded-full ${step.color} text-white flex items-center justify-center font-bold text-lg mb-4`}>
                {step.number}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-12 w-full h-0.5 bg-gray-200">
                  <div className={`h-full ${step.color} w-0`} style={{ width: '100%', animation: 'grow 3s ease-out forwards', animationDelay: `${index * 0.5}s` }}></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;