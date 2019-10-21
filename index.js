import React from 'react';
import {AppRegistry} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import {Provider as PaperProvider} from 'react-native-paper';
import Root from './src/nav';
import {name as appName} from './app.json';
import {reactNativeElementstheme, paperTheme} from './src/config/theme';

const App = () => {
  return (
    <PaperProvider theme={paperTheme}>
      <ThemeProvider theme={reactNativeElementstheme}>
        <Root />
      </ThemeProvider>
    </PaperProvider>
  );
};

AppRegistry.registerComponent(appName, () => App);
