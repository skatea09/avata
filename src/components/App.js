import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import List from './List';
import fetchData from '../redux/actions';

const propTypes = {
  fetchData: PropTypes.func.isRequired,
};

class App extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }
  render() {
    return (
      <div className="App">
        <header className="py-4">
          <p className="font-bold text-5xl text-center">
            The Book
          </p>
          <List />
        </header>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default connect(null, { fetchData })(App);
