import React from "react";
import "./TableEv.css";

import { dateFormatDbToView } from '../../../Utils/stringFunctions'
import { Tooltip } from 'react-tooltip';
import editPen from '../../../assets/images/images/edit-pen.svg'
import trashDelete from '../../../assets/images/images/trash-delete.svg'

const TableEv = ({ dados, fnDelete = null, fnUpdate = null }) => {
    return (
        <table className="table-data">
            <thead className="table-data__head">
                <tr className="table-data__head-row">
                    <th className="table-data__head-title table-data__head-title--big">
                        Título
                    </th>
                    <th className="table-data__head-title table-data__head-title--big">
                        Descrição
                    </th>
                    <th className="table-data__head-title table-data__head-title--big">
                        Tipo Evento
                    </th>
                    <th className="table-data__head-title table-data__head-title--big">
                        Data
                    </th>
                    <th className="table-data__head-title table-data__head-title--little">
                        Editar
                    </th>
                    <th className="table-data__head-title table-data__head-title--little">
                        Deletar
                    </th>
                </tr>
            </thead>

            <tbody>
                {dados.map((ev) => {
                    return (
                        <tr className="table-data__head-row" key={ev.idEvento}>
                            <td
                                className="table-data__data table-data__data--big"
                                data-tooltip-id={ev.idEvento}
                                data-tooltip-content={ev.nomeEvento}
                                data-tooltip-place="left"
                            >
                                <Tooltip id={ev.idEvento} className='custom-tootip' />
                                {ev.nomeEvento.substr(0, 20)}

                            </td>

                            <td
                                className="table-data__data table-data__data--big"
                                data-tooltip-id={ev.idEvento}
                                data-tooltip-content={ev.descricao}
                                data-tooltip-place="bottom"
                            >
                                <Tooltip id={ev.idEvento} className='custom-tootip' />
                                {ev.descricao.substr(0, 15)}
                            </td>

                            <td className="table-data__data table-data__data--big">
                                {ev.tiposEvento.titulo}
                            </td>

                            <td className="table-data__data table-data__data--big">
                                {dateFormatDbToView(ev.dataEvento)}
                            </td>

                            <td className="table-data__data table-data__data--little">
                                <img className="table-data__icon" src={editPen} alt="" idevento={ev.idEvento} onClick={() => { fnUpdate(ev.idEvento) }} />
                            </td>

                            <td className="table-data__data table-data__data--little">
                                <img idevento={ev.idEvento} className="table-data__icon" src={trashDelete} alt="" onClick={() => { fnDelete(ev.idEvento) }} />
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};


export default TableEv;