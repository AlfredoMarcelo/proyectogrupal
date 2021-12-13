import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import injectContext from "./store/appContext";
import Contacto from "./views/Contacto";
import EventoHandler from "./views/EventoHandler";
import Eventos from "./views/Eventos";
import Inicio from "./views/Inicio";
import Login from "./views/Login";
import MiCuenta from "./views/MiCuenta";
import Nosotros from "./views/Nosotros";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />



        <Switch>
          <Route path="/" exact>
            <Inicio />
          </Route>

          <Route path="/Login" exact>
            <Login />
          </Route>

          <Route path="/Eventos" exact>
            <Eventos />
          </Route>

          <Route path="/Nosotros" exact>
            <Nosotros />
          </Route>

          <Route path="/Contacto" exact>
            <Contacto />
          </Route>

          <Route path="/EventoHandler" exact>
            <EventoHandler />
          </Route>

          <Route path="/MiCuenta" exact>
            <MiCuenta />
          </Route>


        </Switch>
      </BrowserRouter>


    </>
  )
}

export default injectContext(App);

/* import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contacto from "./components/Contacto";
import DetallesEvento from "./components/DetallesEvento";
import Eventos from "./components/Eventos";
import Inicio from "./components/Inicio";
import Login from "./components/Login";
import MiCuenta from "./components/MiCuenta";
import { MiCuentaPromotor } from "./components/MiCuentaPromotor";
import { Nosotros } from "./components/Nosotros";
import "./app.css";
const app = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            EventClick
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Eventos">
                  Eventos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Nosotros">
                  Sobre Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contacto">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid g-0">
        <div className="banner-image w-100 vh-100 d-flex justify-content-center align-items-center"></div>

        <Switch>
          <Route path="/eventos">
            <Eventos />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/detalles-evento">
            <DetallesEvento />
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/mi-cuenta">
            <MiCuenta />
            <Route path="/contacto">
              <Contacto />
            </Route>
          </Route>
          <Route path="/mi-cuenta-promotor">
            <MiCuentaPromotor />
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default app;
 */

