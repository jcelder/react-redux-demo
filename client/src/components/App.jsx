import React, { Component } from 'react';
import Display from './Display.jsx';
import Controls from './Controls.jsx';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        };

        this.updateCounter = this.updateCounter.bind(this);
    }

    updateCounter(type) {
        const { counter } = this.state;
        let newCounterVal;

        if (type === 'INCREMENT') newCounterVal = counter + 1;
        else if (type === 'DECREMENT') newCounterVal = counter > 0 ? counter - 1: 0;
        else newCounterVal = 0;
        this.setState({ counter: newCounterVal });
    }

    render() {
        const { updateCounter } = this;
        const { counter } = this.state;
        
        return (
            <div>
                <h1>React Redux Demo</h1>
                <Display counter={counter} />
                <Controls updateCounter={updateCounter} />
            </div>
        );
    }
}

export default App;