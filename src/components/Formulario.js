import React, {useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({guardarBusquedaLetra}) => {

    //State de la busqueda
    const [busqueda, guardarBusqueda] = useState({
        artista: '',
        cancion: ''
    });
    const [error, guardarError] = useState(false);

    const {artista, cancion} = busqueda;

    //Función a cada input para leer su contenido
    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    //Consultar las APIs
    const buscarInformacion = e =>{
        e.preventDefault();

        if(artista.trim() === ''  || artista.trim() === ''){
            guardarError(true);
            return;
        } 

        guardarError(false);
        //Pasar al componente principal
        guardarBusquedaLetra(busqueda);
    }

    return ( 
        <div className="bg-info">
            {error ? 
                    <Error mensaje="TODOS LOS CAMPOS SON OBLIGATORIOS" />
                     : null}
            <div className="container">
                <div className="row">
                    <form
                        onSubmit={buscarInformacion}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                                <legend className="text-center">BUSCADOR DE LETRAS DE CANCIONES</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre Artista"
                                            onChange={actualizarState}
                                            value={artista}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre Canción"
                                            onChange={actualizarState}
                                            value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button 
                                type="submit" 
                                className="btn btn-primary float-right"
                            >BUSCAR</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
     );
}

Formulario.propTypes = {
    guardarBusquedaLetra: PropTypes.func.isRequired
}
 
export default Formulario;
