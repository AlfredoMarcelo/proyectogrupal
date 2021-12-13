import React from "react";
import { Link } from "react-router-dom";




const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav  ml-auto mb-lg-0">
                    <li className="nav-item ">
                        <a className="nav-link active text-white fs-5" aria-current="page"
                        ><Link to="/"> Inicio </Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-white fs-5"
                        ><Link to="/Login"> Login </Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-white fs-5" ><Link to="/Eventos"> Eventos </Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-white fs-5" ><Link to="/Nosotros"> Nosotros </Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-white fs-5" ><Link to="/Contacto"> Contacto </Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-white fs-5" ><Link to="/EventoHandler"> EventoHandler </Link></a>
                    </li>
                    <li className="nav-item">
                        <Link to="/MiCuenta"><a className="btn btn-outline-light far fa-user-circle border-0 m-2 fs-5" ></a></Link>
                    </li>
                    <li className="nav-item">
                        <a className="btn btn-outline-light fab fa-facebook-f border-0 m-2 fs-5"
                            href="www.facebook.com"></a>
                    </li>
                    <li className="nav-item">
                        <a className="btn btn-outline-light fab fa-instagram border-0 m-2 fs-5"
                            href="www.instagram.com"></a>
                    </li>
                </ul>
            </div>

        </nav>



    )
}

export default Navbar;