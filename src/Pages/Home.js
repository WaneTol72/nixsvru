import React, {Component} from 'react';
import CarouselBox from '../Components/CarouselBox'
import Donate from "../Components/Donate";
import Map from "../Components/Map";

class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <Donate />
                <Map />
            </>
        );
    }
}

export default Home;