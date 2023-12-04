import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContnet/MainContent";
import Title from "../../components/Titulo/Titulo";
import Table from "./TableEvA/TableEvA";
import Container from "../../components/Container/Container";
import { Select } from "../../components/FormComponents/FormComponents";
import Spinner from "../../components/Spinner/Spinner";
import Modal from "../../components/Modal/Modal"
import api, {myEventsResource} from "../../Services/Services"

import "./EventosAlunoPage.css";
import { UserContext } from "../../context/AuthContext";
import { eventsResource, myEventsResource } from "../../Services/Services";

const EventosAlunoPage = () => {
  // state do menu mobile
  const [exibeNavbar, setExibeNavbar] = useState(false);
  const [eventos, setEventos] = useState([
    { nomeEvento: "Javas", idEvento: "1234", dataEvento: "20/12/2023" },
    { nomeEvento: "C#", idEvento: "2345", dataEvento: "22/12/2023" },
    { nomeEvento: "Mathias", idEvento: "0909", dataEvento: "21/12/2023" }

  ]);
  // select mocado
  const [quaisEventos, setQuaisEventos] = useState([
    { value: 1, text: "Todos os eventos" },
    { value: 2, text: "Meus eventos" },
  ]);

  const [tipoEvento, setTipoEvento] = useState(1); //código do tipo do Evento escolhido
  const [showSpinner, setShowSpinner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // recupera os dados globais do usuário
  const { userData, setUserData } = useContext(UserContext);

  //Roda o carregamento da página e sempre que o tipo evento for alterado
  useEffect(() => {




    loadEventsType();
  }, [tipoEvento]);

  //Criar uma função para trazer os eventos do aluno ou todos os eventos
  async function loadEventsType() {
    setShowSpinner(true)
    setEventos([]);//Zerar o arry dos eventos

    if (tipoEvento == 1) { //chamar a api de todos os eventos
      try {
        const retornoEventos = await api.get(`${myEventsResource}/${userData.userId}`)
        setEventos(retornoEventos.data);
      } catch (error) {

      }
    } else {

    }
  }

  // toggle meus eventos ou todos os eventos
  function myEvents(tpEvent) {
    setTipoEvento(tpEvent);
  }

  async function loadMyComentary(idComentary) {
    return "????";
  }

  const showHideModal = () => {
    setShowModal(showModal ? false : true);
  };

  const commentaryRemove = () => {
    alert("Remover o comentário");
  };

  function handleConnect() {
    alert("Desenvolver a função conectar evento");
  }
  return (
    <>
      {/* <Header exibeNavbar={exibeNavbar} setExibeNavbar={setExibeNavbar} /> */}

      <MainContent>
        <Container>
          <Title titleText={"Eventos"} className="custom-title" />

          <Select
            id="id-tipo-evento"
            name="tipo-evento"
            required={true}
            options={quaisEventos} // aqui o array dos tipos
            manipulationFunction={(e) => myEvents(e.target.value)} //Aqui só a variavel state
            defaultValue={tipoEvento}
            additionalClass="select-tp-evento"
          />
          <Table
            dados={eventos}
            fnConnect={handleConnect}
            fnShowModal={() => {
              showHideModal();
            }}
          />
        </Container>
      </MainContent>

      {/* SPINNER -Feito com position */}
      {showSpinner ? <Spinner /> : null}

      {showModal ? (
        <Modal
          userId={userData.userId}
          showHideModal={showHideModal}
          fnDelete={commentaryRemove}
        />
      ) : null}
    </>
  );
};

export default EventosAlunoPage;
