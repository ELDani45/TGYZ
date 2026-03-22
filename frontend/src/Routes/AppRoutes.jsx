import { Routes, Route } from 'react-router-dom'
import { Index } from '../pages/Index'
import { RegisterUsers } from '../pages/RegisterUsers'
import { Begginer } from '../components/BeginnerComponents/Begginer'
export const AppRoutes = ({isOpen}) => {
  return (
    <Routes>
      {/* Redirección inicial */}
      <Route path='/' element={<Index />} />
      <Route path='/register' element={<RegisterUsers />} />
      <Route path='/beginner' element={<Begginer isOpen={isOpen} />} />
    </Routes>
  )
}
