
import './App.css';
import CardEvento from './components/CardEventos/CardEventos';
import Title from "./components/Title/Title";
import Container from './components/Container/Container';
import Contador from './components/Contador/Contador';
import Rotas from './routes';
function App() {
  //Criar as propriedades titulo, texto, textoLink
  return (
    <div className="App">
      <Rotas />
    </div>
  );
}

export default App;
