import React from 'react'

const DetallesEvento = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="co-6l">
                        <h3 className="text-primary">DETALLES DEL EVENTO</h3>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-6">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo quod consectetur magni ratione suscipit
                            eaque commodi voluptatibus non nemo. Sit quibusdam corporis, quas repellat exercitationem et
                            inventore minima quia harum.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, quam. Magnam eius, maiores unde
                            sapiente voluptas enim, molestias labore dolorem dolores est corporis? Molestiae ipsa maiores ipsam
                            quidem facilis vel?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eveniet
                            accusantium delectus sit amet veniam aut, veritatis, quisquam, doloribus excepturi suscipit
                            asperiores aperiam alias nihil eaque fugiat harum. Quae, quam. Lorem ipsum dolor sit amet
                            consectetur, adipisicing elit. Voluptatibus atque ipsam nobis fugit, deleniti optio amet sed natus
                            quibusdam quaerat officiis eius quo, fugiat ad eaque minima tempore aut? Autem!. Lorem ipsum dolor
                            sit amet, consectetur adipisicing elit. Magnam deserunt ullam eius magni dolorum officia ab
                            exercitationem ducimus nostrum esse. Sed error omnis quas aliquam repellat ipsam est atque amet!
                        </p>
                    </div>
                    <div className="col-6">
                        <img className="img-size w-100 h-100"
                            src="https://faros.hsjdbcn.org/sites/default/files/styles/shareimg/public/fiesta-discoteca-adolescente.jpg?itok=HOauEZXk"
                            alt="Responsive image" />
                        <span>AGREGAR COMO FAVORITO <i className="fas fa-star text-warning py-3"></i></span>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="d-flex justify-content-around my-5">
                    <div className="card" width="18rem">
                        <div className="card-body">
                            <h5 className="card-title text-center text-primary">Ubicacion</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                content.</p>
                            <a href="#" className="fas fa-map-marker-alt fs-4 text-primary"></a>
                        </div>
                    </div>
                    <div className="card" width="18rem">
                        <div className="card-body">
                            <h5 className="card-title text-center text-primary">Fecha | Hora</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                content.</p>
                            <a href="#" className="fas fa-calendar-alt fs-4 text-primary"></a>
                        </div>
                    </div>
                    <div className="card" width="18rem">
                        <div className="card-body">
                            <h5 className="card-title text-center text-primary">Valor entrada</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                content.</p>
                            <a href="#" className="fas fa-dollar-sign fs-4 text-primary"></a>
                        </div>
                    </div>
                </div>
                <span className="text-primary fs-4 fw-bolder ms-5">Lo que mas gustó a otros asistentes</span>
                <div className="d-flex justify-content-around my-5">
                    <div className="card" width="18rem">
                        <div className="card-body">
                            <h5 className="card-title text-primary">Maria</h5><i className="fas fa-user-circle text-primary fs-3"></i>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima repellendus molestias, minus voluptate fugiat, doloremque deserunt sunt dolore veritatis id modi sequi ducimus ad eligendi. Natus harum nesciunt illum magni..</p>
                            <a href="#" className="fas fa-map-marker-alt fs-4 text-primary"></a>
                        </div>
                    </div>
                    <div className="card" width="18rem">
                        <div className="card-body">
                            <h5 className="card-title text-primary">Pedro</h5><i className="fas fa-user-circle text-primary fs-3"></i>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus at, distinctio unde dolorum fuga doloremque. Praesentium aliquam eius consequuntur animi doloribus porro consequatur dolorem necessitatibus, deserunt nam corporis maxime in!.</p>
                            <a href="#" className="fas fa-calendar-alt fs-4 text-primary"></a>
                        </div>
                    </div>
                    <div className="card" width="18rem">
                        <div className="card-body">
                            <h5 className="card-title text-primary">Jesus</h5><i className="fas fa-user-circle text-primary fs-3"></i>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus at, distinctio unde dolorum fuga doloremque. Praesentium aliquam eius consequuntur animi doloribus porro consequatur dolorem necessitatibus, deserunt nam corporis maxime in!.</p>
                            <a href="#" className="fas fa-dollar-sign fs-4 text-primary"></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetallesEvento;

