import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Music, Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };
  
  const getDashboardLink = () => {
    if (!user) return '/login';
    
    switch (user.role) {
      case 'artist':
        return '/artist/dashboard';
      case 'contractor':
        return '/contractor/dashboard';
      case 'admin':
        return '/admin/dashboard';
      default:
        return '/login';
    }
  };
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isHomePage && !isScrolled
          ? 'bg-transparent text-white'
          : 'bg-white text-gray-900 shadow-md'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Music className={`h-8 w-8 ${isHomePage && !isScrolled ? 'text-white' : 'text-primary-600'}`} />
            <span className="text-xl font-bold">ArtiBook</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/contractor/artists" 
              className={`font-medium hover:text-primary-500 transition ${
                isHomePage && !isScrolled ? 'text-white/90 hover:text-white' : ''
              }`}
            >
              Encontrar Artistas
            </Link>
            <Link 
              to="/support" 
              className={`font-medium hover:text-primary-500 transition ${
                isHomePage && !isScrolled ? 'text-white/90 hover:text-white' : ''
              }`}
            >
              Suporte
            </Link>
            
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img 
                      src={user?.profileImage || 'https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=50&w=50'} 
                      alt={user?.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-medium">{user?.name?.split(' ')[0]}</span>
                </button>
                {isDropdownOpen && (
                  <div 
                    className="absolute right-0 w-48 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20"
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <Link 
                      to={getDashboardLink()}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Painel de Controle
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700"
                    >
                      Sair
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link 
                  to="/login" 
                  className={`font-medium hover:text-primary-500 transition ${
                    isHomePage && !isScrolled ? 'text-white/90 hover:text-white' : ''
                  }`}
                >
                  Entrar
                </Link>
                <Link 
                  to="/artist/register" 
                  className={`px-4 py-2 rounded-md ${
                    isHomePage && !isScrolled
                      ? 'bg-white text-primary-600 hover:bg-gray-100'
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                  } transition`}
                >
                  Cadastrar Artista
                </Link>
              </div>
            )}
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/contractor/artists"
                className="py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Encontrar Artistas
              </Link>
              <Link 
                to="/support"
                className="py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Suporte
              </Link>
              
              {isAuthenticated ? (
                <>
                  <Link 
                    to={getDashboardLink()}
                    className="py-2 font-medium flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="mr-2 h-5 w-5" />
                    Painel de Controle
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="py-2 font-medium flex items-center text-left w-full"
                  >
                    <LogOut className="mr-2 h-5 w-5" />
                    Sair
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login"
                    className="py-2 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Entrar
                  </Link>
                  <Link 
                    to="/artist/register"
                    className="bg-primary-600 text-white py-2 px-3 rounded-md text-center font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Cadastrar Artista
                  </Link>
                </>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;