import {Alert, Appearance} from 'react-native';

import {theme as colorSchemes} from '../constants';

import {useSelector} from 'react-redux';

export default function getThemedColors() {
  const system = Appearance.getColorScheme();
  const theme = useSelector(state => state.app.theme);

  const colors = theme ? colorSchemes.dark : colorSchemes[system];

  return colors;
}
