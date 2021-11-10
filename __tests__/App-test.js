/**
 * @format
 */

import 'react-native';
import React from 'react';
import Camera from '../src/screens/Camera';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.snapShot(<Camera />);
});
