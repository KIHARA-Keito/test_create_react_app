import React from 'react';
import Btn from '../Btn/Btn';

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return (
            <div className="Counter">
                <p>{ this.state.count }</p>
                <span onClick={() => { this.increment() }}>
                    <Btn>インクリメント</Btn>
                </span>
                <span onClick={() => { this.decrement() }}>
                    <Btn>デクリメント</Btn>
                </span>
            </div>
        );
    }
}

export default Counter;
