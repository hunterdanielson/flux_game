import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({ health, attack, defense }) => (
  <dl>
    <dt>Health</dt>
    <dd>{health}</dd>
    <dt>Attack</dt>
    <dd>{attack}</dd>
    <dt>Defense</dt>
    <dd>{defense}</dd>
  </dl>
);

Stats.propTypes = {
  health: PropTypes.number.isRequired,
  attack: PropTypes.number.isRequired,
  defense: PropTypes.number.isRequired
};

export default Stats;
