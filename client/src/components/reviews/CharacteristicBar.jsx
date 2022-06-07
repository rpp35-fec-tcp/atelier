import propTypes from 'prop-types';
import React from 'react';
import './CharacteristicBar.css';

function CharacteristicBar({ value }) {
  return <div className="characteristic-bar">{value}</div>;
}

CharacteristicBar.defaultProps = { value: null };
CharacteristicBar.propTypes = { value: propTypes.number };

export default CharacteristicBar;
