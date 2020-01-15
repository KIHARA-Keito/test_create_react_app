import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: this.props.seconds
        };
        window.setInterval(() => {
            this.setState({
                seconds: this.state.seconds -1
            });
        }, 1000);
    }
    render() {
        return (
            <p className>残り時間：{ this.state.seconds }/{ this.props.seconds }</p>
        );
    }
}

export default Timer;
