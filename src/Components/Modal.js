import React from 'react';
import {Button} from "react-bootstrap";
import {Modal} from "react-bootstrap";

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
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.body}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>

    );
}

export function ButtonModal(props)  {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Button disabled={props.disabled} onClick={() => setModalShow(true)} size="lg" variant={props.variant} className="mr-2 ml-2 rounded-pill">
                {props.text}
            </Button>
            <MyVerticallyCenteredModal
                title={props.title}
                body={props.body}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}
