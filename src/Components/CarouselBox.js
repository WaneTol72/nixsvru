import React, {Component} from 'react';
import {Accordion, Button, Card, Container, Image, ProgressBar, Carousel} from "react-bootstrap";
import {ButtonModal} from "./Modal";
import Pic1 from '../assets/pic1.webp';
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
                console.log(data.online ?  "Онлайн: " + data.players?.online : "Сервер выключен" );
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
        function onlinePlayers(online, playersOnline, playersMax) {
            if (online) {
                return (<OnlineServer online={playersOnline} max={playersMax}/>)
            }
            else {
                return  (<OfflineServer/>)
            }
        }
        function plugins(online, plugins) {
            if (online) {
                if (plugins) {
                    return(plugins.names.join(', '))
                }
                else {
                    return(<p>Нет информации о плагинах.</p>)
                }
            }
            else {
                return(<p>Сервер выключен</p>)
            }
        }

        const Server0 = {
            desc: `Сервер со стандартным набором плагинов для комфортной и разнообразной игры, на нем есть различные мини-игры, приваты, экономика и многое другое!`,
            commands: `
            /rg claim название - Создать регион
            /rg addowner - Добавить владельца в регион
            /rg addmember - Добавить игрока в регион
            /rg remove - Удалить регион
            /rg info - Инфо о регионе
            /rg removemember - Удалить игрока из региона
            /rg removeowner - Удалить владельца из региона
            //wand - Топорик для выделения территории
            //desel - Сбросить выделение территории
            //pos1 - Выбрать первую точку
            //pos2 - Выбрать вторую точку
            /skin set - Установить скин
            /skin clear - Сбросить скин
            /skins - Меню скинов
            /skin update - обновить скин из базы
            /jobs - работы
            /warp - варп
            /tpaccept - Принять запрос на тп
            /tpdeny - Отклонить запрос на тп
            /spawn - Телепорт на спавн
            /sethome - Установить точку дома
            /home - Телепорт домой
            /delhome - Убрать точку дома
            /rules - Правила на сервере
            /pay - Передать деньги игроку
            /msg - Отправить личное сообщение
            /mail - Отправить сообщение по почте
            /list - Список игроков на сервере
            /kit start - Стартовый набор игрока
            /help - помощь по коммандам
            /helpop - попросить помощь у админа
            /balance - ваш баланс на сервере
            /baltop - топ богачей
            /afk - пометить себя AFK
            /warp list - список варпов
            /clans - кланы
            /menu - открыть меню сервера
            /rtp - рандомный телепорт по карте`,
            rules: () => {
                return (
                        <>
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
                        </>
                    )
            }
        }
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
                                    {this.state.data0.online ? onlinePlayers(this.state.data0.online, this.state.data0.players?.online, this.state.data0.players.max) : "Сервер офлайн"}
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
                                    </>}/>
                                <ButtonModal
                                    text={"Подробнее"}
                                    title={"Описание сервера Phoenix Classic"}
                                    body={<>
                                        <Accordion>
                                            <Card className="bg-dark">
                                                <Card.Header className="text-center">
                                                    <Accordion.Toggle className="text-white font-weight-bold" as={Button} variant="link" eventKey="0">
                                                        Описание
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body className="text-left">
                                                        {Server0.desc}
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card className="bg-dark">
                                                <Card.Header className="text-center">
                                                    <Accordion.Toggle className="text-white font-weight-bold" as={Button} variant="link" eventKey="1">
                                                        Доступные команды
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="1">
                                                    <Card.Body className="text-left" >
                                                        <p style={{whiteSpace: "break-spaces"}}>{Server0.commands}</p>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card className="bg-dark">
                                                <Card.Header className="text-center">
                                                    <Accordion.Toggle className="text-white font-weight-bold" as={Button} variant="link" eventKey="2">
                                                        Игроки на сервере
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="2">
                                                    <Card.Body className="text-left">
                                                        <p className="text-center">Игроков всего:
                                                            {this.state.data0.online ? <p>{this.state.data0.players.online} / {this.state.data0.players.max}</p> : <p>Сервер выключен</p>}
                                                        </p>
                                                        <p>{this.state.data0.online ? this.state.data0.players.online > 0 ? this.state.data0.players.list.join(', ') : <>Нет информации о игроках.</> : <>Сервер выключен</>}</p>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card className="bg-dark">
                                                <Card.Header className="text-center">
                                                    <Accordion.Toggle className="text-white font-weight-bold" as={Button} variant="link" eventKey="3">
                                                        Список плагинов
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="3">
                                                    <Card.Body className="text-left">
                                                        {plugins(this.state.data0.online, this.state.data0.plugins)}
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card className="bg-dark">
                                                <Card.Header className="text-center">
                                                    <Accordion.Toggle className="text-white font-weight-bold" as={Button} variant="link" eventKey="4">
                                                        Правила
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="4">
                                                    <Card.Body className="text-left">
                                                        {Server0.rules()}
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </>}
                                />
                            </Container>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        );
    }
}

export default CarouselBox;
