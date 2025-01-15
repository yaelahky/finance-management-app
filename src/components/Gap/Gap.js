import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const Gap = props => {
  const { height, width } = props;

  return <View style={{ height: height, width: width }} />;
};

export default Gap;

Gap.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
};

Gap.defaultProps = {
  height: 0,
  width: 0
};
