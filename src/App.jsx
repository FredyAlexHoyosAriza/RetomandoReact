import './styles/App.css';
import Index from './pages/Index';
import PastorBelga from './pages/PastorBelga';
import BorderCollie from './pages/BorderCollie';

import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Layout from './layouts/Layout';

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
                {/*
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
                </nav> */}
                {/*Todas las rutas con este mismo Layout se factorizan asi;
                dependiendo de la ruta actual se muestra la pagina correspondiente
                siempre, pero todas las paginas enmarcadas con el mismo Layout.
                Layout no debe estar dentro de las etiquetas Routes ya que el
                router dom podria haber ambiguedad en las rutas e interpretarse
                que quiza deba aplicarse mas de una ruta a la vez, o simplemente
                no verse ninguna ruta ni Layout */}
                <Routes>
                    <Route element={<Layout />} >
                        <Route path="/border_collie" element={<BorderCollie />} />
                        <Route path="/pastor_belga" element={<PastorBelga />} />
                        {/*Por convencion la ruta raiz va ultima en Routes */}
                        <Route path="/" element={<Index />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}