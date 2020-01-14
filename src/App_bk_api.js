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

    let firstQiuzData;
    try {
      const response = await window.fetch(API_URL);
      const data = await response.json();
      firstQiuzData = data.results[0];
    } catch(error) {
      firstQiuzData = null;
    }

    this.setState({
      loading: false,
      data: firstQiuzData
    });
  }

  render() {
    return(
      <div className="App">
        { this.renderData() }
        { this.renderRequestButton() }
      </div>
    );
  }

  renderData() {
    if (this.state.loading) {
      return <p>データ取得中...</p>;
    }
    if (this.state.loading && !this.state.data) {
      return <p>データなし</p>;
    }
    return <p>{JSON.stringify( this.state.data )}</p>;
  }
  renderRequestButton() {
    if (this.state.loading) {
      return <button disabled>データ取得中...</button>
    }
    return <button onClick={ () => { this.requestData() }}>データを取得する</button>
  }
}

export default App;
