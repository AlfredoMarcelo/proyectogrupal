import React from 'react'

export const Nosotros = () => {
    return (
        <div className="container pt-3">
            <div className="row my-5">
                <div className="col">
                    <h2 className="border bg-secondary text-white text-center rounded-3">Sobre EventClick</h2>
                </div>
            </div>
            <div className="row my-5">
                <div className="col">
                    <span className="fs-6  text-primary  fw-bolder">Lorem, ipsum
                        dolor
                        sit amet consectetur adipisicing elit. Nam, beatae! Quos officiis consectetur quo, expedita temporibus
                        ab
                        asperiores ipsa adipisci quidem recusandae ratione placeat? Quis suscipit animi magni accusantium
                        inventore.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolore fugit provident! Repellat fuga
                        voluptatibus ipsa blanditiis. Qui inventore ipsam eligendi! Saepe quis doloribus architecto aperiam vel.
                        Autem,
                        excepturi perferendis
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi possimus quisquam laboriosam suscipit,
                        atque eos
                        architecto obcaecati numquam quo assumenda aut quos nisi debitis similique ea in sunt dolores aliquid.
                    </span>
                </div>
            </div>
            <div className="row my-5">
                <div className="col">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://encolombia.com/wp-content/uploads/2021/07/La-Musica-y-el-Teatro.jpg"
                                    className="d-block w-100" alt="..." width="500px" height="500px" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://es.web.img3.acsta.net/newsv7/21/03/24/12/11/5455848.jpg"
                                    className="d-block w-100" alt="..." width="500px" height="500px" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://garajedelrock.com/wp-content/uploads/2020/08/conciertos-y-festivales-655x368-1.jpg"
                                    className="d-block w-100" alt="..." width="500px" height="500px" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nosotros;