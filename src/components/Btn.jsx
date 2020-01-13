import React from 'react';
import './Btn.css';

class Btn extends React.Component {
    constructor(props){
        super(props);
        this.value = '00000';
    }
    render() {
        return (
            <div className="Btn">
                { this.props.children }{ this.value }
            </div>
        );
    }
}

export default Btn;
