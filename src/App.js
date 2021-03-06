import React, { Component } from 'react';
import './App.css';
import KeyPadComponent from "./components/KeyPadComponent";
import ResultComponent from './components/ResultComponent';

class App extends Component {
    constructor() {
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if (button === "=") {
            this.calculate()
        } else if (button === "C") {
            this.reset()
        } else if (button === "CE") {
            this.backspace()
        }
        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        var checkResult = ''
        if (this.state.result.includes('--')) {
            checkResult = this.state.result.replace('--', '+')
        } 
        else if (this.state.result.includes('²')){
            checkResult = this.state.result.replace(`²`,'**2')
        }
        else if (this.state.result.includes('√')){
            checkResult = this.state.result.replace('√','Math.sqrt')
        }
        else if (this.state.result.includes('mod')){
            checkResult = this.state.result.replace('mod','Math.abs')
        }
        else if (this.state.result.includes('inv')){
            checkResult = this.state.result.replace('inv','1/')
        }
        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "") + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })
            console.log(e)
        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (

            <div>
                <h1 className = "heading">SIMPLE CALCULATOR</h1>
                <div  className="calculator-body">
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;