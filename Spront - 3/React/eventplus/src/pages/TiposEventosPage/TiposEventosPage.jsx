import React, { useEffect, useState } from 'react';
import Titulo from '../../components/Titulo/Titulo';
import './TiposEventosPage.css'
import MainContnet from '../../components/MainContnet/MainContent'
import Container from '../../components/Container/Container'
import ImageIlustrator from '../../components/ImageIlustrator/ImageIlustrator';
import { Input, Button } from '../../components/FormComponents/FormComponents';
import api, { eventsTypeResource } from '../../Services/Services'
import TableTp from './TablesTP/TableTp';
const TiposEventosPage = () => {
    //States
    const [frmEdit, setFrmEdit] = useState(false) //Esta em edição? Inicialmente não
    const [titulo, setTitulo] = useState();
    const [tipoEventos, setTipoEventos] = useState();

    useEffect(() => {
        //define a chamada na nossa api
        async function loadEventsType() {
            try {
                const retorno = await api.get(eventsTypeResource);
                setTipoEventos(retorno.data)
                console.log(retorno.data)
            } catch (error) {
                console.log("Erro na api")
                console.log(error)
            }
        }
    }, []);
    async function handleSubmit(e) {
        e.preventDefault();//evita o submit od formulário
        if (titulo.trim().length < 3) {
            alert("0 título deve ter pelo menos 3 caracteritica")
        }

        try {
            const retorno = await api.post(eventsTypeResource, {
                titulo: titulo
            });

            alert("Cadastro com sucesso")
            console.log(retorno)
        } catch (error) {
            alert("Deu ruim no submit")
        }
    }
    function handleUpdate() {
        alert("Bora Editar")
    }

    //Cancela a tela/ação de edição (Volta para o form de cadastro)
    function editActionAbort() {
        alert("Cancelar a tela de edição de dados")
    }

    //Mostrar o formulário de edição
    function showUpdateForm() {
        alert('Vamos mmostrar o formlario e edição')
    }

    //apaga o tipo de eveno na API
    function handleDelete(idElement) {
        alert(`Vamos apagar o evento de id: ${idElement}`)
    }
    return (
        <>
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

                                            <Button
                                                textButton="Cadastrar"
                                                id="cadastrar"
                                                name="cadastrar"
                                                type="submit"

                                            />
                                        </>
                                    ) : (
                                        <p>Tela de Edição</p>
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
