import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  result: PropTypes.object.isRequired
};

const Item = ({ result }) => (
  <div className="justify-center border-b py-2">
    <div className="text-center font-semibold pb-1 truncate">{result.title}</div>
    <div className="text-center text-sm">{`by ${result.author || 'Unknown'}`}</div>
  </div>
);

Item.propTypes = propTypes;

export default Item;
