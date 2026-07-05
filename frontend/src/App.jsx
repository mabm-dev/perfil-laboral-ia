import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'
import OffersPage from './pages/OffersPage'
import CvsPage from './pages/CvsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        <Route path="/ofertas" element={<ProtectedRoute><OffersPage /></ProtectedRoute>} />
        <Route path="/cvs" element={<ProtectedRoute><CvsPage /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App