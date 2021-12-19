import React from 'react'
import icono2 from '../imagenes/icono2.jpg'


const Header = ({compra}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            
            <div className="container-fluid">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li>
                            <img src={icono2} alt='icono' className='icono' />
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/catalogo">Catálogo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/comentarios">Contacto</a>
                        </li>
                        
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;
