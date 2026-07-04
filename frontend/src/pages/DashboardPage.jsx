import { Link } from "react-router-dom";

function DashboardPage() {
    return (
        <main className="login-page">
            <h1>Mi panel</h1>
            <p>Bienvenido a PerfilLaboralIA</p>

            <section>
                <p>Aquí verás tus candidaturas, tu CV y tus análisis de compativilidad</p>
            </section>

            <Link to="/">Cerrar sesión</Link>
        </main>
    )
}

export default DashboardPage