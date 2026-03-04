import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './Routes/AppRoutes'
import { NavSide } from './components/NavSide'
import { useState } from 'react'

function App() {

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <BrowserRouter>
      {/* El Navigation siempre está visible */}
      <NavSide isOpen={isOpen} setIsOpen={setIsOpen} /> 
      
      <main className={`main-content ${isOpen ? 'pushed' : 'collapsed'}`}> 
        <AppRoutes />
      </main>
    </BrowserRouter>
  )
}

export default App
