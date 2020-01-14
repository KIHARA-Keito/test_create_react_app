import React, { Component } from 'react';
import PublicPage from './pages/PublicPage/PublicPage';
import PrivatePage from './pages/PrivatePage/PrivatePage';
import './components/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.setState({ isLoggedIn: true });
  }

  logout() {
    this.setState({ isLoggedIn: false });
  }

  render(){
    if (this.state.isLoggedIn) {
      return this.renderPrivatePage();
    }
    return this.renderPublicPage();
  }

  renderPublicPage(){
    return (
      <div>
        <PublicPage />
        <button onClick={this.login}>ログイン</button>
      </div>
    );
  }

  renderPrivatePage(){
    return (
      <div>
        <PrivatePage />
        <button onClick={this.logout}>ログアウト</button>
      </div>
    );
  }
}
export default App;
