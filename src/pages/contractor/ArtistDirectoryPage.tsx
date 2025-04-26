import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Search, Filter, Music, MapPin, Instagram, Calendar, Star } from 'lucide-react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import FormInput from '../../components/common/FormInput';

// Mock data for artists
const artistsData = [
  {
    id: '1',
    name: 'Ricardo Santos',
    artisticName: 'Rick Santos',
    genre: 'Rock',
    location: 'São Paulo, SP',
    rating: 4.8,
    priceRange: 'R$ 1.500 - R$ 3.000',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250',
    instagramFollowers: '12.5K',
    featured: true
  },
  {
    id: '2',
    name: 'Juliana Mendes',
    artisticName: 'DJ Juli',
    genre: 'Eletrônica',
    location: 'Rio de Janeiro, RJ',
    rating: 4.7,
    priceRange: 'R$ 2.000 - R$ 5.000',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250',
    instagramFollowers: '45.2K',
    featured: true
  },
  {
    id: '3',
    name: 'Marcos Oliveira',
    artisticName: 'Marc Oliver',
    genre: 'MPB',
    location: 'Belo Horizonte, MG',
    rating: 4.5,
    priceRange: 'R$ 800 - R$ 1.500',
    image: 'https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250',
    instagramFollowers: '8.3K',
    featured: false
  },
  {
    id: '4',
    name: 'Fernanda Costa',
    artisticName: 'Nanda',
    genre: 'Samba',
    location: 'Salvador, BA',
    rating: 4.9,
    priceRange: 'R$ 1.200 - R$ 2.500',
    image: 'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250',
    instagramFollowers: '23.7K',
    featured: false
  }
];

// Genres for filtering
const genres = [
  'Todos', 'Rock', 'Pop', 'Sertanejo', 'Pagode', 'Samba', 
  'MPB', 'Rap', 'Eletrônica', 'Funk', 'Jazz', 'Blues'
];

const ArtistDirectoryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Todos');
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter artists based on search query and genre
  const filteredArtists = artistsData.filter(artist => {
    const matchesSearch = 
      artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.artisticName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesGenre = selectedGenre === 'Todos' || artist.genre === selectedGenre;
    
    return matchesSearch && matchesGenre;
  });
  
  return (
    <>
      <Helmet>
        <title>Encontre Artistas - ArtiBook</title>
      </Helmet>
      
      <div className="bg-gradient-to-b from-primary-900 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Encontre o Artista Perfeito</h1>
          <p className="text-white/80 text-xl max-w-2xl mb-8">
            Descubra talentos incríveis para seu evento, festa ou estabelecimento
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-3 flex items-center">
            <Search className="text-gray-400 ml-2 mr-3" size={20} />
            <input
              type="text"
              className="flex-grow text-gray-800 bg-transparent border-none focus:ring-0 focus:outline-none"
              placeholder="Busque por nome, gênero musical ou localização..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="ml-2 p-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={20} />
            </button>
          </div>
          
          {/* Filters */}
          {showFilters && (
            <div className="bg-white rounded-lg shadow-lg p-4 mt-3 text-gray-800">
              <h3 className="font-medium mb-3">Gênero Musical</h3>
              <div className="flex flex-wrap gap-2">
                {genres.map(genre => (
                  <button
                    key={genre}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedGenre === genre
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    } transition`}
                    onClick={() => setSelectedGenre(genre)}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Featured Artists */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Artistas em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredArtists
              .filter(artist => artist.featured)
              .map(artist => (
                <div 
                  key={artist.id}
                  className="bg-white rounded-lg shadow-card overflow-hidden border border-gray-100 hover:shadow-card-hover transition-shadow duration-300"
                >
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <img 
                        className="h-48 w-full object-cover md:h-full md:w-48" 
                        src={artist.image} 
                        alt={artist.artisticName} 
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {artist.artisticName}
                          </h3>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="text-sm font-medium">{artist.rating}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center mt-1 mb-2">
                          <Music className="h-4 w-4 text-gray-500 mr-1" />
                          <span className="text-sm text-gray-600">{artist.genre}</span>
                        </div>
                        
                        <div className="flex items-center mt-1 mb-2">
                          <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                          <span className="text-sm text-gray-600">{artist.location}</span>
                        </div>
                        
                        <div className="flex items-center mt-2">
                          <Instagram className="h-4 w-4 text-gray-500 mr-1" />
                          <span className="text-sm text-gray-600">{artist.instagramFollowers} seguidores</span>
                        </div>
                        
                        <div className="text-sm text-gray-700 mt-2">
                          <span className="font-medium">Cachê:</span> {artist.priceRange}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <Link 
                          to={`/contractor/artists/${artist.id}`}
                          className="text-primary-600 hover:text-primary-700 font-medium"
                        >
                          Ver perfil completo
                        </Link>
                        
                        <Link to={`/contractor/booking/${artist.id}`}>
                          <Button size="sm">
                            <Calendar className="mr-1 h-4 w-4" />
                            Contratar
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        
        {/* All Artists */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Todos os Artistas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArtists.map(artist => (
            <Card 
              key={artist.id}
              className="overflow-hidden hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="h-48 mb-4 -mx-6 -mt-6 overflow-hidden">
                <img 
                  src={artist.image} 
                  alt={artist.artisticName}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{artist.artisticName}</h3>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span className="text-sm font-medium">{artist.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center mt-1 mb-1">
                <Music className="h-4 w-4 text-gray-500 mr-1" />
                <span className="text-sm text-gray-600">{artist.genre}</span>
              </div>
              
              <div className="flex items-center mt-1 mb-3">
                <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                <span className="text-sm text-gray-600">{artist.location}</span>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <Link 
                  to={`/contractor/artists/${artist.id}`}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Ver perfil
                </Link>
                
                <Link to={`/contractor/booking/${artist.id}`}>
                  <Button size="sm">Contratar</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
        
        {filteredArtists.length === 0 && (
          <div className="text-center py-12">
            <Music className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">Nenhum artista encontrado</h3>
            <p className="text-gray-500 max-w-md mx-auto mb-4">
              Tente ajustar seus filtros ou buscar por outro termo para encontrar mais opções.
            </p>
            <Button onClick={() => {setSearchQuery(''); setSelectedGenre('Todos');}}>
              Limpar filtros
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default ArtistDirectoryPage;