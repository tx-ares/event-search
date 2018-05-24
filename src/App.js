import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route} from 'react-router-dom';

//Components
import CustomNavbar from './components/CustomNavBar';
import Posts from './components/posts';
import PostForm from './components/postForm';
import SearchView from './components/views/events/search';
import PostsView from './components/views/posts/posts'

class App extends Component {
  render() {
    return (

        <Router>
           <div>
              <CustomNavbar />
              <Route exact path="/" component={PostsView} />
              <Route path="/search" component={SearchView} />

            </div>
        </Router>


    );
  }
}

export default App;
