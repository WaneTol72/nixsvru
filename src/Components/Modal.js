import React from 'react';
import {Accordion, Button, Card, Modal} from "react-bootstrap";

function VerticallyCenteredModal(props) {
    function accord() {
        if (!props.body)
        {
            return (
                <Accordion>
                    <Card className="bg-dark">
                        <Card.Header>
                            <Accordion.Toggle className="text-white font-weight-bold" as={Button} variant="link" eventKey="0">
                                Перки
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="text-left">{props.perks}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="bg-dark">
                        <Card.Header>
                            <Accordion.Toggle className="text-white font-weight-bold" as={Button} variant="link" eventKey="1">
                                Команды
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className="text-left">{props.commands}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="bg-dark">
                        <Card.Header>
                            <Accordion.Toggle className="text-white font-weight-bold" as={Button} variant="link" eventKey="2">
                                Петы
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body className="text-left">{props.pets}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            );
        }
        else return (props.body)
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {accord()}
            </Modal.Body>
            <Modal.Footer style={props.style2}>
                <Button  onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>

    );
}

export function ButtonModal(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Button disabled={props.disabled} onClick={() => setModalShow(true)} size="lg" variant={props.variant}
                    className="mr-2 ml-2 mb-2 rounded-pill">
                {props.text}
            </Button>
            <VerticallyCenteredModal
                title={props.title}
                body={props.body}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}
export function HrefModal(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Button onClick={() => setModalShow(true)} size="lg"
                    className="mr-2 ml-2 rounded-pill">
                {props.text}
            </Button>
            <VerticallyCenteredModal
                style={{whiteSpace: "pre-line", textAlign: "center"}}
                title={props.title}
                body={props.fulldesc}
                perks={<p>{props.perks}</p>}
                commands={<p>{props.commands}</p>}
                pets={<p>{props.pets}</p>}
                show={modalShow}
                style2={{display: "block"}}
                onHide={() => setModalShow(false)}
            />
            </>
    );
}