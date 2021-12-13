import React, {useState} from "react";
import './login.css'

const Login = () => {

    const [state, setState] = useState({
        name: null,
        lastName: null,
        email: null,
        password: null,
        companyName: null
        
    })

    const handleChange = (evento) => {
        let datos = state;
        datos[evento.target.name] = evento.target.value;
        setState({ ...datos });
    }

    return (
        <div className="main text-center">
            <input type="checkbox" id="switch"  />
            <div className="signup">
                <form>
                    <label htmlFor="switch" >Registrate</label>
                    <input className="m-1" type="text" name="name" placeholder="Name" onChange={handleChange} required />
                    <input className="m-1" type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
                    <input className="m-1" type="email" name="email" placeholder="Email" onChange={handleChange} required />
                    <input className="m-1" type="password" name="password" placeholder="Password" onChange={handleChange} required /><br />
                    <label id="b" htmlFor="check">¿Eres Promotor? <br/> <strong className="text-info">Click Aqui</strong></label>
                    <input type="checkbox" id="check" defaultChecked="true"/>
                    <div className="divHidden" >
                        <input className="m-1" type="text" name="companyName" placeholder="Company Name" onChange={handleChange} />
                    </div>
                    <button className="m-1">Enviar</button>
                </form>
            </div>
            <div className="login">
                <form>
                    <label htmlFor="switch" id="cuenta">¿Tienes cuenta? <strong>Ingresa aqui</strong></label>
                    <input className="m-1" type="email" name="email" placeholder="Email" onChange={handleChange} required />
                    <input className="m-1" type="password" name="pswd" placeholder="Password" onChange={handleChange} required />
                    <button className="m-1">Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;