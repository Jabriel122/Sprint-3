import React from "react";
import "./TableTp.css";

import editPen from '../../../assets/images/images/edit-pen.svg'
import trashDelete from '../../../assets/images/images/trash-delete.svg'

const TableTp = ({ dados, fnDelete = null, fnUpdate = null }) => {
    return (
        <table className="table-data">
            <thead className="table-data__head">
                <tr className="table-data__head-row">
                    <th className="table-data__head-title table-data__head-title--big">
                        Título
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
                {dados.map((tp) => {
                    return (
                        <tr className="table-data__head-row" key={tp.idTipoEvento}>
                            <td
                                className="table-data__data table-data__data--big"

                            >
                                {tp.titulo}

                            </td>

                            <td className="table-data__data table-data__data--little">
                                <img className="table-data__icon" src={editPen} alt="" idtipoevento ={tp.idTipoEvento} onClick={() => {fnUpdate(tp.idTipoEvento)}}/>
                            </td>

                            <td className="table-data__data table-data__data--little">
                                <img idtipoevento={tp.idTipoEvento} className="table-data__icon" src={trashDelete} alt="" onClick={() => { fnDelete(tp.idTipoEvento) }} />
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};


export default TableTp;