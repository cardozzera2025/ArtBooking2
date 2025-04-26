import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Music, ArrowRight, UploadCloud, User, Mail, Phone, Lock } from 'lucide-react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import FormInput from '../../components/common/FormInput';
import { useAuth } from '../../context/AuthContext';

type ArtistRegistrationInputs = {
  name: string;
  artisticName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  genre: string;
};

const RegistrationPage = () => {
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm<ArtistRegistrationInputs>();
  const password = watch('password');
  
  const handleNext = () => {
    setCurrentStep(2);
  };
  
  const handlePrev = () => {
    setCurrentStep(1);
  };
  
  const onSubmit = async (data: ArtistRegistrationInputs) => {
    setError(null);
    setIsLoading(true);
    
    try {
      // In a real app, we would send all artist data
      await registerUser({
        name: data.name,
        email: data.email,
        password: data.password
      }, 'artist');
      
      navigate('/artist/dashboard');
    } catch (err) {
      setError('Falha no cadastro. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-10 md:py-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
              <Music className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Cadastro de Artista</h1>
          <p className="text-gray-600 mt-2">
            {currentStep === 1 
              ? 'Preencha suas informações básicas'
              : 'Informações para o seu perfil artístico'
            }
          </p>
        </div>
        
        {/* Steps Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentStep >= 1 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}>
              1
            </div>
            <div className={`w-12 h-1 ${
              currentStep >= 2 ? 'bg-primary-600' : 'bg-gray-200'
            }`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentStep >= 2 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}>
              2
            </div>
          </div>
        </div>
        
        <Card className="animate-fade-in">
          <form onSubmit={handleSubmit(currentStep === 1 ? handleNext : onSubmit)}>
            {error && (
              <div className="bg-error-50 text-error-700 p-3 rounded-md mb-4">
                {error}
              </div>
            )}
            
            {currentStep === 1 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput
                    label="Nome Completo"
                    id="name"
                    placeholder="Seu nome completo"
                    error={errors.name?.message}
                    {...register('name', { 
                      required: 'Nome é obrigatório' 
                    })}
                  />
                  
                  <FormInput
                    label="Nome Artístico"
                    id="artisticName"
                    placeholder="Como você é conhecido"
                    error={errors.artisticName?.message}
                    {...register('artisticName', { 
                      required: 'Nome artístico é obrigatório' 
                    })}
                  />
                </div>
                
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
                  label="Telefone (WhatsApp)"
                  id="phone"
                  placeholder="(xx) xxxxx-xxxx"
                  error={errors.phone?.message}
                  {...register('phone', { 
                    required: 'Telefone é obrigatório',
                    pattern: {
                      value: /^\(\d{2}\) \d{5}-\d{4}$/,
                      message: 'Formato: (xx) xxxxx-xxxx'
                    }
                  })}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  
                  <FormInput
                    label="Confirmar Senha"
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    error={errors.confirmPassword?.message}
                    {...register('confirmPassword', { 
                      validate: value => value === password || 'As senhas não coincidem'
                    })}
                  />
                </div>
                
                <Button
                  type="submit"
                  fullWidth
                  className="mt-4"
                  rightIcon={<ArrowRight size={16} />}
                >
                  Próximo
                </Button>
              </>
            ) : (
              <>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gênero Musical
                </label>
                <select
                  className="mb-4 w-full rounded-md shadow-sm border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                  {...register('genre', { required: 'Gênero é obrigatório' })}
                >
                  <option value="">Selecione um gênero</option>
                  <option value="rock">Rock</option>
                  <option value="pop">Pop</option>
                  <option value="sertanejo">Sertanejo</option>
                  <option value="pagode">Pagode</option>
                  <option value="samba">Samba</option>
                  <option value="mpb">MPB</option>
                  <option value="rap">Rap/Hip-Hop</option>
                  <option value="eletronica">Eletrônica</option>
                  <option value="funk">Funk</option>
                  <option value="jazz">Jazz</option>
                  <option value="blues">Blues</option>
                  <option value="reggae">Reggae</option>
                  <option value="outro">Outro</option>
                </select>
                {errors.genre && <p className="mt-1 text-sm text-error-600">{errors.genre.message}</p>}
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Foto de Perfil
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrev}
                  >
                    Voltar
                  </Button>
                  
                  <Button
                    type="submit"
                    isLoading={isLoading}
                  >
                    Finalizar Cadastro
                  </Button>
                </div>
              </>
            )}
          </form>
          
          <p className="mt-6 text-center text-sm text-gray-600">
            Já tem uma conta?{' '}
            <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
              Entrar
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default RegistrationPage;