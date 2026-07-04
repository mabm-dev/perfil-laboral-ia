import { useNavigate } from "react-router-dom";

function DashboardPage() {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem('sesion');
        navigate('/');
    }
    return (
        <main className="login-page">
            <h1>Mi panel</h1>
            <p>Bienvenido a PerfilLaboralIA</p>

            <section>
                <p>Aquí verás tus candidaturas, tu CV y tus análisis de compativilidad</p>
            </section>

            <button type="button" onClick={handleLogout}>Cerrar sesión</button>
        </main>
    )
}

export default DashboardPage