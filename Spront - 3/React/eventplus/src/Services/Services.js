import axios from "axios";
export const eventsResource = '/Evento';
export const nextEventsResource = '/Evento/ListarProximo'
/*
Rotas para Tipo Eventos
 */
export const eventsTypeResource = '/TiposEvento'

const apiPort ='5000';
const localApiUri = `http://localhost:${apiPort}/api`;
const externaApiUri = null;

const api = axios.create({
    baseURL: localApiUri
});

export default api;