import React from "react";
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
