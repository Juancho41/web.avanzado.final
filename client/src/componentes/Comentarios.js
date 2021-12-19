import React from 'react'
import { useState } from 'react'
import BotonFiltro from './BotonFiltro';
import Mostrar from './Mostrar';


const api_base = 'http://localhost:8080/';


const Comentarios = ({ pedido, mostrar }) => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [mail, setMail] = useState('');
    const [codigos, setCodigos] = useState('');
    const [mostarCom, setMostrarCom] = useState(false);


    const añadirPedido = async (pedido) => {

        const res = await fetch(api_base, {
            method: 'POST',

            headers: {

                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pedido)
        });

        const data = await res.json();

        console.log(data);


    };


    const onSubmit = (e) => {
        e.preventDefault()

        if (!nombre) {
            alert('Por favor coloque su nombre')
            return
        }
        if (!apellido) {
            alert('Por favor coloque su apellido')
            return
        }
        if (!mail) {
            alert('Por favor coloque su email')
            return
        }
        if (!codigos) {
            alert('Por favor coloque los codigos de los stickers que desea')
            return
        }


        pedido = {
            "nombre": nombre,
            "apellido": apellido,
            "email": mail,
            "comentario": codigos
        }

        console.log(JSON.stringify(pedido));

        añadirPedido(pedido);

        setNombre('')
        setApellido('')
        setMail('')
        setCodigos('')

    }




    return (
        <div>
            <div>

                <div className="row justify-content-center">
                    <div className="col-md-8 col-sm-12">
                        <div className="container">
                            <br />
                            <br />
                            <br />
                            <h1 className="tituloContacto">Contactanos!</h1>
                            <p>¿Ya elegiste tus stickers? Completá el siguiente formulario con tu nombre, mail y el código de los stickers.Una vez que recibamos tu pedido, nos pondremos en contacto para coordinar el pago y la entrega.</p>
                        </div >

                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-sm-12">
                        <div className="container">
                            <form action="" name="form1" onSubmit={onSubmit}>
                                <div className="mb-3">
                                    <label className="form-label ">Nombre:</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" name="formNombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label ">Apellido:</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" name="formNombre" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                                    <div id="emailHelp" className="form-text">No compartiremos tu apellido con nadie.</div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email:</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" name="formEmail" value={mail} onChange={(e) => setMail(e.target.value)} />
                                    <div id="emailHelp" className="form-text">No compartiremos tu mail con nadie.</div>

                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Códigos de stickers:</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="codigoStickers" value={codigos} onChange={(e) => setCodigos(e.target.value)}></textarea>
                                    <div id="emailHelp" className="form-text">Debes colocar los codigo que aparecen en las imagenes de los stickes que quieras pedir. Por ejemplo: A001, A002.</div>

                                </div>

                                <button type="submit" className="btn btn-primary" name="btnSubmit" id="btn" >Submit</button>
                            </form>
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <button onClick={() => setMostrarCom(!mostarCom)} className='btn btn-dark'> Mostrar últimos pedidos! </button>
                    <br />
                    <div>
                        {mostarCom ? (<Mostrar />) : ('')}
                    </div>
                    <br />
                </div>


            </div>
        </div>
    )
}

export default Comentarios
