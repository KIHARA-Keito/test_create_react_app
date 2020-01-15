import React from 'react';
import './Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler() {
    if(typeof this.props.onClickHandler === 'function') {
      this.props.onClickHandler();
      //console.log('ok');
    }
  }
  render() {
    return (
      <span className="Button_container" onClick={this.onClickHandler}>
        { this.props.children }
      </span>
    );
  }
}

export default Button;
