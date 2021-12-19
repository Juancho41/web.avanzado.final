import React from 'react'
import imagen1 from '../imagenes/A - Simpsons/A001.jpg'
import imagen2 from '../imagenes/B - Star Wars/B002.jpg'
import imagen3 from '../imagenes/C - Series & Peliculas/C002.jpg'

import imagen4 from '../imagenes/clientesPC.jpg'
import imagen5 from '../imagenes/clientesTeles.jpg'



const Home = () => {




    return (
        <div >
            <header>
                <div className="titulo">
                    Juanito y sus pegatinas
                </div>
                <div className="header">
                </div>
            </header>
            <h1 className="display-2 text-center mb-4 ultimos">Últimos Stickers</h1>
            <div className='container cuadro'>
                <div className='row d-flex justify-content-around '>
                    <div className=" col-sm-12 card mt-5">
                        <img src={imagen1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <a href="/" className="btn btn-dark">Comprar</a>
                        </div>
                    </div>
                    <div className=" col-sm-12 card mt-5">
                        <img src={imagen2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <a href="/" className="btn btn-dark">Comprar</a>
                        </div>
                    </div>
                    <div className=" col-sm-12 card mt-5">
                        <img src={imagen3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <a href="/" className="btn btn-dark">Comprar</a>
                        </div>
                    </div>
                </div>


            </div>
            <h1 className="display-2 text-center ultimos">La gente anda diciendo</h1>
            <div className="container  ">
                <div className='row d-flex justify-content-around'>
                    <div className="imagenes2 p-5 col-12 col-md-6">
                        <div className="desc1">@ana.paz: feliz con mis nuevas pegatinas!</div>
                        <div className="stars">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star notchecked"></span>
                        </div>
                        <a target="_blank" href="clientes - termo.jpg"><img src={imagen4} alt="termo" className="img-fluid " />
                        </a>
                    </div>

                    <div className="imagenes3 p-5 col-12 col-md-6">
                        <a target="_blank" href="clientes - PC.jpg">
                            <img src={imagen5} alt="PC" className="img-fluid " />
                        </a>
                        <div className="desc2">@pablo.lopez: Gracias Juanito! Quedaron buenisimos.</div>
                        <div className="stars2">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star notchecked"></span>
                        </div>
                    </div>

                </div>



            </div>
        </div>


    )
}

export default Home
