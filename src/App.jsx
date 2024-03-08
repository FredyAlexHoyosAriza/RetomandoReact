import './styles/App.css';
import Index from './pages/Index';
import PastorBelga from './pages/PastorBelga';
import BorderCollie from './pages/BorderCollie';

import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            {/*Una etiqueta tipo anchor (<a>) hace una peticion al servidor para cargar
            una nueva pagina, por lo cual hay un tiempo de espera, mientras el servidor
            responde y entrega la nueva pagina; las etiquetas Link de react-router-dom
            lo que hacen es cambiar internamente el html de la pagina web, de esta forma
            se evita la redireccion producto de la peticion al servidor con el tiempo de
            espera que implica una respuesta. Todo lo que hay detras de una aplicacion
            React funciona dentro de un mismo div o la que sea la etiqueta mas externa,
            es decir, que el codigo para el cambia de vista ya se encuentra en la app y
            se muestra segun el route actual. Este concepto se conoce como: single page
            application */}
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Index</Link>
                        </li>
                        <li>
                            <Link to="/pastor_belga">Pastor Belga Malinois</Link>
                        </li>
                        <li>
                            <Link to="/border_collie">Border Collie</Link>
                        </li>
                    </ul>
                </nav>
                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL.
              Por convencion la ruta raiz va ultima en Routes */}
                <Routes>
                    <Route path="/border_collie" element={<BorderCollie/>} />
                    <Route path="/pastor_belga" element={<PastorBelga/>} />
                    <Route path="/" element={<Index/>} />
                </Routes>
            </div>
        </Router>
    );
}