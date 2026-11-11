import { Suspense, useEffect } from 'react';
import { Outlet, createBrowserRouter, useLocation } from 'react-router-dom';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { QuestionModal } from '@/widgets/question-modal';
import { ROUTES_CONFIG } from './routes';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = window.setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

function PageFallback() {
  return <div style={{ minHeight: '70vh' }} aria-busy="true" />;
}

function RootLayout() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main>
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <QuestionModal />
    </>
  );
}

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: ROUTES_CONFIG.map(({ path, Component }) => ({ path, element: <Component /> })),
  },
]);
