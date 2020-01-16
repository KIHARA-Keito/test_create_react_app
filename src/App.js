import React from 'react';
import Form from './components/Form/Form';
import CommentList from './components/CommentList/CommentList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: ['初期コメント']
    }

    this.addCommetnt = this.addCommetnt.bind(this);
  }

  addCommetnt(comment) {
    this.setState({
      comments: [...this.state.comments,comment]
    });
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.addCommetnt} />
        <CommentList comments={this.state.comments} />
      </div>
    );  
  }
}

export default App;
