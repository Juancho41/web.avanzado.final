import React from 'react'
import face from '../imagenes/face.png'
import insta from '../imagenes/insta.png'


const Footer = () => {
    return (
        <div className='container-fluid footer bg-dark'>
            <p> Juanito y sus Pegatinas</p>
            <a href="https://facebook.com"><img src={face} alt="" className="redes" /></a>
            <a href="https://instagram.com"><img src={insta} alt="" className="redes" /></a>


        </div>
    )
}

export default Footer
