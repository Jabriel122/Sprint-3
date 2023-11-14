import axios from "axios";
export const eventsResource = '/Eventos';
export const nextEventsResource = '/Eventos/ListarProximo'
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