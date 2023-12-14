import React from "react";
import "./PreviousEvent.css";

import { Tooltip } from "react-tooltip";

// importar a função lá do arquivo stringFunction (destructuring)
import { dateFormatDbToView } from "../../Utils/stringFunctions";
import { Link, useParams  } from "react-router-dom";

const PreviousEvent = ({ title, description, eventDate, idEvent }) => {
  
  const {idEvento} = useParams();
  
 // function vizualizar(idEvent) {
 //   <Link to={`/detalhes-evento/${idEvent}`}> </Link>
 // }
  return (
    <article className="event-card">
      <h2 className="event-card__title">{title}</h2>

      <p
        className="event-card__description"
        
        data-tooltip-id={idEvent}
        data-tooltip-content={description}
        data-tooltip-place="top"
      >
        <Tooltip id={idEvent} className="tooltip" />
        {description.substr(0, 15)} ...
      </p>

      <p className="event-card__description">
        {/* aplicar a função pra converter a data */}
        {dateFormatDbToView(eventDate)}
      </p>

      <Link
        to={`/detalhes-evento/${idEvent}`}
        className="event-card__connect-link"
      >
        Vizualizar
      </Link>
    </article>
  );
};

export default PreviousEvent;
