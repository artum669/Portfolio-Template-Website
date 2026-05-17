import { Outlet, useLocation } from 'react-router';
import { type FC, Suspense, useEffect } from 'react';
import SEOTitle from './components/SEOTitle';
import LoadingScreen from './components/LoadingScreen';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AmbientBackground from '@/components/layout/AmbientBackground';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingDock from '@/components/layout/FloatingDock';

const Layout: FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname, location.hash]);

  const content = (
    <>
      <SEOTitle />
      <ScrollProgress />
      <AmbientBackground />
      <main
        data-beasties-container
        className="relative z-10 min-h-screen bg-transparent font-sans text-fog selection:bg-violet-500/40 selection:text-violet-100"
      >
        <Navbar />
        <Outlet />
        <Footer />
      </main>
      <FloatingDock />
    </>
  );

  return <Suspense fallback={<LoadingScreen />}>{content}</Suspense>;
};

export default Layout;
