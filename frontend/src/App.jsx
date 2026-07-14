import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Catalogo from './pages/Catalogo/Catalogo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Catalogo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;