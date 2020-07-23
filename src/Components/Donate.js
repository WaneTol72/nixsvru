import React, {Component} from 'react';
import {Col, Container, Row, Image, Button, Form} from "react-bootstrap";
import DIAMOND from "../logo/DIAMOND.webp"
import IRON from "../logo/IRON.webp"
import GOLD from "../logo/GOLD.webp"
import EMERALD from "../logo/EMERALD.webp"
import {ButtonModal} from "./Modal";
// TODO сделать свою систему оплаты и кассу


function YandexForm(props) {
    return (
        <>
            <Form method="POST" action="https://money.yandex.ru/quickpay/confirm.xml">
                <Form.Control type="hidden" name="receiver" value="410011556938517" />
                <Form.Control type="hidden" name="formcomment" value="Разбан" />
                <Form.Group>
                <Form.Label column="sm">Услуга: разбан</Form.Label>
                <Form.Control type="hidden" name="short-dest"  value="Разбан" />
                </Form.Group>
                <Form.Control type="hidden" name="label" value="$order_id" />
                <Form.Control type="hidden" name="quickpay-form" value="shop" />
                <Form.Control name="targets" value="транзакция {order_id}" />
                <br />
                <p>Разбан нахуй на серве ЕБАНЫЙ РОТ</p>
                <br />
                <Form.Group as={Row}>
                    <Form.Label column="md" md={2}>Комментарий:</Form.Label>
                    <Col md={10}>
                <Form.Control name="comment" />
                    </Col>
                </Form.Group>
                        <Form.Group as={Row}>
                    <Form.Label column="md" md={1}>Сумма:</Form.Label>
                        <Col md={3}>
                <Form.Control size="lg" inline readOnly name="sum" value="100" data-type="number" />
                        </Col>
                            <Col md={8}>
                                <Form.Check label="Яндекс.Деньгами" type="radio" name="paymentType" value="PC" />
                                <Form.Check label="Банковской картой" type="radio" name="paymentType" value="AC" />
                            </Col>
                        </Form.Group>
                <Form.Control type="hidden" name="need-email" value="false" />

                <Button variant="primary" type="submit">Закинуть лавэ</Button>
            </Form>
        </>
);
}

function DonateTemplate(props) {

    return (
    props.posts.map(post =>
        <Col md={3} key={post.id}>
            <Image
                src={post.picture}
                width={"40%"}
                className="pix d-inline-block mr-2"
                style={{verticalAlign: "sub"}}
                alt="Logo-Donate"
            />
            <h3 className="mt-2">{post.title}</h3>
            <h5>Описание:</h5>
            <h5 className="disc text-left" style={{whiteSpace: "pre-line"}}>
                {post.content}
            </h5>
            <h4>Цена: {post.price} руб.</h4>
            <Button size="lg" className="mb-4 mt-2 pr-5 pl-5 rounded-pill" variant="primary" href="https://phoenixclassic.trademc.org/">Купить</Button>
        </Col>
    ));
}

class Donate extends Component {
    render() {
        const posts = [
            {
                id: 1,
                title: 'PRO на месяц',
                content:
                    `Возможности:
                    + /hat
                    + /workbench
                    + 2 /sethome
                    + /ec
                    + Префикс в чате 
                    + Возможности Default`,
                price: 25,
                picture: IRON
            },
            {
                id: 2,
                title: 'VIP на месяц',
                content:
                    `Возможности на Classic сервере:
                    + /kit vip
                    + /feed
                    + /sethome
                    + /tptoggle - отключать телепорт к себе+ Префикс в чате
                    + Возможности PRO`,
                price: 50,
                picture: GOLD
            },
            {
                id: 3,
                title: 'Premium на месяц',
                content:
                    `Возможности на Classic сервере:
                    + /kit premium
                    + /repair
                    + 10 /sethome
                    + /tptoggle - отключать телепорт к себе
                    + /clear
                    + /back
                    + Префикс в чате на всех серверах
                    + Возможности PRO и VIP`,
                price: 100,
                picture: DIAMOND
            },
            {
                id: 4,
                title: 'Разбан на сервере',
                content:
                    `Разбанит вас за небольшую плату`,
                price: 100,
                picture: EMERALD
            }
        ];
        return (
            <Container id="donate" className="text-white bg-dark mw-100">
                <Row className="donate text-center pr-5 pl-5">
                    <Col md={12}>
                        <h1>Донат</h1>
                    </Col>
                    <DonateTemplate posts={posts} />
                </Row>
            </Container>
        );
    }
}
export default Donate;