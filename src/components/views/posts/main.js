import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { JumboTron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './PostsView.css';

// import { PostForm } from '../../postForm';
import { Posts } from '../../posts';

import EventGallery from '../events/eventGallery';

class PostsView extends Component {
    render() {
        return (
            <div className="App">
              <header className="App-header">
              </header>
              // <PostForm />
              <hr />
              <Posts />
            </div>
        )
    }
}

export default PostsView;
