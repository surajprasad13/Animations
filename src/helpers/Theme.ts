import {useColorScheme} from 'react-native';

import {useSelector} from 'react-redux';

import {theme as colorScheme} from '../constants';

export default function getColorTheme() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scheme = useColorScheme();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useSelector(state => state.theme.theme);
  const colors = theme ? colorScheme.dark : colorScheme[scheme];
  return colors;
}
