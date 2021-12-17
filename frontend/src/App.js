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
