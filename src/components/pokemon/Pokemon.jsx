import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pokemon.css';

const Pokemon = ({ image, name }) => (
  <figure className={styles.Pokemon}>
    <img src={image} />
    <figcaption>{name}</figcaption>
  </figure>
);

Pokemon.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Pokemon;
