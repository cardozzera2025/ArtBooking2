import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Music, Mail, Lock, Users } from 'lucide-react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import FormInput from '../../components/common/FormInput';
import { useAuth } from '../../context/AuthContext';

type LoginInputs = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm<LoginInputs>();
  
  const onSubmit = async (data: LoginInputs) => {
    setError(null);
    setIsLoading(true);
    
    try {
      await login(data.email, data.password);
      
      // Redirect based on role (in a real app, this would be handled after login)
      if (data.email.includes('artist')) {
        navigate('/artist/dashboard');
      } else if (data.email.includes('contractor')) {
        navigate('/contractor/dashboard');
      } else if (data.email.includes('admin')) {
        navigate('/admin/dashboard');
      } else {
        navigate('/');
      }
    } catch (err) {
      setError('Falha no login. Verifique suas credenciais e tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-10 md:py-20 flex justify-center items-center min-h-[calc(100vh-128px)]">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
              <Music className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Bem-vindo novamente</h1>
          <p className="text-gray-600 mt-2">Entre para acessar sua conta</p>
        </div>
        
        <Card className="animate-fade-in">
          <form onSubmit={handleSubmit(onSubmit)}>
            {error && (
              <div className="bg-error-50 text-error-700 p-3 rounded-md mb-4">
                {error}
              </div>
            )}
            
            <FormInput
              label="Email"
              id="email"
              type="email"
              placeholder="seu@email.com"
              error={errors.email?.message}
              {...register('email', { 
                required: 'Email é obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email inválido'
                }
              })}
            />
            
            <FormInput
              label="Senha"
              id="password"
              type="password"
              placeholder="••••••••"
              error={errors.password?.message}
              {...register('password', { 
                required: 'Senha é obrigatória',
                minLength: {
                  value: 6,
                  message: 'A senha deve ter pelo menos 6 caracteres'
                }
              })}
            />
            
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                  Lembrar-me
                </label>
              </div>
              
              <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-500">
                Esqueceu a senha?
              </a>
            </div>
            
            <Button
              type="submit"
              fullWidth
              isLoading={isLoading}
            >
              Entrar
            </Button>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Ou continue com
                </span>
              </div>
            </div>
            
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <Mail className="h-5 w-5 text-gray-500 mr-2" />
                Email
              </button>
              <button
                type="button"
                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <Users className="h-5 w-5 text-gray-500 mr-2" />
                WhatsApp
              </button>
            </div>
          </div>
          
          <p className="mt-6 text-center text-sm text-gray-600">
            Não tem uma conta?{' '}
            <Link to="/artist/register" className="font-medium text-primary-600 hover:text-primary-500">
              Cadastre-se
            </Link>
          </p>
        </Card>
        
        <div className="mt-4 text-center text-gray-500 text-sm">
          <p>Credenciais para teste:</p>
          <p>
            <span className="font-medium">Artista:</span> artist@example.com / password123
          </p>
          <p>
            <span className="font-medium">Contratante:</span> contractor@example.com / password123
          </p>
          <p>
            <span className="font-medium">Admin:</span> admin@example.com / admin123
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;