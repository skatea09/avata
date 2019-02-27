import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Dropdown from "react-dropdown";
import Item from "./Item";

const propTypes = {
  topResults: PropTypes.array.isRequired
};

class List extends Component {
  state = { filter: null };
  options = ['all', 'author', 'score', 'title'];
  defaultOption = this.options[0];
  render() {
    const { topResults } = this.props;
    console.log("list", topResults);
    return (
      <div>
        <div className="flex justify-center mt-4">
          <Dropdown
            options={this.options}
            onChange={this._onSelect}
            value={this.defaultOption}
            placeholder="Select an option"
            menuClassName="absolute bg-white pin-l bg-grey-lightest"
            className="border px-2 pt-1 bg-grey-light relative"
          />
          <input type="text" className="border border-l-0" />
        </div>
        {topResults.map(result => <Item result={result} key={result.title} />)}
      </div>
    );
  }
}

List.propTypes = propTypes;

export default connect(state => ({
  topResults: state.topResults
}))(List);
