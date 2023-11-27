import React from 'react';
import './NextEvent.css'
import { dateFormatDbToView } from "../../Utils/stringFunctions"
import { Tooltip } from 'react-tooltip';

function conectar(idEvent) {
    alert(`Chamar o rescurso para conectar ${idEvent}`)
}

const NextEvent = ({ title, description, eventDate, idEvent }) => {
    return (
        <article className="event-card">
            <h2
                className="event-card__title"
            >
                {title}
            </h2>
            <p
                className="event-card__description"
                data-tooltip-id={idEvent}
                data-tooltip-content={description}
                data-tooltip-place="bottom"
            >
                <Tooltip id={idEvent} className='tooltip' />
                {description.substr(0, 15)}
            </p>
            <p className='event-card__description'>
                {dateFormatDbToView(eventDate)}
            </p>

            <a onClick={() => { conectar(idEvent) }} href="" className='event-card__connect-link'>Conectar</a>
        </article>
    );
};

export default NextEvent;