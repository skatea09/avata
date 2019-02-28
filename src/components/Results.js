import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import meanBy from "lodash/meanBy";
import Charts from "./Charts";
import List from "./List";

const propTypes = {
  topResults: PropTypes.array.isRequired,
  avgScore: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

const includesInput = (result, filter, inputValue) => {
  let value = result[filter];
  if (typeof result[filter] === "string") value = result[filter].toLowerCase();
  if (typeof result[filter] === "number") value = result[filter].toString();
  if (value.includes(inputValue)) return true;
};

class Results extends Component {
  render() {
    const { topResults, filter, inputValue, avgScore, options } = this.props;

    // i know this function is really nasty and needs to be refractored
    const filteredResults = topResults.filter(result => {
      if (filter === "all") {
        if (!inputValue) return result;
        const hasIt = options.find(option => {
          if (option.value !== 'all') {
            if (includesInput(result, option.value, inputValue)) return result;
          }
        });
        if (hasIt) return result;
      } else {
        if (includesInput(result, filter, inputValue)) return result;
      }
      return null;
    });
    //

    
    const filteredAvgScore =
      Math.round(meanBy(filteredResults, result => result.review_score)) || 0;
    return (
      <div className="flex flex-col w-full md:flex-row md:w-4/5 md:mx-auto">
        <List filteredResults={filteredResults} />
        <Charts
          avgScore={avgScore}
          totalLength={topResults.length}
          filteredAvgScore={filteredAvgScore}
          filteredLength={filteredResults.length}
        />
      </div>
    );
  }
}

Results.propTypes = propTypes;

export default connect(state => ({
  topResults: state.topResults,
  avgScore: state.avgScore
}))(Results);
