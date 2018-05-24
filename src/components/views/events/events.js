import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { JumboTron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

import EventGallery from '../eventGallery';

class Home extends Component {
    render() {
        return (
           <Grid>


              <h1> <b>Current Top Games</b> </h1>

              <EventGallery />

           </Grid>
        )
    }
}

export default Home;
