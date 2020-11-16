import React from 'react';
import PropTypes from 'prop-types';
import { TestWrapper } from './Test.styles';

const Test = props => (
  <TestWrapper>
    This is a Test
  </TestWrapper>
);

Test.propTypes = {
  // bla: PropTypes.string,
};

Test.defaultProps = {
  // bla: 'test',
};

export default Test;
