import axios from "axios";

///Rotas para Eventos
export const eventsResource = '/Evento';
export const myEventsResource = '/EventosAluno';
export const nextEventsResource = '/Evento/ListarProximo';

///Rotas para Login
export const loginResource = '/Login';

//Rotas para Tipo Evento
export const eventsTypeResource = '/TiposEvento';

const apiPort ='5000';
const localApiUri = `http://localhost:${apiPort}/api`;
const externaApiUri = null;

const api = axios.create({
    baseURL: localApiUri
});

export default api;