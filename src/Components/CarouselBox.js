import React, {Component} from 'react';
import {Button, Container, ProgressBar, Modal, Image} from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Pic1 from '../assets/pic1.png';
import Pic2 from '../assets/pic2.png';
import Pickaxe from '../logo/pickaxe.png'

const url0 = "https://api.mcsrvstat.us/2/play.nixsv.ru:25565";
const url1 = "https://api.mcsrvstat.us/2/play.nixsv.ru:25566";

    function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Окно копирования
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Скопируйте адрес:</h4>
                <h5>
                    {props.ip}
                </h5>
                <p>Скопируйте ip и добавьте его в minecraft сервера, чтобы не забыть!</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>

    );
}

function Button1(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Button onClick={() => setModalShow(true)} size="lg" variant="success" className="mr-2 ml-2 rounded-pill">
                Играть
            </Button>
            <MyVerticallyCenteredModal
                ip={props.ip}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

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
                online: true,
                players: {
                    online: 12,
                    max: 100
                }
            },
            data1: {
                online: false,
                players: {
                    online: 0,
                    max: 100
                }
            }
        }
    }

    async componentDidMount() {
        let serverStatus = async () => {
            const server0 = await fetch(url0);
            const server1 = await fetch(url1);
            const data0 = await server0.json();
            const data1 = await server1.json();
            this.setState({data0: data0});
            this.setState({data1: data1});
        };
       await serverStatus();
       setInterval(await serverStatus, 30000);
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
                                {this.state.data0.online ? <OnlineServer online={this.state.data0.players.online} max={this.state.data0.players.max} /> : <OfflineServer />}
                            </div>
                            <h1 className="font-weight-bold">Phoenix Classic</h1>
                            <h3 className="mt-1 mb-4">Классический сервер с большим набором<br/>
                                плагинов для любителей игры на <br/>
                                самом популярном типе серверов
                            </h3>
                            <Button1 ip={"play.nixsv.ru"}/>
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
                                {this.state.data1.online ? <OnlineServer online={this.state.data1.players.online} max={this.state.data1.players.max} /> : <OfflineServer />}
                            </div>
                            <h1 className="font-weight-bold">Pheonix Test</h1>
                            <h2>В разработке</h2>
                            <Button1 ip={"Пусто"}/>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </>
        );
    }
}

export default CarouselBox;