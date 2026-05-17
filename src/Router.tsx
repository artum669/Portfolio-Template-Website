import { BrowserRouter, Routes, Route, Link } from 'react-router';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './Layout';
import Home from './pages/home';

function Router() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="*"
              element={
                <div className="flex min-h-[70vh] flex-col items-center justify-center">
                  <h1 className="mb-4 text-3xl font-bold text-white">404</h1>
                  <Link to="/" className="text-violet-300 hover:text-violet-200">
                    Back home
                  </Link>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default Router;
