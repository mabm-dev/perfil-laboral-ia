import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
    const isLoggedIn = localStorage.getItem('sesion') === 'activa'

    if (!isLoggedIn) {
        return <Navigate to="/" replace />
    }

    return children
}

export default ProtectedRoute