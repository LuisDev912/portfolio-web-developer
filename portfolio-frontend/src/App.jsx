import './styles/index.css'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage.jsx';

const MainLayout = lazy(() => import('./layout/MainLayout.jsx'));
const HomePage = lazy(() => import('./pages/Home.jsx'));

function App() {
  return (
    <Suspense fallback={<div style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '15%',
      fontSize: 'var(--font-size-lg)',
      fontWeight: '600'
    }}> wait until the content loads </div>} >

      <Routes>
        <Route element={<MainLayout />}>

          <Route path="/" element={<HomePage />} />
          <Route path='*' element={<NotFoundPage />} />

        </Route>
      </Routes>

    </Suspense>
  )
}

export default App