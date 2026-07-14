import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function MainLayout() {
  return (
    <div>
      {/* El menú superior que siempre estará visible */}
      <Navbar />

      {/* Aquí React inyectará el Catálogo o cualquier otro módulo a futuro */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}