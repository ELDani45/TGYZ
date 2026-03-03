import { Routes, Route } from 'react-router-dom'
import { Index } from '../pages/Index'
export const AppRoutes = () => {
  return (
    <Routes>
      {/* Redirección inicial */}
      <Route path='/' element={<Index />} />
    </Routes>
  )
}
