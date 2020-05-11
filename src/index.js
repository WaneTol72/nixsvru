import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image} from "react-bootstrap";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home"
import LOG from "./logo/server.png"

class App extends React.Component {
    state = {
        loading: true
    };

    componentDidMount() {
        // this simulates an async action, after which the component will render the content
        demoAsyncCall().then(() => this.setState({ loading: false }));
    }

    render() {

        const { loading } = this.state;

        if(loading) { // if your component doesn't have to wait for an async action, remove this block
            return (
                <>
                    <div className="bg-dark bg">
                        <div className="wrap">
                            <Image className="loader" src={LOG}/>
                            <h1 className="loader-text">Загрузка...</h1>
                        </div>
                    </div>
                    </>
        ); // render null when app is not ready
        }

        return (
            <div>
                <Header />
                <Home />
                <Footer />
            </div>
        );
    }
}

function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
