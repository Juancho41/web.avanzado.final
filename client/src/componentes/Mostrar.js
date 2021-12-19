import React from 'react'
import { useState, useEffect } from "react";
import UnComentario from './UnComentario';

const api_base = 'http://localhost:8080/';

const Mostrar = () => {

    const [comentarios, setComentarios] = useState([]);


    useEffect(() => {
        GetComentarios();

    });

    const GetComentarios = () => {
        fetch(api_base)
            .then(res => res.json())
            .then(data => setComentarios(data))
            .catch((err) => console.error("Error: ", err));
    }
    console.log(comentarios);



    return (

        <div className='container'>
            <div className='row d-flex justify-content-around'>





            {comentarios.map((comentario, index) => (
                    <UnComentario key={index} comentario={comentario} />
                ))}







            </div>
        </div>

    )
}

export default Mostrar
