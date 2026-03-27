import { Routes, Route } from 'react-router-dom'
import { Index } from '../pages/Index'
import { RegisterUsers } from '../pages/RegisterUsers'
import { Begginer } from '../components/BeginnerComponents/Begginer'
import SignIn from '../pages/SignIn'

export const AppRoutes = ({isOpen, setIsOpen}) => {
  return (
    <Routes>
      {/* Redirección inicial */}
      <Route path='/' element={<Index />} />
      <Route path='/register' element={<RegisterUsers />} />
      <Route path='/beginner' element={<Begginer isOpen={isOpen} setIsOpen={setIsOpen} />} />
      <Route path='/sign in' element={<SignIn isOpen={isOpen} setIsOpen={setIsOpen} />} />
    </Routes>
  )
}
