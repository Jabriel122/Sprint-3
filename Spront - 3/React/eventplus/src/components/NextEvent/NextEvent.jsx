import React from 'react';
import './NextEvent.css'

function conectar(idEvent){
    alert(`Chamar o rescurso para conectar ${idEvent}`)
}

const NextEvent = ({ title, description, eventDate, idEvent }) => {
    return (
        <article className="event-card">
            <h2 className="event-card__title">
                {title}
            </h2>
            <p className="event-card__description">
                {description}
            </p>
            <p className='event-card__description'>
                {eventDate}
            </p>

            <a onClick={() => { conectar(idEvent) }} href="" className='event-card__connect-link'>Conectar</a>
        </article>
    );
};

export default NextEvent;