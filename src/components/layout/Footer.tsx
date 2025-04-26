import { Link } from 'react-router-dom';
import { Music, Instagram, Globe, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Music className="h-7 w-7 text-primary-400" />
              <span className="text-xl font-bold text-white">ArtiBook</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Conectando artistas e contratantes através de um agente de IA 
              especializado em promover talento artístico via WhatsApp e Instagram.
            </p>
            <div className="flex mt-4 space-x-3">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Globe size={20} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Para Artistas</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/artist/register" className="hover:text-white transition">
                  Cadastre-se
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-white transition">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-white transition">
                  Preços
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Para Contratantes</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contractor/register" className="hover:text-white transition">
                  Cadastre-se
                </Link>
              </li>
              <li>
                <Link to="/contractor/artists" className="hover:text-white transition">
                  Encontrar Artistas
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-white transition">
                  Processo de Booking
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-white transition">
                  Contratos
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-0.5" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-0.5" />
                <span>contato@artibook.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-center md:text-left md:flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} ArtiBook. Todos os direitos reservados.</p>
          <div className="mt-3 md:mt-0">
            <Link to="/support" className="mr-4 hover:text-white transition">
              Termos de Uso
            </Link>
            <Link to="/support" className="hover:text-white transition">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;