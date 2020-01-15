import React, { Component } from 'react';

const API_URL = 'https://opentdb.com/api.php?amount=10';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      data: null
    }
  }

  componentDidMount() {
    this.requestData();
  }

  async requestData() {
    this.setState({
      loading: true
    });

    let quizList;
    try {
      const response = await window.fetch(API_URL);
      const data = await response.json();
      quizList = data.results;
    } catch(error) {
      quizList = null;
    }

    this.setState({
      loading: false,
      data: quizList
    });
  }

  render() {
    return(
      <div className="App">
        { this.renderRequestButton() }
        { this.renderData() }
      </div>
    );
  }

  renderData() {
    if (this.state.loading) {
      return <p>データ取得中...</p>;
    }
    if (!this.state.loading && !this.state.data) {
      return <p>データなし</p>;
    }
    const quizItems = this.state.data.map((quiz,index) => {
      const quizNumber = index + 1
      return(
        <li key={quizNumber}>Q{quizNumber} : {quiz.question}</li>
      );
    });
    return <ul>{ quizItems }</ul>;
  }
  renderRequestButton() {
    if (this.state.loading) {
      return <button disabled>データ取得中...</button>
    }
    return <button onClick={ () => { this.requestData() }}>データを取得する</button>
  }
}

export default App;
