import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './Routes/AppRoutes'

function App() {
  return (
    <BrowserRouter>
      {/* El Navigation siempre está visible */}
      
      {/* Contenedor principal para dar margen o estilos globales */}
      <main className="container"> 
        <AppRoutes />
      </main>
    </BrowserRouter>
  )
}

export default App
