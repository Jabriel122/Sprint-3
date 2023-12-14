import React, { useEffect, useState } from "react";
import api, { eventsResource, eventsTypeResource, detailsEventResource } from "../../Services/Services";
import Container from "../../components/Container/Container";
import MainContent from "../../components/MainContnet/MainContent";
import Titulo from "../../components/Titulo/Titulo";
import Table from "./TableDEP/TableDEP";
import "./DeatlheEventoPage.css";
import { dateFormatDbToView } from "../../Utils/stringFunctions";
import { useParams } from "react-router-dom";

const DetalheEventoPage = () => {

  const { idEvento } = useParams();

  const [comentario, setComentarios] = useState([]);
  const [nomeEvento, setNomeEvento] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState("");
  const [data, setData] = useState("");




  //Roda o carregamento da página e sempre que o tipo evento for alterado
  useEffect(() => {




    getAll(idEvento);
  }, []);


  async function getAll(id) {
    try {
      //eventos
      const meuEvento = await api.get(`${eventsResource}/${id}`);
      const meuTipo = await api.get(
        `${eventsTypeResource}/${meuEvento.data.idTipoEvento}`
      );

      setNomeEvento(meuEvento.data.nomeEvento);
      setDescricao(meuEvento.data.descricao);
      setTipo(meuTipo.data.titulo);
      setData(dateFormatDbToView(meuEvento.data.dataEvento));

      const meusComentarios = await api.get(`${detailsEventResource}${id}`);
      setComentarios(meusComentarios.data);

    } catch (error) {
      console.log("Erro ao trazer evento, DetalhesEventoPage");
    }
  }

  return (
    <>
      {/* <Header exibeNavbar={exibeNavbar} setExibeNavbar={setExibeNavbar} /> */}

      <MainContent>
        <Container>
          <Titulo titleText={"Detalhes do Evento"} className="custom-title" />


          <Table
            nome={nomeEvento}
            descricao={descricao}
            tipo={tipo}
            data={data}
            comentario={comentario}
          />
        </Container>
      </MainContent>

      {/* SPINNER -Feito com position */}
    </>
  );
};

export default DetalheEventoPage;
