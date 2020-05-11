import React, {Component} from 'react';
import {Button, Container, ProgressBar, Modal, Image} from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Pic1 from '../assets/pic1.png';
import Pic2 from '../assets/pic2.png';
import Pickaxe from '../logo/pickaxe.png'

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

class CarouselBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data0: {
                players: {
                    online: 0,
                    max: 100
                }
            },
            data1: {
                players: {
                    online: 0,
                    max: 100
                }
            }
        }
    }

    async componentDidMount() {
        let serverstats = async () => {
            const server0 = await fetch("https://api.mcsrvstat.us/2/play.nixsv.ru:25565");
            const server1 = await fetch("https://api.mcsrvstat.us/2/play.nixsv.ru:25566");
            const data0 = await server0.json();
            const data1 = await server1.json();
            this.setState({data0: data0});
            this.setState({data1: data1});
        };
        await serverstats();
        setInterval(await serverstats, 30000);
    }

    componentDidUpdate() {
        let UpdateServers = () => {
            if (this.state.data0.online !== true) {
                document.getElementById('stats1').innerHTML = "<h2>Сервер <span style='color:red'>выключен</span></h2>";
            }
            if (this.state.data1.online !== true) {
                document.getElementById('stats2').innerHTML = "<h2>Сервер <span style='color:red'>выключен</span></h2>";
            }
        };
        UpdateServers();
    }

render() {
    let online0 = () => {
        if (this.state.data0.online === true) {
            return this.state.data0.players.online;
        }
        else {
            return 100;
        }
    };
    let max0 = () => {
            if (this.state.data0.online === true) {
                return this.state.data0.players.max;
            }
            else {
                return 100;
            }
        };

    let online1 = () => {
        if (this.state.data1.online === true) {
            return this.state.data1.players.online;
        }
        else {
            return 100;
        }
    };
    let max1 = () => {
        if (this.state.data1.online === true) {
            return this.state.data1.players.max;
        }
        else {
            return 100;
        }
    };

        return (
            <>
            <Carousel id="home" interval={null} indicators={false} fade={true}>
                <Carousel.Item>
                    <Image
                        className="darkness d-block min-vh-100 w-100"
                        style={{objectFit: 'cover'}}
                        src={Pic1}
                    />
                    <Carousel.Caption className="carousel-caption2">
                        <Container>
                            <Image
                            src={Pickaxe}
                            height={120}
                            className="pix mb-2"
                            />
                            <div id="stats1">
                                <p className="p-0 m-0"><span>{online0()}</span> / {max0()}</p>
                                <ProgressBar variant="success" className="mr-auto ml-auto mt-2" max={max0()} now={online0()} />
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
                            <h1 className="font-weight-bold">Pheonix Хуяссик</h1>
                            <div id="stats2">
                                <p className="p-0 m-0"><span>{online0()}</span>/{max0()}</p>
                                <ProgressBar variant="warning" className="mr-auto ml-auto mt-2" max={max1()} now={online1()} />
                            </div>
                            <h2>Хуёвый сервер</h2>
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