import React, { useEffect, useState } from 'react';
import './HomePage.css'
import Banner from '../../components/Banner/Banner';
import VisionSection from '../../components/VisionSection/VisionSection';
import MainContent from '../../components/MainContnet/MainContent'
import ContatoSection from '../../components/ContactSection/ContactSection'
import Titulo from '../../components/Titulo/Titulo';
import NextEvent from '../../components/NextEvent/NextEvent';
import Container from '../../components/Container/Container'
import api from '../../Services/Services';
import Notification from '../../components/Notification/Notification';

const HomePage = () => {

    const [nextEvents, setNextEvents] = useState([]); //dados em "Mocados"
    const urlLocal = 'http://localhost:5000/api'
    const [notifyUser, setNotifyUser] = useState();
    //roa somente na inicializaçõa do componente
    useEffect(() => {
        async function getNextEvents() {
            try {
                const promise = await api.get(`${urlLocal}/Evento/ListarProximos`);
                const dados = await promise.data;
                console.log(dados)
                setNextEvents(dados);//atualiza o state
            }
            catch (error) {
                setNotifyUser(
                    {
                        titleNote: "Erro",
                        textNote: "Não foi possível carregar. Verifique sua conexão com a internet",
                        imgIcon: "danger",
                        imgAlt: "Imagem de ilustraçáo de sucesso.",
                        showMessage: true
                    }
                )
            }
        }
        getNextEvents();//roda função
    }
        , [])

    return (
        <MainContent>
            {<Notification{...notifyUser} setNotifyUser={setNotifyUser} />}
            <Banner />
            <section className="proximos-eventos">

                <Container>
                    <Titulo titleText={"Próximo Eventos"} />

                    <div className="events-box">
                        {nextEvents.map((e) => {
                            return (
                                <NextEvent
                                    key={e.idEvento}
                                    eventDate={e.dataEvento}
                                    title={e.nomeEvento}
                                    description={e.descricao}
                                    idEvent={e.idEvento}
                                />
                            );
                        })
                        }

                    </div>
                </Container>



            </section>

            <section className="proximos-eventos">

                <Container>
                    <Titulo titleText={"Eventos Anteriores"} />

                    <div className="events-box">
                        {nextEvents.map((e) => {
                            return (
                                <NextEvent
                                    key={e.idEvento}
                                    eventDate={e.dataEvento}
                                    title={e.nomeEvento}
                                    description={e.descricao}
                                    idEvent={e.idEvento}
                                />
                            );
                        })
                        }

                    </div>
                </Container>



            </section>
            <VisionSection />
            <ContatoSection />
        </MainContent>
    );
};

export default HomePage;