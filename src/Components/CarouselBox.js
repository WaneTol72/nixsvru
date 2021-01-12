import React, {Component} from 'react';
import {Accordion, Button, Card, Container, Image, ProgressBar} from "react-bootstrap";
import {ButtonModal} from "./Modal";
import Carousel from 'react-bootstrap/Carousel';
import Pic1 from '../assets/pic1.webp';
import Pic2 from '../assets/pic2.webp';
import Pickaxe from '../logo/pickaxe.webp'

const url0 = "https://api.mcsrvstat.us/2/play.nixsv.ru:25565";
const url1 = "https://api.mcsrvstat.us/2/play.nixsv.ru:25566";

function OnlineServer(props) {
    let online = props.online;
    let max = props.max;
    return (
        <>
            <p className="p-0 m-0"><span>{online}</span> / {max}</p>
            <ProgressBar variant="success" className="mr-auto ml-auto mt-2" max={max} now={online}/>
        </>
    );
}

function OfflineServer() {
    return (<h2>Сервер <span style={{color: "red"}}>выключен</span></h2>)
}

class CarouselBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data0: {
                online: false,
                players: {
                    online: 0,
                    max: 0,
                    list: ["Пусто"]
                },
                plugins: {
                    names: []
                },
                motd: {
                    html: []
                }
            },
            data1: {
                online: false,
                players: {
                    online: 0,
                    max: 0
                }
            }
        }
    }

    async componentDidMount() {
        async function serverStatus(url) {
            try {
                console.log("Запрос JSON... " + url);
                const response = await fetch(url);
                const data = await response.json();
                console.log("Данные успешно занесены");
                console.log(data.online ?  "Онлайн: " + data.players.online : "Сервер выключен" );
                return data
            } catch (err) {
                console.error('Ошибка:', err);
            }
        }

        const setState = async (data, url) => {
            data === "data0" ? this.setState({data0: await serverStatus(url)}) : this.setState({data1: await serverStatus(url)});
        };
        await setState("data0", url0);
        await setState("data1", url1);
        setInterval(async () => {
            await setState("data0", url0);
            await setState("data1", url1);
        }, 60000);
    }

    render() {
        return (
            <>
                <Carousel className="" id="home" interval={null} indicators={false} fade={true}>
                    <Carousel.Item>
                        <Image
                            className="darkness d-block min-vh-100 vw-100 h-100"
                            style={{objectFit: 'cover'}}
                            src={Pic1}
                            alt="Picture-1"
                        />
                        <Carousel.Caption className="carousel-caption2">
                            <Container>
                                <Image
                                    src={Pickaxe}
                                    className="pix mb-2"
                                    alt="Pickaxe"
                                />
                                <div id="stats0">
                                    {this.state.data0.online ? <OnlineServer online={this.state.data0.players.online} max={this.state.data0.players.max}/> : <OfflineServer/>}
                                </div>
                                <h1 className="font-weight-bold">Phoenix Classic</h1>
                                <h3 className="mt-1 mb-4">Классический сервер с большим набором<br/>
                                    плагинов для любителей игры на <br/>
                                    самом популярном типе серверов
                                </h3>
                                <ButtonModal
                                    text={"Играть"}
                                    title={"Окно копирования"}
                                    variant={"success"}
                                    body={<>
                                        <h4>Адрес: <span style={{color: "gold"}}>play.nixsv.ru</span></h4>
                                        <p>Скопируйте ip и добавьте
                                        его в minecraft сервера, чтобы не забыть!</p>
                                    </>}
                                />
                                <ButtonModal
                                    text={"Подробнее"}
                                    title={"Описание сервера Phoenix Classic"}
                                    body={<>
                                        <Accordion>
                                            <Card className="bg-dark">
                                                <Card.Header className="text-center">
                                                    <Accordion.Toggle className="text-white font-weight-bold" as={Button} variant="link" eventKey="0">
                                                        Описание:
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body className="text-left">
                                                        Сервер со стандартным набором плагинов для комфортной и разнообразной игры, на нем есть различные мини-игры, приваты, экономика и многое другое!
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card className="bg-dark">
                                                <Card.Header className="text-center">
                                                    <Accordion.Toggle className="text-white font-weight-bold" as={Button} variant="link" eventKey="1">
                                                        Игроки на сервере
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="1">
                                                    <Card.Body className="text-left">
                                                        <p className="text-center">Игроков всего: {this.state.data0.players.online} / {this.state.data0.players.max}</p>
                                                        {this.state.data0.players.list.join(', ')}
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card className="bg-dark">
                                                <Card.Header className="text-center">
                                                    <Accordion.Toggle className="text-white font-weight-bold" as={Button} variant="link" eventKey="2">
                                                        Список плагинов
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="2">
                                                    <Card.Body className="text-left">
                                                        {this.state.data0.plugins.names.join(', ')}
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card className="bg-dark">
                                                <Card.Header className="text-center">
                                                    <Accordion.Toggle className="text-white font-weight-bold" as={Button} variant="link" eventKey="3">
                                                        Правила
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="3">
                                                    <Card.Body className="text-left">
                                                        <h4>Правила игры на Classic сервере:</h4>
                                                        <p>1. Гриферство запрещено.*</p>
                                                        <p>2. PVP разрешен.</p>
                                                        <p>3. Читы запрещены.</p>
                                                        <hr/>
                                                        <p>Помните, правилам подчиняются как обычные игроки, так и администрация сервера.
                                                            Если вы вдруг увидели нарушителя, сообщайте об этом Адмнистрации сервера в дискорд или в ЛС группы ВКонтакте.</p>
                                                        <p>*Гриферство (от англ. griefing — вредительство) —
                                                            акт нанесения морального или материального ущерба людям в компьютерных играх (Здесь: Minecraft).
                                                            Иными словами, это игровой вандализм.
                                                            В Minecraft гриферство в основном осуществляется путём разрушения чужих построек,
                                                            хранилища предметов или внесением в них вредных или несанкционированных изменений,
                                                            лишением игроков полученного игрового имущества.
                                                            (Намеренное ввождение в заблуждение игроков с целью наживы,
                                                            Намеренное проникновение в дома с целью разрушения и грабежа)</p>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </>}
                                />
                            </Container>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/*<Carousel.Item>
                        <Image
                            className="darkness d-block min-vh-100 w-100"
                            style={{objectFit: 'cover'}}
                            src={Pic2}
                        />
                        <Carousel.Caption className="carousel-caption2">
                            <Container>
                                <Image
                                    src={Pickaxe}
                                    height={120}
                                    className="pix mb-2"
                                    alt="Pickaxe"
                                />
                                <div id="stats1">
                                    {this.state.data1.online ? <OnlineServer online={this.state.data1.players.online} max={this.state.data1.players.max}/> : <OfflineServer/>}
                                </div>
                                <h1 className="font-weight-bold">Pheonix Test</h1>
                                <h2>В разработке</h2>
                                <ButtonModal
                                    disabled={true}
                                    text={"Играть"}
                                    title={"Окно копирования"}
                                    variant={"success"}
                                    body={<><h4>Скопируйте адрес:</h4><h5>Пусто</h5><p>Скопируйте ip и добавьте его в
                                        minecraft сервера, чтобы не забыть!</p></>}
                                />
                            </Container>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                </Carousel>
            </>
        );
    }
}

export default CarouselBox;