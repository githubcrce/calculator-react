import React, { Component } from 'react';
import './App.css';
import KeyPadComponent from "./components/KeyPadComponent";

class App extends Component {

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Simple Calculator</h1>
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;
