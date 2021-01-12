import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './DonateCarousel.scss';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image, Toast} from "react-bootstrap";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Rules from "./Components/Rules";
import Post from "./Components/Post";
import LOG from "./logo/server.webp";

function demoAsyncCall() {
    return new Promise((resolve) => resolve());
}

class App extends React.Component {
    state = {
        loading: true,
        setShow: false,
        show: false,
        timer: 0
    };

    componentDidMount() {
        // this simulates an async action, after which the component will render the content
        demoAsyncCall().then(() => this.setState({loading: false}));
        setTimeout(() => this.setState({show: true}), 5000);
        let i = 0;
        setInterval(() => {
            i++;
            this.setState({timer: i})
            }, 60000)
    }

    render() {

        const {loading} = this.state.loading;

        if (loading) { // if your component doesn't have to wait for an async action, remove this block
            return (
                <>
                    <div className="bg-dark bg">
                        <div className="wrap">
                            <Image className="loader" src={LOG}/>
                        </div>
                    </div>
                </>
            ); // render null when app is not ready
        }
        return (
            <>
                <Header/>
                <Home/>
                <Post/>
                <Rules/>
                <Footer/>
                <Toast
                    className="position-fixed text-light"
                    style={{bottom: "1%", right: 0, zIndex: 5}}
                    onClose={() => this.setState({show: false})} show={this.state.show}
                >
                    <Toast.Header className="text-light">
                        <i className="bi bi-x"></i>
                        <strong className="mr-auto">WaneTol72</strong>
                        {this.state.timer > 0 ? <small> {this.state.timer} мин назад</small> : <small>Сейчас</small>}
                    </Toast.Header>
                    <Toast.Body>Купи донат плз, меня держат в заложниках :С</Toast.Body>
                </Toast>
                <div id="vk_community_messages"></div>
            </>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
