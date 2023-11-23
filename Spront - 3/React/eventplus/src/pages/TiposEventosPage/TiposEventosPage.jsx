import React, { useEffect, useState } from 'react';
import Titulo from '../../components/Titulo/Titulo';
import './TiposEventosPage.css'
import MainContnet from '../../components/MainContnet/MainContent'
import Container from '../../components/Container/Container'
import ImageIlustrator from '../../components/ImageIlustrator/ImageIlustrator';
import { Input, Button } from '../../components/FormComponents/FormComponents';
import api, { eventsTypeResource } from '../../Services/Services'
import TableTp from './TablesTP/TableTp';
import Notification from '../../components/Notification/Notification';
import Spinner from "../../components/Spinner/Spinner"
const TiposEventosPage = () => {
    //States
    const [frmEdit, setFrmEdit] = useState(false) //Esta em edição? Inicialmente não
    const [titulo, setTitulo] = useState();
    const [idEvento, setIdEvento] = useState(null); //Para editar, por cuasa do evento!
    const [tipoEventos, setTipoEventos] = useState([]); //Array
    const [notifyUser, setNotifyUser] = useState(); //Componente de Notification
    const [shoSpinner, setShowSpinner] = useState(false);//Spinner Loading

    useEffect(() => {
        //define a chamada na nossa api
        async function loadEventsType() {
            setShowSpinner(true)
            try {
                const retorno = await api.get(eventsTypeResource);
                setTipoEventos(retorno.data)
                console.log(retorno.data)
            } catch (error) {
                console.log("Erro na api")
                console.log(error)
            }
            setShowSpinner(false)
        }
        //chama a função/api no carregamento da página completa
        loadEventsType();
    }, []);

    function theMagic() {
        setNotifyUser(
            {
                titleNote: "Magia",
                textNote: "A mágica foi conjurada. Mas afinal, seria uma magia ou um simples truque de ilusão.",
                imgIcon: "success",
                imgAlt: "Imagem de ilustraçáo de sucesso.",
                showMessage: true
            }
        )
    }

    async function handleSubmit(e) {

        e.preventDefault();//evita o submit od formulário

        if (titulo.trim().length < 3) {
            setNotifyUser(
                {
                    titleNote: "Aviso",
                    textNote: "0 título deve ter pelo menos 3 caracteritica",
                    imgIcon: "warning",
                    imgAlt: "Imagem de ilustraçáo de Aviso. Moça em frente a um símbolo de exclamação da ilustração",
                    showMessage: true
                }
            )
            return
        }

        try {
            const retorno = await api.post(eventsTypeResource, {
                titulo: titulo,
                idElement: tipoEventos
            });
            //Reseta o state
            setTitulo("")//reseta as variáveis
            setIdEvento(null)//reseta as variáveis 

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
            alert("Deu ruim no submit")
        }
    }
    /****************************** EDITAR CADASTRO ***************************************************/
    async function handleUpdate(e) {
        e.preventDefault();

        try {
            //atualizar na api
            const retorno = await api.put(eventsTypeResource + "/" + idEvento,{titulo : titulo});//o id está no state

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
                const buscarEvento = await api.get(eventsTypeResource);
                setTitulo(buscarEvento.data.titulo);

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


    }

    //Cancela a tela/ação de edição (Volta para o form de cadastro)
    function editActionAbort() {
        setFrmEdit(false)
        setTitulo("")//reseta as variáveis
        setIdEvento(null)//reseta as variáveis
    }

    //Mostrar o formulário de edição
    async function showUpdateForm(idElement) {
        setFrmEdit(true)
        setIdEvento(idElement)//Preencher o id do evento para poder atualizar 

        try {
            const retorno = await api.get(`${eventsTypeResource}/${idElement}`);
            setTitulo(retorno.data.titulo)
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


    }
    /************************************ APAGA DADOS ******************************************/
    //apaga o tipo de eveno na API
    async function handleDelete(idElement) {
        if (window.confirm("Confirma a exclusão")) {
            try {
                const promise = await api.delete(`${eventsTypeResource}/${idElement}`);

                if (promise.status == 204) {
                    //avisa o usuário
                    setNotifyUser(
                        {
                            titleNote: "Sucesso",
                            textNote: "Evento deletado com sucesso",
                            imgIcon: "success",
                            imgAlt: "Imagem de ilustraçáo de sucesso.",
                            showMessage: true
                        }
                    )
                    //atualiza a varável e roda o useState nivamente (que dá um get na api)

                    const buscarEvento = await api.get(eventsTypeResource);
                    setTipoEventos(buscarEvento.data);//atualiza tipo de eventos 
                }

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
        }


    }
    return (
        <>
            {<Notification{...notifyUser} setNotifyUser={setNotifyUser} />}
            {/* SPINNER - Feito com possition */}
            {shoSpinner ? <Spinner/> : null}
            <MainContnet>
                {/* Formulário e cadastro do tipo do evento */}
                <section className='cadastro-evento-section'>
                    <Container>
                        <div className="cadastro-evento__box">
                            {/* titulo */}
                            <Titulo titleText={"Cadastro Tipo de Eventos"} />

                            {/* Imagem de ilustração */}
                            <ImageIlustrator altText="teste" imageName={"tipo-evento"} />

                            {/* componente de formulário */}
                            <form
                                className="ftipo-evento"
                                onSubmit={frmEdit ? handleUpdate : handleSubmit}
                            >
                                {/* cadastrar ou editar? */}
                                {
                                    !frmEdit ? (
                                        //Cadastrar
                                        <>
                                            <Input
                                                id="Titulo"
                                                placeholder="Título"
                                                name={"titulo"}
                                                type={"text"}
                                                required={"required"}
                                                value={titulo}
                                                manipulationFunction={(e) => {
                                                    setTitulo(e.target.value);
                                                }}

                                            />



                                            <div className="buttons-editbox">
                                                <Button
                                                    textButton="Cadastrar"
                                                    id="cadastrar"
                                                    name="cadastrar"
                                                    type="submit"
                                                    className="button-component--middle"
                                                />
                                                <Button
                                                    textButton="Magica"
                                                    id="magica"
                                                    name="magica"
                                                    type="button"
                                                    className="button-component--middle"
                                                    manipulationFunction={theMagic}
                                                />
                                            </div>



                                        </>
                                    ) : (
                                        //Editar
                                        <>
                                            <Input
                                                id="Titulo"
                                                placeholder="Título"
                                                name={"titulo"}
                                                type={"text"}
                                                required={"required"}
                                                value={titulo}
                                                manipulationFunction={(e) => {
                                                    setTitulo(e.target.value);
                                                }}


                                            />

                                            
                                            <div className="buttons-editbox">
                                                <Button
                                                    textButton="Atualizar"
                                                    id="atualiza"
                                                    name="Atualizar"
                                                    type="button"
                                                    manipulationFunction={handleUpdate}
                                                    className="button-component--mmiddle"
                                                />

                                                <Button
                                                    textButton="Cancelar"
                                                    id="cancelar"
                                                    name="cancelar"
                                                    type="submit"
                                                    manipulationFunction={editActionAbort}
                                                    className="button-component--mmiddle"
                                                />
                                            </div>


                                        </>




                                    )

                                }
                            </form>
                        </div>
                    </Container>
                </section>

                <section className='lista-eventos-section'>
                    <Container>
                        <Titulo titleText={"Lista Tipo de Eventos"} color="white" />
                        <TableTp
                            dados={tipoEventos}
                            fnUpdate={showUpdateForm}
                            fnDelete={handleDelete}

                        />
                    </Container>
                </section>
            </MainContnet>
        </>


    );
};

export default TiposEventosPage;
