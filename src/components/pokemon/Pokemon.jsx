import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pokemon.css';

const Pokemon = ({ image }) => (
  <figure className={styles.Pokemon}>
    <img src={image} />
  </figure>
);

Pokemon.propTypes = {
  image: PropTypes.string.isRequired
};

export default Pokemon;
