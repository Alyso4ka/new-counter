import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    state = {
        startValue: 0,

    }

    onButtonClick = () => {
        if (this.state.startValue < 5) {
            this.setState({
                startValue: this.state.startValue + 1
            })
        }
    }


    onIncClick = () => {
        this.setState({
            startValue: 0
        })
    }


    render = () => {

        let colorNumber = this.state.startValue == 5? 'spanStyle': '';

        return (
            <div className='App'>
                <div className='wrapper-app'>
                    <span className={colorNumber}>{this.state.startValue}</span>
                    <button onClick={this.onButtonClick}>INC</button>
                    <button onClick={this.onIncClick}>Reset</button>
                </div>
            </div>
        );
    }
}

export default App;
