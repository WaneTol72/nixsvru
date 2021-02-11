import React, {Component} from 'react';
import CarouselBox from '../Components/CarouselBox'
import Donate from "../Components/Donate";

class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <Donate />
                </>
        );
    }
}

export default Home;