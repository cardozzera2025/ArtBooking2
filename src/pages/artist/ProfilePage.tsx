import React from 'react';
import { Helmet } from 'react-helmet';
import { User, MapPin, Music, Instagram, Mail, Phone, Calendar } from 'lucide-react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const ProfilePage = () => {
  // Mock data - in a real app, this would come from your backend
  const profile = {
    name: 'Ricardo Santos',
    artisticName: 'Rick Santos',
    genre: 'Rock',
    location: 'São Paulo, SP',
    email: 'ricardo@example.com',
    phone: '+55 11 99999-9999',
    bio: 'Músico profissional com mais de 10 anos de experiência em shows ao vivo e eventos corporativos. Especializado em rock clássico e pop rock.',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250',
    instagramHandle: '@ricksantos',
    availability: 'Disponível para eventos',
    priceRange: 'R$ 1.500 - R$ 3.000'
  };

  return (
    <>
      <Helmet>
        <title>{profile.artisticName} - Perfil do Artista - ArtiBook</title>
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-48 object-cover rounded-lg"
                  src={profile.image}
                  alt={profile.artisticName}
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold text-gray-900">{profile.artisticName}</h1>
                  <Button>Editar Perfil</Button>
                </div>
                
                <div className="mt-2 flex items-center text-gray-600">
                  <User className="h-4 w-4 mr-2" />
                  <span>{profile.name}</span>
                </div>
                
                <div className="mt-2 flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{profile.location}</span>
                </div>
                
                <div className="mt-2 flex items-center text-gray-600">
                  <Music className="h-4 w-4 mr-2" />
                  <span>{profile.genre}</span>
                </div>
                
                <div className="mt-2 flex items-center text-gray-600">
                  <Instagram className="h-4 w-4 mr-2" />
                  <span>{profile.instagramHandle}</span>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h2 className="text-xl font-semibold mb-4">Informações de Contato</h2>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-500 mr-2" />
                  <span>{profile.email}</span>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-500 mr-2" />
                  <span>{profile.phone}</span>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-xl font-semibold mb-4">Disponibilidade</h2>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                  <span>{profile.availability}</span>
                </div>
                
                <div className="mt-2">
                  <span className="font-medium">Cachê:</span> {profile.priceRange}
                </div>
              </div>
            </Card>
          </div>

          <Card className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Biografia</h2>
            <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;