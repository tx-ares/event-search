import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Components
import Posts from './components/posts';
import SearchForm from './components/searchForm';

class App extends Component {
  render() {
    return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <SearchForm />
            <hr />
            <Posts />
          </div>
    );
  }
}

export default App;
