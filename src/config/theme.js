import {Platform} from 'react-native';
import {colors} from 'react-native-elements';
import {DefaultTheme} from 'react-native-paper';

export const reactNativeElementstheme = {
  colors: {
    ...Platform.select({
      default: colors.platform.android,
      ios: colors.platform.ios,
    }),
  },
};

export const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1DA8FA',
    accent: '#24D8A6',
  },
};
