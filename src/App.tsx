import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, LogBox, SafeAreaView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider, useSelector} from 'react-redux';

import {store, persistor} from './redux';

import AppNavigator from './routes';
import {PersistGate} from 'redux-persist/integration/react';

import {theme} from './constants';
import {ThemeProvider} from 'react-native-elements';
import getColorTheme from './helpers/Theme';

LogBox.ignoreAllLogs(true);

const Status = () => {
  const _state = useSelector(state => state.theme.theme);
  const _theme = getColorTheme();

  return (
    <SafeAreaView style={{backgroundColor: _theme.colors.background}}>
      <StatusBar
        barStyle={_state ? 'light-content' : 'dark-content'}
        backgroundColor={_theme.colors.background}
      />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Status />
          <ThemeProvider theme={theme}>
            <AppNavigator />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
