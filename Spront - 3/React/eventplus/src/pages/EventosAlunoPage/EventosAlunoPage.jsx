import React, { useContext, useEffect, useState } from "react";
// import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContnet/MainContent";
import Title from "../../components/Titulo/Titulo";
import Table from "./TableEvA/TableEvA";
import Container from "../../components/Container/Container";
import { Select } from "../../components/FormComponents/FormComponents";
import Spinner from "../../components/Spinner/Spinner";
import Modal from "../../components/Modal/Modal"
import api, { eventsResource, presencsEventsReource, myCommentaryEventsResource, commentaryEventsResource } from "../../Services/Services"

import "./EventosAlunoPage.css";
import { UserContext } from "../../context/AuthContext";
import { myEventsResource } from "../../Services/Services";

const EventosAlunoPage = () => {
  // state do menu mobile
  const [exibeNavbar, setExibeNavbar] = useState(false);
  const [eventos, setEventos] = useState([]);
  // select mocado
  const [quaisEventos, setQuaisEventos] = useState([
    { value: 1, text: "Todos os eventos" },
    { value: 2, text: "Meus eventos" },
  ]);

  const [tipoEvento, setTipoEvento] = useState("1"); //código do tipo do Evento escolhido
  const [showSpinner, setShowSpinner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [comentario, setComentario] = useState("")
  const [newCommentary, setNewCommentary] = useState([])

  // recupera os dados globais do usuário
  const { userData } = useContext(UserContext);
  const [idEvento, setIdEventos] = useState("")
  const [idComentario, setIdComentario] = useState("")


  //Roda o carregamento da página e sempre que o tipo evento for alterado
  useEffect(() => {

    loadEventsType();
  }, [tipoEvento, userData.userId]);

  async function loadEventsType() {
    setShowSpinner(true);
    setEventos([]);//Zerar o arry dos eventos

    if (tipoEvento === "1") { //chamar a api de todos os eventos
      try {
        // Listar Eventos (Eventos)
        const todosEventos = await api.get(eventsResource);
        const meusEventos = await api.get(`${myEventsResource}/${userData.userId}`);

        const eventosMarcados = verificaPresenca(todosEventos.data, meusEventos.data);
        setEventos(eventosMarcados);

        console.clear()
        console.log("Todos OS EVENTOS")
        console.log(todosEventos.data)
        console.log("MEUS EVENTOSS")
        console.log(meusEventos.data)
        console.log("EVENTOS MARCADOSSS")
        console.log(eventosMarcados)


      } catch (error) { //colocar notificação
        console.log("Erro na API")
        console.log(error)
      }
    } else if (tipoEvento === "2") {
      //Listar meus eventos (presencasEventos)
      try {
        const retornoEventos = await api.get(`${myEventsResource}/${userData.userId}`);
        console.log("Minhas Presenças")
        console.log(retornoEventos.data)
        const arrEventos = [];//arry vazio
        retornoEventos.data.forEach((e) => {
          arrEventos.push({ ...e.evento, situacao: e.situacao, idPresencaEvento: e.idPresencaEvento });
        });
        setEventos(arrEventos)
        // console.log(arrEventos)
      } catch (error) { //colocar notificação
        console.log("Erro na API")
        console.log(error)
      }
    } else {
      setEventos([]);
    }
    setShowSpinner(false)
  }

  const verificaPresenca = (arrAllEvents, eventsUser) => {
    for (let x = 0; x < arrAllEvents.length; x++) { //Para cada evento principal
      for (let i = 0; i < eventsUser.length; i++) {//Procurar a correpndência em minhas presenças
        if (arrAllEvents[x].idEvento === eventsUser[i].evento.idEvento) {
          arrAllEvents[x].situacao = true;
          arrAllEvents[x].idPresencaEvento = eventsUser[i].idPresencaEvento;

          break;//Paro de procurar para o evento principal atual
        } else {
          arrAllEvents[x].situacao = false //O else não é necessário, seria caso JavaScript fosse tipado igual a o C#.. (Só coloquei para deixar claro isso)
        }
      }
    }

    //retorna todos os eventos marcados com a presença do usuário
    return arrAllEvents;
  }
  //Criar uma função para trazer os eventos do aluno ou todos os eventos

  // toggle meus eventos ou todos os eventos
  function myEvents(tpEvent) {
    setTipoEvento(tpEvent);
  }

  //Ler um comentário - get
  async function loadMyComentary (){
    const promise = await api.get(`${myCommentaryEventsResource}?idUsuario=${userData.userId}&idEvento=${idEvento}` )
    console.log("Espero que esteja aparencendo")
    console.log(userData.userId,idEvento)
    console.log(promise.data.descricao)
    setComentario(promise.data.descricao)
   
  }



  //Cadastra um cometário - post
  async function postMyComentary(){
    try {
      const promise = await api.post(commentaryEventsResource, {
        descricao: newCommentary,
        exibe: true,
        idUsuario: userData.userId,
        idEvento: idEvento
      })

      if(promise.status === 200 || promise.status === 201 || promise.status === 202){
        setComentario(newCommentary)
        setNewCommentary("")
        console.log("AQUI OLHA AQUI")
      }
    
    } catch (error) {
      console.log("Erro ao cadastra o comentário")
    }

  }

  const showHideModal = (idEvent) => {
    setShowModal(showModal ? false : true);
    //setUserData({ ...userData, idEvento: idEvent })
    setIdEventos(idEvent);
    setComentario("")
    setNewCommentary("")
  };

  //Remove o comentário - delete
  const commentaryRemove = async(idComentario) => {
    try {
      const promise = await api.delete(
          `${commentaryEventsResource}/${idComentario}`
      );
      if (promise.status === 200) {
          alert("Evento excluído com sucesso!");
      }
  } catch (error) {
      console.log("Erro ao excluir ");
      console.log(error);
  }
  };

  async function handleConnect(idEvent, whatTheFunction, presencaId = null) {
    if (whatTheFunction === "connect") {
      try {
        //Connect
        const promise = await api.post(presencsEventsReource, {
          situacao: true,
          userId: userData.userId,
          idEvento: idEvent
        });

        if (promise.status === 201) {
          loadEventsType();
          alert("Presença confirmada, parabéns")
        }
        setTipoEvento(1);//Chamar a api??
        const todosEventos = await api.get(eventsResource);
        setEventos(todosEventos.data)
      } catch (error) {
        console.log("Erro ao ao conectar o usuário de evento")
      }

      return;
    }
    //unconnect
    try {
      const unconnect = api.delete(`${presencsEventsReource}/${presencaId}`)
      if (unconnect.status === 204) {
        loadEventsType();
        alert("Desconectado do eventos")
        // const todosEventos = await api.get(eventsResource);
        // setEventos(todosEventos.data)
      }
    } catch (error) {
      console.log("Erro ao descontecta o usuário do evento")
    }


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
            fnShowModal={showHideModal}
          />
        </Container>
      </MainContent>

      {/* SPINNER -Feito com position */}
      {showSpinner ? <Spinner /> : null}

      {showModal ? (
        <Modal
          userId={userData.userId}
          idEvento={idEvento}
          showHideModal={showHideModal}
          fnGet={loadMyComentary}
          fnPost={postMyComentary}
          fnDelete={commentaryRemove}
          comentaryText={comentario}

          newCommentary={newCommentary}
          setNewCommentary={setNewCommentary}
          idComentario={idComentario}

        />
      ) : null}
    </>
  );
};

export default EventosAlunoPage;
