import React from 'react'

const Contacto = () => {
    return (
        <div className="text-white pt-4">
            <h1 className="text-center  fs-3 my-3 text-white">CONTACTENOS</h1>
            <div className="d-flex justify-content-around ">
                <i className="fas fa-phone-square-alt fs-3 my-4"></i>
                <i className="fas fa-map-marker-alt align-items-end fs-3 my-4"></i>
                <i className="fas fa-at fs-3 my-4"></i>
                <i className="fas fa-address-card fs-3  my-4"></i>
            </div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-6">
                        <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div className="col-6">
                        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                    </div>
                </div>

                <div className="row my-5">
                    <div className="col-6">
                        <input type="email" className="form-control" placeholder="Email address*" aria-label="First name" />
                    </div>
                    <div className="col-6">
                        <input type="text" className="form-control" placeholder="Subject" aria-label="Last name" />
                    </div>
                </div>
                <h3 className="text-center text-white">DEJANOS UN MENSAJE</h3>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" height="100px"></textarea>
                    <label for="floatingTextarea2"></label>
                </div>
                <div className="my-3 text-center">
                    <button className="btn btn-warning" type="button">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contacto
