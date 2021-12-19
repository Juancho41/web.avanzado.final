import React from 'react'

const BotonFiltro = ({boton, handleSetTag}) => {
    return (
        <div>
            <button className='btn btn-outline-light btn-sm m-2' onClick={() => handleSetTag(boton)}>
                {boton}
            </button>
        </div>
    )
}

export default BotonFiltro
