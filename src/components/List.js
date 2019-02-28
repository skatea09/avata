import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Item from "./Item";

const propTypes = {
  filteredResults: PropTypes.array.isRequired
};

const List = ({ filteredResults }) => (
  <div className="border-t mt-8 w-4/5 mx-auto md:w-full md:mr-8">
    {filteredResults.map(result => {
      return <Item result={result} key={result.title} />;
    })}
  </div>
);

List.propTypes = propTypes;

export default connect(state => ({
  topResults: state.topResults,
  avgScore: state.avgScore
}))(List);
