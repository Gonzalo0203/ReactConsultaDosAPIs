import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Info from './components/Info';
import Error from './components/Error';
import axios from 'axios';

function App() {

  //State del Formulario
  const [busquedaletra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState('');
  const [infoartista, guardarInfoArtista] = useState({});
  const [error, guardarError] = useState(false);

  const {artista, cancion} = busquedaletra;

  useEffect (() => {
    //Verificar si se están pasando datos en el formulario
    if(Object.keys(busquedaletra).length === 0) return;

    const consultarApiLetra = async () => {
      try{
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, informacion] = await Promise.all ([
        axios.get(url),
        axios.get(url2)
      ]);

      guardarLetra(letra.data.lyrics);
      guardarInfoArtista(informacion.data.artists[0]);
      
      guardarError(false);
      
        
      }  catch(err) {
        guardarError(true);
      }
    }
    consultarApiLetra();
    // eslint-disable-next-line
  }, [busquedaletra, infoartista, guardarError]);

  let componenteInfo;
  let componenteCancion
  if(error){
    componenteInfo = <Error mensaje="LO SIENTO, NO HAY RESULTADOS PARA TU BUSQUEDA!!" />
  }else{
    componenteInfo = <Info 
                    infoartista={infoartista}
                    artista={artista}
                  />
    componenteCancion = <Cancion 
                        letra={letra}
                        cancion={cancion}
                      />
  }
    return (
      <Fragment>
        <Formulario 
          guardarBusquedaLetra={guardarBusquedaLetra}
        />
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              {componenteInfo}
            </div>
            <div className="col-md-6">
              {componenteCancion}
            </div>
          </div>
        </div>
      </Fragment>
    );
}

export default App;