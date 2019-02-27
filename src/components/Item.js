import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  result: PropTypes.object.isRequired,
};

const Item = ({ result }) => (
  <div>{result.title}</div>
);

Item.propTypes = propTypes;

export default Item;
