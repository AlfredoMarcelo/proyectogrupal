import React from 'react'

const EventoHandler = () => {
    return (
        <div className="text-white">
            <h3 className="text-primary text-center py-5 my-5 mx-5">CREAR EVENTO</h3>
            <div className="container border rounded-3 vw-100 text-center border-primary my-5">
                <i className="fas fa-images fa-7x my-5 text-primary"></i>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6 text-center">
                        <div className="input-group py-1 input-group-sm mb-3">
                            <input type="text" className="form-control border-top-0 border-end-0 border-start-0" placeholder="Añadir Título" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                    </div>
                    <div className="col-6 text-center">
                        <div className="input-group py-1 input-group-sm mb-3">
                            <input type="text" className="form-control border-top-0 border-end-0 border-start-0" placeholder="Capacidad (Personas)" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row me-5">
                    <div className="col-6 text-end">
                        <div className="py-4">
                            <span className="fs-4">Descripción</span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" height="100px"></textarea>
                        </div>
                    </div>
                </div>
                <div className="row py-4 me-5">
                    <div className="col-6 text-end">
                        <span className="fs-4">Fecha <i className="far fa-calendar-alt"></i></span>
                    </div>
                    <div className="col-6">
                        <div className="input-group rounded-3 input-group-sm mb-3">
                            <input type="text" className="form-control" placeholder="DD/MM/AAAA  HH/MM" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                    </div>
                </div>
                <div className=" row py-4 me-5">
                    <div className="col-6 text-end">
                        <span className="fs-4">Ubicación <i className="fas fa-map-marker-alt"></i></span>
                    </div>
                    <div className="col-6 text-center">
                        <div className="input-group input-group-sm mb-3">
                            <input type="text" className="form-control border-top-0 border-end-0 border-start-0" placeholder="Dirección" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"  />
                        </div>
                    </div>
                </div>
                <div className="row py-4 me-5">
                    <div className="col-6 text-end">
                        <span className="fs-4">Valores <i className="fas fa-dollar-sign"></i></span>
                    </div>
                    <div className="col-6 text-center">
                        <div className="input-group input-group-sm mb-3">
                            <input type="text" className="form-control border-top-0 border-end-0 border-start-0" placeholder="Min-Max" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row me-5">
                        <div className="col-6 text-end">
                            <button type="button" className="btn btn-primary  mx-2 my-3">Añadir Eventos</button>
                        </div>
                        <div className="col-6 text-start">
                            <button type="button" className="btn btn-danger  my-3">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default EventoHandler;

