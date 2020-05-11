import React, {Component} from 'react';
import {Col, Container, Row, Image, Button} from "react-bootstrap";
import DIAMOND from "../logo/DIAMOND.png"
import IRON from "../logo/IRON.png"
import GOLD from "../logo/GOLD.png"
import EMERALD from "../logo/EMERALD.png"
function Producttm(props) {
    return (
        <>
            <Col md={3}>
                <Image
                    src={props.picture}
                    width={"40%"}
                    className="pix d-inline-block mr-2"
                    style={{verticalAlign: "sub"}}
                    alt="Logo"
                />
                <h3 className="mt-2">{props.name}</h3>
                <h5>Описание:</h5>
                <h5 className="disc text-left">
                    {props.description}
                </h5>
                <h4>Цена: {props.price} руб.</h4>
                <Button size="lg" className="mb-4 mt-2 pr-5 pl-5 rounded-pill" variant="primary" href="https://phoenixclassic.trademc.org/">Купить</Button>
            </Col>
        </>
    );
}

class Donate extends Component {
    render() {
        return (
            <Container id="donate" className="text-white bg-dark mw-100">
                <Row className="donate text-center pr-5 pl-5">
                    <Col md={12}>
                        <h1>Донат</h1>
                    </Col>
                    <Producttm price={25} name={"PRO на месяц"} description={[
                    "Возможности:",
                    <br/>,
                    "+ /hat",
                    <br/>,
                    "+ /workbench",
                    <br/>,
                    "+ 2 /sethome",
                    <br/>,
                    "+ /ec",
                    <br/>,
                    "+ Префикс в чате",
                    <br/>,
                    "+ Возможности Default"
                ]} picture={IRON}/>
                    <Producttm price={50} name={"VIP на месяц"} description={[
                    "Возможности на Classic сервере:",
                        <br/>,
                    "+ /kit vip",
                        <br/>,
                    "+ /feed",
                        <br/>,
                    "+ /sethome",
                        <br/>,
                    "+ /tptoggle - отключать телепорт к себе+ Префикс в чате",
                        <br/>,
                    "+ Возможности PRO"
                    ]} picture={GOLD}/>
                    <Producttm price={100} name={"Premium на месяц"} description={[
                        "Возможности на Classic сервере:",
                        <br/>,
                        "+ /kit premium",
                        <br/>,
                        "+ /repair",
                        <br/>,
                        "+ 10 /sethome",
                        <br/>,
                        "+ /tptoggle - отключать телепорт к себе",
                        <br/>,
                        "+ /clear",
                        <br/>,
                        "+ /back",
                        <br/>,
                        "+ Префикс в чате на всех серверах",
                        <br/>,
                        "+ Возможности PRO и VIP"
                    ]} picture={DIAMOND}/>
                    <Producttm price={100} name={"Разбан на сервере"} description={"Разбанит вас за небольшую плату"} picture={EMERALD}/>
                </Row>
            </Container>
        );
    }
}

export default Donate;