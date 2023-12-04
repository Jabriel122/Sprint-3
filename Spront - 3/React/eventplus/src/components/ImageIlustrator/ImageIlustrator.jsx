import React from 'react';
import './ImageIlustrator.css'
import tipoEventoImage from '../../assets/images/images/tipo-evento.svg'
import eventoImage from '../../assets/images/images/evento.svg'
import defaultImage from '../../assets/images/images/default-image.jpeg'
import loginImage from "../../assets/images/images/login.svg";

const ImageIlustrator = ({ altText, imageName, additionalClass }) => {
    let imageResource

    switch (imageName) {

        case 'tipo-evento':
            imageResource = tipoEventoImage
            break;

        case 'evento':
            imageResource = eventoImage
            break;
        case 'login':
            imageResource = loginImage
            break;
            
        default:
            imageResource = defaultImage
            break;
    }

    return (
        <figure className="illustrator-box">
            <img
            //Para passar a imagem via prop, alterar imageResource para imageRender
                src={imageResource}
                alt={altText}
                className={`illustrator-box__image ${additionalClass}`}
            />
        </figure>
    );
};

export default ImageIlustrator;