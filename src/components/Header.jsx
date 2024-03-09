import logoPerro from '../media/perro.png';

const Header = () => {
    return (
        <header>
            <ul className="navbar">
                <li className="navelem">
                    <img src={logoPerro} alt="Logo de un perro" className="logo" />
                </li>
                <li><button className="button mainButton navelem">Nuevo Post</button></li>
                <li>
                    <div className="buscar navelem">
                        <input placeholder="Buscar Raza" />
                        <i className="fas fa-search"></i>
                    </div>
                </li>
                <li><button className="button secondaryButton navelem">Login</button></li>
                <li><button className="button mainButton navelem">Registro</button></li>
            </ul>
        </header>
    )
}

export default Header;