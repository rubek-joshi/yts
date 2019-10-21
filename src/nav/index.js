import React from "react";
import {createAppContainer} from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {Transition} from 'react-native-reanimated';

import SplashScreen from '../containers/splash';
import HomeScreen from '../containers/home';

const RootNavigator = createAnimatedSwitchNavigator(
  {
    Splash: SplashScreen,
    Home: HomeScreen,
  },
  {
    // The previous screen will slide to the bottom while the next screen will fade in
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-bottom"
          durationMs={400}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    ),
  },
);

export default createAppContainer(RootNavigator);
