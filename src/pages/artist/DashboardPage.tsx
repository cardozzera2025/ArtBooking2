import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Calendar, Music, Users, DollarSign, MessageSquare, Bell, Settings, Plus } from 'lucide-react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { useAuth } from '../../context/AuthContext';

// Mock data
const upcomingBookings = [
  {
    id: '1',
    date: '2025-05-15',
    time: '20:00',
    venue: 'Bar do João',
    location: 'São Paulo, SP',
    fee: 'R$ 1.500,00',
    status: 'confirmed'
  },
  {
    id: '2',
    date: '2025-05-20',
    time: '21:30',
    venue: 'Festa Corporativa - Empresa ABC',
    location: 'São Paulo, SP',
    fee: 'R$ 2.000,00',
    status: 'pending'
  }
];

const recentMessages = [
  {
    id: '1',
    from: 'João Silva',
    message: 'Tem disponibilidade para tocar no dia 10 de junho?',
    time: 'há 2 horas',
    isNew: true
  },
  {
    id: '2',
    from: 'Maria Oliveira',
    message: 'Adorei seu trabalho! Gostaria de discutir uma apresentação.',
    time: 'há 5 horas',
    isNew: false
  }
];

const ArtistDashboardPage = () => {
  const { user } = useAuth();
  const [isWhatsappConnected, setIsWhatsappConnected] = useState(false);

  return (
    <>
      <Helmet>
        <title>Painel do Artista - ArtiBook</title>
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Painel do Artista</h1>
            <p className="text-gray-600">Bem-vindo de volta, {user?.name}</p>
          </div>

          <div className="flex items-center space-x-3">
            <Bell className="h-6 w-6 text-gray-500" />
            <Link to="/artist/profile">
              <Settings className="h-6 w-6 text-gray-500" />
            </Link>
          </div>
        </div>

        {/* WhatsApp Connection Alert */}
        {!isWhatsappConnected && (
          <Card className="bg-primary-50 border border-primary-200 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold text-primary-800">Conecte seu WhatsApp</h3>
                <p className="text-primary-700">
                  Para que nosso agente de IA possa trabalhar promovendo suas apresentações, conecte seu WhatsApp à plataforma.
                </p>
              </div>
              <Button 
                onClick={() => setIsWhatsappConnected(true)}
                className="whitespace-nowrap"
              >
                Conectar WhatsApp
              </Button>
            </div>
          </Card>
        )}

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white">
            <div className="flex items-center">
              <div className="mr-4 p-3 rounded-full bg-primary-100 text-primary-600">
                <Music className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total de Shows</p>
                <h4 className="text-2xl font-bold text-gray-900">15</h4>
              </div>
            </div>
          </Card>
          
          <Card className="bg-white">
            <div className="flex items-center">
              <div className="mr-4 p-3 rounded-full bg-secondary-100 text-secondary-600">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Visualizações do Perfil</p>
                <h4 className="text-2xl font-bold text-gray-900">243</h4>
              </div>
            </div>
          </Card>
          
          <Card className="bg-white">
            <div className="flex items-center">
              <div className="mr-4 p-3 rounded-full bg-success-100 text-success-600">
                <DollarSign className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Faturamento Total</p>
                <h4 className="text-2xl font-bold text-gray-900">R$ 12.500</h4>
              </div>
            </div>
          </Card>
          
          <Card className="bg-white">
            <div className="flex items-center">
              <div className="mr-4 p-3 rounded-full bg-warning-100 text-warning-600">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Mensagens Recebidas</p>
                <h4 className="text-2xl font-bold text-gray-900">28</h4>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming Bookings */}
          <Card className="bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Próximos Shows</h3>
              <Button variant="text" size="sm">
                Ver todos
              </Button>
            </div>
            
            {upcomingBookings.length > 0 ? (
              <div className="space-y-4">
                {upcomingBookings.map(booking => (
                  <div key={booking.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-start">
                      <div className="mr-4 min-w-16 text-center">
                        <div className="text-sm text-gray-500">
                          {new Date(booking.date).toLocaleDateString('pt-BR', { month: 'short' }).toUpperCase()}
                        </div>
                        <div className="text-xl font-bold text-gray-900">
                          {new Date(booking.date).getDate()}
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <h4 className="text-base font-semibold text-gray-900">{booking.venue}</h4>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Clock className="mr-1 h-4 w-4" />
                          {booking.time}
                        </div>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <MapPin className="mr-1 h-4 w-4" />
                          {booking.location}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <span className="text-sm font-semibold text-gray-900">{booking.fee}</span>
                        <div className="mt-1">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            booking.status === 'confirmed' 
                              ? 'bg-success-100 text-success-800'
                              : 'bg-warning-100 text-warning-800'
                          }`}>
                            {booking.status === 'confirmed' ? 'Confirmado' : 'Pendente'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Nenhum show agendado</p>
                <p className="text-sm text-gray-500 mb-4">
                  Atualize seu perfil para aumentar suas chances de ser contratado
                </p>
                <Button size="sm">
                  <Plus className="mr-1 h-4 w-4" />
                  Adicionar Disponibilidade
                </Button>
              </div>
            )}
          </Card>
          
          {/* Messages */}
          <Card className="bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Mensagens Recentes</h3>
              <Button variant="text" size="sm">
                Ver todas
              </Button>
            </div>
            
            {recentMessages.length > 0 ? (
              <div className="space-y-4">
                {recentMessages.map(message => (
                  <div key={message.id} className="flex items-start border-b pb-4 last:border-b-0 last:pb-0">
                    <div className="mr-3 relative">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-700 font-medium">
                          {message.from.charAt(0)}
                        </span>
                      </div>
                      {message.isNew && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-500 rounded-full"></div>
                      )}
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-900">{message.from}</span>
                        <span className="text-xs text-gray-500">{message.time}</span>
                      </div>
                      <p className="text-gray-600 text-sm mt-1">{message.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Nenhuma mensagem recente</p>
                <p className="text-sm text-gray-500">
                  Quando os contratantes entrarem em contato, as mensagens aparecerão aqui
                </p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </>
  );
};

// Add necessary imports
const Clock = ({ className = '' }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
};

const MapPin = ({ className = '' }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
};

export default ArtistDashboardPage;