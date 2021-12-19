import React from 'react'

const UnComentario = ({ comentario }) => {
    return (
        <div className='col' >
            <div className="card mt-5" >
                <div className="card-body">
                    <h5 className="card-title">{comentario.nombre}</h5>
                    
                    <p className="card-text">{comentario.comentario}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default UnComentario
