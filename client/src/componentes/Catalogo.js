import React from 'react'
import { useState, useEffect } from 'react';
import BotonFiltro from './BotonFiltro';


const Catalogo = () => {


    const images = [
        { id: '1', name: 'A - Simpsons/A001.jpg', tag: 'simpsons' },
        { id: '2', name: 'A - Simpsons/A002.jpg', tag: 'simpsons' },
        { id: '3', name: 'A - Simpsons/A003.jpg', tag: 'simpsons' },
        { id: '4', name: 'A - Simpsons/A004.jpg', tag: 'simpsons' },
        { id: '5', name: 'A - Simpsons/A005.jpg', tag: 'simpsons' },
        { id: '6', name: 'B - Star Wars/B001.jpg', tag: 'star wars' },
        { id: '7', name: 'B - Star Wars/B002.jpg', tag: 'star wars' },
        { id: '8', name: 'B - Star Wars/B003.jpg', tag: 'star wars' },
        { id: '9', name: 'B - Star Wars/B004.jpg', tag: 'star wars' },
        { id: '10', name: 'B - Star Wars/B005.jpg', tag: 'star wars' },
        { id: '11', name: 'C - Series & Peliculas/C001.jpg', tag: 'series & peliculas' },
        { id: '12', name: 'C - Series & Peliculas/C002.jpg', tag: 'series & peliculas' },
        { id: '13', name: 'C - Series & Peliculas/C003.jpg', tag: 'series & peliculas' },
        { id: '14', name: 'C - Series & Peliculas/C004.jpg', tag: 'series & peliculas' },
        { id: '15', name: 'C - Series & Peliculas/C006 - Stranger Things.jpg', tag: 'series & peliculas' },
        { id: '16', name: 'C - Series & Peliculas/C007 - Heisenberg.jpg', tag: 'series & peliculas' },
        { id: '17', name: 'C - Series & Peliculas/C008 - Heisenberg 2.jpg', tag: 'series & peliculas' },
        { id: '18', name: 'C - Series & Peliculas/C009 - Tarantino.jpg', tag: 'series & peliculas' },
        

    ];


    const [tag, setTag] = useState('todos');
    const [filteredImages, setFilteredImages] = useState([]);
    const [compra, setCompra] = useState(1);

    useEffect(() => {
        if (tag === 'todos') {
            setFilteredImages(images)
        } else {
            setFilteredImages(images.filter(image => image.tag === tag))

        }
    },[tag]) 

    

    const sumarCompra = () => {
        setCompra(compra + 1);
        console.log(compra);

    }

    return (
        <div className='container-fluid'>
            <div className='row p-4'>
                <div className='col-12 col-lg-3 cuadro2 mt-5 indexCatalogo'>
                    <div className='tituloCatalogo text-center'>
                        Nuestro Catalogo
                    </div>
                    <div className='text-center'>
                        <BotonFiltro boton='todos' handleSetTag={setTag} />
                        <BotonFiltro boton='simpsons' handleSetTag={setTag} />
                        <BotonFiltro boton='star wars' handleSetTag={setTag} />
                        <BotonFiltro boton='series & peliculas' handleSetTag={setTag} />
                    </div>

                </div>

                <div className='col-12 col-lg-8'>
                    <div className='container'>
                        <div className='row d-flex justify-content-around'>

                            {filteredImages.map(image =>

                                <div key={image.id} className=" col-sm-12 card mt-5 ">
                                    <img src={`imagenes/${image.name}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <button href="/" className="btn btn-dark" onClick={sumarCompra}>Comprar</button>
                                    </div>
                                </div>
                            )}



                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Catalogo
