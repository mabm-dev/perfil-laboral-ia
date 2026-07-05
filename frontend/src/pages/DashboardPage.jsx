import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiGet } from "../api";

function DashboardPage() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null)

    useEffect(() => {
        async function loadUser() {
            try {
                const data = await apiGet('/me')
                setUser(data)
            } catch {
                localStorage.removeItem('token')
                navigate('/')
            }
        }
        
    loadUser()
    }, [navigate])


    function handleLogout() {
        localStorage.removeItem('token');
        navigate('/');
    }
    return (
        <main className="login-page">
            <h1>Mi panel</h1>
            {user && <p>Hola, {user.name} 👋</p>}

            <section>
                <p>Aquí verás tus candidaturas, tu CV y tus análisis de compativilidad</p>
            </section>

            <button type="button" onClick={handleLogout}>Cerrar sesión</button>
        </main>
    )
}

export default DashboardPage