import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import DonateCarousel from "./DonateCarousel";


class Donate extends Component {
    render() {
        return (
            <Container id="donate" className="text-white bg-dark mw-100 vh-100">
                    <DonateCarousel />
            </Container>
        );
    }
}

export default Donate;