import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import meanBy from "lodash/meanBy";
import Charts from "./Charts";
import Item from "./Item";

const propTypes = {
  topResults: PropTypes.array.isRequired,
  avgScore: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired
};

class List extends Component {
  render() {
    const { topResults, filter, inputValue, avgScore } = this.props;
    const filteredResults = topResults.filter(result => {
      if (filter === "all" || result[filter].toLowerCase().includes(inputValue))
        return result;
      return null;
    });
    const filteredAvgScore =
      Math.round(meanBy(filteredResults, result => result.review_score)) || 0;
    return (
      <div className="flex-col w-full md:flex-row">
        <div className="border-t mt-4 w-4/5 mx-auto">
          {filteredResults.map(result => {
            return <Item result={result} key={result.title} />;
          })}
        </div>
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

List.propTypes = propTypes;

export default connect(state => ({
  topResults: state.topResults,
  avgScore: state.avgScore
}))(List);
