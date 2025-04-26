import { Link } from 'react-router-dom';
import { Music, Home } from 'lucide-react';
import Button from '../components/common/Button';

const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md mx-auto">
        <div className="mb-8 text-primary-500">
          <Music className="h-24 w-24 mx-auto" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Página não encontrada</h1>
        
        <p className="text-xl text-gray-600 mb-8">
          A página que você está procurando parece não existir ou foi movida.
        </p>
        
        <Link to="/">
          <Button leftIcon={<Home size={18} />}>
            Voltar para a Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;