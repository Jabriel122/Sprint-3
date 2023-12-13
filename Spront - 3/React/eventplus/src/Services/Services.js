import axios from "axios";

///Rotas para Eventos
export const eventsResource = '/Evento';

// Rotas para o recurso Listar minhas
export const myEventsResource = '/PresencasEvento/ListarMinhas';

export const myCommentaryEventsResource = '/ComentariosEvento/BuscarPorIdUsuario'
export const commentaryEventsResource = '/ComentariosEvento'

//Rotas para o recurso Listar Presença Evento
export const presencsEventsReource = '/PresencasEvento';

// Rotas para o recurso Listar Presenãs Eventos
export const nextEventsResource = '/Evento/ListarProximos';

//Likstar anteriores
export const previousEventResource = '/Evento/ListarAnteriores'

///Rotas para Login
export const loginResource = '/Login';

//Rotas para Tipo Evento
export const eventsTypeResource = '/TiposEvento';

//const apiPort ='5000';
//const localApiUri = `http://localhost:${apiPort}/api`;
const externaApiUri = `https://eventwebapi-gabrielmarchetti.azurewebsites.net/api`;

const api = axios.create({
    baseURL: externaApiUri
});

export default api;