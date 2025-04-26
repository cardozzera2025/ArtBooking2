import { Mic, Calendar, MessageSquare, Bot, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Mic className="w-6 h-6 text-primary-500" />,
    title: 'Perfil Artístico Completo',
    description: 'Crie um perfil profissional com fotos, vídeos, áudios e todas as informações importantes sobre seu trabalho.'
  },
  {
    icon: <Bot className="w-6 h-6 text-primary-500" />,
    title: 'Agente de IA Dedicado',
    description: 'Um assistente virtual que trabalha 24/7 para promover seu trabalho e responder a interessados em contratar.'
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-primary-500" />,
    title: 'Integração com WhatsApp',
    description: 'Conecte seu WhatsApp à plataforma para que o agente de IA possa interagir com potenciais contratantes.'
  },
  {
    icon: <Calendar className="w-6 h-6 text-primary-500" />,
    title: 'Gestão de Agenda',
    description: 'Controle suas datas disponíveis e tenha uma visão clara dos seus compromissos artísticos.'
  },
  {
    icon: <Shield className="w-6 h-6 text-primary-500" />,
    title: 'Contratos Seguros',
    description: 'Contratos digitais para formalizar apresentações, garantindo segurança tanto para artistas quanto para contratantes.'
  },
  {
    icon: <Zap className="w-6 h-6 text-primary-500" />,
    title: 'Automação de Marketing',
    description: 'Fluxos automatizados de marketing para divulgar seu trabalho e conquistar mais contratações.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Recursos poderosos para artistas e contratantes
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Tudo o que você precisa para alavancar sua carreira artística ou encontrar o talento perfeito para seu evento.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="p-6 bg-white rounded-lg shadow-card hover:shadow-card-hover transition duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;