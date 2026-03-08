import { Routes, Route } from 'react-router-dom'
import { Index } from '../pages/Index'
import { RegisterUsers } from '../pages/RegisterUsers'

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Redirección inicial */}
      <Route path='/' element={<Index />} />
      <Route path='/register' element={<RegisterUsers />} />
    </Routes>
  )
}
