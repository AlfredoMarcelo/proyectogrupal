import React from 'react'

const MiCuenta = () => {
    return (
        <div className="container pt-3">
            <div className="row my-3">
                <div className="col">
                    <h2 className="text-white text-center">Informacion personal</h2>
                </div>
            </div>
            <div className="row my-3">
                <h2 className="fas fa-user-circle fa-9x text-center text-white"></h2>
                <i className="far fa-images fa-2x text-center text-white"></i>
            </div>

            <div className="container border rounded border-white my-5">
                <i className="fas fa-edit text-white"></i>
                <div className="row my-3">
                    <div className="col">
                        <span className="text-white py-2">First Name</span>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col">
                        <span className="text-white py-2">Last Name</span>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col">
                        <span className="text-white py-2">E-mail</span>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col">
                        <span className="text-white py-2">Password</span>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mb-4">
                <h5 className="text-white">EVENTOS FAVORITOS</h5>
            </div>
            <div className="container border rounded border-white mb-5">
                <div className="row my-2">
                    <div className="col">
                        <i className="fas fa-star text-warning"></i>
                        <hr/>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col">
                        <i className="fas fa-star text-warning"></i>
                        <hr/>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col">
                        <i className="fas fa-star text-warning"></i>
                        <hr/>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col">
                        <i className="fas fa-star text-warning"></i>
                        <hr/>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col">
                        <i className="fas fa-star text-warning"></i>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiCuenta;
