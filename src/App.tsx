import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import LoadingSpinner from './components/common/LoadingSpinner';
import { AuthProvider } from './context/AuthContext';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const ArtistRegistrationPage = lazy(() => import('./pages/artist/RegistrationPage'));
const ArtistDashboardPage = lazy(() => import('./pages/artist/DashboardPage'));
const ArtistProfilePage = lazy(() => import('./pages/artist/ProfilePage'));
const ContractorRegistrationPage = lazy(() => import('./pages/contractor/RegistrationPage'));
const ContractorDashboardPage = lazy(() => import('./pages/contractor/DashboardPage'));
const ArtistDirectoryPage = lazy(() => import('./pages/contractor/ArtistDirectoryPage'));
const ArtistDetailPage = lazy(() => import('./pages/contractor/ArtistDetailPage'));
const BookingRequestPage = lazy(() => import('./pages/contractor/BookingRequestPage'));
const AdminDashboardPage = lazy(() => import('./pages/admin/DashboardPage'));
const LoginPage = lazy(() => import('./pages/auth/LoginPage'));
const SupportPage = lazy(() => import('./pages/SupportPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <AuthProvider>
      <MainLayout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/artist/register" element={<ArtistRegistrationPage />} />
            <Route path="/contractor/register" element={<ContractorRegistrationPage />} />
            
            {/* Artist Routes */}
            <Route path="/artist/dashboard" element={<ArtistDashboardPage />} />
            <Route path="/artist/profile" element={<ArtistProfilePage />} />
            
            {/* Contractor Routes */}
            <Route path="/contractor/dashboard" element={<ContractorDashboardPage />} />
            <Route path="/contractor/artists" element={<ArtistDirectoryPage />} />
            <Route path="/contractor/artists/:id" element={<ArtistDetailPage />} />
            <Route path="/contractor/booking/:artistId" element={<BookingRequestPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </AuthProvider>
  );
}

export default App;