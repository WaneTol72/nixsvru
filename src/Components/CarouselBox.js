import React, {Component} from 'react';
import {Container, ProgressBar, Image} from "react-bootstrap";
import {ButtonModal} from "./Modal";
import Carousel from 'react-bootstrap/Carousel';
import Pic1 from '../assets/pic1.webp';
import Pic2 from '../assets/pic2.webp';
import Pickaxe from '../logo/pickaxe.webp'

const url0 = "https://api.mcsrvstat.us/2/play.nixsv.ru:25565";
const url1 = "https://api.mcsrvstat.us/2/play.nixsv.ru:25566";

function OnlineServer(props) {
    let online0 = props.online;
    let max0 = props.max;
    return (
        <>
            <p className="p-0 m-0"><span>{online0}</span> / {max0}</p>
            <ProgressBar variant="success" className="mr-auto ml-auto mt-2" max={max0} now={online0}/>
        </>
    );
    }
function OfflineServer() {
    return (<h2>Сервер <span style={{color:"red"}}>выключен</span></h2>)
}

    class CarouselBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data0: {
                online: false,
            },
            data1: {
                online: false,
            }
        }
    }

    async componentDidMount() {
       async function serverStatus(url) {
           console.log("Соединение с API...");
            try {
                console.log("Запрос JSON...");
                const response = await fetch(url);
                const data = await response.json();
                console.log("Данные успешно занесены");
                return data
            }
            catch (err) {
                console.error('Ошибка:', err);
            }
        }
        const setState = async (data, url) => {data === "data0" ? this.setState({ data0: await serverStatus(url)}) : this.setState({ data1: await serverStatus(url)});};
        await setState("data0", url0);
        await setState("data1", url1);
        setInterval(async () => {await setState("data0", url0); await setState("data1", url1);}, 60000);
    }
render() {
    return (
            <>
            <Carousel id="home" interval={null} indicators={false} fade={true}>
                <Carousel.Item>
                    <Image
                        className="darkness d-block min-vh-100 w-100"
                        style={{objectFit: 'cover'}}
                        src={Pic1}
                        alt="Picture-1"
                    />
                    <Carousel.Caption className="carousel-caption2">
                        <Container>
                            <Image
                            src={Pickaxe}
                            height={120}
                            className="pix mb-2"
                            alt="Pickaxe"
                            />
                            <div id="stats0">
                                {this.state.data0.online ? <OnlineServer online={this.state.data0.players.online}  max={this.state.data0.players.max}/> : <OfflineServer />}
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
                                body={<><h4>Скопируйте адрес:</h4><h5>play.nixsv.ru</h5><p>Скопируйте ip и добавьте его в minecraft сервера, чтобы не забыть!</p></>}
                            />
                    </Container>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
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
                                {this.state.data1.online ? <OnlineServer online={this.state.data1.players.online}  max={this.state.data1.players.max}/> : <OfflineServer />}
                            </div>
                            <h1 className="font-weight-bold">Pheonix Test</h1>
                            <h2>В разработке</h2>
                            <ButtonModal
                                disabled={true}
                                text={"Играть"}
                                title={"Окно копирования"}
                                variant={"success"}
                                body={<><h4>Скопируйте адрес:</h4><h5>Пусто</h5><p>Скопируйте ip и добавьте его в minecraft сервера, чтобы не забыть!</p></>}
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