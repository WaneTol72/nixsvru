import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Info extends Component {

    render() {
        return (
            <Container className="mw-100">
                <Row className="bg-dark text-white p-4">
                    <Col md={12}>
                        <h2>Почему мы...</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra, purus ac interdum faucibus, risus arcu bibendum est, sed porttitor turpis magna sit amet turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In tempus turpis et sodales interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam consequat, felis sed pellentesque gravida, ligula magna volutpat nisl, at ultrices ante ligula in mauris. Phasellus dictum tellus non justo sodales aliquam. Duis elementum, leo a scelerisque bibendum, velit dolor ultrices tellus, at eleifend mauris lacus eget dui. Donec gravida molestie nulla id feugiat. Cras bibendum lacinia tristique. In hac habitasse platea dictumst. Mauris orci orci, hendrerit id tincidunt sit amet, consequat quis magna. Donec laoreet ex vitae nisl egestas, nec molestie libero vestibulum.</p>
                    </Col>
                </Row>
            </Container>

    );
    }
}

export default Info;