import React, { useEffect, useState } from 'react';
import Container from '../../components/Container/Container';
import { Input, Button, Select } from '../../components/FormComponents/FormComponents';
import MainContent from '../../components/MainContnet/MainContent';
import Titulo from '../../components/Titulo/Titulo';
import ImageIlustrator from '../../components/ImageIlustrator/ImageIlustrator';
import api, { eventsTypeResource, eventsResource, nextEventsResource } from '../../Services/Services'
import TableEv from './TableEv/TableEv';
import Notification from '../../components/Notification/Notification';
import Spinner from "../../components/Spinner/Spinner"


const EventosPage = () => {
    const idInstituicao = "12ec020e-8e25-47b8-98b1-09fe4f703211"

    const [evento, setEvento] = useState([]);
    const [idEvento, setIdEvento] = useState(null); //Para editar, por cuasa do evento!

    const [frmEdit, setFrmEdit] = useState(false) //Esta em edição? Inicialmente não
    const [notifyUser, setNotifyUser] = useState(); //Componente de Notification
    const [shoSpinner, setShowSpinner] = useState(false);//Spinner Loading


    const [nomeEvento, setNome] = useState();
    const [descricao, setDescricao] = useState();
    const [tiposEvento, setTiposEventos] = useState([]);
    const [idTipoEvento, setIdTipoEvento] = useState('');

    // const [titulo] = useState();
    const [dataEvento, setDataEvento] = useState();
    /************************** useEffect *********************************************/
    useEffect(() => {
        async function loadTypeEvents() {
            setShowSpinner(true)
            try {
                const dadosEventos = await api.get(eventsResource);
                setEvento(dadosEventos.data);
                const dadosTipos = await api.get(eventsTypeResource);
                setTiposEventos(dadosTipos.data);
                console.log(evento)
            } catch (error) {
                console.log(`Deu ruim na api tipo evento${error}`);
            }
            setShowSpinner(false)
        }
        loadTypeEvents();
    }, []);

    /*****************************  CADASTRO *****************/

    async function handleSubmit(e) {
        setShowSpinner(true)
        e.preventDefault()

        if (nomeEvento.trim().length < 3) {
            setNotifyUser(
                {
                    titleNote: "Aviso",
                    textNote: "O título deve ter pelo menos 3 caracteritica",
                    imgIcon: "warning",
                    imgAlt: "Imagem de ilustraçáo de Aviso. Moça em frente a um símbolo de exclamação da ilustração",
                    showMessage: true

                }
            )
            setShowSpinner(false)
            return
        }

        try {
            const retorno = await api.post(eventsResource, {
                nomeEvento: nomeEvento,
                descricao: descricao,
                idTipoEvento: idTipoEvento,
                idInstituicao: idInstituicao,
                dataEvento: dataEvento,
            });

            // setEvento(retorno.data)

            setNome("")//reseta as variáveis
            setDescricao("")
            setDataEvento("")

          

            setNotifyUser(
                {
                    titleNote: "Sucesso",
                    textNote: "Cadastro feito com sucesso",
                    imgIcon: "success",
                    imgAlt: "Icone da ilustração",
                    showMessage: true
                }
            )
            console.log(retorno)

        } catch (error) {
            setNotifyUser(
                {
                    titleNote: "Erro",
                    textNote: "Não deu certo essa budega",
                    imgIcon: "danger",
                    imgAlt: "Imagem de ilustraçáo de erro. Rapaz segurando um balão com um simbolo x ",
                    showMessage: true
                }
            )
        }
        setShowSpinner(false)
    }


    /****************************** Função para Select *****************************/
    function dePara(retornoApi) {
        let arrayOptions = [];
        retornoApi.forEach(e => {
            arrayOptions.push({ value: e.idTipoEvento, text: e.titulo });
        });
        return arrayOptions;
    }
    /************************************** Deletar *********************************/
    async function handleDelete(idElement) {
        setShowSpinner(true)
        if (window.confirm('Confirma a exclusão')) {
            try {
                const promise = await api.delete(`${eventsResource}/${idElement}`, { idElement })
                if (promise.status == 204) {
                    const buscaEventos = await api.get(eventsResource);
                    setEvento(buscaEventos.data)
                }
            } catch (error) {
                alert('erro')
            }
        }
        setShowSpinner(false)
    }

    /************************ Editar Cadastro ************************/
    async function handleUpdate(e) {
        setShowSpinner(true)
        e.preventDefault();

        try {
            //atualizar na api
            const retorno = await api.put(eventsResource + "/" + idEvento, {
                nomeEvento: nomeEvento,
                descricao: descricao,
                dataEvento: dataEvento,
                idTipoEvento: idTipoEvento
            });//o id está no state

            if (retorno.status === 204) {
                //reseta o state
                // setTitulo("");
                // setIdEvento(null);

                //notificar o usuário
                setNotifyUser(
                    {
                        titleNote: "Sucesso",
                        textNote: "Evento Atualizado com sucesso",
                        imgIcon: "success",
                        imgAlt: "Imagem de ilustraçáo de sucesso. Moçã segurando um balao com simbolo de confirmação ok",
                        showMessage: true
                    }
                )
                //atualizar os dados na tela
                const buscarEvento = await api.get(eventsResource, eventsTypeResource);
                setNome(buscarEvento.data.nomeEvento);
                setDescricao(buscarEvento.data.descricao);
                setDataEvento(buscarEvento.data.dataEvento)
                setIdTipoEvento(buscarEvento.data.idTipoEvento)

                editActionAbort()
            }
        } catch (error) {
            //notificar o erro ao úsuario
            setNotifyUser(
                {
                    titleNote: "Erro",
                    textNote: "Erro na operação. Verifique a conexão!",
                    imgIcon: "danger",
                    imgAlt: "Imagem de ilustraçáo de erro. Rapaz segurando um balão com um simbolo x ",
                    showMessage: true
                }
            )

            console.log(error.status)
        }
        setShowSpinner(false)

    }

    async function showUpdateForm(idElement) {
        setShowSpinner(true)
        setFrmEdit(true)
        setIdEvento(idElement)//Preencher o id do evento para poder atualizar 

        try {
            const retorno = await api.get(`${eventsTypeResource}/${idElement}`);
            setDataEvento(retorno.data.dataEvento)
            setNome(retorno.data.nomeEvento)
            setDescricao(retorno.data.descricao)
            setIdTipoEvento(retorno.data.idTipoEvento)
            console.log(retorno.data)
        } catch (error) {
            setNotifyUser(
                {
                    titleNote: "Erro",
                    textNote: "Não foi possível carregar. Verifique sua conexão com a internet",
                    imgIcon: "danger",
                    imgAlt: "Imagem de ilustraçáo de erro.",
                    showMessage: true
                }
            )
        }
        setShowSpinner(false)
    }


    //Cancela a tela/ação de edição (Volta para o form de cadastro)
    function editActionAbort() {
        setShowSpinner(true)
        setFrmEdit(false)
        setNome("")//reseta as variáveis
        setDescricao("")
        setDataEvento("")
        setIdEvento(null)//reseta as variáveis
        setShowSpinner(false)
    }

    //Mostrar o formulário de edição
    async function showUpdateForm(idElement) {
        setShowSpinner(true)
        setFrmEdit(true)
        setIdEvento(idElement)//Preencher o id do evento para poder atualizar 

        try {
            const retorno = await api.get(`${eventsResource}/${idElement}`);
            setNome(retorno.data.nomeEvento)
            console.log(retorno.data)
        } catch (error) {
            setNotifyUser(
                {
                    titleNote: "Erro",
                    textNote: "Não foi possível carregar. Verifique sua conexão com a internet",
                    imgIcon: "danger",
                    imgAlt: "Imagem de ilustraçáo de erro.",
                    showMessage: true
                }
            )
        }

        setShowSpinner(false)
    }


    return (
        <>
            {<Notification{...notifyUser} setNotifyUser={setNotifyUser} />}
            {shoSpinner ? <Spinner /> : null}
            <MainContent>
                <section className='cadastro-evento-section'>
                    <Container>
                        <div className='cadastro-evento__box '>
                            <Titulo
                                titleText="Evento"
                            // color='red'

                            />
                            <ImageIlustrator
                                imageName={"evento"}
                                alt="teste"
                            />
                            <form
                                className='ftipo-evento'
                                onSubmit={frmEdit ? handleUpdate : handleSubmit}
                            >
                                {
                                    !frmEdit ? (
                                        //Cadastrar
                                        <>
                                            <Input
                                                type="text"
                                                placeholder="Nome"
                                                name={"nomeEvento"}
                                                id="nomeEvento"
                                                value={nomeEvento}
                                                manipulationFunction={(e) => { setNome(e.target.value) }}
                                            // className ="cadastro-evento__box"
                                            />
                                            <Input
                                                type="text"
                                                placeholder="Descrição"
                                                name={"descricao"}
                                                id="descricao"
                                                value={descricao}
                                                manipulationFunction={(e) => { setDescricao(e.target.value) }}
                                            // className ="cadastro-evento__box"
                                            />
                                            <Select
                                                name={"tiposEvento"}
                                                id="TiposEvento"
                                                options={dePara(tiposEvento)}
                                                value={idTipoEvento}
                                                manipulationFunction={(e) => { setIdTipoEvento(e.target.value) }}
                                            />

                                            <Input
                                                type="date"
                                                placeholder="dd/mm/aaaa"
                                                name={"data"}
                                                id="data"
                                                value={dataEvento}
                                                manipulationFunction={(e) => { setDataEvento(e.target.value) }}
                                            // className ="cadastro-evento__box"
                                            />

                                            <Button
                                                textButton={"Cadastrar"}
                                                id={"cadastrar"}
                                                name="cadastrar"
                                                type="submit"
                                                className="button-component--middle"
                                            />



                                        </>
                                    ) : (
                                        //Editar
                                        <>
                                            <Input
                                                type="text"
                                                placeholder="Nome"
                                                name={"nomeEvento"}
                                                id="nomeEvento"
                                                value={nomeEvento}
                                                manipulationFunction={(e) => { setNome(e.target.value) }}
                                            // className ="cadastro-evento__box"
                                            />
                                            <Input
                                                type="text"
                                                placeholder="Descrição"
                                                name={"descricao"}
                                                id="descricao"
                                                value={descricao}
                                                manipulationFunction={(e) => { setDescricao(e.target.value) }}
                                            // className ="cadastro-evento__box"
                                            />
                                            <Select
                                                name={"tiposEvento"}
                                                id="TiposEvento"
                                                options={dePara(tiposEvento)}
                                                value={idTipoEvento}
                                                manipulationFunction={(e) => { setIdTipoEvento(e.target.value) }}
                                            />

                                            <Input
                                                type="date"
                                                placeholder="dd/mm/aaaa"
                                                name={"data"}
                                                id="data"
                                                value={dataEvento}
                                                manipulationFunction={(e) => { setDataEvento(e.target.value) }}
                                            // className ="cadastro-evento__box"
                                            />

                                            <Button
                                                textButton={"Atualizar"}
                                                id={"atualizar"}
                                                name="atualizar"
                                                type="submit"
                                                className="button-component--middle"
                                            />
                                        </>
                                    )
                                }

                            </form>

                        </div>



                    </Container>
                </section>

                <section className='lista-eventos-section'>
                    <Container>
                        <Titulo titleText={"Lista de Evento"} color="white" />
                        <TableEv
                            dados={evento}
                            fnUpdate={showUpdateForm}
                            fnDelete={handleDelete}
                        />
                    </Container>
                </section>

            </MainContent>
        </>
    );
};

export default EventosPage;