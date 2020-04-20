import React from 'react';
import PropTypes from 'prop-types';

const Info = ({infoartista, artista}) => {

    if(Object.keys(infoartista).length === 0) return null;

    const {strArtistThumb, strGenre, strBiographyES, strFacebook, strTwitter, strLastFMChart} = infoartista;

    return ( 
        <div className="card border-ligth">
            <div className="card-header bg-primary text-ligth font-weigth-bold">
                Información de {artista}
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Logo Artista" />
                <p className="card-text">Género: {strGenre}</p>
                <h2 className="card-text">Biografía:</h2>
                <p className="card-text">{strBiographyES}</p>
                <p className="card-text">
                    <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
     );
}

Info.propTypes = {
    infoartista: PropTypes.object.isRequired,
    artista: PropTypes.string
}
 
export default Info;
