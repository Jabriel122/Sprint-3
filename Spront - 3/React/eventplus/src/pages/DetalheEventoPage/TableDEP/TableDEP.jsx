import React from "react";
import comentaryIcon from "../../../assets/images/images/comentary-icon.svg";
import trashDelete from "../../../assets/images/images/trash-delete.svg";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

// import trashDelete from "../../../assets/images/images/trash-delete.svg";
import "./TableDEP.css";

const TableDEP = ({ nome, descricao, tipo, data, comentario }) => {
  return (
    <table className="tbal-data">
      <thead className="tbal-data__head">
        <tr className="tbal-data__head-row tbal-data__head-row--red-color">
          <th className="tbal-data__head-title tbal-data__head-title--big">
            Evento
          </th>
          <th className="tbal-data__head-title tbal-data__head-title--big">
            Descrição
          </th>
          <th className="tbal-data__head-title tbal-data__head-title--big">
            Tipo
          </th>
          <th className="tbal-data__head-title tbal-data__head-title--big">
            Data do Evento
          </th>

        </tr>

        <tr className="tbal-data__head-row tbal-data__head-row--red-color">
          <th className="tbal-data__head-title tbal-data__head-title--big">
            {nome}
          </th>
          <th className="tbal-data__head-title tbal-data__head-title--medium">
            {descricao}
          </th>
          <th className="tbal-data__head-title tbal-data__head-title--big">
            {tipo}
          </th>
          <th className="tbal-data__head-title tbal-data__head-title--big">
            {data}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="tbal-data__head-title tbal-data__head-title--big">
            Usuario
          </th>
          <th className="tbal-data__head-title tbal-data__head-title--big">
            Comentario
          </th>
        </tr>

        {comentario.map((e) => {
          return (
            <tr className="tbal-data__head-row" key={Math.random()}>
              <td className="tbal-data__data tbal-data__data--big">
                {e.usuario.nome}
              </td>

              <td className="tbal-data__data tbal-data__data--big">
                {e.descricao}
              </td>

            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableDEP;
