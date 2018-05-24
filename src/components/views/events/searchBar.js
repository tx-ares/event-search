import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchEvents } from '../../../actions/eventActs'

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: '',
      eventName: ''
    }

    this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ eventName : e.target.value })
  }

  // onSubmit(e) {
  //   e.preventDefault();
  //   const searchQuery = this.state.eventName;
  //   console.log(searchQuery)
  //   this.props.searchEvents(searchQuery);
  // }

    render() {

      return (
      <div>
        {/* <form onSubmit={this.onSubmit}> */}
          <input name="eventName" onChange={this.onChange} value={this.state.eventName} />
          <button onClick={()=> this.props.onSearchEvents(this.state.eventName)}> SEARCH </button>
        {/* </form> */}
      </div>
      );
    }
  }

  SearchBar.propTypes= {
    searchEvents: PropTypes.func.isRequired,
  }

  const mapDispatchToProps = dispatch => {
    return {
      onSearchEvents :(eventName) => dispatch(searchEvents(eventName))
    }
  }



export default connect(null, mapDispatchToProps)(SearchBar);
