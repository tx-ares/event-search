import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SearchBar from './searchBar';

import {searchEvents} from '../actions/eventActs';

class SearchView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eventName: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name] : e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();
    const searchQuery = this.state.eventName;

    this.props.searchEvents(searchQuery);
  }

    render() {

      const eventItems = this.props.events.map(event => (
        <div key={event.id}>
          <h3> {event.name} <span className="pull-right">{event.publishers}</span></h3>

          <p> {event.summary} </p>
          </div>
      ));

      return (
      <div>

        <div>

          <SearchBar />
          {eventItems}
        </div>
      </div>
      );
    }
  }

  SearchView.propTypes={
    searchEvents: PropTypes.func.isRequired,
    events: PropTypes.array.isRequired
  }
  const mapStateToProps = state => (
    {
      events: state.events.items
    }
  );

export default connect(mapStateToProps, {searchEvents})(SearchView);
