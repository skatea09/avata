import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MainView from './MainView';
import { fetchData } from '../redux/actions';

const propTypes = {
  fetchData: PropTypes.func.isRequired,
};

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <div className="App">
        <header className="pt-4 pb-1">
          <p className="font-bold text-5xl text-center">
            The Book
          </p>
        </header>
        <MainView />
      </div>
    );
  }
}

App.propTypes = propTypes;

export default connect(null, { fetchData })(App);
